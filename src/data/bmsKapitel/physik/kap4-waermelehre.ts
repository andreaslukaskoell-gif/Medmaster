import type { Kapitel } from '../types';

export const physKap4: Kapitel = {
  id: 'phys-kap4',
  title: 'Wärmelehre',
  subject: 'physik',
  icon: '🌡️',
  estimatedTime: '55 min',
  unterkapitel: [
    {
      id: 'ph-4-01',
      title: 'Temperatur, Wärme und Wärmekapazität',
      content: `Temperatur und Wärme sind zwei Begriffe, die im Alltag oft verwechselt werden — in der Physik sind sie jedoch grundverschieden. Temperatur ist eine intensive Zustandsgröße, die die mittlere kinetische Energie der Moleküle eines Systems beschreibt. Wärme ist Energie, die aufgrund einer Temperaturdifferenz übertragen wird. Temperatur ist das "Wie heiß?", Wärme ist das "Wie viel Energie fließt?".

Die drei gebräuchlichsten Temperaturskalen sind Celsius, Kelvin und Fahrenheit. Die Kelvin-Skala beginnt beim absoluten Nullpunkt (0 K = −273,15°C), wo jegliche thermische Bewegung der Moleküle zum Erliegen kommt. Die Umrechnung: T[K] = T[°C] + 273,15. In allen physikalischen und chemischen Berechnungen muss Kelvin verwendet werden — Celsius-Temperaturen liefern in Formeln falsche Ergebnisse, weil eine Celsius-Differenz von 0°C nicht "keine Temperatur" bedeutet. Die Fahrenheit-Skala (USA) rechnet: T[°F] = T[°C] × 9/5 + 32; Normkörpertemperatur 37°C = 98,6°F.

Wärme Q [Joule] ist die Energie, die zwischen Körpern unterschiedlicher Temperatur fließt — immer vom wärmeren zum kälteren Körper (zweiter Hauptsatz). Die spezifische Wärmekapazität c [J/(kg·K)] ist die Wärmemenge, die nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen: Q = m·c·ΔT. Wasser hat mit c_Wasser = 4186 J/(kg·K) die höchste spezifische Wärmekapazität aller gewöhnlichen Flüssigkeiten — ein fundamentales Merkmal für die Thermoregulation des menschlichen Körpers (Körper besteht zu ~60% aus Wasser). Aluminium: c ≈ 900 J/(kg·K); Eisen: c ≈ 450 J/(kg·K); Luft: c_p ≈ 1005 J/(kg·K).

Die Wärmeausdehnung beschreibt, wie Körper bei Erwärmung ihre Ausdehnung ändern. Lineare Ausdehnung: ΔL = α·L₀·ΔT, wobei α der lineare Ausdehnungskoeffizient ist (Stahl: α ≈ 12 × 10⁻⁶ /K; Glas: α ≈ 9 × 10⁻⁶ /K). Volumetrische Ausdehnung: ΔV = γ·V₀·ΔT, wobei γ ≈ 3α. Bei Flüssigkeiten und Gasen gilt nur die volumetrische Ausdehnung. Wasser zeigt anomale Ausdehnung: sein Dichtemaximum liegt bei 4°C — unterhalb und oberhalb dieser Temperatur dehnt es sich aus. Das ermöglicht das Leben in gefrorenen Seen (Eis schwimmt, Wasser darunter bleibt bei 4°C, Fische überleben).

Im klinischen Alltag ist Temperatur allgegenwärtig. Normtemperatur: 36–37°C (oral), 36,5–37,5°C (rektal). Fieber ist definiert als Körpertemperatur > 38°C. Hochfieber > 40°C gefährdet durch Proteindenaturierung (Enzyme versagen). Hypothermie: < 35°C; bei < 32°C Bewusstlosigkeit; < 28°C Herzstillstandgefahr. Therapeutische Hypothermie (33–36°C) nach Herzstillstand schützt das Gehirn vor Ischämie-Reperfusionsschäden. Fiebersenkung mit Antipyretika (Paracetamol, Ibuprofen) hemmt die Prostaglandin-Synthese im Hypothalamus, der als körpereigener Thermostat fungiert.`,
      lernziele: [
        'Temperaturskalen (Celsius, Kelvin, Fahrenheit) ineinander umrechnen',
        'Wärmekapazität und spezifische Wärme berechnen (Q = m·c·ΔT)',
        'Wärmeausdehnung von Feststoffen und die Anomalie des Wassers erklären',
        'Klinische Bedeutung von Körpertemperatur und Thermoregulation kennen',
      ],
      sections: [
        {
          heading: 'Temperaturskalen und Umrechnung',
          text: 'Kelvin (K): Absolutskala, 0 K = absoluter Nullpunkt = −273,15°C. Celsius (°C): T[K] = T[°C] + 273,15. Fahrenheit (°F): T[°F] = T[°C] × 9/5 + 32. Wichtige Fixpunkte: Eis-Wasser-Gleichgewicht: 0°C = 273,15 K = 32°F; Siedepunkt Wasser: 100°C = 373,15 K = 212°F; Körpertemperatur: 37°C = 310,15 K = 98,6°F. Merke: In physikalischen Formeln (Gasgesetze, Thermodynamik) IMMER Kelvin verwenden!',
          merksatz: 'T[K] = T[°C] + 273,15 — in Formeln IMMER Kelvin!',
        },
        {
          heading: 'Wärmekapazität und Wärmeübertragung',
          text: 'Q = m·c·ΔT [Joule]. Spezifische Wärmekapazität c [J/(kg·K)]: Wasser c = 4186 J/(kg·K) (höchste gängige Flüssigkeit!). Wärmeübertragung: immer vom heißen zum kalten Objekt. Wärmeleitvermögen λ [W/(m·K)]: Metalle hoch (Kupfer: λ = 380 W/(m·K)), Luft niedrig (λ = 0,026 W/(m·K)) → daher isoliert Luft gut (Styropor, Doppelglasfenster). Klinisch: Fiebersenkung durch Wärmeabgabe (Schwitzen, Vasodilatation). Hypothermietherapie: aktive Kühlung auf 33–36°C.',
        },
        {
          heading: 'Wärmeausdehnung und Anomalie des Wassers',
          text: 'Lineare Ausdehnung: ΔL = α·L₀·ΔT. Volumetrisch: ΔV = γ·V₀·ΔT; γ ≈ 3α. Anomalie Wasser: Dichtemaximum bei 4°C (ρ = 1000 kg/m³). Beim Abkühlen von 4°C auf 0°C dehnt Wasser sich aus → Eis (0°C) ist weniger dicht als Wasser (4°C) → Eis schwimmt! Dies rettet Wasserorganismen im Winter. Klinisch: Gefrierschäden (Frostbite): Zellschäden durch Eiskristalle. Autoklavieren bei 121°C/2 bar sterilisiert — Wasser bleibt bei erhöhtem Druck flüssig.',
        },
      ],
      merksätze: [
        'Wasser: c = 4186 J/(kg·K) — höchste spez. Wärmekapazität, ideal für Thermoregulation',
        'Anomalie des Wassers: Dichtemaximum bei 4°C — Eis schwimmt auf Wasser',
        'Fieber > 38°C; Hypothermie < 35°C; therapeutische Hypothermie 33–36°C',
      ],
      altfrage: {
        question: 'Ein Patient mit 70 kg Körpergewicht soll im Rahmen einer Hypothermietherapie von 37°C auf 33°C abgekühlt werden. Wie viel Energie muss dem Körper entzogen werden? (Annahme: c_Körper ≈ c_Wasser = 4186 J/(kg·K))',
        answer: 'ΔT = 37 − 33 = 4 K. Q = m·c·ΔT = 70 × 4186 × 4 = 1.172.080 J ≈ 1,17 MJ = 280 kcal. Diese Energie muss durch Kühldecken, Eiswasser oder endovaskuläre Kühlkatheter abgeführt werden. In der Praxis dauert die Kühlung 30–60 Minuten mit aktiven Kühlsystemen.',
      },
      klinischerBezug: 'Die Körpertemperaturregulation (Thermoregulation) ist eine lebenswichtige Homöostasefunktion. Der Hypothalamus fungiert als Thermostat: Afferente Signale von Kalt- und Warmrezeptoren in Haut und Blut; efferente Reaktionen: Schwitzen (Wärmeabgabe durch Verdampfung), Vasodilatation (mehr Blut zur Haut), Muskelzittern (Wärmeproduktion), Vasokonstriktion (weniger Wärmeverlust). Sepsis verschiebt den hypothalamischen Sollwert nach oben (Pyrogene: IL-1, IL-6, TNF-α, Prostaglandin E₂) → Fieber. Antipyretika (Paracetamol, Ibuprofen, Aspirin) hemmen COX-Enzyme → weniger PGE₂ → Sollwert sinkt → Schwitzen und Vasodilatation → Fiebersenkung.',
      selfTest: [
        {
          question: 'Welche Temperatur in Kelvin entspricht 37°C (Körpertemperatur)?',
          options: ['236 K', '273 K', '310,15 K', '37 K', '373 K'],
          correctIndex: 2,
          explanation: 'T[K] = T[°C] + 273,15 = 37 + 273,15 = 310,15 K. Alle thermodynamischen Berechnungen (Gasgesetze, Carnot-Wirkungsgrad) müssen mit Kelvin durchgeführt werden. Körpertemperatur in Kelvin: 310,15 K.',
          hints: ['T[K] = T[°C] + 273,15.', '37 + 273,15 = 310,15 K.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie viel Energie Q wird benötigt, um 500 g Wasser von 20°C auf 100°C zu erwärmen? (c_Wasser = 4186 J/(kg·K))',
          options: ['4186 J', '41.860 J', '167.440 J', '83.720 J', '8372 J'],
          correctIndex: 2,
          explanation: 'Q = m·c·ΔT = 0,5 kg × 4186 J/(kg·K) × 80 K = 167.440 J ≈ 167 kJ. Diese Energie entspricht etwa 40 kcal. Ein Wasserkocher mit 2000 W braucht Q/P = 167.440/2000 ≈ 84 Sekunden — plausibel.',
          hints: ['Q = m·c·ΔT. ΔT = 100 − 20 = 80 K.', 'm = 500 g = 0,5 kg; 0,5 × 4186 × 80 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist Wasser so gut zur Thermoregulation des menschlichen Körpers geeignet?',
          options: [
            'Weil es die niedrigste Wärmekapazität aller Flüssigkeiten hat',
            'Weil es bei 37°C verdampft',
            'Weil es die höchste spezifische Wärmekapazität der gängigen Flüssigkeiten hat',
            'Weil es sehr leicht ist (geringe Dichte)',
            'Weil es perfekt elektrisch leitet',
          ],
          correctIndex: 2,
          explanation: 'Wasser hat mit c = 4186 J/(kg·K) die höchste spezifische Wärmekapazität der gebräuchlichen Flüssigkeiten. Das bedeutet: Um die Körpertemperatur um 1°C zu ändern, muss enorm viel Energie zu- oder abgeführt werden — der Körper ist gut gepuffert gegen Temperaturschwankungen. Zudem hat Wasser eine hohe Verdampfungswärme (2257 kJ/kg), was effizientes Schwitzen ermöglicht.',
          hints: ['c_Wasser = 4186 J/(kg·K) — der höchste Wert unter gängigen Flüssigkeiten.', 'Hohe Wärmekapazität = viel Energie für wenig Temperaturänderung.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum schwimmt Eis auf Wasser?',
          options: [
            'Weil Eis durch Oberflächenspannung gehalten wird',
            'Weil Wasser die Dichte von Eis unterschreitet',
            'Weil Eis weniger dicht ist als flüssiges Wasser (Anomalie des Wassers)',
            'Weil bei 0°C Wasser und Eis gleich dicht sind',
            'Weil die Kristallstruktur des Eises Lufteinschlüsse enthält',
          ],
          correctIndex: 2,
          explanation: 'Die Anomalie des Wassers: Das Dichtemaximum liegt bei 4°C (ρ = 1000 kg/m³). Beim Gefrieren nimmt Wasser eine hexagonale Kristallstruktur (Eis) an, die mehr Raum einnimmt als flüssiges Wasser → Eis hat niedrigere Dichte als Wasser → schwimmt oben. Diese Eigenschaft ist für aquatische Ökosysteme lebenswichtig: Seen frieren von oben nach unten zu, und unter dem Eis bleibt Wasser bei 4°C.',
          hints: ['Dichte Eis (0°C) ≈ 917 kg/m³ < Dichte Wasser (0°C) ≈ 1000 kg/m³.', 'Anomalie = Dichtemaximum bei 4°C, nicht bei 0°C wie erwartet.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Stahldrahtseil (L₀ = 100 m, α = 12 × 10⁻⁶ /K) verlängert sich bei Erwärmung um 30 K um wie viel?',
          options: ['0,036 mm', '0,36 mm', '3,6 mm', '36 mm', '360 mm'],
          correctIndex: 2,
          explanation: 'ΔL = α·L₀·ΔT = 12 × 10⁻⁶ /K × 100 m × 30 K = 12 × 10⁻⁶ × 3000 = 0,036 m = 3,6 cm = 36 mm. Warte — 0,036 m = 3,6 cm = 36 mm. Brücken müssen daher Dehnungsfugen haben: Eine 1 km lange Stahlbrücke verlängert sich bei 30 K Temperaturunterschied um 0,36 m = 36 cm!',
          hints: ['ΔL = α·L₀·ΔT. Einheiten beachten: α in /K, L in m, ΔT in K.', '12 × 10⁻⁶ × 100 × 30 = 0,036 m = 3,6 cm.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-4-02',
      title: 'Hauptsätze der Thermodynamik',
      content: `Die Thermodynamik ist die Wissenschaft von Wärme, Arbeit und Energie. Ihre vier Hauptsätze beschreiben fundamentale Gesetze der Natur, die keine Ausnahme kennen — nicht für Wärmekraftmaschinen, nicht für Lebewesen, nicht für Sterne. Wer die Thermodynamik versteht, versteht, warum kein Perpetuum mobile möglich ist, warum das Universum in Richtung größerer Unordnung strebt und wie der menschliche Stoffwechsel physikalisch betrachtet aussieht.

Der nullte Hauptsatz definiert das Konzept der Temperatur: Wenn System A mit System B im thermischen Gleichgewicht steht und B mit System C, dann stehen auch A und C im thermischen Gleichgewicht. Dies macht Temperatur zu einer messbaren Eigenschaft: Ein Thermometer (B) zeigt die Temperatur des Patienten (A) an, indem es mit ihm ins Gleichgewicht kommt.

Der erste Hauptsatz ist die Energieerhaltung für thermodynamische Systeme: ΔU = Q + W. Die innere Energie U eines Systems ändert sich um die zugeführte Wärme Q plus die am System verrichtete Arbeit W. Energie wird weder erzeugt noch vernichtet — nur umgewandelt. Im Körper: Nahrungsenergie (Q) wird in Arbeit (Muskeln, Ionenpumpen) und Wärme umgewandelt. Das metabolische Äquivalent (MET) gibt an, wie viel Energie im Vergleich zur Ruhe verbraucht wird: Sitzen = 1 MET, Laufen = 7–8 MET, Treppensteigen = 4 MET.

Der zweite Hauptsatz ist das tiefgreifendste physikalische Gesetz: Die Entropie S eines abgeschlossenen Systems kann nur zunehmen oder gleichbleiben — nie abnehmen. Entropie ist ein Maß für die Unordnung oder die Anzahl der möglichen Mikrozustände: S = k_B·ln(Ω), wobei Ω die Anzahl der Mikrozustände ist. Wärme fließt spontan nur von heiß nach kalt — nie umgekehrt (das würde die Entropie des Universums verringern). Ein Wärmekraftmaschine kann nicht 100% der Wärme in Arbeit umwandeln — ein Teil muss an die Umgebung abgegeben werden. Der maximale Wirkungsgrad (Carnot-Wirkungsgrad) ist η_max = 1 − T_kalt/T_heiß (in Kelvin!).

Wärme kann auf drei Arten übertragen werden: Wärmeleitung (Konduktion) durch direkten Molekülkontakt; Konvektion durch Flüssigkeits- oder Gasströmung; Strahlung (Radiation) durch elektromagnetische Wellen. Die Strahlungsleistung eines Körpers beschreibt das Stefan-Boltzmann-Gesetz: P = ε·σ·A·T⁴, wobei σ = 5,67 × 10⁻⁸ W/(m²·K⁴) die Stefan-Boltzmann-Konstante und ε der Emissionsgrad ist (Schwarzer Strahler: ε=1; menschliche Haut: ε ≈ 0,98). Das T⁴-Gesetz erklärt, warum hochtemperaturige Körper enorm viel Wärme abstrahlen.

Im menschlichen Körper gibt es alle drei Wärmeübertragungsarten: Wärmeleitung durch Gewebe (Wärmeleitkoeffizient Fett ≈ 0,2 W/(m·K), Muskel ≈ 0,5 W/(m·K)); Konvektion durch Blutfluss (Hauptmechanismus des Wärmetransports im Körper); Strahlung von der Haut (bei Raumtemperatur 40–60% des Wärmeverlusts). Schwitzen ist der vierte Mechanismus: Verdampfungswärme von Wasser (2257 kJ/kg) kühlt effektiv.`,
      lernziele: [
        'Die vier Hauptsätze der Thermodynamik formulieren',
        'Ersten Hauptsatz (ΔU = Q + W) auf Körperstoffwechsel anwenden',
        'Entropie als Maß der Unordnung verstehen',
        'Carnot-Wirkungsgrad berechnen und Stefan-Boltzmann-Gesetz kennen',
      ],
      sections: [
        {
          heading: '0. und 1. Hauptsatz der Thermodynamik',
          text: '0. Hauptsatz: Thermisches Gleichgewicht ist transitiv → ermöglicht Temperaturmessung. 1. Hauptsatz: ΔU = Q + W (Energieerhaltung). U = innere Energie [J]; Q = zugeführte Wärme; W = am System geleistete Arbeit. Körper-Stoffwechsel: Nahrungsenergie → Muskelarbeit + Wärme. MET-System: Ruhe = 1 MET = 3,5 mL O₂/(kg·min) ≈ 80 W Metabolismus. Laufen (10 km/h) ≈ 10 MET = 800 W Metabolismus. Kalorimetrie: misst Wärmeproduktion des Körpers.',
          merksatz: '1. Hauptsatz: ΔU = Q + W — Energie ist erhaltungsgesetzt, nie erzeugt oder vernichtet',
        },
        {
          heading: '2. Hauptsatz und Entropie',
          text: '2. Hauptsatz: Entropie S ≥ 0 im abgeschlossenen System (Entropie nimmt nie ab). Entropie: S = k_B·ln(Ω) [J/K]; Maß für Unordnung/Mikrozustände. Wärme fließt spontan heiß → kalt (Entropiezunahme). Carnot-Wirkungsgrad: η_max = 1 − T_kalt/T_heiß (in Kelvin). Beispiel: Dampfturbine mit T_heiß = 800 K, T_kalt = 300 K: η_max = 1 − 300/800 = 62,5%. Kein realer Motor erreicht diesen Wert. Leben scheinbar gegen Entropie: Organismen erniedrigen lokale Entropie auf Kosten der Umgebungsentropie.',
        },
        {
          heading: 'Wärmeübertragung und Stefan-Boltzmann',
          text: 'Wärmeleitung: Q/t = λ·A·ΔT/L [W]. Konvektion: Wärmetransport durch Bewegung von Fluiden (Blutfluss!). Strahlung: P = ε·σ·A·T⁴. Menschliche Haut: ε ≈ 0,98; T ≈ 310 K; A ≈ 1,8 m². Strahlungsleistung: P ≈ 0,98 × 5,67 × 10⁻⁸ × 1,8 × (310)⁴ ≈ 886 W (Gesamtstrahlung) minus Umgebungsabsorption → Nettostrahlung ≈ 40–100 W bei 20°C Raumtemperatur. Schwitzen: Q_verd = m·L_v = m × 2257 kJ/kg; 1 L Schweiß = 2257 kJ = 540 kcal.',
        },
      ],
      merksätze: [
        '2. Hauptsatz: Entropie nimmt im abgeschlossenen System zu — kein Perpetuum mobile!',
        'Carnot-Wirkungsgrad: η = 1 − T_kalt/T_heiß (IMMER in Kelvin)',
        'Stefan-Boltzmann: P = ε·σ·A·T⁴ — Strahlungsleistung wächst mit T⁴',
      ],
      altfrage: {
        question: 'Ein Kraftwerk hat eine Verbrennungstemperatur von 550°C und gibt Wärme bei 30°C an die Umgebung ab. Wie groß ist der maximale Carnot-Wirkungsgrad?',
        answer: 'T_heiß = 550 + 273 = 823 K; T_kalt = 30 + 273 = 303 K. η_Carnot = 1 − T_kalt/T_heiß = 1 − 303/823 = 1 − 0,368 = 0,632 = 63,2%. Kein reales Kraftwerk kann 63,2% der Wärme in elektrische Energie umwandeln — Irreversibilitäten (Reibung, Wärmeleitungsverluste) setzen den realen Wirkungsgrad auf 35–45% herab.',
      },
      klinischerBezug: 'Die Thermodynamik des Körpers ist die Grundlage der Ernährungsmedizin. Der Grundumsatz (Basal Metabolic Rate, BMR) eines 70 kg-Mannes beträgt etwa 1700 kcal/Tag = 80 W (kontinuierlich wie eine Glühbirne). Adipositas entsteht, wenn die Energiebilanz positiv ist (mehr Nahrungsenergie als Verbrauch): 7700 kcal Überschuss ≈ 1 kg Körperfett. Der zweite Hauptsatz verbietet ein Abnehmen ohne Kaloriendefizit. ATP-Synthase (F₀F₁-ATPase) ist thermodynamisch eine Wärmekraftmaschine, die den Protonengradienten über die innere Mitochondrienmembran nutzt, um ADP zu ATP zu phosphorylieren — der Wirkungsgrad beträgt etwa 40%.',
      selfTest: [
        {
          question: 'Was besagt der zweite Hauptsatz der Thermodynamik?',
          options: [
            'Energie kann nicht erzeugt oder vernichtet werden',
            'Wärme kann spontan nur von kalt nach heiß fließen',
            'Die Entropie eines abgeschlossenen Systems kann nur zunehmen oder gleichbleiben',
            'Jede Maschine hat einen maximalen Wirkungsgrad von 100%',
            'Wärme und Arbeit sind äquivalent',
          ],
          correctIndex: 2,
          explanation: 'Der zweite Hauptsatz: Die Entropie eines abgeschlossenen Systems nimmt nie ab (ΔS ≥ 0). Dies impliziert: Wärme fließt spontan nur von heiß nach kalt; kein Prozess ist vollständig reversibel; kein Motor kann alle Wärme in Arbeit umwandeln. Der erste Hauptsatz (Energieerhaltung) lautet: ΔU = Q + W.',
          hints: ['Entropie ist das Schlüsselkonzept des 2. Hauptsatzes.', 'Spontane Prozesse verlaufen in Richtung größerer Entropie.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Wärmepumpe arbeitet zwischen T_kalt = 5°C und T_heiß = 30°C. Wie groß ist der maximale Carnot-Wirkungsgrad eines damit betriebenen Wärmemotors?',
          options: ['8,3%', '16,7%', '83%', '100%', '25%'],
          correctIndex: 0,
          explanation: 'T_kalt = 5 + 273 = 278 K; T_heiß = 30 + 273 = 303 K. η_Carnot = 1 − T_kalt/T_heiß = 1 − 278/303 = 1 − 0,917 = 0,083 = 8,3%. Bei kleinen Temperaturdifferenzen ist der Carnot-Wirkungsgrad sehr gering. Wärmepumpen als Heizgeräte sind effizienter als als Motoren.',
          hints: ['Carnot-Wirkungsgrad: η = 1 − T_kalt/T_heiß (Kelvin!).', 'Umrechnen: 5°C = 278 K; 30°C = 303 K.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist die Entropie S eines Systems physikalisch?',
          options: [
            'Die kinetische Energie der Moleküle',
            'Ein Maß für die Unordnung oder die Anzahl zugänglicher Mikrozustände',
            'Die Wärme, die das System aufgenommen hat',
            'Der Druck, den das System auf die Umgebung ausübt',
            'Die elektrische Ladung des Systems',
          ],
          correctIndex: 1,
          explanation: 'Entropie S = k_B·ln(Ω), wobei Ω die Anzahl der zugänglichen Mikrozustände ist. Ein System mit vielen möglichen Anordnungen (Unordnung) hat hohe Entropie. Gas hat höhere Entropie als Flüssigkeit (mehr Mikrozustände). Das Schmelzen von Eis erhöht die Entropie (flüssiges Wasser hat mehr Mikrozustände als Eis-Kristallgitter).',
          hints: ['S = k_B·ln(Ω) — mehr Mikrozustände = höhere Entropie.', 'Unordnung = hohe Entropie; Ordnung = niedrige Entropie.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Auf welche Art überträgt das Blut hauptsächlich Wärme im menschlichen Körper?',
          options: [
            'Konduktion (Wärmeleitung durch Blutgefäßwände)',
            'Konvektion (Wärmetransport durch strömende Blutflüssigkeit)',
            'Strahlung (Infrarotemission des Blutes)',
            'Verdampfung (Wasserverdunstung im Blut)',
            'Thermoelektrizität (elektrisch induzierter Wärmetransport)',
          ],
          correctIndex: 1,
          explanation: 'Das Blut überträgt Wärme primär durch Konvektion: Die strömende Flüssigkeit transportiert Wärmeenergie von warmen (Muskel, Leber) zu kühleren Körperregionen oder zur Körperoberfläche. Diese konvektive Wärmeübertragung ist der effizienteste Mechanismus im Körper — bei körperlicher Aktivität erhöht sich die Hautdurchblutung um den Faktor 10–30 zur verbesserten Wärmeabgabe.',
          hints: ['Konvektion = Wärmetransport durch Strömung von Fluiden.', 'Blut strömt von warmen zu kühlen Regionen und transportiert Wärme.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie viel Energie wird durch Verdampfen von 1 Liter Schweiß abgeführt? (L_v(Wasser) = 2257 kJ/kg)',
          options: ['22,57 kJ', '225,7 kJ', '2257 kJ', '22.570 kJ', '2,257 kJ'],
          correctIndex: 2,
          explanation: 'Q = m·L_v = 1 kg × 2257 kJ/kg = 2257 kJ ≈ 540 kcal. Das Verdampfen von 1 Liter Schweiß entzieht dem Körper 540 kcal — das entspricht etwa einem Viertel des Tageskalorienbedarfs! Schwitzen ist daher ein außerordentlich effektiver Thermoregulationsmechanismus.',
          hints: ['Verdampfungswärme: Q = m·L_v. m = 1 L = 1 kg Wasser.', '1 kg × 2257 kJ/kg = 2257 kJ.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-4-03',
      title: 'Gasgesetze und ideales Gas',
      content: `Gase sind die einfachsten thermodynamischen Systeme — ihre Teilchen sind weit voneinander entfernt und interagieren kaum. Das ideale Gas ist ein Modell, in dem Moleküle als Punktmassen betrachtet werden, die perfekt elastisch stoßen und keine gegenseitigen Anziehungskräfte haben. Dieses Modell gilt erstaunlich gut für reale Gase bei normalen Drücken und Temperaturen.

Das ideale Gasgesetz p·V = n·R·T vereint drei historisch getrennte Gesetze in einer Formel. R = 8,314 J/(mol·K) ist die universelle Gaskonstante. n ist die Stoffmenge in Mol. Wichtig: T muss in Kelvin angegeben werden! Das Gesetz kann auch als p·V = N·k_B·T geschrieben werden, mit N der Teilchenzahl und k_B = 1,38 × 10⁻²³ J/K (Boltzmann-Konstante). Es verknüpft drei Zustandsgrößen: Druck (p), Volumen (V), Temperatur (T). Wenn eine dieser Größen festgehalten wird, ergibt sich eines der klassischen Gasgesetze.

Boyle-Mariotte-Gesetz: Bei konstanter Temperatur (isotherme Prozess) gilt p·V = const → p₁V₁ = p₂V₂. Halbiert man das Volumen, verdoppelt sich der Druck. Dies beschreibt das Verhalten von Druckluftgeräten (Taucherausrüstung!) und die Kompression bei der Einatmung. Wenn das Zwerchfell nach unten sinkt, vergrößert sich das Thoraxvolumen, der Druck in der Lunge sinkt unter den Atmosphärendruck, und Luft strömt ein (Unterdruckbeatmung).

Gay-Lussac-Gesetze: Bei konstantem Druck (isobarer Prozess): V/T = const → V₁/T₁ = V₂/T₂. Charles' Gesetz: Gase dehnen sich bei Erwärmung aus. Ein Ballon platzt, wenn man ihn zu stark erhitzt. Bei konstantem Volumen (isochorer Prozess): p/T = const → p₁/T₁ = p₂/T₂. Der Druck im Autoreifen steigt bei Fahrt (Erwärmung).

Das Daltonsche Partialdruck-Gesetz: In einem Gasgemisch ist der Gesamtdruck die Summe der Partialdrücke der Einzelgase: p_ges = Σp_i. Jedes Gas verhält sich so, als wäre es allein im Volumen. Atemluft besteht aus N₂ (78%), O₂ (21%), Ar (0,9%), CO₂ (0,04%). Bei Atmosphärendruck (760 mmHg): pO₂ = 0,21 × 760 = 159,6 mmHg; pCO₂ = 0,0004 × 760 = 0,3 mmHg. In den Alveolen nach Sättigungskorrektur: pO₂ ≈ 100 mmHg, pCO₂ ≈ 40 mmHg. Der Diffusion von O₂ ins Blut und CO₂ aus dem Blut folgt dem Konzentrationsgradienten der Partialdrücke.

Reale Gase weichen vom idealen Verhalten ab, wenn die Dichte hoch ist (hoher Druck, niedrige Temperatur). Die Van-der-Waals-Gleichung korrigiert: (p + a/V²)(V − b) = nRT, wobei a die intermolekularen Anziehungskräfte und b das Eigenvolumen der Moleküle berücksichtigt. CO₂ weist starke Van-der-Waals-Abweichungen auf, was die Bildung von überkritischem CO₂ ermöglicht — eine wichtige Technik in der Lebensmittelchemie (Koffeinextraktion) und Pharmazie.`,
      lernziele: [
        'Ideales Gasgesetz p·V = n·R·T anwenden und zwischen isothermen, isobaren und isochoren Prozessen unterscheiden',
        'Dalton-Gesetz der Partialdrücke auf Atemphysiologie anwenden',
        'Boyle-Mariotte, Gay-Lussac und das Temperatur-Druck-Gesetz erklären',
        'Abweichungen realer Gase qualitativ beschreiben',
      ],
      sections: [
        {
          heading: 'Ideales Gasgesetz — Grundlagen und Prozesse',
          text: 'p·V = n·R·T. R = 8,314 J/(mol·K). Zustandsänderungen: Isotherm (T=const): p·V = const (Boyle-Mariotte). Isobar (p=const): V/T = const (Charles). Isochor (V=const): p/T = const (Gay-Lussac). Adiabatisch (Q=0): p·V^γ = const (γ = Adiabatenexponent). Normzustand: T₀ = 273,15 K, p₀ = 101.325 Pa = 1 atm. Normvolumen 1 mol ideales Gas: V = n·R·T/p = 1 × 8,314 × 273,15/101325 = 22,4 L (Molvolumen).',
          merksatz: 'p·V = n·R·T; T IMMER in Kelvin! Normvolumen: 1 mol Gas = 22,4 L bei 0°C/1 atm',
        },
        {
          heading: 'Partialdrücke und Atemphysiologie',
          text: 'Dalton: p_ges = Σp_i. Partialdrücke in Atemluft (760 mmHg): pO₂ = 159 mmHg, pCO₂ = 0,3 mmHg. Alveolär: pO₂ ≈ 100 mmHg, pCO₂ ≈ 40 mmHg (wegen CO₂-Einstrom aus Blut). Arterielles Blut: paO₂ ≈ 90–100 mmHg, paCO₂ ≈ 35–45 mmHg. Diffusion: O₂ von Alveole ins Blut (Gradient ≈ 60 mmHg); CO₂ vom Blut in Alveole (Gradient ≈ 6 mmHg, aber hohe Löslichkeit). Hypoxie: paO₂ < 60 mmHg (Sauerstoffsättigung < 90%).',
        },
        {
          heading: 'Klinische Anwendungen der Gasgesetze',
          text: 'Boyle-Mariotte: Atemphysiologie (Zwerchfell senkt sich → V↑ → p↓ → Einatmung). Überdruckbeatmung umgekehrt: externer Druck p↑ → Luft wird in Lunge gepresst. Dekompressionskrankheit (Tauchererkrankung): bei schnellem Druckabfall (p↓ → V↑) entstehen N₂-Gasblasen im Blut. Gay-Lussac: Autoreifen im Sommer (Erwärmung → Druckanstieg). Hochaltitude: p_ges sinkt → pO₂ sinkt → Höhenkrankheit bei paO₂ < 60 mmHg (ab ≈ 3000 m). CO₂-Narkose: pCO₂ > 80 mmHg → Bewusstlosigkeit.',
        },
      ],
      merksätze: [
        'Boyle-Mariotte: p·V = const (isotherm); halbiertes Volumen → doppelter Druck',
        'Dalton: p_ges = Σp_i; alveolär: pO₂ ≈ 100 mmHg, pCO₂ ≈ 40 mmHg',
        'Ideales Gas: p·V = n·R·T; Normvolumen = 22,4 L/mol',
      ],
      altfrage: {
        question: 'Ein Taucher atmet bei 30 m Wassertiefe Pressluft (p = 4 atm). Das Volumen seiner Lungen beträgt 6 L. Wenn er aufsteigt auf 10 m (p = 2 atm) und ausatmet, was passiert, wenn er die Luft anhält?',
        answer: 'Boyle-Mariotte: p₁V₁ = p₂V₂. 4 atm × 6 L = 2 atm × V₂ → V₂ = 12 L. Das Lungenvolumen würde sich verdoppeln — die maximale Lungenkapazität beträgt aber nur 6 L. Das Anhalten der Luft beim Auftauchen führt zu Lungenüberblähung (Pulmonales Barotrauma) mit Ruptur von Lungenbläschen → Pneumothorax oder Luftembolie. Daher lautet die goldene Regel beim Tauchen: Beim Auftauchen immer ausatmen!',
      },
      klinischerBezug: 'Die Blutgasanalyse (BGA) misst paO₂, paCO₂, pH, Bikarbonat und ist das zentrale Werkzeug der Intensivmedizin. Respiratorische Azidose: paCO₂ > 45 mmHg (Hypoventilation, COPD). Respiratorische Alkalose: paCO₂ < 35 mmHg (Hyperventilation, Angst). Die Alveolärgleichung: pAO₂ = FiO₂ × (p_atm − pH₂O) − paCO₂/RQ gibt den alveolären Sauerstoffpartialdruck. Bei Gabe von 100% O₂ (FiO₂ = 1,0): pAO₂ = 1,0 × (760 − 47) − 40/0,8 = 713 − 50 = 663 mmHg. Dies ermöglicht die Diagnose von Diffusionsstörungen versus Shunts.',
      selfTest: [
        {
          question: 'Ein Gas bei 1 atm und 20°C wird auf 2 atm komprimiert (Temperatur bleibt konstant). Wie ändert sich das Volumen?',
          options: ['Verdoppelt sich', 'Bleibt gleich', 'Halbiert sich', 'Viertelt sich', 'Wird dreimal kleiner'],
          correctIndex: 2,
          explanation: 'Boyle-Mariotte: p₁V₁ = p₂V₂ (T = const). 1 atm × V₁ = 2 atm × V₂ → V₂ = V₁/2. Das Volumen halbiert sich. Diese Beziehung ist fundamental für Atemphysiologie und Druckkammermedizin.',
          hints: ['Boyle-Mariotte: p·V = const bei konstanter Temperatur.', 'p verdoppelt sich → V halbiert sich (umgekehrt proportional).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welchen Partialdruck (in mmHg) hat O₂ in der Einatemluft auf Meereshöhe? (pO₂ = 21% von 760 mmHg)',
          options: ['21 mmHg', '100 mmHg', '159 mmHg', '760 mmHg', '40 mmHg'],
          correctIndex: 2,
          explanation: 'pO₂ = 0,21 × 760 mmHg = 159,6 mmHg ≈ 160 mmHg. In den Alveolen fällt pO₂ auf etwa 100 mmHg ab (durch Wasserdampf, CO₂-Einmischung). Im arteriellen Blut: paO₂ ≈ 90–100 mmHg. Am Hochgebirge sinkt pO₂ mit dem Atmosphärendruck.',
          hints: ['Dalton: pO₂ = Anteil O₂ × Gesamtdruck = 0,21 × 760 mmHg.', '0,21 × 760 = 159,6 ≈ 160 mmHg.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum erhöht sich der Druck in einem Autoreifen bei längerem Fahren?',
          options: [
            'Weil sich Luft beim Fahren zusammenzieht',
            'Weil die Reifenwände unter Spannung stehen',
            'Weil sich die Luft im Reifen durch Reibungswärme erwärmt (Gay-Lussac: p/T = const)',
            'Weil Sauerstoff durch Gummiwände diffundiert',
            'Weil der Reifen sich ausdehnt und mehr Volumen schafft',
          ],
          correctIndex: 2,
          explanation: 'Gay-Lussac (isochorer Prozess, V = const): p/T = const → p₂/p₁ = T₂/T₁. Bei Fahrt erzeugt Reifenverformung Wärme → T steigt → p steigt proportional (in Kelvin). Beispiel: von 20°C (293 K) auf 60°C (333 K): p₂ = p₁ × 333/293 = p₁ × 1,14 → 14% Druckanstieg.',
          hints: ['Volumen des Reifens bleibt konstant (isochor): p/T = const.', 'Erwärmung → T↑ → p↑ bei konstantem V.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Volumen nimmt 2 mol eines idealen Gases bei 27°C und 1 atm ein? (R = 8,314 J/(mol·K), 1 atm = 101325 Pa)',
          options: ['22,4 L', '44,8 L', '49,3 L', '24,5 L', '11,2 L'],
          correctIndex: 2,
          explanation: 'V = nRT/p = 2 × 8,314 × 300/(101325) = 4988,4/101325 = 0,04924 m³ = 49,24 L ≈ 49,3 L. Hinweis: T = 27°C = 300 K (nicht 273 K!). Bei 0°C wären es 2 × 22,4 = 44,8 L; bei 27°C etwas mehr wegen der höheren Temperatur.',
          hints: ['V = n·R·T/p. T = 27 + 273 = 300 K.', 'n=2, R=8,314, T=300, p=101325: V = 2×8,314×300/101325.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zur Dekompressionskrankheit ("Taucherkrankheit") ist physikalisch korrekt?',
          options: [
            'Sie entsteht durch zu viel CO₂ im Blut beim Auftauchen',
            'Beim schnellen Druckabfall (Boyle-Mariotte) löst sich N₂ aus dem Blut aus und bildet Gasblasen',
            'Sie wird durch UV-Strahlung unter Wasser verursacht',
            'Sie entsteht nur bei Tauchtiefen über 100 m',
            'Sie ist eine allergische Reaktion auf Druckluft',
          ],
          correctIndex: 1,
          explanation: 'Bei erhöhtem Umgebungsdruck (Tauchen) löst sich mehr N₂ im Blut (Henry-Gesetz: Gaslöslichkeit ~ Druck). Beim schnellen Auftauchen sinkt der Druck rapide — analog zu Boyle-Mariotte dehnt sich das gelöste Gas aus und bildet Mikroblasen im Blut und Gewebe. Diese Blasen verursachen Gelenk- und Muskelschmerzen ("bends"), Ischämien und Embolien. Prävention: langsames Auftauchen mit Dekompressionsstopps.',
          hints: ['Beim Druckabfall löst sich Stickstoff aus dem Blut aus — denke an Kohlensäure beim Öffnen einer Flasche.', 'Boyle-Mariotte: p↓ → V↑ — gelöstes Gas expandiert.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-4-04',
      title: 'Phasenübergänge und Anomalie des Wassers',
      content: `Materie existiert in verschiedenen Aggregatzuständen — fest, flüssig, gasförmig und als Plasma. Der Übergang zwischen diesen Zuständen (Phasenübergang) ist ein faszinierendes physikalisches Phänomen: Bei einer bestimmten Temperatur und einem bestimmten Druck kann Energie zugeführt werden, ohne dass sich die Temperatur ändert — stattdessen ändert sich der Zustand der Materie. Diese "versteckte" Energie heißt latente Wärme.

Das Schmelzen (fest → flüssig) und Erstarren (flüssig → fest) finden bei der Schmelztemperatur statt. Schmelzwärme von Eis: L_S = 334 kJ/kg = 80 kcal/kg. Das Verdampfen (flüssig → gasförmig) und Kondensieren (gasförmig → flüssig) finden bei der Siedetemperatur statt. Verdampfungswärme von Wasser bei 100°C: L_V = 2257 kJ/kg = 540 kcal/kg. Die Sublimation (fest → gasförmig direkt) und Resublimation sind bei bestimmten Bedingungen möglich, z.B. Trockenpulver-Inhalatoren nutzen sublimiertes Trägermedium.

Das Phasendiagramm eines Stoffes zeigt, in welchem Aggregatzustand er sich bei gegebenen Druck- und Temperaturbedingungen befindet. Der Tripelpunkt ist die einzige Kombination von Druck und Temperatur, bei der alle drei Phasen (fest, flüssig, gasförmig) gleichzeitig koexistieren. Für Wasser: Tripelpunkt bei 0,01°C und 611,7 Pa (sehr niedriger Druck!). Der kritische Punkt ist die Bedingung, oberhalb derer kein Unterschied mehr zwischen flüssiger und gasförmiger Phase besteht (überkritisches Fluid). Für Wasser: 374°C und 221 bar. Überkritisches Wasser ist ein wichtiges industrielles Lösungsmittel.

Wasser ist in vielerlei Hinsicht ein anomaler Stoff. Erstens: Das Dichtemaximum bei 4°C. Beim Abkühlen von 100°C auf 4°C verdichtet sich Wasser normal. Dann aber: Beim weiteren Abkühlen von 4°C auf 0°C dehnt sich Wasser aus! Eis (0°C) hat eine Dichte von 917 kg/m³, weniger als flüssiges Wasser (1000 kg/m³) — weshalb Eis auf Wasser schwimmt. Dies liegt an der hexagonalen Kristallstruktur des Eises: Die Wassermoleküle (H₂O) bilden durch Wasserstoffbrücken ein sehr offenes Gitterwerk, das mehr Platz einnimmt als die ungeordnete Flüssigkeitsphase.

Die kolligativen Eigenschaften sind Eigenschaften von Lösungen, die nicht von der Natur der gelösten Teilchen, sondern nur von ihrer Anzahl abhängen. Gefrierpunktserniedrigung: ΔT_f = K_f · b (K_f = kryoskopische Konstante des Lösungsmittels; b = Molalität). Für Wasser: K_f = 1,86 K·kg/mol. Blutplasma (Osmolalität ≈ 290 mOsm/kg) hat einen Gefrierpunkt von −0,54°C. Siedepunkterhöhung: ΔT_b = K_b · b (K_b = 0,51 K·kg/mol für Wasser). Kochsalzlösung (0,9% NaCl = 0,154 mol/kg = 0,308 Osm/kg) siedet um ΔT_b = 0,51 × 0,308 = 0,16°C früher als reines Wasser. Diese Eigenschaften sind für die Herstellung osmotisch verträglicher Infusionslösungen fundamental.`,
      lernziele: [
        'Phasenübergänge und latente Wärme (Schmelz- und Verdampfungswärme) berechnen',
        'Phasendiagramm interpretieren (Tripelpunkt, kritischer Punkt)',
        'Anomalie des Wassers und ihre biologische Bedeutung erklären',
        'Kolligative Eigenschaften (Gefrierpunktserniedrigung, Siedepunkterhöhung) anwenden',
      ],
      sections: [
        {
          heading: 'Phasenübergänge und latente Wärme',
          text: 'Latente Wärme = Energie für Phasenübergang ohne Temperaturänderung. Schmelzwärme Eis: L_S = 334 kJ/kg. Verdampfungswärme Wasser (100°C): L_V = 2257 kJ/kg. Q = m·L. Schwitzen: 1 L Schweiß → Q = 1 × 2257 = 2257 kJ = 540 kcal entzogen! Sublimation: fest → gasförmig (Beispiel: CO₂-Trockeneis, Koffeinsublimation). Klinisch: Kryochirurgie nutzt Gefrierpunktsenergien; Laser-Ablation verdampft Gewebe; Elektrokauterisation verdampft Wasser in Zellen.',
          merksatz: 'Verdampfungswärme Wasser: L_V = 2257 kJ/kg — 6× größer als Schmelzwärme (334 kJ/kg)',
        },
        {
          heading: 'Phasendiagramm und Anomalie des Wassers',
          text: 'Phasendiagramm: Kurven trennen Phasenbereiche. Tripelpunkt Wasser: 0,01°C, 611,7 Pa. Kritischer Punkt: 374°C, 221 bar. Anomalie des Wassers: Dichtemaximum bei 4°C (1000 kg/m³). Eis: 917 kg/m³ < Wasser → Eis schwimmt. Ursache: Wasserstoffbrücken bilden hexagonales Gitter mit viel Raum. Biologische Bedeutung: Seen frieren von oben zu → Organismen überleben bei 4°C unter Eis. Gletscher fließen unter Druck (Druckschmelzpunkt: erhöhter Druck senkt Schmelzpunkt von Eis leicht).',
        },
        {
          heading: 'Kolligative Eigenschaften',
          text: 'Gefrierpunktserniedrigung: ΔT_f = K_f · b; K_f(Wasser) = 1,86 K·kg/mol. Siedepunkterhöhung: ΔT_b = K_b · b; K_b(Wasser) = 0,51 K·kg/mol. Osmolalität Blut ≈ 290 mOsm/kg → ΔT_f = 1,86 × 0,29 = 0,54°C → Blut gefriert bei −0,54°C. Isolierung: Frostschutzmittel (Glykol, NaCl) erniedrigen Gefrierpunkt. Klinisch: Osmolalitätsmessung im Labor durch Kryoskopie (Gefrierpunkterniedrigung). Hyperosmolares Koma: Osmolalität > 320 mOsm/kg → Zelldehydratation.',
        },
      ],
      merksätze: [
        'Latente Wärme: Q = m·L; Schmelz L_S(Eis) = 334 kJ/kg; Verdampfung L_V(Wasser) = 2257 kJ/kg',
        'Anomalie des Wassers: Dichtemaximum bei 4°C; Eis schwimmt (917 < 1000 kg/m³)',
        'Kolligativ: ΔT_f = K_f · b; Blut gefriert bei −0,54°C wegen gelöster Teilchen',
      ],
      altfrage: {
        question: 'Bei starker körperlicher Arbeit schwitzt ein Sportler 2 L/h. Welche thermische Leistung (in Watt) wird durch Schwitzen abgegeben? (L_V = 2257 kJ/kg)',
        answer: 'Q pro Stunde: m = 2 kg; Q = m·L_V = 2 × 2257 = 4514 kJ/h. Leistung: P = Q/t = 4514000 J / 3600 s = 1254 W ≈ 1,25 kW. Ein schwitzender Sportler gibt also etwa 1,25 kW thermische Leistung ab — das entspricht der Heizleistung eines kleinen Heizgeräts. Gesamtstoffwechsel beim intensiven Sport: 1–2 kW; davon geht der größte Teil als Wärme verloren.',
      },
      klinischerBezug: 'Kryochirurgie nutzt Phasenübergänge therapeutisch: Flüssiger Stickstoff (−196°C) oder komprimiertes CO₂/Argon (-120 bis -140°C) friert Gewebe ein. Beim Gefrieren bilden sich Eiskristalle in Zellen → Membranruptur → Zelltod. Bei der Kryoablation von Lebertumoren, Prostatakrebs und Hautläsionen werden Gewebetemperaturen unter −40°C erzielt. Das Gegenteil ist die Radiofrequenzablation (RF): Strom erwärmt Gewebe über 60°C → Proteindenaturierung → Nekrose. Beide Methoden nutzen physikalische Phasenübergangsprinzipien zur gezielten Gewebezerstörung.',
      selfTest: [
        {
          question: 'Wie viel Energie benötigt man, um 500 g Eis bei 0°C vollständig zu schmelzen? (L_S = 334 kJ/kg)',
          options: ['33,4 kJ', '167 kJ', '334 kJ', '668 kJ', '2257 kJ'],
          correctIndex: 1,
          explanation: 'Q = m·L_S = 0,5 kg × 334 kJ/kg = 167 kJ. Diese Energie wird benötigt, ohne die Temperatur zu erhöhen — sie dient allein dem Phasenübergang (Aufbrechen des Kristallgitters). Erst nach vollständigem Schmelzen steigt die Temperatur bei weiterer Wärmezufuhr.',
          hints: ['Q = m·L_S. m = 500 g = 0,5 kg.', '0,5 × 334 = 167 kJ.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Bei welcher Temperatur hat Wasser seine maximale Dichte?',
          options: ['0°C (Gefrierpunkt)', '4°C', '20°C (Raumtemperatur)', '37°C (Körpertemperatur)', '100°C (Siedepunkt)'],
          correctIndex: 1,
          explanation: 'Wasser hat sein Dichtemaximum bei 4°C (ρ = 1000 kg/m³). Unterhalb und oberhalb dieser Temperatur ist die Dichte geringer. Das erklärt die Stratifikation in Seen: Im Winter liegt 4°C-Wasser (dichtestes) am Grund, darüber kälteres Wasser, ganz oben Eis. Die Anomalie beruht auf Wasserstoffbrückenbindungen, die bei niedrigen Temperaturen eine geordnete, offene Struktur fördern.',
          hints: ['Wasser verhält sich bei 4°C anders als die meisten Flüssigkeiten — daher "Anomalie".', 'Zwischen 4°C und 0°C dehnt sich Wasser beim Abkühlen aus (ungewöhnlich!).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was sind "kolligative Eigenschaften" einer Lösung?',
          options: [
            'Eigenschaften, die von der chemischen Natur des gelösten Stoffs abhängen',
            'Eigenschaften, die nur von der Anzahl der gelösten Teilchen abhängen, nicht ihrer Art',
            'Elektrische Eigenschaften der Lösung',
            'Optische Eigenschaften wie Lichtbrechung',
            'Thermische Leitfähigkeit der Lösung',
          ],
          correctIndex: 1,
          explanation: 'Kolligative Eigenschaften hängen nur von der Konzentration (Anzahl) der gelösten Teilchen ab, nicht von ihrer chemischen Natur. Dazu gehören: Gefrierpunktserniedrigung, Siedepunkterhöhung, osmotischer Druck, Dampfdruckerniedrigung. 1 mol NaCl erniedrigt den Gefrierpunkt doppelt so stark wie 1 mol Glukose (da NaCl in Na⁺ und Cl⁻ dissoziiert = 2 Teilchen).',
          hints: ['Kolligativ = zusammen, gemeinsam. Die Teilchen gemeinsam, nicht ihre Art, zählen.', 'Gefrierpunkterniedrigung ist proportional zur Molalität.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Tripelpunkt eines Stoffs?',
          options: [
            'Die Temperatur, bei der alle drei Aggregatzustände die gleiche Energie haben',
            'Der Punkt, an dem Druck, Temperatur und Volumen gleich groß sind',
            'Die einzige Druck-Temperatur-Kombination, bei der alle drei Phasen koexistieren',
            'Der Schmelzpunkt bei sehr hohem Druck',
            'Die kritische Temperatur, ab der Gas nicht verflüssigt werden kann',
          ],
          correctIndex: 2,
          explanation: 'Der Tripelpunkt ist die einzige spezifische Kombination von Temperatur und Druck, bei der alle drei Phasen (fest, flüssig, gasförmig) eines Stoffs gleichzeitig im Gleichgewicht existieren. Für Wasser: T = 0,01°C, p = 611,7 Pa. Der Tripelpunkt von Wasser dient als internationaler Kalibrierpunkt für Temperaturskalen.',
          hints: ['Tri = drei; drei Phasen koexistieren.', 'Im Phasendiagramm ist der Tripelpunkt ein einziger Punkt, wo alle drei Phasengrenzen zusammenlaufen.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Sportler verliert durch Schwitzen 1 Liter Schweiß. Welche Wärmemenge wird dabei abgeführt? (L_V = 2257 kJ/kg)',
          options: ['334 kJ', '540 kJ', '2257 kJ', '4186 kJ', '167 kJ'],
          correctIndex: 2,
          explanation: 'Q = m·L_V = 1 kg × 2257 kJ/kg = 2257 kJ ≈ 540 kcal. Das Verdampfen von 1 Liter Schweiß entzieht dem Körper enorm viel Energie — etwa so viel wie ein intensives Training von 30–45 Minuten. Schwitzen ist der effizienteste Thermoregulationsmechanismus des Menschen.',
          hints: ['Q = m·L_V mit L_V = 2257 kJ/kg für Wasser.', '1 Liter Wasser = 1 kg. Q = 1 × 2257 kJ.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
