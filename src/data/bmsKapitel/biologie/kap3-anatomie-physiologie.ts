import type { Kapitel } from '../types';

export const bioKap3: Kapitel = {
  id: 'bio-kap3',
  title: "Anatomie & Physiologie",
  subject: 'biologie',
  icon: '🫀',
  estimatedTime: '180 min',
  unterkapitel: [
    {
      id: 'bio-3-01',
      title: "Nervensystem",
      content: `# Nervensystem

## EINLEITUNG

Das **Nervensystem** ist das zentrale Informationsverarbeitungs- und Steuerungssystem des Körpers. Es gliedert sich in **ZNS** (Gehirn + Rückenmark, Informationsverarbeitung) und **PNS** (Spinal-/Hirnnerven, sensorische/motorische Weiterleitung). Das **vegetative Nervensystem** (unwillkürlich) reguliert innere Organe und umfasst **Sympathikus** (fight-or-flight, Noradrenalin, α-/β-Rezeptoren) und **Parasympathikus** (rest-and-digest, Acetylcholin, M2/M3-Rezeptoren). Die **Synapse** ist die funktionelle Kontaktstelle zwischen Neuronen, mit chemischer Übertragung (Neurotransmitter: Glutamat, GABA, Dopamin, Serotonin, Noradrenalin, Acetylcholin). Das **Aktionspotential** (alles-oder-nichts-Prinzip, ~-70 mV → +40 mV) entsteht durch spannungsgesteuerte Na⁺/K⁺-Kanäle. Die **saltatorische Erregungsleitung** (myelinisierte Axone, ~120 m/s) springt von Ranvier-Schnürring zu Ranvier-Schnürring. **Reflexbogen** (Monosynaptisch: Patellarsehnenreflex, Polysynaptisch: Fluchtreflex) ermöglicht schnelle, unbewusste Reaktionen. Für den MedAT ist das Verständnis von ZNS/PNS, Sympathikus/Parasympathikus, Synapse, Aktionspotential und Reflexbogen essentiell.

---

## KERNINHALT

### Gliederung des Nervensystems

**Zentrales Nervensystem (ZNS):**
- **Gehirn** (Cerebrum, Cerebellum, Hirnstamm)
- **Rückenmark** (Medulla spinalis)

**Peripheres Nervensystem (PNS):**
- **Somatisches NS** (willkürlich): Skelettmuskulatur, bewusste Motorik/Sensorik
- **Autonomes (vegetatives) NS** (unwillkürlich): Innere Organe, glatte Muskulatur, Drüsen
  - **Sympathikus** (fight-or-flight)
  - **Parasympathikus** (rest-and-digest)
  - **Enterisches NS** (Darmwand, teilweise autonom)

### Sympathikus vs. Parasympathikus ⭐

| Merkmal | Sympathikus (fight-or-flight) | Parasympathikus (rest-and-digest) |
|---------|-------------------------------|-----------------------------------|
| **Ursprung** | Thorakolumbal (T1-L2, Seitenhorn) | Kraniosakral (Hirnnerven III, VII, IX, X + S2-S4) |
| **Ganglien** | Grenzstrang (paravertebral), prävertebral (Ganglion coeliacum, mesentericum) | Organnnah oder in Organwand |
| **Neurotransmitter** | **Noradrenalin** (postganglionär), Acetylcholin (präganglionär) | **Acetylcholin** (prä- + postganglionär) |
| **Rezeptoren** | α1/α2 (Noradrenalin), β1/β2/β3 (Adrenalin/Noradrenalin) | Nikotinische (Ganglion), Muskarinische (M2, M3, Effektor) |
| **Herz** | ↑ Frequenz (β1, SA-Knoten), ↑ Kontraktilität (β1) | ↓ Frequenz (M2, SA-Knoten, Vagus) |
| **Bronchien** | Bronchodilatation (β2, glatte Muskulatur relaxiert) | Bronchokonstriktion (M3) |
| **Pupille** | Mydriasis (Erweiterung, α1, M. dilatator pupillae) | Miosis (Verengung, M3, M. sphincter pupillae) |
| **Speicheldrüsen** | Wenig, zähflüssiger Speichel (α1) | Viel, dünnflüssiger Speichel (M3) |
| **Magen-Darm** | ↓ Peristaltik (α2, β2), Sphinkter-Kontraktion (α1) | ↑ Peristaltik (M3), Sphinkter-Relaxation |
| **Blase** | Blasenwand-Relaxation (β3), Sphinkter-Kontraktion (α1) → Harnretention | Blasenwand-Kontraktion (M3), Sphinkter-Relaxation → Miktion |
| **Blutgefäße** | Vasokonstriktion (α1, Haut/Splanchnikus), Vasodilatation (β2, Skelettmuskulatur/Herz) | Vasodilatation (NO, M3 in Endothel) |
| **Stoffwechsel** | Glykogenolyse ↑ (β2, Leber), Lipolyse ↑ (β3, Fettgewebe) | Glykogensynthese ↑, Insulinsekretion ↑ |
| **Nebenniere** | Adrenalin-Freisetzung (Nebennierenmark, chromaffine Zellen) | - |

**Beispiele:**

**Sympathikus-Aktivierung (Stress, Gefahr):**
- Herz: ↑ Frequenz + Kontraktilität (β1) → Cardiac Output ↑
- Bronchien: Bronchodilatation (β2) → O₂-Aufnahme ↑
- Pupillen: Mydriasis (α1) → mehr Licht
- Blutgefäße: Vasokonstriktion (α1, Haut/Darm) → Umverteilung zu Skelettmuskulatur/Herz
- Stoffwechsel: Glykogenolyse (β2, Leber) → Glukose ↑, Lipolyse (β3) → freie Fettsäuren ↑
- Nebenniere: Adrenalin-Freisetzung (fight-or-flight verstärkt)
- Magen-Darm: Peristaltik ↓ (α2) → Verdauung pausiert

**Parasympathikus-Aktivierung (Ruhe, Verdauung):**
- Herz: ↓ Frequenz (M2, Vagus) → Energiesparen
- Bronchien: Bronchokonstriktion (M3) → Normalzustand
- Pupillen: Miosis (M3) → Nahakkommodation
- Speicheldrüsen: Speichel ↑ (M3, dünnflüssig) → Verdauung
- Magen-Darm: Peristaltik ↑ (M3), Sekretion ↑ → Verdauung aktiv
- Blase: Miktion (M3, Detrusor kontrahiert, Sphinkter relaxiert)

### Synapse ⭐

**Chemische Synapse (häufigster Typ):**

**Struktur:**
- **Präsynaptisches Neuron:** Axonterminale, synaptische Vesikel (Neurotransmitter), spannungsgesteuerte Ca²⁺-Kanäle (P/Q-Typ, N-Typ)
- **Synaptischer Spalt:** ~20-40 nm
- **Postsynaptisches Neuron:** Rezeptoren (ionotrop oder metabotrop), Dendriten/Soma

**Ablauf (synaptische Transmission):**
1. **Aktionspotential** erreicht Axonterminale (präsynaptisch)
2. **Depolarisation** → spannungsgesteuerte **Ca²⁺-Kanäle öffnen** → Ca²⁺ strömt ein (von ~0.1 μM → ~10-100 μM)
3. Ca²⁺ bindet **Synaptotagmin** (Ca²⁺-Sensor, in Vesikel-Membran)
4. **SNARE-Komplex** (Synaptobrevin/VAMP [Vesikel] + Syntaxin + SNAP-25 [Plasmamembran]) → Vesikel-Fusion
5. **Neurotransmitter-Freisetzung** (Exozytose, Quantal Release: ~1 Vesikel = 1 Quantum = ~5000 Moleküle)
6. **Neurotransmitter** diffundieren durch Spalt → binden **Rezeptoren** (postsynaptisch)
7. **Postsynaptisches Potential:**
   - **Ionotrope Rezeptoren** (ligandengesteuerte Ionenkanäle): Schnell (ms)
     - **EPSP** (Exzitatorisches PSP, Depolarisation): Glutamat → AMPA-/NMDA-Rezeptor → Na⁺/Ca²⁺ rein, Acetylcholin → nikotinischer Rezeptor → Na⁺ rein
     - **IPSP** (Inhibitorisches PSP, Hyperpolarisation): GABA → GABA_A-Rezeptor → Cl⁻ rein, Glycin → Glycin-Rezeptor → Cl⁻ rein
   - **Metabotrope Rezeptoren** (G-Protein-gekoppelt): Langsam (Sekunden-Minuten)
     - Dopamin (D1-D5), Serotonin (5-HT1-7), Noradrenalin (α1/α2, β1/β2), Acetylcholin (M1-M5), Glutamat (mGluR1-8), GABA (GABA_B)
8. **Neurotransmitter-Inaktivierung:**
   - **Wiederaufnahme:** Transporter (SERT [Serotonin], DAT [Dopamin], NET [Noradrenalin], EAAT [Glutamat], GAT [GABA])
   - **Enzymatischer Abbau:** Acetylcholinesterase (Acetylcholin → Acetat + Cholin), MAO (Monoaminoxidase, Dopamin/Noradrenalin/Serotonin), COMT (Catechol-O-Methyltransferase)
   - **Diffusion** aus Spalt

**Wichtige Neurotransmitter:** ⭐

| Neurotransmitter | Rezeptoren | Funktion | Abbau/Wiederaufnahme | Klinisch |
|------------------|------------|----------|----------------------|----------|
| **Glutamat** | AMPA (ionotrop, Na⁺), NMDA (ionotrop, Ca²⁺/Na⁺, Mg²⁺-Block), Kainate, mGluR (metabotrop) | **Exzitatorisch** (ZNS, 90% exzitatorische Synapsen), Lernen/Gedächtnis (LTP) | EAAT (Astrozyten) → Glutamin | Exzitotoxizität (Schlaganfall), NMDA-Rezeptor-Antagonisten (Memantin [Alzheimer], Ketamin [Anästhesie, Antidepressivum]) |
| **GABA** | GABA_A (ionotrop, Cl⁻), GABA_B (metabotrop, K⁺ ↑) | **Inhibitorisch** (ZNS, 20% inhibitorische Synapsen), Angstlösung, Sedierung | GAT (GABA-Transporter) | Benzodiazepine (verstärken GABA_A, Anxiolytika), Barbiturate (GABA_A-Agonisten, Antiepileptika) |
| **Dopamin** | D1/D5 (Gs, cAMP ↑), D2/D3/D4 (Gi, cAMP ↓) | Bewegung (Substantia nigra → Striatum), Belohnung (VTA → Nucleus accumbens), Motivation | DAT (Dopamin-Transporter), MAO, COMT | Parkinson (Dopamin ↓, L-DOPA), Schizophrenie (Dopamin ↑, Antipsychotika [D2-Antagonisten]) |
| **Serotonin (5-HT)** | 5-HT1-7 (meist metabotrop), 5-HT3 (ionotrop) | Stimmung, Schlaf, Appetit, Schmerz, Thermoregulation | SERT (Serotonin-Transporter), MAO | Depression (Serotonin ↓, SSRI [Fluoxetin, Sertralin]), Angst, Migräne (5-HT1B/1D-Agonisten: Triptane) |
| **Noradrenalin** | α1/α2, β1/β2 (alle metabotrop) | Aufmerksamkeit, Wachheit, Sympathikus | NET (Noradrenalin-Transporter), MAO, COMT | ADHS (Noradrenalin ↓, Methylphenidat [NET-Inhibitor]), Depression (SNRI [Venlafaxin]) |
| **Acetylcholin** | Nikotinisch (ionotrop, Na⁺, neuromuskuläre Endplatte, Ganglien), Muskarinisch (M1-M5, metabotrop) | Neuromuskuläre Übertragung, Parasympathikus, Lernen/Gedächtnis | Acetylcholinesterase (→ Acetat + Cholin) | Myasthenia gravis (nikotinische Rezeptor-Antikörper), Alzheimer (Acetylcholin ↓, Donepezil [Cholinesterase-Inhibitor]) |

### Aktionspotential ⭐

**Ruhepotential:** ~-70 mV (Neuronen), ~-90 mV (Skelettmuskulatur)

**Ionen-Verteilung:**
- **Intrazellulär:** K⁺ hoch (~140 mM), Na⁺ niedrig (~12 mM), Cl⁻ niedrig (~4 mM), Proteine⁻ (nicht permeabel)
- **Extrazellulär:** K⁺ niedrig (~4 mM), Na⁺ hoch (~145 mM), Cl⁻ hoch (~120 mM)

**Entstehung Ruhepotential:**
1. **Na⁺/K⁺-ATPase:** 3 Na⁺ raus, 2 K⁺ rein (ATP-abhängig, elektrogen ~-10 mV)
2. **K⁺-Leckkanäle** (immer offen, z.B. Kir2.1): K⁺ strömt aus (Konzentrationsgradient) → Membran negativ
3. **Nernst-Gleichung:** E_K = -90 mV, E_Na = +60 mV
4. **Goldman-Gleichung:** Berücksichtigt Permeabilität aller Ionen → Ruhepotential ~-70 mV

**Aktionspotential-Ablauf:**

1. **Schwellenreizung:** Membran depolarisiert (z.B. EPSP, synaptische Transmission) → Schwellenpotential (~-55 mV) erreicht
2. **Depolarisation (Aufstrich):**
   - **Spannungsgesteuerte Na⁺-Kanäle** (Nav1.1-1.9) öffnen (ab ~-55 mV)
   - Na⁺ strömt ein (Treibkraft: Konzentrationsgradient + Elektrischer Gradient) → Membran depolarisiert schnell
   - **Overshoot:** Membranpotential erreicht ~+40 mV (nahe E_Na = +60 mV)
   - **Alles-oder-Nichts-Prinzip:** Schwelle überschritten → vollständiges Aktionspotential (~100 mV Amplitude), unterschwellig → kein Aktionspotential
3. **Repolarisation (Abstrich):**
   - Na⁺-Kanäle **inaktivieren** (Inaktivierungstor schließt, spannungsabhängig, 1-2 ms)
   - **Spannungsgesteuerte K⁺-Kanäle** (Kv1.1-1.9) öffnen (verzögert, 0.5-1 ms nach Depolarisation)
   - K⁺ strömt aus → Membran repolarisiert (Richtung -70 mV)
4. **Hyperpolarisation (Undershoot):**
   - K⁺-Kanäle bleiben kurz offen → Membran hyperpolarisiert (kurzzeitig < -70 mV, ~-80 mV)
5. **Rückkehr zu Ruhepotential:**
   - K⁺-Kanäle schließen
   - Na⁺/K⁺-ATPase restauriert Ionengradienten (langsam, über viele Aktionspotentiale)

**Refraktärzeit:**
- **Absolute Refraktärzeit:** Na⁺-Kanäle inaktiviert (Inaktivierungstor geschlossen) → KEIN Aktionspotential auslösbar (~1-2 ms)
- **Relative Refraktärzeit:** Na⁺-Kanäle erholen sich (einige geschlossen, einige offen) + K⁺-Kanäle noch offen (Hyperpolarisation) → Aktionspotential nur bei überschwelligem Reiz auslösbar (~3-4 ms)

**Bedeutung:** Begrenzt Aktionspotential-Frequenz (~1000 Hz maximal), verhindert Rückwärtspropagation (Aktionspotential läuft nur vorwärts)

**Weiterleitung:**
- **Unmyelinisiert:** Kontinuierlich (~1 m/s, langsam)
- **Myelinisiert:** **Saltatorisch** (Ranvier-Schnürringe, ~120 m/s, schnell, energieeffizient) ⭐

### Saltatorische Erregungsleitung ⭐

**Siehe Bio Kap 2, UK 4 (Nervengewebe) für Details.**

**Kurzfassung:**
- **Myelinisierte Axone** (Schwann-Zellen [PNS], Oligodendrozyten [ZNS])
- **Ranvier-Schnürringe:** Unmyelinisierte Lücken (~1 μm), hohe Dichte spannungsgesteuerter Na⁺-Kanäle (Nav1.6, ~1000-2000/μm²)
- **Internodien:** Myelinsegmente (~1 mm), elektrische Isolation (Myelin, 80% Lipide) → Ionenverlust minimal
- **Mechanismus:** Aktionspotential an Schnürring → Depolarisation breitet sich passiv (elektrotonisch) durch Internodium → nächster Schnürring depolarisiert → Aktionspotential regeneriert → springt von Schnürring zu Schnürring
- **Vorteile:** Schneller (~120 m/s Aα-Fasern vs. ~1 m/s C-Fasern), energieeffizienter (Na⁺/K⁺-ATPase nur an Schnürringen)

### Reflexbogen ⭐

**Definition:** Unwillkürliche, schnelle, stereotype Reaktion auf Reiz (ohne Bewusstsein).

**Komponenten:**
1. **Rezeptor:** Nimmt Reiz wahr (Dehnung, Schmerz, Temperatur)
2. **Afferente (sensorische) Faser:** Leitet Signal → Rückenmark (Hinterwurzel)
3. **Interneuron (Schaltneuron):** ZNS (Rückenmark, nicht bei monosynaptisch)
4. **Efferente (motorische) Faser:** Motoneuron (Vorderwurzel)
5. **Effektor:** Muskel (Kontraktion)

**Monosynaptischer Reflex (Eigenreflex):** ⭐

**Beispiel: Patellarsehnenreflex (Kniesehnenreflex):**
1. **Stimulus:** Schlag auf Patellarsehne
2. **Rezeptor:** **Muskelspindel** (Dehnungsrezeptor im M. quadriceps femoris)
   - **Ia-Faser** (große myelinisierte Faser, schnell) wird erregt
3. **Afferenz:** Ia-Faser → Hinterwurzel → Rückenmark (L2-L4)
4. **Synapse:** Ia-Faser synapsiert **DIREKT** auf **α-Motoneuron** (EINE Synapse = monosynaptisch)
5. **Efferenz:** α-Motoneuron → Vorderwurzel → M. quadriceps
6. **Effektor:** M. quadriceps kontrahiert → Beinstreckung
7. **Gleichzeitig:** Ia-Faser aktiviert **Interneuron** (inhibitorisch) → hemmt α-Motoneuron des Antagonisten (M. biceps femoris) → **reziproke Hemmung** (Antagonist relaxiert)

**Funktion:** Haltungskontrolle (schnelle Korrektur bei Dehnung)

**Klinisch:** Fehlende Reflexe (Areflexie): Periphere Nervenschädigung (Guillain-Barré, Polyneuropathie), Rückenmarkläsion. Gesteigerte Reflexe (Hyperreflexie): Pyramidenbahnläsion (Schlaganfall, MS), Spastik.

**Polysynaptischer Reflex (Fremdreflex):**

**Beispiel: Fluchtreflex (Beugereflex):**
1. **Stimulus:** Schmerz (Tritt auf Nagel)
2. **Rezeptor:** **Nozizeptoren** (freie Nervenendigungen, Aδ-/C-Fasern)
3. **Afferenz:** Aδ-Faser → Hinterwurzel → Rückenmark
4. **Synapsen (MEHRERE):** Aδ-Faser → Interneuron 1 (exzitatorisch) → α-Motoneuron (Beuger)
   - Gleichzeitig: Interneuron 2 (inhibitorisch) → α-Motoneuron (Strecker) → reziproke Hemmung
   - **Gekreuzte Streckreaktion:** Interneuron 3 (kontralaterales Bein) → Strecker kontrahiert (Gegenbein stützt Körper)
5. **Effektor:** Beugemuskulatur kontrahiert (M. biceps femoris) → Bein wird hochgezogen (weg von Schmerzquelle)

**Funktion:** Schutzreaktion (schnelle Flucht vor Schmerz)

### Klinische Relevanz

**1. Myasthenia gravis:**
- **Autoantikörper gegen nikotinische Acetylcholin-Rezeptoren** (neuromuskuläre Endplatte)
- **Symptome:** Belastungsabhängige Muskelschwäche (Ptosis [Augenlid], Doppelbilder, Dysphagie, Atemnot)
- **Diagnostik:** Tensilon-Test (Edrophonium, kurz wirksamer Cholinesterase-Inhibitor → Acetylcholin ↑ → Symptome bessern), Antikörper (Anti-AChR), EMG (Dekrement bei repetitiver Stimulation)
- **Therapie:** Cholinesterase-Inhibitoren (Pyridostigmin), Immunsuppression (Glukokortikoide, Azathioprin), Thymektomie (bei Thymom)

**2. Parkinson-Krankheit:**
- **Dopamin-Mangel** (Degeneration Substantia nigra, Lewy-Körperchen [α-Synuclein-Aggregate])
- **Symptome:** Tremor (Ruhe, 4-6 Hz, pillrolling), Rigor (Zahnradphänomen), Akinese/Bradykinese (langsame Bewegungen), posturale Instabilität
- **Therapie:** L-DOPA (+ Carbidopa/Benserazid [periphere Decarboxylase-Inhibitoren]), Dopamin-Agonisten (Pramipexol), MAO-B-Inhibitoren (Selegilin), COMT-Inhibitoren (Entacapon)

**3. Depression:**
- **Monoamin-Hypothese:** Serotonin/Noradrenalin/Dopamin ↓
- **Therapie:** SSRI (Fluoxetin, Sertralin, Citalopram), SNRI (Venlafaxin), Trizyklische Antidepressiva (Amitriptylin), MAO-Hemmer (Moclobemid)

**4. Epilepsie:**
- **Exzitations-Inhibitions-Ungleichgewicht:** Glutamat ↑ oder GABA ↓
- **Therapie:** GABA-verstärkend (Valproat, Benzodiazepine), Na⁺-Kanal-Blocker (Carbamazepin, Lamotrigin), Ca²⁺-Kanal-Blocker (Ethosuximid [Absencen])

---

> **🎯 Prüfungsfokus**
> - **Gliederung:** ZNS (Gehirn, Rückenmark), PNS (somatisch [willkürlich], autonom [unwillkürlich: Sympathikus, Parasympathikus]).
> - **Sympathikus:** Thorakolumbal (T1-L2), Noradrenalin (postganglionär), α/β-Rezeptoren. Fight-or-flight: Herz ↑ (β1), Bronchodilatation (β2), Mydriasis (α1), Peristaltik ↓ (α2), Glykogenolyse ↑ (β2).
> - **Parasympathikus:** Kraniosakral (Hirnnerven III/VII/IX/X, S2-S4), Acetylcholin (prä-+postganglionär), M2/M3-Rezeptoren. Rest-and-digest: Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3), Miktion (M3).
> - **Synapse:** Präsynaptisch (Vesikel, Ca²⁺-Kanäle, SNARE [Synaptobrevin, Syntaxin, SNAP-25]) → Neurotransmitter-Freisetzung (Quantal Release) → Postsynaptisch (Rezeptoren: ionotrop [AMPA, NMDA, GABA_A, nikotinisch], metabotrop [D1/D2, 5-HT, α/β, M1-M5]). EPSP (Depolarisation, Glutamat/Acetylcholin) vs. IPSP (Hyperpolarisation, GABA/Glycin).
> - **Neurotransmitter:** Glutamat (exzitatorisch, AMPA/NMDA, Exzitotoxizität), GABA (inhibitorisch, GABA_A [Cl⁻], Benzodiazepine), Dopamin (Bewegung/Belohnung, D1/D2, Parkinson/Schizophrenie), Serotonin (Stimmung, 5-HT, Depression/SSRI), Noradrenalin (Aufmerksamkeit, α/β, ADHS), Acetylcholin (neuromuskulär, nikotinisch/muskarinisch, Myasthenia gravis).
> - **Aktionspotential:** Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase, K⁺-Leckkanäle). Schwelle ~-55 mV → Na⁺-Kanäle öffnen → Depolarisation (+40 mV) → Na⁺-Kanäle inaktivieren, K⁺-Kanäle öffnen → Repolarisation → Hyperpolarisation. Refraktärzeit (absolut/relativ). Alles-oder-Nichts-Prinzip.
> - **Saltatorische Leitung:** Myelinisierte Axone (Ranvier-Schnürringe [Na⁺-Kanäle ↑↑↑], Internodien [Myelin, Isolation]) → Aktionspotential springt → schnell (~120 m/s vs. ~1 m/s unmyelinisiert), energieeffizient.
> - **Reflexbogen:** Rezeptor → afferente Faser → (Interneuron) → efferente Faser (Motoneuron) → Effektor. Monosynaptisch (Patellarsehnenreflex: Muskelspindel → Ia-Faser → α-Motoneuron → Quadriceps, reziproke Hemmung). Polysynaptisch (Fluchtreflex: Nozizeptor → Interneurone → Beuger kontrahiert, Strecker gehemmt).

---

## MERKSÄTZE

>>>> **Merke:** **Sympathikus** (fight-or-flight, thorakolumbal [T1-L2], Noradrenalin, α/β-Rezeptoren): Herz ↑ (β1, Frequenz/Kontraktilität), Bronchodilatation (β2), Mydriasis (α1, Pupille), Peristaltik ↓ (α2), Glykogenolyse ↑ (β2), Lipolyse ↑ (β3). **Parasympathikus** (rest-and-digest, kraniosakral [Hirnnerven III/VII/IX/X, S2-S4], Acetylcholin, M2/M3): Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3), Miktion (M3).

>>>> **Merke:** **Synapse:** Präsynaptisch (Ca²⁺-Kanäle, SNARE [Synaptobrevin + Syntaxin + SNAP-25], Synaptotagmin [Ca²⁺-Sensor]) → Vesikel-Fusion → Neurotransmitter-Freisetzung (Quantal Release) → Postsynaptisch (ionotrop [AMPA, NMDA, GABA_A, nikotinisch], metabotrop [D1/D2, 5-HT, α/β, M1-M5]). **EPSP** (Depolarisation, Glutamat/Acetylcholin) vs. **IPSP** (Hyperpolarisation, GABA/Glycin).

>>>> **Merke:** **Aktionspotential:** Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase [3 Na⁺ raus, 2 K⁺ rein], K⁺-Leckkanäle). Schwelle ~-55 mV → **Na⁺-Kanäle öffnen** (Depolarisation +40 mV) → Na⁺-Kanäle **inaktivieren** (Inaktivierungstor) + **K⁺-Kanäle öffnen** (Repolarisation) → Hyperpolarisation. **Refraktärzeit:** Absolut (Na⁺-Kanäle inaktiviert, KEIN AP) + relativ (Na⁺-Kanäle erholen, K⁺-Kanäle offen, überschwellig). **Alles-oder-Nichts-Prinzip** (Schwelle überschritten → volles AP).

>>>> **Merke:** **Saltatorische Erregungsleitung** (myelinisierte Axone): **Ranvier-Schnürringe** (unmyelinisiert, ~1 μm, Na⁺-Kanäle ↑↑↑ [Nav1.6]) → Aktionspotential regeneriert. **Internodien** (~1 mm, Myelin [80% Lipide], Isolation) → Depolarisation breitet sich passiv aus (elektrotonisch, kein Ionenverlust). Aktionspotential **springt** von Schnürring zu Schnürring → schnell (~120 m/s vs. ~1 m/s unmyelinisiert), energieeffizient (Na⁺/K⁺-ATPase nur an Schnürringen).

---

**Geschätzte Lesezeit:** 16 Minuten
**Stichwortliste-Coverage:** 10/10 ✅
**Priorität:** HOCH
`,
      lernziele: [],
      sections: [],
      merksätze: [
        "**Sympathikus** (fight-or-flight, thorakolumbal [T1-L2], Noradrenalin, α/β-Rezeptoren): Herz ↑ (β1, Frequenz/Kontraktilität), Bronchodilatation (β2), Mydriasis (α1, Pupille), Peristaltik ↓ (α2), Glykogenolyse ↑ (β2), Lipolyse ↑ (β3). **Parasympathikus** (rest-and-digest, kraniosakral [Hirnnerven III/VII/IX/X, S2-S4], Acetylcholin, M2/M3): Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3), Miktion (M3).",
        "**Synapse:** Präsynaptisch (Ca²⁺-Kanäle, SNARE [Synaptobrevin + Syntaxin + SNAP-25], Synaptotagmin [Ca²⁺-Sensor]) → Vesikel-Fusion → Neurotransmitter-Freisetzung (Quantal Release) → Postsynaptisch (ionotrop [AMPA, NMDA, GABA_A, nikotinisch], metabotrop [D1/D2, 5-HT, α/β, M1-M5]). **EPSP** (Depolarisation, Glutamat/Acetylcholin) vs. **IPSP** (Hyperpolarisation, GABA/Glycin).",
        "**Aktionspotential:** Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase [3 Na⁺ raus, 2 K⁺ rein], K⁺-Leckkanäle). Schwelle ~-55 mV → **Na⁺-Kanäle öffnen** (Depolarisation +40 mV) → Na⁺-Kanäle **inaktivieren** (Inaktivierungstor) + **K⁺-Kanäle öffnen** (Repolarisation) → Hyperpolarisation. **Refraktärzeit:** Absolut (Na⁺-Kanäle inaktiviert, KEIN AP) + relativ (Na⁺-Kanäle erholen, K⁺-Kanäle offen, überschwellig). **Alles-oder-Nichts-Prinzip** (Schwelle überschritten → volles AP).",
        "**Saltatorische Erregungsleitung** (myelinisierte Axone): **Ranvier-Schnürringe** (unmyelinisiert, ~1 μm, Na⁺-Kanäle ↑↑↑ [Nav1.6]) → Aktionspotential regeneriert. **Internodien** (~1 mm, Myelin [80% Lipide], Isolation) → Depolarisation breitet sich passiv aus (elektrotonisch, kein Ionenverlust). Aktionspotential **springt** von Schnürring zu Schnürring → schnell (~120 m/s vs. ~1 m/s unmyelinisiert), energieeffizient (Na⁺/K⁺-ATPase nur an Schnürringen)."
      ],
      selfTest: [
        {
          question: "Was sind die Hauptunterschiede zwischen Sympathikus und Parasympathikus?",
          options: [
          "Beide sind identisch",
          "Sympathikus (fight-or-flight): Thorakolumbal (T1-L2), Noradrenalin (postganglionär), α/β-Rezeptoren, Herz ↑ (β1), Bronchodilatation (β2), Mydriasis (α1), Peristaltik ↓ (α2). Parasympathikus (rest-and-digest): Kraniosakral (Hirnnerven III/VII/IX/X, S2-S4), Acetylcholin (prä+postganglionär), M2/M3-Rezeptoren, Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3)",
          "Nur Sympathikus existiert",
          "Parasympathikus nutzt Noradrenalin",
          "Beide steigern Herzfrequenz"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **SYMPATHIKUS** und **PARASYMPATHIKUS** sind antagonistische Systeme des autonomen Nervensystems (unwillkürlich, innere Organe). **SYMPATHIKUS (fight-or-flight):** (1) **URSPRUNG:** Thorakolumbal (Seitenhorn, T1-L2). (2) **GANGLIEN:** Grenzstrang (paravertebral, entlang Wirbelsäule) + prävertebral (Ganglion coeliacum, mesentericum superius/inferius). (3) **NEUROTRANSMITTER:** **Noradrenalin** (postganglionär, an Effektor), **Acetylcholin** (präganglionär, im Ganglion, nikotinische Rezeptoren). (4) **REZEPTOREN (Effektor):** **α1** (Gq, Vasokonstriktion, Mydriasis), **α2** (Gi, Peristaltik ↓), **β1** (Gs, Herz: Frequenz ↑, Kontraktilität ↑), **β2** (Gs, Bronchodilatation, Vasodilatation Skelettmuskulatur, Glykogenolyse Leber), **β3** (Gs, Lipolyse Fettgewebe). (5) **EFFEKTE:** Herz ↑ (β1, SA-Knoten), Bronchodilatation (β2, glatte Muskulatur relaxiert), Mydriasis (α1, M. dilatator pupillae), Peristaltik ↓ (α2, β2), Sphinkter-Kontraktion (α1, Blase/Darm), Vasokonstriktion (α1, Haut/Splanchnikus), Glykogenolyse ↑ (β2, Leber → Glukose), Lipolyse ↑ (β3, Fettgewebe → freie Fettsäuren), Adrenalin-Freisetzung (Nebennierenmark, chromaffine Zellen). **PARASYMPATHIKUS (rest-and-digest):** (1) **URSPRUNG:** Kraniosakral (Hirnnerven III [N. oculomotorius, Pupille], VII [N. facialis, Speichel-/Tränendrüsen], IX [N. glossopharyngeus, Parotis], **X [N. vagus, Herz/Lunge/Magen-Darm bis linke Kolonflexur]**, + S2-S4 [Blase, Rektum, Genitalien]). (2) **GANGLIEN:** Organnah oder in Organwand (z.B. Plexus myentericus [Meissner, Auerbach], Ganglion ciliare). (3) **NEUROTRANSMITTER:** **Acetylcholin** (prä- + postganglionär). (4) **REZEPTOREN (Effektor):** **M2** (Gi, Herz: Frequenz ↓, SA-Knoten, K⁺-Kanäle ↑, cAMP ↓), **M3** (Gq, Bronchien: Konstriktion, Speicheldrüsen: Sekretion ↑, Magen-Darm: Peristaltik ↑, Blase: Miktion [Detrusor kontrahiert], Pupille: Miosis [M. sphincter pupillae]). (5) **EFFEKTE:** Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3, Nahakkommodation), Speichelsekretion ↑ (M3, dünnflüssig), Peristaltik ↑ (M3), Miktion (M3), Insulinsekretion ↑ (M3, Pankreas-β-Zellen). A ist falsch. C, D, E sind falsch.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie funktioniert die synaptische Transmission an einer chemischen Synapse?",
          options: [
          "Synapse funktioniert ohne Neurotransmitter",
          "Aktionspotential → Axonterminale → Ca²⁺-Kanäle öffnen (P/Q-Typ, N-Typ) → Ca²⁺ rein → Synaptotagmin (Ca²⁺-Sensor) bindet Ca²⁺ → SNARE-Komplex (Synaptobrevin + Syntaxin + SNAP-25) → Vesikel-Fusion → Neurotransmitter-Freisetzung (Exozytose, Quantal Release) → Rezeptoren (ionotrop [AMPA, NMDA, GABA_A, nikotinisch] oder metabotrop [D1/D2, 5-HT, α/β, M1-M5]) → EPSP (Depolarisation) oder IPSP (Hyperpolarisation)",
          "Synapse ist nur in Bakterien",
          "Synapse benötigt kein Ca²⁺",
          "Synapse ist elektrisch"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **CHEMISCHE SYNAPSE** überträgt Signale via Neurotransmitter (häufigster Typ, im Gegensatz zu elektrischer Synapse [Gap Junctions, selten, z.B. Herzmuskel]). **ABLAUF (synaptische Transmission):** (1) **AKTIONSPOTENTIAL** erreicht präsynaptisches **Axonterminale** (Depolarisation). (2) Spannungsgesteuerte **CA²⁺-KANÄLE öffnen** (P/Q-Typ [Ca_v2.1, häufigste in ZNS-Synapsen], N-Typ [Ca_v2.2, PNS], L-Typ [Ca_v1.x, Herz]). (3) **Ca²⁺ strömt ein** (von ~0.1 μM → ~10-100 μM, hochgradig lokalisiert an aktiven Zonen). (4) Ca²⁺ bindet **SYNAPTOTAGMIN** (Ca²⁺-Sensor, Protein in Vesikel-Membran, bindet 5 Ca²⁺). (5) **SNARE-KOMPLEX** (v-SNARE [Vesikel]: **Synaptobrevin/VAMP** + t-SNARE [Plasmamembran]: **Syntaxin** + **SNAP-25**) → Reißverschluss-Mechanismus → Membranen fusionieren. (6) **NEUROTRANSMITTER-FREISETZUNG** (Exozytose, **Quantal Release**: 1 Vesikel = 1 Quantum = ~5000 Moleküle). (7) Neurotransmitter diffundieren durch **synaptischen Spalt** (~20-40 nm, ~0.5 ms). (8) Binden **POSTSYNAPTISCHE REZEPTOREN:** (a) **IONOTROPE REZEPTOREN** (ligandengesteuerte Ionenkanäle, SCHNELL [ms]): **AMPA** (Glutamat → Na⁺/K⁺, Depolarisation), **NMDA** (Glutamat → Na⁺/Ca²⁺, Mg²⁺-Block bei -70 mV), **GABA_A** (GABA → Cl⁻, Hyperpolarisation), **nikotinisch** (Acetylcholin → Na⁺, neuromuskuläre Endplatte). (b) **METABOTROPE REZEPTOREN** (G-Protein-gekoppelt, LANGSAM [Sekunden-Minuten]): **D1/D2** (Dopamin), **5-HT1-7** (Serotonin), **α1/α2, β1/β2** (Noradrenalin), **M1-M5** (Acetylcholin). (9) **POSTSYNAPTISCHES POTENTIAL:** **EPSP** (Exzitatorisches PSP, Depolarisation, Schwelle näher) ODER **IPSP** (Inhibitorisches PSP, Hyperpolarisation, Schwelle ferner). Summation: Temporal (zeitlich) + Spatial (räumlich) → Schwelle (-55 mV) überschritten → Aktionspotential. (10) **NEUROTRANSMITTER-INAKTIVIERUNG:** Wiederaufnahme (SERT, DAT, NET, EAAT, GAT), enzymatischer Abbau (Acetylcholinesterase, MAO, COMT), Diffusion. **KLINISCH:** Botulinustoxin (spaltet SNARE → KEINE Vesikel-Fusion → Muskelparalyse), Tetanospasmin (hemmt GABA/Glycin-Freisetzung → Dauererregung → Krämpfe). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Neurotransmitter sind exzitatorisch und welche inhibitorisch im ZNS?",
          options: [
          "Alle Neurotransmitter sind exzitatorisch",
          "Exzitatorisch: Glutamat (AMPA [Na⁺], NMDA [Ca²⁺/Na⁺, Mg²⁺-Block], Kainate, ~90% exzitatorische Synapsen, Lernen/LTP). Inhibitorisch: GABA (GABA_A [Cl⁻], GABA_B [K⁺ ↑], ~20% inhibitorische Synapsen, Benzodiazepine verstärken), Glycin (Glycin-Rezeptor [Cl⁻], Rückenmark/Hirnstamm, Strychnin blockiert)",
          "Nur Glutamat existiert",
          "GABA ist exzitatorisch",
          "Glycin ist nur in Bakterien"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: Neurotransmitter im ZNS sind entweder **EXZITATORISCH** (Depolarisation, EPSP, Aktionspotential-Wahrscheinlichkeit ↑) oder **INHIBITORISCH** (Hyperpolarisation, IPSP, Aktionspotential-Wahrscheinlichkeit ↓). **EXZITATORISCH: GLUTAMAT** (häufigster exzitatorischer Neurotransmitter, ~90% aller exzitatorischen Synapsen im ZNS). **Rezeptoren:** (1) **AMPA-Rezeptor** (ionotrop, ligandengesteuert): Glutamat → **Na⁺ rein, K⁺ raus** → Depolarisation (schnell, ms) → EPSP. (2) **NMDA-Rezeptor** (ionotrop): Glutamat + **Glycin** (Ko-Agonist, Glycin-Bindungsstelle) → **Na⁺/Ca²⁺ rein** → Depolarisation. **Mg²⁺-Block** (bei Ruhepotential -70 mV blockiert Mg²⁺ Kanal, wird bei Depolarisation [~-40 mV] entfernt) → Koinzidenzdetektor (erfordert Depolarisation [AMPA] + Glutamat [präsynaptisch]). Ca²⁺-Einstrom → **LTP** (Long-Term Potentiation, synaptische Plastizität, Lernen/Gedächtnis). (3) **Kainate-Rezeptor** (ionotrop, Na⁺). (4) **mGluR** (metabotrop, mGluR1-8, G-Protein-gekoppelt). **Wiederaufnahme:** **EAAT1/2** (Excitatory Amino Acid Transporter, Astrozyten) → Glutamin-Synthetase (Glutamat → Glutamin) → Glutamin zu Neuronen (Glutaminase → Glutamat) → Glutamat-Glutamin-Zyklus. **KLINISCH:** Exzitotoxizität (Schlaganfall, Ischämie → Glutamat ↑ → NMDA-Rezeptor-Überaktivierung → Ca²⁺-Überladung → Neuronen-Tod), Memantin (NMDA-Rezeptor-Antagonist, Alzheimer), Ketamin (NMDA-Antagonist, Anästhesie, Antidepressivum). **INHIBITORISCH: GABA (γ-Aminobuttersäure) + GLYCIN.** (1) **GABA** (~20% aller Synapsen im ZNS, Interneurone, Cortex, Basalganglien). **Rezeptoren:** **GABA_A** (ionotrop, ligandengesteuert): GABA → **Cl⁻ rein** → Hyperpolarisation (IPSP). **Benzodiazepine** (Diazepam, Lorazepam) binden allosterische Stelle → verstärken GABA-Wirkung (Anxiolytika, Sedierung, Antikonvulsiva). **Barbiturate** (Phenobarbital) = GABA_A-Agonisten (längere Kanalöffnung). **GABA_B** (metabotrop, Gi): K⁺-Kanäle ↑ → Hyperpolarisation. **Wiederaufnahme:** **GAT** (GABA-Transporter). **Synthese:** Glutamat + Glutamat-Decarboxylase (GAD, Vitamin B6-abhängig) → GABA. (2) **GLYCIN** (häufigster inhibitorischer Neurotransmitter in Rückenmark/Hirnstamm). **Rezeptor:** Glycin-Rezeptor (ionotrop, Cl⁻) → Hyperpolarisation. **STRYCHNIN** (Gift) blockiert Glycin-Rezeptor → KEINE Inhibition → Krämpfe (Tetanus-ähnlich). **KLINISCH:** Epilepsie (GABA ↓ → Exzitations-Inhibitions-Ungleichgewicht → Anfälle, Therapie: Valproat [GABA ↑], Benzodiazepine), Angststörungen (GABA ↓, Benzodiazepine), Tetanus/Strychnin (Glycin-Blockade → Dauererregung). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was passiert während eines Aktionspotentials auf molekularer Ebene?",
          options: [
          "Aktionspotential ist nur in Gliazellen",
          "Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase [3 Na⁺ raus, 2 K⁺ rein], K⁺-Leckkanäle). Schwelle ~-55 mV → spannungsgesteuerte Na⁺-Kanäle öffnen (Nav1.x) → Na⁺ rein → Depolarisation (+40 mV, Overshoot) → Na⁺-Kanäle inaktivieren (Inaktivierungstor) + K⁺-Kanäle öffnen (Kv1.x, verzögert) → K⁺ raus → Repolarisation (-70 mV) → Hyperpolarisation (~-80 mV, K⁺-Kanäle offen) → Ruhepotential. Refraktärzeit (absolut [Na⁺ inaktiviert], relativ [Na⁺ erholen, K⁺ offen]). Alles-oder-Nichts-Prinzip",
          "Aktionspotential benötigt kein Na⁺",
          "Aktionspotential ist nur in Pflanzen",
          "Aktionspotential ist graduiert"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **AKTIONSPOTENTIAL** ist eine schnelle, vorübergehende Depolarisation der Membran (alles-oder-nichts-Prinzip), Grundlage der Informationsweiterleitung in Neuronen. **RUHEPOTENTIAL (~-70 mV):** (1) **Na⁺/K⁺-ATPase:** 3 Na⁺ raus, 2 K⁺ rein (ATP-abhängig, elektrogen ~-10 mV). (2) **K⁺-Leckkanäle** (Kir2.1, immer offen): K⁺ strömt aus (Konzentrationsgradient: innen 140 mM, außen 4 mM) → Membran negativ. (3) Nernst-Gleichung: E_K = -90 mV (K⁺-Gleichgewichtspotential), E_Na = +60 mV (Na⁺-Gleichgewichtspotential). (4) Goldman-Gleichung (berücksichtigt Permeabilität aller Ionen) → Ruhepotential ~-70 mV. **AKTIONSPOTENTIAL-ABLAUF:** (1) **SCHWELLENREIZUNG:** Membran depolarisiert (z.B. EPSP, synaptische Transmission) → **Schwellenpotential** (~-55 mV) erreicht. (2) **DEPOLARISATION (Aufstrich):** **Spannungsgesteuerte Na⁺-Kanäle** (Nav1.1-1.9, Aktivierungstor öffnet ab ~-55 mV) → Na⁺ strömt ein (Treibkraft: Konzentrationsgradient [außen 145 mM, innen 12 mM] + elektrischer Gradient [innen negativ]) → Membran depolarisiert SCHNELL (~1 ms) → **Overshoot** (~+40 mV, nahe E_Na = +60 mV). **Alles-oder-Nichts-Prinzip:** Schwelle überschritten → vollständiges AP (~100 mV Amplitude), unterschwellig → kein AP. (3) **REPOLARISATION (Abstrich):** (a) **Na⁺-Kanäle INAKTIVIEREN** (Inaktivierungstor schließt, spannungsabhängig, ~1-2 ms nach Öffnung). (b) **Spannungsgesteuerte K⁺-Kanäle** (Kv1.1-1.9) öffnen (verzögert, ~0.5-1 ms nach Depolarisation). (c) K⁺ strömt aus → Membran repolarisiert (Richtung -70 mV, ~2 ms). (4) **HYPERPOLARISATION (Undershoot):** K⁺-Kanäle bleiben kurz offen → Membran hyperpolarisiert (kurzzeitig < -70 mV, ~-80 mV, ~2-4 ms). (5) **RÜCKKEHR zu Ruhepotential:** K⁺-Kanäle schließen → Ruhepotential -70 mV (Na⁺/K⁺-ATPase restauriert Gradienten langsam, über viele APs). **REFRAKTÄRZEIT:** (1) **ABSOLUT** (~1-2 ms): Na⁺-Kanäle inaktiviert (Inaktivierungstor geschlossen) → KEIN AP auslösbar. (2) **RELATIV** (~3-4 ms): Na⁺-Kanäle erholen sich (einige offen) + K⁺-Kanäle noch offen (Hyperpolarisation) → AP nur bei überschwelligem Reiz auslösbar. **BEDEUTUNG:** Begrenzt AP-Frequenz (~1000 Hz maximal), verhindert Rückwärtspropagation (AP läuft nur vorwärts). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Was ist ein monosynaptischer Reflex und wie unterscheidet er sich von einem polysynaptischen Reflex?",
          options: [
          "Beide sind identisch",
          "Monosynaptischer Reflex (Eigenreflex, z.B. Patellarsehnenreflex): Rezeptor (Muskelspindel) → Ia-Faser → DIREKT α-Motoneuron (EINE Synapse) → Effektor (Quadriceps kontrahiert), reziproke Hemmung (Interneuron → Antagonist gehemmt). Polysynaptischer Reflex (Fremdreflex, z.B. Fluchtreflex): Rezeptor (Nozizeptor) → MEHRERE Synapsen (Interneurone [exzitatorisch + inhibitorisch]) → α-Motoneuron → Effektor (Beuger kontrahiert, Strecker gehemmt, gekreuzte Streckreaktion)",
          "Nur monosynaptische Reflexe existieren",
          "Polysynaptische Reflexe haben keine Interneurone",
          "Beide benötigen Bewusstsein"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: Reflexbogen-Typen unterscheiden sich in Anzahl der Synapsen (1 vs. mehrere) und Komplexität. **MONOSYNAPTISCHER REFLEX (Eigenreflex, Dehnungsreflex):** **EINE SYNAPSE** zwischen sensorischem Neuron und Motoneuron (einfachster Reflex). **Beispiel: PATELLARSEHNENREFLEX (Kniesehnenreflex):** (1) **STIMULUS:** Schlag auf Patellarsehne (unterhalb Kniescheibe). (2) **REZEPTOR:** **Muskelspindel** (Dehnungsrezeptor im M. quadriceps femoris, intrafusale Muskelfasern mit Ia-Faser-Innervation). Dehnung → Ia-Faser erregt. (3) **AFFERENZ:** **Ia-Faser** (große myelinisierte Faser, ~120 m/s, schnellste) → Hinterwurzel (Spinalganglion) → Rückenmark (L2-L4). (4) **SYNAPSE (EINE!):** Ia-Faser synapsiert **DIREKT** auf **α-Motoneuron** (im Vorderhorn, KEINE Interneurone dazwischen) → monosynaptisch. (5) **EFFERENZ:** α-Motoneuron → Vorderwurzel → N. femoralis → M. quadriceps. (6) **EFFEKTOR:** M. quadriceps **kontrahiert** → Beinstreckung (kick). (7) **GLEICHZEITIG (reziproke Hemmung):** Ia-Faser aktiviert **Interneuron (Ia-Interneuron, inhibitorisch)** → hemmt α-Motoneuron des **Antagonisten** (M. biceps femoris [Beuger]) → Antagonist relaxiert (verhindert Widerstand). **FUNKTION:** Haltungskontrolle (schnelle Korrektur bei Dehnung, propriozeptive Rückkopplung), Muskeltonus-Aufrechterhaltung. **KLINISCH:** Areflexie (fehlende Reflexe): Periphere Nervenschädigung (Ia-Faser, α-Motoneuron), Rückenmarkläsion (Hinterwurzel), Guillain-Barré. Hyperreflexie (gesteigerte Reflexe): Pyramidenbahnläsion (Schlaganfall, MS, obere Motoneurone geschädigt → keine Hemmung → α-Motoneurone überaktiv), Spastik. **POLYSYNAPTISCHER REFLEX (Fremdreflex, Schutzreflex):** **MEHRERE SYNAPSEN** (Interneurone eingeschaltet) → komplexer. **Beispiel: FLUCHTREFLEX (Beugereflex, Schmerzreflex):** (1) **STIMULUS:** Schmerz (Tritt auf Nagel). (2) **REZEPTOR:** **Nozizeptoren** (freie Nervenendigungen, Aδ-Fasern [schneller Schmerz, myelinisiert, ~20 m/s] + C-Fasern [langsamer Schmerz, unmyelinisiert, ~1 m/s]). (3) **AFFERENZ:** Aδ-/C-Faser → Hinterwurzel → Rückenmark (Hinterhorn). (4) **SYNAPSEN (MEHRERE!):** (a) Aδ-Faser → **Interneuron 1 (exzitatorisch)** → α-Motoneuron (Beugemuskulatur). (b) Aδ-Faser → **Interneuron 2 (inhibitorisch)** → α-Motoneuron (Streckmuskulatur) → reziproke Hemmung (Strecker relaxiert). (c) **Gekreuzte Streckreaktion:** Aδ-Faser → **Interneuron 3 (kontralaterales Bein, kommissural)** → α-Motoneuron (Strecker kontralateral) → Gegenbein streckt (stützt Körper, verhindert Umfallen). (5) **EFFEKTOR:** Beugemuskulatur kontrahiert (M. biceps femoris, M. semitendinosus, M. semimembranosus) → Bein wird **hochgezogen** (weg von Schmerzquelle). **FUNKTION:** Schutzreaktion (schnelle Flucht vor Schmerz/Verletzung). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Neurotransmitter und Rezeptoren sind bei Sympathikus und Parasympathikus beteiligt?",
          options: [
          "Beide nutzen nur Noradrenalin",
          "Sympathikus: Präganglionär (Acetylcholin → nikotinische Rezeptoren [Ganglion]), Postganglionär (Noradrenalin → α1/α2/β1/β2/β3 [Effektor]), Nebennierenmark (Acetylcholin → Adrenalin-Freisetzung). Parasympathikus: Präganglionär (Acetylcholin → nikotinische Rezeptoren [Ganglion]), Postganglionär (Acetylcholin → muskarinische Rezeptoren [M2: Herz ↓, M3: Bronchien/Darm/Blase/Pupille/Speicheldrüsen])",
          "Sympathikus nutzt nur Acetylcholin",
          "Parasympathikus nutzt Noradrenalin",
          "Beide nutzen Dopamin"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **SYMPATHIKUS** und **PARASYMPATHIKUS** nutzen unterschiedliche Neurotransmitter/Rezeptoren, besonders **POSTGANGLIONÄR** (an Effektor-Organen). **SYMPATHIKUS:** (1) **PRÄGANGLIONÄR** (Seitenhorn T1-L2 → Ganglion): **Acetylcholin** → **nikotinische Rezeptoren** (ionotrop, Na⁺-Kanäle, ligandengesteuert, schnelle Erregung). Ganglien: Grenzstrang (paravertebral, entlang Wirbelsäule) + prävertebral (Ganglion coeliacum, mesentericum). (2) **POSTGANGLIONÄR** (Ganglion → Effektor-Organ): **NORADRENALIN** (Ausnahme: Schweißdrüsen [ekkrines: Acetylcholin → M3], Nebennierenmark). **Rezeptoren (Effektor):** (a) **α1-Rezeptoren** (Gq → IP₃ → Ca²⁺ ↑): **Vasokonstriktion** (glatte Muskulatur Arterien/Venen, Haut/Splanchnikus), **Mydriasis** (M. dilatator pupillae), Sphinkter-Kontraktion (Blase, Darm), Uterus-Kontraktion (schwanger). (b) **α2-Rezeptoren** (Gi → cAMP ↓): Peristaltik ↓ (Darm, präsynaptisch auch negative Rückkopplung [Noradrenalin-Freisetzung ↓]). (c) **β1-Rezeptoren** (Gs → cAMP ↑): **Herz** (Frequenz ↑ [SA-Knoten], Kontraktilität ↑ [Ventrikel], AV-Knoten-Leitung ↑), Renin-Freisetzung ↑ (Niere). (d) **β2-Rezeptoren** (Gs → cAMP ↑): **Bronchodilatation** (glatte Muskulatur Bronchien relaxiert), **Vasodilatation** (Skelettmuskulatur, Herz, Koronararterien), **Glykogenolyse ↑** (Leber → Glukose), Uterus-Relaxation (nicht-schwanger), Tremor (Skelettmuskulatur). (e) **β3-Rezeptoren** (Gs → cAMP ↑): **Lipolyse ↑** (Fettgewebe → freie Fettsäuren), Blasenwand-Relaxation (Detrusor). (3) **NEBENNIERENMARK (chromaffine Zellen):** Präganglionäre sympathische Fasern (Acetylcholin → nikotinische Rezeptoren) → **Adrenalin-Freisetzung** (80%) + Noradrenalin (20%) → systemische Wirkung (verstärkt Sympathikus-Effekte, Adrenalin bindet β1/β2 >> α). **PARASYMPATHIKUS:** (1) **PRÄGANGLIONÄR** (Hirnnerven III/VII/IX/X + S2-S4 → Ganglion): **Acetylcholin** → **nikotinische Rezeptoren** (wie Sympathikus im Ganglion). Ganglien: Organnah (z.B. Ganglion ciliare [Pupille], Ganglion submandibulare [Speicheldrüsen]) oder in Organwand (Plexus myentericus [Meissner, Auerbach]). (2) **POSTGANGLIONÄR** (Ganglion → Effektor-Organ): **ACETYLCHOLIN** → **muskarinische Rezeptoren** (metabotrop, G-Protein-gekoppelt, LANGSAM). **Rezeptoren (Effektor):** (a) **M2-Rezeptoren** (Gi → cAMP ↓, K⁺-Kanäle ↑): **Herz** (Frequenz ↓ [SA-Knoten, Vagus], AV-Knoten-Leitung ↓, Kontraktilität ↓ [Vorhöfe]). (b) **M3-Rezeptoren** (Gq → IP₃ → Ca²⁺ ↑): **Bronchokonstriktion** (glatte Muskulatur Bronchien), **Speichelsekretion ↑** (dünnflüssig, Parotis/Submandibularis/Sublingualis), **Peristaltik ↑** (Magen-Darm, glatte Muskulatur), **Miktion** (Detrusor [Blasenwand] kontrahiert, Sphinkter relaxiert), **Miosis** (M. sphincter pupillae [Pupille verengt], Akkommodation [Ziliarmuskel kontrahiert → Linse gewölbt, Nahsicht]), Tränenfluss ↑, Insulinsekretion ↑ (Pankreas-β-Zellen). **INAKTIVIERUNG:** Acetylcholin → **Acetylcholinesterase** (AChE, in synaptischem Spalt) → Acetat + Cholin (Cholin-Wiederaufnahme → Acetyl-CoA + Cholin → Acetylcholin [via Cholin-Acetyltransferase]). Noradrenalin → **Wiederaufnahme** (NET [Noradrenalin-Transporter]), **MAO** (Monoaminoxidase, Mitochondrien), **COMT** (Catechol-O-Methyltransferase). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: [],
          hints: [
            "Überlege: Welche Neurotransmitter nutzt jedes System prä- vs. postganglionär?",
            "Merke: Beide Systeme nutzen präganglionär Acetylcholin – der Unterschied liegt postganglionär (Sympathikus: Noradrenalin; Parasympathikus: Acetylcholin)."
          ],
        }
      ],
      klinischerBezug: "Das Nervensystem ist klinisch von zentraler Bedeutung: Multiple Sklerose (MS) zerstört Myelin (Oligodendrozyten) → saltatorische Leitung gestört → neurologische Ausfälle (Sehstörungen, Lähmungen, Sensibilitätsstörungen). Parkinson entsteht durch Dopamin-Mangel (Substantia nigra) → Tremor, Rigor, Akinese; Therapie: L-DOPA + Carbidopa. Alzheimer-Demenz zeigt Acetylcholin-Mangel + Amyloid-Plaques (β-Amyloid) + Tau-Fibrillen → Gedächtnisverlust; Therapie: Acetylcholinesterase-Hemmer (Donepezil). Epilepsie entsteht durch Glutamat/GABA-Ungleichgewicht → unkontrollierte neuronale Entladungen; Antiepileptika: Valproat (GABA ↑), Carbamazepin (Na⁺-Kanal-Blocker). Myasthenia gravis: Autoantikörper gegen nikotinische AChR → belastungsabhängige Muskelschwäche (Ptosis, Dysphagie); Therapie: Pyridostigmin. Lokalanästhetika (Lidocain) blockieren spannungsgesteuerte Na⁺-Kanäle → kein Aktionspotential → Analgesie ohne Bewusstlosigkeit."
    },
    {
      id: 'bio-3-02',
      title: "Sinnesorgane Haut",
      content: `# Sinnesorgane und Haut

## EINLEITUNG

**Sinnesorgane** wandeln Reize (Licht, Schall, Chemikalien, Temperatur, Druck) in elektrische Signale (Aktionspotentiale) um. Das **Auge** ermöglicht Sehen durch **Photorezeptoren** (Stäbchen [skotopisch, Rhodopsin], Zapfen [photopisch, 3 Opsin-Typen]), **Akkommodation** (Ziliarmuskel, Linse) und **Fototransduktion** (Rhodopsin → Transducin → cGMP ↓ → Na⁺-Kanäle schließen → Hyperpolarisation). Das **Ohr** ermöglicht Hören (Schallwellen → Trommelfell → Gehörknöchelchen → Oval-Fenster → Basilarmembran → Haarzellen [Stereozilien] → Aktionspotential) und Gleichgewicht (Vestibularapparat: Bogengänge [Rotation], Utriculus/Sacculus [lineare Beschleunigung]). **Geruch** (Riechepithel, olfaktorische Rezeptoren [~400 Typen, G-Protein-gekoppelt]) und **Geschmack** (Geschmacksknospen, 5 Qualitäten: süß, sauer, salzig, bitter, umami) nutzen Chemorezeptoren. Die **Haut** (größtes Organ, ~2 m², 3 Schichten: Epidermis [verhorntes Plattenepithel, Keratinozyten], Dermis [Bindegewebe, Kollagen], Subcutis [Fett]) schützt, reguliert Temperatur und enthält Rezeptoren (Meissner [Berührung], Pacini [Vibration], Merkel [Druck], Ruffini [Dehnung], freie Nervenendigungen [Schmerz/Temperatur]). Für den MedAT ist das Verständnis von Auge, Ohr, Haut-Schichten und Rezeptoren essentiell.

---

## KERNINHALT

### Auge ⭐

**Aufbau:**

1. **Bulbus oculi (Augapfel):** 3 Schichten
   - **Tunica fibrosa (äußere Schicht):** Sklera (weiß, Kollagen I, Schutz) + Kornea (durchsichtig, avaskulär, Kollagen I geordnet, Brechkraft ~43 Dioptrien [dpt])
   - **Tunica vasculosa/Uvea (mittlere Schicht, gefäßreich):** Choroidea (Aderhaut, Ernährung Photorezeptoren), Ziliarkörper (Akkommodation, Kammerwasser-Produktion), Iris (Pupille, M. sphincter pupillae [Parasympathikus, M3, Miosis], M. dilatator pupillae [Sympathikus, α1, Mydriasis])
   - **Tunica interna (innere Schicht):** Retina (Netzhaut, 10 Schichten)

2. **Linse:** Bikonvex, elastisch, avaskulär (Ernährung via Kammerwasser), Brechkraft ~20 dpt (variabel via Akkommodation)

3. **Kammern:** Vordere Augenkammer (Kornea-Iris) + Hintere Augenkammer (Iris-Linse), gefüllt mit **Kammerwasser** (Aqueous humor, produziert von Ziliarkörper, Abfluss via Schlemm-Kanal [Kammerwinkel] → Episkleral-Venen, Druck 10-21 mmHg, ernährt Kornea/Linse)

4. **Glaskörper (Corpus vitreum):** Gelartig, Hyaluronan + Kollagen II, füllt Bulbus (2/3 Volumen)

**Retina (Netzhaut):** ⭐

**Schichten (von außen nach innen, Licht durchquert Schichten rückwärts!):**
1. Pigmentepithel (RPE, Vitamin A-Recycling, Phagozytose)
2. **Photorezeptoren:** Stäbchen + Zapfen
3. Äußere Körnerschicht (Zellkerne Photorezeptoren)
4. Äußere plexiforme Schicht (Synapsen)
5. Innere Körnerschicht (Bipolare Zellen, Horizontal-/Amakrinzellen)
6. Innere plexiforme Schicht (Synapsen)
7. Ganglienzellschicht (Ganglienzellen, Axone → N. opticus)
8. Nervenfaserschicht (Axone)
9. Membrana limitans interna (Basalmembran)

**Photorezeptoren:** ⭐

| Merkmal | Stäbchen (Rods) | Zapfen (Cones) |
|---------|-----------------|----------------|
| **Anzahl** | ~120 Millionen | ~6 Millionen |
| **Verteilung** | Peripher (außerhalb Fovea centralis) | Fovea centralis (Sehgrube, höchste Dichte ~200.000/mm²) |
| **Funktion** | **Skotopisches Sehen** (Dämmerung, Nachtsicht) | **Photopisches Sehen** (Tageslicht, Farben) |
| **Empfindlichkeit** | Hoch (1 Photon kann Reaktion auslösen) | Niedrig (viele Photonen nötig) |
| **Auflösung** | Niedrig (viele Stäbchen → 1 Ganglienzelle, Konvergenz) | Hoch (1:1 in Fovea, keine Konvergenz) |
| **Photopigment** | **Rhodopsin** (11-cis-Retinal + Opsin, λ_max ~500 nm [grün-blau]) | **3 Typen:** S-Opsin (blau, ~420 nm), M-Opsin (grün, ~530 nm), L-Opsin (rot, ~560 nm) |
| **Adaptationszeit** | Langsam (~30 Min Dunkeladaptation) | Schnell (~5 Min Helladaptation) |

**Fototransduktion (Stäbchen):** ⭐

**Dunkelheit (Ruhezustand = DEPOLARISIERT!):**
1. **cGMP hoch** (Guanylatzyklase aktiv)
2. cGMP bindet **cGMP-gesteuerte Na⁺-Kanäle** (im Außensegment) → Na⁺ strömt ein → **DEPOLARISATION** (~-40 mV, ungewöhnlich für Rezeptor!)
3. Spannungsgesteuerte Ca²⁺-Kanäle (synaptische Terminale) offen → **Glutamat-Freisetzung** (tonisch) → Bipolare Zellen

**Licht (Phototransduktion = HYPERPOLARISIERT!):**
1. **Photon** trifft Rhodopsin
2. **11-cis-Retinal** → **all-trans-Retinal** (Photoisomerisierung)
3. Rhodopsin → **Metarhodopsin II** (aktivierte Form)
4. Metarhodopsin II aktiviert **Transducin** (G-Protein, Gt)
5. Transducin aktiviert **Phosphodiesterase (PDE)** (ca. 100 PDE pro Transducin → Amplifikation!)
6. PDE hydrolysiert **cGMP → GMP** (cGMP ↓↓↓)
7. cGMP-gesteuerte Na⁺-Kanäle **SCHLIESSEN** → Na⁺-Einstrom ↓ → **HYPERPOLARISATION** (~-70 mV)
8. Ca²⁺-Kanäle schließen → **Glutamat-Freisetzung ↓** → Signal an Bipolare Zellen (ON-Bipolare Zellen depolarisieren, OFF-Bipolare Zellen hyperpolarisieren)

**Adaptation/Erholung:**
- **Rhodopsin-Kinase** phosphoryliert Metarhodopsin II → Arrestin bindet → inaktiviert
- All-trans-Retinal → 11-cis-Retinal (via Retinal-Isomerase im Pigmentepithel, Vitamin A-Zyklus)
- **Recoverin** (Ca²⁺-Sensor) reguliert Guanylatzyklase (Ca²⁺ ↓ → cGMP-Synthese ↑ → Dunkelzustand wiederhergestellt)

**Akkommodation (Naheinstellung):** ⭐

**Ferneinstellung (Ruhe):**
- **Ziliarmuskel relaxiert** (ringförmiger glatter Muskel)
- **Zonulafasern (Zinn-Fasern) gespannt** → Linse **flach** (geringste Brechkraft ~20 dpt)
- Fernpunkt im Unendlichen scharf

**Naheinstellung (Akkommodation):**
- **Ziliarmuskel kontrahiert** (Parasympathikus, M3, N. oculomotorius [III])
- Ziliarmuskel-Ring **verkleinert** sich → **Zonulafasern entspannen**
- Linse **wölbt sich** (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal, jung)
- Nahpunkt scharf (~10 cm bei Kindern, ~25 cm bei Erwachsenen, ~100 cm bei 60-Jährigen [Presbyopie, Altersweitsichtigkeit])

**Nahakkommodationstrias:**
1. Akkommodation (Ziliarmuskel kontrahiert)
2. Konvergenz (Augen nach innen, M. rectus medialis)
3. Miosis (Pupille verengt, M. sphincter pupillae, M3 → Tiefenschärfe ↑)

**KLINISCH:**
- **Myopie (Kurzsichtigkeit):** Bulbus zu lang → Fernpunkt vor Retina → Korrektur: Konkavlinse (Minuslinse)
- **Hyperopie (Weitsichtigkeit):** Bulbus zu kurz → Nahpunkt hinter Retina → Korrektur: Konvexlinse (Pluslinse)
- **Presbyopie (Altersweitsichtigkeit):** Linse verliert Elastizität (~45 Jahre) → Akkommodation ↓ → Lesebrille (Pluslinse)
- **Astigmatismus:** Kornea unregelmäßig gekrümmt → Zerstreuung → Korrektur: Zylinderlinse
- **Glaukom:** Augeninnendruck ↑ (>21 mmHg, Kammerwasser-Abfluss ↓ [Trabekelwerk verstopft]) → N. opticus-Schädigung → Gesichtsfeldausfall → Erblindung. Therapie: Betablocker (Timolol, Kammerwasser-Produktion ↓), Prostaglandin-Analoga (Latanoprost, Abfluss ↑), Carboanhydrase-Hemmer (Acetazolamid)
- **Katarakt (Grauer Star):** Linsentrübung (Proteinaggregate, Alter, Diabetes, UV) → Sehschärfe ↓ → Therapie: Linsen-Ersatz (Kunstlinse)
- **Makuladegeneration:** Degenerative Veränderungen Makula (Fovea centralis) → Zentrale Sehschärfe ↓, peripher erhalten

### Ohr ⭐

**Aufbau:** 3 Teile (Außenohr, Mittelohr, Innenohr)

**Außenohr:**
- Ohrmuschel (elastischer Knorpel, Schallsammlung)
- Äußerer Gehörgang (~2.5 cm, Cerumen [Ohrenschmalz]-Produktion)
- **Trommelfell (Membrana tympani):** Grenze zu Mittelohr, schwingt bei Schallwellen

**Mittelohr (luftgefüllt):**
- **Gehörknöchelchen (kleinste Knochen):** Hammer (Malleus) → Amboss (Incus) → Steigbügel (Stapes)
- **Funktion:** Impedanzanpassung (Luft [Trommelfell] → Flüssigkeit [Innenohr], Druckverstärkung ~22-fach durch Hebelwirkung + Flächenreduktion [Trommelfell 55 mm² → Oval-Fenster 3.2 mm²])
- **Tuba auditiva (Eustachische Röhre):** Verbindung Mittelohr ↔ Nasopharynx, Druckausgleich (öffnet beim Schlucken/Gähnen)
- **Muskeln (Schutzreflex):** M. stapedius (N. facialis [VII], dämpft Steigbügel), M. tensor tympani (N. trigeminus [V], spannt Trommelfell) → schützen vor lauten Geräuschen (Dämpfung ~20 dB)

**Innenohr (knöchernes Labyrinth, Perilymphe [Na⁺-reich, wie EZF] + häutiges Labyrinth, Endolymphe [K⁺-reich, wie IZF]):** ⭐

**Cochlea (Schnecke, Hören):**
- **3 Gänge:** Scala vestibuli (oben, Perilymphe) → Scala media (Mitte, Endolymphe, **Corti-Organ**) → Scala tympani (unten, Perilymphe)
- **Oval-Fenster:** Steigbügel-Fußplatte → Perilymphe (Scala vestibuli)
- **Rundes Fenster:** Druckausgleich (Perilymphe-Schwingung → Rundes Fenster wölbt sich)

**Corti-Organ (Hörorgan):** ⭐
- **Basilarmembran:** Schmal/steif an Basis (hohe Frequenzen ~20.000 Hz), breit/flexibel an Apex (niedrige Frequenzen ~20 Hz) → **Tonotopie** (Frequenz-Orts-Kodierung)
- **Haarzellen (Mechanorezeptoren):** 1 Reihe innere Haarzellen (IHC, ~3500, 95% afferente Innervation [N. cochlearis]) + 3 Reihen äußere Haarzellen (OHC, ~12.000, efferente Innervation, Verstärkung)
- **Stereozilien (modifizierte Mikrovilli, KEINE echten Zilien!):** Bündel auf Haarzelle, abgestufte Höhe, verbunden via Tip-Links (Cadherin 23)
- **Tektorialmembran:** Gelartig, liegt über Haarzellen

**Mechanotransduktion (Hören):**
1. **Schallwellen** → Trommelfell schwingt
2. Gehörknöchelchen → Oval-Fenster → Perilymphe (Scala vestibuli) → Wanderwelle auf **Basilarmembran** (max. Auslenkung bei Resonanzfrequenz)
3. Basilarmembran bewegt sich → **Stereozilien biegen** (gegen Tektorialmembran)
4. **Tip-Links spannen** → **Mechano-sensitive K⁺-Kanäle** (TMC1/2) **ÖFFNEN** (direkt mechanisch, KEIN Second Messenger!)
5. **K⁺ strömt EIN** (Endolymphe ist K⁺-reich, +80 mV [Endocochleäres Potential]) → **DEPOLARISATION** (Haarzelle)
6. Spannungsgesteuerte **Ca²⁺-Kanäle** (Ca_v1.3) öffnen → Ca²⁺ rein → **Glutamat-Freisetzung** (Synapse)
7. **N. cochlearis** (Spiralganglion-Neuronen) → **Aktionspotential** → Hirnstamm (Nucleus cochlearis) → auditorischer Kortex (Gyrus temporalis superior)

**Vestibularapparat (Gleichgewicht):** ⭐

**Bogengänge (3, orthogonal):**
- **Funktion:** Rotation (Winkelbeschleunigung)
- **Ampulle:** Erweiterung, enthält **Crista ampullaris** (Haarzellen + Cupula [Gelatine-Masse])
- **Mechanismus:** Kopf dreht → Endolymphe bleibt zurück (Trägheit) → Cupula ausgelenkt → Stereozilien biegen → Haarzellen depolarisieren/hyperpolarisieren (je nach Richtung) → N. vestibularis

**Utriculus + Sacculus (Otolithenorgane):**
- **Funktion:** Lineare Beschleunigung + Schwerkraft (Kopfposition)
- **Macula:** Haarzellen + **Otolithenmembran** (Gelatine + **Otolithen [Calziumcarbonat-Kristalle]**)
- **Mechanismus:** Lineare Beschleunigung (z.B. Aufzug) → Otolithen bewegen sich → Stereozilien biegen → Haarzellen depolarisieren/hyperpolarisieren → N. vestibularis

**KLINISCH:**
- **Schwerhörigkeit:** Schallleitungsschwerhörigkeit (Mittelohr: Otosklerose, Trommelfell-Perforation, Paukenerguss) vs. Schallempfindungsschwerhörigkeit (Innenohr: Haarzellen-Schädigung [Lärm, Alter, Ototoxika: Aminoglykoside, Cisplatin], N. cochlearis-Tumor). Diagnostik: Rinne-Test (Luftleitung vs. Knochenleitung), Weber-Test (Lateralisation)
- **Tinnitus:** Ohrgeräusche (Haarzellen-Schädigung, Hyperaktivität auditorischer Kortex)
- **Benigner paroxysmaler Lagerungsschwindel (BPLS):** Otolithen lösen sich → Bogengang → Schwindelattacken (Dix-Hallpike-Test). Therapie: Lagerungsmanöver (Epley)
- **Morbus Menière:** Endolymphhydrops (Endolymphe-Überdruck) → Schwindel-Attacken, Hörverlust, Tinnitus, Völlegefühl

### Geruch und Geschmack

**Geruch (Olfaktorisches System):**
- **Riechepithel:** Dach Nasenhöhle (Lamina cribrosa)
- **Olfaktorische Rezeptor-Neuronen (ORN):** Bipolare Neuronen (~10 Millionen), Zilien (Dendriten), Axone → Bulbus olfactorius (Glomeruli) → olfaktorischer Kortex (Gyrus temporalis inferior, Hippocampus [Gedächtnis])
- **Rezeptoren:** ~400 G-Protein-gekoppelte Rezeptoren (jede ORN exprimiert 1 Rezeptor-Typ) → Odorant bindet → Golf (G-Protein) → Adenylatcyclase → cAMP ↑ → cAMP-gesteuerte Na⁺/Ca²⁺-Kanäle öffnen → Depolarisation
- **Regeneration:** ORN erneuern sich (~30-60 Tage, Basalzellen → neue ORN)

**Geschmack (Gustatorisches System):**
- **Geschmacksknospen:** Papillen (Zungenoberfläche: Papillae foliatae [seitlich], circumvallatae [hinten, V-förmig], fungiformes [vorne])
- **Geschmackszellen (Type II/III):** Epithelzellen (KEINE Neuronen!), Mikrovilli (Porus gustatorius)
- **5 Qualitäten:** ⭐
  - **Süß:** Glukose, Saccharose → T1R2/T1R3 (G-Protein [Gustducin] → cAMP ↑ → TRPM5-Kanal → Depolarisation)
  - **Umami:** Glutamat, L-Aminosäuren → T1R1/T1R3
  - **Bitter:** Alkaloide (Koffein, Chinin), Toxine → T2R (25 Typen, Schutzfunktion)
  - **Sauer:** H⁺ (Säuren) → PKD2L1/PKD1L3, H⁺ blockiert K⁺-Kanäle → Depolarisation
  - **Salzig:** Na⁺ → ENaC (Epithelial Na⁺ Channel) → Depolarisation
- **Innervation:** N. facialis [VII] (vordere 2/3 Zunge, Chorda tympani), N. glossopharyngeus [IX] (hintere 1/3), N. vagus [X] (Epiglottis) → Nucleus tractus solitarius (Hirnstamm) → Thalamus (VPM) → Insula/Operculum (gustatorischer Kortex)

### Haut ⭐

**Schichten:**

**1. Epidermis (verhorntes Plattenepithel):**
- **Stratum basale:** Stammzellen (Keratinozyten), Melanozyten (Melanin-Produktion, UV-Schutz), Merkel-Zellen (Tastsinn)
- **Stratum spinosum:** Desmosomen (Stachelzellen), Langerhans-Zellen (dendritische Zellen, Antigen-Präsentation)
- **Stratum granulosum:** Keratohyalin-Granula (Profilaggrin → Filaggrin → Keratin-Bündel)
- **Stratum lucidum:** Nur Handinnenflächen/Fußsohlen (Eleidin, durchsichtig)
- **Stratum corneum (Hornschicht):** Korneozyten (tote Zellen, Keratin-gefüllt, KEIN Kern), Lipide (Ceramide, Cholesterin, freie Fettsäuren) in Interzellularspalten → Wasserundurchlässigkeit

**2. Dermis (Bindegewebe):**
- **Papillarschicht (Stratum papillare):** Lockeres Bindegewebe, Kapillaren, Nervenenden (Meissner-Körperchen)
- **Retikulärschicht (Stratum reticulare):** Dichtes Bindegewebe, Kollagen I (Zugfestigkeit), Elastin (Dehnbarkeit), Haarfollikel, Talg-/Schweißdrüsen, Ruffini-Körperchen, Pacini-Körperchen

**3. Subcutis (Hypodermis):**
- Fettgewebe (Isolation, Energiespeicher), lockeres Bindegewebe

**Hautanhangsgebilde:**
- **Haare:** Haarfollikel (Haarschaft, Haarwurzel [Matrix, Melanozyten]), Arrector pili (glatter Muskel, Sympathikus → Gänsehaut)
- **Talgdrüsen (Glandulae sebaceae):** Holokrines Sekret (Talg = Lipide, Zellen lysieren), mit Haarfollikel assoziiert
- **Schweißdrüsen:** Ekkrine (Thermoregulation, Acetylcholin [Sympathikus!], wässriger Schweiß) vs. Apokrine (Achsel/Genitalbereich, Geruch, adrenerge Stimulation)

**Hautrezeptoren (Mechanorezeptoren + Thermorezeptoren + Nozizeptoren):** ⭐

| Rezeptor | Modalität | Adaptation | Lokalisation | Funktion |
|----------|-----------|------------|--------------|----------|
| **Meissner-Körperchen** | Berührung (leicht) | Schnell | Dermis-Papillen (Fingerbeeren, Lippen) | Textur, niedrige Frequenz (10-50 Hz) |
| **Pacini-Körperchen** | Vibration | Schnell | Tiefe Dermis, Subcutis | Vibration, hohe Frequenz (200-300 Hz) |
| **Merkel-Zellen** | Druck (statisch) | Langsam | Epidermis (Stratum basale) | Feine Details, Kanten, Form |
| **Ruffini-Körperchen** | Dehnung | Langsam | Dermis (tief) | Hautdehnung, Gelenkstellung |
| **Freie Nervenendigungen** | Schmerz, Temperatur | Langsam/keine | Epidermis, Dermis | Nozizeption (Aδ/C-Fasern), Kälte (TRPM8, ~25°C), Wärme (TRPV1, ~43°C) |

**Thermorezeptoren:**
- **Kälterezeptoren:** TRPM8 (Transient Receptor Potential Melastatin 8, aktiviert bei ~25°C, Menthol), Aδ-Fasern (schnell, kalt)
- **Wärmerezeptoren:** TRPV1 (Vanilloid 1, aktiviert bei ~43°C, Capsaicin [Chili]), C-Fasern (langsam, warm/heiß)

**Nozizeptoren (Schmerzrezeptoren):**
- **Freie Nervenendigungen** (KEINE spezialisierten Strukturen)
- **Fasern:** Aδ-Fasern (schneller Schmerz, scharf, myelinisiert, ~20 m/s) + **C-Fasern** (langsamer Schmerz, brennend/dumpf, unmyelinisiert, ~1 m/s)
- **Aktivierung:** Mechanisch (Verletzung), thermisch (Hitze >43°C, Kälte <15°C), chemisch (Bradykinin, Prostaglandine, Substanz P, H⁺, ATP)

**KLINISCH:**
- **Melanom:** Maligner Hauttumor (Melanozyten), ABCDE-Regel (Asymmetrie, Begrenzung unregelmäßig, Colorit bunt, Durchmesser >5 mm, Erhabenheit), Metastasierung (Sentinel-Lymphknoten), UV-Exposition (Risikofaktor)
- **Basalzellkarzinom:** Häufigster Hauttumor (90%), lokal invasiv, KEINE Metastasen, Hedgehog-Signalweg (SMO-Mutation), Therapie: Exzision, Vismodegib (Hedgehog-Inhibitor)
- **Plattenepithelkarzinom:** Zweithäufigster, Metastasierung möglich, UV-Exposition, Vorstufe: Aktinische Keratose
- **Psoriasis (Schuppenflechte):** Autoimmun (T-Zellen → Keratinozyten-Hyperproliferation), silbrige Schuppen (Stratum corneum ↑), Auspitz-Zeichen (Punktblutungen bei Abkratzen), Therapie: Topisch (Vitamin D-Analoga, Glukokortikoide), Systemisch (Methotrexat, Biologika [TNF-α-Inhibitoren, IL-17-Inhibitoren])

---

> **🎯 Prüfungsfokus**
> - **Auge:** Photorezeptoren (Stäbchen [skotopisch, Rhodopsin, ~120 Mio., peripher], Zapfen [photopisch, 3 Opsine, ~6 Mio., Fovea]). Fototransduktion: Licht → Rhodopsin → Transducin → PDE → cGMP ↓ → Na⁺-Kanäle schließen → Hyperpolarisation → Glutamat ↓. Akkommodation: Ziliarmuskel kontrahiert (Parasympathikus, M3) → Zonulafasern entspannen → Linse wölbt (Naheinstellung).
> - **Ohr:** Gehörknöchelchen (Hammer, Amboss, Steigbügel, Impedanzanpassung ~22-fach). Corti-Organ: Basilarmembran (Tonotopie: Basis = hohe Frequenz, Apex = niedrige Frequenz), Haarzellen (Stereozilien, Tip-Links, K⁺-Kanäle öffnen [Endolymphe K⁺-reich, +80 mV] → Depolarisation → Glutamat). Vestibularapparat: Bogengänge (Rotation, Cupula), Utriculus/Sacculus (lineare Beschleunigung, Otolithen).
> - **Geschmack:** 5 Qualitäten (süß [T1R2/T1R3, Glukose], umami [T1R1/T1R3, Glutamat], bitter [T2R, Toxine], sauer [H⁺, PKD2L1], salzig [Na⁺, ENaC]). Innervation: N. facialis [VII, vordere 2/3], N. glossopharyngeus [IX, hintere 1/3], N. vagus [X, Epiglottis].
> - **Haut:** 3 Schichten (Epidermis [verhorntes Plattenepithel, Keratinozyten, Stratum corneum], Dermis [Bindegewebe, Kollagen I, Elastin], Subcutis [Fett]). Rezeptoren: Meissner (Berührung, schnell), Pacini (Vibration, schnell), Merkel (Druck, langsam), Ruffini (Dehnung, langsam), freie Nervenendigungen (Schmerz/Temperatur, Aδ [schnell], C-Fasern [langsam]).
> - **KLINISCH:** Glaukom (Augeninnendruck ↑, N. opticus-Schädigung, Betablocker/Prostaglandin-Analoga), Katarakt (Linsentrübung, Proteinaggregate), Schwerhörigkeit (Schallleitung [Mittelohr] vs. Schallempfindung [Innenohr, Haarzellen]), Melanom (Melanozyten, ABCDE-Regel, Metastasierung).

---

## MERKSÄTZE

>>>> **Merke:** **Photorezeptoren:** **Stäbchen** (skotopisch [Dämmerung], Rhodopsin [11-cis-Retinal + Opsin, λ_max ~500 nm], ~120 Mio., peripher, hohe Empfindlichkeit, niedrige Auflösung). **Zapfen** (photopisch [Tageslicht, Farben], 3 Opsine [S-blau ~420 nm, M-grün ~530 nm, L-rot ~560 nm], ~6 Mio., Fovea centralis, niedrige Empfindlichkeit, hohe Auflösung [1:1 Ganglienzelle]).

>>>> **Merke:** **Fototransduktion** (Stäbchen): Licht → **11-cis-Retinal → all-trans-Retinal** (Photoisomerisierung) → Rhodopsin → **Metarhodopsin II** → **Transducin** (G-Protein) → **Phosphodiesterase (PDE)** → **cGMP ↓** (Hydrolyse) → cGMP-gesteuerte **Na⁺-Kanäle SCHLIESSEN** → **HYPERPOLARISATION** (~-70 mV) → Ca²⁺-Kanäle schließen → **Glutamat ↓** (Signal).

>>>> **Merke:** **Akkommodation** (Naheinstellung): **Ziliarmuskel kontrahiert** (Parasympathikus, M3, N. oculomotorius [III]) → Ziliarmuskel-Ring verkleinert → **Zonulafasern entspannen** → Linse **wölbt sich** (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal). **Nahakkommodationstrias:** Akkommodation + Konvergenz (M. rectus medialis) + **Miosis** (M. sphincter pupillae, M3, Tiefenschärfe ↑).

>>>> **Merke:** **Corti-Organ** (Hören): Schallwellen → Trommelfell → Gehörknöchelchen (Impedanzanpassung ~22-fach) → Oval-Fenster → Perilymphe → **Basilarmembran** (Tonotopie: Basis = hohe Frequenz ~20 kHz, Apex = niedrige Frequenz ~20 Hz) → **Haarzellen** (Stereozilien biegen, **Tip-Links** spannen) → **K⁺-Kanäle öffnen** (Endolymphe K⁺-reich, +80 mV) → Depolarisation → **Glutamat** → N. cochlearis.

---

**Geschätzte Lesezeit:** 14 Minuten
**Stichwortliste-Coverage:** 10/10 ✅
**Priorität:** MITTEL
`,
      lernziele: [],
      sections: [],
      merksätze: [
        "**Photorezeptoren:** **Stäbchen** (skotopisch [Dämmerung], Rhodopsin [11-cis-Retinal + Opsin, λ_max ~500 nm], ~120 Mio., peripher, hohe Empfindlichkeit, niedrige Auflösung). **Zapfen** (photopisch [Tageslicht, Farben], 3 Opsine [S-blau ~420 nm, M-grün ~530 nm, L-rot ~560 nm], ~6 Mio., Fovea centralis, niedrige Empfindlichkeit, hohe Auflösung [1:1 Ganglienzelle]).",
        "**Fototransduktion** (Stäbchen): Licht → **11-cis-Retinal → all-trans-Retinal** (Photoisomerisierung) → Rhodopsin → **Metarhodopsin II** → **Transducin** (G-Protein) → **Phosphodiesterase (PDE)** → **cGMP ↓** (Hydrolyse) → cGMP-gesteuerte **Na⁺-Kanäle SCHLIESSEN** → **HYPERPOLARISATION** (~-70 mV) → Ca²⁺-Kanäle schließen → **Glutamat ↓** (Signal).",
        "**Akkommodation** (Naheinstellung): **Ziliarmuskel kontrahiert** (Parasympathikus, M3, N. oculomotorius [III]) → Ziliarmuskel-Ring verkleinert → **Zonulafasern entspannen** → Linse **wölbt sich** (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal). **Nahakkommodationstrias:** Akkommodation + Konvergenz (M. rectus medialis) + **Miosis** (M. sphincter pupillae, M3, Tiefenschärfe ↑).",
        "**Corti-Organ** (Hören): Schallwellen → Trommelfell → Gehörknöchelchen (Impedanzanpassung ~22-fach) → Oval-Fenster → Perilymphe → **Basilarmembran** (Tonotopie: Basis = hohe Frequenz ~20 kHz, Apex = niedrige Frequenz ~20 Hz) → **Haarzellen** (Stereozilien biegen, **Tip-Links** spannen) → **K⁺-Kanäle öffnen** (Endolymphe K⁺-reich, +80 mV) → Depolarisation → **Glutamat** → N. cochlearis."
      ],
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen Stäbchen und Zapfen in der Retina?",
          options: [
          "Beide sind identisch",
          "Stäbchen: Skotopisches Sehen (Dämmerung), Rhodopsin (λ_max ~500 nm), ~120 Mio., peripher, hohe Empfindlichkeit (1 Photon), niedrige Auflösung (Konvergenz). Zapfen: Photopisches Sehen (Tageslicht, Farben), 3 Opsine (S-blau ~420 nm, M-grün ~530 nm, L-rot ~560 nm), ~6 Mio., Fovea centralis (~200.000/mm²), niedrige Empfindlichkeit, hohe Auflösung (1:1 Ganglienzelle)",
          "Nur Stäbchen existieren",
          "Zapfen sind nur für Nachtsicht",
          "Stäbchen sind nur in Fovea"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **STÄBCHEN** (Rods) und **ZAPFEN** (Cones) sind die beiden Photorezeptor-Typen in der Retina, spezialisiert für unterschiedliche Lichtbedingungen und Funktionen. **STÄBCHEN:** (1) **ANZAHL:** ~120 Millionen pro Retina. (2) **VERTEILUNG:** **PERIPHER** (außerhalb Fovea centralis, Dichte ↑ ~20° von Fovea, KEINE Stäbchen in Fovea selbst). (3) **FUNKTION:** **SKOTOPISCHES SEHEN** (Dämmerung, Nachtsicht, schwaches Licht). (4) **PHOTOPIGMENT:** **Rhodopsin** (11-cis-Retinal + Opsin, Absorptionsmaximum λ_max ~500 nm [grün-blau]). (5) **EMPFINDLICHKEIT:** **HOCH** (1 Photon kann Reaktion auslösen, Amplifikation via Transducin/PDE-Kaskade). (6) **AUFLÖSUNG:** **NIEDRIG** (viele Stäbchen konvergieren auf 1 Ganglienzelle [Konvergenz ~100:1] → räumliche Summation → hohe Empfindlichkeit, aber geringe Schärfe). (7) **ADAPTATION:** Dunkeladaptation langsam (~30 Min, Rhodopsin-Regeneration). **ZAPFEN:** (1) **ANZAHL:** ~6 Millionen pro Retina. (2) **VERTEILUNG:** **FOVEA CENTRALIS** (Sehgrube, höchste Dichte ~200.000/mm², NUR Zapfen, KEINE Stäbchen), Dichte ↓ peripher. (3) **FUNKTION:** **PHOTOPISCHES SEHEN** (Tageslicht, helles Licht, **FARBENSEHEN**). (4) **PHOTOPIGMENTE (3 TYPEN):** **S-Zapfen** (short, blau, λ_max ~420 nm, ~10%), **M-Zapfen** (medium, grün, λ_max ~530 nm, ~50%), **L-Zapfen** (long, rot, λ_max ~560 nm, ~40%). Farbwahrnehmung via Vergleich der 3 Signale (trichromatische Theorie). (5) **EMPFINDLICHKEIT:** **NIEDRIG** (viele Photonen nötig). (6) **AUFLÖSUNG:** **HOCH** (besonders Fovea: 1 Zapfen → 1 Bipolare Zelle → 1 Ganglienzelle [1:1:1, KEINE Konvergenz] → höchste Sehschärfe). (7) **ADAPTATION:** Helladaptation schnell (~5 Min). **KLINISCH:** Nachtblindheit (Stäbchen-Dysfunktion, Vitamin A-Mangel [Rhodopsin-Synthese ↓], Retinitis pigmentosa [genetisch, Stäbchen sterben]). Farbblindheit (Zapfen-Dysfunktion: Rot-Grün-Schwäche [häufigste, X-chromosomal, M-/L-Opsin-Defekt], Blau-Gelb-Schwäche [selten, S-Opsin], Achromatopsie [keine Farben, alle Zapfen defekt]). A, C, D, E sind falsch.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie funktioniert die Fototransduktion in Stäbchen?",
          options: [
          "Fototransduktion benötigt kein Licht",
          "Licht → Photon trifft Rhodopsin → 11-cis-Retinal → all-trans-Retinal (Photoisomerisierung) → Metarhodopsin II (aktiviert) → Transducin (G-Protein, Gt) → Phosphodiesterase (PDE, ~100 pro Transducin) → cGMP → GMP (cGMP ↓↓↓) → cGMP-gesteuerte Na⁺-Kanäle SCHLIESSEN → HYPERPOLARISATION (~-70 mV, von -40 mV) → Ca²⁺-Kanäle schließen → Glutamat-Freisetzung ↓",
          "Fototransduktion ist nur in Zapfen",
          "Fototransduktion führt zu Depolarisation",
          "Fototransduktion ist nur in Bakterien"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **FOTOTRANSDUKTION** ist der Prozess, durch den Photorezeptoren (Stäbchen/Zapfen) Licht in elektrisches Signal umwandeln (ungewöhnlich: Licht → HYPERPOLARISATION, nicht Depolarisation!). **DUNKELHEIT (Ruhezustand, DEPOLARISIERT):** (1) **cGMP hoch** (Guanylatzyklase aktiv, GTP → cGMP). (2) cGMP bindet **cGMP-gesteuerte Na⁺-Kanäle** (CNG-Kanäle, im Außensegment [Membranscheiben]) → Kanäle OFFEN → **Na⁺ strömt ein** → **DEPOLARISATION** (~-40 mV, ungewöhnlich für Rezeptor!). (3) Spannungsgesteuerte Ca²⁺-Kanäle (synaptische Terminale) offen → **Glutamat-Freisetzung** (tonisch, kontinuierlich) → Bipolare Zellen (ON-Bipolare hyperpolarisiert, OFF-Bipolare depolarisiert). **LICHT (Phototransduktion, HYPERPOLARISIERT):** (1) **PHOTON** trifft **Rhodopsin** (11-cis-Retinal + Opsin). (2) **PHOTOISOMERISIERUNG:** **11-cis-Retinal → all-trans-Retinal** (cis-trans-Konformationsänderung, einziger lichtabhängiger Schritt!). (3) Rhodopsin → **Metarhodopsin II** (R*, aktivierte Form, Konformationsänderung des Opsins). (4) Metarhodopsin II aktiviert **Transducin** (G-Protein, Gt, α-Untereinheit dissoziiert, bindet GTP) → **AMPLIFIKATION** (1 R* aktiviert ~100 Transducin). (5) Transducin-α-GTP aktiviert **Phosphodiesterase (PDE)** (cGMP-spezifische PDE, γ-Untereinheit dissoziiert) → **AMPLIFIKATION** (~100 PDE pro Transducin). (6) PDE hydrolysiert **cGMP → GMP** (cGMP-Konzentration ↓↓↓, ~1000-fach in ms). (7) cGMP-gesteuerte Na⁺-Kanäle **SCHLIESSEN** (cGMP löst sich von Kanal) → **Na⁺-Einstrom ↓**. (8) **HYPERPOLARISATION** (~-70 mV, von -40 mV) → K⁺-Kanäle (immer offen) dominieren. (9) Ca²⁺-Kanäle (synaptisch) schließen → **Glutamat-Freisetzung ↓** (Signal! ON-Bipolare depolarisieren, OFF-Bipolare hyperpolarisieren). **AMPLIFIKATION GESAMT:** 1 Photon → ~100.000 cGMP hydrolysiert → ~1 pA Stromänderung → detektierbar! **ADAPTATION/ERHOLUNG:** (1) **Rhodopsin-Kinase** phosphoryliert Metarhodopsin II → **Arrestin** bindet → inaktiviert. (2) All-trans-Retinal → all-trans-Retinol (Retinol-Dehydrogenase) → Pigmentepithel (RPE) → **11-cis-Retinal** (Retinal-Isomerase, Vitamin A-Zyklus) → zurück zu Photorezeptor → Rhodopsin regeneriert. (3) **Recoverin** (Ca²⁺-Sensor): Ca²⁺ ↓ (Hyperpolarisation) → Guanylatzyklase-aktivierendes Protein (GCAP) → Guanylatzyklase ↑ → cGMP-Synthese ↑ → Dunkelzustand wiederhergestellt. **KLINISCH:** Nachtblindheit (Vitamin A-Mangel → Rhodopsin-Synthese ↓, 11-cis-Retinal ↓), Retinitis pigmentosa (genetisch, Rhodopsin-Mutation → Stäbchen sterben → Nachtblindheit, Tunnelblick). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Wie funktioniert die Akkommodation des Auges?",
          options: [
          "Akkommodation ist nur für Fernsicht",
          "Naheinstellung (Akkommodation): Ziliarmuskel kontrahiert (Parasympathikus, M3, N. oculomotorius [III]) → Ziliarmuskel-Ring verkleinert → Zonulafasern (Zinn-Fasern) entspannen → Linse wölbt sich (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal, jung). Ferneinstellung: Ziliarmuskel relaxiert → Zonulafasern gespannt → Linse flach (~20 dpt). Nahakkommodationstrias: Akkommodation + Konvergenz + Miosis",
          "Akkommodation benötigt Sympathikus",
          "Akkommodation ist nur in Bakterien",
          "Linse wird flacher bei Nahsicht"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **AKKOMMODATION** ist die Anpassung der Linsen-Brechkraft für Nahsicht (junge Menschen: ~10 cm Nahpunkt, ältere: ~100 cm [Presbyopie]). **FERNEINSTELLUNG (Ruhe, KEINE Akkommodation):** (1) **Ziliarmuskel RELAXIERT** (ringförmiger glatter Muskel im Ziliarkörper, parasympathische Innervation [M3], aber in Ruhe entspannt). (2) **Zonulafasern (Zinn-Fasern) GESPANNT** (Kollagenfasern, Ziliarkörper → Linsenkapsel, radialer Zug). (3) Linse **FLACH** (geringste Brechkraft ~20 dpt, Linse wird gedehnt durch Zonulafasern-Spannung). (4) **Fernpunkt im Unendlichen scharf** (parallele Lichtstrahlen fokussiert auf Retina). **NAHEINSTELLUNG (Akkommodation, aktiver Prozess):** (1) **ZILIARMUSKEL KONTRAHIERT** (Parasympathikus, **M3-Rezeptoren**, **N. oculomotorius [III]**, Edinger-Westphal-Kern → Ganglion ciliare → postganglionäre Fasern → Ziliarmuskel). (2) Ziliarmuskel-Ring (kreisförmig) **VERKLEINERT** sich → Abstand Ziliarmuskel-Linse ↓. (3) **ZONULAFASERN ENTSPANNEN** (Spannung ↓, radialer Zug auf Linse ↓). (4) Linse **WÖLBT SICH** (elastische Rückstellkraft der Linsenkapsel, Linse ist natürlich konvex) → **Brechkraft ↑** (~24 dpt maximal bei Kindern/jungen Erwachsenen, ~22 dpt bei 30-Jährigen, ~20 dpt bei 60-Jährigen [Presbyopie, Altersweitsichtigkeit, Linse verliert Elastizität]). (5) **Nahpunkt scharf** (~10 cm bei Kindern, ~25 cm bei Erwachsenen, ~100 cm bei 60-Jährigen). **NAHAKKOMMODATIONSTRIAS** (3 simultane Reaktionen bei Nahsicht): (1) **AKKOMMODATION** (Ziliarmuskel kontrahiert, Linse wölbt). (2) **KONVERGENZ** (Augen nach innen, M. rectus medialis [N. oculomotorius III], beide Augen fixieren Nahpunkt). (3) **MIOSIS** (Pupille verengt, M. sphincter pupillae [Parasympathikus, M3, N. oculomotorius III] → Tiefenschärfe ↑ [kleinere Pupille → weniger chromatische Aberration]). **KLINISCH:** **Presbyopie** (Altersweitsichtigkeit, ~45 Jahre): Linse verliert Elastizität (Kristalline vernetzen, wasserarm) → Akkommodation ↓ → Nahpunkt ↑ (~100 cm) → Lesebrille nötig (Konvexlinse/Pluslinse, z.B. +2 dpt). **Myopie** (Kurzsichtigkeit): Bulbus zu lang → Fernpunkt vor Retina → Fernsicht unscharf → Korrektur: Konkavlinse (Minuslinse, z.B. -3 dpt). **Hyperopie** (Weitsichtigkeit): Bulbus zu kurz → Nahpunkt hinter Retina → Nahsicht unscharf (Akkommodation kompensiert teilweise) → Korrektur: Konvexlinse (Pluslinse). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Wie funktioniert die Schallübertragung im Ohr?",
          options: [
          "Schallübertragung benötigt keine Gehörknöchelchen",
          "Schallwellen → Trommelfell schwingt → Gehörknöchelchen (Hammer → Amboss → Steigbügel, Impedanzanpassung ~22-fach [Hebelwirkung + Flächenreduktion: Trommelfell 55 mm² → Oval-Fenster 3.2 mm²]) → Oval-Fenster → Perilymphe (Scala vestibuli) → Wanderwelle auf Basilarmembran (Tonotopie: Basis = hohe Frequenz ~20 kHz, Apex = niedrige Frequenz ~20 Hz) → Stereozilien (Haarzellen) biegen → Tip-Links spannen → K⁺-Kanäle öffnen (Endolymphe K⁺-reich, +80 mV) → Depolarisation → Glutamat → N. cochlearis",
          "Schallwellen werden direkt zu elektrischen Signalen",
          "Basilarmembran ist überall gleich",
          "Endolymphe ist Na⁺-reich"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: **SCHALLÜBERTRAGUNG** im Ohr erfolgt in 3 Stufen (Außenohr, Mittelohr, Innenohr), mit **Impedanzanpassung** (Luft → Flüssigkeit) im Mittelohr. **ABLAUF:** (1) **SCHALLWELLEN** (Luftdruckschwankungen) → Ohrmuschel (Schallsammlung) → äußerer Gehörgang (~2.5 cm). (2) **TROMMELFELL** (Membrana tympani) schwingt (Auslenkung ~1 nm bei Hörschwelle!). (3) **GEHÖRKNÖCHELCHEN** (kleinste Knochen, Mittelohr, luftgefüllt): **Hammer** (Malleus, an Trommelfell) → **Amboss** (Incus) → **Steigbügel** (Stapes, Fußplatte an Oval-Fenster). **IMPEDANZANPASSUNG (~22-fach Druckverstärkung):** (a) **Hebelwirkung** (Hammer-Amboss, ~1.3-fach). (b) **Flächenreduktion** (Trommelfell 55 mm² → Oval-Fenster 3.2 mm², ~17-fach Druckerhöhung [Druck = Kraft/Fläche]). Ohne Impedanzanpassung: 99.9% Schallenergie würde reflektiert werden (Luft-Flüssigkeit-Grenze)! (4) **OVAL-FENSTER** (membranbedeckte Öffnung zu Innenohr) → Steigbügel-Fußplatte drückt → **Perilymphe** (Na⁺-reich, wie EZF) in **Scala vestibuli** (oberer Gang in Cochlea) bewegt sich. (5) **WANDERWELLE** auf **BASILARMEMBRAN** (trennt Scala media [Endolymphe, K⁺-reich] von Scala tympani [Perilymphe]). **TONOTOPIE** (Frequenz-Orts-Kodierung): Basilarmembran ist **NICHT uniform** → **Basis** (nahe Oval-Fenster): schmal (~0.1 mm), steif → **hohe Frequenzen** (~20.000 Hz) → **Apex** (Spitze): breit (~0.5 mm), flexibel → **niedrige Frequenzen** (~20 Hz). Wanderwelle erreicht Maximum bei Resonanzfrequenz. (6) **CORTI-ORGAN** (auf Basilarmembran): Basilarmembran bewegt sich → **Stereozilien** (Haarzellen) biegen gegen **Tektorialmembran** (gelartig, darüber). (7) **MECHANO-TRANSDUKTION:** **Tip-Links** (Cadherin 23, verbinden Stereozilien) spannen → **Mechano-sensitive K⁺-Kanäle** (TMC1/2, direkt mechanisch, KEIN Second Messenger!) **ÖFFNEN**. (8) **K⁺ strömt EIN** (Endolymphe ist K⁺-reich [~150 mM] + positiv [+80 mV, Endocochleäres Potential, via Stria vascularis], Treibkraft ~120 mV!) → **DEPOLARISATION** (Haarzelle, von -70 mV → -40 mV). (9) Spannungsgesteuerte **Ca²⁺-Kanäle** (Ca_v1.3) öffnen → Ca²⁺ rein → **Glutamat-Freisetzung** (Synapse, Ribbon-Synapse [spezielle Struktur für schnelle/tonische Freisetzung]). (10) **N. cochlearis** (Spiralganglion-Neuronen, bipolar) → Aktionspotential → Hirnstamm (Nucleus cochlearis) → auditorischer Kortex (Gyrus temporalis superior, Heschl-Querwindungen). (11) **RUNDES FENSTER** (membranbedeckte Öffnung, Scala tympani) wölbt sich aus (Druckausgleich, da Perilymphe inkompressibel). **KLINISCH:** Schwerhörigkeit (Schallleitungsschwerhörigkeit [Mittelohr: Otosklerose, Trommelfell-Perforation] vs. Schallempfindungsschwerhörigkeit [Innenohr: Haarzellen-Schädigung durch Lärm/Alter/Ototoxika: Aminoglykoside, Cisplatin, Furosemid]). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Hautrezeptoren gibt es und was ist ihre Funktion?",
          options: [
          "Alle Hautrezeptoren sind identisch",
          "Meissner-Körperchen (Dermis-Papillen, Berührung leicht, schnell adaptierend, 10-50 Hz). Pacini-Körperchen (tiefe Dermis, Vibration, schnell adaptierend, 200-300 Hz). Merkel-Zellen (Epidermis basale, Druck statisch, langsam adaptierend, feine Details). Ruffini-Körperchen (Dermis tief, Dehnung, langsam adaptierend). Freie Nervenendigungen (Epidermis/Dermis, Schmerz/Temperatur, Aδ [schnell, scharf], C-Fasern [langsam, brennend], TRPM8 [Kälte ~25°C], TRPV1 [Wärme ~43°C])",
          "Nur Meissner-Körperchen existieren",
          "Pacini-Körperchen sind für Schmerz",
          "Merkel-Zellen sind nur in Dermis"
          ],
          correctIndex: 1,
          explanation: "B ist korrekt: Die Haut enthält spezialisierte **MECHANOREZEPTOREN** (Berührung, Druck, Vibration, Dehnung), **THERMOREZEPTOREN** (Temperatur) und **NOZIZEPTOREN** (Schmerz), die verschiedene Reize codieren. **MECHANOREZEPTOREN:** (1) **MEISSNER-KÖRPERCHEN** (Corpuscula tactus): **Lokalisation:** Dermis-Papillen (oberflächlich), besonders Fingerbeeren, Lippen, Zunge (hohe Dichte). **Modalität:** **Berührung** (leicht, sanft), **Textur**. **Adaptation:** **SCHNELL** (phasisch, reagiert auf Änderung, nicht auf konstanten Reiz). **Frequenz:** Niedrig (10-50 Hz, dynamisch). **Funktion:** Feine Textur-Diskrimination (z.B. Braille-Lesen). (2) **PACINI-KÖRPERCHEN** (Corpuscula lamellosa): **Lokalisation:** Tiefe Dermis, Subcutis (Fettgewebe), Faszien, Gelenke. **Modalität:** **Vibration** (hochfrequent). **Adaptation:** **SCHNELL** (sehr schnell, phasisch). **Frequenz:** Hoch (200-300 Hz). **Struktur:** Zwiebelschalen-artig (Lamellen, filtern niederfrequente Reize). **Funktion:** Vibration (z.B. Werkzeug-Nutzung), Oberflächentextur bei Bewegung. (3) **MERKEL-ZELLEN** (Merkel-Tastscheiben): **Lokalisation:** **Epidermis** (Stratum basale), besonders Fingerbeeren, Lippen. **Modalität:** **Druck** (statisch, kontinuierlich). **Adaptation:** **LANGSAM** (tonisch, reagiert auf konstanten Reiz). **Frequenz:** Niedrig (0.3-3 Hz, statisch). **Funktion:** **Feine Details** (Kanten, Formen, Buchstaben-Erkennung), höchste räumliche Auflösung (~1 mm). **Neurotransmitter:** Merkel-Zellen setzen Serotonin/Substanz P frei (ungewöhnlich für Nicht-Neuron). (4) **RUFFINI-KÖRPERCHEN** (Corpuscula bulboidea): **Lokalisation:** Dermis (tief), Gelenkkapseln, Sehnen. **Modalität:** **Dehnung** (Hautdehnung, Gelenkstellung). **Adaptation:** **LANGSAM** (tonisch). **Frequenz:** Niedrig (15-400 Hz). **Funktion:** Propriozeption (Gelenkstellung), Hautdehnung (z.B. Greifen). **THERMOREZEPTOREN (freie Nervenendigungen):** (1) **KÄLTEREZEPTOREN:** **TRPM8** (Transient Receptor Potential Melastatin 8, aktiviert bei ~25°C, auch Menthol). **Fasern:** **Aδ-Fasern** (myelinisiert, schnell ~20 m/s, \"kalt\"). (2) **WÄRMEREZEPTOREN:** **TRPV1** (Vanilloid 1, aktiviert bei ~43°C, auch **Capsaicin** [Chili]). **TRPV3/4** (warmere Temperaturen 30-40°C). **Fasern:** **C-Fasern** (unmyelinisiert, langsam ~1 m/s, \"warm/heiß\"). **NOZIZEPTOREN (Schmerzrezeptoren, freie Nervenendigungen):** **KEINE spezialisierten Strukturen** (im Gegensatz zu Mechanorezeptoren). **Lokalisation:** Epidermis, Dermis, Periost, Meningen (überall, NICHT Gehirnparenchym). **Fasern:** (1) **Aδ-Fasern** (myelinisiert, ~20 m/s): **Schneller Schmerz** (scharf, lokalisierbar, \"first pain\"). (2) **C-Fasern** (unmyelinisiert, ~1 m/s): **Langsamer Schmerz** (brennend, dumpf, diffus, \"second pain\"). **Aktivierung:** Mechanisch (Verletzung, hoher Druck), thermisch (Hitze >43°C [TRPV1], Kälte <15°C), **chemisch** (Bradykinin [Entzündung], **Prostaglandine** [PGE₂, Entzündung, NSAID-Target], Substanz P, H⁺ [Azidose], ATP [Zellschädigung], Capsaicin [TRPV1]). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: [],
          hints: [
            "Überlege: Welche Rezeptoren reagieren auf Capsaicin (Chili) und welcher Kanal ist verantwortlich?",
            "TRPV1 (Transient Receptor Potential Vanilloid 1) wird sowohl durch Wärme (>43°C) als auch durch Capsaicin aktiviert – Schmerz und Wärme teilen sich denselben Rezeptor."
          ],
        }
      ],
      klinischerBezug: "Glaukom (Grüner Star): erhöhter Augeninnendruck (>21 mmHg) durch gestörten Kammerwasser-Abfluss (Schlemm-Kanal) → Papillenexkavation (N. opticus) → Gesichtsfeldverlust. Therapie: Betablocker (Timolol, β₁-Hemmung → Kammerwasserproduktion ↓), Prostaglandinanaloga (Latanoprost → Abfluss ↑), Pilocarpin (M3-Agonist → Ziliarmuskel → Trabekelwerk öffnet). Katarakt (Grauer Star): Linsentrübung (UV, Diabetes, Kortison, Alter) → verschwommene Sicht; Therapie: OP (Phakoemulsifikation + IOL). Schalltrauma: chronische Lärm-Exposition → Cochlea-Haarzellen zerstört (Stereozilien, Apex der Basilarmembran bei 4 kHz besonders vulnerabel) → Lärmschwerhörigkeit (Hochton-Verlust, Tinnnitus). Presbyakusis: Altersbedingte Hochtonchwerhörigkeit durch Haarzell-Verlust. Retinitis pigmentosa: genetische Stäbchen-Degeneration → Nachtblindheit → Tunnelblick. Makuladegeneration: Photorezeptoren in Fovea geschädigt → Verlust von feinem zentralem Sehen."
    },
    {
      id: 'bio-3-03',
      title: "Hormonsystem",
      content: `# Hormonsystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 16 Minuten
**Stichwortliste-Abdeckung:** 11/11 Stichwörter

---

## Einleitung

Das **Hormonsystem** (endokrines System) ist neben dem Nervensystem das zweite große Kommunikationssystem des Körpers. Es reguliert langfristige Prozesse wie Wachstum, Stoffwechsel, Fortpflanzung und Homöostase durch **Hormone** – chemische Botenstoffe, die über das Blut zu ihren Zielorganen transportiert werden.

**Zentrale Steuerung:** Die **Hypothalamus-Hypophyse-Achse** koordiniert viele endokrine Drüsen über hierarchische **Regelkreise** mit negativer Rückkopplung.

**Wichtigste Organe:** Schilddrüse (Stoffwechsel), Nebenniere (Stress), Pankreas (Blutzucker).

---

## Kerninhalt

### 1. Hormone – Klassifikation und Wirkungsmechanismen

**Hormon-Typen:**

| Typ | Beispiele | Eigenschaften | Rezeptorlokalisation | Wirkungsmechanismus |
|-----|-----------|---------------|---------------------|---------------------|
| **Peptidhormone** (hydrophil) | Insulin, Glukagon, ACTH, TSH, ADH | Wasserlöslich, membrangängig NEIN | Zellmembran | G-Protein oder Tyrosinkinase → Second Messenger (cAMP, IP₃, Ca²⁺) |
| **Steroidhormone** (lipophil) | Cortisol, Aldosteron, Testosteron, Östrogen | Fettlöslich, membrangängig JA | Zellkern (intrazelluläre Rezeptoren) | Hormon-Rezeptor-Komplex → DNA-Bindung → Transkription ↑/↓ |
| **Aminosäurederivate** | Adrenalin/Noradrenalin (hydrophil), T₃/T₄ (lipophil) | Gemischt | Adrenalin: Membran; T₃/T₄: Zellkern | Variabel je nach Hormon |

⭐ **Prüfungswichtig:** Peptidhormone wirken schnell (Minuten) über **Second Messenger** (z. B. cAMP → Proteinkinase A), Steroidhormone wirken langsam (Stunden) über **Genexpression**.

---

### 2. ⭐ Hypothalamus-Hypophyse-Achse (Zentrale Steuerung)

Die **Hypothalamus-Hypophyse-Achse** ist die oberste Kontrollinstanz des endokrinen Systems.

**Hypothalamus:**
- Produziert **Releasing-Hormone** (RH) und **Inhibiting-Hormone** (IH)
- Wichtigste:
  - **TRH** (Thyrotropin-Releasing Hormone) → stimuliert TSH-Freisetzung
  - **CRH** (Corticotropin-Releasing Hormone) → stimuliert ACTH-Freisetzung
  - **GnRH** (Gonadotropin-Releasing Hormone) → stimuliert FSH/LH-Freisetzung
  - **GHRH** (Growth Hormone-Releasing Hormone) → stimuliert GH-Freisetzung
  - **Somatostatin** (IH) → hemmt GH-Freisetzung

**Hypophyse (Hirnanhangsdrüse):**

| Teil | Hormone | Zielorgane/Wirkung |
|------|---------|-------------------|
| **Hypophysenvorderlappen (Adenohypophyse)** | **TSH** (Thyreoidea-stimulierendes Hormon) | Schilddrüse → T₃/T₄-Freisetzung ↑ |
| | **ACTH** (Adrenocorticotropes Hormon) | Nebennierenrinde → Cortisol-Freisetzung ↑ |
| | **FSH/LH** (Follikel-/luteinisierendes Hormon) | Gonaden → Östrogen/Testosteron, Ovulation |
| | **GH** (Growth Hormone/Somatotropin) | Leber (IGF-1), Knochen/Muskeln → Wachstum ↑ |
| | **Prolaktin** | Brustdrüse → Milchproduktion |
| **Hypophysenhinterlappen (Neurohypophyse)** | **ADH** (Antidiuretisches Hormon/Vasopressin) | Niere → Wasserrückresorption ↑ (V₂-Rezeptor → Aquaporin-2) |
| | **Oxytocin** | Uterus (Wehen), Brustdrüse (Milchfluss) |

⭐ **Prüfungswichtig:** ADH und Oxytocin werden im **Hypothalamus** synthetisiert, aber im **Hypophysenhinterlappen** gespeichert und freigesetzt (neuroendokrine Verbindung).

---

### 3. ⭐ Schilddrüse (Thyroxin T₄ und Trijodthyronin T₃)

**Biosynthese:**
1. **Jodid-Aufnahme** in Thyreozyten (Natrium-Jodid-Symporter, NIS)
2. **Thyreoglobulin** (TG) wird synthetisiert und in Follikel-Kolloid gespeichert
3. **Thyreoperoxidase (TPO)** oxidiert Jodid → Jod (J₂) → **Jodierung von Tyrosin-Resten** in TG:
   - Monojodtyrosin (MIT)
   - Dijodtyrosin (DIT)
4. **Kopplung:** DIT + DIT → **T₄** (Thyroxin, 4 Jod-Atome); MIT + DIT → **T₃** (Trijodthyronin, 3 Jod-Atome)
5. TG-Endozytose → Proteolyse → **T₃/T₄-Freisetzung** ins Blut

**Transport:** Hauptsächlich an **TBG** (Thyroxin-bindendes Globulin) gebunden, nur freies T₃/T₄ biologisch aktiv.

**Wirkung:**
- ⭐ **T₃** ist 3–5× potenter als T₄ (T₄ = Prohormon, periphere Dejodierung → T₃)
- **Stoffwechselsteigerung:** Grundumsatz ↑, Sauerstoffverbrauch ↑, Wärmeproduktion ↑
- **Herzwirkung:** β-Rezeptoren ↑ → HF ↑, Kontraktilität ↑
- **Wachstum:** Skelett, ZNS (bei Kindern essentiell!)

**Regelkreis (negative Rückkopplung):**
- Hypothalamus: **TRH** ↑ → Hypophyse: **TSH** ↑ → Schilddrüse: **T₃/T₄** ↑
- T₃/T₄ ↑ → **TRH ↓, TSH ↓** (negative Feedback)

⭐ **Klinisch:**
- **Hypothyreose:** T₃/T₄ ↓, TSH ↑ → Müdigkeit, Gewichtszunahme, Bradykardie, Myxödem
- **Hyperthyreose:** T₃/T₄ ↑, TSH ↓ → Nervosität, Gewichtsverlust, Tachykardie, Exophthalmus (Morbus Basedow)
- **Hashimoto-Thyreoiditis:** Autoimmun-TPO-Antikörper → Hypothyreose
- **Jodmangel:** TSH ↑ → Struma (Kropf)

---

### 4. ⭐ Nebenniere (Cortisol und Adrenalin)

**Anatomie:**
- **Nebennierenrinde (NNR):** 3 Schichten (außen → innen):
  - Zona glomerulosa → **Aldosteron** (Mineralokortikoid)
  - Zona fasciculata → **Cortisol** (Glukokortikoid)
  - Zona reticularis → **DHEA** (Androgene)
- **Nebennierenmark (NNM):** Chromaffine Zellen → **Adrenalin (80%), Noradrenalin (20%)**

#### 4a. Cortisol (Stresshormon, langfristig)

**Biosynthese:** Cholesterin → Pregnenolon → Progesteron → **Cortisol** (Enzym-Kaskade in NNR)

**Regelkreis:**
- Hypothalamus: **CRH** → Hypophyse: **ACTH** → NNR: **Cortisol** ↑
- Cortisol ↑ → **CRH ↓, ACTH ↓** (negative Feedback)

⭐ **Wirkungen (antiinflammatorisch, immunsuppressiv, metabolisch):**

| Gewebe | Effekt |
|--------|--------|
| **Leber** | Glukoneogenese ↑ → Blutzucker ↑ |
| **Muskel/Fett** | Proteinkatabolismus ↑, Lipolyse ↑ |
| **Immunsystem** | Entzündungshemmung (Phospholipase A₂ ↓ → Prostaglandine ↓), Lymphozyten ↓ |
| **Knochen** | Osteoblasten ↓ → Osteoporose-Risiko |
| **Niere** | Schwache mineralocorticoide Wirkung (Na⁺-Retention bei hohen Dosen) |

⭐ **Klinisch:**
- **Cushing-Syndrom:** Cortisol ↑ → Stammfettsucht, Vollmondgesicht, Striae, Osteoporose, Hyperglykämie
- **Morbus Addison:** Cortisol ↓, Aldosteron ↓ → Hypotonie, Hyperpigmentierung (ACTH ↑ → MSH-Effekt), Hyponatriämie

#### 4b. Adrenalin (Stresshormon, akut)

**Biosynthese:** Tyrosin → DOPA → Dopamin → Noradrenalin → **Adrenalin** (PNMT im NNM)

**Freisetzung:** Sympathikus (präganglionäre Fasern) → Acetylcholin → Chromaffine Zellen → Adrenalin ins Blut

⭐ **Wirkungen (Fight-or-Flight):**

| Rezeptor | Gewebe | Effekt |
|----------|--------|--------|
| **α₁** | Gefäße (peripher) | Vasokonstriktion → Blutdruck ↑ |
| **β₁** | Herz | HF ↑, Kontraktilität ↑ → HZV ↑ |
| **β₂** | Bronchien | Bronchodilatation |
| | Skelettmuskel-Gefäße | Vasodilatation |
| | Leber, Muskel | Glykogenolyse ↑ → Blutzucker ↑ |
| | Pankreas | Insulin ↓ (α₂-Rezeptor β-Zellen) |

⭐ **Prüfungswichtig:** Adrenalin wirkt auf **alle Adrenorezeptoren** (α₁, β₁, β₂), während Noradrenalin hauptsächlich α₁/β₁ (wenig β₂).

---

### 5. ⭐ Pankreas (Insulin und Glukagon – Blutzuckerregulation)

Das Pankreas ist ein **gemischt exokrin-endokrines Organ**:
- **Exokrin (99%):** Azinuszellen → Verdauungsenzyme (Trypsin, Lipase, Amylase)
- **Endokrin (1%):** **Langerhans-Inseln** → Hormone

**Langerhans-Inseln:**

| Zelltyp | Anteil | Hormon | Wirkung |
|---------|--------|--------|---------|
| **β-Zellen** | 65–80% | **Insulin** | Blutzucker ↓ (Glukoseaufnahme ↑, Glykogensynthese ↑, Lipolyse ↓) |
| **α-Zellen** | 15–20% | **Glukagon** | Blutzucker ↑ (Glykogenolyse ↑, Glukoneogenese ↑) |
| **δ-Zellen** | 5–10% | **Somatostatin** | Hemmt Insulin + Glukagon (parakriner Regulator) |

#### 5a. ⭐ Insulin (anaboles Hormon)

**Struktur:** 51 Aminosäuren, 2 Ketten (A + B) über Disulfidbrücken, Peptidhormom.

**Freisetzungs-Mechanismus:**
1. **Glukose** ↑ im Blut → GLUT2-Transporter (insulinunabhängig) → β-Zelle
2. Glykolyse → ATP ↑ → **ATP-sensitive K⁺-Kanäle schließen** → **Depolarisation**
3. Ca²⁺-Kanäle öffnen → **Ca²⁺** ↑ → Exozytose von **Insulin-Granula**

⭐ **Wirkungen (Blutzucker ↓):**

| Gewebe | Effekt | Mechanismus |
|--------|--------|-------------|
| **Skelettmuskel + Fett** | Glukoseaufnahme ↑ | GLUT4-Translokation an Membran |
| **Leber** | Glykogensynthese ↑ (Glykogensynthase ↑), Glukoneogenese ↓ | Enzym-Regulation |
| **Fettgewebe** | Lipogenese ↑, Lipolyse ↓ | Hormon-sensitive Lipase ↓ |
| **Muskel** | Proteinsynthese ↑ | Anabole Wirkung |

⭐ **Klinisch:**
- **Diabetes mellitus Typ 1:** Autoimmun-Zerstörung β-Zellen → Insulin ↓ → Hyperglykämie, Ketoazidose
- **Diabetes mellitus Typ 2:** Insulinresistenz (GLUT4 ↓, Rezeptor-Signalweg gestört) → Hyperglykämie, β-Zell-Erschöpfung
- **Hypoglykämie:** Insulin ↑↑ (z. B. Insulinom, Überdosierung) → Glukose <50 mg/dl → Tremor, Schwitzen, Bewusstlosigkeit

#### 5b. ⭐ Glukagon (kataboles Hormon)

**Freisetzung:** Blutzucker ↓ → α-Zellen → Glukagon ↑

⭐ **Wirkungen (Blutzucker ↑):**

| Gewebe | Effekt | Mechanismus |
|--------|--------|-------------|
| **Leber** | **Glykogenolyse** ↑ | Glykogenphosphorylase ↑ |
| | **Glukoneogenese** ↑ | PEPCK ↑, Fructose-1,6-Bisphosphatase ↑ |
| **Fettgewebe** | Lipolyse ↑ | Freie Fettsäuren → β-Oxidation → Ketogenese |

⭐ **Gegenspieler-Prinzip:**
- **Insulin** = anaboles Hormon (Speicherung: Glykogen ↑, Fett ↑, Protein ↑)
- **Glukagon** = kataboles Hormon (Mobilisierung: Glykogen → Glukose, Fett → FFA, Protein → Aminosäuren)

**Insulin/Glukagon-Ratio:**
- **Nach Mahlzeit:** Insulin ↑, Glukagon ↓ → Glukoseaufnahme + Speicherung
- **Fasten/Hunger:** Insulin ↓, Glukagon ↑ → Glukosebereitstellung

---

### 6. ⭐ Regelkreise und negative Rückkopplung

**Negative Feedback (klassisches Prinzip):**

Das endokrine System nutzt **negative Rückkopplung** zur Homöostase:

1. **Hypothalamus** → Releasing-Hormon (RH) → **Hypophyse** → trophes Hormon (z. B. TSH) → **periphere Drüse** → Effektor-Hormon (z. B. T₃/T₄)
2. Effektor-Hormon ↑ → hemmt **RH** und **trophes Hormon** (negative Feedback-Schleifen)

**Beispiel 1: Schilddrüsen-Achse**
- Hypothalamus: TRH ↑ → Hypophyse: TSH ↑ → Schilddrüse: T₃/T₄ ↑
- T₃/T₄ ↑ → **TRH ↓, TSH ↓**

**Beispiel 2: Stress-Achse**
- Hypothalamus: CRH ↑ → Hypophyse: ACTH ↑ → Nebenniere: Cortisol ↑
- Cortisol ↑ → **CRH ↓, ACTH ↓**

⭐ **Prüfungswichtig:** Bei **primärer Unterfunktion** einer Drüse (z. B. Schilddrüse zerstört) → Effektor-Hormon ↓ → keine negative Rückkopplung → **TSH ↑↑** (kompensatorisch).

**Positive Feedback (selten):**
- **Ovulation:** Östrogen ↑ (Follikelreifung) → **LH-Surge** ↑ → Ovulation (positives Feedback kurz vor Eisprung)
- **Geburt:** Oxytocin → Wehen → Zervixdehnung → **Oxytocin ↑** (positive Schleife bis Geburt abgeschlossen)

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Hormon-Klassifikation:** Peptid- vs. Steroidhormone (Rezeptorlokalisation, Wirkgeschwindigkeit)
2. **Hypothalamus-Hypophyse-Achse:** TRH/TSH/T₃/T₄, CRH/ACTH/Cortisol (Regelkreise mit negativer Rückkopplung)
3. **Schilddrüse:** T₃/T₄-Biosynthese (Jodierung, TPO), Wirkungen (Stoffwechsel ↑), Hypothyreose vs. Hyperthyreose
4. **Nebenniere:** Cortisol (Glukoneogenese ↑, immunsuppressiv) vs. Adrenalin (Fight-or-Flight, β₁/β₂-Rezeptoren)
5. **Pankreas:** Insulin (GLUT4, Glykogensynthese ↑, Blutzucker ↓) vs. Glukagon (Glykogenolyse ↑, Glukoneogenese ↑, Blutzucker ↑)
6. **Regelkreise:** Negative Rückkopplung (T₃/T₄ ↑ → TSH ↓), primäre vs. sekundäre Unterfunktion (TSH ↑ vs. TSH ↓)

---

## Merksätze

>>>> **Hypothalamus-Hypophyse-Achse:** „TRH macht TSH, CRH macht ACTH, GnRH macht FSH/LH – negative Feedback stoppt die Achterbahn!"
>>>> (TRH → TSH → T₃/T₄; CRH → ACTH → Cortisol; beide mit negativer Rückkopplung)

>>>> **Schilddrüsen-Biosynthese:** „TPO jodiert Tyrosin zu MIT und DIT – 2×DIT = T₄ (Thyroxin), MIT+DIT = T₃ (Trijodthyronin)."
>>>> (Thyreoperoxidase jodiert Tyrosin-Reste → Kopplung → T₃/T₄)

>>>> **Insulin vs. Glukagon:** „Insulin senkt Zucker (GLUT4 rein, Glykogen speichern), Glukagon hebt Zucker (Glykogen spalten, Glukose neu bauen)."
>>>> (Insulin = anabolic [Speicherung], Glukagon = catabolic [Mobilisierung])

>>>> **Cortisol-Wirkungen:** „Cortisol macht Zucker (Glukoneogenese), bremst Immun (Entzündung ↓), baut Knochen ab (Osteoporose-Risiko)."
>>>> (Glukoneogenese ↑, antiinflammatorisch, immunsuppressiv, Osteoblasten ↓)

---

**Navigation:**
← [Zurück: Bio Kap 3 UK02 – Sinnesorgane und Haut](Bio_Kap3_UK02_Sinnesorgane_Haut.md) | [Weiter: Bio Kap 3 UK04 – Immunsystem](Bio_Kap3_UK04_Immunsystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über die Klassifikation von Hormonen trifft zu?",
          options: [
          "Peptidhormone wie Insulin wirken über intrazelluläre Rezeptoren und regulieren die Genexpression direkt.",
          "Steroidhormone wie Cortisol sind hydrophil und benötigen Membranrezeptoren für ihre Wirkung.",
          "Peptidhormone wirken über Membranrezeptoren und Second Messenger wie cAMP, während Steroidhormone die Genexpression direkt beeinflussen.",
          "Alle Aminosäurederivate wie T₃/T₄ und Adrenalin wirken ausschließlich über G-Protein-gekoppelte Rezeptoren.",
          "Steroidhormone wirken schneller als Peptidhormone, da sie die Zellmembran direkt passieren können."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** Peptidhormone (z. B. Insulin, Glukagon, ACTH) sind **hydrophil** und können die Zellmembran nicht passieren → wirken über **Membranrezeptoren** (G-Protein oder Tyrosinkinase) → **Second Messenger** (cAMP, IP₃, Ca²⁺) → schnelle Wirkung (Minuten). Steroidhormone (z. B. Cortisol, Östrogen, Testosteron) sind **lipophil** → passieren Membran → binden an **intrazelluläre Rezeptoren** im Zellkern → Hormon-Rezeptor-Komplex → DNA-Bindung → **Genexpression** ↑/↓ → langsame Wirkung (Stunden).\n\n**Falsch (A):** Insulin ist ein Peptidhormom und wirkt über **Membranrezeptoren** (Tyrosinkinase), nicht intrazellulär.\n\n**Falsch (B):** Cortisol ist **lipophil**, nicht hydrophil, und wirkt über **intrazelluläre Rezeptoren**, nicht Membranrezeptoren.\n\n**Falsch (D):** T₃/T₄ sind **lipophile** Aminosäurederivate und wirken über **intrazelluläre Rezeptoren** (wie Steroidhormone), nicht über G-Protein-gekoppelte Rezeptoren. Adrenalin ist hydrophil und wirkt über G-Protein-gekoppelte Rezeptoren.\n\n**Falsch (E):** Steroidhormone wirken **langsamer** (Stunden), da Genexpression Zeit benötigt. Peptidhormone wirken **schneller** (Minuten) über Second Messenger.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Patient mit Hypothyreose zeigt erhöhte TSH-Werte und erniedrigte T₃/T₄-Werte. Welche Aussage über die zugrundeliegende Störung trifft zu?",
          options: [
          "Es handelt sich um eine sekundäre Hypothyreose, da die Hypophyse überaktiv ist.",
          "Es liegt eine primäre Hypothyreose vor, bei der die Schilddrüse selbst geschädigt ist und die negative Rückkopplung wegfällt.",
          "Die erhöhten TSH-Werte zeigen eine Hyperthyreose an, die durch Morbus Basedow verursacht wird.",
          "Die negative Rückkopplung ist intakt, sodass T₃/T₄ TSH hemmen und die Werte im Normalbereich liegen.",
          "Die Ursache ist ein TRH-Mangel im Hypothalamus, der zu kompensatorisch erhöhtem TSH führt."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Bei **primärer Hypothyreose** ist die **Schilddrüse** selbst geschädigt (z. B. Hashimoto-Thyreoiditis, Jodmangel, chirurgische Entfernung) → T₃/T₄ ↓ → **negative Rückkopplung fällt weg** → Hypothalamus/Hypophyse produzieren kompensatorisch **TRH ↑, TSH ↑**. Typische Laborkonstellation: **TSH ↑, T₃/T₄ ↓**.\n\n**Falsch (A):** Bei **sekundärer Hypothyreose** ist die Hypophyse geschädigt (z. B. Tumor, Hypophysitis) → **TSH ↓** → T₃/T₄ ↓. Die Hypophyse ist **nicht** überaktiv, sondern **unteraktiv**. Konstellation: **TSH ↓, T₃/T₄ ↓**.\n\n**Falsch (C):** Erhöhte TSH-Werte und erniedrigte T₃/T₄-Werte sprechen für **Hypothyreose**, nicht Hyperthyreose. Bei Morbus Basedow (TSH-Rezeptor-Antikörper) → T₃/T₄ ↑, TSH ↓.\n\n**Falsch (D):** Die negative Rückkopplung ist **nicht** intakt, da T₃/T₄ ↓ sind und TSH ↑ ist (keine Hemmung).\n\n**Falsch (E):** TRH-Mangel (tertiäre Hypothyreose, Hypothalamus-Störung) führt zu **TSH ↓** (nicht ↑), da der Stimulus für die Hypophyse fehlt. Konstellation: **TRH ↓, TSH ↓, T₃/T₄ ↓**.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Biosynthese und Wirkung von Schilddrüsenhormonen ist korrekt?",
          options: [
          "T₄ ist biologisch aktiver als T₃ und wird direkt in den Thyreozyten aus Thyreoglobulin freigesetzt.",
          "Thyreoperoxidase (TPO) jodiert Tyrosin-Reste in Thyreoglobulin, wobei die Kopplung von 2×DIT zu T₄ führt.",
          "T₃ und T₄ wirken über G-Protein-gekoppelte Rezeptoren an der Zellmembran und aktivieren cAMP als Second Messenger.",
          "Bei Jodmangel sinkt TSH, da die Schilddrüse weniger T₃/T₄ produziert und die negative Rückkopplung verstärkt wird.",
          "Schilddrüsenhormone hemmen den Grundumsatz und senken die Herzfrequenz durch β-Rezeptor-Downregulation."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Die **Biosynthese** erfolgt in mehreren Schritten:\n1. Jodid-Aufnahme (NIS)\n2. **Thyreoperoxidase (TPO)** oxidiert Jodid → Jod → **jodiert Tyrosin-Reste** in Thyreoglobulin (TG) → **Monojodtyrosin (MIT)** und **Dijodtyrosin (DIT)**\n3. **Kopplung:** **2×DIT → T₄** (4 Jod-Atome), **MIT + DIT → T₃** (3 Jod-Atome)\n4. TG-Endozytose → Proteolyse → T₃/T₄-Freisetzung.\n\n**Falsch (A):** **T₃** ist 3–5× **potenter** (biologisch aktiver) als T₄. T₄ ist das **Prohormon** und wird peripher durch Dejodierung zu T₃ konvertiert.\n\n**Falsch (C):** T₃/T₄ sind **lipophile** Aminosäurederivate und wirken über **intrazelluläre Rezeptoren** im Zellkern (ähnlich Steroidhormonen) → Genexpression ↑. Sie wirken **nicht** über Membranrezeptoren/cAMP.\n\n**Falsch (D):** Bei **Jodmangel** → T₃/T₄ ↓ → **TSH ↑** (kompensatorisch, negative Rückkopplung fällt weg) → **Struma** (Kropf durch TSH-Stimulation).\n\n**Falsch (E):** Schilddrüsenhormone **steigern** den Grundumsatz (Stoffwechsel ↑, Sauerstoffverbrauch ↑, Wärmeproduktion ↑) und **erhöhen** die Herzfrequenz durch **β-Rezeptor-Upregulation** (nicht Downregulation).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Patient unter chronischer Corticosteroid-Therapie entwickelt ein Cushing-Syndrom. Welche der folgenden Aussagen über Cortisol trifft zu?",
          options: [
          "Cortisol hemmt die Glukoneogenese in der Leber und senkt den Blutzuckerspiegel.",
          "Cortisol steigert die Glukoneogenese, wirkt antiinflammatorisch durch Hemmung der Phospholipase A₂ und erhöht das Osteoporose-Risiko durch Hemmung der Osteoblasten.",
          "Cortisol wird im Nebennierenmark durch PNMT aus Noradrenalin synthetisiert.",
          "Die negative Rückkopplung von Cortisol führt zu erhöhten CRH- und ACTH-Werten bei chronischer Substitution.",
          "Cortisol stimuliert das Immunsystem und fördert Entzündungsreaktionen durch Prostaglandin-Synthese."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Cortisol hat vielfältige Wirkungen:\n\n**Metabolisch:**\n- **Leber:** **Glukoneogenese ↑** → Blutzucker ↑ (diabetogene Wirkung)\n- **Muskel/Fett:** Proteinkatabolismus ↑, Lipolyse ↑\n\n**Immunsuppressiv/antiinflammatorisch:**\n- **Phospholipase A₂ ↓** → Arachidonsäure ↓ → **Prostaglandine ↓, Leukotriene ↓** → Entzündung ↓\n- Lymphozyten ↓, Zytokine ↓\n\n**Knochen:**\n- **Osteoblasten ↓** → Knochenaufbau ↓ → **Osteoporose-Risiko ↑** (bei chronischer Therapie)\n\n**Klinisch (Cushing-Syndrom):** Stammfettsucht, Vollmondgesicht, Striae, Hyperglykämie, Osteoporose, Immunsuppression.\n\n**Falsch (A):** Cortisol **steigert** die Glukoneogenese (nicht hemmt) und **erhöht** den Blutzucker (diabetogene Wirkung).\n\n**Falsch (C):** Cortisol ist ein **Glukokortikoid** und wird in der **Nebennierenrinde (Zona fasciculata)** aus Cholesterin synthetisiert, **nicht** im Mark. **Adrenalin** (nicht Cortisol) wird im Nebennierenmark durch PNMT aus Noradrenalin synthetisiert.\n\n**Falsch (D):** Bei chronischer Cortisol-Substitution (exogen) → **CRH ↓, ACTH ↓** (negative Rückkopplung intakt). Langfristig kann dies zur **Nebennierenrinden-Atrophie** führen.\n\n**Falsch (E):** Cortisol ist **immunsuppressiv** und **antiinflammatorisch** (hemmt Prostaglandine, nicht fördert). Es wird therapeutisch bei Autoimmunerkrankungen, Allergien und Transplantationen eingesetzt.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Regulation des Blutzuckerspiegels durch Insulin und Glukagon ist korrekt?",
          options: [
          "Insulin wird von α-Zellen der Langerhans-Inseln freigesetzt und fördert die Glykogenolyse in der Leber.",
          "Glukagon stimuliert die GLUT4-Translokation in Muskel- und Fettzellen, um die Glukoseaufnahme zu erhöhen.",
          "Insulin fördert die Translokation von GLUT4-Transportern zur Zellmembran in Muskel- und Fettzellen und steigert die Glykogensynthese in der Leber.",
          "Glukagon senkt den Blutzucker durch Hemmung der Glukoneogenese und Aktivierung der Glykogensynthase.",
          "Die Insulin-Freisetzung erfolgt unabhängig von ATP-Spiegeln in β-Zellen durch direkte Ca²⁺-Aktivierung."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Insulin** (β-Zellen, 65–80% der Langerhans-Inseln) senkt den Blutzucker durch:\n\n**1. Glukoseaufnahme ↑:**\n- **Skelettmuskel + Fettgewebe:** Insulin → **GLUT4-Translokation** zur Zellmembran → Glukoseaufnahme ↑\n- (Leber hat GLUT2, insulinunabhängig)\n\n**2. Glykogensynthese ↑:**\n- **Leber:** Insulin → **Glykogensynthase ↑** → Glukose → Glykogen (Speicherung)\n- Glukoneogenese ↓\n\n**3. Anabole Wirkungen:**\n- Fettgewebe: Lipogenese ↑, Lipolyse ↓\n- Muskel: Proteinsynthese ↑\n\n**Falsch (A):** Insulin wird von **β-Zellen** (nicht α-Zellen) freigesetzt. α-Zellen produzieren **Glukagon**. Insulin **hemmt** die Glykogenolyse (nicht fördert), Glukagon fördert sie.\n\n**Falsch (B):** **Glukagon** (nicht Insulin) wirkt hauptsächlich auf die **Leber** (nicht Muskel/Fett) und fördert **Glykogenolyse + Glukoneogenese** (nicht GLUT4-Translokation). Glukagon **erhöht** den Blutzucker.\n\n**Falsch (D):** Glukagon **erhöht** den Blutzucker (nicht senkt) durch:\n- **Glykogenolyse ↑** (Glykogenphosphorylase ↑)\n- **Glukoneogenese ↑** (PEPCK ↑, F-1,6-BP ↑)\n- Glykogensynthase wird **gehemmt** (nicht aktiviert).\n\n**Falsch (E):** Insulin-Freisetzung ist **ATP-abhängig**:\n1. Glukose ↑ → GLUT2 → β-Zelle\n2. Glykolyse → **ATP ↑**\n3. **ATP-sensitive K⁺-Kanäle schließen** → Depolarisation\n4. Ca²⁺-Kanäle öffnen → Ca²⁺ ↑ → Exozytose.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Patient mit Morbus Addison zeigt Hypotonie, Hyperpigmentierung und Hyponatriämie. Welche endokrine Störung liegt zugrunde, und welcher Regelkreis ist betroffen?",
          options: [
          "Primäre Nebennierenrinden-Insuffizienz mit Cortisol-Mangel und Aldosteron-Mangel; ACTH ist erniedrigt aufgrund intakter negativer Rückkopplung.",
          "Sekundäre Nebennierenrinden-Insuffizienz durch Hypophysen-Tumor; ACTH ist erhöht, was zur Hyperpigmentierung führt.",
          "Primäre Nebennierenrinden-Insuffizienz mit Cortisol-Mangel und Aldosteron-Mangel; ACTH ist kompensatorisch erhöht und wirkt auf Melanozyten (MSH-Effekt), was die Hyperpigmentierung erklärt.",
          "Conn-Syndrom mit Aldosteron-Überschuss, das zur Hyponatriämie und Hypotonie führt.",
          "Phäochromozytom im Nebennierenmark mit exzessiver Adrenalin-Freisetzung, die zur Hypotonie führt."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Morbus Addison** = primäre Nebennierenrinden-Insuffizienz (Autoimmun-Zerstörung, Tuberkulose, Blutung)\n\n**Pathophysiologie:**\n- **Nebennierenrinde** zerstört → **Cortisol ↓, Aldosteron ↓**\n- Cortisol ↓ → **negative Rückkopplung fällt weg** → Hypothalamus/Hypophyse: **CRH ↑, ACTH ↑↑** (kompensatorisch)\n- **ACTH** hat strukturelle Ähnlichkeit mit **MSH** (Melanozyten-stimulierendes Hormon) → ACTH ↑↑ → **Melanozyten-Stimulation** → **Hyperpigmentierung** (v. a. Hautfalten, Narben, Schleimhäute)\n\n**Klinik:**\n- **Hypotonie:** Cortisol ↓ (Gefäßtonus ↓), Aldosteron ↓ (Volumen ↓)\n- **Hyponatriämie:** Aldosteron ↓ → Na⁺-Verlust\n- **Hyperkaliämie:** Aldosteron ↓ → K⁺-Retention\n- **Hypoglykämie:** Cortisol ↓ → Glukoneogenese ↓\n- **Hyperpigmentierung:** ACTH ↑↑ → MSH-Effekt\n\n**Falsch (A):** Bei primärer NNR-Insuffizienz ist **ACTH erhöht** (nicht erniedrigt), da die negative Rückkopplung wegfällt. ACTH ↓ wäre bei **sekundärer** Insuffizienz (Hypophysen-Störung).\n\n**Falsch (B):** Bei **sekundärer** NNR-Insuffizienz (Hypophysen-Tumor, -Nekrose) ist **ACTH ↓** (nicht ↑) → Cortisol ↓, aber Aldosteron meist **normal** (RAAS-reguliert). **Keine Hyperpigmentierung**, da ACTH ↓.\n\n**Falsch (D):** **Conn-Syndrom** (Aldosteron-produzierendes Adenom) → Aldosteron ↑ → **Hypernatriämie, Hypertonie** (nicht Hypotonie/Hyponatriämie), Hypokaliämie.\n\n**Falsch (E):** **Phäochromozytom** (Nebennierenmark-Tumor) → Adrenalin/Noradrenalin ↑↑ → **Hypertonie** (nicht Hypotonie), Tachykardie, Hyperglykämie (Glykogenolyse ↑).",
          difficulty: 3,
          tags: [],
          hints: [
            "Denke an die Nebennierenrinde: Welche Hormone fehlen bei Morbus Addison und welche Rückkopplungsfolge hat das?",
            "Cortisol-Mangel hebt die negative Rückkopplung auf → ACTH steigt kompensatorisch → ACTH ähnelt strukturell MSH → Hyperpigmentierung entsteht."
          ],
        }
      ],
      merksätze: [
        "**Hormonklassen & Rezeptoren:** Peptidhormone (Insulin, GH, ACTH) = hydrophil → Membranrezeptoren (Tyrosinkinase, G-Protein) → Second Messenger (cAMP, IP₃, Ca²⁺) → schnelle Wirkung (Minuten). Steroidhormone (Cortisol, Testosteron, Östrogen) + T₃/T₄ = lipophil → intrazelluläre Rezeptoren → Genexpression → langsame Wirkung (Stunden).",
        "**Hypothalamus-Hypophysen-Regelkreis:** Hypothalamus (TRH, CRH, GnRH, GHRH) → Hypophyse (TSH, ACTH, LH/FSH, GH) → periphere Drüse (T₃/T₄, Cortisol, Östrogen/Testosteron) → **negative Rückkopplung** hemmt Hypothalamus + Hypophyse. Primäre Insuffizienz: periphere Drüse ↓ → trophe Hormone ↑.",
        "**Schilddrüsenhormone:** T₃ (aktiv, 3 Jod) + T₄ (Prohormon, 4 Jod, peripher → T₃). TPO jodiert Tyrosin in Thyreoglobulin: MIT + DIT → T₃, 2×DIT → T₄. Wirkung: Grundumsatz ↑, Herzfrequenz ↑ (β-Rezeptor-Upregulation), Genexpression ↑. TSH stimuliert (TRH-abhängig). Hashimoto → T₃/T₄ ↓, TSH ↑.",
        "**Cortisol (Zona fasciculata):** CRH (Hypothalamus) → ACTH (Hypophyse) → Cortisol (NNR). Wirkung: Glukoneogenese ↑, Immunsuppression (Phospholipase A₂ ↓ → PG ↓), Osteoblasten ↓ (Osteoporose). Cushing: Cortisol ↑ (exogen oder Adenom) → Stammfettsucht, Vollmondgesicht, Hyperglykämie. Addison: NNR-Insuffizienz → Cortisol ↓, ACTH ↑ → Hyperpigmentierung.",
        "**Insulin vs. Glukagon:** Insulin (β-Zellen, nach Mahlzeit): GLUT4-Translokation ↑ (Muskel/Fett), Glykogensynthese ↑ (Leber), Lipolyse ↓, Proteinaufbau ↑ → Blutzucker ↓. Glukagon (α-Zellen, Fasten): Glykogenolyse ↑, Glukoneogenese ↑ → Blutzucker ↑. Typ-1-DM: β-Zell-Zerstörung. Typ-2-DM: Insulinresistenz + relativer Mangel.",
        "**Aldosteron & ADH:** Aldosteron (Zona glomerulosa, RAAS): Na⁺ + H₂O ↑, K⁺ ↓ → Volumen ↑, Blutdruck ↑. Conn: Aldosteron ↑ → Hypertonie, Hypokaliämie. ADH/Vasopressin (Hypophyse, Osmoregulation): AQP2-Insertion → H₂O-Resorption ↑ (Sammelrohr). SIADH: ADH ↑ → Hyponatriämie. Diabetes insipidus: ADH ↓ → Polyurie.",
        "**Kalzium-Regulation:** PTH (Nebenschilddrüse): Ca²⁺ ↑ (Knochenresorption ↑, renale Ca²⁺-Rückresorption ↑, Vitamin-D-Aktivierung ↑). Calcitonin (C-Zellen, Schilddrüse): Ca²⁺ ↓ (Osteoklasten ↓). Vitamin D (1,25-OH₂-VD₃ Calcitriol): Ca²⁺ + PO₄³⁻ -Resorption ↑ (Darm). Hypoparathyreoidismus: Ca²⁺ ↓ → Tetanie, Chvostek-Zeichen.",
        "**Nebennierenmark:** Chromaffine Zellen → Adrenalin (80%) + Noradrenalin (20%) unter sympathischer Stimulation. Adrenalin: β₁ (Herz ↑), β₂ (Bronchodilatation, Vasodilatation Skelettmuskulatur, Glykogenolyse Leber), α₁ (Vasokonstriktion). Phäochromozytom: Katecholamin-produzierender Tumor → Hypertonie (episodisch), Tachykardie, Hyperglykämie.",
        "**Sexualhormone-Regelkreis:** GnRH (pulsatil) → LH + FSH (Hypophyse). LH: Testosteron (Leydig-Zellen) + Ovulation + Corpus luteum. FSH: Spermatogenese (Sertoli) + Follikelreifung. Östrogen + Testosteron → negative Rückkopplung. Menopause: Östrogen ↓ → FSH ↑, LH ↑ (fehlende Rückkopplung). Hypogonadismus: GnRH ↓ → LH/FSH ↓.",
        "**Insulin-Sekretionsmechanismus:** Glukose → GLUT2 (β-Zelle) → Glykolyse → ATP ↑ → ATP-sensitive K⁺-Kanäle (K_ATP) schließen → Depolarisation → Ca²⁺-Kanäle öffnen → Ca²⁺ ↑ → Exozytose von Insulin-Vesikeln. Sulfonylharnstoffe (Glibenclamid) blockieren K_ATP → Insulin ↑ (Typ-2-DM-Therapie)."
      ],
      klinischerBezug: "Diabetes mellitus ist die häufigste endokrine Erkrankung: Typ 1 (autoimmune β-Zell-Zerstörung, Insulinmangel absolut, Ketoacidose-Gefahr) vs. Typ 2 (Insulinresistenz + relativer Mangel, Adipositas, Metabolisches Syndrom). Hypothyreose (Hashimoto-Thyreoiditis, häufigste Autoimmunerkrankung): TSH ↑, T₃/T₄ ↓ → Müdigkeit, Kälteintoleranz, Gewichtszunahme, Bradykardie; Therapie: L-Thyroxin. Hyperthyreose (Morbus Basedow: TSH-Rezeptor-Antikörper): TSH ↓, T₃/T₄ ↑ → Tachykardie, Gewichtsabnahme, Exophthalmus; Therapie: Thionamide (Thiamazol). Cushing-Syndrom (Cortisol ↑): Stammfettsucht, Vollmondgesicht, Striae rubrae, Hyperglykämie, Osteoporose, Immunsuppression. Morbus Addison (NNR-Insuffizienz): Hypotonie, Hyponatriämie, Hyperkaliämie, Hyperpigmentierung (ACTH ↑ → MSH-Effekt). Conn-Syndrom (Aldosteron ↑): Hypertonie, Hypokaliämie, metabolische Alkalose."
    },
    {
      id: 'bio-3-04',
      title: "Herz Kreislauf",
      content: `# Herz-Kreislauf-System – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 17 Minuten
**Stichwortliste-Abdeckung:** 10/10 Stichwörter

---

## Einleitung

Das **Herz-Kreislauf-System** ist ein geschlossenes Transportsystem, das Blut durch den Körper pumpt, um Sauerstoff, Nährstoffe, Hormone und Stoffwechselprodukte zu verteilen und CO₂/Abfallstoffe abzutransportieren.

**Zentrale Pumpe:** Das **Herz** (muskuläres Hohlorgan, ~300 g, Faustgröße) pumpt ~5 L/min (Ruhe) bis ~25 L/min (Belastung).

**Kreislauf-Architektur:** **Großer Kreislauf** (Körperkreislauf, Systemkreislauf) und **Kleiner Kreislauf** (Lungenkreislauf) sind in **Serie** geschaltet.

---

## Kerninhalt

### 1. ⭐ Herzaufbau – Anatomie und Wandschichten

**Makroskopische Anatomie:**

Das Herz besteht aus **4 Kammern:**
- **2 Vorhöfe (Atrien):** Rechter Vorhof (RA), Linker Vorhof (LA) – dünnwandig, Sammelfunktion
- **2 Kammern (Ventrikel):** Rechter Ventrikel (RV), Linker Ventrikel (LV) – dickwandig, Pumpfunktion

⭐ **Prüfungswichtig:** Linker Ventrikel hat die **dickste Wand** (~10–15 mm, 3× dicker als RV ~3–5 mm), da er gegen den **hohen Systemwiderstand** (Blutdruck ~120 mmHg systolisch) pumpen muss. Rechter Ventrikel pumpt gegen niedrigen Pulmonalwiderstand (~25 mmHg).

**Wandschichten (von innen nach außen):**

| Schicht | Aufbau | Funktion |
|---------|--------|----------|
| **Endokard** | Einschichtiges Plattenepithel (Endothel) | Glatte Oberfläche, verhindert Thrombusbildung |
| **Myokard** | Herzmuskulatur (quergestreift, unwillkürlich) | Kontraktion (Pumpfunktion) |
| **Epikard** | Viszerales Blatt des Perikards | Gleitfläche |

**Perikard (Herzbeutel):**
- **Viszerales Blatt** (Epikard) + **Parietales Blatt** (außen) → **Perikardhöhle** dazwischen (Flüssigkeitsfilm, Reibungsminderung)
- **Perikarderguss:** Flüssigkeitsansammlung → Herztamponade → Kompression des Herzens

---

### 2. ⭐ Herzklappen (Ventile gegen Rückfluss)

**4 Klappen:**

| Klappe | Lokalisation | Typ | Funktion |
|--------|--------------|-----|----------|
| **Trikuspidalklappe** | Rechter Vorhof → Rechter Ventrikel | AV-Klappe (3 Segel) | Verhindert Rückfluss bei RV-Systole |
| **Mitralklappe (Bikuspidalklappe)** | Linker Vorhof → Linker Ventrikel | AV-Klappe (2 Segel) | Verhindert Rückfluss bei LV-Systole |
| **Pulmonalklappe** | Rechter Ventrikel → Truncus pulmonalis | Taschenklappe (3 Taschen) | Verhindert Rückfluss bei RV-Diastole |
| **Aortenklappe** | Linker Ventrikel → Aorta | Taschenklappe (3 Taschen) | Verhindert Rückfluss bei LV-Diastole |

⭐ **Prüfungswichtig:**
- **AV-Klappen** (Trikuspidal, Mitral) haben **Sehnenfäden (Chordae tendineae)** → befestigt an **Papillarmuskeln** → verhindern Prolaps (Umstülpung in Vorhof)
- **Taschenklappen** (Pulmonal, Aorta) haben **keine Sehnenfäden**, öffnen sich passiv durch Druckgradienten

**Klinisch:**
- **Mitralklappen-Insuffizienz:** Undichte Mitralklappe → Blut fließt zurück in LA → Volumenüberlastung LA → Lungenstauung
- **Aortenklappeninstenose:** Verengte Aortenklappe → Drucküberlastung LV → LV-Hypertrophie → Herzinsuffizienz
- **Mitralklappenprolaps:** Sehnenfaden-Ruptur → Klappe stülpt sich in LA → systolisches Klickgeräusch

---

### 3. ⭐ Erregungsleitung (Autonomie des Herzens)

Das Herz besitzt ein **autonomes Erregungsbildungs- und Leitungssystem** (arbeitet auch ohne Nervenversorgung).

**Reihenfolge der Erregung:**

1. **Sinusknoten (SA-Knoten)** – Schrittmacher (~60–80/min)
   - Lokalisation: Rechter Vorhof (Mündung V. cava superior)
   - Funktion: Spontane Depolarisation → **Primärer Taktgeber**

2. **Vorhöfe kontrahieren** (P-Welle im EKG)

3. **AV-Knoten (Atrioventrikulärer Knoten)** – Verzögerung (~100 ms)
   - Lokalisation: Rechter Vorhof (nahe Trikuspidalklappe)
   - Funktion: **Einzige elektrische Verbindung** zwischen Vorhöfen und Kammern, **Verzögerung** ermöglicht vollständige Vorhoffüllung
   - Eigenfrequenz: ~40–60/min (Backup, falls SA-Knoten ausfällt)

4. **His-Bündel** (AV-Bündel)
   - Verlauf: Durch Kammerseptum

5. **Tawara-Schenkel** (Rechts- und Linksschenkel)
   - Verlauf: Entlang Septum zu Herzspitze

6. **Purkinje-Fasern**
   - Verlauf: Von Herzspitze → Kammerwand (außen)
   - Funktion: Schnelle Erregungsausbreitung (~4 m/s) → **synchrone Ventrikelkontraktion** (von Spitze zur Basis)

7. **Kammern kontrahieren** (QRS-Komplex im EKG)

⭐ **Prüfungswichtig:**
- **SA-Knoten** = primärer Schrittmacher (60–80/min)
- **AV-Knoten** = sekundärer Schrittmacher (40–60/min), **Verzögerung** ermöglicht Vorhoffentleerung
- **Purkinje-Fasern** = schnellste Leitung → synchrone Kontraktion

**Klinisch:**
- **AV-Block I°:** Verzögerung ↑ (PQ-Intervall >200 ms), meist asymptomatisch
- **AV-Block II°:** Einzelne P-Wellen werden nicht übergeleitet → ausgefallene QRS-Komplexe
- **AV-Block III° (kompletter Block):** Vorhöfe und Kammern schlagen unabhängig → Kammern mit Ersatzrhythmus (~40/min) → Schrittmacher-Indikation
- **Vorhofflimmern:** Chaotische Vorhof-Erregung (>350/min) → unregelmäßige Kammerfrequenz → Thrombose-Risiko ↑

---

### 4. ⭐ Blutkreislauf (Großer und Kleiner Kreislauf)

Das Herz-Kreislauf-System besteht aus **2 in Serie geschalteten Kreisläufen:**

#### 4a. Kleiner Kreislauf (Lungenkreislauf, Pulmonalkreislauf)

**Funktion:** Gasaustausch (CO₂ ↓, O₂ ↑)

**Verlauf:**
- **Rechter Ventrikel** → **Truncus pulmonalis** → **Lungenarterien** (re/li) → **Lungenkapillaren** (Gasaustausch in Alveolen) → **Lungenvenen** → **Linker Vorhof**

⭐ **Prüfungswichtig:**
- **Lungenarterien** führen **sauerstoffarmes Blut** (zum Herzen hin = Vene, vom Herzen weg = Arterie, unabhängig von O₂-Gehalt!)
- **Lungenvenen** führen **sauerstoffreiches Blut**
- Niedriger Druck (~25/10 mmHg systolisch/diastolisch), da Lungenkapillaren dünnwandig (Diffusion)

#### 4b. Großer Kreislauf (Körperkreislauf, Systemkreislauf)

**Funktion:** O₂/Nährstoff-Versorgung, CO₂/Abfallstoff-Abtransport

**Verlauf:**
- **Linker Ventrikel** → **Aorta** → **Arterien** → **Arteriolen** → **Kapillaren** (Stoffaustausch) → **Venolen** → **Venen** → **V. cava superior/inferior** → **Rechter Vorhof**

⭐ **Prüfungswichtig:** Hoher Druck (~120/80 mmHg), dickwandige Gefäße (Aorta ~25 mm Durchmesser, Wand ~2 mm).

---

### 5. ⭐ Blutgefäße (Arterien, Kapillaren, Venen)

**Gefäß-Typen:**

| Typ | Struktur | Funktion | Merkmale |
|-----|----------|----------|----------|
| **Arterien** | 3 Schichten: Intima (Endothel), Media (glatte Muskulatur + Elastin), Adventitia (Bindegewebe) | Hochdruck-Transport vom Herzen weg | Dickwandig, elastisch (Windkesselfunktion), pulsatil |
| **Arteriolen** | Dünne Media (glatte Muskulatur) | **Widerstandsgefäße** (regulieren peripheren Widerstand, Blutdruck) | Sympathikus (α₁) → Vasokonstriktion |
| **Kapillaren** | Einschichtig (Endothel) + Basalmembran, Ø ~5–10 µm | **Stoffaustausch** (O₂, CO₂, Nährstoffe, Metabolite) | Dünnwandig, hohe Oberfläche (~600 m²) |
| **Venolen** | Dünne Wand | Sammelfunktion | Niedrigdruck |
| **Venen** | Dünne Wand, **Venenklappen** | Niederdrucktransport zum Herzen | Kapazitätsgefäße (~70% des Blutvolumens), Klappen verhindern Rückfluss |

⭐ **Prüfungswichtig:**

**Windkesselfunktion der Aorta:**
- **Systole:** LV kontrahiert → Blut in Aorta → Aorta dehnt sich (elastische Wand speichert Energie)
- **Diastole:** Aortenklappe schließt → elastische Rückstellung → Blut wird kontinuierlich in Peripherie gedrückt → **pulsatiler Fluss wird kontinuierlich**

**Kapillaren – Stoffaustausch:**
- **Diffusion:** O₂, CO₂ (Konzentrationsgradient)
- **Filtration/Reabsorption (Starling-Kräfte):**
  - **Arterielles Ende:** Hydrostatischer Druck ↑ → **Filtration** (Flüssigkeit ins Gewebe)
  - **Venöses Ende:** Onkotischer Druck (Albumin) ↑ → **Reabsorption** (Flüssigkeit zurück ins Gefäß)
  - Rest → Lymphe (~10%)

**Venenklappen:**
- Besonders in **Beinvenen** (gegen Schwerkraft)
- **Muskel-Venen-Pumpe:** Skelettmuskel-Kontraktion → Venen werden komprimiert → Blut nach oben (Klappen verhindern Rückfluss)
- **Klinisch:** Klappeninsuffizienz → Varizen (Krampfadern), chronisch-venöse Insuffizienz → Ödem, Ulcus cruris

---

### 6. ⭐ Blutdruck (Regulation)

**Definition:**
- **Systolischer Blutdruck:** Maximaler Druck während Ventrikelkontraktion (~120 mmHg)
- **Diastolischer Blutdruck:** Minimaler Druck während Ventrikelentspannung (~80 mmHg)
- **Mittlerer arterieller Druck (MAP):** MAP = Diastolisch + ⅓ (Systolisch − Diastolisch) ≈ 93 mmHg

⭐ **Formel:**
**Blutdruck = Herzzeitvolumen (HZV) × Totaler peripherer Widerstand (TPR)**

**Herzzeitvolumen (HZV):**
- HZV = Schlagvolumen (SV) × Herzfrequenz (HF)
- Normal: ~5 L/min (Ruhe)

**Regulation (kurzfristig: Sekunden–Minuten):**

1. **Barorezeptor-Reflex (wichtigster Mechanismus):**
   - **Barorezeptoren:** Aortenbogen, Karotis-Sinus (Dehnungsrezeptoren)
   - **Blutdruck ↑** → Barorezeptoren ↑ → Signale an Medulla oblongata → **Parasympathikus ↑** (Vagus → HF ↓, M2-Rezeptor), **Sympathikus ↓** → HF ↓, Kontraktilität ↓, Vasodilatation → **Blutdruck ↓**
   - **Blutdruck ↓** → Barorezeptoren ↓ → **Sympathikus ↑** (Noradrenalin → β₁-Rezeptoren Herz, α₁-Rezeptoren Gefäße) → HF ↑, Kontraktilität ↑, Vasokonstriktion → **Blutdruck ↑**

2. **Chemorezeprotor-Reflex:**
   - **Chemorezeptoren:** Aortenbogen, Karotis-Körper (messen O₂ ↓, CO₂ ↑, pH ↓)
   - Hypoxie → Sympathikus ↑ → HF ↑, Blutdruck ↑

**Regulation (langfristig: Stunden–Tage):**

3. **RAAS (Renin-Angiotensin-Aldosteron-System):**
   - **Blutdruck ↓** → Niere: Renin ↑ → Angiotensinogen → **Angiotensin I** → ACE (Lunge) → **Angiotensin II**
   - **Angiotensin II:**
     - Vasokonstriktion (α₁) → TPR ↑
     - Aldosteron ↑ (Nebenniere) → Na⁺-Retention → Wasser ↑ → Volumen ↑ → Blutdruck ↑
     - ADH ↑ (Hypophyse) → Wasserrückresorption ↑
   - **Klinisch:** ACE-Hemmer (z. B. Ramipril), AT₁-Blocker (z. B. Losartan) senken Blutdruck

4. **ADH (Antidiuretisches Hormon):**
   - Volumen ↓, Osmolalität ↑ → ADH ↑ → Niere: Aquaporin-2 ↑ → Wasserrückresorption ↑ → Volumen ↑ → Blutdruck ↑

5. **ANP (Atriales natriuretisches Peptid):**
   - Volumen ↑, Vorhof-Dehnung ↑ → ANP ↑ → Niere: Na⁺-Ausscheidung ↑, Wasser ↑ → Blutdruck ↓

⭐ **Klinisch:**
- **Hypertonie (>140/90 mmHg):** Risiko für Schlaganfall, Myokardinfarkt, Niereninsuffizienz
- **Hypotonie (<90/60 mmHg):** Schwindel, Synkope (v. a. orthostatisch)
- **Hypertensive Krise (>180/120 mmHg):** Notfall, Organschäden möglich

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Herzaufbau:** 4 Kammern (RA, RV, LA, LV), LV-Wand am dicksten (Systemwiderstand), 3 Wandschichten (Endokard, Myokard, Epikard)
2. **Herzklappen:** AV-Klappen (Trikuspidal, Mitral) mit Sehnenfäden, Taschenklappen (Pulmonal, Aorta) ohne Sehnenfäden
3. **Erregungsleitung:** SA-Knoten (60–80/min) → AV-Knoten (Verzögerung, 40–60/min) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern (schnellste Leitung)
4. **Kreisläufe:** Kleiner Kreislauf (RV → Lunge → LA, niedriger Druck, Gasaustausch), Großer Kreislauf (LV → Körper → RA, hoher Druck)
5. **Blutgefäße:** Arterien (Windkessel), Arteriolen (Widerstand, Sympathikus α₁), Kapillaren (Stoffaustausch, Starling), Venen (Klappen, Muskel-Venen-Pumpe)
6. **Blutdruck:** MAP = HZV × TPR, Barorezeptor-Reflex (kurzfristig), RAAS (langfristig, Angiotensin II → Vasokonstriktion + Aldosteron ↑)

---

## Merksätze

>>>> **Erregungsleitung:** „SA-Knoten startet (60–80), AV-Knoten verzögert, His-Bündel leitet, Tawara teilt, Purkinje sprintet von Spitze nach oben!"
>>>> (SA → AV [Verzögerung] → His → Tawara [re/li] → Purkinje [Spitze → Basis])

>>>> **Kreisläufe:** „Rechts = Lunge (klein, niedrig), Links = Körper (groß, hoch) – Lungenarterie hat armes Blut, Lungenvene hat reiches Blut!"
>>>> (Kleiner Kreislauf: RV → Lungenarterie [O₂-arm!] → Lunge → Lungenvene [O₂-reich!] → LA; Großer Kreislauf: LV → Aorta → Körper → Venen → RA)

>>>> **Blutdruckregulation:** „Barorezeptoren messen Druck (kurzfristig), RAAS rettet Salz und Wasser (langfristig) – Angiotensin II macht eng und Aldosteron speichert!"
>>>> (Barorezeptor-Reflex: Blutdruck ↑ → Parasympathikus ↑ → HF ↓; RAAS: Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O ↑)

>>>> **Herzklappen:** „AV-Klappen haben Sehnenfäden (Trikuspidal 3, Mitral 2), Taschenklappen haben Taschen (Pulmonal, Aorta je 3) – beide stoppen Rückfluss!"
>>>> (AV = Atrioventrikulär, Sehnenfäden verhindern Prolaps; Taschenklappen öffnen/schließen passiv)

---

**Navigation:**
← [Zurück: Bio Kap 3 UK03 – Hormonsystem](Bio_Kap3_UK03_Hormonsystem.md) | [Weiter: Bio Kap 3 UK05 – Atmungssystem](Bio_Kap3_UK05_Atmungssystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über den anatomischen Aufbau des Herzens ist korrekt?",
          options: [
          "Der rechte Ventrikel hat eine dickere Wand als der linke Ventrikel, da er gegen den hohen Systemwiderstand pumpen muss.",
          "Der linke Ventrikel hat eine ~3-mal dickere Wand als der rechte Ventrikel, um gegen den hohen Systemwiderstand (~120 mmHg) zu pumpen.",
          "Die Herzwand besteht von innen nach außen aus Myokard, Endokard und Epikard.",
          "Das Perikard ist die innerste Schicht des Herzens und sorgt für eine glatte Oberfläche zur Thromboseprophylaxe.",
          "Rechter und linker Ventrikel pumpen gegen denselben Widerstand und haben daher gleich dicke Wände."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **linke Ventrikel (LV)** hat eine ~**10–15 mm dicke Wand** (ca. **3× dicker** als der rechte Ventrikel mit ~3–5 mm), da er gegen den **hohen Systemwiderstand** des großen Kreislaufs (~120 mmHg systolisch) pumpen muss. Der rechte Ventrikel pumpt nur gegen den niedrigen Pulmonalwiderstand (~25 mmHg).\n\n**Falsch (A):** Der **linke** Ventrikel (nicht rechte) hat die dickere Wand, da er gegen den Systemwiderstand arbeitet.\n\n**Falsch (C):** Die korrekte Reihenfolge von **innen nach außen** ist: **Endokard** (Endothel, glatte Oberfläche) → **Myokard** (Herzmuskulatur, Kontraktion) → **Epikard** (viszerales Blatt des Perikards, Gleitfläche).\n\n**Falsch (D):** Das **Endokard** (nicht Perikard) ist die innerste Schicht. Das **Perikard** ist der Herzbeutel (Epikard + parietales Blatt mit Perikardhöhle dazwischen).\n\n**Falsch (E):** Die Ventrikel pumpen gegen **unterschiedliche Widerstände**: LV gegen Systemwiderstand (~120 mmHg, hoher Druck), RV gegen Pulmonalwiderstand (~25 mmHg, niedriger Druck) → unterschiedliche Wanddicke.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die Herzklappen trifft zu?",
          options: [
          "Die Trikuspidalklappe ist eine Taschenklappe mit 3 Taschen und verhindert den Rückfluss von Blut aus der Pulmonalarterie in den rechten Ventrikel.",
          "Die Aortenklappe und Pulmonalklappe sind AV-Klappen und besitzen Sehnenfäden, die an Papillarmuskeln befestigt sind.",
          "Die Mitralklappe (Bikuspidalklappe) ist eine AV-Klappe mit 2 Segeln, die durch Sehnenfäden (Chordae tendineae) mit Papillarmuskeln verbunden ist und den Rückfluss bei LV-Systole verhindert.",
          "Die Pulmonalklappe öffnet sich durch aktive Kontraktion von Papillarmuskeln während der Ventrikel-Systole.",
          "Alle 4 Herzklappen besitzen Sehnenfäden, um einen Prolaps in die Vorhöfe zu verhindern."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** Die **Mitralklappe** (Bikuspidalklappe) ist eine **AV-Klappe** (Atrioventrikularklappe) mit **2 Segeln**, die zwischen linkem Vorhof (LA) und linkem Ventrikel (LV) liegt. Sie besitzt **Sehnenfäden (Chordae tendineae)**, die an **Papillarmuskeln** befestigt sind und einen **Prolaps** (Umstülpung in den Vorhof) während der LV-Systole verhindern. Bei LV-Kontraktion schließt sich die Mitralklappe → verhindert Rückfluss in LA.\n\n**Falsch (A):** Die **Trikuspidalklappe** ist eine **AV-Klappe** (nicht Taschenklappe) mit **3 Segeln** (nicht Taschen) und liegt zwischen rechtem Vorhof und rechtem Ventrikel (nicht Pulmonalarterie). Die **Pulmonalklappe** (Taschenklappe) verhindert den Rückfluss aus der Pulmonalarterie.\n\n**Falsch (B):** **Aortenklappe** und **Pulmonalklappe** sind **Taschenklappen** (nicht AV-Klappen) und besitzen **keine Sehnenfäden**. Sie öffnen/schließen passiv durch Druckgradienten. **AV-Klappen** (Trikuspidal, Mitral) haben Sehnenfäden.\n\n**Falsch (D):** Die **Pulmonalklappe** öffnet sich **passiv** durch den Druckgradienten (RV-Druck > Pulmonalarterie-Druck) während der Systole. **Papillarmuskeln** sind nur bei AV-Klappen vorhanden (nicht bei Taschenklappen).\n\n**Falsch (E):** Nur die **AV-Klappen** (Trikuspidal, Mitral) besitzen Sehnenfäden. Die **Taschenklappen** (Pulmonal, Aorta) haben **keine** Sehnenfäden.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Erregungsleitung im Herzen ist korrekt?",
          options: [
          "Der AV-Knoten ist der primäre Schrittmacher mit einer Eigenfrequenz von 60–80/min und leitet die Erregung direkt zu den Purkinje-Fasern.",
          "Der SA-Knoten ist der primäre Schrittmacher (60–80/min), der AV-Knoten verzögert die Erregung (~100 ms), und die Purkinje-Fasern leiten die Erregung schnell von der Herzspitze zur Basis.",
          "Die Erregung wird durch Nervenfasern vom Gehirn zum Herzen übertragen, sodass das Herz ohne Nervenversorgung nicht schlagen kann.",
          "Die Tawara-Schenkel verzögern die Erregung, um eine synchrone Kontraktion von Vorhöfen und Kammern zu ermöglichen.",
          "Bei einem kompletten AV-Block (III°) übernimmt der SA-Knoten die Kammer-Erregung mit einer Frequenz von 60–80/min, sodass keine Symptome auftreten."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Die Erregungsleitung verläuft:\n\n1. **SA-Knoten** (Sinusknoten, rechter Vorhof) = **primärer Schrittmacher** mit Eigenfrequenz **60–80/min** → spontane Depolarisation\n2. Vorhöfe kontrahieren (P-Welle)\n3. **AV-Knoten** (atrioventrikulärer Knoten) = **Verzögerung ~100 ms** (einzige elektrische Verbindung zwischen Vorhöfen und Kammern), Eigenfrequenz 40–60/min (Backup)\n4. **His-Bündel** → **Tawara-Schenkel** (re/li) → **Purkinje-Fasern** (schnellste Leitung ~4 m/s) → Erregung von **Herzspitze → Basis** → synchrone Ventrikelkontraktion (QRS-Komplex)\n\nDie Verzögerung im AV-Knoten ermöglicht **vollständige Vorhof-Entleerung**, bevor die Kammern kontrahieren.\n\n**Falsch (A):** Der **SA-Knoten** (nicht AV-Knoten) ist der primäre Schrittmacher (60–80/min). Der AV-Knoten leitet nicht direkt zu Purkinje-Fasern, sondern über His-Bündel → Tawara-Schenkel.\n\n**Falsch (C):** Das Herz besitzt ein **autonomes Erregungssystem** (SA-/AV-Knoten, His, Tawara, Purkinje) und kann **ohne Nervenversorgung** schlagen (Autonomie). Das autonome Nervensystem (Sympathikus/Parasympathikus) **moduliert** nur die Frequenz, ist aber nicht essentiell.\n\n**Falsch (D):** Die **Tawara-Schenkel** leiten die Erregung **schnell** entlang des Septums zur Herzspitze (keine Verzögerung). Die **Verzögerung** erfolgt im **AV-Knoten**, um Vorhof-Entleerung vor Kammer-Kontraktion zu ermöglichen.\n\n**Falsch (E):** Bei **AV-Block III°** (kompletter Block) schlagen Vorhöfe (SA-Knoten, 60–80/min) und Kammern **unabhängig**. Die Kammern werden von einem **Ersatzrhythmus** (AV-Knoten ~40/min oder ventrikulär ~20–40/min) erregt → **Bradykardie**, Symptome (Schwindel, Synkope) → **Schrittmacher-Indikation**.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den kleinen und großen Kreislauf ist korrekt?",
          options: [
          "Im kleinen Kreislauf führen die Lungenarterien sauerstoffreiches Blut zur Lunge, während die Lungenvenen sauerstoffarmes Blut zum Herzen zurückführen.",
          "Der kleine Kreislauf (Lungenkreislauf) verläuft vom rechten Ventrikel über die Lungenarterien (O₂-arm) zur Lunge, wo Gasaustausch stattfindet, und zurück über die Lungenvenen (O₂-reich) zum linken Vorhof. Der Druck ist niedrig (~25/10 mmHg).",
          "Der große Kreislauf beginnt im rechten Ventrikel und pumpt sauerstoffreiches Blut über die Aorta in den Körper.",
          "Beide Kreisläufe sind parallel geschaltet, sodass das Blut entweder durch die Lunge oder durch den Körper fließt.",
          "Der große Kreislauf hat einen niedrigeren Druck als der kleine Kreislauf, da die Körpergefäße dünner und elastischer sind."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **kleine Kreislauf** (Lungenkreislauf, Pulmonalkreislauf) dient dem **Gasaustausch**:\n\n**Verlauf:**\n- **Rechter Ventrikel** → **Truncus pulmonalis** → **Lungenarterien** (re/li, führen **O₂-armes Blut**!) → **Lungenkapillaren** (Gasaustausch in Alveolen: CO₂ ↓, O₂ ↑) → **Lungenvenen** (führen **O₂-reiches Blut**!) → **Linker Vorhof**\n\n⭐ **Wichtig:** \"Arterie\" = Gefäß vom Herzen **weg**, \"Vene\" = Gefäß zum Herzen **hin** (unabhängig von O₂-Gehalt!). **Lungenarterien** sind die einzigen Arterien mit **O₂-armem Blut**, **Lungenvenen** die einzigen Venen mit **O₂-reichem Blut**.\n\n**Druck:** ~25/10 mmHg (systolisch/diastolisch), niedriger Druck, da Lungenkapillaren dünnwandig (Diffusion).\n\n**Falsch (A):** **Umgekehrt!** Lungenarterien führen **O₂-armes** Blut (vom RV zur Lunge), Lungenvenen führen **O₂-reiches** Blut (von Lunge zum LA).\n\n**Falsch (C):** Der **große Kreislauf** beginnt im **linken Ventrikel** (nicht rechten). Der **rechte Ventrikel** pumpt in den kleinen Kreislauf. Verlauf: **LV** → Aorta → Körper → Venen → **RA**.\n\n**Falsch (D):** Die Kreisläufe sind **in Serie geschaltet** (nicht parallel). Blut fließt **zwingend** durch beide: RV → Lunge (klein) → LA → LV → Körper (groß) → RA → RV. Bei Parallelschaltung würde Blut entweder-oder fließen.\n\n**Falsch (E):** Der **große Kreislauf** hat einen **höheren Druck** (~120/80 mmHg) als der kleine Kreislauf (~25/10 mmHg), da der LV gegen hohen Systemwiderstand pumpt. Körpergefäße sind dickwandig (Aorta ~2 mm Wanddicke).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Blutgefäße und ihre Funktionen ist korrekt?",
          options: [
          "Arteriolen sind die Hauptorte des Stoffaustauschs zwischen Blut und Gewebe durch ihre einschichtige Endothelwand.",
          "Die Windkesselfunktion der Aorta bedeutet, dass die Aorta in der Systole Blut speichert (elastische Dehnung) und in der Diastole durch elastische Rückstellung Blut kontinuierlich in die Peripherie drückt.",
          "Venen haben dickere Wände als Arterien und transportieren sauerstoffreiches Blut zum Herzen zurück.",
          "Kapillaren haben drei Wandschichten (Intima, Media, Adventitia) wie Arterien, sind aber kleiner im Durchmesser.",
          "Venenklappen sind vor allem in den Armvenen wichtig und öffnen sich aktiv durch Muskelkontraktion."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Die **Windkesselfunktion der Aorta** nutzt die elastische Wand der Aorta:\n\n**Systole:**\n- Linker Ventrikel kontrahiert → Blut wird in Aorta gepumpt\n- Aorta **dehnt sich** (elastische Wand) → speichert Energie\n\n**Diastole:**\n- Aortenklappe schließt (Rückfluss verhindert)\n- Aorta zieht sich **elastisch zurück** → gespeicherte Energie wird freigesetzt\n- Blut wird **kontinuierlich** in die Peripherie gedrückt\n\n**Ergebnis:** Pulsatiler Fluss (intermittierend) aus dem Herzen wird in **kontinuierlichen Fluss** in der Peripherie umgewandelt.\n\n**Falsch (A):** **Kapillaren** (nicht Arteriolen) sind die Hauptorte des Stoffaustauschs. Kapillaren haben eine **einschichtige Endothelwand + Basalmembran** (Ø ~5–10 µm, dünnwandig, hohe Oberfläche ~600 m²). **Arteriolen** sind **Widerstandsgefäße** (glatte Muskulatur, regulieren peripheren Widerstand, Sympathikus α₁ → Vasokonstriktion).\n\n**Falsch (C):** Venen haben **dünnere Wände** als Arterien (Niederdrucksystem) und transportieren **überwiegend O₂-armes Blut** zum Herzen (Ausnahme: Lungenvenen → O₂-reich). Venen sind **Kapazitätsgefäße** (~70% des Blutvolumens).\n\n**Falsch (D):** Kapillaren haben nur **eine Schicht** (Endothel + Basalmembran), **keine** Media oder Adventitia. Die 3 Schichten (Intima, Media, Adventitia) sind typisch für **Arterien** und **Venen**.\n\n**Falsch (E):** Venenklappen sind besonders wichtig in **Beinvenen** (nicht Armen), da sie gegen die Schwerkraft arbeiten. Klappen öffnen/schließen **passiv** durch Druckunterschiede (nicht aktiv). Die **Muskel-Venen-Pumpe** (Skelettmuskel-Kontraktion komprimiert Venen → Blut nach oben, Klappen verhindern Rückfluss) unterstützt den venösen Rückfluss.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Patient mit akuter Hypotonie aktiviert den Barorezeptor-Reflex. Welche physiologische Reaktion folgt?",
          options: [
          "Blutdruck sinkt → Barorezeptoren in Aortenbogen und Karotis-Sinus senden mehr Signale → Parasympathikus wird aktiviert → Herzfrequenz sinkt.",
          "Blutdruck sinkt → Barorezeptoren senden weniger Signale → Sympathikus wird aktiviert (Noradrenalin → β₁-Rezeptoren am Herzen, α₁-Rezeptoren an Gefäßen) → Herzfrequenz, Kontraktilität und Vasokonstriktion steigen → Blutdruck steigt.",
          "Blutdruck sinkt → RAAS wird sofort aktiviert (innerhalb von Sekunden) → Angiotensin II führt zu Vasodilatation und Aldosteron-Freisetzung.",
          "Blutdruck sinkt → ANP (atriales natriuretisches Peptid) wird freigesetzt → Natrium-Retention in der Niere → Blutdruck steigt.",
          "Barorezeptoren messen den Sauerstoffgehalt des Blutes und aktivieren bei Hypoxie den Sympathikus."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Barorezeptor-Reflex** (wichtigster kurzfristiger Mechanismus, Sekunden–Minuten):\n\n**Bei Hypotonie (Blutdruck ↓):**\n1. **Barorezeptoren** (Dehnungsrezeptoren in Aortenbogen und Karotis-Sinus) werden **weniger gedehnt** → **weniger Signale** an Medulla oblongata\n2. **Sympathikus ↑** (Aktivierung):\n   - **Herz:** Noradrenalin → **β₁-Rezeptoren** → **Herzfrequenz ↑, Kontraktilität ↑** → HZV ↑\n   - **Gefäße:** Noradrenalin → **α₁-Rezeptoren** → **Vasokonstriktion** → TPR ↑\n3. **Parasympathikus ↓** (Hemmung) → Vagus-Tonus ↓ → HF ↑\n4. **Ergebnis:** Blutdruck ↑ (MAP = HZV × TPR)\n\n**Bei Hypertonie (Blutdruck ↑):** Umgekehrt → Barorezeptoren ↑ → **Parasympathikus ↑** (Vagus → M2-Rezeptor → HF ↓), **Sympathikus ↓** → Blutdruck ↓.\n\n**Falsch (A):** Bei Blutdruck ↓ senden Barorezeptoren **weniger** Signale (nicht mehr), und der **Sympathikus** (nicht Parasympathikus) wird aktiviert → HF ↑ (nicht ↓).\n\n**Falsch (C):** **RAAS** ist ein **langfristiger** Mechanismus (Stunden–Tage), nicht sofort. Angiotensin II führt zu **Vasokonstriktion** (nicht Vasodilatation) und Aldosteron ↑ (Na⁺-Retention → Volumen ↑).\n\n**Falsch (D):** **ANP** wird bei **Volumenüberlastung** (Vorhof-Dehnung ↑) freigesetzt und führt zu **Natrium-Ausscheidung** (nicht Retention) → Blutdruck ↓ (nicht ↑). Bei Hypotonie würde ANP ↓.\n\n**Falsch (E):** **Barorezeptoren** messen **Druck/Dehnung** (nicht O₂-Gehalt). **Chemorezeptoren** (Aortenbogen, Karotis-Körper) messen O₂ ↓, CO₂ ↑, pH ↓ → Sympathikus ↑.",
          difficulty: 3,
          tags: [],
          hints: [
            "Denke: Barorezeptoren reagieren auf Dehnung. Bei Hypotonie → weniger Dehnung → weniger Signal → was wird aktiviert?",
            "Weniger Barorezeptor-Signal → Hemmung des Parasympathikus fällt weg + Sympathikus wird aktiviert → Herzfrequenz ↑, Vasokonstriktion ↑ → Blutdruck steigt."
          ],
        }
      ],
      merksätze: [
        "**Herzaufbau:** 4 Kammern (RA, RV, LA, LV), 3 Wandschichten (Endokard, Myokard, Epikard). LV-Wand ~10–15 mm (3× dicker als RV ~3–5 mm) → Systemwiderstand (~120 mmHg). Perikard = Herzbeutel (Perikardhöhle, ~50 mL Flüssigkeit). Koronararterien versorgen Herzmuskel (LCA: R. interventricularis anterior/RIVA, R. circumflexus; RCA: R. nodi sinuatrialis, R. interventricularis posterior).",
        "**Herzklappen:** AV-Klappen (zwischen Vorhof-Kammer) mit Sehnenfäden + Papillarmuskeln: Trikuspidal (rechts, 3 Segel) + Mitral/Bikuspidal (links, 2 Segel) → verhindern Prolaps. Taschenklappen (keine Sehnenfäden, passive Öffnung/Schließung): Pulmonal (RV → Pulmonalarterie) + Aortal (LV → Aorta).",
        "**Erregungsleitungssystem:** SA-Knoten (Sinusknoten, primärer Schrittmacher, 60–80/min, rechter Vorhof) → AV-Knoten (Verzögerung ~100 ms, Eigenfrequenz 40–60/min) → His-Bündel → Tawara-Schenkel (re/li) → Purkinje-Fasern (schnell, 4 m/s) → Ventrikel (Herzspitze → Basis). Vagus hemmt SA-Knoten (M2, HF ↓). β₁ stimuliert SA-Knoten (HF ↑).",
        "**EKG:** P-Welle (Vorhof-Depolarisation, SA-Knoten), PQ-Zeit (AV-Knoten-Überleitung, normal <0,2 s), QRS-Komplex (Ventrikel-Depolarisation, normal <0,12 s), ST-Strecke (ventrikuläre Repolarisation, Erhöhung bei STEMI), T-Welle (Ventrikel-Repolarisation). Kammerflimmern = ungeordnete Ventrikel-Erregung → kein Auswurf → Kreislaufstillstand → Defibrillation.",
        "**Herzkreislauf-Physiologie:** Kleiner Kreislauf: RV → Lungenarterien (O₂-arm!) → Lunge (Gasaustausch) → Lungenvenen (O₂-reich!) → LA. Großer Kreislauf: LV → Aorta → Körper → Hohlvenen → RA. In Serie! MAP = HZV × TPR. Starling-Mechanismus: Preload ↑ → Vorhof-Dehnung → Kontraktilität ↑ → Schlagvolumen ↑.",
        "**Blutgefäße:** Arterien (Windkesselfunktion, elastisch, Intima/Media/Adventitia). Arteriolen (Widerstandsgefäße, α₁ → Vasokonstriktion). Kapillaren (Stoffaustausch, einschichtiges Endothel, ~600 m²). Venen (Kapazitätsgefäße, ~70% des Blutvolumens, Klappen in Beinvenen, Muskel-Venen-Pumpe). Varikosis: Klappeninsuffizienz → venöser Rückfluss ↓ → Varizen.",
        "**Blutdruckregulation:** Kurzfristig: Barorezeptor-Reflex (Aortenbogen, Karotis-Sinus → Medulla oblongata → Sympathikus/Parasympathikus). Langfristig: RAAS (Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O-Retention → Volumen ↑). ACE-Hemmer blockieren. ANP (Vorhof-Dehnung): Na⁺-Ausscheidung ↑ → Volumen ↓.",
        "**Herzinsuffizienz:** Linksherzinsuffizienz: CO ↓ → Lungenstauung → Dyspnoe (Orthopnoe, paroxysmale nächtliche Dyspnoe), feuchte Rasselgeräusche. Rechtsherzinsuffizienz: Venöse Stauung → periphere Ödeme, Halsvenenstauung, Hepatomegalie. Therapie: ACE-Hemmer, Betablocker, Diuretika (Furosemid, Spironolacton), Herzglykoside (Digoxin).",
        "**Akutes Koronarsyndrom (ACS):** STEMI (ST-Hebung, Totalverschluss, Troponin ↑) vs. NSTEMI (kein ST, Teilokkl., Troponin ↑) vs. instabile AP (kein Troponin ↑). Therapie: MONA (Morphin, O₂, Nitro, ASS) + Heparin + PCI (perkutane Koronarintervention, Stent). Thrombolyse wenn PCI nicht verfügbar.",
        "**Herzrhythmusstörungen:** Vorhofflimmern (unregelmäßige P-Wellen, absolute Arrhythmie, Thromboembolie-Risiko → CHA₂DS₂-VASc → Antikoagulation). AV-Block I° (PQ > 0,2 s), II° (Wenckebach: PR ↑ bis Ausfall; Mobitz II: plötzlicher Ausfall), III° (kompletter Block, Schrittmacher). Kammerflattern/-flimmern → Reanimation + Defibrillation."
      ],
      klinischerBezug: "Herzinfarkt (STEMI/NSTEMI): koronare Plaqueruptur → Thrombus → Ischämie → Infarzierung (Troponin I/T als sensitiver Marker). EKG: ST-Hebung (STEMI), T-Negativierung, Q-Zacke (alter Infarkt). Therapie: sofortige PCI (Stent) innerhalb 90 min. Herzinsuffizienz betrifft >1 Mio. Menschen in Deutschland (systolisch EF <40% vs. diastolisch EF >50%); Therapie-Basis: ACE-Hemmer + Betablocker + Diuretika + Spironolacton. Hypertonie (>140/90 mmHg): primär (essenziell, 90%, multifaktoriell) vs. sekundär (NNR: Conn, Phäochromozytom; Niere: renovaskulär). Komplikationen: Schlaganfall, Herzinfarkt, Niereninsuffizienz, Retinopathie. Vorhofflimmern: häufigste Herzrhythmusstörung (1% der Bevölkerung), Schlaganfall-Risiko ↑ (Thromboembolie aus linkem Vorhofohr) → Antikoagulation (DOAKs)."
    },
    {
      id: 'bio-3-05',
      title: "Blut",
      content: `# Blut – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 16 Minuten
**Stichwortliste-Abdeckung:** 9/9 Stichwörter

---

## Einleitung

**Blut** ist ein flüssiges Gewebe (~5–6 L beim Erwachsenen, ~7–8% des Körpergewichts) und erfüllt essenzielle Funktionen:
- **Transport:** O₂, CO₂, Nährstoffe, Hormone, Wärme, Abfallstoffe
- **Immunabwehr:** Leukozyten, Antikörper
- **Hämostase:** Blutgerinnung (Thrombozyten, Gerinnungsfaktoren)
- **Pufferung:** pH-Regulation (HCO₃⁻/CO₂-Puffersystem)

---

## Kerninhalt

### 1. ⭐ Zusammensetzung des Blutes

Blut besteht aus **Plasma** (flüssiger Anteil, ~55%) und **Blutzellen** (zellulärer Anteil, ~45%, **Hämatokrit**).

**Hämatokrit (Hkt):**
- Definition: Volumenanteil der **Erythrozyten** am Gesamtblutvolumen
- Normal: **Männer ~45%**, **Frauen ~42%** (Frauen niedriger wegen Menstruation, weniger Testosteron)
- ⭐ **Klinisch:**
  - **Hkt ↑:** Dehydratation, Polyglobulie (zu viele Erythrozyten), Hypoxie (Höhenanpassung)
  - **Hkt ↓:** Anämie (zu wenige Erythrozyten, z. B. Eisenmangel, Blutverlust)

**Plasma (~55%):**
- **Wasser:** ~90%
- **Proteine (~7%):**
  - **Albumin** (~60% der Plasmaproteine): Onkotischer Druck (hält Wasser im Gefäß), Transport (Hormone, Fettsäuren, Bilirubin)
  - **Globuline** (~35%): Antikörper (Immunglobuline IgG, IgM, IgA), Transportproteine
  - **Fibrinogen** (~4%): Gerinnungsfaktor I (wird zu Fibrin bei Gerinnung)
- **Elektrolyte:** Na⁺, K⁺, Ca²⁺, Cl⁻, HCO₃⁻
- **Nährstoffe:** Glukose, Aminosäuren, Lipide
- **Abfallstoffe:** Harnstoff, Kreatinin, Bilirubin

⭐ **Prüfungswichtig:** **Serum** = Plasma **ohne** Fibrinogen (nach Gerinnung), **Plasma** = mit Fibrinogen (Blut + Antikoagulans).

**Blutzellen (zelluläre Komponente, ~45%):**

| Zelltyp | Anzahl/µL | Lebensdauer | Funktion |
|---------|-----------|-------------|----------|
| **Erythrozyten** (rote Blutkörperchen) | 4–6 Mio. (♂), 4–5 Mio. (♀) | ~120 Tage | O₂/CO₂-Transport |
| **Leukozyten** (weiße Blutkörperchen) | 4.000–10.000 | Stunden–Jahre | Immunabwehr |
| **Thrombozyten** (Blutplättchen) | 150.000–400.000 | ~8–10 Tage | Blutgerinnung (primäre Hämostase) |

---

### 2. ⭐ Erythrozyten (Rote Blutkörperchen)

**Morphologie:**
- **Bikonkave Scheiben** (Ø ~7,5 µm, keine Zellorganellen, kein Zellkern im reifen Zustand)
- **Vorteil:** Große Oberfläche (Gasaustausch ↑), Flexibilität (Kapillaren Ø ~5 µm)

**Hämoglobin (Hb):**
- **Struktur:** Tetramer (4 Untereinheiten: 2α, 2β), jede mit **Häm-Gruppe** (Fe²⁺ bindet O₂)
- **Funktion:** O₂-Transport (Lunge → Gewebe), CO₂-Transport (Gewebe → Lunge)
- **Normalwerte:** Männer ~14–18 g/dL, Frauen ~12–16 g/dL

⭐ **O₂-Bindungskurve (sigmoid):**
- **Bohr-Effekt:** CO₂ ↑, pH ↓, Temperatur ↑ → Rechtverschiebung → **O₂-Abgabe ↑** (in metabolisch aktivem Gewebe)
- **2,3-BPG:** Metabolit in Erythrozyten, bindet an Hb → Rechtverschiebung → O₂-Abgabe ↑ (bei Hypoxie, Höhenanpassung)

**Abbau:**
- Nach ~120 Tagen → Milz (Retikuloendotheliales System, RES)
- Hb → **Häm** (Fe²⁺ recycelt, Erythropoese) + **Globin** (Aminosäuren recycelt)
- Häm → **Biliverdin** → **Bilirubin** (unkonjugiert, lipophil) → Leber (Konjugation mit Glukuronsäure → wasserlöslich) → Galle → Darm → Sterkobilin (Stuhlfarbe) + Urobilin (Urinfarbe)

⭐ **Klinisch:**
- **Anämie:** Hb ↓ → O₂-Transportkapazität ↓ → Müdigkeit, Blässe, Tachykardie
  - **Eisenmangelanämie** (häufigste): MCV ↓ (mikrozytär), Ferritin ↓
  - **Vitamin-B₁₂/Folsäure-Mangel:** MCV ↑ (makrozytär, megaloblastär)
  - **Hämolytische Anämie:** Erythrozyten-Abbau ↑ → Bilirubin ↑ (Ikterus)
- **Polyglobulie:** Hb ↑, Hkt ↑ → Blutviskosität ↑ → Thrombose-Risiko
- **Sichelzellanämie:** HbS (Mutation β-Kette) → bei Hypoxie sichelförmig → Hämolyse, Gefäßverschlüsse

---

### 3. Leukozyten (Weiße Blutkörperchen)

**Klassifikation:**

| Typ | Anteil | Funktion | Merkmale |
|-----|--------|----------|----------|
| **Neutrophile Granulozyten** | 50–70% | **Phagozytose** (Bakterien), erste Verteidigungslinie | Segmentkernig, Granula (lysosomale Enzyme, Myeloperoxidase) |
| **Lymphozyten** | 20–40% | **Adaptive Immunität:** T-Zellen (zellulär), B-Zellen (Antikörper) | Runder Kern, wenig Zytoplasma |
| **Monozyten** | 2–10% | **Phagozytose, Antigenpräsentation** → Makrophagen (Gewebe) | Großer bohnenförmiger Kern |
| **Eosinophile Granulozyten** | 1–5% | **Parasiten-Abwehr, Allergie** (Histamin-Abbau) | Zweikernig, rote Granula |
| **Basophile Granulozyten** | <1% | **Allergische Reaktionen** (Histamin-Freisetzung) | S-förmiger Kern, blaue Granula |

⭐ **Klinisch:**
- **Leukozytose:** Leukozyten ↑ (>10.000/µL) → Infektion, Entzündung, Leukämie
- **Leukopenie:** Leukozyten ↓ (<4.000/µL) → Immunsuppression, Knochenmark-Schädigung (Chemotherapie)
- **Linksverschiebung:** Unreife Neutrophile (Stabkernige) ↑ → akute bakterielle Infektion

---

### 4. Thrombozyten (Blutplättchen)

**Struktur:**
- **Keine Zellen**, sondern **Zellfragmente** von Megakaryozyten (Knochenmark)
- Ø ~2–4 µm, keine Zellkerne
- Enthält: Granula (ADP, Serotonin, Thromboxan A₂, Fibrinogen, vWF)

**Funktion:**
- **Primäre Hämostase:** Thrombozytenaggregation → vorläufiger Verschluss bei Gefäßverletzung

⭐ **Klinisch:**
- **Thrombozytopenie:** Thrombozyten <150.000/µL → Blutungsneigung (Petechien, Epistaxis, Hämaturie)
  - **ITP** (Immunthrombozytopenie): Autoantikörper gegen Thrombozyten
  - **TTP** (Thrombotisch-thrombozytopenische Purpura): Mikrothrombi, Hämolyse
- **Thrombozytose:** Thrombozyten >400.000/µL → Thrombose-Risiko

---

### 5. ⭐ Blutgerinnung (Hämostase)

**3 Phasen:**

#### Phase 1: Primäre Hämostase (Thrombozyten)

1. **Gefäßverletzung** → Kollagen (Subendothel) freigelegt
2. **Thrombozytenadhäsion:** Kollagen + **von-Willebrand-Faktor (vWF)** → Thrombozyten binden (GPIb-Rezeptor)
3. **Thrombozytenaktivierung:** ADP, Thromboxan A₂ (TxA₂) freigesetzt → Thrombozyten aktiviert → GPIIb/IIIa-Rezeptor exponiert
4. **Thrombozytenaggregation:** Fibrinogen bindet an GPIIb/IIIa → **Thrombozyten-Pfropf** (weißer Thrombus)

⭐ **Klinisch:**
- **Von-Willebrand-Syndrom** (häufigste hereditäre Blutungsstörung): vWF ↓ → Adhäsion ↓ → Blutungsneigung
- **ASS (Aspirin):** Hemmt **COX-1** → TxA₂ ↓ → Thrombozytenaggregation ↓ (Thromboseprophylaxe)
- **Clopidogrel:** Hemmt ADP-Rezeptor (P2Y₁₂) → Aggregation ↓

#### Phase 2: Sekundäre Hämostase (Gerinnungskaskade)

**Gerinnungskaskade:** Enzym-Kaskade (Proteasen aktivieren nachfolgende Faktoren)

**Extrinsischer Weg (schnell, Sekunden):**
- Gewebeverletzung → **Tissue Factor (TF, Faktor III)** freigesetzt → bindet **Faktor VII** → **Faktor VIIa**
- **Faktor VIIa + TF** → aktiviert **Faktor X** → **Faktor Xa**

**Intrinsischer Weg (langsam, Minuten):**
- Kontakt mit negativ geladenen Oberflächen (Kollagen) → **Faktor XII** → **Faktor XIIa** → Kaskade: **XII → XI → IX → X**

**Gemeinsame Endstrecke:**
- **Faktor Xa + Faktor Va** (Prothrombinase-Komplex) → **Prothrombin (Faktor II)** → **Thrombin (Faktor IIa)**
- **Thrombin** → **Fibrinogen (Faktor I)** → **Fibrin-Monomere** → **Faktor XIIIa** → **Fibrin-Polymer** (quervernetzt) → **stabiler roter Thrombus**

⭐ **Prüfungswichtig:**
- **Vitamin K** (fettlöslich) ist Kofaktor für Synthese von **Faktor II, VII, IX, X** (in Leber)
- **Ca²⁺** (Faktor IV) ist essentieller Kofaktor für viele Schritte (daher Citrat/EDTA als Antikoagulans → bindet Ca²⁺)

**Klinisch:**
- **Hämophilie A:** Faktor VIII ↓ (X-chromosomal rezessiv) → intrinsischer Weg gestört → Blutungsneigung (Hämarthros)
- **Hämophilie B:** Faktor IX ↓
- **Marcumar (Warfarin):** Vitamin-K-Antagonist → Faktor II, VII, IX, X ↓ → Antikoagulation
- **Heparin:** Verstärkt Antithrombin III → hemmt Thrombin + Faktor Xa

#### Phase 3: Fibrinolyse (Auflösung)

- **Plasminogen** → **Plasmin** (durch tPA = tissue Plasminogen Activator)
- **Plasmin** spaltet **Fibrin** → D-Dimere (Abbauprodukt, Marker für Thrombose/Lungenembolie)

⭐ **Klinisch:**
- **Alteplase (rtPA):** Rekombinanter tPA → Fibrinolyse ↑ (Therapie: akuter Myokardinfarkt, Schlaganfall)
- **D-Dimere ↑:** Hinweis auf Thrombose, Lungenembolie, DIC

---

### 6. ⭐ Blutgruppen (AB0-System und Rhesus-System)

#### 6a. AB0-System

**Genetik:**
- **3 Allele:** A, B, 0 (A und B sind kodominant, 0 ist rezessiv)
- **Phänotypen:**

| Blutgruppe | Genotyp | Antigene (auf Erythrozyten) | Antikörper (im Plasma) |
|------------|---------|----------------------------|------------------------|
| **A** | AA oder A0 | A | Anti-B |
| **B** | BB oder B0 | B | Anti-A |
| **AB** | AB | A + B | Keine (Universalempfänger) |
| **0** | 00 | Keine | Anti-A + Anti-B (Universalspender) |

⭐ **Prüfungswichtig:**
- **Antikörper** (IgM, IgG) sind **natürlich** vorhanden (ohne vorherigen Kontakt), da ähnliche Antigene auf Bakterien (Kreuzreaktivität)
- **Transfusionsreaktion:** Inkompatible Transfusion → Antikörper binden Antigene → Hämolyse (intravaskulär) → akute hämolytische Reaktion → Schock, Nierenversagen, DIC

**Transfusionsregeln (Erythrozyten-Konzentrat):**
- **0** → A, B, AB, 0 (Universalspender, da keine Antigene)
- **AB** → nur AB (Universalempfänger, da keine Antikörper)

#### 6b. Rhesus-System

**Rhesus-D-Antigen:**
- **Rh+** (85%): D-Antigen vorhanden (dominant)
- **Rh−** (15%): D-Antigen fehlt (rezessiv)

⭐ **Prüfungswichtig:**
- **Rhesus-Antikörper** (Anti-D) sind **nicht natürlich** vorhanden → entstehen nur nach **Sensibilisierung** (Transfusion, Schwangerschaft)

**Rhesus-Inkompatibilität (Schwangerschaft):**
1. **Erste Schwangerschaft:** Mutter Rh− + Fetus Rh+ → bei Geburt: fetale Erythrozyten → mütterliches Blut → Mutter bildet **Anti-D-Antikörper** (IgG)
2. **Zweite Schwangerschaft:** Fetus Rh+ → mütterliche Anti-D (IgG) passieren Plazenta → binden fetale Erythrozyten → **Hämolyse** → **Morbus haemolyticus neonatorum** (Hydrops fetalis, Kernikterus)

**Prophylaxe:**
- **Anti-D-Immunglobulin** (Rhesogam) bei Rh− Mutter nach Geburt Rh+ Kind → bindet fetale Erythrozyten → verhindert Sensibilisierung

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Zusammensetzung:** Hämatokrit (Männer ~45%, Frauen ~42%), Plasma (Albumin, Fibrinogen, Globuline), Serum = Plasma ohne Fibrinogen
2. **Erythrozyten:** Hämoglobin (Fe²⁺, Tetramer 2α2β), Abbau → Bilirubin (Leber → Galle → Darm), Bohr-Effekt (CO₂↑/pH↓ → O₂-Abgabe↑)
3. **Leukozyten:** Neutrophile (50–70%, Phagozytose), Lymphozyten (20–40%, T/B-Zellen), Monozyten (Makrophagen)
4. **Gerinnung:** Primäre Hämostase (Thrombozyten, vWF), Sekundäre Hämostase (extrinsisch [TF+VII] vs. intrinsisch [XII], gemeinsame Endstrecke [Xa+Va → Thrombin → Fibrin]), Vitamin K (Faktor II, VII, IX, X)
5. **AB0-System:** A (Anti-B), B (Anti-A), AB (keine AK, Universalempfänger), 0 (Anti-A+B, Universalspender), natürliche Antikörper (IgM)
6. **Rhesus-System:** Rh− Mutter + Rh+ Fetus → Sensibilisierung (1. Schwangerschaft) → 2. Schwangerschaft → Morbus haemolyticus neonatorum (Anti-D-Prophylaxe!)

---

## Merksätze

>>>> **Hämatokrit:** „Männer ~45%, Frauen ~42% – Erythrozyten-Volumen im Blut (Anämie ↓, Polyglobulie ↑)."
>>>> (Hämatokrit = Volumenanteil Erythrozyten, Männer höher wegen Testosteron)

>>>> **Gerinnungskaskade:** „Extrinsisch = TF+VII (schnell, Sekunden), Intrinsisch = XII (langsam, Minuten), Endstrecke = Xa+Va → Thrombin → Fibrin!"
>>>> (Beide Wege aktivieren Faktor X → Prothrombinase-Komplex → Thrombin → Fibrinogen → Fibrin)

>>>> **AB0-Blutgruppen:** „0 = Universalspender (keine Antigene), AB = Universalempfänger (keine Antikörper) – natürliche IgM-Antikörper!"
>>>> (A hat Anti-B, B hat Anti-A, AB hat keine, 0 hat Anti-A+B)

>>>> **Rhesus-Inkompatibilität:** „Rh− Mutter + Rh+ Kind: 1. Schwangerschaft = Sensibilisierung, 2. Schwangerschaft = Hämolyse → Anti-D-Prophylaxe nach Geburt!"
>>>> (Anti-D-Immunglobulin bindet fetale Erythrozyten → verhindert mütterliche Antikörper-Bildung)

---

**Navigation:**
← [Zurück: Bio Kap 3 UK04 – Herz-Kreislauf-System](Bio_Kap3_UK04_Herz_Kreislauf.md) | [Weiter: Bio Kap 3 UK06 – Atmungssystem](Bio_Kap3_UK06_Atmungssystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über die Zusammensetzung des Blutes und den Hämatokrit ist korrekt?",
          options: [
          "Der Hämatokrit beschreibt den Volumenanteil aller Blutzellen (Erythrozyten, Leukozyten, Thrombozyten) am Gesamtblutvolumen.",
          "Der Hämatokrit beträgt bei Männern ~45% und bei Frauen ~42% und gibt den Volumenanteil der Erythrozyten an. Serum ist Plasma ohne Fibrinogen.",
          "Plasma enthält kein Fibrinogen, während Serum Fibrinogen enthält, da es vor der Gerinnung gewonnen wird.",
          "Albumin macht ~90% der Plasmaproteine aus und ist hauptsächlich für die Immunabwehr verantwortlich.",
          "Ein erhöhter Hämatokrit (>50%) deutet immer auf eine Anämie hin, da zu viele Erythrozyten abgebaut werden."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **Hämatokrit (Hkt)** ist der **Volumenanteil der Erythrozyten** (nicht aller Blutzellen) am Gesamtblutvolumen:\n- **Männer:** ~45% (höher wegen Testosteron → Erythropoese ↑)\n- **Frauen:** ~42% (niedriger wegen Menstruation, weniger Testosteron)\n\n**Serum vs. Plasma:**\n- **Plasma:** Flüssiger Anteil des Blutes **mit Fibrinogen** (Gerinnungsfaktor I). Gewinnung: Blut + Antikoagulans (z. B. Heparin, EDTA) → Zentrifugation.\n- **Serum:** Plasma **ohne Fibrinogen** (und andere Gerinnungsfaktoren). Gewinnung: Blut gerinnen lassen → Zentrifugation → Überstand = Serum.\n\n**Falsch (A):** Hämatokrit misst nur **Erythrozyten**, nicht Leukozyten oder Thrombozyten (diese machen <1% des Volumens aus).\n\n**Falsch (C):** **Umgekehrt!** **Plasma** enthält Fibrinogen, **Serum** nicht (da Fibrinogen → Fibrin bei Gerinnung).\n\n**Falsch (D):** Albumin macht ~60% (nicht 90%) der Plasmaproteine aus. Funktion: **Onkotischer Druck** (hält Wasser im Gefäß), Transport (Hormone, Fettsäuren, Bilirubin). **Immunabwehr** ist Aufgabe der **Globuline** (Antikörper, Immunglobuline).\n\n**Falsch (E):** Hkt ↑ (>50%) deutet auf **Polyglobulie** (zu viele Erythrozyten) oder Dehydratation hin, **nicht** auf Anämie. **Anämie** = Hkt ↓, Hb ↓ (zu wenige Erythrozyten).",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über Hämoglobin und den Sauerstofftransport trifft zu?",
          options: [
          "Hämoglobin ist ein Monomer mit einer Häm-Gruppe, die Eisen in der Fe³⁺-Form bindet, um Sauerstoff zu transportieren.",
          "Der Bohr-Effekt beschreibt, dass ein Anstieg von CO₂, ein Abfall des pH-Werts und eine Temperaturerhöhung die O₂-Bindungskurve nach rechts verschieben und die O₂-Abgabe in metabolisch aktivem Gewebe fördern.",
          "Beim Abbau von Hämoglobin entsteht Biliverdin, das direkt über die Niere ausgeschieden wird und dem Urin seine gelbe Farbe verleiht.",
          "2,3-BPG (Bisphosphoglycerat) verschiebt die O₂-Bindungskurve nach links und erhöht die Sauerstoffaffinität von Hämoglobin.",
          "Erythrozyten haben eine Lebensdauer von ~30 Tagen und werden hauptsächlich in der Leber abgebaut."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **Bohr-Effekt** beschreibt, wie metabolische Parameter die O₂-Affinität von Hämoglobin beeinflussen:\n\n**Rechtverschiebung der O₂-Bindungskurve** (O₂-Affinität ↓, O₂-Abgabe ↑):\n- **CO₂ ↑** (metabolisch aktives Gewebe produziert CO₂)\n- **pH ↓** (Azidose, H⁺ ↑)\n- **Temperatur ↑** (erhöhter Stoffwechsel, Muskelarbeit)\n- **2,3-BPG ↑** (bei chronischer Hypoxie, Höhenanpassung)\n\n**Physiologische Bedeutung:** In metabolisch aktivem Gewebe (Muskel, Hirn) wird mehr O₂ benötigt → lokale Bedingungen (CO₂ ↑, pH ↓, Temp ↑) → O₂-Abgabe ↑.\n\n**Falsch (A):** Hämoglobin ist ein **Tetramer** (nicht Monomer) mit **4 Untereinheiten** (2α, 2β), jede mit **einer Häm-Gruppe** (insgesamt 4 Häm-Gruppen). Eisen muss in der **Fe²⁺-Form** sein (nicht Fe³⁺), um O₂ zu binden. Fe³⁺ = Methämoglobin (kann kein O₂ binden).\n\n**Falsch (C):** Biliverdin entsteht aus Häm-Abbau (in Milz/Leber) → **Bilirubin** (gelb) → Leber (Konjugation) → Galle → Darm → **Sterkobilin** (Stuhlfarbe braun). Ein Teil wird zu **Urobilin** umgewandelt → Niere → **Urinfarbe gelb**. Biliverdin selbst wird **nicht** direkt ausgeschieden.\n\n**Falsch (D):** 2,3-BPG verschiebt die Kurve nach **rechts** (nicht links) → O₂-Affinität ↓ → **O₂-Abgabe ↑**. Linksverschiebung würde O₂-Affinität ↑ bedeuten (z. B. fetales Hb, CO-Vergiftung).\n\n**Falsch (E):** Erythrozyten haben eine Lebensdauer von **~120 Tagen** (nicht 30) und werden hauptsächlich in der **Milz** (nicht Leber) abgebaut (Retikuloendotheliales System, RES).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Leukozyten ist korrekt?",
          options: [
          "Neutrophile Granulozyten machen 20–40% der Leukozyten aus und sind hauptsächlich für die Produktion von Antikörpern verantwortlich.",
          "Lymphozyten machen 50–70% der Leukozyten aus und sind die erste Verteidigungslinie bei bakteriellen Infektionen durch Phagozytose.",
          "Neutrophile Granulozyten (50–70%) sind segmentkernige Phagozyten mit Granula, die lysosomale Enzyme und Myeloperoxidase enthalten, und bilden die erste Verteidigungslinie bei bakteriellen Infektionen.",
          "Eosinophile Granulozyten sind besonders wichtig bei viralen Infektionen und machen über 10% der Leukozyten aus.",
          "Eine Linksverschiebung im Differentialblutbild bedeutet einen Anstieg reifer segmentkerniger Neutrophiler und deutet auf eine chronische Infektion hin."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Neutrophile Granulozyten** sind die häufigsten Leukozyten:\n\n**Anteil:** 50–70% der Leukozyten\n\n**Morphologie:**\n- **Segmentkernig** (3–5 Segmente)\n- **Granula** enthalten lysosomale Enzyme (Proteasen, Elastase) und **Myeloperoxidase** (MPO)\n\n**Funktion:**\n- **Phagozytose** von Bakterien (erste Verteidigungslinie bei akuten bakteriellen Infektionen)\n- **Respiratory Burst:** NADPH-Oxidase → O₂⁻, H₂O₂ (mit MPO → HOCl, stark bakterizid)\n\n**Klinisch:**\n- **Neutropenie** (<1.500/µL) → erhöhtes Infektionsrisiko (Chemotherapie, aplastische Anämie)\n- **Neutrophilie** → bakterielle Infektion, Entzündung\n\n**Falsch (A):** **Lymphozyten** (nicht Neutrophile) machen 20–40% aus und produzieren Antikörper (B-Zellen). Neutrophile machen 50–70% aus und sind Phagozyten.\n\n**Falsch (B):** **Lymphozyten** machen 20–40% (nicht 50–70%) aus. **Neutrophile** (50–70%) sind die erste Verteidigungslinie bei bakteriellen Infektionen durch Phagozytose. Lymphozyten sind für **adaptive Immunität** zuständig (T-Zellen: zellulär, B-Zellen: Antikörper).\n\n**Falsch (D):** **Eosinophile** sind wichtig bei **Parasiten-Abwehr** und **allergischen Reaktionen** (nicht viralen Infektionen) und machen nur **1–5%** (nicht >10%) der Leukozyten aus.\n\n**Falsch (E):** **Linksverschiebung** bedeutet Anstieg **unreifer** Neutrophiler (**Stabkernige**, Metamyelozyten) → deutet auf **akute** (nicht chronische) bakterielle Infektion hin. Rechtsverschiebung = reife segmentkernige Neutrophile ↑.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Blutgerinnung (Hämostase) ist korrekt?",
          options: [
          "Die primäre Hämostase erfolgt durch die Gerinnungskaskade, bei der Fibrinogen zu Fibrin umgewandelt wird.",
          "Der von-Willebrand-Faktor (vWF) ist entscheidend für die Thrombozytenadhäsion an Kollagen. Ein vWF-Mangel führt zur häufigsten hereditären Blutungsstörung.",
          "Vitamin K ist ein Kofaktor für die Synthese der Gerinnungsfaktoren I, V, VIII und XII in der Leber.",
          "Der extrinsische Weg der Gerinnungskaskade beginnt mit Faktor XII und ist langsamer als der intrinsische Weg.",
          "Hämophilie A ist durch einen Mangel an Faktor IX gekennzeichnet und führt zu einer Störung des extrinsischen Wegs."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **von-Willebrand-Faktor (vWF)** ist essentiell für die **primäre Hämostase**:\n\n**Funktion:**\n1. **Thrombozytenadhäsion:** Bei Gefäßverletzung wird Kollagen (Subendothel) freigelegt → vWF bindet an Kollagen **und** an Thrombozyten (GPIb-Rezeptor) → Brückenmolekül → Adhäsion\n2. **Stabilisierung von Faktor VIII:** vWF schützt Faktor VIII vor Abbau\n\n**Von-Willebrand-Syndrom (vWS):**\n- **Häufigste hereditäre Blutungsstörung** (~1% der Bevölkerung)\n- vWF ↓ oder dysfunktional → Thrombozytenadhäsion ↓, Faktor VIII ↓\n- **Symptome:** Schleimhautblutungen (Epistaxis, Menorrhagie), verlängerte Blutungszeit\n\n**Falsch (A):** Die **primäre Hämostase** erfolgt durch **Thrombozyten** (Adhäsion → Aktivierung → Aggregation → Thrombozyten-Pfropf). Die **sekundäre Hämostase** ist die Gerinnungskaskade (Fibrinogen → Fibrin).\n\n**Falsch (C):** Vitamin K ist Kofaktor für die Synthese der Faktoren **II, VII, IX, X** (nicht I, V, VIII, XII). Merkhilfe: \"1972\" → II, VII, IX, X. Diese werden in der **Leber** synthetisiert. Vitamin-K-Mangel oder Antagonisten (Marcumar) → Faktoren ↓ → Blutungsneigung.\n\n**Falsch (D):** Der **extrinsische Weg** beginnt mit **Tissue Factor (TF) + Faktor VII** (nicht XII) und ist **schnell** (Sekunden). Der **intrinsische Weg** beginnt mit **Faktor XII** und ist **langsam** (Minuten).\n\n**Falsch (E):** **Hämophilie A** ist durch Mangel an **Faktor VIII** (nicht IX) gekennzeichnet. **Hämophilie B** = Faktor IX-Mangel. Beide stören den **intrinsischen Weg** (nicht extrinsischen). Beide sind X-chromosomal rezessiv.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über das AB0-Blutgruppensystem ist korrekt?",
          options: [
          "Blutgruppe A hat Antigen B auf den Erythrozyten und Anti-A-Antikörper im Plasma.",
          "Blutgruppe 0 ist der Universalempfänger, da keine Antikörper im Plasma vorhanden sind.",
          "Blutgruppe AB hat die Antigene A und B auf den Erythrozyten und keine Antikörper im Plasma, weshalb AB der Universalempfänger ist. Blutgruppe 0 hat keine Antigene und ist der Universalspender.",
          "AB0-Antikörper entstehen erst nach vorheriger Sensibilisierung durch Transfusion oder Schwangerschaft.",
          "Bei einer inkompatiblen Bluttransfusion (z. B. B-Blut an A-Empfänger) verläuft die Reaktion in der Regel asymptomatisch."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** Das AB0-System basiert auf **Antigenen** (auf Erythrozyten) und **Antikörpern** (im Plasma):\n\n| Blutgruppe | Antigene | Antikörper | Transfusion möglich von |\n|------------|----------|------------|------------------------|\n| **A** | A | Anti-B | A, 0 |\n| **B** | B | Anti-A | B, 0 |\n| **AB** | A + B | Keine | A, B, AB, 0 (**Universalempfänger**) |\n| **0** | Keine | Anti-A + Anti-B | nur 0 (aber **Universalspender**) |\n\n⭐ **Wichtig:**\n- **AB** hat **keine Antikörper** → kann alle Blutgruppen empfangen (Universalempfänger)\n- **0** hat **keine Antigene** → kann an alle Blutgruppen gespendet werden (Universalspender)\n\n**Falsch (A):** Blutgruppe A hat **Antigen A** (nicht B) auf Erythrozyten und **Anti-B** (nicht Anti-A) im Plasma. (A gegen B, B gegen A).\n\n**Falsch (B):** Blutgruppe **AB** (nicht 0) ist der Universalempfänger (keine Antikörper). Blutgruppe 0 hat **Anti-A + Anti-B** im Plasma und ist der **Universalspender** (keine Antigene auf Erythrozyten).\n\n**Falsch (D):** AB0-Antikörper sind **natürlich vorhanden** (ohne vorherige Sensibilisierung) ab dem 6. Lebensmonat. Grund: Kreuzreaktivität mit ähnlichen Antigenen auf Bakterien (intestinale Flora). Im Gegensatz dazu entstehen **Rhesus-Antikörper** erst nach Sensibilisierung.\n\n**Falsch (E):** Bei inkompatiblen Transfusionen (z. B. B-Blut an A-Empfänger → Anti-B bindet B-Antigene) kommt es zu einer **akuten hämolytischen Transfusionsreaktion**:\n- Hämolyse (intravaskulär, IgM-vermittelt)\n- **Symptome:** Fieber, Schüttelfrost, Rückenschmerzen, Dyspnoe, Hypotonie, Schock\n- **Komplikationen:** Nierenversagen (Hb-Zylinder), DIC (Disseminierte intravasale Gerinnung)\n- **Notfall!**",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Rh-negative Mutter bringt ein Rh-positives Kind zur Welt. Welche Aussage über die Rhesus-Inkompatibilität und ihre Folgen ist korrekt?",
          options: [
          "Bereits bei der ersten Schwangerschaft kommt es zu einer schweren hämolytischen Erkrankung des Neugeborenen (Morbus haemolyticus neonatorum).",
          "Bei der ersten Schwangerschaft mit einem Rh+ Kind wird die Rh− Mutter sensibilisiert (bildet Anti-D-IgG), aber das erste Kind ist in der Regel nicht betroffen. Bei einer zweiten Schwangerschaft mit Rh+ Kind können mütterliche Anti-D-Antikörper die Plazenta passieren und zu Hämolyse beim Fetus führen.",
          "Rhesus-Antikörper (Anti-D) sind natürlich vorhanden wie AB0-Antikörper und entstehen ohne vorherige Sensibilisierung.",
          "Die Anti-D-Prophylaxe (Rhesogam) sollte der Mutter vor der Geburt des ersten Kindes gegeben werden, um die Sensibilisierung zu verhindern.",
          "Morbus haemolyticus neonatorum tritt nur bei AB0-Inkompatibilität auf, nicht bei Rhesus-Inkompatibilität."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Rhesus-Inkompatibilität** (Rh− Mutter + Rh+ Fetus):\n\n**1. Schwangerschaft:**\n- Bei Geburt (oder Abort, Amniozentese) → fetale Erythrozyten (Rh+) gelangen ins mütterliche Blut\n- Mutter (Rh−) wird **sensibilisiert** → bildet **Anti-D-Antikörper** (IgG, dauerhaft)\n- **Erstes Kind ist in der Regel NICHT betroffen**, da Sensibilisierung erst bei/nach Geburt erfolgt\n\n**2. Schwangerschaft (und folgende):**\n- Fetus Rh+ → mütterliche **Anti-D (IgG)** passieren Plazenta (IgG ist plazentagängig!)\n- Anti-D bindet fetale Erythrozyten (Rh+) → **Hämolyse**\n- **Morbus haemolyticus neonatorum:**\n  - Anämie (Erythrozyten-Abbau)\n  - Ikterus (Bilirubin ↑ → Kernikterus-Risiko)\n  - Hydrops fetalis (schwere Form: Herzinsuffizienz, Ödeme, intrauteriner Fruchttod)\n\n**Prophylaxe:** Anti-D-Immunglobulin (Rhesogam) bei Rh− Mutter **nach Geburt** eines Rh+ Kindes → bindet fetale Erythrozyten → verhindert mütterliche Sensibilisierung.\n\n**Falsch (A):** Das **erste Kind** ist in der Regel **nicht betroffen**, da die Sensibilisierung erst bei/nach der Geburt erfolgt. **Zweite (und folgende) Schwangerschaften** sind gefährdet.\n\n**Falsch (C):** Rhesus-Antikörper (Anti-D) sind **NICHT natürlich** vorhanden, sondern entstehen erst nach **Sensibilisierung** (Transfusion, Schwangerschaft). Im Gegensatz zu AB0-Antikörpern (IgM, natürlich vorhanden).\n\n**Falsch (D):** Anti-D-Prophylaxe wird **nach der Geburt** (innerhalb 72 Stunden) gegeben, nicht vor. Zusätzlich kann sie bei Risikosituationen während der Schwangerschaft gegeben werden (Amniozentese, Trauma, Abort). Wichtig: **nach Geburt** des ersten Rh+ Kindes, um Sensibilisierung für zukünftige Schwangerschaften zu verhindern.\n\n**Falsch (E):** Morbus haemolyticus neonatorum tritt typischerweise bei **Rhesus-Inkompatibilität** auf (zweite Schwangerschaft). AB0-Inkompatibilität kann auch zu Hämolyse führen, ist aber meist milder (da AB0-Antikörper [IgM] weniger plazentagängig sind, nur IgG passiert gut).",
          difficulty: 3,
          tags: [],
          hints: [
            "Denke: Anti-D ist ein IgG-Antikörper. Welche Eigenschaft von IgG ist für die Plazenta-Passage wichtig?",
            "IgG ist der einzige Antikörper, der die Plazentaschranke überqueren kann → mütterliche IgG-Antikörper können den Fetus schädigen, erst ab der 2. Schwangerschaft relevant."
          ],
        }
      ],
      merksätze: [
        "**Hämatopoese:** Alle Blutzellen entstammen der pluripotenten hämatopoetischen Stammzelle (Knochenmark). Myeloische Linie: Erythrozyten, Thrombozyten, Granulozyten (Neutrophile, Eosinophile, Basophile), Monozyten/Makrophagen. Lymphoide Linie: T-Zellen (Thymus), B-Zellen (Knochenmark), NK-Zellen. EPO (Niere) → Erythropoese ↑. G-CSF → Neutrophilen-Produktion ↑.",
        "**Erythrozyten:** Bikonkave Scheibe, kernlos, ~7,5 μm, Lebensdauer ~120 Tage. Hämoglobin: Tetramer (2α, 2β), je 1 Häm-Gruppe (Fe²⁺), 4 O₂-Bindungsstellen. Bohr-Effekt: CO₂ ↑, pH ↓, Temp ↑ → Rechtverschiebung O₂-Kurve → O₂-Abgabe ↑. Abbau: Milz → Bilirubin. Anämie: Hb ↓ (Eisenmangel = häufigste).",
        "**Leukozyten-Differentialblutbild:** Neutrophile 50–70% (Phagozyten, Bakterien, Respiratory Burst), Lymphozyten 20–40% (T-Zellen, B-Zellen, NK-Zellen), Monozyten 3–8% (→ Makrophagen, Dendritische Zellen), Eosinophile 1–5% (Parasiten, Allergie), Basophile <1% (Histamin). Linksverschiebung: unreife Stabkernige ↑ → akute bakterielle Infektion.",
        "**Blutgerinnung:** Primäre Hämostase: Thrombozytenadhäsion (vWF, GPIb) + -aggregation (Fibrinogen, GPIIb/IIIa) → weißer Thrombus. Sekundäre Hämostase: Extrinsisch (TF + VII → Xa) + Intrinsisch (XII → XI → IX → X) → gemeinsam: Xa + Va → Thrombin → Fibrin → roter Thrombus. Vitamin K: Faktor II, VII, IX, X. Heparin (AT-III), Warfarin (Vit-K-Antagonist), DOAKs.",
        "**AB0-Blutgruppen:** A: Antigen A + Anti-B. B: Antigen B + Anti-A. AB: Antigene A+B, keine AK → Universalempfänger. 0: keine Antigene, Anti-A+B → Universalspender. Antikörper natürlich (IgM, kreuzreaktiv). Transfusionsreaktion (IgM-vermittelt): Hämolyse + Schock + Nierenversagen → Notfall.",
        "**Rhesus-System:** Rh+ (85%): D-Antigen vorhanden; Rh− (15%): kein D-Antigen. Anti-D entsteht nur durch Sensibilisierung. Rh− Mutter + Rh+ Fetus: 1. Schwangerschaft → Sensibilisierung bei Geburt → 2. Schwangerschaft: Anti-D (IgG, plazentagängig) → fetale Hämolyse = Morbus haemolyticus neonatorum. Prophylaxe: Anti-D-Immunglobulin post partum.",
        "**Anämien im Überblick:** Eisenmangel (häufigste): MCV ↓, MCH ↓, Ferritin ↓, Transferrinsättigung ↓. Vit-B₁₂/Folsäuremangel: MCV ↑ (megaloblastär), Hypersegmentierung Neutrophile. Hämolytische Anämie: LDH ↑, Bilirubin ↑ (indirekt), Retikulozyten ↑, Coombs-Test. Aplastische Anämie: Panzytopenie, Knochenmark leer. Sichelzellanämie: HbS-Mutation → Sichelform → Gefäßverschlüsse.",
        "**Leukämien:** AML (akute myeloische L.): Blasten ≥20% im KM, Auer-Stäbchen, ältere Patienten. ALL (akute lymphatische L.): häufigste Leukämie im Kindesalter, Philadelphia-Chromosom (bcr-abl, t(9;22)) bei CML. CLL: reife B-Zellen ↑, häufigste Leukämie bei Erwachsenen, langsamer Verlauf. Therapie: Chemotherapie, KMT, Imatinib (Tyrosinkinase-Inhibitor, CML).",
        "**DIC (Disseminierte intravasale Gerinnung):** Systemische Gerinnungsaktivierung → Verbrauchskoagulopathie: Gerinnungsfaktoren + Thrombozyten ↓ → gleichzeitig Mikrothrombosen + Blutungsneigung. Ursachen: Sepsis, Trauma, Fruchtwasserembolie, akute Leukämie. Labor: PT ↑, PTT ↑, Fibrinogen ↓, D-Dimere ↑, Thrombozyten ↓. Therapie: Grundkrankheit, FFP, Thrombozyten, Heparin (kontrovers).",
        "**Thrombozyten-Funktion und Hemmstoffe:** Thrombozyten (~150.000–400.000/μL, aus Megakaryozyten, Lebensdauer ~10 Tage). Aktivierung: ADP (P2Y₁₂), TxA₂ (COX-1), Thrombin (PAR-1). Clopidogrel: P2Y₁₂-Antagonist → ADP-Hemmung. ASS: COX-1-Hemmung → TxA₂ ↓. Abciximab: GPIIb/IIIa-Antagonist. Thrombozytopenie: <100.000/μL → Petechien; <20.000/μL → Spontanblutung."
      ],
      klinischerBezug: "Eisenmangelanämie: häufigste Anämie weltweit (Frauen im gebärfähigen Alter, Malnutrition, Blutung). Symptome: Müdigkeit, Blässe, Tachykardie, Pica (Eis/Erde essen), Koilonychie (Hohlnägel). Labor: Hb ↓, MCV ↓, Ferritin ↓. Therapie: Eisensulfat/Eisengluconat p.o. Leukämien: AML (kuratives Ziel: intensive Chemotherapie + allogene KMT), ALL (Kinder: beste Prognose ~90% Heilung), CML (Imatinib revolutionierte Therapie). Gerinnungsstörungen: Hämophilie A (Faktor VIII ↓, X-chromosomal) + B (Faktor IX ↓): PTT ↑, PT normal → Substitution. Von-Willebrand-Syndrom (häufigste hereditäre Blutungsstörung): Schleimhautblutungen, verlängerte Blutungszeit. Sepsis-assoziierte DIC ist lebensbedrohlich: simultane Mikrothromben + Blutungen erfordern sofortige Intensivtherapie."
    },
    {
      id: 'bio-3-06',
      title: "Immunsystem",
      content: `# Immunsystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 18 Minuten
**Stichwortliste-Abdeckung:** 12/12 Stichwörter

---

## Einleitung

Das **Immunsystem** schützt den Körper vor **Pathogenen** (Bakterien, Viren, Pilze, Parasiten), **Tumorzellen** und **Fremdkörpern**. Es unterscheidet zwischen **„selbst"** und **„fremd"** durch Antigenerkennung.

**Zwei Hauptsysteme:**
1. **Angeborene (unspezifische) Immunität:** Schnell (~Minuten–Stunden), unspezifisch, keine Gedächtnisbildung
2. **Erworbene (adaptive, spezifische) Immunität:** Langsam (~Tage), hochspezifisch, Gedächtnisbildung

---

## Kerninhalt

### 1. ⭐ Angeborene Immunität (Erste Verteidigungslinie)

Die **angeborene Immunität** reagiert sofort auf Pathogene ohne vorherigen Kontakt.

**Komponenten:**

#### 1a. Physikalische und chemische Barrieren

| Barriere | Mechanismus |
|----------|-------------|
| **Haut** | Mechanische Barriere (verhorntes Plattenepithel), saurer pH (~5,5), antimikrobielle Peptide (Defensine) |
| **Schleimhäute** | Mukus (fängt Pathogene), Zilien (Flimmerhärchen, Abtransport), Lysozym (Speichel, Tränen → spaltet Bakterienzellwand) |
| **Magensäure** | pH ~1–2 → tötet Bakterien |
| **Kommensale Flora** | Darmbakterien konkurrieren mit Pathogenen (Nische, Nährstoffe) |

#### 1b. Zelluläre Komponenten

| Zelltyp | Funktion |
|---------|----------|
| **Neutrophile Granulozyten** | Phagozytose (Bakterien), Respiratory Burst (O₂⁻, H₂O₂, HOCl) |
| **Makrophagen** | Phagozytose, Antigenpräsentation (MHC II), Zytokin-Freisetzung (IL-1, TNF-α) |
| **Dendritische Zellen** | Professionelle Antigenpräsentierende Zellen (APCs), Brücke zu adaptiver Immunität |
| **NK-Zellen** (Natural Killer) | Töten virusinfizierte Zellen + Tumorzellen (ohne MHC-I) durch Perforin/Granzyme |
| **Eosinophile** | Parasiten-Abwehr (Exozytose toxischer Granula) |
| **Basophile/Mastzellen** | Histamin-Freisetzung (Allergie, Anaphylaxie) |

#### 1c. Humorale Komponenten

- **Komplementsystem:** Kaskade von ~30 Proteinen (C1–C9)
  - **Klassischer Weg:** Antikörper-Antigen-Komplex → C1 aktiviert
  - **Alternativer Weg:** Direkt durch Pathogen-Oberfläche
  - **Lektin-Weg:** Mannose-bindendes Lektin (MBL) bindet Pathogene
  - **Effekte:**
    - **Opsonierung:** C3b markiert Pathogene → Phagozytose ↑
    - **Chemotaxis:** C5a lockt Neutrophile/Makrophagen an
    - **Lyse:** Membran-Angriffs-Komplex (MAC, C5b–C9) → Zellmembran-Perforation → Bakterien-Lyse
- **Akute-Phase-Proteine:** CRP (C-reaktives Protein), Fibrinogen → Entzündungsmarker
- **Interferone (IFN):**
  - **Typ I (IFN-α/β):** Von virusinfizierten Zellen → hemmt Virusreplikation in Nachbarzellen, aktiviert NK-Zellen
  - **Typ II (IFN-γ):** Von T-Zellen/NK-Zellen → aktiviert Makrophagen

⭐ **Prüfungswichtig:**
- **NK-Zellen** töten Zellen **ohne MHC-I** (fehlende Selbst-Erkennung, „Missing Self"). Tumorzellen/virusinfizierte Zellen unterdrücken oft MHC-I → werden von NK-Zellen erkannt.
- **Komplementsystem:** C3b = Opsonierung, C5a = Chemotaxis, C5b–C9 = MAC (Lyse)

---

### 2. ⭐ Erworbene (Adaptive) Immunität

Die **erworbene Immunität** entwickelt sich nach Erstkontakt mit einem Antigen und bildet ein **immunologisches Gedächtnis**.

**Charakteristika:**
- **Spezifität:** Gegen spezifische Antigene gerichtet
- **Gedächtnis:** Schnellere, stärkere Reaktion bei erneutem Kontakt (Sekundärantwort)
- **Selbsttoleranz:** Erkennt „selbst" (MHC) und greift nicht an (zentrale + periphere Toleranz)

**Zwei Arme:**

#### 2a. ⭐ Humorale Immunität (Antikörper, B-Zellen)

**B-Zellen:**
- Entstehen im **Knochenmark** (Bone marrow), reifen dort
- Tragen **B-Zell-Rezeptor (BCR)** → membranständiges Immunglobulin (erkennt Antigen direkt)
- Nach Antigen-Kontakt + T-Helfer-Zellen (CD4⁺) → **Aktivierung** → **Differenzierung:**
  - **Plasmazellen:** Produzieren Antikörper (AK, Immunglobuline) in großen Mengen (~2.000 AK/Sekunde)
  - **Gedächtnis-B-Zellen:** Langlebig, schnelle Reaktion bei erneutem Kontakt

⭐ **Antikörper (Immunglobuline, Ig):**

**Struktur:** Y-förmig, 4 Ketten (2 schwere H-Ketten, 2 leichte L-Ketten), Disulfidbrücken

- **Fab-Region** (Fragment antigen-binding): Bindet Antigen (variable Region, Spezifität)
- **Fc-Region** (Fragment crystallizable): Effektorfunktionen (Komplement-Aktivierung, Opsonierung, bindet an Fc-Rezeptoren)

**Antikörper-Klassen:**

| Klasse | Anteil | Eigenschaften | Funktion |
|--------|--------|---------------|----------|
| **IgG** | ~75% | Monomer, plazentagängig, lange Halbwertszeit (~21 Tage) | Hauptantikörper im Serum, Opsonierung, Komplement-Aktivierung, Neutralisation, passiver Nestschutz |
| **IgM** | ~10% | Pentamer (5 Monomere), erste AK bei Primärantwort | Frühe Immunantwort, starke Komplement-Aktivierung, Agglutination |
| **IgA** | ~15% | Dimer (Sekretion), Monomer (Serum) | Schleimhautschutz (Speichel, Tränen, Muttermilch, Darm), Neutralisation |
| **IgE** | <1% | Monomer, bindet an Mastzellen/Basophile | Parasiten-Abwehr, Allergie (Typ-I-Reaktion, Histamin-Freisetzung) |
| **IgD** | <1% | Monomer, membranständig auf B-Zellen | B-Zell-Rezeptor (Funktion unklar) |

⭐ **Prüfungswichtig:**
- **IgM:** Erste Reaktion (Primärantwort), Pentamer, starke Komplement-Aktivierung
- **IgG:** Sekundärantwort (Gedächtnis), plazentagängig (Nestschutz), Opsonierung
- **IgA:** Schleimhautschutz (Dimer in Sekreten)
- **IgE:** Allergie (Mastzellen → Histamin → Anaphylaxie)

**Antikörper-Funktionen:**
1. **Neutralisation:** Blockiert Pathogen-Bindung an Wirtszellen (Viren, Toxine)
2. **Opsonierung:** Markiert Pathogene (Fc-Region) → Phagozytose ↑ (Makrophagen, Neutrophile haben Fc-Rezeptoren)
3. **Komplement-Aktivierung:** IgM, IgG → klassischer Weg → Lyse
4. **Agglutination:** Verklumpt Pathogene (v. a. IgM, Pentamer)
5. **ADCC** (Antibody-Dependent Cellular Cytotoxicity): NK-Zellen binden an Fc → töten markierte Zellen

#### 2b. ⭐ Zelluläre Immunität (T-Zellen)

**T-Zellen:**
- Entstehen im Knochenmark, reifen im **Thymus** (daher „T")
- Tragen **T-Zell-Rezeptor (TCR)** → erkennt Antigene nur über **MHC** (Major Histocompatibility Complex, beim Menschen: HLA)

**MHC-Präsentation:**

| MHC-Klasse | Exprimiert auf | Präsentiert | Erkannt von |
|------------|----------------|-------------|-------------|
| **MHC I** | **Alle kernhaltigen Zellen** | Intrazelluläre Antigene (Viren, Tumoren) | **CD8⁺ T-Zellen** (zytotoxisch) |
| **MHC II** | **APCs** (Dendritische Zellen, Makrophagen, B-Zellen) | Extrazelluläre Antigene (Bakterien, Parasiten) | **CD4⁺ T-Zellen** (T-Helfer) |

⭐ **Prüfungswichtig:**
- **MHC I → CD8⁺** (intrazelluläre Pathogene, Viren)
- **MHC II → CD4⁺** (extrazelluläre Pathogene, Bakterien)

**T-Zell-Typen:**

| Typ | Marker | Funktion | Aktivierung |
|-----|--------|----------|-------------|
| **T-Helfer-Zellen (Th)** | **CD4⁺** | Koordination der Immunantwort, Zytokin-Freisetzung | MHC II + Antigen |
| → **Th1** | CD4⁺ | Zelluläre Immunität (IFN-γ → aktiviert Makrophagen, fördert CD8⁺) | Intrazelluläre Pathogene (Viren, Bakterien) |
| → **Th2** | CD4⁺ | Humorale Immunität (IL-4, IL-5 → aktiviert B-Zellen, Eosinophile) | Extrazelluläre Pathogene, Parasiten, Allergien |
| → **Th17** | CD4⁺ | Entzündung (IL-17 → rekrutiert Neutrophile) | Extrazelluläre Bakterien, Pilze |
| **Zytotoxische T-Zellen (Tc, CTL)** | **CD8⁺** | Töten infizierte/Tumor-Zellen (Perforin, Granzyme, Fas-Ligand → Apoptose) | MHC I + Antigen |
| **Regulatorische T-Zellen (Treg)** | CD4⁺ CD25⁺ FoxP3⁺ | Suppression der Immunantwort, Selbsttoleranz (IL-10, TGF-β) | Verhindert Autoimmunität |

⭐ **Prüfungswichtig:**
- **CD8⁺ (CTL):** Töten virusinfizierte Zellen, Tumorzellen (über MHC I)
- **CD4⁺ (Th):** Helfen B-Zellen (Antikörper), aktivieren Makrophagen (Th1), koordinieren Immunantwort
- **Treg:** Selbsttoleranz, verhindern Autoimmunität

---

### 3. ⭐ Immunantwort (Primär vs. Sekundär)

**Primärantwort (Erstkontakt mit Antigen):**
- **Latenzzeit:** 5–10 Tage (klonale Expansion, Differenzierung)
- **Antikörper:** Hauptsächlich **IgM** (erste Reaktion), dann IgG
- **Gedächtniszellen:** Werden gebildet (B- und T-Gedächtniszellen)

**Sekundärantwort (erneuter Kontakt):**
- **Latenzzeit:** 1–3 Tage (schneller!)
- **Antikörper:** Hauptsächlich **IgG** (höhere Affinität durch somatische Hypermutation)
- **Stärke:** Höhere Antikörper-Titer, länger anhaltend

⭐ **Prüfungswichtig:** **IgM** = Primärantwort (erste Infektion, akut), **IgG** = Sekundärantwort (Gedächtnis, chronisch/abgelaufen). Serologische Diagnostik: IgM ↑ → akute Infektion, IgG ↑ → abgelaufene Infektion oder Impfung.

---

### 4. ⭐ Impfung (Aktiv vs. Passiv)

**Aktive Immunisierung:**
- **Prinzip:** Antigen-Gabe (abgeschwächt, inaktiviert, Toxoid, mRNA) → Immunsystem bildet **eigene Antikörper + Gedächtnis**
- **Beispiele:**
  - **Lebendimpfstoff** (attenuiert): Masern, Mumps, Röteln (MMR), Varizellen, Rotavirus
  - **Totimpfstoff:** Influenza (inaktiviert), Polio (Salk), Hepatitis A, FSME
  - **Toxoid:** Tetanus, Diphtherie (inaktiviertes Toxin)
  - **mRNA-Impfstoff:** COVID-19 (BioNTech, Moderna)
- **Vorteile:** Langanhaltender Schutz (Jahre–Jahrzehnte), Gedächtnis
- **Nachteile:** Langsamer Wirkungseintritt (Wochen), Kontraindikation bei Immunsuppression (Lebendimpfstoff!)

**Passive Immunisierung:**
- **Prinzip:** Gabe von **fertigen Antikörpern** (Immunglobuline)
- **Beispiele:**
  - **Tetanus-Immunglobulin** (nach Verletzung, kein Impfschutz)
  - **Hepatitis-B-Immunglobulin** (nach Nadelstichverletzung)
  - **Rhesus-Prophylaxe** (Anti-D bei Rh− Mutter)
  - **Palivizumab** (RSV-Prophylaxe bei Frühgeborenen)
- **Vorteile:** Sofortiger Schutz (Stunden)
- **Nachteile:** Kurze Wirkdauer (~3 Monate, Antikörper werden abgebaut), **kein Gedächtnis**

---

### 5. ⭐ Allergie (Typ-I-Hypersensitivität)

**Definition:** Überreaktion des Immunsystems auf harmlose Antigene (Allergene)

**Mechanismus (IgE-vermittelt):**
1. **Sensibilisierung:** Erstkontakt mit Allergen (Pollen, Hausstaubmilben, Erdnüsse) → Th2-Zellen → IL-4 → B-Zellen produzieren **IgE**
2. **IgE** bindet an **Fc-Rezeptoren** auf Mastzellen/Basophilen (Degranulation bereit)
3. **Re-Exposition:** Allergen bindet IgE (Kreuzvernetzung) → **Mastzell-Degranulation** → **Histamin-Freisetzung** (sofort), Leukotriene, Prostaglandine (spät)

**Klinische Manifestationen:**

| Typ | Symptome | Beispiele |
|-----|----------|-----------|
| **Allergische Rhinitis** | Niesen, Rhinorrhoe, Juckreiz | Heuschnupfen (Pollen) |
| **Asthma** | Bronchospasmus, Dyspnoe, Giemen | Allergisches Asthma (Hausstaubmilben, Tierhaare) |
| **Urtikaria** | Quaddeln, Juckreiz | Nesselsucht (Nahrungsmittel, Medikamente) |
| **Anaphylaxie** | Systemisch: Hypotonie, Bronchospasmus, Larynxödem → **lebensbedrohlich!** | Insektenstiche, Erdnüsse, Penicillin |

⭐ **Therapie:**
- **Antihistaminika:** Blockieren H₁-Rezeptoren (Symptomlinderung)
- **Glukokortikoide:** Entzündungshemmung (Prednisolon inhalativ/systemisch)
- **Adrenalin (Epinephrin):** Notfallmedikament bei Anaphylaxie (i.m., EpiPen®) → Bronchodilatation (β₂), Vasokonstriktion (α₁)
- **Hyposensibilisierung (spezifische Immuntherapie):** Allergen-Gabe in steigender Dosis → Toleranz, IgG ↑ (blockierende Antikörper), Th2 → Treg

---

### 6. Autoimmunerkrankungen

**Definition:** Immunsystem greift körpereigene Strukturen an (Verlust der Selbsttoleranz)

**Mechanismen:**
- Genetische Prädisposition (HLA-Assoziation)
- Molekulare Mimikry (Pathogen-Antigene ähneln Selbst-Antigenen)
- Treg-Dysfunktion

**Beispiele:**

| Erkrankung | Zielantigen | Mechanismus | Klinik |
|------------|-------------|-------------|--------|
| **Typ-1-Diabetes** | β-Zellen (Pankreas) | CD8⁺ T-Zellen zerstören Insulin-produzierende Zellen | Hyperglykämie, Ketoazidose |
| **Rheumatoide Arthritis** | Synovium (Gelenke), Citrullin-Peptide | Th1/Th17, Autoantikörper (RF, Anti-CCP) | Gelenkentzündung, -zerstörung |
| **Hashimoto-Thyreoiditis** | TPO (Thyreoperoxidase), Thyreoglobulin | Autoantikörper → Schilddrüsen-Zerstörung | Hypothyreose, Struma |
| **Morbus Basedow** | TSH-Rezeptor | Stimulierende Autoantikörper (TSI) → Schilddrüse hyperaktiv | Hyperthyreose, Exophthalmus |
| **SLE** (Systemischer Lupus erythematodes) | dsDNA, Nukleosom, Smith-Antigen | Autoantikörper (ANA), Immunkomplex-Ablagerung | Schmetterlingserythem, Arthritis, Nephritis |
| **Multiple Sklerose** | Myelin (ZNS) | CD8⁺ T-Zellen zerstören Oligodendrozyten | Demyelinisierung, Plaques, neurologische Ausfälle |

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Angeborene vs. Erworbene Immunität:** Schnell/unspezifisch vs. langsam/spezifisch, Gedächtnis nur bei erworbener
2. **NK-Zellen:** Töten Zellen ohne MHC-I (Missing Self), Perforin/Granzyme
3. **Komplementsystem:** C3b (Opsonierung), C5a (Chemotaxis), C5b–C9 (MAC, Lyse)
4. **Antikörper:** IgM (Primär, Pentamer), IgG (Sekundär, plazentagängig), IgA (Schleimhaut, Dimer), IgE (Allergie, Mastzellen)
5. **T-Zellen:** CD4⁺ (Th, MHC II, koordinieren), CD8⁺ (CTL, MHC I, töten), Treg (Selbsttoleranz)
6. **MHC:** MHC I → CD8⁺ (intrazellulär, Viren), MHC II → CD4⁺ (extrazellulär, Bakterien)
7. **Impfung:** Aktiv (Gedächtnis, langsam), Passiv (sofort, kurz, kein Gedächtnis)
8. **Allergie:** IgE → Mastzellen → Histamin → Anaphylaxie (Adrenalin!)

---

## Merksätze

>>>> **Angeborene vs. Erworbene:** „Angeboren = schnell (Minuten), unspezifisch, kein Gedächtnis (Makrophagen, Neutrophile, Komplement). Erworben = langsam (Tage), spezifisch, Gedächtnis (T-/B-Zellen, Antikörper)."
>>>> (Angeborene Immunität reagiert sofort, erworbene braucht Zeit für klonale Expansion)

>>>> **Antikörper-Klassen:** „IgM = Erste (Pentamer, Primär), IgG = Gedächtnis (Sekundär, Plazenta), IgA = Schleimhaut (Dimer), IgE = Allergie (Mastzellen)!"
>>>> (IgM → akut, IgG → chronisch/Impfung, IgA → Sekrete, IgE → Anaphylaxie)

>>>> **MHC-Präsentation:** „MHC I auf ALLEN Zellen zeigt CD8⁺ Viren (innen), MHC II auf APCs zeigt CD4⁺ Bakterien (außen)!"
>>>> (MHC I → CD8⁺ → intrazelluläre Pathogene; MHC II → CD4⁺ → extrazelluläre Pathogene)

>>>> **Impfung:** „Aktiv = Antigen → eigene Antikörper → Gedächtnis (Wochen, Jahre), Passiv = fertige Antikörper → sofort, kurz (Stunden, Monate, kein Gedächtnis)!"
>>>> (Aktiv: MMR, Tetanus; Passiv: Tetanus-Immunglobulin, Anti-D)

---

**Navigation:**
← [Zurück: Bio Kap 3 UK05 – Blut](Bio_Kap3_UK05_Blut.md) | [Weiter: Bio Kap 3 UK07 – Atmungssystem](Bio_Kap3_UK07_Atmungssystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über die Unterschiede zwischen angeborener und erworbener Immunität ist korrekt?",
          options: [
          "Die angeborene Immunität reagiert schnell (Minuten bis Stunden), ist unspezifisch und bildet kein immunologisches Gedächtnis, während die erworbene Immunität langsam reagiert (Tage), hochspezifisch ist und ein Gedächtnis entwickelt.",
          "Die erworbene Immunität umfasst physikalische Barrieren wie Haut und Schleimhäute, während die angeborene Immunität aus Antikörpern und T-Zellen besteht.",
          "Die angeborene Immunität bildet ein immunologisches Gedächtnis und reagiert bei erneutem Kontakt mit demselben Pathogen schneller.",
          "B-Zellen und T-Zellen gehören zur angeborenen Immunität, während Makrophagen und Neutrophile Teil der erworbenen Immunität sind.",
          "Die erworbene Immunität kann zwischen \"selbst\" und \"fremd\" nicht unterscheiden, während die angeborene Immunität Selbsttoleranz besitzt."
          ],
          correctIndex: 0,
          explanation: "**Richtig (A):** Die beiden Immunsysteme unterscheiden sich fundamental:\n\n**Angeborene (unspezifische) Immunität:**\n- **Reaktionszeit:** Sofort (~Minuten bis Stunden)\n- **Spezifität:** Unspezifisch (erkennt allgemeine Pathogen-Muster, PAMPs)\n- **Gedächtnis:** **KEIN** Gedächtnis (gleiche Reaktion bei erneutem Kontakt)\n- **Komponenten:** Physikalische Barrieren (Haut, Schleimhäute), Phagozyten (Neutrophile, Makrophagen), NK-Zellen, Komplementsystem, Interferone\n\n**Erworbene (adaptive, spezifische) Immunität:**\n- **Reaktionszeit:** Langsam (~Tage, klonale Expansion benötigt Zeit)\n- **Spezifität:** Hochspezifisch (erkennt spezifische Antigene über TCR/BCR)\n- **Gedächtnis:** **Gedächtnisbildung** (Gedächtnis-T/B-Zellen → schnellere, stärkere Sekundärantwort)\n- **Komponenten:** B-Zellen (Antikörper, humoral), T-Zellen (CD4⁺, CD8⁺, zellulär)\n\n**Falsch (B):** Physikalische Barrieren (Haut, Schleimhäute) gehören zur **angeborenen** Immunität. Antikörper (B-Zellen) und T-Zellen gehören zur **erworbenen** Immunität.\n\n**Falsch (C):** Die **angeborene** Immunität bildet **kein Gedächtnis**. Nur die **erworbene** Immunität bildet Gedächtniszellen (B- und T-Gedächtniszellen) → schnellere Sekundärantwort.\n\n**Falsch (D):** **Umgekehrt!** B- und T-Zellen sind Teil der **erworbenen** Immunität. Makrophagen und Neutrophile (Phagozyten) sind Teil der **angeborenen** Immunität.\n\n**Falsch (E):** Die **erworbene** Immunität kann sehr wohl zwischen \"selbst\" und \"fremd\" unterscheiden (Selbsttoleranz durch zentrale [Thymus, Knochenmark] und periphere Toleranz [Treg]). Autoimmunerkrankungen entstehen, wenn diese Selbsttoleranz versagt.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über NK-Zellen (Natural Killer) und das Komplementsystem ist korrekt?",
          options: [
          "NK-Zellen töten Zielzellen, die MHC-I-Moleküle exprimieren, während sie Zellen ohne MHC-I verschonen.",
          "NK-Zellen töten virusinfizierte Zellen und Tumorzellen, die kein oder reduziertes MHC-I exprimieren (\"Missing Self\"), durch Freisetzung von Perforin und Granzymen.",
          "Das Komplementsystem besteht aus drei Komponenten: C3b führt zur Lyse, C5a zur Opsonierung und C5b-C9 zur Chemotaxis.",
          "Der Membran-Angriffs-Komplex (MAC) des Komplementsystems wird aus C1-C3 gebildet und führt zur Phagozytose von Bakterien.",
          "NK-Zellen sind Teil der erworbenen Immunität und benötigen eine vorherige Sensibilisierung, um ihre Zielzellen anzugreifen."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **NK-Zellen** (Natural Killer) sind Teil der **angeborenen Immunität** und töten Zielzellen ohne vorherige Sensibilisierung:\n\n**Erkennungsmechanismus (\"Missing Self\"):**\n- **Gesunde Zellen:** Exprimieren **MHC-I** → NK-Zellen erkennen \"Selbst\" → **keine Lyse**\n- **Virusinfizierte Zellen/Tumorzellen:** Unterdrücken oft MHC-I (Immunevasion) → NK-Zellen erkennen **fehlendes MHC-I** → **Aktivierung** → Lyse\n\n**Mechanismus:**\n- **Perforin:** Bildet Poren in Zielzell-Membran\n- **Granzyme:** Proteasen → diffundieren durch Poren → aktivieren Caspasen → **Apoptose**\n\n**Funktion:** Schutz vor Viren (v. a. Herpesviren, CMV), Tumor-Surveillance\n\n**Falsch (A):** **Umgekehrt!** NK-Zellen töten Zellen **ohne MHC-I** (\"Missing Self\") und verschonen Zellen **mit MHC-I**.\n\n**Falsch (C):** Die Funktionen sind **vertauscht**:\n- **C3b:** **Opsonierung** (markiert Pathogene → Phagozytose ↑)\n- **C5a:** **Chemotaxis** (lockt Neutrophile/Makrophagen an)\n- **C5b-C9 (MAC):** **Lyse** (Membran-Angriffs-Komplex → Zellmembran-Perforation → Bakterien-Lyse)\n\n**Falsch (D):** Der **MAC** besteht aus **C5b-C9** (nicht C1-C3) und führt zur **Lyse** (nicht Phagozytose). C3b führt zur Opsonierung → Phagozytose.\n\n**Falsch (E):** NK-Zellen sind Teil der **angeborenen** Immunität (nicht erworbenen) und benötigen **keine vorherige Sensibilisierung** (reagieren sofort).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Antikörper (Immunglobuline) ist korrekt?",
          options: [
          "IgG ist der erste Antikörper, der bei einer Primärinfektion gebildet wird, und hat eine kurze Halbwertszeit von etwa 3 Tagen.",
          "IgM ist ein Pentamer und wird hauptsächlich bei der Primärantwort gebildet. IgG dominiert die Sekundärantwort, hat eine lange Halbwertszeit (~21 Tage) und kann die Plazenta passieren.",
          "IgA wird hauptsächlich im Blutserum gefunden und ist für die Opsonierung von Bakterien verantwortlich.",
          "IgE ist der häufigste Antikörper im Serum und macht etwa 75% aller Immunglobuline aus.",
          "Alle Antikörper-Klassen können die Plazenta passieren und Nestschutz bieten."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **IgM** und **IgG** unterscheiden sich in Struktur, Zeitpunkt und Funktion:\n\n**IgM:**\n- **Struktur:** **Pentamer** (5 Monomere, größter Antikörper)\n- **Zeitpunkt:** **Primärantwort** (erste Infektion, akute Phase)\n- **Funktion:** Starke **Komplement-Aktivierung** (10 Bindungsstellen), Agglutination\n- **Diagnostik:** IgM ↑ → **akute Infektion**\n\n**IgG:**\n- **Struktur:** Monomer\n- **Zeitpunkt:** **Sekundärantwort** (nach IgM, Gedächtnis)\n- **Halbwertszeit:** ~21 Tage (**längste** unter allen Ig)\n- **Funktion:** Opsonierung, Komplement-Aktivierung, Neutralisation, **plazentagängig** (einziger Antikörper!) → **Nestschutz**\n- **Diagnostik:** IgG ↑ → abgelaufene Infektion, Impfung, Immunität\n\n**Falsch (A):** **IgM** (nicht IgG) ist der erste Antikörper bei Primärinfektion. IgG hat eine **lange** Halbwertszeit (~21 Tage, nicht 3 Tage).\n\n**Falsch (C):** **IgA** wird hauptsächlich in **Sekreten** gefunden (Speichel, Tränen, Muttermilch, Darm) als **Dimer** (nicht im Serum). Funktion: **Schleimhautschutz**, Neutralisation (nicht Opsonierung). **IgG** ist für Opsonierung verantwortlich.\n\n**Falsch (D):** **IgG** (nicht IgE) macht ~75% der Serum-Immunglobuline aus. **IgE** macht <1% aus und ist für **Allergie** (Typ-I-Hypersensitivität) und Parasiten-Abwehr zuständig (bindet an Mastzellen/Basophile).\n\n**Falsch (E):** Nur **IgG** kann die Plazenta passieren. IgM, IgA, IgE, IgD können **nicht** die Plazenta passieren. Nestschutz erfolgt durch mütterliches IgG (transplazentar) und IgA (Muttermilch, oral).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über T-Zellen und MHC-Moleküle ist korrekt?",
          options: [
          "MHC-I-Moleküle werden nur auf Antigen-präsentierenden Zellen (APCs) exprimiert und präsentieren extrazelluläre Antigene an CD8⁺ T-Zellen.",
          "CD4⁺ T-Helfer-Zellen erkennen Antigene, die über MHC-I-Moleküle präsentiert werden, und töten anschließend die infizierten Zellen.",
          "MHC-I-Moleküle werden auf allen kernhaltigen Zellen exprimiert und präsentieren intrazelluläre Antigene (z. B. Viren) an CD8⁺ zytotoxische T-Zellen. MHC-II-Moleküle auf APCs präsentieren extrazelluläre Antigene an CD4⁺ T-Helfer-Zellen.",
          "CD8⁺ zytotoxische T-Zellen koordinieren die Immunantwort durch Freisetzung von Zytokinen wie IL-4 und IFN-γ.",
          "Regulatorische T-Zellen (Treg) fördern Autoimmunreaktionen durch Aktivierung autoreaktiver T-Zellen."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** Die **MHC-Präsentation** ist zentral für die T-Zell-Aktivierung:\n\n**MHC-I:**\n- **Exprimiert auf:** **Alle kernhaltigen Zellen** (nicht nur APCs!)\n- **Präsentiert:** **Intrazelluläre Antigene** (Viren, Tumorantigene, eigene Proteine)\n- **Erkannt von:** **CD8⁺ T-Zellen** (zytotoxische T-Zellen, CTL)\n- **Folge:** CD8⁺ töten infizierte/Tumor-Zellen durch Perforin/Granzyme → Apoptose\n\n**MHC-II:**\n- **Exprimiert auf:** **Nur APCs** (Dendritische Zellen, Makrophagen, B-Zellen)\n- **Präsentiert:** **Extrazelluläre Antigene** (Bakterien, Parasiten, phagozytiert)\n- **Erkannt von:** **CD4⁺ T-Zellen** (T-Helfer-Zellen, Th)\n- **Folge:** CD4⁺ koordinieren Immunantwort (Th1 → Makrophagen-Aktivierung, Th2 → B-Zell-Aktivierung)\n\n⭐ **Merkhilfe:** MHC **I** → CD**8**⁺ (intrazellulär, Viren), MHC **II** → CD**4**⁺ (extrazellulär, Bakterien).\n\n**Falsch (A):** MHC-I wird auf **allen kernhaltigen Zellen** (nicht nur APCs) exprimiert und präsentiert **intrazelluläre** (nicht extrazelluläre) Antigene an CD8⁺.\n\n**Falsch (B):** **CD8⁺** (nicht CD4⁺) erkennen MHC-I und töten infizierte Zellen. **CD4⁺** erkennen **MHC-II** (nicht MHC-I) und **koordinieren** (töten nicht selbst).\n\n**Falsch (D):** **CD4⁺ T-Helfer-Zellen** (nicht CD8⁺) koordinieren durch Zytokine (Th1: IFN-γ, Th2: IL-4/IL-5). **CD8⁺** töten Zellen (Perforin/Granzyme).\n\n**Falsch (E):** **Treg** (regulatorische T-Zellen) **supprimieren** die Immunantwort (IL-10, TGF-β) und **verhindern** Autoimmunität (Selbsttoleranz). Sie **fördern keine** Autoimmunreaktionen.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Impfungen ist korrekt?",
          options: [
          "Bei der aktiven Immunisierung werden fertige Antikörper verabreicht, die sofortigen Schutz bieten, aber kein immunologisches Gedächtnis erzeugen.",
          "Bei der passiven Immunisierung werden Antigene (z. B. abgeschwächte Erreger) verabreicht, die zur Bildung eigener Antikörper und eines immunologischen Gedächtnisses führen.",
          "Aktive Immunisierung (z. B. MMR, Tetanus-Toxoid) führt zur Bildung eigener Antikörper und eines immunologischen Gedächtnisses, während passive Immunisierung (z. B. Tetanus-Immunglobulin) sofortigen, aber kurzfristigen Schutz ohne Gedächtnis bietet.",
          "Lebendimpfstoffe (z. B. Masern, Mumps) sind besonders sicher für immunsupprimierte Patienten und werden bevorzugt eingesetzt.",
          "Die passive Immunisierung ist die Methode der Wahl für langfristigen Schutz und wird routinemäßig bei Kinderimpfungen eingesetzt."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Aktive** und **passive** Immunisierung unterscheiden sich fundamental:\n\n**Aktive Immunisierung:**\n- **Prinzip:** **Antigen-Gabe** (attenuiert, inaktiviert, Toxoid, mRNA) → Immunsystem bildet **eigene Antikörper + Gedächtniszellen**\n- **Beispiele:**\n  - Lebendimpfstoff: Masern, Mumps, Röteln (MMR), Varizellen\n  - Totimpfstoff: Influenza, Polio (Salk), Hepatitis A\n  - Toxoid: Tetanus, Diphtherie\n  - mRNA: COVID-19\n- **Vorteile:** **Langfristiger Schutz** (Jahre–Jahrzehnte), **Gedächtnis**\n- **Nachteile:** **Langsamer Wirkeintritt** (Wochen), Kontraindikation bei Immunsuppression (Lebendimpfstoff!)\n\n**Passive Immunisierung:**\n- **Prinzip:** Gabe von **fertigen Antikörpern** (Immunglobuline, meist IgG)\n- **Beispiele:**\n  - Tetanus-Immunglobulin (nach Verletzung, kein Impfschutz)\n  - Hepatitis-B-Immunglobulin (Nadelstich)\n  - Anti-D-Immunglobulin (Rhesus-Prophylaxe)\n- **Vorteile:** **Sofortiger Schutz** (Stunden)\n- **Nachteile:** **Kurze Wirkdauer** (~3 Monate, Antikörper werden abgebaut), **kein Gedächtnis**\n\n**Falsch (A):** **Passive** Immunisierung (nicht aktive) verwendet fertige Antikörper. **Aktive** Immunisierung verwendet Antigene.\n\n**Falsch (B):** **Aktive** Immunisierung (nicht passive) verwendet Antigene. **Passive** Immunisierung verwendet fertige Antikörper.\n\n**Falsch (D):** **Lebendimpfstoffe** sind **kontraindiziert** bei Immunsuppression (z. B. HIV, Chemotherapie, Kortikosteroide), da attenuierte Erreger sich vermehren können → Infektion-Risiko. Bei Immunsupprimierten: **Totimpfstoffe** bevorzugt.\n\n**Falsch (E):** **Aktive** Immunisierung (nicht passive) ist die Methode für **langfristigen Schutz** und wird bei Kinderimpfungen eingesetzt (z. B. MMR, DTaP). Passive Immunisierung ist **kurzfristig** und nur für spezielle Situationen (Postexpositionsprophylaxe).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Patient entwickelt nach einem Bienenstich eine Anaphylaxie mit Hypotonie, Bronchospasmus und Urtikaria. Welche Aussage über den zugrundeliegenden Mechanismus und die Therapie ist korrekt?",
          options: [
          "Die Reaktion wird durch IgG-Antikörper vermittelt, die T-Zellen aktivieren und zur Freisetzung von Interferonen führen.",
          "Bei der Sensibilisierung bilden Th2-Zellen IgE-Antikörper, die an Mastzellen binden. Bei Re-Exposition vernetzt das Allergen IgE, was zur Degranulation und Histamin-Freisetzung führt. Die Therapie der Wahl bei Anaphylaxie ist Adrenalin i.m. (z. B. EpiPen).",
          "Die Anaphylaxie ist eine Typ-IV-Hypersensitivitätsreaktion, die durch CD8⁺ zytotoxische T-Zellen vermittelt wird.",
          "Antihistaminika sind die erste Wahl bei Anaphylaxie und sollten sofort intravenös verabreicht werden.",
          "Die Hyposensibilisierung (spezifische Immuntherapie) wird während einer akuten Anaphylaxie durchgeführt, um die Symptome zu lindern."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Anaphylaxie** ist eine **Typ-I-Hypersensitivitätsreaktion** (IgE-vermittelt):\n\n**Mechanismus:**\n\n**1. Sensibilisierung (Erstkontakt):**\n- Allergen (Bienengift, Erdnüsse, Penicillin) → Aufnahme durch APCs\n- **Th2-Zellen** aktiviert → IL-4 → B-Zellen → **IgE-Produktion**\n- **IgE** bindet an **Fc-Rezeptoren** auf Mastzellen/Basophilen (sensibilisiert, bereit zur Degranulation)\n\n**2. Re-Exposition (erneuter Kontakt):**\n- Allergen bindet IgE (Kreuzvernetzung) → **Mastzell-Degranulation**\n- **Sofortige Freisetzung:** **Histamin** (Vasodilatation, Bronchospasmus, erhöhte Gefäßpermeabilität)\n- **Späte Phase:** Leukotriene, Prostaglandine (Entzündung)\n\n**Klinische Manifestation:**\n- **Systemisch:** Hypotonie (Vasodilatation), Tachykardie, Schock\n- **Respiratorisch:** Bronchospasmus (Dyspnoe, Giemen), Larynxödem (Stridor)\n- **Kutan:** Urtikaria (Quaddeln), Angioödem, Flush\n- **Gastrointestinal:** Übelkeit, Erbrechen, Durchfall\n\n**Therapie (Notfall!):**\n1. **Adrenalin (Epinephrin) i.m.** (z. B. EpiPen®, 0,3–0,5 mg)\n   - **β₂-Rezeptoren:** Bronchodilatation\n   - **α₁-Rezeptoren:** Vasokonstriktion → Blutdruck ↑\n   - **β₁-Rezeptoren:** HF ↑, Kontraktilität ↑\n2. **Antihistaminika** (symptomatisch, nicht lebensrettend)\n3. **Glukokortikoide** (verhindern Spätphase)\n4. **O₂**, **Volumen** (i.v. Flüssigkeit)\n5. **β₂-Agonisten** (Salbutamol bei Bronchospasmus)\n\n**Falsch (A):** Die Reaktion wird durch **IgE** (nicht IgG) vermittelt. IgE bindet an Mastzellen → Histamin (nicht Interferone).\n\n**Falsch (C):** Anaphylaxie ist eine **Typ-I-Hypersensitivität** (sofort, IgE-vermittelt), **nicht Typ IV** (verzögert, T-Zell-vermittelt, z. B. Kontaktdermatitis, Tuberkulin-Test).\n\n**Falsch (D):** **Adrenalin i.m.** (nicht Antihistaminika) ist die **erste Wahl** bei Anaphylaxie (lebensrettend). Antihistaminika sind **symptomatisch** (Urtikaria, Juckreiz), aber nicht ausreichend bei schwerer Anaphylaxie.\n\n**Falsch (E):** **Hyposensibilisierung** (spezifische Immuntherapie) ist eine **Langzeit-Prophylaxe** (Monate–Jahre), **nicht** eine Akut-Therapie. Sie wird **zwischen** allergischen Reaktionen durchgeführt, um Toleranz aufzubauen (Allergen-Gabe in steigender Dosis → IgG ↑, Treg ↑, Th2 ↓).",
          difficulty: 3,
          tags: [],
          hints: [
            "Welche Immunglobulin-Klasse aktiviert Mastzellen durch Fc-Rezeptor-Bindung?",
            "IgE bindet an Mastzellen → Sensibilisierung. Bei Re-Exposition: Allergen vernetzt IgE → Degranulation → Histamin. Therapie: Adrenalin i.m. (α₁: Vasokonstriktion, β₂: Bronchodilatation)."
          ],
        }
      ],
      merksätze: [
        "**Angeboren vs. Erworben:** Angeborene Immunität: sofort (Minuten–Stunden), unspezifisch, kein Gedächtnis. Komponenten: Haut/Schleimhäute, Neutrophile (Phagozytose, Respiratory Burst), Makrophagen, NK-Zellen (Missing Self, MHC-I↓ → Lyse via Perforin/Granzyme), Komplement (C3b-Opsonierung, C5a-Chemotaxis, MAC-Lyse), Interferone. Erworbene Immunität: langsam (Tage), hochspezifisch, Gedächtnisbildung.",
        "**B-Zellen & Antikörper:** B-Zellen reifen im Knochenmark. Aktivierung (T-Zell-Hilfe, CD4⁺ → CD40L/IL-4) → Plasmazellen + Gedächtnis-B-Zellen. IgM (Pentamer, Primärantwort, akut), IgG (Monomer, Sekundärantwort, plazentagängig, ~75%, Opsonierung), IgA (Dimer, Schleimhaut), IgE (<1%, Allergie/Parasiten). Funktionen: Neutralisation, Opsonierung, Komplement, ADCC.",
        "**T-Zellen & MHC:** T-Zellen reifen im Thymus. CD4⁺ T-Helfer erkennen MHC-II (APCs: Makrophagen, dendritische Zellen, B-Zellen). CD8⁺ zytotoxische T-Zellen erkennen MHC-I (alle kernhaltigen Zellen) → Perforin/Granzyme → Apoptose. Treg (FOXP3) → Selbsttoleranz. Positive Selektion (Cortex, MHC-Erkennung), negative Selektion (Mark, Selbst-Antigen-Elimination), nur ~5% überleben.",
        "**Impfung aktiv vs. passiv:** Aktiv: Antigen-Gabe → eigene Antikörper + Gedächtnis → Langzeitschutz. Lebendimpfstoff (MMR, Varizellen) kontraindiziert bei Immunsuppression! Totimpfstoff/Toxoid/mRNA: sicherer. Passiv: fertige Antikörper (IgG) → Sofortschutz, kein Gedächtnis (~3 Monate). Beispiele: Tetanus-Ig, Anti-D, HBs-Ig.",
        "**Allergie Typ I (IgE-vermittelt, sofort):** Sensibilisierung: Allergen → Th2 → IL-4 → B-Zellen → IgE → Mastzellen/Basophile. Re-Exposition: Allergen vernetzt IgE → Degranulation → Histamin (Vasodilatation, Bronchospasmus, Pruritus), Leukotriene, Prostaglandine. Anaphylaxie: systemisch (Hypotonie, Schock, Bronchospasmus). Therapie: Adrenalin i.m. (erste Wahl!). Hyposensibilisierung = Langzeitprophylaxe.",
        "**Typ II–IV Hypersensitivität:** Typ II (Autoantikörper gegen Zelloberflächen): Myasthenia gravis (Anti-nAChR), Goodpasture (Anti-GBM), hämolytische Anämie. Typ III (Immunkomplexe, Komplementaktivierung): SLE (Anti-dsDNA), Post-Streptokokken-GN, Serumkrankheit. Typ IV (T-Zell-vermittelt, verzögert 48–72 h): Tuberkulin-Test, Kontaktdermatitis, Transplantatabstoßung (zellulär).",
        "**HIV/AIDS:** HIV-1 (Retrovirus) infiziert CD4⁺-T-Zellen (gp120 + CD4 + CCR5/CXCR4 als Korezeptor) + Makrophagen. Schritte: Reverse Transkriptase (RNA → DNA), Integrase (viral-DNA → Wirtsgenom), Protease (Virusreifung). CD4⁺ <200/μL = AIDS. Opportunistische Infektionen: PCP, CMV-Retinitis, Toxoplasma, Kryptokokken. cART: NRTI + NNRTI oder PI + Integrasehemmer. Prä-Expositionsprophylaxe (PrEP) möglich.",
        "**Autoimmunerkrankungen Überblick:** Rheumatoide Arthritis (Anti-CCP, RF, destruktive Synovitis; MTX, TNF-α-Blocker). SLE (Anti-dsDNA, Lupusnephritis, Schmetterlingserythem; Hydroxychloroquin, MMF). Hashimoto (Anti-TPO, Hypothyreose; Thyroxin). MS (Demyelinisierung ZNS; Interferon-β, Natalizumab). Diabetes Typ 1 (Anti-GAD, β-Zell-Zerstörung; Insulin).",
        "**Komplement & Immunevasion:** C3b (Opsonierung), C5a (Chemotaxis, Entzündung), MAC/C5b-C9 (Bakterienlyse). Drei Aktivierungswege: Klassisch (Antikörper→C1), Lektin (MBL), Alternativ (Pathogenoberfläche). C3-Mangel: rezidivierende Infektionen. Viren hemmen MHC-I → NK-Zellen erkennen Missing Self. Bekapselte Bakterien resistenter gegen Phagozytose (Pneumokokken, Meningokokken → Impfung wichtig nach Splenektomie)."
      ],
      klinischerBezug: "HIV/AIDS ist eine der bedeutendsten Infektionskrankheiten weltweit: cART (kombinierte antiretrovirale Therapie) ermöglicht heute normale Lebenserwartung. Autoimmunerkrankungen: SLE (Lupusnephritis als schwerwiegendste Komplikation, Anti-dsDNA diagnostisch; Therapie: Hydroxychloroquin, MMF, Glukokortikoide). Rheumatoide Arthritis: TNF-α-Blocker (Adalimumab, Infliximab) revolutionierten Therapie. Anaphylaxie: medizinischer Notfall, Adrenalin-Autoinjektoren (EpiPen) für gefährdete Patienten, Reanimation bei Herz-Kreislauf-Stillstand. Allergien (Heuschnupfen, Asthma, Nahrungsmittelallergien): steigende Prävalenz in Industrienationen (Hygiene-Hypothese). Impfungen: Masern-Eradikation möglich durch MMR-Impfung (Herdenimmunität ab ~95% Durchimpfungsrate); Impfskepsis gefährdet Herdenimmunität. Primäre Immundefekte: X-chromosomale Agammaglobulinämie (BTK-Mutation, keine B-Zellen → keine Antikörper → rekurrierende Infektionen ab 6. Lebensmonat)."
    },
    {
      id: 'bio-3-07',
      title: "Lymphsystem",
      content: `# Lymphatisches System – Biologie Kapitel 3 (Organsysteme)

**Priorität:** NIEDRIG
**Geschätzte Lesezeit:** 10 Minuten
**Stichwortliste-Abdeckung:** 5/5 Stichwörter

---

## Einleitung

Das **lymphatische System** ist ein Netzwerk aus **Lymphgefäßen** und **lymphatischen Organen**, das eng mit dem Herz-Kreislauf-System und dem Immunsystem zusammenarbeitet.

**Hauptfunktionen:**
1. **Flüssigkeitsrücktransport:** ~10% der Kapillarfiltrat-Flüssigkeit (~2–4 L/Tag) wird nicht reabsorbiert → Lymphe → zurück ins Blut (Venenwinkel)
2. **Immunabwehr:** Lymphknoten filtern Lymphe, Antigen-Präsentation, Aktivierung von Lymphozyten
3. **Fetttransport:** Chylomikronen (Lipide aus Darm) → Ductus thoracicus → Blut

---

## Kerninhalt

### 1. Lymphe und Lymphgefäße

**Lymphe:**
- **Zusammensetzung:** Ähnlich wie Plasma (Wasser, Proteine, Elektrolyte), aber proteinärmer (~30–40 g/L vs. ~70 g/L im Plasma), enthält Lymphozyten
- **Entstehung:** Interstitielle Flüssigkeit (Kapillarfiltrat) → Lymphkapillaren → Lymphe

**Lymphgefäße:**

| Typ | Merkmale |
|-----|----------|
| **Lymphkapillaren** | Blind endend (sackförmig), einschichtig (Endothel), hohe Permeabilität (keine Basalmembran, überlappende Endothelzellen = Einlassventile), in allen Geweben (außer ZNS, Knochen, Knorpel) |
| **Lymphkollektoren** | Größere Gefäße, **Klappen** (verhindern Rückfluss, einseitiger Transport), glatte Muskulatur (Kontraktion) |
| **Lymphstämme** | Sammeln Lymphe aus Regionen |
| **Ductus thoracicus** | Größter Lymphstamm (~40 cm), sammelt Lymphe aus unterem Körper, linker oberer Körperhälfte, Abdomen → mündet in **linken Venenwinkel** (V. subclavia + V. jugularis interna) |
| **Ductus lymphaticus dexter** | Sammelt Lymphe aus rechter oberer Körperhälfte → mündet in **rechten Venenwinkel** |

⭐ **Prüfungswichtig:**
- **Lymphtransport** erfolgt durch:
  1. **Klappen** (Rückfluss-Schutz)
  2. **Muskel-Kontraktion** (Skelettmuskel-Pump-Mechanismus, wichtigste treibende Kraft)
  3. **Atmung** (Thorax-Unterdruck bei Inspiration)
  4. **Arterielle Pulsation** (benachbarte Arterien komprimieren Lymphgefäße)
  5. **Glatte Muskulatur** (intrinsische Kontraktion)

**Klinisch:**
- **Lymphödem:** Gestörter Lymphabfluss → Flüssigkeitsansammlung im Gewebe → Schwellung (Arm/Bein)
  - **Primär:** Angeboren (Hypoplasie/Aplasie der Lymphgefäße)
  - **Sekundär:** Erworben (Tumor, Lymphknoten-Entfernung, Filariose [Parasit], Bestrahlung)
- **Elephantiasis:** Chronisches Lymphödem (oft Beine, Filariose in Tropen)

---

### 2. ⭐ Lymphknoten

**Struktur:**
- **Bohnenförmig**, Ø 1–25 mm, ~600–700 im Körper
- **Afferente Lymphgefäße** (mehrere) → Lymphe fließt ein
- **Efferentes Lymphgefäß** (1) → Lymphe fließt aus
- **Kapsel** (Bindegewebe) + **Trabekel** (Bindegewebssepten)

**Innere Architektur:**

| Zone | Zelltyp | Funktion |
|------|---------|----------|
| **Rinde (Cortex):** Follikel | B-Zellen, Keimzentren (aktivierte B-Zellen, Plasmazellen) | **Humorale Immunität** (Antikörper-Produktion) |
| **Paracortex** | T-Zellen, Dendritische Zellen (APCs) | **Zelluläre Immunität** (T-Zell-Aktivierung) |
| **Mark (Medulla):** Markstränge | Plasmazellen, Makrophagen | Antikörper-Sekretion, Phagozytose |

**Lymphe-Fluss:**
- Afferente Lymphgefäße → **Randsinus** (subkapsulär) → Cortex/Paracortex (Filtration durch Makrophagen, Antigen-Präsentation) → **Marksinus** → efferentes Lymphgefäß

⭐ **Funktion:**
1. **Filtration:** Makrophagen phagozytieren Pathogene, Fremdpartikel, Tumorzellen
2. **Immunantwort:** APCs präsentieren Antigene → T-/B-Zell-Aktivierung → klonale Expansion
3. **Antikörper-Produktion:** Plasmazellen in Marksträngen produzieren Antikörper

**Klinisch:**
- **Lymphadenopathie:** Vergrößerte Lymphknoten (Infektion, Entzündung, Tumor)
  - **Lokal:** Einzelne Region (z. B. submandibulär bei Pharyngitis, inguinal bei Beininfekt)
  - **Generalisiert:** Mehrere Regionen (z. B. EBV [Mononukleose], HIV, Lymphom)
- **Lymphadenitis:** Entzündung der Lymphknoten (schmerzhaft, gerötet, oft bakteriell)
- **Lymphom:** Maligne Lymphknoten-Vergrößerung (Hodgkin, Non-Hodgkin-Lymphom)
- **Sentinel-Lymphknoten:** Erster Lymphknoten im Abflussgebiet eines Tumors → Biopsie (Staging, z. B. Mammakarzinom, Melanom)

---

### 3. ⭐ Milz (Splen)

**Lage:** Linker Oberbauch (Hypochondrium), unterhalb Zwerchfell, lateral vom Magen

**Größe:** ~12×7×4 cm, ~150–200 g

**Struktur:**

| Komponente | Farbe | Anteil | Funktion |
|------------|-------|--------|----------|
| **Weiße Pulpa** | Weiß | ~20% | **Immunfunktion:** Lymphfollikel (B-Zellen), PALS (periarteriolar lymphoid sheaths, T-Zellen), Antigen-Präsentation |
| **Rote Pulpa** | Rot | ~80% | **Blutspeicherung** (~40 mL), **Erythrozyten-Abbau** (alte/defekte Erythrozyten), **Thrombozytenspeicher** (~30% aller Thrombozyten) |
| **Marginale Zone** | - | Grenzzone | Übergang, APCs (Makrophagen), Antigen-Filterung |

⭐ **Funktionen:**
1. **Immunabwehr:**
   - **Filtration des Blutes** (nicht Lymphe!): Bakterien, Parasiten (v. a. bekapselte Bakterien wie Pneumokokken, Meningokokken, Haemophilus influenzae)
   - **Antigen-Präsentation** (weiße Pulpa) → Aktivierung von B-/T-Zellen
2. **Erythrozyten-Abbau:**
   - Alte/defekte Erythrozyten (~120 Tage alt) → Makrophagen in roter Pulpa → Hämolyse
   - Hb → Häm (Fe²⁺ recycelt) + Bilirubin (→ Leber)
3. **Thrombozyten-Speicherung:** ~30% aller Thrombozyten gespeichert (bei Bedarf freigegeben, z. B. Stress, Blutung)
4. **Blut-Reservoir:** Kann ~40 mL Blut speichern (bei Sympathikus-Aktivierung → Kontraktion → Blut ins Kreislauf)

**Klinisch:**
- **Splenomegalie:** Vergrößerte Milz (>500 g)
  - **Ursachen:** Infektion (EBV, Malaria), Hämolyse (Sichelzellanämie, Thalassämie), portale Hypertension (Leberzirrhose), Leukämie/Lymphom
  - **Komplikationen:** Hypersplenismus (Sequestration → Anämie, Thrombozytopenie, Leukopenie), Milzruptur-Risiko ↑
- **Splenektomie (Milzentfernung):**
  - **Indikationen:** Trauma (Ruptur), Hypersplenismus, idiopathische thrombozytopenische Purpura (ITP)
  - **Komplikationen:** **OPSI** (Overwhelming Post-Splenectomy Infection) → erhöhte Anfälligkeit für bekapselte Bakterien (Pneumokokken, Meningokokken, H. influenzae)
  - **Prophylaxe:** **Impfung** (Pneumokokken, Meningokokken, H. influenzae Typ b) + **Antibiotika-Prophylaxe** (Penicillin) lebenslang
- **Howell-Jolly-Körperchen:** DNA-Reste in Erythrozyten (normalerweise von Milz entfernt) → sichtbar nach Splenektomie/funktioneller Asplenie

---

### 4. Thymus

**Lage:** Oberes Mediastinum (hinter Sternum)

**Entwicklung:**
- **Größe maximal:** Bei Geburt (~15 g) bis Pubertät (~35 g)
- **Involution:** Nach Pubertät → langsame Rückbildung → Fettgewebe ersetzt Thymus-Gewebe (bei Erwachsenen ~10–15 g)

**Struktur:**
- **Rinde (Cortex):** Dicht gepackte **unreife T-Zellen** (Thymozyten, CD4⁻CD8⁻ → CD4⁺CD8⁺ → CD4⁺ oder CD8⁺)
- **Mark (Medulla):** Reife T-Zellen, **Hassall-Körperchen** (verhornte Epithelzellen, Funktion unklar)

⭐ **Funktion:**
- **T-Zell-Reifung (zentrale Toleranz):**
  1. **Positive Selektion (Cortex):** Thymozyten, die MHC I/II erkennen können → **Überleben**
  2. **Negative Selektion (Mark):** Thymozyten, die körpereigene Antigene (Selbst-Antigene) stark binden → **Apoptose** (verhindert Autoimmunität)
  3. **Emigration:** Nur ~5% überleben → reifen zu **CD4⁺** (T-Helfer) oder **CD8⁺** (zytotoxisch) → periphere Lymphorgane

**Klinisch:**
- **DiGeorge-Syndrom:** Thymus-Aplasie (22q11-Deletion) → T-Zell-Mangel → schwere Infektionen, Hypokalzämie (Nebenschilddrüsen-Aplasie), Herzfehler
- **Thymom:** Tumor des Thymus (oft mit Myasthenia gravis assoziiert)

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Lymphsystem-Funktion:** Flüssigkeitsrücktransport (~2–4 L/Tag), Immunabwehr, Fetttransport (Chylomikronen)
2. **Lymphknoten:** Cortex (B-Zellen, Follikel), Paracortex (T-Zellen), Mark (Plasmazellen, Makrophagen), Filtration + Immunantwort
3. **Milz:** Weiße Pulpa (Immunabwehr), Rote Pulpa (Erythrozyten-Abbau, Thrombozytenspeicher), Splenektomie → OPSI-Risiko (bekapselte Bakterien)
4. **Thymus:** T-Zell-Reifung (positive + negative Selektion = zentrale Toleranz), Involution nach Pubertät

---

## Merksätze

>>>> **Lymphknoten-Architektur:** „Cortex = B-Zellen (Follikel, Antikörper), Paracortex = T-Zellen (zellulär), Mark = Plasmazellen (Sekretion)!"
>>>> (B außen, T innen, Plasmazellen im Mark)

>>>> **Milz-Funktionen:** „Weiße Pulpa = Immunabwehr (B/T-Zellen), Rote Pulpa = Erythrozyten-Abbau (Makrophagen) + Thrombozytenspeicher (30%)!"
>>>> (Milz filtert Blut [nicht Lymphe!], bekapselte Bakterien, Erythrozyten-Friedhof)

>>>> **Splenektomie:** „Keine Milz = OPSI-Risiko → Impfung gegen Pneumokokken, Meningokokken, H. influenzae + Antibiotika-Prophylaxe (Penicillin)!"
>>>> (Bekapselte Bakterien besonders gefährlich nach Milzentfernung)

>>>> **Thymus:** „T-Zell-Schule: Positive Selektion (MHC erkennen → Überleben), Negative Selektion (Selbst-Antigen erkennen → Tod) → nur 5% bestehen!"
>>>> (Zentrale Toleranz verhindert Autoimmunität)

---

**Navigation:**
← [Zurück: Bio Kap 3 UK06 – Immunsystem](Bio_Kap3_UK06_Immunsystem.md) | [Weiter: Bio Kap 3 UK08 – Atmungssystem](Bio_Kap3_UK08_Atmungssystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über das lymphatische System ist korrekt?",
          options: [
          "Die Lymphe ist proteinreicher als Plasma und enthält große Mengen an Erythrozyten.",
          "Das lymphatische System transportiert täglich etwa 2–4 Liter Flüssigkeit zurück ins Blut, die nicht von den Kapillaren reabsorbiert wurde, und mündet über den Ductus thoracicus in den linken Venenwinkel.",
          "Lymphkapillaren haben eine dicke Basalmembran und Klappen, die den Rückfluss verhindern.",
          "Der Lymphtransport erfolgt hauptsächlich durch aktive Herzpumpfunktion und arterielle Pulsation.",
          "Lymphgefäße sind in allen Geweben vorhanden, einschließlich ZNS, Knochen und Knorpel."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Das lymphatische System hat wichtige Funktionen:\n\n**Flüssigkeitsrücktransport:**\n- ~10% der Kapillarfiltrat-Flüssigkeit (~**2–4 L/Tag**) wird **nicht** von Kapillaren reabsorbiert (Starling-Kräfte)\n- Diese Flüssigkeit → **Lymphkapillaren** → **Lymphe** → **Ductus thoracicus** (größter Lymphstamm) → mündet in **linken Venenwinkel** (V. subclavia + V. jugularis interna) → zurück ins Blut\n- **Ductus lymphaticus dexter** (rechte obere Körperhälfte) → rechter Venenwinkel\n\nOhne Lymphsystem → Flüssigkeitsansammlung im Gewebe → **Ödem**.\n\n**Falsch (A):** Lymphe ist **proteinärmer** (nicht proteinreicher) als Plasma (~30–40 g/L vs. ~70 g/L im Plasma). Lymphe enthält hauptsächlich **Lymphozyten** (nicht Erythrozyten).\n\n**Falsch (C):** Lymphkapillaren haben **keine Basalmembran** (hohe Permeabilität, blind endend) und **keine Klappen** (Klappen sind erst in größeren Lymphkollektoren vorhanden). Stattdessen haben sie **überlappende Endothelzellen** (Einlassventile).\n\n**Falsch (D):** Lymphtransport erfolgt **nicht** durch Herzpumpfunktion (Lymphgefäße sind nicht direkt mit dem Herzen verbunden). Hauptmechanismen:\n1. **Muskel-Kontraktion** (Skelettmuskel-Pump-Mechanismus, wichtigster Faktor)\n2. Atmung (Thorax-Unterdruck)\n3. Arterielle Pulsation (unterstützend)\n4. Glatte Muskulatur (intrinsische Kontraktion)\n5. Klappen (Rückfluss-Schutz)\n\n**Falsch (E):** Lymphgefäße sind **nicht** in ZNS, Knochen und Knorpel vorhanden (avaskuläre/alymphatische Gewebe). Sie sind in den meisten anderen Geweben vorhanden.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die Struktur und Funktion von Lymphknoten ist korrekt?",
          options: [
          "Lymphknoten haben ein efferentes Lymphgefäß, durch das Lymphe einfließt, und mehrere afferente Lymphgefäße, durch die Lymphe abfließt.",
          "Die Rinde (Cortex) enthält hauptsächlich B-Zellen in Follikeln, die Paracortex-Region enthält T-Zellen und dendritische Zellen, und das Mark (Medulla) enthält Plasmazellen und Makrophagen.",
          "Lymphknoten filtern das Blut und entfernen alte Erythrozyten durch Makrophagen in der roten Pulpa.",
          "Der Sentinel-Lymphknoten ist der letzte Lymphknoten im Abflussgebiet eines Tumors und wird bei der Tumor-Staging-Biopsie ignoriert.",
          "Lymphknoten sind hauptsächlich für die Produktion von Erythrozyten und Thrombozyten zuständig."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Lymphknoten haben eine charakteristische **zonale Architektur**:\n\n**Struktur:**\n\n1. **Rinde (Cortex):**\n   - **B-Zellen** in **Follikeln** (Primärfollikel: ruhend, Sekundärfollikel: Keimzentrum mit aktivierten B-Zellen, Plasmazellen)\n   - **Humorale Immunität** (Antikörper-Produktion)\n\n2. **Paracortex:**\n   - **T-Zellen** (CD4⁺, CD8⁺)\n   - **Dendritische Zellen** (APCs, Antigen-Präsentation)\n   - **Zelluläre Immunität** (T-Zell-Aktivierung)\n\n3. **Mark (Medulla):**\n   - **Plasmazellen** (Antikörper-Sekretion)\n   - **Makrophagen** (Phagozytose)\n   - Markstränge + Marksinus\n\n**Funktion:** Filtration der **Lymphe** (nicht Blut!), Antigen-Präsentation, Aktivierung von T-/B-Zellen, Antikörper-Produktion.\n\n**Falsch (A):** **Umgekehrt!** Lymphknoten haben **mehrere afferente Lymphgefäße** (Lymphe fließt **ein**) und **ein efferentes Lymphgefäß** (Lymphe fließt **aus**). Lymphe → afferent → Randsinus → Cortex/Paracortex → Marksinus → efferent.\n\n**Falsch (C):** Lymphknoten filtern **Lymphe** (nicht Blut). Die **Milz** (nicht Lymphknoten) filtert **Blut** und entfernt alte Erythrozyten in der **roten Pulpa**.\n\n**Falsch (D):** Der **Sentinel-Lymphknoten** ist der **erste** (nicht letzte) Lymphknoten im Abflussgebiet eines Tumors → wird bei Biopsie **untersucht** (nicht ignoriert) für Tumor-Staging (z. B. Mammakarzinom, Melanom). Metastasen im Sentinel-Lymphknoten → weitere Lymphknoten betroffen.\n\n**Falsch (E):** **Knochenmark** (nicht Lymphknoten) ist für Hämatopoese (Erythrozyten, Thrombozyten, Leukozyten) zuständig. Lymphknoten sind für **Immunabwehr** (Filtration, Antigen-Präsentation, Lymphozyten-Aktivierung) zuständig.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Milz (Splen) ist korrekt?",
          options: [
          "Die weiße Pulpa macht etwa 80% der Milz aus und ist hauptsächlich für den Abbau alter Erythrozyten verantwortlich.",
          "Die Milz filtert Lymphe und ist das größte lymphatische Organ im Körper.",
          "Die rote Pulpa (ca. 80% der Milz) ist für den Erythrozyten-Abbau und die Thrombozytenspeicherung (ca. 30% aller Thrombozyten) verantwortlich, während die weiße Pulpa (ca. 20%) Immunfunktionen erfüllt.",
          "Nach Splenektomie ist das Risiko für virale Infektionen erhöht, insbesondere durch Influenza und Herpesviren.",
          "Howell-Jolly-Körperchen in Erythrozyten sind ein Zeichen für eine überaktive Milzfunktion."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** Die Milz hat zwei funktionelle Kompartimente:\n\n**Rote Pulpa (~80%):**\n- **Farbe:** Rot (viele Erythrozyten)\n- **Funktionen:**\n  1. **Erythrozyten-Abbau:** Alte/defekte Erythrozyten (~120 Tage) → Makrophagen → Hämolyse → Hb → Häm (Fe²⁺ recycelt) + Bilirubin (→ Leber)\n  2. **Thrombozytenspeicherung:** ~**30% aller Thrombozyten** gespeichert (bei Bedarf freigegeben)\n  3. **Blut-Reservoir:** ~40 mL Blut\n\n**Weiße Pulpa (~20%):**\n- **Farbe:** Weiß (Lymphozyten)\n- **Funktion:** **Immunabwehr** (Filtration des **Blutes**, nicht Lymphe!)\n  - Lymphfollikel (B-Zellen)\n  - PALS (periarteriolar lymphoid sheaths, T-Zellen)\n  - Antigen-Präsentation, Aktivierung von B-/T-Zellen\n\n**Falsch (A):** Die **rote Pulpa** (nicht weiße) macht ~80% aus und ist für Erythrozyten-Abbau verantwortlich. Die **weiße Pulpa** (~20%) ist für Immunabwehr zuständig.\n\n**Falsch (B):** Die Milz filtert **Blut** (nicht Lymphe). Lymphknoten filtern Lymphe. Die Milz ist das größte **lymphatische Organ** (korrekt), aber filtert eben Blut.\n\n**Falsch (D):** Nach Splenektomie ist das Risiko für **bakterielle** Infektionen (nicht virale) erhöht, insbesondere durch **bekapselte Bakterien** (Pneumokokken, Meningokokken, H. influenzae) → **OPSI** (Overwhelming Post-Splenectomy Infection). Prophylaxe: Impfung + Antibiotika (Penicillin).\n\n**Falsch (E):** **Howell-Jolly-Körperchen** (DNA-Reste in Erythrozyten) sind ein Zeichen für **Asplenie** (fehlende/dysfunktionale Milz), **nicht** überaktive Milz. Normalerweise entfernt die Milz diese Reste. Nach Splenektomie → Howell-Jolly-Körperchen sichtbar.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den Thymus ist korrekt?",
          options: [
          "Der Thymus erreicht seine maximale Größe im hohen Alter und ist hauptsächlich für die B-Zell-Reifung verantwortlich.",
          "Im Thymus findet die T-Zell-Reifung statt: Positive Selektion (Thymozyten, die MHC I/II erkennen, überleben) und negative Selektion (Thymozyten, die Selbst-Antigene stark binden, werden eliminiert), um zentrale Toleranz zu etablieren.",
          "Der Thymus befindet sich im Abdomen und vergrößert sich nach der Pubertät kontinuierlich.",
          "Etwa 95% der Thymozyten überleben die Selektion und werden zu reifen T-Zellen.",
          "Das DiGeorge-Syndrom ist durch eine Thymus-Hyperplasie gekennzeichnet, die zu überschießender T-Zell-Produktion führt."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **Thymus** ist das zentrale Organ der **T-Zell-Reifung** (zentrale Toleranz):\n\n**T-Zell-Reifung:**\n\n1. **Unreife Thymozyten** (Knochenmark) → Thymus-Rinde (Cortex)\n2. **Positive Selektion (Cortex):**\n   - Thymozyten, die **MHC I/II erkennen** können → **Überleben**\n   - Thymozyten, die MHC **nicht** erkennen → **Apoptose** (nutzlos)\n   - Differentierung: CD4⁺CD8⁺ (doppelt-positiv) → CD4⁺ **oder** CD8⁺ (einfach-positiv)\n3. **Negative Selektion (Mark/Medulla):**\n   - Thymozyten, die **Selbst-Antigene** (körpereigene Antigene) **stark binden** → **Apoptose** (verhindert Autoimmunität)\n   - Thymozyten, die Selbst-Antigene **nicht/schwach** binden → **Überleben**\n4. **Emigration:** Nur ~**5%** überleben → reifen zu **CD4⁺** (T-Helfer) oder **CD8⁺** (zytotoxisch) → periphere Lymphorgane (Lymphknoten, Milz)\n\n**Zentrale Toleranz:** Verhindert Autoimmunität durch Elimination autoreaktiver T-Zellen.\n\n**Falsch (A):** Der Thymus erreicht seine maximale Größe bei **Geburt bis Pubertät** (~35 g), danach **Involution** (Rückbildung, Fettgewebe-Ersatz, bei Erwachsenen ~10–15 g). Der Thymus ist für **T-Zell-Reifung** (nicht B-Zell) zuständig. B-Zellen reifen im **Knochenmark**.\n\n**Falsch (C):** Der Thymus befindet sich im **oberen Mediastinum** (hinter Sternum), **nicht** im Abdomen. Er **verkleinert sich** (Involution) nach der Pubertät, nicht vergrößert.\n\n**Falsch (D):** Nur ~**5%** (nicht 95%) der Thymozyten überleben die Selektion. ~95% sterben durch Apoptose (positive + negative Selektion).\n\n**Falsch (E):** **DiGeorge-Syndrom** (22q11-Deletion) ist durch **Thymus-Aplasie** (nicht Hyperplasie) gekennzeichnet → **T-Zell-Mangel** (nicht Überproduktion) → schwere Infektionen, Hypokalzämie (Nebenschilddrüsen-Aplasie), Herzfehler.",
          difficulty: 2,
          tags: [],
          hints: [
            "Wo reifen T-Zellen? Und welche zwei Selektionsschritte sichern, dass T-Zellen funktionsfähig aber nicht autoreaktiv sind?",
            "Positive Selektion (Cortex): T-Zellen müssen MHC erkennen können, sonst Apoptose. Negative Selektion (Mark): T-Zellen, die Selbst-Antigene stark erkennen → Apoptose → nur ~5% überleben."
          ],
        }
      ],
      merksätze: [
        "**Lymphatisches System:** Transportiert täglich ~2–4 L interstitielle Flüssigkeit zurück ins Blut (Kapillarfiltrat, nicht reabsorbiert). Einmündung in linken Venenwinkel (Ductus thoracicus: Rumpf links + beide Beine) und rechten Venenwinkel (Ductus lymphaticus dexter: Kopf/Hals rechts + rechte Schulter/Arm). Lymphkapillaren: blind endend, hochpermea bel, keine Basalmembran.",
        "**Lymphknoten:** ~600–700 im Körper, bohnenförmig, Afferenzen (mehrere) → Efferenz (1). Rinde: B-Zellen (Follikel, Keimzentren → Antikörper-Produktion). Paracortex: T-Zellen, dendritische Zellen (Antigen-Präsentation). Mark: Plasmazellen, Makrophagen. Funktionen: Filtration, Immunantwort-Initiierung, Antikörper-Sekretion.",
        "**Milz:** Größtes lymphatisches Organ (~150 g). Rote Pulpa: Erythrozyten-Abbau (Sinus, Makrophagen), Blutspeicher. Weiße Pulpa: Immunabwehr (PALS [T-Zellen], Follikel [B-Zellen], Marginalzone). Filtert ~1 L Blut/min. Bekapselte Bakterien besonders gefährlich nach Splenektomie: OPSI (Pneumokokken, Meningokokken, H. influenzae) → Prophylaxe: Impfung + Penicillin.",
        "**Thymus:** Reifungsort für T-Zellen. Lage: oberes Mediastinum (Sternum). Max. Größe: Geburt bis Pubertät (~35 g) → Involution (Fettgewebe). Rinde: dichte unreife Thymozyten (positive Selektion: MHC-Erkennung → Überleben). Mark: negative Selektion (Selbstantigene → Apoptose autoreaktiver T-Zellen). ~95% sterben → ~5% reifen. DiGeorge: Thymus-Aplasie → T-Zell-Mangel.",
        "**Lymphödem:** Gestörter Lymphabfluss → interstitielle Flüssigkeitsansammlung, gewebeartig (nicht eindrückbar). Primär (kongenital, Milroy-Syndrom). Sekundär: Tumor (Kompression), Bestrahlung, Infektion (Filariose → Elephantiasis [Wuchereria bancrofti], tropisch). Therapie: manuelle Lymphdrainage, Kompressionsstrümpfe.",
        "**Lymphom:** Hodgkin-Lymphom: Reed-Sternberg-Zellen (Binukleäre B-Zellen, 'Eulenaugen'), bimodale Altersverteilung (junges Alter + >50 Jahre), Knötchensklerosierende Form häufig. Gute Prognose. Non-Hodgkin: heterogen, diffus großzelliges B-Zell-Lymphom (DLBCL, häufigste), Follikuläres Lymphom (bcl-2 [t(14;18)]). B-Symptome: Fieber, Nachtschweiß, Gewichtsverlust >10%. Therapie: Chemotherapie (CHOP), Rituximab (Anti-CD20).",
        "**Splenomegalie:** Ursachen: Infektionen (EBV-Mononukleose, Malaria, viszerale Leishmaniose), Hämatologisch (Leukämien, Lymphome, Hämolytische Anämie, Sichelzellanämie), Portale Hypertension (Leberzirrhose → Splenomegalie + Hypersplenismus). Komplikationen: Hypersplenismus (Anämie, Thrombozytopenie, Leukopenie), Milzruptur-Risiko. Howell-Jolly-Körperchen nach Splenektomie (DNA-Reste in Erythrozyten).",
        "**Lymphtransport-Mechanismen:** Passiv: Gewebedruck, Atemexkursionen (Thoraxpumpe → Ductus thoracicus). Aktiv: Glatte Muskulatur in Lymphkollektoren (spontane Kontraktionen ~5–10/min). Skelettmuskelpumpe (Kontraktion → Lymphe vorwärts, Klappen verhindern Rückfluss). Zunahme bei körperlicher Aktivität (10× erhöhter Lymphfluss). Gestört bei Bettlägerigkeit → Ödemrisiko ↑.",
        "**MALT (Mucosa-Associated Lymphoid Tissue):** Schleimhaut-assoziiertes lymphatisches Gewebe. Beispiele: Tonsillen (Waldeyer-Rachenring: Gaumenmandeln, Rachenmandeln, Zungengrund), Peyer-Plaques (Ileum, Antigen-Sampling via M-Zellen), BALT (Bronchien), GALT (Darm). Erstlinienverteidigung an Schleimhäuten. MALT-Lymphom: Marginalzonen-B-Zell-Lymphom (oft H. pylori-assoziiert im Magen → Eradikation therapiert das Lymphom)."
      ],
      klinischerBezug: "Lymphome sind häufige hämatologische Malignome: Hodgkin-Lymphom (Reed-Sternberg-Zellen, bimodale Altersverteilung, gute Prognose mit ABVD-Chemotherapie ~80% 5-Jahres-Überleben). Non-Hodgkin-Lymphome: DLBCL (häufigste, R-CHOP: Rituximab + CHOP), Follikuläres Lymphom (t(14;18), bcl-2 translokation, indolent). B-Symptome (Fieber >38°C, Nachtschweiß, Gewichtsverlust >10% in 6 Monaten) als Alarmsymptome. Lymphödem nach Brustkrebsoperationen (axilläre Lymphknotenentfernung) sehr häufig: chronische Beschwerden, Therapie: physikalische Entstauungstherapie. OPSI (overwhelming post-splenectomy infection): lebensbedrohliche Sepsis durch bekapselte Bakterien nach Splenektomie → lebenslange Prophylaxe (Impfung + Penicillin) essenziell. Infektiöse Mononukleose (EBV, 'Kusskrankheit'): Lymphadenopathie, Splenomegalie, atypische Lymphozyten (Pfeiffer-Zellen), Amoxicillin kontraindiziert (Arzneimittelexanthem)."
    },
    {
      id: 'bio-3-08',
      title: "Atmungssystem",
      content: `# Atmungssystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 17 Minuten
**Stichwortliste-Abdeckung:** 8/8 Stichwörter

---

## Einleitung

Das **Atmungssystem** (Respirationssystem) ermöglicht den **Gasaustausch** zwischen Außenluft und Blut: **O₂-Aufnahme** (für Zellatmung) und **CO₂-Abgabe** (Stoffwechselprodukt).

**Komponenten:**
- **Obere Atemwege:** Nase, Nasennebenhöhlen, Rachen (Pharynx)
- **Untere Atemwege:** Kehlkopf (Larynx), Luftröhre (Trachea), Bronchien, Bronchiolen, Alveolen
- **Lunge:** Paarig (links 2 Lappen, rechts 3 Lappen)

---

## Kerninhalt

### 1. Obere und Untere Atemwege

#### 1a. Obere Atemwege

| Struktur | Funktion | Besonderheiten |
|----------|----------|----------------|
| **Nase** | Erwärmung, Befeuchtung, Filterung (Nasenhärchen, Mukus) | Riechepithel (Riechzellen, Geruchsrezeptoren) |
| **Nasennebenhöhlen** | Resonanz (Stimme), Gewichtsreduktion des Schädels | Sinus maxillaris, frontalis, ethmoidalis, sphenoidalis |
| **Rachen (Pharynx)** | Passage für Luft + Nahrung | Nasopharynx, Oropharynx, Laryngopharynx |

#### 1b. Untere Atemwege

| Struktur | Funktion | Besonderheiten |
|----------|----------|----------------|
| **Kehlkopf (Larynx)** | Stimmbildung (Stimmbänder), Schutz (Epiglottis verschließt bei Schlucken) | Kehldeckel (Epiglottis), Schildknorpel (Prominentia laryngea, Adamsapfel) |
| **Luftröhre (Trachea)** | Lufttransport | C-förmige Knorpelspangen (verhindern Kollaps), Flimmerepithel (Mukus-Transport nach oben) |
| **Bronchien** | Luftverteilung | Hauptbronchien (re/li) → Lappenbronchien → Segmentbronchien → Bronchiolen |
| **Bronchiolen** | Feine Luftverteilung | **Keine Knorpel**, glatte Muskulatur (Sympathikus β₂ → Bronchodilatation, Parasympathikus M₃ → Bronchokonstriktion) |
| **Alveolen** | **Gasaustausch** | ~300 Mio., Oberfläche ~80–140 m², Typ-I-Pneumozyten (Gasaustausch), Typ-II-Pneumozyten (Surfactant) |

⭐ **Prüfungswichtig:**
- **Bronchien:** Knorpel + Flimmerepithel
- **Bronchiolen:** **Keine Knorpel** (glatte Muskulatur), Terminal-Bronchiolen → Respiratorische Bronchiolen (erste Alveolen)
- **Alveolen:** Dünnwandig (~0,2 µm), Kapillarnetz (Blut-Luft-Schranke), maximale Oberfläche

---

### 2. ⭐ Alveolen und Surfactant

**Alveolar-Struktur:**

| Zelltyp | Anteil | Funktion |
|---------|--------|----------|
| **Typ-I-Pneumozyten** | ~95% der Oberfläche | **Gasaustausch** (dünn, flach, ~0,2 µm) |
| **Typ-II-Pneumozyten** | ~5% der Oberfläche | **Surfactant-Produktion** (Phospholipid-Protein-Komplex) |
| **Alveolarmakrophagen** | - | Phagozytose (Staub, Bakterien) |

**Blut-Luft-Schranke (Diffusionsstrecke ~0,5 µm):**
1. Alveoläres Epithel (Typ-I-Pneumozyten)
2. Basalmembran (fusioniert)
3. Kapillar-Endothel

⭐ **Surfactant (Oberflächenspannung-senkender Faktor):**

**Zusammensetzung:**
- ~90% **Phospholipide** (hauptsächlich **Dipalmitoylphosphatidylcholin, DPPC**)
- ~10% **Proteine** (Surfactant-Proteine A, B, C, D)

**Funktion:**
1. **Senkung der Oberflächenspannung** (Alveolen sind mit Flüssigkeitsfilm ausgekleidet)
   - **Ohne Surfactant:** Hohe Oberflächenspannung → kleine Alveolen kollabieren (Laplace-Gesetz: P = 2T/r, kleiner Radius r → hoher Druck P)
   - **Mit Surfactant:** Oberflächenspannung ↓ → verhindert Alveolarkollaps (Atelektase)
2. **Stabilisierung der Alveolen:** Gleicher Druck in großen und kleinen Alveolen
3. **Erleichtert Inspiration:** Weniger Kraft nötig, um Alveolen zu öffnen

**Klinisch:**
- **Respiratory Distress Syndrome (RDS, Atemnotsyndrom):**
  - **Neonatales RDS (Frühgeborene <28 Wochen):** Surfactant-Mangel (Typ-II-Pneumozyten unreif) → Atelektase → Hypoxie, Tachypnoe, Zyanose
  - **Therapie:** Surfactant-Gabe (endotracheal), Beatmung, Glukokortikoide (antenatal, beschleunigt Lungenreifung)
  - **Prophylaxe:** Betamethason/Dexamethason (Mutter vor Frühgeburt → Surfactant-Produktion ↑)
- **ARDS (Acute Respiratory Distress Syndrome, Erwachsene):** Alveolarschaden → Surfactant-Dysfunktion → Atelektase, Lungenödem

---

### 3. ⭐ Atemmechanik (Inspiration und Exspiration)

**Atembewegungen:** Veränderung des **Thoraxvolumens** → Druckänderung → Luftstrom

#### 3a. Inspiration (Einatmung, aktiv)

**Mechanismus:**
1. **Diaphragma** (Zwerchfell) kontrahiert → senkt sich (~10 cm) → Thoraxvolumen ↑ (vertikal)
2. **Interkostalmuskulatur (Mm. intercostales externi)** kontrahiert → Rippen heben sich → Thoraxvolumen ↑ (anterior-posterior + lateral)
3. **Lungenvolumen ↑** → **Intrapulmonaler Druck ↓** (subatmosphärisch, ~−1 mmHg) → Luft strömt ein (Druckgradient: atmosphärisch 0 mmHg → pulmonal −1 mmHg)

⭐ **Prüfungswichtig:**
- **Intrapleuraler Druck:** Immer **negativ** (~−5 mmHg Ruhe, ~−8 mmHg Inspiration)
- **Pneumothorax:** Luft im Pleuraspalt → intrapleuraler Druck = 0 → Lunge kollabiert (verliert negative Druck-Traktion)

#### 3b. Exspiration (Ausatmung, passiv in Ruhe)

**Mechanismus:**
1. **Diaphragma + Interkostalmuskeln** entspannen → Thoraxvolumen ↓ (elastische Rückstellung)
2. **Lungenvolumen ↓** → **Intrapulmonaler Druck ↑** (~+1 mmHg) → Luft strömt aus

⭐ **Forcierte Exspiration (aktiv):**
- **Bauchmuskeln** (M. rectus abdominis, M. obliquus externus/internus) kontrahieren → Zwerchfell nach oben drücken
- **Mm. intercostales interni** kontrahieren → Rippen senken
- **Klinisch:** Asthma, COPD → Exspiration erschwert (Bronchokonstriktion, Lungenemphysem)

---

### 4. ⭐ Gasaustausch (Diffusion)

**Fick''sches Diffusionsgesetz:**

**Diffusionsrate ∝ (Oberfläche × Partialdruckdifferenz) / (Diffusionsstrecke × √Molekulargewicht)**

#### 4a. Pulmonaler Gasaustausch (Lunge)

**O₂-Diffusion:**
- **Alveolen:** pO₂ ~100 mmHg (Außenluft ~160 mmHg, alveoläre Luft ~100 mmHg nach Mischung mit FRC)
- **Venöses Blut:** pO₂ ~40 mmHg (aus Gewebe)
- **Gradient:** 100 − 40 = **60 mmHg** → O₂ diffundiert ins Blut → **arterielles Blut:** pO₂ ~100 mmHg

**CO₂-Diffusion:**
- **Venöses Blut:** pCO₂ ~46 mmHg
- **Alveolen:** pCO₂ ~40 mmHg
- **Gradient:** 46 − 40 = **6 mmHg** (kleiner Gradient, aber CO₂ ist ~20× diffusibler als O₂!) → CO₂ diffundiert in Alveolen

⭐ **Prüfungswichtig:** CO₂ diffundiert **20× schneller** als O₂ (höhere Löslichkeit in Membranen) → trotz kleinerem Gradienten effizient.

#### 4b. Peripherer Gasaustausch (Gewebe)

**O₂-Abgabe:**
- **Arterielles Blut:** pO₂ ~100 mmHg
- **Gewebe:** pO₂ ~40 mmHg (Metabolismus verbraucht O₂)
- **Gradient:** 100 − 40 = **60 mmHg** → O₂ diffundiert ins Gewebe

**CO₂-Aufnahme:**
- **Gewebe:** pCO₂ ~46 mmHg (Metabolismus produziert CO₂)
- **Arterielles Blut:** pCO₂ ~40 mmHg
- **Gradient:** 46 − 40 = **6 mmHg** → CO₂ diffundiert ins Blut

---

### 5. ⭐ Hämoglobin-O₂-Bindung (Transportmechanismus)

**O₂-Transport im Blut:**
- **Gelöst:** ~2% (physikalisch gelöst in Plasma, bestimmt pO₂)
- **Gebunden an Hb:** ~98% (Hämoglobin in Erythrozyten)

⭐ **O₂-Bindungskurve (sigmoid):**

**Sauerstoffsättigung (SO₂):**
- **Arterien (Lunge):** pO₂ ~100 mmHg → SO₂ ~97–99%
- **Venen (Gewebe):** pO₂ ~40 mmHg → SO₂ ~75%

**Bohr-Effekt (Rechtverschiebung der Kurve):**
- **Bedingungen in metabolisch aktivem Gewebe:**
  - **CO₂ ↑** (Stoffwechselprodukt)
  - **pH ↓** (Azidose, H⁺ ↑ aus CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻)
  - **Temperatur ↑** (Muskelarbeit)
  - **2,3-BPG ↑** (bei chronischer Hypoxie, Höhenanpassung)
- **Effekt:** O₂-Affinität ↓ → **O₂-Abgabe ↑** (physiologisch sinnvoll!)

⭐ **Kooperativität:**
- Hämoglobin ist ein **Tetramer** (4 Untereinheiten)
- Bindung des 1. O₂ → erleichtert Bindung des 2./3./4. O₂ (allosterische Regulation) → **sigmoidale Kurve** (nicht hyperbolisch wie Myoglobin)

**CO₂-Transport im Blut:**
1. **Gelöst:** ~7% (physikalisch gelöst in Plasma, bestimmt pCO₂)
2. **Carbaminohämoglobin:** ~23% (CO₂ bindet an Hb, nicht an Häm, sondern an Aminogruppen der Globin-Ketten)
3. **Bikarbonat (HCO₃⁻):** ~70% (wichtigster Mechanismus)
   - CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (katalysiert durch **Carboanhydrase** in Erythrozyten)
   - HCO₃⁻ diffundiert aus Erythrozyten → Plasma (Cl⁻/HCO₃⁻-Austauscher, **Chlorid-Shift**)

⭐ **Prüfungswichtig:**
- **Haldane-Effekt:** Desoxygeniertes Hb bindet **mehr CO₂** (und mehr H⁺) als oxygeniertes Hb
  - **Gewebe:** O₂ ↓ → Hb desaturiert → CO₂-Bindung ↑
  - **Lunge:** O₂ ↑ → Hb saturiert → CO₂-Abgabe ↑ (erleichtert CO₂-Elimination)

---

### 6. ⭐ Regulation der Atmung

**Atemzentrum:** Medulla oblongata (Hirnstamm) + Pons

#### 6a. Zentrale Regulation

**Chemorezeptoren (Medulla oblongata):**
- Messen **pCO₂ + pH** (indirekt über H⁺ im Liquor)
- **pCO₂ ↑** (Hyperkapnie) → H⁺ ↑ (Azidose) → Atemzentrum stimuliert → **Atemfrequenz ↑, Atemtiefe ↑** → Ventilation ↑ → CO₂ ↓
- ⭐ **Wichtigster Atemantrieb:** CO₂/pH (nicht O₂!)

**Klinisch:**
- **COPD (chronische Hyperkapnie):** Zentrale Chemorezeptoren adaptieren → **hypoxischer Atemantrieb** wird wichtiger (periphere Chemorezeptoren)
- **O₂-Gabe bei COPD:** Vorsicht! Zu viel O₂ → hypoxischer Atemantrieb ↓ → Atemfrequenz ↓ → CO₂-Retention ↑ (CO₂-Narkose)

#### 6b. Periphere Regulation

**Chemorezeptoren (Karotis-Körper, Aortenbogen):**
- Messen **pO₂, pCO₂, pH**
- **pO₂ ↓** (<60 mmHg, Hypoxie) → Atemzentrum stimuliert → Ventilation ↑
- **Sekundär wichtig** (primär: zentrale CO₂-Sensoren)

**Dehnungsrezeptoren (Lunge):**
- **Hering-Breuer-Reflex:** Lunge dehnt sich → Dehnungsrezeptoren → Vagus → **Inspiration stoppt** → verhindert Überdehnung

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Surfactant:** DPPC (Phospholipid), Typ-II-Pneumozyten, senkt Oberflächenspannung, verhindert Atelektase, RDS bei Frühgeborenen
2. **Atemmechanik:** Inspiration = aktiv (Diaphragma, Mm. intercostales externi), Exspiration = passiv (elastische Rückstellung), intrapleuraler Druck immer negativ (~−5 mmHg)
3. **Gasaustausch:** pO₂-Gradient Lunge 60 mmHg (100 − 40), pCO₂-Gradient 6 mmHg (46 − 40), CO₂ 20× diffusibler
4. **Bohr-Effekt:** CO₂ ↑, pH ↓, Temp ↑, 2,3-BPG ↑ → Rechtverschiebung → O₂-Abgabe ↑ (metabolisch aktives Gewebe)
5. **CO₂-Transport:** 70% als HCO₃⁻ (Carboanhydrase, Chlorid-Shift), 23% Carbaminohämoglobin, 7% gelöst
6. **Atemregulation:** Zentrale Chemorezeptoren (Medulla) → **pCO₂/pH** (wichtigster Atemantrieb), periphere Chemorezeptoren (Karotis) → pO₂ (sekundär)

---

## Merksätze

>>>> **Surfactant:** „Typ-II-Pneumozyten machen Surfactant (DPPC, Phospholipid) → Oberflächenspannung ↓ → Alveolen bleiben offen (keine Atelektase)!"
>>>> (RDS bei Frühgeborenen: Surfactant-Mangel → Kollaps → Hypoxie → Betamethason antenatal)

>>>> **Bohr-Effekt:** „CO₂ ↑, pH ↓, Temp ↑ im Gewebe → O₂-Abgabe ↑ (Rechtverschiebung) – Lunge umgekehrt (CO₂ ↓, pH ↑ → O₂-Aufnahme ↑)!"
>>>> (Metabolisch aktives Gewebe braucht O₂ → lokale Bedingungen fördern O₂-Freisetzung)

>>>> **CO₂-Transport:** „70% Bikarbonat (Carboanhydrase: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, Chlorid-Shift), 23% Carbamino-Hb, 7% gelöst!"
>>>> (Haldane-Effekt: Desoxy-Hb bindet mehr CO₂ als Oxy-Hb)

>>>> **Atemregulation:** „Zentrale Chemorezeptoren (Medulla) = CO₂/pH (wichtigster Antrieb), periphere Chemorezeptoren (Karotis) = O₂ (sekundär, <60 mmHg)!"
>>>> (COPD: CO₂-Adaptation → hypoxischer Atemantrieb wird wichtiger)

---

**Navigation:**
← [Zurück: Bio Kap 3 UK07 – Lymphatisches System](Bio_Kap3_UK07_Lymphsystem.md) | [Weiter: Bio Kap 3 UK09 – Verdauungssystem](Bio_Kap3_UK09_Verdauungssystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über Surfactant und seine Funktion ist korrekt?",
          options: [
          "Surfactant wird von Typ-I-Pneumozyten produziert und besteht hauptsächlich aus Proteinen.",
          "Surfactant wird von Typ-II-Pneumozyten produziert, besteht zu ~90% aus Phospholipiden (hauptsächlich DPPC) und senkt die Oberflächenspannung in den Alveolen, um einen Kollaps (Atelektase) zu verhindern.",
          "Surfactant erhöht die Oberflächenspannung in den Alveolen, um sie zu stabilisieren.",
          "Das Respiratory Distress Syndrome (RDS) bei Frühgeborenen wird durch Surfactant-Überschuss verursacht.",
          "Surfactant-Mangel führt zu einer erleichterten Inspiration, da die Alveolen leichter zu öffnen sind."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Surfactant** ist essentiell für die Lungenfunktion:\n\n**Produktion:**\n- **Typ-II-Pneumozyten** (~5% der Alveolaroberfläche) produzieren und sezernieren Surfactant\n\n**Zusammensetzung:**\n- ~**90% Phospholipide** (hauptsächlich **Dipalmitoylphosphatidylcholin, DPPC**)\n- ~10% Proteine (Surfactant-Proteine A, B, C, D)\n\n**Funktion:**\n1. **Senkung der Oberflächenspannung** an der Luft-Flüssigkeits-Grenze in Alveolen\n2. **Verhindert Alveolarkollaps (Atelektase):**\n   - Laplace-Gesetz: **P = 2T/r** (Druck = 2 × Oberflächenspannung / Radius)\n   - Ohne Surfactant: Kleine Alveolen (kleiner Radius r) → hoher Druck P → Kollaps\n   - Mit Surfactant: T ↓ → Druck gleicht sich an → Stabilisierung\n3. **Erleichtert Inspiration** (weniger Kraft nötig)\n\n**Klinisch:**\n- **Neonatales RDS (Frühgeborene <28 Wochen):** Surfactant-Mangel (Typ-II-Pneumozyten unreif) → Atelektase → Hypoxie\n- **Therapie:** Surfactant-Gabe (endotracheal), Beatmung\n- **Prophylaxe:** Betamethason/Dexamethason (Mutter antenatal → Lungenreifung ↑)\n\n**Falsch (A):** **Typ-II-Pneumozyten** (nicht Typ-I) produzieren Surfactant. Typ-I-Pneumozyten (~95% der Oberfläche) sind dünn und für **Gasaustausch** zuständig. Surfactant besteht zu ~90% aus **Phospholipiden** (nicht Proteinen).\n\n**Falsch (C):** Surfactant **senkt** (nicht erhöht) die Oberflächenspannung → verhindert Kollaps.\n\n**Falsch (D):** RDS wird durch **Surfactant-Mangel** (nicht Überschuss) verursacht.\n\n**Falsch (E):** Surfactant-Mangel → hohe Oberflächenspannung → **erschwerte Inspiration** (mehr Kraft nötig, Atelektase-Risiko ↑).",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die Atemmechanik ist korrekt?",
          options: [
          "Die Inspiration in Ruhe ist ein passiver Prozess, der durch elastische Rückstellung der Lunge erfolgt.",
          "Die Inspiration in Ruhe ist ein aktiver Prozess, bei dem das Diaphragma und die Mm. intercostales externi kontrahieren, um das Thoraxvolumen zu vergrößern und den intrapulmonalen Druck zu senken.",
          "Der intrapleurale Druck ist während der Atmung immer positiv (+5 mmHg in Ruhe).",
          "Bei einem Pneumothorax wird der intrapleurale Druck negativ, was die Lunge zur vollständigen Entfaltung bringt.",
          "Die Exspiration in Ruhe ist ein aktiver Prozess, der die Kontraktion der Bauchmuskeln erfordert."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Inspiration in Ruhe** ist **aktiv** (Muskelarbeit erforderlich):\n\n**Mechanismus:**\n1. **Diaphragma** (Zwerchfell, wichtigster Atemmuskel) kontrahiert → senkt sich (~10 cm) → Thoraxvolumen ↑ (vertikal)\n2. **Mm. intercostales externi** (äußere Interkostalmuskeln) kontrahieren → Rippen heben sich → Thoraxvolumen ↑ (anterior-posterior + lateral)\n3. **Lungenvolumen ↑** → **Intrapulmonaler Druck ↓** (~−1 mmHg, subatmosphärisch)\n4. **Druckgradient:** Atmosphärisch (0 mmHg) → Pulmonal (−1 mmHg) → Luft strömt ein\n\n**Exspiration in Ruhe** ist **passiv** (keine Muskelarbeit):\n- Diaphragma + Interkostalmuskeln entspannen → elastische Rückstellung → Thoraxvolumen ↓ → intrapulmonaler Druck ↑ (~+1 mmHg) → Luft strömt aus\n\n**Falsch (A):** Inspiration in Ruhe ist **aktiv** (nicht passiv). **Exspiration** in Ruhe ist passiv (elastische Rückstellung).\n\n**Falsch (C):** Der **intrapleurale Druck** ist **immer negativ** (~−5 mmHg in Ruhe, ~−8 mmHg bei Inspiration). Dies ist essentiell, um die Lunge entfaltet zu halten (negative Traktion). Positiver intrapleuraler Druck → Lungenkollaps.\n\n**Falsch (D):** Bei **Pneumothorax** (Luft im Pleuraspalt) wird der intrapleurale Druck **0 oder positiv** (nicht negativ) → Lunge verliert negative Traktion → **Kollaps** (nicht Entfaltung).\n\n**Falsch (E):** Exspiration in Ruhe ist **passiv**. **Forcierte Exspiration** (aktiv, z. B. bei Husten, Sport) erfordert Bauchmuskeln (M. rectus abdominis, M. obliquus) + Mm. intercostales interni.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den Gasaustausch in der Lunge ist korrekt?",
          options: [
          "Der O₂-Partialdruck in den Alveolen beträgt ~40 mmHg, während er im venösen Blut ~100 mmHg beträgt.",
          "CO₂ diffundiert langsamer als O₂, da es ein größeres Molekül ist.",
          "Der O₂-Gradient zwischen Alveolen (~100 mmHg) und venösem Blut (~40 mmHg) beträgt 60 mmHg. Der CO₂-Gradient beträgt 6 mmHg (46 → 40 mmHg), aber CO₂ diffundiert ~20× schneller als O₂ aufgrund höherer Löslichkeit.",
          "Die Blut-Luft-Schranke beträgt etwa 5 mm und begrenzt die Diffusionsgeschwindigkeit erheblich.",
          "O₂ und CO₂ werden gleich schnell ausgetauscht, da beide Gase dieselbe Diffusionsrate haben."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** Der **Gasaustausch** in der Lunge erfolgt durch **Diffusion** entlang von Partialdruckgradienten:\n\n**O₂-Diffusion:**\n- **Alveolen:** pO₂ ~**100 mmHg**\n- **Venöses Blut** (aus Gewebe): pO₂ ~**40 mmHg**\n- **Gradient:** 100 − 40 = **60 mmHg** → O₂ diffundiert ins Blut\n- **Arterielles Blut** (nach Gasaustausch): pO₂ ~100 mmHg\n\n**CO₂-Diffusion:**\n- **Venöses Blut:** pCO₂ ~**46 mmHg**\n- **Alveolen:** pCO₂ ~**40 mmHg**\n- **Gradient:** 46 − 40 = **6 mmHg** (viel kleiner als O₂-Gradient!)\n- **Aber:** CO₂ ist ~**20× diffusibler** als O₂ (höhere Löslichkeit in Membranen) → trotz kleinerem Gradienten effizient\n\n**Fick'sches Diffusionsgesetz:** Diffusionsrate ∝ Gradient × Löslichkeit × Oberfläche / Diffusionsstrecke\n\n**Falsch (A):** **Umgekehrt!** Alveolen: pO₂ ~100 mmHg, venöses Blut: pO₂ ~40 mmHg (nicht andersherum).\n\n**Falsch (B):** CO₂ diffundiert **schneller** (nicht langsamer) als O₂ (~20× schneller), obwohl es ein größeres Molekül ist. Grund: **höhere Löslichkeit** in Lipidmembranen.\n\n**Falsch (D):** Die **Blut-Luft-Schranke** beträgt ~**0,5 µm** (nicht 5 mm)! Sie ist extrem dünn:\n1. Alveoläres Epithel (Typ-I-Pneumozyten)\n2. Fusionierte Basalmembran\n3. Kapillar-Endothel\n\n**Falsch (E):** O₂ und CO₂ haben **unterschiedliche Diffusionsraten**. CO₂ diffundiert ~20× schneller (höhere Löslichkeit), kompensiert den kleineren Gradienten.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den Bohr-Effekt und die Hämoglobin-Sauerstoffbindung ist korrekt?",
          options: [
          "Der Bohr-Effekt beschreibt eine Linksverschiebung der O₂-Bindungskurve bei erhöhtem CO₂, niedrigem pH und erhöhter Temperatur.",
          "Der Bohr-Effekt führt dazu, dass in metabolisch aktivem Gewebe (CO₂ ↑, pH ↓, Temp ↑, 2,3-BPG ↑) die O₂-Bindungskurve nach rechts verschoben wird, was die O₂-Affinität von Hämoglobin senkt und die O₂-Abgabe ans Gewebe erhöht.",
          "Hämoglobin ist ein Monomer mit einer Häm-Gruppe, das Sauerstoff linear bindet.",
          "2,3-BPG verschiebt die O₂-Bindungskurve nach links und erhöht die O₂-Affinität von Hämoglobin.",
          "In der Lunge (CO₂ ↓, pH ↑) wird die O₂-Bindungskurve nach rechts verschoben, was die O₂-Aufnahme erschwert."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Der **Bohr-Effekt** beschreibt, wie metabolische Parameter die O₂-Affinität von Hämoglobin beeinflussen:\n\n**Bedingungen in metabolisch aktivem Gewebe:**\n- **CO₂ ↑** (Stoffwechselprodukt)\n- **pH ↓** (Azidose, H⁺ ↑ aus CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻)\n- **Temperatur ↑** (Muskelarbeit, Entzündung)\n- **2,3-BPG ↑** (2,3-Bisphosphoglycerat, bei chronischer Hypoxie, Höhenanpassung)\n\n**Effekt:**\n- **Rechtverschiebung** der O₂-Bindungskurve\n- **O₂-Affinität ↓** (Hb bindet O₂ schwächer)\n- **O₂-Abgabe ↑** (mehr O₂ wird ans Gewebe abgegeben)\n\n**Physiologische Bedeutung:** Gewebe mit hohem Stoffwechsel (Muskel, Hirn) brauchen mehr O₂ → lokale Bedingungen (CO₂ ↑, pH ↓, Temp ↑) → Hb gibt mehr O₂ ab.\n\n**In der Lunge (umgekehrt):**\n- CO₂ ↓ (wird abgeatmet), pH ↑, Temp normal\n- **Linksverschiebung** → O₂-Affinität ↑ → **O₂-Aufnahme ↑**\n\n**Falsch (A):** **Rechtverschiebung** (nicht Links) bei CO₂ ↑, pH ↓, Temp ↑. Linksverschiebung wäre bei CO₂ ↓, pH ↑ (Lunge).\n\n**Falsch (C):** Hämoglobin ist ein **Tetramer** (4 Untereinheiten: 2α, 2β), jede mit einer Häm-Gruppe (insgesamt 4). Bindung ist **kooperativ** (sigmoid, nicht linear) → Bindung des 1. O₂ erleichtert Bindung des 2./3./4. O₂.\n\n**Falsch (D):** 2,3-BPG verschiebt die Kurve nach **rechts** (nicht links) → O₂-Affinität ↓ → O₂-Abgabe ↑. Entsteht bei Hypoxie (Höhenanpassung, Anämie) → kompensatorisch.\n\n**Falsch (E):** In der Lunge (CO₂ ↓, pH ↑) → **Linksverschiebung** (nicht rechts) → O₂-Affinität ↑ → **O₂-Aufnahme erleichtert** (nicht erschwert).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den CO₂-Transport im Blut ist korrekt?",
          options: [
          "Der größte Teil des CO₂ wird physikalisch gelöst im Plasma transportiert (ca. 70%).",
          "Ca. 70% des CO₂ werden als Bikarbonat (HCO₃⁻) transportiert, ca. 23% als Carbaminohämoglobin (CO₂ gebunden an Hämoglobin) und ca. 7% gelöst im Plasma.",
          "Carboanhydrase katalysiert die Reaktion CO₂ + H₂O → H₂CO₃ in den Alveolen, um CO₂ zu speichern.",
          "Der Chlorid-Shift beschreibt den Austausch von Na⁺ gegen Cl⁻ in Erythrozyten.",
          "Der Haldane-Effekt besagt, dass oxygeniertes Hämoglobin mehr CO₂ bindet als desoxygeniertes Hämoglobin."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** CO₂-Transport im Blut erfolgt über **3 Mechanismen**:\n\n**1. Bikarbonat (HCO₃⁻) — ~70% (wichtigster Mechanismus):**\n- In Erythrozyten: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (katalysiert durch **Carboanhydrase**)\n- **HCO₃⁻** diffundiert aus Erythrozyten ins Plasma\n- **Chlorid-Shift:** Cl⁻ diffundiert ins Erythrozyt (Cl⁻/HCO₃⁻-Austauscher), um Ladungsausgleich zu wahren\n\n**2. Carbaminohämoglobin — ~23%:**\n- CO₂ bindet direkt an **Aminogruppen der Globin-Ketten** (nicht an Häm-Gruppe!)\n- Formel: Hb-NH₂ + CO₂ ⇌ Hb-NH-COO⁻ + H⁺\n\n**3. Physikalisch gelöst — ~7%:**\n- CO₂ gelöst im Plasma (bestimmt pCO₂)\n\n**Falsch (A):** Nur ~7% (nicht 70%) des CO₂ werden physikalisch gelöst transportiert. ~70% werden als **HCO₃⁻** transportiert.\n\n**Falsch (C):** Carboanhydrase katalysiert die Reaktion **in Erythrozyten** (nicht Alveolen), um CO₂ → HCO₃⁻ umzuwandeln (Transport). In der Lunge läuft die Reaktion **rückwärts** (HCO₃⁻ → CO₂), um CO₂ abzuatmen.\n\n**Falsch (D):** Der **Chlorid-Shift** (Hamburger-Shift) beschreibt den Austausch von **Cl⁻** (ins Erythrozyt) gegen **HCO₃⁻** (aus Erythrozyt), **nicht** Na⁺ gegen Cl⁻. Zweck: Ladungsausgleich.\n\n**Falsch (E):** **Haldane-Effekt:** **Umgekehrt!** **Desoxygeniertes Hb** bindet **mehr CO₂** (und mehr H⁺) als oxygeniertes Hb.\n- **Gewebe:** O₂ ↓ → Hb desaturiert → CO₂-Bindung ↑ (fördert CO₂-Aufnahme)\n- **Lunge:** O₂ ↑ → Hb saturiert → CO₂-Abgabe ↑ (erleichtert CO₂-Elimination)",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über die Regulation der Atmung ist korrekt?",
          options: [
          "Der wichtigste Atemantrieb ist der O₂-Partialdruck, der von zentralen Chemorezeptoren in der Medulla oblongata gemessen wird.",
          "Zentrale Chemorezeptoren in der Medulla oblongata messen pCO₂ und pH (indirekt über H⁺ im Liquor). Ein Anstieg von pCO₂ oder ein Abfall des pH führt zu erhöhter Ventilation. Dies ist der wichtigste Atemantrieb.",
          "Periphere Chemorezeptoren im Karotis-Körper reagieren nur auf Änderungen des pCO₂, nicht auf pO₂.",
          "Der Hering-Breuer-Reflex führt bei Überdehnung der Lunge zu einer Verlängerung der Inspiration.",
          "Bei COPD-Patienten mit chronischer Hyperkapnie sollte hochdosierter Sauerstoff (100%) ohne Vorsicht verabreicht werden."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** Die **Atemregulation** erfolgt hauptsächlich über **zentrale Chemorezeptoren**:\n\n**Zentrale Chemorezeptoren (Medulla oblongata, Hirnstamm):**\n- Messen **pCO₂** und **pH** (indirekt über **H⁺-Konzentration im Liquor**)\n- **pCO₂ ↑** (Hyperkapnie) → CO₂ diffundiert in Liquor → H₂CO₃ → **H⁺ ↑** (Azidose) → Atemzentrum stimuliert\n- **Reaktion:** **Atemfrequenz ↑, Atemtiefe ↑** → Ventilation ↑ → CO₂-Elimination ↑ → pCO₂ ↓\n- ⭐ **Wichtigster Atemantrieb:** CO₂/pH (nicht O₂!)\n\n**Periphere Chemorezeptoren (Karotis-Körper, Aortenbogen):**\n- Messen pO₂, pCO₂, pH\n- **pO₂ ↓** (<60 mmHg, schwere Hypoxie) → Atemzentrum stimuliert → Ventilation ↑\n- **Sekundär wichtig** (hypoxischer Atemantrieb)\n\n**Falsch (A):** Der wichtigste Atemantrieb ist **pCO₂/pH** (nicht pO₂). **pO₂** wird von **peripheren** Chemorezeptoren (Karotis-Körper) gemessen, nicht zentralen.\n\n**Falsch (C):** Periphere Chemorezeptoren reagieren auf **pO₂** (wichtigster Stimulus für periphere Rezeptoren), **pCO₂** und **pH**. Sie sind besonders sensitiv für **Hypoxie** (pO₂ <60 mmHg).\n\n**Falsch (D):** Der **Hering-Breuer-Reflex** führt bei Überdehnung der Lunge (Dehnungsrezeptoren) zu einem **Stopp der Inspiration** (nicht Verlängerung) → verhindert Überdehnung → Exspiration beginnt.\n\n**Falsch (E):** Bei **COPD mit chronischer Hyperkapnie** (CO₂-Retention) adaptieren zentrale Chemorezeptoren → **hypoxischer Atemantrieb** (periphere Rezeptoren) wird wichtiger. **Hochdosierter O₂** (>FiO₂ 0,4, >40%) kann:\n- Hypoxischen Atemantrieb eliminieren → **Atemfrequenz ↓**\n- **CO₂-Retention ↑** → CO₂-Narkose (Bewusstseinsstörung)\n- **Vorsicht:** Kontrollierte O₂-Gabe (niedrige FiO₂, z. B. 24–28%, Venturi-Maske), Zielsättigung ~88–92% (nicht >95%).",
          difficulty: 3,
          tags: [],
          hints: [
            "Zentrale vs. periphere Chemorezeptoren: Welche messen primär CO₂ und welche O₂? Welcher Stimulus ist wichtiger?",
            "Zentrale (Medulla): CO₂/pH – wichtigster Atemantrieb. Periphere (Karotis-Körper): O₂ (<60 mmHg), sekundär. Bei COPD+Hyperkapnie: O₂ ↑↑ → hypoxischer Antrieb eliminiert → Apnoe-Risiko."
          ],
        }
      ],
      merksätze: [
        "**Atemwege-Anatomie:** Obere Atemwege: Nase (Filtration, Befeuchtung, Erwärmung), Nasennebenhöhlen, Pharynx. Untere Atemwege: Larynx (Stimmbildung, Epiglottis), Trachea (C-Knorpel, 16–20 Spangen), Bronchien (Knorpel + Flimmerepithel) → Bronchiolen (KEIN Knorpel, glatte Muskulatur) → Alveolen (~300 Mio., ~80–140 m², Typ-I [Gasaustausch] + Typ-II [Surfactant]).",
        "**Surfactant:** Produziert von Typ-II-Pneumozyten. Zusammensetzung: ~90% Phospholipide (DPPC). Funktion: Oberflächenspannung ↓ → Alveolarkollaps verhindert (Laplace: P = 2T/r → kleine Alveolen ohne Surfactant kollabieren). Neonatales RDS (Frühgeborene <28 SSW): Surfactant-Mangel → Atelektase → Hypoxie. Therapie: Surfactant endotracheal, antenatale Glukokortikoide (Lungenreifung).",
        "**Atemmechanik & Lungenvolumina:** Inspiration: Diaphragma + Mm. intercostales externi → Thoraxvolumen ↑ → Pleuradruck ↓ → Luft einströmt. Exspiration: passiv (Elastizität). AZV ~500 mL, TLC ~5800 mL. FEV1/FVC: Obstruktion (COPD/Asthma) <70%; Restriktion (Fibrose) FEV1/FVC normal aber TLC ↓.",
        "**Gasaustausch & CO₂-Transport:** Blut-Luft-Schranke ~0,5 μm. O₂: pO₂ Alveolar ~100 mmHg → Blut ~100 mmHg; Gewebe: ~40 mmHg. CO₂ diffundiert 20× schneller als O₂. CO₂-Transport: 70% als Bikarbonat (Carboanhydrase → Chlorid-Shift), 23% Carbamino-Hb, 7% gelöst. Haldane-Effekt: Desoxy-Hb bindet mehr CO₂.",
        "**Atemregulation:** Atemzentrum (Medulla + Pons). Zentrale Chemorezeptoren (Medulla): pCO₂ ↑ / pH ↓ im Liquor → Ventilation ↑ (WICHTIGSTER Atemantrieb). Periphere Chemorezeptoren (Karotis-Körper): pO₂ ↓ <60 mmHg → Ventilation ↑. Hering-Breuer-Reflex: Lungen-Überdehnung → Inspiration stoppt. COPD: CO₂-Adaptation → hypoxischer Antrieb wichtiger.",
        "**COPD:** Obstruktion (FEV1/FVC <70%). Emphysem (Alveolen-Destruktion → elastischer Rückzug ↓ → Fasslörmi ge Thorax, Air-Trapping) + Chronische Bronchitis (Mukus, Husten). Ursache: Rauchen (~80%). Gold-Klassifikation I–IV (nach FEV1). Therapie: SABA (Notfall) → LAMA oder LABA → LAMA+LABA+ICS. O₂-Langzeittherapie (>15 h/Tag) verbessert Überl eben.",
        "**Asthma bronchiale:** Chronische Entzündung → bronchiale Hyperreaktivität → reversible Obstruktion. Pathophysiologie: Th2/IgE → Mastzellen → Histamin, Leukotriene → Bronchokonstriktion + Mukus. Trigger: Allergene, Kälte, NSAR, Infekte. Therapie: SABA (Notfall), ICS (Basistherapie), LABA (add-on), Montelukast (Leukotrien-Antagonist), Biologika (Omalizumab, Dupilumab).",
        "**Pneumonie:** Lobärpneumonie: Streptococcus pneumoniae → Konsolidierung (Lappen). Atypisch: Mykoplasmen (junger Erwachsener, 'walking pneumonia'), Chlamydien, Legionellen. Therapie: Amoxicillin (typisch), Makrolid (atypisch). Komplikationen: Pleuraempyem, Sepsis. Prävention: Pneumokokken-Impfung. Aspirationspneumonie: Rechter Unterlappen (anatomisch).",
        "**Pleura & Pneumothorax:** Pleuritis (Reibegeräusch). Pleuraerguss: Transsudat (Herzinsuffizienz, Hypoalbuminämie, Serumkolloid ↓) vs. Exsudat (Entzündung, Malignom, Light-Kriterien). Pneumothorax: Luft in Pleurahöhle → Lunge kollabiert. Spontan (junger, schlanker Mann, bullöses Emphysem), traumatisch. Spannungspneumothorax: Ventilmechanismus → Mediastinalverschiebung → Notfall (Nadeldekompression 2. ICR MCL)."
      ],
      klinischerBezug: "COPD betrifft >250 Millionen Menschen weltweit (Hauptursache: Rauchen, auch Luftverschmutzung). Exazerbationen (AECOPD) durch Infekte → Systemglukokortikoide, Antibiotika, kontrollierte O₂-Gabe (Ziel-SpO₂ ~88–92%). Asthma bronchiale: 300 Millionen Betroffene; allergisches Asthma häufigste Form (IgE-vermittelt). Biologika (Omalizumab [Anti-IgE], Mepolizumab [Anti-IL-5], Dupilumab [Anti-IL-4/IL-13]) bei schwerem Asthma. Lungenkarzinom: häufigste krebsbedingte Todesursache weltweit. NSCLC (85%): Adenokarzinom (häufigste, EGFR-/ALK-Mutationen, targeted therapy), Plattenepithelkarzinom; SCLC (15%, paraneoplastisch, Cushing/SIADH). ARDS: diffuser alveolärer Schaden (Sepsis, Trauma, COVID-19) → lungenprotektive Beatmung (6 mL/kg, PEEP) reduziert Mortalität. Pulmonale Embolie: Thrombus aus tiefen Beinvenen → Pulmonalarterien → Atemnot, Tachykardie, pleuritischer Schmerz. Therapie: Antikoagulation (Heparin/DOAK), bei Massembolie Lyse/Embolektomie."
    },
    {
      id: 'bio-3-09',
      title: "Verdauungssystem",
      content: `# Verdauungssystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 16 Minuten
**Stichwortliste-Abdeckung:** 11/11 Stichwörter

---

## Einleitung

Das **Verdauungssystem** (Gastrointestinaltrakt, GIT) dient der **mechanischen + chemischen Verdauung** von Nahrung, **Resorption** von Nährstoffen/Wasser und **Exkretion** unverdaulicher Reste.

**Verlauf:** Mund → Ösophagus → Magen → Dünndarm (Duodenum, Jejunum, Ileum) → Dickdarm → Rektum → Anus (~9 m Länge)

**Akzessorische Organe:** Leber, Gallenblase, Pankreas (liegen außerhalb GIT, produzieren Sekrete)

---

## Kerninhalt

### 1. Mund und Ösophagus

**Mund:**
- **Mechanische Verdauung:** Zähne (Kauen, Zerkleinerung)
- **Chemische Verdauung:** Speichel (~1,5 L/Tag, Speicheldrüsen)
  - **α-Amylase** (Ptyalin): Stärke → Maltose (beginnt Kohlenhydrat-Verdauung)
  - **Lysozym:** Antibakteriell
  - **Mukus:** Gleitfähigkeit
  - **Bikarbonat:** pH ~7 (puffert)

**Ösophagus (Speiseröhre, ~25 cm):**
- **Peristaltik:** Wellenförmige Muskelkontraktion (glatte Muskulatur) → Transport (Bolus ~5–10 s bis Magen)
- **Oberer Ösophagussphinkter (UÖS):** Quergestreift, willkürlich
- **Unterer Ösophagussphinkter (UÖS, Kardia):** Glatt, unwillkürlich, verhindert Reflux
- **Klinisch:** GERD (Gastroösophageale Refluxkrankheit) → Sodbrennen, Barrett-Ösophagus (Metaplasie → Adenokarzinom-Risiko)

---

### 2. ⭐ Magen

**Anatomie:** Fundus, Corpus, Antrum, Pylorus (Sphinkter → Duodenum)

**Magenwand (4 Schichten):** Mukosa → Submukosa → Muscularis (3 Schichten: längs, zirkulär, schräg) → Serosa

**Magenzellen:**

| Zelltyp | Lokalisation | Sekretion | Funktion |
|---------|--------------|-----------|----------|
| **Belegzellen (Parietalzellen)** | Corpus, Fundus | **HCl** (Magensäure, pH ~1–2), **Intrinsic Factor** | HCl: Denaturierung von Proteinen, Aktivierung Pepsinogen → Pepsin, bakterizid; IF: Vitamin B₁₂-Bindung → Resorption im Ileum |
| **Hauptzellen** | Corpus, Fundus | **Pepsinogen** (Proenzym) | Pepsinogen + HCl → **Pepsin** (Protease) → Proteine → Peptide |
| **Nebenzellen** | Überall | **Mukus, Bikarbonat** | Schleimschicht schützt vor HCl-Schädigung |
| **G-Zellen** | Antrum | **Gastrin** (Hormon) | Gastrin → stimuliert Belegzellen → HCl ↑ (nach Nahrungsaufnahme) |
| **D-Zellen** | Antrum | **Somatostatin** | Hemmt Gastrin, HCl (negative Rückkopplung bei pH <3) |

⭐ **HCl-Sekretion (Belegzellen):**
1. **Vagus-Stimulation** (Parasympathikus, Acetylcholin, M₃) → HCl ↑
2. **Gastrin** (G-Zellen) → HCl ↑
3. **Histamin** (ECL-Zellen, enterochromaffin-like) → H₂-Rezeptoren → HCl ↑
4. **Protonenpumpe (H⁺/K⁺-ATPase):** Pumpt H⁺ ins Magenlumen (HCl-Bildung)

**Klinisch:**
- **Gastritis:** Entzündung (H. pylori, NSAR)
- **Ulcus ventriculi/duodeni:** Geschwür (H. pylori, NSAR, Stress), Schmerz, Blutung
- **Therapie:** PPI (Protonenpumpenhemmer, z. B. Omeprazol) → H⁺/K⁺-ATPase ↓ → HCl ↓
- **H₂-Blocker** (z. B. Ranitidin) → Histamin-Rezeptor blockiert → HCl ↓
- **Perniziöse Anämie:** Autoimmun-Zerstörung Belegzellen → IF ↓ → Vitamin B₁₂-Mangel → megaloblastäre Anämie

---

### 3. ⭐ Dünndarm (Hauptort der Resorption)

**Anatomie:** Duodenum (~25 cm) → Jejunum (~2,5 m) → Ileum (~3,5 m), Gesamtlänge ~6 m

**Oberflächenvergrößerung (~200 m²):** Kerckring-Falten + Villi (Zotten) + Mikrovilli (Bürstensaum)

#### 3a. Duodenum (Zwölffingerdarm)

**Papilla Vateri:** Mündung von Ductus choledochus (Gallengang) + Ductus pancreaticus (Pankreasgang)

**Sekrete:**
1. **Pankreassekret** (~2 L/Tag):
   - **Bikarbonat (HCO₃⁻):** pH ~8 → neutralisiert Magensäure (Sekretin-Stimulation)
   - **Enzyme:**
     - **Trypsin, Chymotrypsin:** Proteasen (Trypsinogen → Trypsin durch Enterokinase der Dünndarmmukosa)
     - **Pankreas-Amylase:** Stärke → Maltose
     - **Pankreas-Lipase:** Triglyzeride → Fettsäuren + Monoglyzeride (benötigt Gallensalze für Emulgierung)
     - **Phospholipase A₂, Elastase**
2. **Galle** (Leber, ~1 L/Tag, in Gallenblase konzentriert):
   - **Gallensalze** (Cholsäure, Chenodesoxycholsäure): Emulgierung von Fetten → Mizellen → Resorption ↑
   - **Bilirubin** (konjugiert): Abbauprodukt von Hämoglobin
   - **Cholesterin, Phospholipide**

⭐ **Enterohepatischer Kreislauf:** Gallensalze → Ileum resorbiert (~95%) → Pfortader → Leber → recycelt (5% fäkal ausgeschieden)

#### 3b. Jejunum/Ileum (Hauptresorptionsort)

**Resorption:**

| Nährstoff | Enzyme/Mechanismus | Resorption |
|-----------|-------------------|------------|
| **Kohlenhydrate** | α-Amylase (Speichel, Pankreas) → Maltose; **Bürstensaum-Enzyme** (Maltase, Sucrase, Laktase) → Glukose, Fructose, Galaktose | **SGLT1** (Na⁺-Glukose-Symport, aktiv), **GLUT5** (Fructose, passiv) |
| **Proteine** | Pepsin (Magen) → Peptide; Trypsin, Chymotrypsin (Pankreas) → Peptide; **Peptidasen** (Bürstensaum) → Aminosäuren | **Peptid-Transporter** (PepT1, Di-/Tripeptide), **Aminosäure-Transporter** (Na⁺-gekoppelt) |
| **Fette** | Pankreas-Lipase + **Gallensalze** (Emulgierung) → Fettsäuren + Monoglyzeride → **Mizellen** | **Passive Diffusion** ins Enterozyt → Chylomikronen (Triglyzeride + Apolipoprotein B-48) → **Lymphe** (Ductus thoracicus) |
| **Vitamine** | Fettlöslich (A, D, E, K): Mizellen → passive Diffusion | Lymphe |
| | Wasserlöslich (B, C): | Aktiver Transport |
| | **Vitamin B₁₂:** IF-B₁₂-Komplex (Magen) | **Rezeptor-vermittelte Endozytose (Ileum)** |
| **Wasser** | ~9 L/Tag aufgenommen (Nahrung 2 L + Sekrete 7 L), ~8,5 L resorbiert (Dünndarm), ~0,4 L Dickdarm | **Osmotischer Gradient** (folgt NaCl, Glukose) |
| **Elektrolyte** | **Na⁺:** SGLT1 (mit Glukose), NHE (Na⁺/H⁺-Austauscher) | Aktiv/sekundär-aktiv |
| | **Cl⁻:** Passiv (folgt Na⁺) oder aktiv | |
| | **Fe²⁺:** DMT1 (Duodenum), Ferroportin (Export) | Reguliert durch Hepcidin (Leber) |
| | **Ca²⁺:** | Vitamin D-abhängig (Duodenum, Calbindin) |

⭐ **Klinisch:**
- **Laktoseintoleranz:** Laktase-Mangel (primär [genetisch] oder sekundär [Schädigung]) → Laktose → Dickdarm → Bakterien fermentieren → Diarrhö, Blähungen
- **Zöliakie:** Autoimmun-Reaktion auf Gluten (Gliadin) → Villusatrophie → Malabsorption (Diarrhö, Gewichtsverlust, Anämie)
- **Morbus Crohn:** Chronisch-entzündliche Darmerkrankung (alle GIT-Abschnitte, v. a. terminales Ileum) → transmurale Entzündung, Fisteln
- **Vitamin-B₁₂-Mangel:** IF-Mangel (Gastrektomie, perniziöse Anämie) oder Ileum-Resektion → megaloblastäre Anämie, neurologische Symptome

---

### 4. Dickdarm (Kolon)

**Anatomie:** Zäkum (Appendix) → Colon ascendens → Colon transversum → Colon descendens → Colon sigmoideum → Rektum (~1,5 m)

**Funktionen:**
1. **Wasser-Resorption:** ~0,4 L/Tag (9 L → Dünndarm 8,5 L → Dickdarm 0,4 L → Stuhl ~0,1–0,2 L)
2. **Elektrolyt-Resorption:** Na⁺, Cl⁻
3. **Bakterielle Fermentation:** Ballaststoffe → kurzkettige Fettsäuren (Butyrat, Propionat, Acetat) → Energiequelle für Kolonozyten, Vitamin K-Synthese (Bakterien)
4. **Stuhlspeicherung**

**Darmflora (Mikrobiom):** ~10¹⁴ Bakterien (Bacteroides, Firmicutes, Actinobacteria)

⭐ **Peristaltik:**
- **Segmentation:** Mischbewegungen (Dünndarm, langsam)
- **Peristaltik:** Propulsion (Dickdarm, 1–2× täglich Mass Movement)
- **Defäkationsreflex:** Rektum-Dehnung → Parasympathikus → innerer Analsphinkter entspannt (glatt, unwillkürlich), äußerer Analsphinkter willkürlich kontrolliert (quergestreift)

**Klinisch:**
- **Diarrhö:** Osmotisch (Malabsorption, Laktoseintoleranz), sekretorisch (Cholera, E. coli), entzündlich (Morbus Crohn, Colitis ulcerosa), motil (IBS)
- **Obstipation:** Motilitätsstörung (slow transit), obstruktiv (Tumor, Adhäsionen)
- **Colitis ulcerosa:** Chronisch-entzündliche Darmerkrankung (nur Kolon, kontinuierlich von Rektum aufsteigend) → Mukosa-Entzündung, blutige Diarrhö
- **Kolorektales Karzinom:** Adenokarzinom (Adenom-Karzinom-Sequenz, APC-Mutation → β-Catenin → Wnt-Signalweg), Vorsorge: Koloskopie (ab 50 Jahre)

---

### 5. ⭐ Leber (Hepar)

**Gewicht:** ~1,5 kg (größte Drüse)

**Anatomie:** Rechter Lappen (größer), linker Lappen; **Leberläppchen** (hexagonal, Zentralvene)

**Blutversorgung (doppelt):**
1. **A. hepatica** (~25%, O₂-reich)
2. **V. portae** (~75%, nährstoffreich aus GIT, O₂-arm)

**Lebersinusoide:** Kapillaren (Hepatozyten, Kupffer-Zellen [Makrophagen])

⭐ **Funktionen:**

| Kategorie | Funktion |
|-----------|----------|
| **Stoffwechsel** | Glukoneogenese, Glykogensynthese/-abbau (Blutzucker-Regulation), Lipogenese, β-Oxidation (Fettsäuren → Ketone bei Hunger), Cholesterin-Synthese, Proteinsynthese (Albumin, Gerinnungsfaktoren I, II, V, VII, IX, X, XI, XII) |
| **Biotransformation** | **Phase I** (Cytochrom P450): Oxidation, Reduktion, Hydrolyse (lipophil → hydrophil); **Phase II:** Konjugation (Glukuronidierung, Sulfatierung, Acetylierung) → wasserlöslich → Exkretion (Galle, Urin) |
| **Gallenproduktion** | ~1 L/Tag: Gallensalze (Fettverdauung), Bilirubin (konjugiert, Hb-Abbau), Cholesterin |
| **Speicherung** | Glykogen, Vitamin A/D/E/K/B₁₂, Fe²⁺/Cu²⁺ |
| **Entgiftung** | Ammoniak (NH₃) → **Harnstoffzyklus** → Harnstoff (weniger toxisch, Niere) |
| **Abbau** | Hormone (Insulin, Steroidhormone), Erythrozyten (Kupffer-Zellen), Medikamente |

⭐ **Bilirubin-Stoffwechsel:**
1. Hb-Abbau (Milz, RES) → **Häm** → Biliverdin → **Bilirubin (unkonjugiert, lipophil)**
2. Bilirubin + **Albumin** → Leber
3. **Glukuronidierung (UGT1A1):** Bilirubin + Glukuronsäure → **Bilirubin-Diglukuronid (konjugiert, wasserlöslich)**
4. Galle → Darm → Bakterien → **Urobilinogen** → **Sterkobilin** (Stuhl, braun) + **Urobilin** (Urin, gelb)

**Klinisch:**
- **Ikterus (Gelbsucht):** Bilirubin ↑ (>2 mg/dL)
  - **Prähepatisch:** Hämolyse → unkonjugiertes Bilirubin ↑
  - **Hepatisch:** Leberzellschaden (Hepatitis, Zirrhose) → beide ↑
  - **Posthepatisch:** Cholestase (Gallenstein, Pankreaskopf-Ca) → konjugiertes Bilirubin ↑, heller Stuhl, dunkler Urin
- **Gilbert-Syndrom:** UGT1A1-Mangel (mild) → unkonjugiertes Bilirubin ↑ (harmlos, bei Stress/Fasten ↑)
- **Leberzirrhose:** Narbenbildung (Alkohol, Hepatitis B/C, NASH) → Pfortaderhochdruck, Aszites, Ösophagusvarizen, Gerinnungsstörung, hepatische Enzephalopathie (NH₃ ↑)
- **Hepatische Enzephalopathie:** NH₃ ↑ (Leber detoxifiziert nicht) → ZNS-Symptome (Verwirrtheit, Asterixis), **Therapie:** Laktulose (NH₃ → NH₄⁺, nicht resorbiert), Rifaximin (Antibiotikum, reduziert NH₃-produzierende Bakterien)

---

### 6. Pankreas

**Anatomie:** Caput (Kopf, C-Form um Duodenum), Corpus, Cauda (Schwanz, nahe Milz)

**Dual-Funktion:**

| Typ | Anteil | Funktion | Sekretion |
|-----|--------|----------|-----------|
| **Exokrin** | ~99% | Verdauung | **Pankreassekret** (Enzyme + Bikarbonat) → Ductus pancreaticus → Duodenum |
| **Endokrin** | ~1% | Blutzucker-Regulation | **Hormone** (Insulin [β-Zellen], Glukagon [α-Zellen], Somatostatin [δ-Zellen]) → Blut |

**Exokrine Enzyme:** Siehe Duodenum (Trypsin, Amylase, Lipase)

**Endokrine Hormone:** Siehe Hormonsystem (Insulin/Glukagon)

**Regulation:**
- **Sekretin** (S-Zellen, Duodenum): pH ↓ (Magensäure) → Pankreas → **Bikarbonat ↑** (neutralisiert)
- **CCK** (Cholezystokinin, I-Zellen, Duodenum): Fett/Protein → Pankreas → **Enzyme ↑**, Gallenblase → **Kontraktion** (Gallenabgabe)

**Klinisch:**
- **Akute Pankreatitis:** Gallensteine, Alkohol → Enzyme aktiviert in Pankreas (statt Darm) → Selbstverdauung → Schmerz (gürtelförmig), Lipase ↑, Amylase ↑
- **Chronische Pankreatitis:** Alkohol → exokrine Insuffizienz (Steatorrhö, Malabsorption) + endokrine Insuffizienz (Diabetes)
- **Pankreaskarzinom:** Duktales Adenokarzinom (Kopf → Ikterus [Gallenstau], Courvoisier-Zeichen [tastbare Gallenblase]), schlechte Prognose

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Magen:** Belegzellen (HCl, IF), Hauptzellen (Pepsinogen → Pepsin), HCl-Regulation (Gastrin ↑, Somatostatin ↓), PPI (Omeprazol)
2. **Pankreas:** Enzyme (Trypsin, Amylase, Lipase), Bikarbonat (Sekretin), Hormone (Insulin/Glukagon)
3. **Dünndarm:** Resorption (SGLT1 [Glukose], DMT1 [Fe²⁺], Vitamin B₁₂ [IF, Ileum]), Gallensalze (Emulgierung, enterohepatischer Kreislauf)
4. **Leber:** Bilirubin-Stoffwechsel (unkonjugiert → konjugiert → Urobilinogen → Sterkobilin/Urobilin), Harnstoffzyklus (NH₃ → Harnstoff), Gerinnungsfaktoren (II, VII, IX, X, Vitamin K)
5. **Dickdarm:** Wasser-Resorption (~0,4 L/Tag), Mikrobiom (Vitamin K, kurzkettige Fettsäuren)

---

## Merksätze

>>>> **Magen-HCl-Regulation:** „Gastrin ↑ HCl (G-Zellen, nach Nahrung), Somatostatin ↓ HCl (D-Zellen, pH <3) – PPI blockiert Protonenpumpe!"
>>>> (Vagus/Gastrin/Histamin → HCl ↑; Somatostatin → HCl ↓)

>>>> **Pankreas-Regulation:** „Sekretin (pH ↓) → Bikarbonat ↑ (neutralisiert), CCK (Fett/Protein) → Enzyme ↑ + Gallenblase kontrahiert!"
>>>> (S-Zellen → Sekretin, I-Zellen → CCK)

>>>> **Dünndarm-Resorption:** „SGLT1 = Glukose (Na⁺-gekoppelt, aktiv), GLUT5 = Fructose (passiv), Fette = Mizellen (Gallensalze) → Chylomikronen → Lymphe!"
>>>> (Kohlenhydrate/Proteine → Pfortader, Fette → Lymphe)

>>>> **Bilirubin:** „Hb → Bilirubin (unkonjugiert, lipophil) → Leber (Glukuronidierung) → konjugiert (wasserlöslich) → Darm → Sterkobilin (Stuhl braun) + Urobilin (Urin gelb)!"
>>>> (Ikterus: prähepatisch [Hämolyse, unkonjugiert ↑], hepatisch [Leber, beide ↑], posthepatisch [Cholestase, konjugiert ↑, heller Stuhl])

---

**Navigation:**
← [Zurück: Bio Kap 3 UK08 – Atmungssystem](Bio_Kap3_UK08_Atmungssystem.md) | [Weiter: Bio Kap 3 UK10 – Niere und Harnsystem](Bio_Kap3_UK10_Niere_Harnsystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über die Magensekretion ist korrekt?",
          options: [
          "Belegzellen produzieren Pepsinogen und Mukus.",
          "Hauptzellen produzieren HCl und Intrinsic Factor.",
          "Belegzellen produzieren HCl und Intrinsic Factor. HCl aktiviert Pepsinogen zu Pepsin (Protease).",
          "Gastrin hemmt die HCl-Sekretion durch negative Rückkopplung.",
          "PPI (Protonenpumpenhemmer) wie Omeprazol aktivieren die H⁺/K⁺-ATPase."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Belegzellen (Parietalzellen)** im Corpus/Fundus produzieren:\n- **HCl** (Magensäure, pH ~1–2) via H⁺/K⁺-ATPase (Protonenpumpe)\n- **Intrinsic Factor (IF)**: Bindet Vitamin B₁₂ → Resorption im Ileum\n\n**HCl-Funktionen:** Denaturierung von Proteinen, Aktivierung Pepsinogen → **Pepsin**, bakterizid.\n\n**Pepsin:** Protease, spaltet Proteine → Peptide.\n\n**Falsch (A):** **Hauptzellen** (nicht Belegzellen) produzieren **Pepsinogen**. **Nebenzellen** produzieren Mukus.\n\n**Falsch (B):** **Belegzellen** (nicht Hauptzellen) produzieren HCl + IF.\n\n**Falsch (D):** **Gastrin** (G-Zellen, Antrum) **stimuliert** HCl-Sekretion (nicht hemmt). **Somatostatin** (D-Zellen) hemmt HCl bei pH <3.\n\n**Falsch (E):** **PPI** (Omeprazol) **hemmen** (nicht aktivieren) die H⁺/K⁺-ATPase → HCl ↓.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über Pankreasenzyme ist korrekt?",
          options: [
          "Pankreas-Lipase spaltet Proteine, während Trypsin Fette spaltet.",
          "Trypsinogen wird durch Enterokinase der Dünndarmmukosa zu Trypsin aktiviert. Trypsin spaltet Proteine und aktiviert weitere Enzyme wie Chymotrypsinogen.",
          "Pankreas-Amylase spaltet Proteine zu Aminosäuren.",
          "Bikarbonat im Pankreassekret senkt den pH im Duodenum.",
          "CCK (Cholezystokinin) hemmt die Enzym-Sekretion des Pankreas."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Pankreasenzyme** (exokrine Funktion):\n\n**Trypsinogen** (Proenzym) → **Enterokinase** (Dünndarmmukosa) → **Trypsin** (aktiv)\n- **Trypsin:** Protease, spaltet Proteine → Peptide\n- Trypsin aktiviert weitere Enzyme: Chymotrypsinogen → Chymotrypsin, Procarboxypeptidase → Carboxypeptidase\n\n**Andere Enzyme:**\n- **Pankreas-Amylase:** Stärke → Maltose\n- **Pankreas-Lipase:** Triglyzeride → Fettsäuren + Monoglyzeride (benötigt Gallensalze)\n\n**Falsch (A):** **Umgekehrt!** Lipase spaltet **Fette**, Trypsin spaltet **Proteine**.\n\n**Falsch (C):** Pankreas-Amylase spaltet **Kohlenhydrate** (Stärke → Maltose), nicht Proteine.\n\n**Falsch (D):** Bikarbonat **erhöht** (nicht senkt) den pH im Duodenum (pH ~8) → neutralisiert Magensäure (pH ~2).\n\n**Falsch (E):** **CCK** (I-Zellen, Duodenum) **stimuliert** (nicht hemmt) Enzym-Sekretion. Trigger: Fett/Protein.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Nährstoffresorption im Dünndarm ist korrekt?",
          options: [
          "Glukose wird durch passive Diffusion resorbiert.",
          "Glukose wird durch SGLT1 (Na⁺-Glukose-Symport, sekundär-aktiv) resorbiert. Fette werden als Mizellen (mit Gallensalzen) aufgenommen, zu Chylomikronen verpackt und über die Lymphe transportiert.",
          "Fette werden direkt als Triglyzeride über die Pfortader zur Leber transportiert.",
          "Vitamin B₁₂ wird im Duodenum ohne Intrinsic Factor resorbiert.",
          "Laktase-Mangel führt zu verbesserter Laktose-Resorption."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Resorption im Dünndarm**:\n\n**Glukose:**\n- **SGLT1** (Na⁺-Glukose-Symport): **Sekundär-aktiv** (nutzt Na⁺-Gradient)\n- **GLUT2** (basolateral): Passive Diffusion ins Blut\n- **Fructose:** GLUT5 (passiv)\n\n**Fette:**\n1. Pankreas-Lipase + **Gallensalze** (Emulgierung) → Fettsäuren + Monoglyzeride\n2. **Mizellen** (mit Gallensalzen) → passive Diffusion ins Enterozyt\n3. Enterozyt: Re-Veresterung → **Chylomikronen** (Triglyzeride + Apolipoprotein B-48)\n4. **Lymphe** (Ductus thoracicus) → Blut (nicht Pfortader!)\n\n**Falsch (A):** Glukose wird **aktiv** (SGLT1, sekundär-aktiv), nicht passiv resorbiert.\n\n**Falsch (C):** Fette gehen über **Lymphe** (nicht Pfortader). Kohlenhydrate/Proteine gehen über Pfortader.\n\n**Falsch (D):** Vitamin B₁₂ wird im **Ileum** (nicht Duodenum) resorbiert und benötigt **Intrinsic Factor** (Magen) → IF-B₁₂-Komplex → Rezeptor-vermittelte Endozytose.\n\n**Falsch (E):** Laktase-Mangel → Laktose **nicht** resorbiert → Dickdarm → Bakterien fermentieren → Diarrhö, Blähungen.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Leberfunktion ist korrekt?",
          options: [
          "Die Leber wird nur durch die A. hepatica mit Blut versorgt.",
          "Die Leber hat eine doppelte Blutversorgung: A. hepatica (~25%, O₂-reich) und V. portae (~75%, nährstoffreich aus GIT). Sie produziert Gerinnungsfaktoren (II, VII, IX, X sind Vitamin-K-abhängig) und wandelt Ammoniak über den Harnstoffzyklus in Harnstoff um.",
          "Bilirubin wird in der Leber oxidiert und direkt über die Niere ausgeschieden.",
          "Gilbert-Syndrom ist eine schwere Lebererkrankung mit hoher Mortalität.",
          "Albumin wird im Pankreas produziert."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Leber-Funktionen**:\n\n**Blutversorgung (doppelt):**\n1. **A. hepatica** (~25%): O₂-reich\n2. **V. portae** (~75%): Nährstoffreich aus GIT (Dünndarm, Dickdarm, Milz, Pankreas, Magen)\n\n**Proteinsynthese:**\n- **Albumin** (wichtigstes Plasmaprotein, onkotischer Druck)\n- **Gerinnungsfaktoren:** I (Fibrinogen), II, V, VII, IX, X, XI, XII\n  - **Vitamin-K-abhängig:** **II, VII, IX, X** (\"1972\")\n\n**Harnstoffzyklus:**\n- **Ammoniak (NH₃)** (toxisch, aus Aminosäure-Abbau) → **Harnstoff** (weniger toxisch) → Niere → Urin\n- **Hepatische Enzephalopathie:** Leberzirrhose → NH₃ ↑ → ZNS-Symptome (Verwirrtheit, Asterixis)\n\n**Falsch (A):** Leber hat **doppelte** Blutversorgung (A. hepatica + V. portae).\n\n**Falsch (C):** Bilirubin wird **glukuronidiert** (nicht oxidiert) → konjugiert (wasserlöslich) → Galle → Darm → Urobilinogen → Sterkobilin (Stuhl) + Urobilin (Urin). **Nicht** direkt über Niere.\n\n**Falsch (D):** **Gilbert-Syndrom:** Milde UGT1A1-Mangel → unkonjugiertes Bilirubin ↑ → **harmlos** (keine Behandlung nötig, bei Stress/Fasten ↑).\n\n**Falsch (E):** **Albumin** wird in der **Leber** (nicht Pankreas) produziert.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den Bilirubin-Stoffwechsel ist korrekt?",
          options: [
          "Konjugiertes Bilirubin ist lipophil und wird an Albumin gebunden transportiert.",
          "Hämoglobin wird zu Biliverdin und dann zu unkonjugiertem Bilirubin (lipophil) abgebaut. In der Leber wird es durch Glukuronidierung zu konjugiertem Bilirubin (wasserlöslich). Im Darm wird es zu Urobilinogen umgewandelt, das als Sterkobilin (Stuhl) und Urobilin (Urin) ausgeschieden wird.",
          "Posthepatischer Ikterus (Cholestase) führt zu erhöhtem unkonjugierten Bilirubin und dunklem Stuhl.",
          "Prähepatischer Ikterus entsteht durch Gallensteine.",
          "Sterkobilin färbt den Urin gelb."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Bilirubin-Stoffwechsel**:\n\n1. **Hb-Abbau** (Milz, RES) → **Häm** → Biliverdin → **Bilirubin (unkonjugiert, lipophil)**\n2. Bilirubin + **Albumin** (Transport im Blut) → Leber\n3. **Glukuronidierung** (UGT1A1): Bilirubin + Glukuronsäure → **Bilirubin-Diglukuronid (konjugiert, wasserlöslich)**\n4. **Galle** → Darm → Bakterien → **Urobilinogen**\n5. **Sterkobilin** (Stuhl, braun) + **Urobilin** (Urin, gelb)\n\n**Ikterus-Typen:**\n- **Prähepatisch:** Hämolyse → **unkonjugiert ↑**\n- **Hepatisch:** Leberschaden → beide ↑\n- **Posthepatisch:** Cholestase (Gallensteine, Pankreaskopf-Ca) → **konjugiert ↑**, **heller Stuhl** (kein Sterkobilin), **dunkler Urin** (Bilirubin)\n\n**Falsch (A):** **Unkonjugiertes** Bilirubin (nicht konjugiertes) ist lipophil und wird an Albumin gebunden. **Konjugiertes** Bilirubin ist wasserlöslich.\n\n**Falsch (C):** Posthepatischer Ikterus → **konjugiertes** (nicht unkonjugiertes) Bilirubin ↑, **heller** (nicht dunkler) Stuhl (kein Sterkobilin).\n\n**Falsch (D):** Prähepatischer Ikterus = **Hämolyse** (nicht Gallensteine). Gallensteine = **posthepatisch**.\n\n**Falsch (E):** **Urobilin** (nicht Sterkobilin) färbt Urin gelb. **Sterkobilin** färbt Stuhl braun.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über die Dickdarm-Funktion ist korrekt?",
          options: [
          "Der Dickdarm resorbiert täglich etwa 9 Liter Wasser.",
          "Der Dickdarm resorbiert ca. 0,4 L Wasser pro Tag. Die Darmflora fermentiert Ballaststoffe zu kurzkettigen Fettsäuren (Butyrat, Propionat, Acetat) und synthetisiert Vitamin K.",
          "Colitis ulcerosa ist eine transmurale Entzündung, die alle GIT-Abschnitte betrifft.",
          "Morbus Crohn betrifft nur das Kolon und beginnt kontinuierlich vom Rektum.",
          "Die Darmflora besteht aus etwa 10⁶ Bakterien."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Dickdarm-Funktionen**:\n\n**Wasser-Resorption:**\n- **Dünndarm:** ~8,5 L/Tag resorbiert (von 9 L total)\n- **Dickdarm:** ~**0,4 L/Tag** resorbiert\n- **Stuhl:** ~0,1–0,2 L/Tag\n\n**Darmflora (Mikrobiom):**\n- ~10¹⁴ Bakterien (Bacteroides, Firmicutes)\n- **Funktionen:**\n  1. **Fermentation** von Ballaststoffen → **kurzkettige Fettsäuren** (SCFA: Butyrat, Propionat, Acetat) → Energiequelle für Kolonozyten\n  2. **Vitamin K-Synthese**\n  3. **Immunmodulation**, Barriere gegen Pathogene\n\n**Falsch (A):** Dickdarm resorbiert ~0,4 L (nicht 9 L). **Dünndarm** resorbiert ~8,5 L.\n\n**Falsch (C):** **Morbus Crohn** (nicht Colitis ulcerosa) ist transmural und kann alle GIT-Abschnitte betreffen (v. a. terminales Ileum). **Colitis ulcerosa:** Nur **Mukosa** (Schleimhaut), nur **Kolon**, kontinuierlich von **Rektum** aufsteigend.\n\n**Falsch (D):** **Colitis ulcerosa** (nicht Morbus Crohn) betrifft nur Kolon und beginnt vom Rektum. **Morbus Crohn:** Alle GIT-Abschnitte, diskontinuierlich (Skip Lesions), transmural.\n\n**Falsch (E):** Darmflora: ~**10¹⁴** Bakterien (nicht 10⁶), 10× mehr als menschliche Zellen.",
          difficulty: 2,
          tags: [],
          hints: [
            "Dickdarm vs. Dünndarm: Wer resorbiert wie viel Wasser? Was macht die Darmflora mit Ballaststoffen?",
            "Dünndarm: ~8,5 L Wasser/Tag. Dickdarm: ~0,4 L. Darmflora fermentiert Ballaststoffe → SCFA (Butyrat, Propionat, Acetat) = Energiequelle für Kolonozyten + Vitamin-K-Synthese."
          ],
        }
      ],
      merksätze: [
        "**GI-Anatomie & Wandschichten:** GIT: Mund → Speiseröhre → Magen → Dünndarm (Duodenum, Jejunum, Ileum) → Dickdarm (Colon) → Rektum → Anus. Wandschichten: Mukosa (Epithel, Lamina propria, Muscularis mucosae) → Submukosa → Muscularis propria (Längs + Zirkular) → Serosa/Adventitia. Plexus myentericus (Auerbach, zwischen Muskelschichten) + Plexus submucosus (Meissner).",
        "**Magen-Sekretion:** Belegzellen (Parietalzellen): HCl (H⁺/K⁺-ATPase, Protonenpumpe) + Intrinsic Factor (Vit-B₁₂-Resorption im Ileum). Hauptzellen: Pepsinogen → Pepsin (Protease, durch HCl aktiviert). Nebenzellen: Mukus + HCO₃⁻ (Schutz). G-Zellen (Antrum): Gastrin → HCl ↑. D-Zellen: Somatostatin → HCl ↓ (neg. RK). PPI (Omeprazol): H⁺/K⁺-ATPase ↓.",
        "**Pankreas-Enzyme:** Exokrines Pankreas: Acinuszellen → Pankreassaft (CCK-stimuliert, ~1,5 L/Tag, pH ~8 [HCO₃⁻]). Enzyme: Amylase (Stärke → Dextrine → Maltose), Trypsinogen → Trypsin (Enterokinase/Enteropeptidase aktiviert), Chymotrypsinogen → Chymotrypsin, Elastase, Phospholipase A₂, Lipase (Fette → Fettsäuren + Glycerol, Gallensalze benötigt). Proteine nur als inaktive Proenzyme (Zymogene) gespeichert.",
        "**Galle & Gallensalze:** Leber produziert ~500–1000 mL Galle/Tag. Primäre Gallensalze: Cholat, Chenodesoxycholat (aus Cholesterin). Bakterien: Deoxycholat, Litocholat (sekundär). Gallensalze: Mizellen-Bildung → Fettemulgierung → Fett-Resorption. Enterohepatischer Kreislauf: Ileum → Resorption → Pfortader → Leber (~95% recycelt). Cholestase: Gallensalze ↑ im Blut → Pruritus.",
        "**Dünndarm-Resorption:** Oberflächenvergrößerung: Kerckring-Falten + Villi + Mikrovilli = ~200 m². Glukose: SGLT1 (Na⁺-gekoppelt, sekundär-aktiv). Fructose: GLUT5 (passiv). Aminosäuren: Di-/Tripeptid-Transporter + Aminosäure-Carrier. Fette: Mizellen → Diffusion → Chylomikronen → Lymphe (nicht Pfortader!). Vit. B₁₂ + IF → Ileum. Eisen (Fe²⁺, DMT1, Duodenum).",
        "**Leberfunktionen:** Doppelte Blutversorgung: A. hepatica (~25%, O₂) + V. portae (~75%, Nährstoffe aus GIT). Funktionen: Proteinsynthese (Albumin, Gerinnungsfaktoren [I, II, V, VII, IX, X, XI, XII], CRP). Biotransformation/Entgiftung (Phase I: CYP450-Oxidation; Phase II: Glukuronidierung, Sulfatierung). Harnstoffzyklus (NH₃ → Harnstoff). Galleproduktion. Glykogen-Speicher. Leberzirrhose → Albumin ↓, Gerinnungsfaktoren ↓, Portale Hypertension.",
        "**Bilirubin-Stoffwechsel:** Hb-Abbau (Milz) → Biliverdin → Bilirubin unkonjugiert (lipophil, albumin-gebunden) → Leber (UGT1A1: Glukuronidierung → konjugiert, wasserlöslich) → Galle → Darm → Urobilinogen → Sterkobilin (Stuhl braun) + Urobilin (Urin gelb). Ikterus: Prähepatisch (Hämolyse, unkj ↑), Hepatisch (Leberschaden, beide ↑), Posthepatisch (Cholestase, konj ↑, heller Stuhl, dunkler Urin).",
        "**IBD (Chronisch-entzündliche Darmerkrankungen):** Morbus Crohn: Alle GIT-Abschnitte (v. a. terminales Ileum), diskontinuierlich (Skip Lesions), transmural → Fisteln, Stenosen, Abszesse. Mesenteriale Lymphadenopathie, Pflastersteinrelief. Colitis ulcerosa: Nur Kolon, kontinuierlich von Rektum aufsteigend, nur Mukosa → Blut-Schleimabgang. Erhöhtes Kolorektal-Ca-Risiko. Therapie: Aminosalicylate (CU), Immunsuppressiva, Biologika (Anti-TNF, Anti-Integrin).",
        "**Pankreatitis:** Akut: Aktivierung von Pankreasenzymen im Pankreas selbst → Selbstverdauung → Entzündung (Lipase ↑ im Blut, Amylase ↑). Ursachen: Gallensteinen (häufigste) + Alkohol (2-häufigste). Ranson-Kriterien (Schwere). Therapie: Nulldiät, Flüssigkeit, Analgesie. Chronische Pankreatitis: Fibrose → exokrine Insuffizienz (Malabsorption, Steatorrhö) + endokrine Insuffizienz (Diabetes). Hauptursache: Alkohol.",
        "**Magen-Darm-Hormonsystem:** Gastrin (G-Zellen Antrum): HCl ↑. Sekretin (S-Zellen Duodenum, bei saurem Chymus): HCO₃⁻ aus Pankreas ↑, HCl ↓. CCK (I-Zellen Duodenum/Jejunum, bei Fett + Protein): Pankreasenzyme ↑, Gallenblase kontrahiert, Pylorus-Sphinkter ↑. GIP (Duodenum/Jejunum): Insulin-Sekretion ↑ (Inkretineffekt, fettabhängig). GLP-1 (L-Zellen Ileum/Colon): Insulin ↑ (Inkretineffekt, glucoseabhängig), Glukagon ↓, Magenentleerung ↓, Sättigung ↑. GLP-1-Analoga (Semaglutid): Diabetes + Adipositas-Therapie."
      ],
      klinischerBezug: "Morbus Crohn und Colitis ulcerosa: chronische Erkrankungen mit erheblicher Morbidität. Morbus Crohn: Anti-TNF-α (Infliximab, Adalimumab) und Vedolizumab (Anti-Integrin) effektiv bei refraktären Fällen. Colitis ulcerosa: erhöhtes Kolorektalkarzinom-Risiko (Surveillanz-Koloskopie). Leberzirrhose: Endzustand vieler Lebererkrankungen (alkoholisch, viral [Hepatitis B/C], NASH). Komplikationen: Portale Hypertension (Ösophagusvarizen → Blutungsrisiko), Aszites, hepatische Enzephalopathie, hepatozelluläres Karzinom. MELD-Score für Transplantationsindikation. Pankreatitis: Schwere akute Form (nekrotisierende) → Intensivstation (Sepsis, MOV). Helicobacter pylori: Ulcus-Ursache (90% Ulcus duodeni, 70% Ulcus ventriculi); Eradikation mit Triple-Therapie (PPI + Clarithromycin + Amoxicillin). Kolorektales Karzinom: zweithäufigste krebsbedingte Todesursache; Prävention durch Vorsorge-Koloskopie ab 50 J."
    },
    {
      id: 'bio-3-10',
      title: "Harnsystem",
      content: `# Harnsystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 15 Minuten
**Stichwortliste-Abdeckung:** 10/10 Stichwörter

---

## Einleitung

Das **Harnsystem** (Niere + ableitende Harnwege) reguliert:
1. **Wasser-/Elektrolythaushalt** (Na⁺, K⁺, Ca²⁺, Cl⁻)
2. **Säure-Basen-Haushalt** (pH ~7,4)
3. **Blutdruck** (Renin-Angiotensin-Aldosteron-System, RAAS)
4. **Exkretion** von Stoffwechselprodukten (Harnstoff, Kreatinin, Harnsäure) + Fremdstoffen

**Organe:** 2 Nieren, 2 Harnleiter (Ureter), Harnblase, Harnröhre (Urethra)

---

## Kerninhalt

### 1. ⭐ Niere (Anatomie und Nephron)

**Makroskopie:**
- **Lage:** Retroperitoneal, Höhe Th12–L3
- **Gewicht:** ~150 g/Niere
- **Schnitt:** Rinde (Cortex, außen) + Mark (Medulla, innen, Pyramiden) + Nierenbecken (Pelvis renalis)

**Blutversorgung:**
- **A. renalis** (aus Aorta) → ~20–25% des Herzzeitvolumens (~1,2 L/min)
- **Vas afferens** (zuführend) → Glomerulus → **Vas efferens** (abführend) → Peritubulärkapillaren

⭐ **Nephron (funktionelle Einheit, ~1 Mio./Niere):**

| Struktur | Lokalisation | Funktion |
|----------|--------------|----------|
| **Glomerulus** (Kapillarknäuel) | Rinde | **Filtration** (~180 L/Tag Primärharn) |
| **Bowman-Kapsel** | Rinde | Auffangbehälter für Filtrat |
| **Proximaler Tubulus** | Rinde | **Rückresorption** (65%): Na⁺, Glukose, Aminosäuren, HCO₃⁻, H₂O (obligat) |
| **Henle-Schleife** | Mark (absteigend + aufsteigend) | **Gegenstromprinzip**: Harnkonzentrierung, osmotischer Gradient |
| **Distaler Tubulus** | Rinde | **Rückresorption** (variabel): Na⁺ (Aldosteron), Ca²⁺ (PTH), **Sekretion**: H⁺, K⁺ |
| **Sammelrohr** | Rinde → Mark | **H₂O-Rückresorption** (ADH-gesteuert), Harnkonzentrierung |

---

### 2. ⭐ Harnbildung (Filtration, Rückresorption, Sekretion)

**3 Prozesse:**

#### 2a. Glomeruläre Filtration (GFR ~120 mL/min, ~180 L/Tag)

**Filtration im Glomerulus:**

**Filtrationsbarriere (3 Schichten):**
1. **Fenestriertes Endothel** (Poren ~70 nm, lässt Wasser + kleine Moleküle durch)
2. **Glomeruläre Basalmembran** (negativ geladen, blockiert große/negative Proteine)
3. **Podozyten** (Epithelzellen, Fußfortsätze, Schlitzmembran)

**Filtrat = Plasmaultra**filtrat (ohne Zellen, fast ohne Proteine, Molekulargewicht <69 kDa)

⭐ **GFR-Regulation:**
- **Autoregulation:** Myogener Mechanismus (Gefäßkonstriktion bei Blutdruck ↑) + tubulogloomeruläres Feedback (Macula densa [distaler Tubulus] misst NaCl → Vas afferens-Konstriktion)
- **Sympathikus:** Vasokonstriktion → GFR ↓ (bei Schock, Blutdruck ↓)
- **RAAS:** Angiotensin II → Vasokonstriktion Vas efferens → GFR ↑ (bei Hypotonie)

**Klinisch:**
- **Glomerulonephritis:** Entzündung (postinfektiös, IgA-Nephropathie, Goodpasture) → Proteinurie, Hämaturie
- **Nephrotisches Syndrom:** Proteinurie >3,5 g/Tag, Hypoalbuminämie, Ödeme, Hyperlipoproteinämie
- **Kreatinin-Clearance:** GFR-Marker (Kreatinin wird filtriert, nicht resorbiert)

#### 2b. ⭐ Tubuläre Rückresorption

**Proximaler Tubulus (65% Rückresorption):**

| Substanz | Mechanismus | Transporter |
|----------|-------------|-------------|
| **Na⁺** | Sekundär-aktiv | Na⁺/Glukose-Symport (SGLT2), Na⁺/Aminosäure-Symport, Na⁺/H⁺-Austauscher (NHE3) |
| **Glukose** | Sekundär-aktiv (mit Na⁺) | **SGLT2** (proximal) → GLUT2 (basolateral) → Blut; **100% Rückresorption** (normal!) |
| **Aminosäuren** | Sekundär-aktiv (mit Na⁺) | Verschiedene Transporter → **100% Rückresorption** |
| **HCO₃⁻** | | ~80–90% resorbiert (pH-Regulation) |
| **H₂O** | Osmose (folgt Na⁺) | Aquaporin-1 (konstitutiv, **immer offen**) |
| **Cl⁻** | Passiv (folgt Na⁺) | |

⭐ **Nierenschwelle Glukose:** ~180 mg/dL (Blutzucker); darüber → Glukosurie (Diabetes mellitus)

**Henle-Schleife (Gegenstromprinzip, 20% Rückresorption):**

**Absteigender Schenkel:**
- **Wasserdurchlässig** (Aquaporin-1), **undurchlässig für NaCl**
- Wasser diffundiert raus → Filtrat wird **hyperton** (bis ~1.200 mOsm/L im Mark)

**Aufsteigender Schenkel:**
- **Undurchlässig für Wasser**, **NaCl-Rückresorption** (Na⁺/K⁺/2Cl⁻-Symporter, NKCC2)
- Filtrat wird **hypoton** (~100 mOsm/L)

⭐ **Gegenstromprinzip:** Erzeugt **osmotischen Gradienten** (Rinde ~300 mOsm/L → Mark ~1.200 mOsm/L) → ermöglicht Harnkonzentrierung

**Distaler Tubulus + Sammelrohr (10–15% Rückresorption, variabel):**

| Substanz | Regulation | Mechanismus |
|----------|------------|-------------|
| **Na⁺** | **Aldosteron** ↑ → Rückresorption ↑ | ENaC (Epithelial Sodium Channel) |
| **K⁺** | **Aldosteron** ↑ → Sekretion ↑ | ROMK (K⁺-Kanal) |
| **Ca²⁺** | **PTH** ↑ → Rückresorption ↑ | TRPV5, Calbindin-D |
| **H₂O** | **ADH** ↑ → Rückresorption ↑ | **Aquaporin-2** (ADH-gesteuert) |

⭐ **ADH-Wirkung (Sammelrohr):**
- **ADH** (Hypophyse, bei Hypovolämie/Hyperosmolalität) → V₂-Rezeptor → cAMP → Aquaporin-2-Insertion (Membran) → **H₂O-Durchlässigkeit ↑** → Wasser resorbiert (folgt osmotischem Gradienten) → **konzentrierter Harn** (~1.200 mOsm/L)
- **Ohne ADH:** Aquaporin-2 im Zytoplasma → **undurchlässig** → **verdünnter Harn** (~50 mOsm/L)

**Klinisch:**
- **Diabetes insipidus:** ADH-Mangel (zentral, Hypophyse) oder ADH-Resistenz (nephrogen, Rezeptor-Defekt) → Polyurie (>3 L/Tag), Polydipsie
- **SIADH** (Syndrom inadäquater ADH-Sekretion): ADH ↑ (Tumor, Medikamente) → H₂O-Retention → Hyponatriämie
- **SGLT2-Hemmer** (z. B. Empagliflozin): Blockiert SGLT2 → Glukosurie → Diabetes-Therapie

#### 2c. Tubuläre Sekretion

**Aktive Sekretion (proximaler + distaler Tubulus):**
- **H⁺** (Säure-Basen-Regulation, NH₄⁺-Bildung)
- **K⁺** (Aldosteron ↑ → K⁺-Sekretion ↑)
- **Kreatinin** (teilweise, GFR-Marker)
- **Organische Anionen/Kationen** (Medikamente, z. B. Penicillin)

---

### 3. ⭐ Hormonelle Regulation

#### 3a. RAAS (Renin-Angiotensin-Aldosteron-System)

**Trigger:** Blutdruck ↓, Na⁺ ↓, Sympathikus ↑

**Kaskade:**
1. **Renin** (juxtaglomeruläre Zellen, Niere) → Angiotensinogen (Leber) → **Angiotensin I**
2. **ACE** (Angiotensin-Converting-Enzyme, Lunge) → **Angiotensin II**
3. **Angiotensin II** (potentes Vasokonstriktor):
   - **Vasokonstriktion** (v. a. Vas efferens) → TPR ↑, GFR ↑ → Blutdruck ↑
   - **Aldosteron ↑** (Nebenniere) → Na⁺-Rückresorption ↑ (distaler Tubulus, ENaC) → H₂O ↑ → Volumen ↑ → Blutdruck ↑
   - **ADH ↑** (Hypophyse) → H₂O-Rückresorption ↑
   - **Durst ↑** (Hypothalamus)

⭐ **Therapeutisch:**
- **ACE-Hemmer** (z. B. Ramipril): ACE ↓ → Angiotensin II ↓ → Vasodilatation, Aldosteron ↓ → Blutdruck ↓
- **AT₁-Blocker** (z. B. Losartan): Blockiert Angiotensin-II-Rezeptor → Vasodilatation → Blutdruck ↓
- **Aldosteron-Antagonisten** (z. B. Spironolacton): Blockiert Aldosteron → Na⁺-Retention ↓ → Blutdruck ↓, K⁺-Spiegel ↑

#### 3b. ADH (Antidiuretisches Hormon, Vasopressin)

**Trigger:** Osmolalität ↑ (Hypothalamus-Osmor ezeptoren), Volumen ↓ (Barorezeptoren)

**Wirkung:** Siehe oben (Aquaporin-2 → H₂O-Rückresorption ↑)

#### 3c. ANP (Atriales Natriuretisches Peptid)

**Trigger:** Volumen ↑ (Vorhof-Dehnung)

**Wirkung:**
- **Vasodilatation** → Blutdruck ↓
- **Na⁺-Ausscheidung ↑** (hemmt Na⁺-Rückresorption) → H₂O ↑ → Volumen ↓
- **Renin ↓, Aldosteron ↓**

---

## 📌 Prüfungsfokus

**Für die MedAT-Prüfung besonders wichtig:**

1. **Nephron:** Glomerulus (Filtration), proximaler Tubulus (65%, SGLT2 [Glukose], NHE3 [Na⁺/H⁺]), Henle-Schleife (Gegenstromprinzip), distaler Tubulus/Sammelrohr (Aldosteron [Na⁺/K⁺], ADH [Aquaporin-2, H₂O])
2. **GFR:** ~120 mL/min, ~180 L/Tag filtriert, ~1,5 L/Tag Urin, Kreatinin-Clearance (Marker)
3. **Glukose:** 100% resorbiert (SGLT2 proximal), Nierenschwelle ~180 mg/dL
4. **ADH:** V₂-Rezeptor → Aquaporin-2 → H₂O-Rückresorption ↑ → konzentrierter Harn, Diabetes insipidus (ADH ↓/Resistenz)
5. **RAAS:** Renin → Angiotensin II (Vasokonstriktion, Aldosteron ↑, ADH ↑) → Blutdruck ↑, ACE-Hemmer/AT₁-Blocker (Therapie)
6. **Aldosteron:** Na⁺-Rückresorption ↑ (ENaC), K⁺-Sekretion ↑ (ROMK), Hyperaldosteronismus → Hypertonie + Hypokaliämie

---

## Merksätze

>>>> **Nephron-Segmente:** „Glomerulus = Filtration (180 L/Tag), proximaler Tubulus = 65% (SGLT2 [Glukose], Na⁺, H₂O), Henle = Gegenstromprinzip (osmotischer Gradient), distaler + Sammelrohr = Aldosteron (Na⁺/K⁺), ADH (Aquaporin-2, H₂O)!"

>>>> **ADH-Wirkung:** „ADH → V₂-Rezeptor → Aquaporin-2 an Membran → H₂O rein → konzentrierter Harn. Diabetes insipidus = ADH ↓ → Polyurie (>3 L/Tag)!"

>>>> **RAAS-Kaskade:** „Renin → Angiotensin II (ACE) → Vasokonstriktion + Aldosteron ↑ (Na⁺/H₂O ↑) + ADH ↑ → Blutdruck ↑. ACE-Hemmer blockiert!"

>>>> **Gegenstromprinzip:** „Abstei gend = H₂O raus (hyperton), Aufsteigend = NaCl raus (hypoton) → osmotischer Gradient (300 → 1.200 mOsm/L) → Harnkonzentrierung!"

---

**Navigation:**
← [Zurück: Bio Kap 3 UK09 – Verdauungssystem](Bio_Kap3_UK09_Verdauungssystem.md) | [Weiter: Bio Kap 3 UK11 – Fortpflanzung](Bio_Kap3_UK11_Fortpflanzung.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über die glomeruläre Filtration ist korrekt?",
          options: [
          "Die GFR beträgt ~12 mL/min und produziert ~18 L Primärharn pro Tag.",
          "Die GFR beträgt ~120 mL/min und produziert ~180 L Primärharn pro Tag. Die Filtrationsbarriere besteht aus fenestriertem Endothel, glomerulärer Basalmembran und Podozyten.",
          "Proteine mit Molekulargewicht >69 kDa passieren die Filtrationsbarriere problemlos.",
          "Kreatinin wird filtriert und vollständig rückresorbi ert.",
          "Bei Glomerulonephritis ist die Fil trationsbarriere intakt."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **GFR** (glomeruläre Filtrationsrate):\n- ~**120 mL/min** (~7,2 L/h, ~**180 L/Tag** Primärharn)\n- Davon ~1,5 L/Tag Urin (99% resorbiert!)\n\n**Filtrationsbarriere (3 Schichten):**\n1. **Fenestriertes Endothel** (Poren ~70 nm)\n2. **Glomeruläre Basalmembran** (negativ geladen, blockiert große/negative Proteine)\n3. **Podozyten** (Fußfortsätze, Schlitzmembran)\n\n**Filtrat:** Plasmaultrafiltrat (ohne Zellen, fast ohne Proteine <69 kDa).\n\n**Falsch (A):** GFR ~120 mL/min (nicht 12), ~180 L/Tag (nicht 18).\n\n**Falsch (C):** Proteine >69 kDa werden **nicht** filtriert (zu groß). Normalerweise <0,1 g/Tag Protein im Urin.\n\n**Falsch (D):** Kreatinin wird filtriert, aber **nicht resorbiert** (teilweise sezerniert) → GFR-Marker (Kreatinin-Clearance).\n\n**Falsch (E):** Bei Glomerulonephritis ist die Barriere **geschädigt** → Proteinurie, Hämaturie.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über den proximalen Tubulus ist korrekt?",
          options: [
          "Der proximale Tubulus resorbiert nur 10% des Filtrats.",
          "Im proximalen Tubulus werden ~65% des filtrierten Na⁺, Glukose (100% via SGLT2) und Aminosäuren (100%) resorbiert. Wasser folgt osmotisch über Aquaporin-1.",
          "Glukose wird im proximalen Tubulus aktiv sezerniert.",
          "Die Nierenschwelle für Glukose beträgt ~50 mg/dL.",
          "SGLT2-Hemmer fördern die Glukose-Rückresorption."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Proximaler Tubulus** (größter Rückresorber, ~65%):\n\n**Substanzen:**\n- **Na⁺:** Sekundär-aktiv (SGLT2 [mit Glukose], NHE3 [Na⁺/H⁺-Austauscher])\n- **Glukose:** **100% Rückresorption** (normal!) via **SGLT2** (luminal, mit Na⁺) → GLUT2 (basolateral) → Blut\n- **Aminosäuren:** **100% Rückresorption** (Na⁺-gekoppelt)\n- **H₂O:** Osmose (folgt Na⁺), **Aquaporin-1** (konstitutiv, immer offen)\n- **HCO₃⁻:** ~80–90% (pH-Regulation)\n\n**Falsch (A):** Proximaler Tubulus resorbiert ~**65%** (nicht 10%) des Filtrats.\n\n**Falsch (C):** Glukose wird **resorbiert** (100%, nicht sezerniert). Bei Blutzucker <180 mg/dL → 100% Rückresorption, >180 mg/dL → Glukosurie (Diabetes).\n\n**Falsch (D):** **Nierenschwelle** für Glukose: ~**180 mg/dL** (nicht 50). Darüber → SGLT2 gesättigt → Glukosurie.\n\n**Falsch (E):** **SGLT2-Hemmer** (Empagliflozin, Dapagliflozin) **blockieren** SGLT2 → Glukose-Rückresorption ↓ → Glukosurie → Blutzucker ↓ (Diabetes-Therapie).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über das Gegenstromprinzip in der Henle-Schleife ist korrekt?",
          options: [
          "Der absteigende Schenkel ist wasserdicht und resorbiert NaCl.",
          "Der absteigende Schenkel ist wasserdurchlässig (Aquaporin-1), Wasser diffundiert raus → Filtrat wird hyperton (~1.200 mOsm/L). Der aufsteigende Schenkel resorbiert NaCl (NKCC2), ist wasserdicht → Filtrat wird hypoton (~100 mOsm/L). Dies erzeugt einen osmotischen Gradienten (Rinde 300 → Mark 1.200 mOsm/L).",
          "Der aufsteigende Schenkel ist wasserdurchlässig und resorbiert Wasser.",
          "Das Gegenstromprinzip ist für die Glukose-Rückresorption verantwortlich.",
          "Die Henle-Schleife resorbiert 80% des Filtrats."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Gegenstromprinzip** (Henle-Schleife, ~20% Rückresorption):\n\n**Absteigender Schenkel:**\n- **Wasserdurchlässig** (Aquaporin-1)\n- **NaCl-undurchlässig**\n- **Wasser** diffundiert raus (osmotischer Gradient) → Filtrat wird **hyperton** (konzentriert, bis ~1.200 mOsm/L im Mark)\n\n**Aufsteigender Schenkel:**\n- **Wasserundurchlässig** (keine Aquaporine!)\n- **NaCl-Rückresorption** (Na⁺/K⁺/2Cl⁻-Symporter, **NKCC2**)\n- **NaCl** diffundiert raus → Filtrat wird **hypoton** (verdünnt, ~100 mOsm/L)\n\n**Ergebnis:** Osmotischer Gradient (Rinde ~300 mOsm/L → Mark ~1.200 mOsm/L) → ermöglicht **Harnkonzentrierung** im Sammelrohr (ADH-abhängig).\n\n**Falsch (A):** Absteigend = **wasserdurchlässig** (nicht wasserdicht), resorbiert **kein NaCl**.\n\n**Falsch (C):** Aufsteigend = **wasserundurchlässig** (nicht wasserdurchlässig), resorbiert **NaCl** (nicht Wasser).\n\n**Falsch (D):** Gegenstromprinzip = **Harnkonzentrierung** (osmotischer Gradient), nicht Glukose-Rückresorption (proximaler Tubulus, SGLT2).\n\n**Falsch (E):** Henle-Schleife: ~20% (nicht 80%). **Proximaler Tubulus:** ~65%.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über ADH (Antidiuretisches Hormon) ist korrekt?",
          options: [
          "ADH wird bei niedriger Osmolalität und hohem Blutvolumen freigesetzt.",
          "ADH bindet an V₂-Rezeptoren im Sammelrohr, führt zur Insertion von Aquaporin-2 in die Membran und erhöht die Wasserdurchlässigkeit → konzentrierter Harn (~1.200 mOsm/L). Bei Diabetes insipidus (ADH-Mangel) → Polyurie.",
          "ADH vermindert die Wasser-Rückresorption und führt zu konzentriertem Harn.",
          "Aquaporin-1 im proximalen Tubulus ist ADH-gesteuert.",
          "SIADH (Syndrom inadäquater ADH-Sekretion) führt zu Hypernatriämie."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **ADH** (Vasopressin, Hypophysenhinterlappen):\n\n**Trigger:**\n- **Osmolalität ↑** (>295 mOsm/kg, Hypothalamus-Osmorezeptoren)\n- **Volumen ↓** (Hypovolämie, Barorezeptoren)\n\n**Wirkung (Sammelrohr):**\n1. ADH → **V₂-Rezeptor** (basolateral)\n2. cAMP ↑ → **Aquaporin-2-Insertion** (luminal)\n3. **Wasserdurchlässigkeit ↑** → Wasser folgt osmotischem Gradienten (Mark ~1.200 mOsm/L)\n4. **Konzentrierter Harn** (~1.200 mOsm/L, Volumen ↓)\n\n**Ohne ADH:** Aquaporin-2 im Zytoplasma → wasserundurchlässig → **verdünnter Harn** (~50 mOsm/L, Polyurie).\n\n**Diabetes insipidus:**\n- **Zentral:** ADH-Mangel (Hypophyse) → Polyurie (>3 L/Tag), Polydipsie\n- **Nephrogen:** ADH-Resistenz (V₂-Rezeptor-Defekt) → Polyurie\n- **Therapie:** Desmopressin (synthetisches ADH, zentral)\n\n**Falsch (A):** ADH wird bei **hoher Osmolalität** (nicht niedriger) und **niedrigem Volumen** (nicht hohem) freigesetzt.\n\n**Falsch (C):** ADH **erhöht** (nicht vermindert) Wasser-Rückresorption.\n\n**Falsch (D):** **Aquaporin-1** (proximal, Henle absteigend) ist **konstitutiv** (immer offen, nicht ADH-gesteuert). **Aquaporin-2** (Sammelrohr) ist ADH-gesteuert.\n\n**Falsch (E):** **SIADH** → ADH ↑ → H₂O-Retention → **Hyponatriämie** (nicht Hypernatriämie, Verdünnungseffekt).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über das Renin-Angiotensin-Aldosteron-System (RAAS) ist korrekt?",
          options: [
          "Renin wird in der Leber produziert und spaltet Angiotensinogen.",
          "Angiotensin II führt zu Vasodilatation und senkt den Blutdruck.",
          "Renin (juxtaglomeruläre Zellen, Niere) spaltet Angiotensinogen → Angiotensin I. ACE (Lunge) wandelt es zu Angiotensin II um, das Vasokonstriktion, Aldosteron-Freisetzung (Na⁺-Retention) und ADH-Freisetzung bewirkt → Blutdruck steigt.",
          "ACE-Hemmer (z. B. Ramipril) verstärken die Angiotensin-II-Bildung.",
          "Aldosteron fördert die K⁺-Rückresorption und Na⁺-Sekretion."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **RAAS-Kaskade**:\n\n**Trigger:** Blutdruck ↓, Na⁺ ↓, Sympathikus ↑\n\n**Ablauf:**\n1. **Renin** (juxtaglomeruläre Zellen, Niere) → Angiotensinogen (Leber) → **Angiotensin I**\n2. **ACE** (Angiotensin-Converting-Enzyme, Lunge) → **Angiotensin II**\n3. **Angiotensin II** (potentester Vasokonstriktor):\n   - **Vasokonstriktion** (v. a. Vas efferens) → TPR ↑ → Blutdruck ↑\n   - **Aldosteron ↑** (Nebenniere) → distaler Tubulus: Na⁺-Rückresorption ↑ (ENaC), K⁺-Sekretion ↑ → H₂O ↑ → Volumen ↑ → Blutdruck ↑\n   - **ADH ↑** (Hypophyse) → Sammelrohr: H₂O-Rückresorption ↑\n   - **Durst ↑** (Hypothalamus)\n\n**Therapeutisch:**\n- **ACE-Hemmer** (Ramipril, Enalapril) → Angiotensin II ↓ → Vasodilatation, Aldosteron ↓ → Blutdruck ↓\n- **AT₁-Blocker** (Losartan, Valsartan) → blockiert Angiotensin-II-Rezeptor → Blutdruck ↓\n\n**Falsch (A):** **Renin** wird in **juxtaglomerulären Zellen** (Niere, nicht Leber) produziert. **Angiotensinogen** wird in der Leber produziert.\n\n**Falsch (B):** Angiotensin II → **Vasokonstriktion** (nicht Vasodilatation) → Blutdruck **↑** (nicht ↓).\n\n**Falsch (D):** **ACE-Hemmer** **blockieren** ACE → Angiotensin II ↓ (nicht ↑).\n\n**Falsch (E):** Aldosteron → **Na⁺-Rückresorption** (nicht Sekretion), **K⁺-Sekretion** (nicht Rückresorption) → Hyperaldosteronismus: Hypertonie + **Hypokaliämie**.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Ein Patient mit Hyperaldosteronismus zeigt Hypertonie und Hypokaliämie. Welche Aussage über die zugrunde liegende Pathophysiologie ist korrekt?",
          options: [
          "Aldosteron hemmt die Na⁺-Rückresorption und fördert die K⁺-Rückresorption.",
          "Aldosteron fördert die Na⁺-Rückresorption (ENaC) und K⁺-Sekretion (ROMK) im distalen Tubulus/Sammelrohr. Bei Hyperaldosteronismus → Na⁺/H₂O-Retention → Hypertonie, K⁺-Verlust → Hypokaliämie.",
          "Aldosteron-Antagonisten (z. B. Spironolacton) verstärken die Aldosteron-Wirkung.",
          "Hyperaldosteronismus führt zu Hyponatriämie und Hyperkaliämie.",
          "Aldosteron wird im Sammelrohr produziert."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Aldosteron** (Mineralokortikoid, Nebenniere, Zona glomerulosa):\n\n**Wirkung (distaler Tubulus + Sammelrohr, Hauptzellen):**\n1. **Na⁺-Rückresorption ↑** via **ENaC** (Epithelial Sodium Channel, luminal)\n2. **K⁺-Sekretion ↑** via **ROMK** (K⁺-Kanal, luminal)\n3. **H⁺-Sekretion ↑** (Säure-Basen-Regulation)\n\n**Hyperaldosteronismus (primär: Adenom [Conn-Syndrom], sekundär: RAAS ↑):**\n- Na⁺-Retention → **H₂O-Retention** → Volumen ↑ → **Hypertonie**\n- K⁺-Verlust → **Hypokaliämie** (Muskelschwäche, Arrhythmien, metabolische Alkalose)\n\n**Hypoaldosteronismus (z. B. Morbus Addison, NNR-Insuffizienz):**\n- Na⁺-Verlust → **Hyponatriämie**, Hypovolämie, **Hypotonie**\n- K⁺-Retention → **Hyperkaliämie**\n\n**Therapeutisch:**\n- **Aldosteron-Antagonisten** (Spironolacton, Eplerenon) → ENaC ↓ → Na⁺-Retention ↓ → Blutdruck ↓, **K⁺-sparend** (Hyperkaliämie-Risiko!)\n\n**Falsch (A):** Aldosteron **fördert** (nicht hemmt) Na⁺-Rückresorption, **fördert K⁺-Sekretion** (nicht Rückresorption).\n\n**Falsch (C):** Aldosteron-Antagonisten **blockieren** (nicht verstärken) Aldosteron-Rezeptoren.\n\n**Falsch (D):** Hyperaldosteronismus → **Hypernatriämie** (nicht Hypo-), **Hypokaliämie** (nicht Hyper-).\n\n**Falsch (E):** Aldosteron wird in der **Nebenniere** (Zona glomerulosa, nicht Sammelrohr) produziert.",
          difficulty: 3,
          tags: [],
        }
      ],
      merksätze: [
        "**Nephron-Anatomie:** Glomerulus (Filtrationsapparat) → Bowman-Kapsel → proximaler Tubulus (PT) → Henle-Schleife (absteigende + aufsteigende Schenkel) → distaler Tubulus (DT) → Sammelrohr (SD). GFR ~120 mL/min → ~180 L Primärharn/Tag → ~1,5 L Urin (99% resorbiert!). Filtrationsbarriere: fenestriertes Endothel + GBM (negativ geladen) + Podozyten (Schlitzmembran).",
        "**Tubuläre Resorption & Sekretion:** PT: 65% Na⁺/H₂O, 100% Glukose (SGLT2), 100% Aminosäuren, HCO₃⁻-Resorption (NHE3). Henle-Schleife: absteigende (H₂O, AQP1), aufsteigende (NaCl, NKCC2, kein H₂O → Gegenstromprinzip). DT: NaCl (NCCT, Thiazid-sensitive), K⁺-Sekretion, Ca²⁺-Resorption (PTH). Sammelrohr: H₂O (ADH/AQP2), Na⁺ (ENaC, Aldosteron), K⁺-Sekretion (ROMK). Kreatinin: filtriert + sezerniert → GFR-Marker.",
        "**Harnkonzentrierung (Gegenstromprinzip):** Absteigende Henle-Schleife: H₂O-Resorption (AQP1, osmotischer Gradient ↑). Aufsteigende Schleife: NaCl aktiv raus (NKCC2), H₂O-impermeabel → osmotischer Gradient im Mark (300–1200 mOsm/L). Sammelrohr: ADH → AQP2-Insertion → H₂O folgt osmotischem Gradienten → Harnkonzentrierung (bis ~1200 mOsm/L). SIADH: ADH ↑ → H₂O-Retention → Hyponatriämie. Diabetes insipidus: ADH-Mangel/Resistenz → Polyurie, verdünnter Urin.",
        "**RAAS & Blutdruckregulation:** Trigger: Blutdruck ↓, Na⁺ ↓, Sympathikus ↑ → Renin (JG-Zellen) → Angiotensinogen (Leber) → Angiotensin I → ACE (Lunge) → Angiotensin II → Vasokonstriktion + Aldosteron ↑ + ADH ↑ → Na⁺/H₂O-Retention → Blutdruck ↑. ACE-Hemmer (Ramipril): Ang II ↓ (+ Bradykinin ↑ → Husten-NW). AT₁-Blocker (Losartan): kein Bradykinin → kein Husten.",
        "**Akutes Nierenversagen (AKI):** Prärenal: Hypovolämie, Hypotonie → GFR ↓ (reversibel bei Volumenersatz). Renal: Glomerulonephritis, akute Tubulusnekrose (Ischämie, Nephrotoxine: Aminoglykoside, Kontrastmittel, NSAR). Postrenal: Obstruktion (Prostata, Urolithiasis). Labor: Kreatinin ↑, GFR ↓, Harnstoff ↑, Oligurie/Anurie. Oligo-/nicht-oliguarisch. Therapie: Ursache beseitigen, Volumen, ggf. Nierenersatztherapie (Dialyse).",
        "**Chronisches Nierenversagen (CKD):** Stadien I–V (GFR-basiert): V = terminale Niereninsuffizienz (GFR <15 mL/min → Dialyse/Transplantation). Ursachen: Diabetische Nephropathie (häufigste), Hypertensive Nephropathie, Glomerulonephritis. Folgen: Anämie (EPO ↓), renale Hypertonie, metabolische Azidose, Hyperkalzämie, renale Osteodystrophie (Vitamin D-Aktivierung ↓ → Ca²⁺ ↓ → PTH ↑ → Knochenresorption).",
        "**Glomerulonephritis:** Nephritisches Syndrom: Hämaturie, Proteinurie <3,5 g/Tag, Hypertonie, Ödem, Oligurie. Ursache: IgA-Nephropathie (häufigste GN, Berger-Erkrankung, nach Infekten), Post-Streptokokken-GN (Typ-III-HS), Goodpasture (Anti-GBM). Nephrotisches Syndrom: Proteinurie >3,5 g/Tag → Hypoalbuminämie → Ödeme, Hyperlipidämie, Lipidurle. Ursachen: Minimal-Change (Kinder, häufigste), membranöse GN (Erwachsene, Malignom).",
        "**Harnwegsinfektion (HWI):** Unkomplizierte HWI (Frauen, nur Blase = Zystitis): Dysurie, Pollakisurie, Hämaturie. Häufigster Erreger: E. coli (80%). Therapie: Nitrofurantoin, Fosfomycin, Trimethoprim. Komplizierte HWI (Männer, Pyelonephritis, anatomische Anomalien): Therapie: Fluorchinolone, Cephalosporine. Urosepsis: Antibiotika i.v. + Urinstauung beseitigen. Prophylaxe bei rezidivierender HWI: Cranberry, niedrigdosierte Antibiotika.",
        "**Säure-Basen-Regulation der Niere:** Niere reguliert pH über 3 Mechanismen: (1) HCO₃⁻-Rückresorption (PT, NHE3, Carboanhydrase). (2) H⁺-Sekretion (PT, DT: H⁺-ATPase, K⁺/H⁺-ATPase). (3) Ammonium-Bildung (NH₄⁺, Glutamin-Metabolismus im PT). Metabolische Azidose: HCO₃⁻ ↓ (Diarrhö, AKI). Metabolische Alkalose: HCO₃⁻ ↑ (Erbrechen, Aldosteron ↑). Respiratorische Azidose: CO₂ ↑ (COPD). Respiratorische Alkalose: CO₂ ↓ (Hyperventilation)."
      ],
      klinischerBezug: "Chronische Nierenerkrankung (CKD): betrifft ~10% der Weltbevölkerung; häufigste Ursachen: diabetische Nephropathie (Kimmels tiel-Wilson-Läsion) und hypertensive Nephropathie. Frühdiagnostik durch Urin-Albumin-Kreatinin-Quotient (UACR) und eGFR entscheidend. Dialyse (Hämodialyse 3×/Woche, Peritonealdialyse, CRRT auf Intensivstation) bei terminaler Niereninsuffizienz. Nierentransplantation = beste Therapie (5-Jahres-Überleben ~80%). Akutes Nierenversagen (AKI) auf Intensivstation: häufig durch Sepsis und Nephrotoxine (Kontrastmittel → Kontrastmittel-NW; Aminoglykoside → proximale Tubulus-Schädigung). Urolithiasis: Kalziumoxalat (häufigste, 75%), Harnsäure (bei Gicht, Hyperurikämie), Struvit (Harnwegsinfekte). Kolikanfall: lösbarend (NSAIDs, α-Blocker zur Steinpassage)."
    },
    {
      id: 'bio-3-11',
      title: "Skelettsystem",
      content: `# Skelettsystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** MITTEL
**Geschätzte Lesezeit:** 12 Minuten
**Stichwortliste-Abdeckung:** 8/8 Stichwörter

---

## Einleitung

Das **Skelettsystem** (Skelett + Muskulatur) ermöglicht:
1. **Stützfunktion** (Form, aufrechter Gang)
2. **Schutz** (Schädel → Gehirn, Rippen → Lunge/Herz)
3. **Bewegung** (Muskel-Kontraktion an Hebeln)
4. **Hämatopoese** (Knochenmark → Blutzellen)
5. **Mineralspeicher** (Ca²⁺, PO₄³⁻)

**Komponenten:** Knochen (206 beim Erwachsenen), Knorpel, Gelenke, Bänder, Sehnen, Skelettmuskulatur

---

## Kerninhalt

### 1. ⭐ Knochen

**Knochentypen:**
- **Röhrenknochen** (Femur, Humerus): Lange Knochen, Diaphyse (Schaft) + Epiphyse (Enden)
- **Platte Knochen** (Schädel, Schulterblatt)
- **Kurze Knochen** (Handwurzel, Fußwurzel)
- **Irreguläre Knochen** (Wirbel)

**Knochenstruktur:**

| Schicht | Eigenschaften |
|---------|---------------|
| **Periost** (Knochenhaut) | Außen, Bindegewebe, Osteoblasten (Knochenaufbau), Nerven, Gefäße |
| **Kompakta** (kortikaler Knochen) | Dicht, 80% der Knochenmasse, außen, Osteo ne (Havers-Systeme) |
| **Spongiosa** (trabekulärer Knochen) | Schwammartig, 20%, innen (Epiphysen, Wirbelkörper), rotes Knochenmark (Hämatopoese) |

⭐ **Knochenzellen:**

| Zelltyp | Funktion | Regulation |
|---------|----------|------------|
| **Osteoblasten** | **Knochenaufbau:** Kollagen-Synthese (Typ I), Mineralisierung (Ca²⁺, PO₄³⁻), alkalische Phosphatase ↑ | PTH ↓, Calcitonin ↑, Vitamin D, Östrogen |
| **Osteozyten** | Ruhende Osteoblasten, in Lakunen eingeschlossen, mechanosensorisch | |
| **Osteoklasten** | **Knochenabbau:** Resorption (H⁺, Proteasen), mehrkernig (Monozyten/Makrophagen-Ursprung) | **RANKL** (Osteoblasten) → RANK (Osteoklasten) → Aktivierung; **OPG** (Osteoprotegerin, Osteoblasten) → hemmt RANKL |

⭐ **RANKL/OPG-System:**
- **RANKL** (Receptor Activator of NF-κB Ligand): Osteoblasten → Osteoklasten-Aktivierung → Knochenabbau ↑
- **OPG** (Osteoprotegerin): Löslicher Rezeptor, bindet RANKL → hemmt Osteoklasten → Knochenabbau ↓
- **Gleichgewicht:** RANKL/OPG-Ratio bestimmt Knochenumbau

**Knochenumbau (Remodeling):**
- **10% pro Jahr** erneuert
- **Osteoklasten** resorbieren alte Knochen → **Osteoblasten** bauen neue Knochen auf
- **Regulation:** PTH (Knochenabbau ↑ → Ca²⁺ ↑ im Blut), Vitamin D (Knochenaufbau, Ca²⁺-Absorption ↑ Darm), Calcitonin (Knochenaufbau, Osteoklasten ↓), Östrogen (Osteoklasten ↓)

**Klinisch:**
- **Osteoporose:** Kn ochenmasse ↓ (Osteoblasten < Osteoklasten), Frakturrisiko ↑ (v. a. Wirbelkörper, Femur, Radius)
  - **Ursachen:** Postmenopausal (Östrogen ↓ → Osteoklasten ↑), Alter, Vitamin D/Ca²⁺-Mangel, Immobilisation
  - **Therapie:** Bisphosphonate (hemmen Osteoklasten), Denosumab (Anti-RANKL-Antikörper), Östrogen, Vitamin D/Ca²⁺
- **Rachitis** (Kinder)/Osteomalazie (Erwachsene): Vitamin D-Mangel → Mineralisierung ↓ → weiche Knochen
- **Morbus Paget:** Übermäßiger Knochenumbau → deformierte, vergrößerte Knochen

---

### 2. Knorpel

**Knorpeltypen:**

| Typ | Lokalisation | Eigenschaften |
|-----|--------------|---------------|
| **Hyaliner Knorpel** | Gelenkflächen, Rippen, Trachea, Nasenseptum | Kollagen II, glatt, glänzend, häufigster Typ |
| **Elastischer Knorpel** | Ohrmuschel, Epiglottis | Kollagen II + Elastin → flexibel |
| **Faserknorpel** | Bandscheiben, Meniskus, Symphyse | Kollagen I → zugfest |

**Eigenschaften:**
- **Gefäßfrei** (avaskulär) → Ernährung durch Diffusion
- **Chondrozyten** (Knorpelzellen) in Lakunen
- **Matrix:** Kollagen + Proteoglykane (Wasser-Bindung, Druckresistenz)

**Klinisch:**
- **Arthrose:** Gelenkknorpel-Abbau (Verschleiß) → Schmerz, Bewegungseinschränkung, Gelenkspaltverschmälerung (Röntgen), Osteophyten

---

### 3. ⭐ Gelenke

**Gelenktypen:**

| Typ | Charakteristik | Beispiele |
|-----|----------------|-----------|
| **Synarthrose (unecht)** | Kein Gelenkspalt, unbeweglich/wenig beweglich | Schädelnähte (Fibrös), Symphyse (Faserknorpel) |
| **Diarthrose (echt)** | Gelenkspalt, Gelenkkapsel, Synovia, frei beweglich | Knie, Schulter, Hüfte |

**Diarthrose-Komponenten:**

| Struktur | Funktion |
|----------|----------|
| **Gelenkknorpel** (hyalin) | Glatte Oberfläche, Stoßdämpfer |
| **Gelenkkapsel** (Kapsel fibrosa + Membrana synovialis) | Stabilität + Synovial-Produktion |
| **Synovia** (Gelenkflüssigkeit) | Schmierung, Ernährung des Knorpels (Hyaluronsäure, Proteine) |
| **Bänder** (Ligamente) | Knochen-Knochen-Verbindung, Stabilität, passiv |
| **Sehnen** (Tendons) | Muskel-Knochen-Verbindung, Kraftübertragung |

⭐ **Gelenkformen:**
- **Kugelgelenk** (Schulter, Hüfte): 3 Achsen, größte Beweglichkeit
- **Scharniergelenk** (Knie, Ellenbogen): 1 Achse (Flexion/Extension)
- **Sattelgelenk** (Daumen): 2 Achsen
- **Drehgelenk** (Atlas-Axis): Rotation

**Klinisch:**
- **Arthritis:** Gelenkentzündung (rheumatoide Arthritis [Autoimmun], septische Arthritis [bakteriell])
- **Luxation:** Gelenkauskugelung (Humeruskopf, Patella)
- **Kreuzbandriss:** ACL (anterior cruciate ligament) → Instabilität

---

### 4. Skelettmuskulatur

**Aufbau:** Siehe Bio Kap 2 UK03 (Muskelgewebe) – Sarkomer, Gleitfilamenttheorie, Troponin/Tropomyosin, Ca²⁺-Regulation

**Muskelkontraktion:**
- **Innervation:** Motorische Endplatte (Acetylcholin → Nicotinic-Rezeptor → Depolarisation → Ca²⁺-Freisetzung aus sarkoplasmatischem Retikulum)
- **Energiequellen:** ATP (direkt, ~2 s), Kreatinphosphat (indirekt, ~10 s), Glukose/Glykogen (anaerob → Laktat, aerob → CO₂ + H₂O)

**Muskeltypen:**
- **Slow-Twitch (Typ I):** Oxidativ, ausdauernd, rot (Myoglobin ↑), Posturalmuskeln
- **Fast-Twitch (Typ II):** Glykolytisch, kraftvoll, weiß, Sprinter

**Klinisch:**
- **Muskeldystrophie:** Duchenne (Dystrophin-Defekt, X-chromosomal), Becker (milder)
- **Myasthenia gravis:** Autoantikörper gegen Acetylcholin-Rezeptoren → Muskelschwäche

---

## 📌 Prüfungsfokus

1. **Osteoblasten vs. Osteoklasten:** Osteoblasten = Aufbau (Kollagen I, Mineralisierung), Osteoklasten = Abbau (H⁺, Proteasen, mehrkernig)
2. **RANKL/OPG:** RANKL (Osteoblasten) → Osteoklasten ↑, OPG → hemmt RANKL
3. **Osteoporose:** Knochenabbau > Aufbau, Frakturrisiko ↑, Therapie: Bisphosphonate, Denosumab (Anti-RANKL)
4. **Knorpeltypen:** Hyalin (Gelenke), Elastisch (Ohr), Faser (Bandscheibe)
5. **Gelenke:** Diarthrose (Gelenkspalt, Synovia), Typen: Kugelgelenk (3 Achsen), Scharniergelenk (1 Achse)

---

## Merksätze

>>>> **Osteoblasten/Osteoklasten:** „Osteoblasten bauen (Kollagen I, Ca²⁺), Osteoklasten kauen (Abbau, H⁺, mehrkernig) – RANKL aktiviert Klauen, OPG stoppt!"

>>>> **Knorpeltypen:** „Hyalin = Gelenke (Kollagen II, glatt), Elastisch = Ohr (Elastin, flex), Faser = Bandscheibe (Kollagen I, zugfest)!"

>>>> **Gelenke:** „Kugelgelenk = 3 Achsen (Schulter, Hüfte, frei beweglich), Scharniergelenk = 1 Achse (Knie, Ellenbogen, Flexion/Extension)!"

>>>> **Osteoporose:** „Östrogen ↓ (Menopause) → Osteoklasten ↑ → Knochenabbau → Fraktur-Risiko ↑. Therapie: Bisphosphonate (Osteoklasten ↓), Denosumab (Anti-RANKL)!"

---

**Navigation:**
← [Zurück: Bio Kap 3 UK10 – Harnsystem](Bio_Kap3_UK10_Harnsystem.md) | [Weiter: Bio Kap 3 UK12 – Fortpflanzungssystem](Bio_Kap3_UK12_Fortpflanzungssystem.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über Osteoblasten und Osteoklasten ist korrekt?",
          options: [
          "Osteoblasten sind mehrkernige Zellen, die durch Resorption Knochen abbauen.",
          "Osteoklasten synthetisieren Kollagen Typ I und mineralisieren die Knochenmatrix.",
          "Osteoblasten bauen Knochen auf durch Kollagen-I-Synthese und Mineralisierung (Ca²⁺, PO₄³⁻). Osteoklasten sind mehrkernige Zellen (Monozyten-Ursprung), die durch H⁺ und Proteasen Knochen abbauen.",
          "PTH (Parathormon) stimuliert Osteoblasten und hemmt Osteoklasten.",
          "Alkalische Phosphatase ist ein Marker für Knochenabbau durch Osteoklasten."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Osteoblasten** (Knochenaufbau):\n- **Synthese** von Kollagen Typ I (organische Matrix)\n- **Mineralisierung** mit Ca²⁺ und PO₄³⁻ (anorganische Matrix)\n- **Alkalische Phosphatase ↑** (Marker für Knochenaufbau)\n- **Regulation:** PTH ↓, Calcitonin ↑, Vitamin D, Östrogen\n\n**Osteoklasten** (Knochenabbau):\n- **Mehrkernig** (Fusion von Monozyten/Makrophagen)\n- **Resorption:** H⁺ (Ansäuerung → Mineralauflösung) + Proteasen (Kollagenabbau)\n- **Regulation:** RANKL (von Osteoblasten) → aktiviert Osteoklasten via RANK-Rezeptor\n\n**Falsch (A):** **Osteoklasten** (nicht Osteoblasten) sind mehrkernig und bauen Knochen ab.\n\n**Falsch (B):** **Osteoblasten** (nicht Osteoklasten) synthetisieren Kollagen I und mineralisieren.\n\n**Falsch (D):** PTH **stimuliert indirekt Osteoklasten** (über RANKL ↑ von Osteoblasten) → Knochenabbau → Ca²⁺ ↑ im Blut.\n\n**Falsch (E):** Alkalische Phosphatase ist Marker für **Knochenaufbau** (Osteoblasten), nicht Abbau.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über das RANKL/OPG-System ist korrekt?",
          options: [
          "RANKL wird von Osteoklasten produziert und aktiviert Osteoblasten zum Knochenaufbau.",
          "RANKL (von Osteoblasten) bindet an RANK-Rezeptoren auf Osteoklasten und aktiviert diese zum Knochenabbau. OPG (Osteoprotegerin) ist ein löslicher Rezeptor, der RANKL bindet und hemmt, wodurch Knochenabbau reduziert wird.",
          "OPG (Osteoprotegerin) wird von Osteoklasten produziert und fördert RANKL.",
          "Denosumab ist ein Anti-OPG-Antikörper zur Osteoporose-Therapie.",
          "Die RANKL/OPG-Ratio hat keinen Einfluss auf den Knochenumbau."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **RANKL/OPG-System** reguliert Knochenabbau:\n\n**RANKL** (Receptor Activator of NF-κB Ligand):\n- **Produziert von Osteoblasten** (und Stromazellen)\n- Bindet an **RANK-Rezeptor** auf Osteoklasten\n- **Aktiviert Osteoklasten** → Knochenabbau ↑\n\n**OPG** (Osteoprotegerin):\n- **Löslicher Rezeptor**, produziert von Osteoblasten\n- **Bindet RANKL** → verhindert RANKL-RANK-Interaktion\n- **Hemmt Osteoklasten-Aktivierung** → Knochenabbau ↓\n\n**RANKL/OPG-Ratio** bestimmt Knochenumbau:\n- RANKL/OPG ↑ → Knochenabbau ↑ (z. B. Menopause: Östrogen ↓ → RANKL ↑, OPG ↓)\n- RANKL/OPG ↓ → Knochenaufbau ↑\n\n**Therapeutisch:** **Denosumab** = **Anti-RANKL-Antikörper** → blockiert RANKL → Osteoklasten ↓ → Osteoporose-Therapie\n\n**Falsch (A):** RANKL wird von **Osteoblasten** (nicht Osteoklasten) produziert und aktiviert **Osteoklasten** (nicht Osteoblasten).\n\n**Falsch (C):** OPG wird von **Osteoblasten** produziert und **hemmt** (nicht fördert) RANKL.\n\n**Falsch (D):** Denosumab ist **Anti-RANKL** (nicht Anti-OPG).\n\n**Falsch (E):** RANKL/OPG-Ratio ist **zentral** für Knochenumbau-Regulation.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Osteoporose ist korrekt?",
          options: [
          "Osteoporose entsteht durch Vitamin D-Mangel bei Kindern und führt zu weichen Knochen.",
          "Postmenopausale Osteoporose entsteht durch Östrogen-Mangel, der zu erhöhter Osteoklasten-Aktivität führt. Typische Frakturlokalisationen sind Wirbelkörper, Femur und Radius. Therapie umfasst Bisphosphonate und Denosumab (Anti-RANKL-Antikörper).",
          "Bisphosphonate stimulieren Osteoklasten zur Verbesserung des Knochenabbaus.",
          "Morbus Paget ist eine Form der Osteoporose mit vermindertem Knochenumbau.",
          "Osteoporose betrifft primär junge Männer unter 30 Jahren."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Osteoporose** = Knochenmasse ↓ (Osteoblasten < Osteoklasten), Frakturrisiko ↑\n\n**Ursachen:**\n- **Postmenopausal:** Östrogen ↓ → RANKL ↑, OPG ↓ → **Osteoklasten ↑** → Knochenabbau > Aufbau\n- **Alter:** Knochenumbau ↓, Vitamin D/Ca²⁺-Absorption ↓\n- **Weitere:** Vitamin D/Ca²⁺-Mangel, Immobilisation, Kortikosteroide, Rauchen\n\n**Frakturlokalisationen:**\n- **Wirbelkörper** (Kompressionsfrakturen)\n- **Femur** (proximaler Femur, Schenkelhals)\n- **Radius** (distaler Radius, Colles-Fraktur)\n\n**Therapie:**\n- **Bisphosphonate** (z. B. Alendronat): Hemmen Osteoklasten → Knochenabbau ↓\n- **Denosumab:** Anti-RANKL-Antikörper → blockiert RANKL → Osteoklasten ↓\n- **Weitere:** Östrogen (postmenopausal), Vitamin D/Ca²⁺-Supplementation\n\n**Falsch (A):** Beschreibt **Rachitis** (Kinder) bzw. **Osteomalazie** (Erwachsene) = Vitamin D-Mangel → Mineralisierung ↓ → weiche Knochen (nicht Osteoporose).\n\n**Falsch (C):** Bisphosphonate **hemmen** (nicht stimulieren) Osteoklasten.\n\n**Falsch (D):** **Morbus Paget:** **Übermäßiger** (nicht verminderter) Knochenumbau → deformierte, vergrößerte Knochen.\n\n**Falsch (E):** Osteoporose betrifft v. a. **postmenopausale Frauen** und **ältere Erwachsene** (>50 Jahre).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Knorpeltypen ist korrekt?",
          options: [
          "Hyaliner Knorpel enthält Kollagen Typ I und ist hauptsächlich in Bandscheiben zu finden.",
          "Elastischer Knorpel enthält Kollagen Typ II plus Elastin und ist in Ohrmuschel und Epiglottis lokalisiert. Er ist flexibel durch den Elastin-Anteil.",
          "Faserknorpel enthält Kollagen Typ II und ist der häufigste Knorpeltyp im Körper.",
          "Knorpelgewebe ist stark vaskularisiert und wird über Blutgefäße ernährt.",
          "Arthrose ist eine Entzündung des Gelenkknorpels durch Bakterien."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Knorpeltypen:**\n\n| Typ | Kollagen | Lokalisation | Eigenschaften |\n|-----|----------|--------------|---------------|\n| **Hyaliner Knorpel** | **Kollagen II** | Gelenkflächen, Rippen, Trachea, Nasenseptum | Glatt, glänzend, **häufigster Typ** |\n| **Elastischer Knorpel** | **Kollagen II + Elastin** | **Ohrmuschel, Epiglottis** | **Flexibel** (durch Elastin) |\n| **Faserknorpel** | **Kollagen I** | Bandscheiben, Meniskus, Symphyse | **Zugfest** (durch Kollagen I) |\n\n**Knorpel-Eigenschaften:**\n- **Gefäßfrei** (avaskulär) → Ernährung durch **Diffusion** (aus Perichondrium oder Synovia)\n- **Chondrozyten** (Knorpelzellen) in Lakunen\n- **Matrix:** Kollagen + Proteoglykane (Wasser-Bindung, Druckresistenz)\n\n**Klinisch:** **Arthrose** = Gelenkknorpel-**Abbau** (Verschleiß, nicht Entzündung) → Schmerz, Bewegungseinschränkung, Gelenkspaltverschmälerung (Röntgen), Osteophyten (Knochenanbauten)\n\n**Falsch (A):** Hyaliner Knorpel enthält **Kollagen II** (nicht I) und ist in **Gelenken** (nicht Bandscheiben). Bandscheiben = **Faserknorpel** (Kollagen I).\n\n**Falsch (C):** Faserknorpel enthält **Kollagen I** (nicht II). **Häufigster Typ** = **hyaliner Knorpel**.\n\n**Falsch (D):** Knorpel ist **gefäßfrei** (avaskulär) → Ernährung durch Diffusion (nicht Blutgefäße).\n\n**Falsch (E):** Arthrose = **Verschleiß** (degenerativ, nicht bakteriell). Bakterielle Gelenkentzündung = **septische Arthritis**.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Gelenke ist korrekt?",
          options: [
          "Synarthrosen sind echte Gelenke mit Gelenkspalt und hoher Beweglichkeit.",
          "Diarthrosen (echte Gelenke) haben einen Gelenkspalt, Gelenkkapsel und Synovia (Gelenkflüssigkeit). Kugelgelenke (z. B. Schulter, Hüfte) erlauben Bewegung in 3 Achsen, Scharniergelenke (z. B. Knie, Ellenbogen) nur in 1 Achse (Flexion/Extension).",
          "Die Synovia (Gelenkflüssigkeit) wird von Chondrozyten produziert.",
          "Bänder verbinden Muskel mit Knochen und übertragen Muskelkraft.",
          "Das Kniegelenk ist ein Kugelgelenk mit 3 Bewegungsachsen."
          ],
          correctIndex: 1,
          explanation: "**Richtig (B):** **Gelenktypen:**\n\n**Synarthrose (unecht):**\n- **Kein Gelenkspalt**\n- **Unbeweglich/wenig beweglich**\n- Beispiele: Schädelnähte (fibrös), Symphyse (Faserknorpel)\n\n**Diarthrose (echt):**\n- **Gelenkspalt**, **Gelenkkapsel**, **Synovia**\n- **Frei beweglich**\n- Komponenten: Gelenkknorpel (hyalin), Gelenkkapsel (Kapsel fibrosa + Membrana synovialis), Synovia (Schmierung, Ernährung), Bänder (Stabilität)\n\n**Gelenkformen:**\n- **Kugelgelenk** (Schulter, Hüfte): **3 Achsen**, größte Beweglichkeit\n- **Scharniergelenk** (Knie, Ellenbogen): **1 Achse** (Flexion/Extension)\n- **Sattelgelenk** (Daumen): 2 Achsen\n- **Drehgelenk** (Atlas-Axis): Rotation\n\n**Synovia:** Gelenkflüssigkeit, produziert von **Membrana synovialis** (nicht Chondrozyten), enthält Hyaluronsäure + Proteine → Schmierung + Ernährung des Knorpels\n\n**Falsch (A):** **Diarthrosen** (nicht Synarthrosen) sind echte Gelenke mit Gelenkspalt und hoher Beweglichkeit. Synarthrosen = unecht, kein Gelenkspalt, kaum beweglich.\n\n**Falsch (C):** Synovia wird von **Membrana synovialis** (Gelenkkapsel-Innenschicht) produziert, nicht von Chondrozyten.\n\n**Falsch (D):** **Sehnen** (nicht Bänder) verbinden Muskel mit Knochen. **Bänder** verbinden Knochen mit Knochen (Stabilität).\n\n**Falsch (E):** Knie = **Scharniergelenk** (1 Achse: Flexion/Extension), nicht Kugelgelenk.",
          difficulty: 1,
          tags: [],
          hints: [
            "Was ist der Unterschied zwischen Synarthrose und Diarthrose? Welche Gelenkform erlaubt Bewegung in 3 Ebenen?",
            "Synarthrose: kein Gelenkspalt, unbeweglich (Schädelnähte). Diarthrose: Gelenkspalt + Synovia + Kapsel = echt beweglich. Kugelgelenk (Schulter, Hüfte) = 3 Achsen; Scharniergelenk (Knie) = 1 Achse."
          ],
        }
      ],
      merksätze: [
        "**Knochen-Aufbau & Funktion:** 206 Knochen im Erwachsenen. Kompakta (kortikaler Knochen, 80%, außen, Havers-Systeme/Osteone) + Spongiosa (20%, innen, trabekulär, rotes Knochenmark = Hämatopoese). Periost (Außenschicht, Gefäße + Nerven) + Endost (innen, Stammzellen). Knochen: Kollagen I (30%, organisch, Flexibilität) + Hydroxyapatit [Ca₅(PO₄)₃OH] (70%, anorganisch, Härte). Gesamtlänge: Epiphyse + Epiphysenfuge + Diaphyse.",
        "**Osteoblasten vs. Osteoklasten:** Osteoblasten (Knochenaufbau): Kollagen-I-Synthese, Mineralisierung (Ca²⁺, PO₄³⁻), Alkalische Phosphatase ↑ (Marker). Produzieren RANKL (aktiviert Osteoklasten) + OPG (hemmt RANKL → Osteoklasten ↓). Osteoklasten (Knochenabbau): mehrkernig (aus Monozyten/Makrophagen-Fusion), RANK (Rezeptor für RANKL), H⁺ + Proteasen (Resorption). Remodeling: 10%/Jahr erneuert.",
        "**Hormonelle Knochenregulation:** PTH (Nebenschilddrüse): Ca²⁺ ↑ (Knochenabbau ↑ via Osteoklasten, renale Ca²⁺-Rückresorption ↑, Vitamin-D-Aktivierung ↑). Calcitonin (Schilddrüsen-C-Zellen): Ca²⁺ ↓ (Osteoklasten ↓). Vitamin D (Calcitriol, 1,25-OH₂D₃, Niere aktiviert): Ca²⁺ + PO₄-Resorption Darm ↑. Östrogen (Menopause ↓ → Osteoklasten ↑ → Osteoporose).",
        "**Osteoporose & Frakturheilung:** Osteoporose: Knochenmasse ↓, Frakturrisiko ↑ (Wirbelfraktur, proximale Femurfraktur, distaler Radius). Primär: postmenopausal (Typ I) + senile (Typ II). Sekundär: Glukokortikoide, Immobilisation, Hypogonadismus. Diagnostik: DXA (T-Score < -2,5). Therapie: Bisphosphonate (Alendronat, Zoledronat; Osteoklasten-Apoptose), Denosumab (Anti-RANKL), Östrogen. Frakturheilung: Hämatom → Kallus → knöcherne Heilung (6–8 Wochen).",
        "**Knorpeltypen:** Hyalin (Kollagen II, Gelenkflächen, Rippen, Trachea, Nasenseptum; häufigste; avaskulär; Arthrose-anfällig). Elastisch (Kollagen II + Elastin, Ohrmuschel, Epiglottis; flexibel). Faserknorpel (Kollagen I, Bandscheiben, Meniskus, Symphyse; zugfest). Knorpel avaskulär → Ernährung durch Diffusion (aus Synovia oder Perichondrium).",
        "**Gelenke & Arthritis:** Synarthrose: kein Gelenkspalt (Schädelnähte, Symphyse). Diarthrose (echte Gelenke): Gelenkspalt + Kapsel + Synovia. Formen: Kugelgelenk (3 Achsen, Schulter/Hüfte), Scharniergelenk (1 Achse, Knie/Ellenbogen), Sattelgelenk (2 Achsen, Daumen), Drehgelenk (Rotation). Arthrose = degenerativer Knorpelabbau (Schmerz bei Belastung, Röntgen: Gelenkspaltverschmälerung, Osteophyten). Arthritis = Entzündung (RA: Schwellung, Morgensteifigkeit, Anti-CCP).",
        "**Rheumatoide Arthritis (RA) vs. Arthrose:** RA: Synovialitis (Pannusgewebe) → Gelenkzerstörung. Anti-CCP (hochspezifisch), RF (Rheumafaktor). Morgensteifigkeit >1 h. Befällt kleine Gelenke (MCP, PIP). Extraartikulär: Rheumaknoten, Vaskulitis, Lunge, Augen. Therapie: MTX (Basistherapeutikum), Biologika (Anti-TNF: Adalimumab; Anti-IL-6: Tocilizumab). Arthrose: Verschleiß, größere Gelenke (Hüfte, Knie), kein Entzündungsmarker, Schmerzfreiheit morgens, Therapie: Analgesie, Endoprothese.",
        "**Wirbelsäule & Bandscheibenvorfall:** Wirbelsäule: 7 HWK + 12 BWK + 5 LWK + 5 SWK (fused) + 4 SteißWK. Bandscheiben: Nucleus pulposus (Gallertkern, H₂O-reich, Faserknorpel) + Annulus fibrosus (Fasern). Lumbaler Bandscheibenvorfall (L4/L5, L5/S1 häufigste): N. ischiadicus-Kompression → Ischialgie (ausstrahlend ins Bein, Lasègue+), Parese, Reflexausfall. Therapie: konservativ (physio, NSAR, ggf. Kortisoninjektion), OP bei Neurologie-Ausfall.",
        "**Muskulatur & Skelettmuskelerkrankungen:** Duchenne-Muskeldystrophie (X-chromosomal, Dystrophin-Defekt): Jungen, Muskelschwäche ab 2–5 J., Gowers-Zeichen (Aufstehen über Boden), Pseudohypertrophie (Waden), CK ↑, Herz/Atemmuskelinsuffizienz. Becker-MD: milder. Myositis (DM, PM): entzündlich, CK ↑, proximale Schwäche. Gicht: Hyperurikämie → Harnsäurekristalle → Gelenkentzündung (v.a. Großzehengrundgelenk, Podagra)."
      ],
      klinischerBezug: "Osteoporose ist ein bedeutendes Public-Health-Problem: jährlich >200.000 osteoporotische Frakturen in Deutschland. Sinterungsfrakturen der Wirbelkörper (Rückenschmerzen, Größenabnahme, Kyphose) und Oberschenkelhalsfrakturen (Sterblichkeit im ersten Jahr ~20%) sind häufigste Folgen. DXA-Screening ab 65 Jahren (Frauen) empfohlen. Bisphosphonate (Alendronat, Zoledronat) sind Erstlinientherapie; Denosumab (subkutan halbjährlich) als Alternative. Rheumatoide Arthritis betrifft ~1% der Bevölkerung (Frauen 3× häufiger); frühzeitige Diagnose (Anti-CCP, Imaging) und Therapiebeginn (MTX ± Biologika) verhindern Gelenkzerstörung. Gicht (Hyperurikämie, Harnsäurekristalle): akuter Gichtanfall → Colchicin + NSAR + Kortison; Dauertherapie: Allopurinol (XO-Inhibitor, Harnsäure ↓). Bandscheibenvorfall: häufigste Ursache für Operationen an der Wirbelsäule; bei Kaudasyndrom (Blasen-/Mastdarm-Störung) → sofortiger Notfalleingriff."
    },
    {
      id: 'bio-3-12',
      title: "Fortpflanzungssystem",
      content: `# Fortpflanzungssystem – Biologie Kapitel 3 (Organsysteme)

**Priorität:** HOCH
**Geschätzte Lesezeit:** 16 Minuten
**Stichwortliste-Abdeckung:** 10/10 Stichwörter

---

## Einleitung

Das **Fortpflanzungssystem** (reproduktives System) ermöglicht:
1. **Gametogenese** (Spermien, Eizellen)
2. **Befruchtung** (Verschmelzung von Spermium + Eizelle → Zygote)
3. **Hormonelle Regulation** (FSH, LH, Östrogen, Progesteron, Testosteron)
4. **Schwangerschaft** (Embryonalentwicklung, Plazenta)

**Komponenten:** ♂ männlich (Hoden, Nebenhoden, Samenleiter, Penis), ♀ weiblich (Ovar, Eileiter, Uterus, Vagina)

---

## Kerninhalt

### 1. ⭐ Männliches Fortpflanzungssystem

**Hoden (Testes):**

| Struktur | Funktion | Regulation |
|----------|----------|------------|
| **Sertoli-Zellen** (Tubuli seminiferi) | **Spermatogenese-Unterstützung:** Ernährung, Blut-Hoden-Schranke, **Inhibin** (hemmt FSH), **ABP** (Androgen-Binding-Protein, bindet Testosteron) | **FSH** → Spermatogenese ↑ |
| **Leydig-Zellen** (Interstitium) | **Testosteron-Produktion** (aus Cholesterin, Androgen) | **LH** → Testosteron ↑ |

⭐ **Spermatogenese** (~74 Tage):

1. **Spermatogonien** (2n, diploid, Stammzellen) → Mitose → primäre Spermatozyten (2n)
2. **Meiose I:** Primäre Spermatozyten (2n) → 2 sekundäre Spermatozyten (n, haploid)
3. **Meiose II:** Sekundäre Spermatozyten (n) → 4 Spermatiden (n)
4. **Spermiogenese:** Spermatiden → **Spermien** (reif, Akrosom [Enzyme für Zona pellucida], Flagellum [Beweglichkeit], Mitochondrien [Energie])

**Lokalisation:** Tubuli seminiferi (Sertoli-Zellen), Lumen → Nebenhoden (Reifung, Speicherung) → Samenleiter

**Testosteron-Wirkung:**
- **Spermatogenese** (lokal, via ABP)
- **Sekundäre Geschlechtsmerkmale** (Bartwuchs, Stimmbruch, Muskelmasse ↑)
- **Libido**
- **Negative Rückkopplung:** Testosteron ↑ → Hypothalamus/Hypophyse → GnRH ↓, LH ↓

---

### 2. ⭐ Weibliches Fortpflanzungssystem

**Ovar (Eierstock):**

| Struktur | Funktion | Hormone |
|----------|----------|---------|
| **Theka-Zellen** (Follikel, außen) | **Androgene** (Testosteron, Androstendion) → via Aromatase → Östrogen (in Granulosa-Zellen) | LH → Androgen ↑ |
| **Granulosa-Zellen** (Follikel, innen) | **Östrogen-Produktion** (via Aromatase, aus Androgenen der Theka-Zellen), **Inhibin** (hemmt FSH), Follikelwachstum | FSH → Aromatase ↑, Follikelwachstum |
| **Corpus luteum** (Gelbkörper, nach Ovulation) | **Progesteron** + Östrogen (Lutealphase) | LH → Corpus luteum → Progesteron ↑ |

⭐ **Oogenese:**

**Pränatale Entwicklung:**
- **Primordiale Keimzellen** → Oogonien (2n) → Mitose → **primäre Oozyten** (2n)
- **Meiose I gestartet**, aber **Arrest in Prophase I** (bis Pubertät)
- **~400.000 primordiale Follikel** bei Geburt (vs. 6–7 Mio. im 5. Monat intrauterin)

**Ab Pubertät (jeden Zyklus):**
1. **Meiose I abgeschlossen:** Primäre Oozyte (2n) → **sekundäre Oozyte** (n, haploid) + 1. Polkörperchen (degeneriert)
2. **Ovulation** (Tag 14): Sekundäre Oozyte (n, **Arrest in Metaphase II**) freigesetzt
3. **Meiose II** (nur bei Befruchtung): Sekundäre Oozyte (n) → **Eizelle** (n) + 2. Polkörperchen

**Unterschied zu Spermatogenese:**
- **Spermatogenese:** 4 funktionsfähige Spermien (n) aus 1 Spermatogonium (2n)
- **Oogenese:** 1 funktionsfähige Eizelle (n) + 3 Polkörperchen (degenerieren)

---

### 3. ⭐ Menstruationszyklus (~28 Tage)

**Zyklusphase:**

| Phase | Dauer | Ovar | Uterus (Endometrium) | Hormone |
|-------|-------|------|----------------------|---------|
| **Menstruation** | Tag 1–5 | Follikel-Degeneration (wenn keine Befruchtung) | **Abstoßung** der Funktionalis (Schleimhaut) | Progesteron ↓, Östrogen ↓ |
| **Follikelphase** (proliferativ) | Tag 6–14 | **Follikel-Reifung** (FSH), Östrogen ↑ (Granulosa-Zellen) | **Proliferation** (Aufbau) der Funktionalis (Östrogen-stimuliert) | **FSH** → Follikelwachstum, **Östrogen ↑** (Granulosa) |
| **Ovulation** | Tag 14 (Mitte) | **LH-Peak** → Follikelruptur → Freisetzung der sekundären Oozyte (n) | (Übergang) | **LH-Peak** (durch Östrogen ↑↑ → positive Rückkopplung) |
| **Lutealphase** (sekretorisch) | Tag 15–28 | **Corpus luteum** (LH) → Progesteron ↑ + Östrogen | **Sekretion** (Drüsen, Glykogen, Vorbereitung auf Implantation) | **Progesteron ↑** (Corpus luteum), Östrogen |

⭐ **Hormonelle Regulation (Hypothalamus-Hypophyse-Ovar-Achse):**

**Follikelphase:**
1. **GnRH** (Hypothalamus, pulsatil) → **FSH + LH** (Hypophyse)
2. **FSH** → Follikelwachstum → **Östrogen ↑** (Granulosa-Zellen)
3. **Östrogen** (niedrig/mittel) → **negative Rückkopplung** → FSH ↓

**Ovulation:**
- **Östrogen ↑↑** (hoch, >2 Tage) → **positive Rückkopplung** → **LH-Peak** (+ FSH-Peak)
- **LH-Peak** → Ovulation (~24–36 h später)

**Lutealphase:**
- **LH** → **Corpus luteum** → **Progesteron ↑** + Östrogen
- **Progesteron** → negative Rückkopplung → GnRH ↓, LH ↓, FSH ↓
- **Progesteron** → Endometrium sekretorisch (Vorbereitung auf Implantation)
- **Ohne Befruchtung:** Corpus luteum degeneriert (Tag 28) → Progesteron ↓ → **Menstruation** (Tag 1)

**Mit Befruchtung:**
- **hCG** (humanes Choriongonadotropin, Trophoblast) → erhält Corpus luteum → Progesteron ↑ → Endometrium erhalten

---

### 4. Befruchtung und Implantation

**Befruchtung (Eileiter, Ampulle):**
1. **Spermium** durchdringt **Zona pellucida** (Akrosom-Reaktion, Enzyme)
2. **Fusion** von Spermium + Eizelle → **Zygote** (2n, diploid)
3. **Zona-Reaktion:** Blockiert weitere Spermien (Polyspermie-Verhinderung)

**Implantation (Tag 6–7 nach Befruchtung):**
- **Blastozyste** (Trophoblast + Embryoblast) → Einnistung in **Endometrium** (Uterus)
- **Trophoblast** → **hCG** → Corpus luteum erhalten → Progesteron ↑

**Plazenta:**
- **Funktion:** Gasaustausch (O₂, CO₂), Nährstofftransport, Hormonproduktion (hCG, Progesteron, Östrogen, hPL)
- **Struktur:** Fetaler Teil (Chorionzotten) + maternaler Teil (Decidua basalis)
- **Nicht plazentagängig:** Heparin, Insulin (zu groß)
- **Plazentagängig:** IgG (Nestschutz), O₂, Glukose, Ethanol, **Teratogene** (Thalidomid, Alkohol, Rötelninfektion)

**Klinisch:**
- **Präeklampsie:** Hypertonie + Proteinurie (>20. SSW), Plazenta-Dysfunktion
- **Eklampsie:** Präeklampsie + Krampfanfälle (lebensbedrohlich)

---

## 📌 Prüfungsfokus

1. **Spermatogenese:** Spermatogonien (2n) → Meiose I/II → 4 Spermien (n), Dauer ~74 Tage, Sertoli-Zellen (FSH), Leydig-Zellen (LH → Testosteron)
2. **Oogenese:** Primäre Oozyte (2n, Arrest Prophase I) → Meiose I → sekundäre Oozyte (n, Arrest Metaphase II) → Ovulation → Meiose II (nur bei Befruchtung) → 1 Eizelle (n) + Polkörperchen
3. **Menstruationszyklus:** Follikelphase (FSH → Follikel → Östrogen ↑), Ovulation (LH-Peak, Tag 14), Lutealphase (Corpus luteum → Progesteron ↑)
4. **LH-Peak:** Östrogen ↑↑ → positive Rückkopplung → LH-Peak → Ovulation (~24–36 h später)
5. **Corpus luteum:** LH → Progesteron ↑ (Lutealphase), hCG (bei Befruchtung) erhält Corpus luteum → Schwangerschaft

---

## Merksätze

>>>> **Spermatogenese vs. Oogenese:** „Spermatogenese: 4 Spermien (n) aus 1 (2n), ~74 Tage, kontinuierlich ab Pubertät. Oogenese: 1 Eizelle (n) aus 1 (2n), Arrest Prophase I (Geburt) + Metaphase II (Ovulation), nur bei Befruchtung Meiose II komplett!"

>>>> **Menstruationszyklus:** „Follikelphase (Tag 6–14): FSH → Follikel → Östrogen ↑. Ovulation (Tag 14): Östrogen ↑↑ → LH-Peak. Lutealphase (Tag 15–28): LH → Corpus luteum → Progesteron ↑ (sekretorisch)!"

>>>> **LH-Peak-Trigger:** „Östrogen niedrig/mittel → negative Rückkopplung (FSH ↓). Östrogen hoch (>2 Tage) → positive Rückkopplung → LH-Peak → Ovulation!"

>>>> **Corpus luteum:** „Nach Ovulation: LH → Corpus luteum → Progesteron ↑ (Lutealphase, Endometrium sekretorisch). Bei Befruchtung: hCG (Trophoblast) → Corpus luteum erhalten → Progesteron ↑ → Schwangerschaft!"

---

**Navigation:**
← [Zurück: Bio Kap 3 UK11 – Skelettsystem](Bio_Kap3_UK11_Skelettsystem.md) | [Weiter: Bio Kap 4 UK01 – Frühentwicklung](Bio_Kap4_UK01_Fruehentwicklung.md) →
`,
      lernziele: [],
      sections: [],
      selfTest: [
        {
          question: "Welche Aussage über Sertoli-Zellen und Leydig-Zellen ist korrekt?",
          options: [
          "Sertoli-Zellen produzieren Testosteron und liegen im Interstitium des Hodens.",
          "Leydig-Zellen unterstützen die Spermatogenese und produzieren Inhibin.",
          "Sertoli-Zellen (in Tubuli seminiferi) unterstützen die Spermatogenese, bilden die Blut-Hoden-Schranke, produzieren Inhibin (hemmt FSH) und ABP (bindet Testosteron). Leydig-Zellen (im Interstitium) produzieren Testosteron unter LH-Stimulation.",
          "FSH stimuliert Leydig-Zellen zur Testosteron-Produktion.",
          "ABP (Androgen-Binding-Protein) wird von Leydig-Zellen produziert und hemmt die Spermatogenese."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Hodenzellen:**\n\n**Sertoli-Zellen** (Tubuli seminiferi, somatisch):\n- **Lokalisation:** In den Tubuli seminiferi (Keimepithel)\n- **Funktion:**\n  - **Spermatogenese-Unterstützung:** Ernährung, Phagozytose von degeneriertem Material\n  - **Blut-Hoden-Schranke:** Schützt Keimzellen vor Immunsystem\n  - **Inhibin:** Hemmt FSH (negative Rückkopplung)\n  - **ABP** (Androgen-Binding-Protein): Bindet Testosteron → hohe lokale Konzentration → Spermatogenese ↑\n- **Regulation:** **FSH** → Spermatogenese ↑\n\n**Leydig-Zellen** (Interstitium, endokrin):\n- **Lokalisation:** Im Interstitium (zwischen Tubuli)\n- **Funktion:** **Testosteron-Produktion** (aus Cholesterin)\n- **Regulation:** **LH** → Testosteron ↑\n\n**Testosteron-Wirkung:** Spermatogenese (lokal), sekundäre Geschlechtsmerkmale, negative Rückkopplung (→ GnRH ↓, LH ↓)\n\n**Falsch (A):** **Leydig-Zellen** (nicht Sertoli) produzieren Testosteron und liegen im Interstitium.\n\n**Falsch (B):** **Sertoli-Zellen** (nicht Leydig) unterstützen Spermatogenese und produzieren Inhibin.\n\n**Falsch (D):** **LH** (nicht FSH) stimuliert Leydig-Zellen. **FSH** stimuliert Sertoli-Zellen.\n\n**Falsch (E):** **ABP** wird von **Sertoli-Zellen** produziert und **fördert** (nicht hemmt) Spermatogenese durch Testosteron-Bindung.",
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die Spermatogenese ist korrekt?",
          options: [
          "Aus einem Spermatogonium (2n) entstehen durch Meiose 2 funktionsfähige Spermien (n).",
          "Die Spermatogenese dauert etwa 28 Tage und findet im Nebenhoden statt.",
          "Spermatogonien (2n) durchlaufen Mitose, dann Meiose I (→ sekundäre Spermatozyten, n) und Meiose II (→ 4 Spermatiden, n), die zu 4 funktionsfähigen Spermien reifen. Dauer: ~74 Tage. Lokalisation: Tubuli seminiferi.",
          "Spermien erhalten ihre Beweglichkeit erst nach der Befruchtung.",
          "Das Akrosom enthält Mitochondrien für die Energieversorgung des Spermiums."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Spermatogenese** (~74 Tage):\n\n1. **Spermatogonien** (2n, diploid, Stammzellen) → **Mitose** → primäre Spermatozyten (2n)\n2. **Meiose I:** Primäre Spermatozyten (2n) → 2 **sekundäre Spermatozyten** (n, haploid)\n3. **Meiose II:** Sekundäre Spermatozyten (n) → **4 Spermatiden** (n)\n4. **Spermiogenese:** Spermatiden → **Spermien** (reif):\n   - **Akrosom** (Kopf): Enzyme (Hyaluronidase, Akrosin) → durchdringt Zona pellucida\n   - **Flagellum** (Schwanz): Beweglichkeit\n   - **Mitochondrien** (Mittelstück): ATP für Bewegung\n\n**Lokalisation:**\n- **Tubuli seminiferi** (Hoden): Spermatogenese (Sertoli-Zellen)\n- **Nebenhoden:** Reifung (Motilität ↑), Speicherung\n\n**Ergebnis:** **4 funktionsfähige Spermien** (n) aus 1 Spermatogonium (2n) – im Gegensatz zu Oogenese (1 Eizelle + 3 Polkörperchen)\n\n**Falsch (A):** Aus 1 Spermatogonium entstehen **4** (nicht 2) funktionsfähige Spermien.\n\n**Falsch (B):** Dauer ~**74 Tage** (nicht 28), Lokalisation **Tubuli seminiferi** (nicht Nebenhoden). Nebenhoden = Reifung/Speicherung.\n\n**Falsch (D):** Spermien erhalten Beweglichkeit während **Reifung im Nebenhoden** (nicht nach Befruchtung).\n\n**Falsch (E):** **Akrosom** enthält **Enzyme** (nicht Mitochondrien). **Mitochondrien** sind im Mittelstück (Energieversorgung).",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über die Oogenese ist korrekt?",
          options: [
          "Aus einer primären Oozyte (2n) entstehen durch Meiose 4 funktionsfähige Eizellen (n).",
          "Die Meiose II wird bei jeder Ovulation abgeschlossen, unabhängig von einer Befruchtung.",
          "Primäre Oozyten (2n) werden während der Embryonalentwicklung gebildet und arretieren in Prophase I bis zur Pubertät. Bei Ovulation wird Meiose I abgeschlossen (→ sekundäre Oozyte, n + 1. Polkörperchen). Meiose II wird nur bei Befruchtung abgeschlossen (→ Eizelle, n + 2. Polkörperchen).",
          "Die Oogenese beginnt erst mit der Pubertät und endet mit etwa 40 Jahren.",
          "Bei Geburt hat ein weiblicher Säugling etwa 6–7 Millionen primordiale Follikel."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Oogenese:**\n\n**Pränatale Entwicklung:**\n1. **Primordiale Keimzellen** → Oogonien (2n) → Mitose\n2. **Primäre Oozyten** (2n): Meiose I **gestartet**, aber **Arrest in Prophase I** (bis Pubertät)\n3. **~400.000 primordiale Follikel** bei Geburt (vs. 6–7 Mio. im 5. Monat intrauterin, 99% degenerieren)\n\n**Ab Pubertät (jeden Zyklus):**\n1. **Meiose I abgeschlossen:** Primäre Oozyte (2n) → **sekundäre Oozyte** (n, haploid) + **1. Polkörperchen** (n, degeneriert)\n2. **Ovulation** (Tag 14): Sekundäre Oozyte (n) freigesetzt, **Arrest in Metaphase II**\n3. **Meiose II** (nur bei Befruchtung): Sekundäre Oozyte (n) → **Eizelle** (n) + **2. Polkörperchen** (n, degeneriert)\n\n**Ergebnis:** **1 funktionsfähige Eizelle** (n) + **3 Polkörperchen** (degenerieren) – im Gegensatz zu Spermatogenese (4 Spermien)\n\n**Falsch (A):** Aus 1 primären Oozyte entsteht **1** (nicht 4) funktionsfähige Eizelle + 3 Polkörperchen (degenerieren).\n\n**Falsch (B):** Meiose II wird **nur bei Befruchtung** abgeschlossen. Ohne Befruchtung bleibt sekundäre Oozyte in Metaphase II arretiert.\n\n**Falsch (D):** Primäre Oozyten werden **pränatal** (nicht ab Pubertät) gebildet. Menopause (Ende Oogenese) ~50 Jahre (nicht 40).\n\n**Falsch (E):** Bei Geburt ~**400.000** (nicht 6–7 Mio.) primordiale Follikel. 6–7 Mio. im **5. Monat intrauterin**, dann Degeneration.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über den Menstruationszyklus ist korrekt?",
          options: [
          "Die Follikelphase wird durch LH gesteuert und führt zu steigenden Progesteron-Spiegeln.",
          "Die Ovulation findet am letzten Tag der Menstruation statt.",
          "Die Follikelphase (Tag 6–14) wird durch FSH gesteuert, das Follikelwachstum und Östrogen-Produktion (Granulosa-Zellen) stimuliert. Am Tag 14 führt ein LH-Peak zur Ovulation. In der Lutealphase (Tag 15–28) produziert das Corpus luteum Progesteron, das das Endometrium sekretorisch umbaut.",
          "Progesteron ist in der Follikelphase am höchsten.",
          "Das Corpus luteum wird durch FSH aufrechterhalten."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Menstruationszyklus** (~28 Tage):\n\n| Phase | Tage | Ovar | Endometrium | Hormone |\n|-------|------|------|-------------|----------|\n| **Menstruation** | 1–5 | Follikel-Degeneration | Abstoßung | Progesteron ↓, Östrogen ↓ |\n| **Follikelphase** | 6–14 | **FSH** → Follikelwachstum → **Östrogen ↑** (Granulosa) | Proliferation (Aufbau) | **FSH**, **Östrogen ↑** |\n| **Ovulation** | 14 | **LH-Peak** → Follikelruptur → Oozyte (n) freigesetzt | (Übergang) | **LH-Peak** |\n| **Lutealphase** | 15–28 | **Corpus luteum** (LH) → **Progesteron ↑** + Östrogen | Sekretion (Drüsen, Glykogen) | **Progesteron ↑** |\n\n**Hormonelle Regulation:**\n- **Follikelphase:** FSH → Follikel → **Östrogen ↑** (Granulosa-Zellen, via Aromatase aus Androgenen der Theka-Zellen)\n- **Ovulation:** Östrogen ↑↑ (hoch, >2 Tage) → **positive Rückkopplung** → **LH-Peak** → Ovulation (~24–36 h später)\n- **Lutealphase:** LH → **Corpus luteum** → **Progesteron ↑** (sekretorisches Endometrium, Vorbereitung auf Implantation)\n- **Ohne Befruchtung:** Corpus luteum degeneriert → Progesteron ↓ → Menstruation\n\n**Falsch (A):** Follikelphase wird durch **FSH** (nicht LH) gesteuert und führt zu **Östrogen ↑** (nicht Progesteron). **Progesteron ↑** in Lutealphase.\n\n**Falsch (B):** Ovulation findet am **Tag 14** (Zyklusmitte) statt, nicht am letzten Tag der Menstruation (Tag 5).\n\n**Falsch (D):** **Progesteron** ist in der **Lutealphase** (nicht Follikelphase) am höchsten.\n\n**Falsch (E):** Corpus luteum wird durch **LH** (nicht FSH) aufrechterhalten. Bei Befruchtung: **hCG** (Trophoblast) erhält Corpus luteum.",
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über den LH-Peak und die Ovulation ist korrekt?",
          options: [
          "Niedrige Östrogen-Spiegel führen über positive Rückkopplung zum LH-Peak.",
          "Der LH-Peak wird durch Progesteron ausgelöst.",
          "Hohe Östrogen-Spiegel (>2 Tage) führen über positive Rückkopplung zu einem LH-Peak (und FSH-Peak), der etwa 24–36 Stunden später die Ovulation auslöst. Nach der Ovulation wandelt sich der Follikel zum Corpus luteum um, das Progesteron produziert.",
          "Der LH-Peak hemmt die Ovulation und erhält den Follikel.",
          "Östrogen hat während des gesamten Zyklus eine positive Rückkopplung auf LH."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **LH-Peak und Ovulation:**\n\n**Östrogen-Rückkopplung (biphasisch):**\n\n1. **Follikelphase (früh/mittel):** Östrogen **niedrig/mittel** → **negative Rückkopplung** → GnRH ↓, FSH ↓, LH ↓\n\n2. **Follikelphase (spät):** Östrogen **hoch** (>200 pg/mL, >2 Tage) → **positive Rückkopplung** → GnRH ↑ → **LH-Peak** + FSH-Peak (Hypophyse)\n\n3. **Ovulation:** **LH-Peak** (Tag 14) → Follikelruptur → Freisetzung der **sekundären Oozyte** (n, Arrest Metaphase II) → ~**24–36 h** nach LH-Peak\n\n4. **Nach Ovulation:** Follikel → **Corpus luteum** (Gelbkörper):\n   - **LH** → Corpus luteum → **Progesteron ↑** + Östrogen\n   - **Progesteron** → negative Rückkopplung → GnRH ↓, LH ↓, FSH ↓\n   - **Progesteron** → Endometrium sekretorisch (Implantations-Vorbereitung)\n\n**Mit Befruchtung:** **hCG** (humanes Choriongonadotropin, Trophoblast) → erhält Corpus luteum → Progesteron ↑ → Schwangerschaft\n\n**Ohne Befruchtung:** Corpus luteum degeneriert (Tag 28) → Progesteron ↓ → Menstruation (Tag 1)\n\n**Falsch (A):** **Hohe** (nicht niedrige) Östrogen-Spiegel führen zu positiver Rückkopplung → LH-Peak. Niedrige Östrogen-Spiegel → negative Rückkopplung.\n\n**Falsch (B):** **Östrogen** (nicht Progesteron) löst LH-Peak aus. Progesteron → negative Rückkopplung (Lutealphase).\n\n**Falsch (D):** LH-Peak **löst Ovulation aus** (nicht hemmt). Follikel rupturiert, wandelt sich zu Corpus luteum um.\n\n**Falsch (E):** Östrogen hat **biphasische** Rückkopplung: niedrig/mittel → negativ, hoch (>2 Tage) → positiv → LH-Peak.",
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über das Corpus luteum ist korrekt?",
          options: [
          "Das Corpus luteum entsteht vor der Ovulation und produziert primär Östrogen.",
          "Das Corpus luteum wird durch FSH stimuliert und produziert Testosteron.",
          "Das Corpus luteum entsteht nach der Ovulation aus dem rupturierten Follikel. Es wird durch LH stimuliert und produziert Progesteron (und Östrogen), das das Endometrium sekretorisch umbaut. Bei Befruchtung wird es durch hCG (vom Trophoblast) erhalten, andernfalls degeneriert es am Zyklusende.",
          "Das Corpus luteum degeneriert sofort nach der Ovulation.",
          "hCG wird vom Corpus luteum produziert, um die Schwangerschaft aufrechtzuerhalten."
          ],
          correctIndex: 2,
          explanation: "**Richtig (C):** **Corpus luteum** (Gelbkörper):\n\n**Entstehung:** **Nach Ovulation** (Tag 14) aus rupturiertem Follikel (Granulosa-Zellen + Theka-Zellen → luteinisiert)\n\n**Funktion:**\n- **Hormonproduktion:** **Progesteron ↑** (primär) + Östrogen (sekundär)\n- **Stimulation:** **LH** (nicht FSH) → Corpus luteum → Progesteron ↑\n- **Progesteron-Wirkung:**\n  - **Endometrium:** Sekretorischer Umbau (Drüsen, Glykogen) → Implantations-Vorbereitung\n  - **Negative Rückkopplung:** GnRH ↓, LH ↓, FSH ↓\n  - **Basaltemperatur ↑** (~0,5 °C, Lutealphase)\n\n**Schicksal:**\n\n1. **Ohne Befruchtung:**\n   - Corpus luteum degeneriert am **Zyklusende** (Tag 28, ~14 Tage Lebensdauer)\n   - Progesteron ↓ → **Menstruation** (Tag 1)\n\n2. **Mit Befruchtung:**\n   - **hCG** (humanes Choriongonadotropin, **vom Trophoblast** der Blastozyste produziert, ab Tag 6–7 nach Befruchtung)\n   - **hCG** → **erhält Corpus luteum** → Progesteron ↑ → Endometrium erhalten → **Schwangerschaft**\n   - Ab 12. SSW: Plazenta übernimmt Progesteron-Produktion → Corpus luteum nicht mehr essenziell\n\n**Falsch (A):** Corpus luteum entsteht **nach** (nicht vor) Ovulation. Produziert primär **Progesteron** (nicht Östrogen).\n\n**Falsch (B):** Corpus luteum wird durch **LH** (nicht FSH) stimuliert und produziert **Progesteron** (nicht Testosteron). Testosteron → Theka-Zellen (Follikel) → Aromatase → Östrogen.\n\n**Falsch (D):** Corpus luteum degeneriert am **Zyklusende** (Tag 28, ~14 Tage nach Ovulation), nicht sofort.\n\n**Falsch (E):** **hCG** wird vom **Trophoblast** (Blastozyste, nicht Corpus luteum) produziert, um Corpus luteum zu erhalten.",
          difficulty: 2,
          tags: [],
          hints: [
            "Wann entsteht das Corpus luteum und was produziert es? Was hält es bei Befruchtung am Leben?",
            "Corpus luteum entsteht nach Ovulation (aus rupturiertem Follikel), produziert Progesteron (LH-stimuliert). Bei Befruchtung: hCG (vom Trophoblast, nicht Corpus luteum!) erhält das Corpus luteum → Progesteron ↑ → Endometrium erhalten."
          ],
        }
      ],
      merksätze: [
        "**Spermatogenese:** Spermatogonien (2n) → Mitose → primäre Spermatozyten (2n) → Meiose I → sekundäre Spermatozyten (n) → Meiose II → 4 Spermatiden (n) → Spermiogenese → Spermien (Akrosom, Flagellum, Mitochondrien). Dauer: ~74 Tage. Kontinuierlich ab Pubertät. Sertoli-Zellen: Unterstützung + Inhibin (hemmt FSH) + ABP. Leydig-Zellen: Testosteron (LH-stimuliert).",
        "**Oogenese:** Oogonien (2n, fetal) → primäre Oozyte (2n, Meiose I beginnt, Arrest Prophase I bis Pubertät). Ovulation: primäre Oozyte beendet Meiose I → sekundäre Oozyte (n, Arrest Metaphase II). Meiose II nur bei Befruchtung komplett → reife Eizelle + Polkörper. Nur 1 Eizelle aus 1 Oogonie (nicht 4 Zellen). ~400 Ovulationen im Leben (7 Mio. Oozyte → bei Geburt ~1–2 Mio. → Pubertät ~300.000).",
        "**Menstruationszyklus (28 Tage):** Menstruation (Tag 1–5): Progesteron ↓ → Endometrium abstößt. Proliferationsphase (Tag 6–14): FSH → Östrogen ↑ → Endometrium proliferiert (Drüsen wachsen). Ovulation (Tag 14): Östrogen ↑↑ → positive RK → LH-Peak → Follikelruptur. Sekretionsphase (Tag 15–28): LH → Corpus luteum → Progesteron ↑ → Endometrium sekretorisch (Glykogen).",
        "**LH-Peak & Ovulation:** Östrogen niedrig/mittel → negative Rückkopplung (FSH ↓). Östrogen hoch (>200 pg/mL, >2 Tage) → positive Rückkopplung → GnRH ↑ → LH-Peak (+ FSH-Peak) → Ovulation 24–36 h später. Sekundäre Oozyte (n, Arrest Metaphase II) im Eileiter freigegeben. Basaltemperatur ↑ nach Ovulation (~0,5°C, Progesteron-Effekt).",
        "**Corpus luteum & hCG:** Nach Ovulation: Follikel → Corpus luteum (Gelbkörper, Granulosa + Theka-Zellen luteinisiert). LH → Corpus luteum → Progesteron ↑. Ohne Befruchtung: Corpus luteum degeneriert (Tag 28) → Progesteron ↓ → Menstruation. Mit Befruchtung: Trophoblast (Blastozyste) → hCG (ab Tag 6–7) → Corpus luteum erhalten → Progesteron ↑ → Schwangerschaft. Ab 12. SSW: Plazenta übernimmt.",
        "**Kontrazeption:** Kombinierte OCP (Östrogen + Gestagen): Ovulationshemmung (neg. RK auf GnRH/LH/FSH) + Schleim ↑ + Endometrium atrophisch. Progesteronpille: kein Östrogen, Schleim ↑. IUP (Kupfer: spermizid/Motilität ↓; Hormonspirale: Gestagen → Schleim ↑). Notfallkontrazeption: Ulipristalacetat (Progesteronrezeptor-Modulator, bis 120 h), Levonorgestrel (bis 72 h, OTC), Kupfer-IUP (bis 5 Tage, effektivste). Sterilisation: Tubenligatur (Frau), Vasektomie (Mann).",
        "**PCO-Syndrom (PCOS):** Häufigste endokrine Erkrankung bei Frauen (5–15%). Diagnose (Rotterdam-Kriterien, 2/3): Oligo-/Anovulation, klinische/biochemische Androgenisierung (Hirsutismus, Akne, Alopezie), polyzystische Ovarien (>12 Follikel im Ultraschall). LH/FSH-Ratio ↑ (>2), Androgene ↑, Insulin-Resistenz ↑. Therapie: Gewichtsreduktion, OCP (Anti-Androgen), Metformin (Insulinsensitizer), Clomifen (Ovulationsinduktion).",
        "**Endometriose:** Endometriumähnliches Gewebe außerhalb des Uterus (Ovar [Endometriom], Peritoneum, Rektum). Dysmenorrhö (schwere Periodenschmerzen), Dyspareunie, Infertilität. Diagnose: Laparoskopie (Goldstandard). Östrogenabhängig. Therapie: Gestagene, GnRH-Analoga (Östrogenentzug), Laparoskopie (Herdentfernung).",
        "**Fertilität & Infertilität:** Primäre Infertilität: Schwangerschaft nie erreicht. Sekundäre: nach bereits erfolgter Schwangerschaft. Ursachen: Weiblich (PCOS, Endometriose, Tubenverschluss [nach Chlamydien-Salpingitis], Uterusanomalien, POI). Männlich: Oligo-/Azoo-/Asthenozoospermie (Spermiogramm!), Varikozele, Kryptorchismus. Assisted Reproduction: IUI, IVF (In-vitro-Fertilisation), ICSI (Intrazytoplasmatische Spermieninjektion)."
      ],
      klinischerBezug: "PCOS (Polyzystisches Ovarsyndrom) betrifft 5–15% der Frauen im gebärfähigen Alter und ist häufigste Ursache für ovulatorische Infertilität. Diagnose nach Rotterdam-Kriterien (2 von 3: Anovulation, Androgenisierung, polyzystische Ovarien). Metabolisches Syndrom und Typ-2-Diabetes häufig assoziiert. Endometriose: chronische, oft spät diagnostizierte Erkrankung (Diagnose-Verzögerung 7–10 Jahre!); betrifft ~10% der Frauen; Endometriome (Schokoladenzysten) können Ovarialreserve schädigen. Hormonelle Kontrazeption: OCP erhöht geringfügig das VTE-Risiko (besonders dritte/vierte Generation Gestagene); absolute Kontraindikationen: Migräne mit Aura, VTE-Vorgeschichte, schwere Hypertonie. Schwangerschaft: hCG-Nachweis im Schwangerschaftstest ab Tag 10 nach Befruchtung möglich; hCG-Anstieg verdoppelt sich alle 48 h in früher SS. Eklampsie/Präeklampsie: Hypertonie + Proteinurie in SS → magnesiumsulfat + frühzeitige Entbindung. Mammakarzinom: häufigstes Karzinom der Frau (~70% ER+, Hormonrezeptor-positiv → Tamoxifen oder Aromatasehemmer als Therapie)."
    }
  ],
};
