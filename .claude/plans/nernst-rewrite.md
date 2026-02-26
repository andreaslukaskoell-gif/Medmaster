# Nernst UK (ch-11-03) Rewrite

## Status: READY TO APPLY
- File: `src/data/bmsKapitel/chemie/kap5-anorganische-chemie.ts`
- UK ID: `ch-11-03` (search for `id: "ch-11-03"`)
- Only the `content` field needs replacing (backtick template string)
- SVG references KEPT: `![Nernst](/grafik-nernst.svg)` and `![Galvanische Zelle und Halbzellen](/grafik-galvanische-zelle.svg)`
- Other fields (stichworte, lernziele, sections, merksaetze, altfrage, selfTest) stay unchanged

## New content (replace everything between content: \` and \`, before lernziele)

```
## Einleitung

**Worum geht es?** Stell dir eine Batterie vor: Frisch geladen liefert sie volle Spannung, aber je laenger sie laeuft, desto schwaecher wird sie. *Warum?* Weil sich die Konzentrationen der beteiligten Stoffe aendern. Genau das beschreibt die **Nernst-Gleichung** — sie beantwortet die Frage: **Wie haengt die elektrische Spannung einer Redoxreaktion von der Konzentration ab?**

Das ist keine rein chemische Spielerei: Dein Koerper nutzt dasselbe Prinzip. Nervenzellen "feuern", weil auf beiden Seiten der Membran unterschiedliche Ionenkonzentrationen herrschen — und die Spannung, die daraus entsteht, laesst sich mit der Nernst-Gleichung berechnen.

**In diesem Kapitel lernst du:**
- warum sich die Spannung einer Redoxreaktion aendert, wenn man die Konzentrationen veraendert
- die Nernst-Gleichung und was jeder Buchstabe darin bedeutet
- wie ein pH-Messgeraet im Krankenhaus auf diesem Prinzip basiert
- warum Nervenzellen ein Ruhemembranpotenzial von ca. -70 mV haben

---

## Warum reicht E° allein nicht aus?

![Nernst](/grafik-nernst.svg)

![Galvanische Zelle und Halbzellen](/grafik-galvanische-zelle.svg)

Im letzten Unterkapitel hast du das **Standardpotenzial E°** kennengelernt — die Spannung unter idealen Laborbedingungen (25 °C, alle Konzentrationen exakt 1 mol/L). In der Realitaet sind diese Bedingungen aber fast nie erfuellt: Im Blut liegt die K+-Konzentration bei 4 mmol/L, nicht bei 1 mol/L. Also brauchen wir eine Formel, die das beruecksichtigt.

**Die Grundidee in einem Satz:** Je mehr vom Oxidationsmittel vorhanden ist, desto staerker "will" die Reaktion ablaufen -> die Spannung steigt. Je mehr vom Reduktionsmittel da ist, desto schwaecher wird der Antrieb -> die Spannung sinkt.

Das ist wie ein Wasserfall: Je groesser der Hoehenunterschied (= Konzentrationsunterschied), desto mehr Kraft hat das Wasser (= Spannung).

---

## Die Nernst-Gleichung — Schritt fuer Schritt

Die Formel sieht auf den ersten Blick kompliziert aus, aber sie hat nur **eine zentrale Aussage**: *Das reale Potenzial E weicht vom Standardpotenzial E° ab, und zwar abhaengig vom Konzentrationsverhaeltnis Q.*

**E = E° - (0,05916 V)/n * log(Q)**   *(bei 25 °C)*

Was bedeuten die einzelnen Teile?

| Symbol | Bedeutung | Woher kommt es? |
|--------|-----------|-----------------|
| **E** | Das tatsaechliche Potenzial — was du messen wuerdest | Das ist gesucht |
| **E°** | Das Standardpotenzial (aus der Tabelle) | Bekannt aus dem letzten UK |
| **0,05916 V** | Der "Nernst-Faktor" — eine Naturkonstante bei 25 °C | Kommt aus R*T/F * ln(10) |
| **n** | Anzahl uebertragener Elektronen | Aus der Reaktionsgleichung |
| **Q** | Reaktionsquotient: [Produkte] / [Edukte] | Aus den aktuellen Konzentrationen |

**Das Minuszeichen** ist der Schluessel: Wenn Q gross wird (viel Produkt, wenig Edukt -> Batterie fast leer), wird E kleiner. Wenn Q klein ist (viel Edukt -> Batterie frisch), bleibt E nahe an E° oder wird sogar groesser.

> **Merke:** Mehr Oxidationsmittel (Edukt) = staerkerer Antrieb = hoeheres E. Mehr Reduktionsmittel (Produkt) = schwaecherer Antrieb = niedrigeres E. Der Nernst-Faktor betraegt **59,16 mV pro Zehnerpotenz** im Konzentrationsverhaeltnis (bei 25 °C).

---

## Wie misst das pH-Geraet im Krankenhaus?

Die wichtigste Anwendung der Nernst-Gleichung in der Klinik ist die **pH-Messung** mit einer Glaselektrode. Das Prinzip ist elegant: Eine spezielle Glasmembran laesst nur H+-Ionen durch. Je nachdem wie viele H+-Ionen in der Loesung sind (= der pH-Wert), baut sich eine messbare Spannung auf.

Pro **pH-Einheit** aendert sich die Spannung um genau **59,16 mV** (bei 25 °C).

- pH sinkt um 1 (z. B. von 7 auf 6 = 10-fach mehr H+) -> Spannung steigt um ~59 mV
- pH steigt um 1 (z. B. von 7 auf 8 = 10-fach weniger H+) -> Spannung sinkt um ~59 mV

Bei **Koerpertemperatur (37 °C)** betraegt der Nernst-Faktor ca. **61,5 mV** pro pH-Einheit.

> **Merke:** Glaselektrode: **-59 mV pro pH-Einheit** (25 °C). Klinisch: Blutgasanalysator misst Blut-pH (Norm: 7,35-7,45) genau mit diesem Prinzip.

---

## Warum haben Nervenzellen eine Spannung? — Biologische Membranpotenziale

Stell dir eine Nervenzelle vor:

- **Innerhalb** der Zelle: viel K+ (ca. 140 mmol/L), wenig Na+ (ca. 15 mmol/L)
- **Ausserhalb** der Zelle: wenig K+ (ca. 4 mmol/L), viel Na+ (ca. 145 mmol/L)

Dieser Konzentrationsunterschied erzeugt — genau wie bei einer Batterie — eine elektrische Spannung. Die Nernst-Gleichung berechnet, welche Spannung sich fuer **ein einzelnes Ion** ergibt:

**E_Ion = (RT/zF) * ln([aussen] / [innen])**

In der Praxis merkt man sich die Ergebnisse:

| Ion | innen | aussen | Nernst-Potenzial |
|-----|-------|--------|----------|
| **K+** | 140 mmol/L | 4 mmol/L | **~-90 mV** |
| **Na+** | 15 mmol/L | 145 mmol/L | **~+62 mV** |

Waere die Membran *nur* fuer K+ durchlaessig, laege das Potenzial bei -90 mV. Waere sie *nur* fuer Na+ durchlaessig, bei +62 mV. In der Realitaet ist sie vor allem fuer K+ durchlaessig — daher liegt das **Ruhemembranpotenzial bei ca. -70 mV** (naeher am K+-Wert).

> **Merke:** K+-Nernst ~-90 mV, Na+-Nernst ~+62 mV. Ruhemembranpotenzial (~-70 mV) liegt dazwischen. Diesen Zusammenhang beschreibt die **Goldman-Gleichung**.

---

## MedAT-Fokus

**Typische Pruefungsfragen und wie du sie loest:**
- "Nernst-Gleichung?" -> E = E° **minus** (0,05916/n) * log(Q) — achte auf das Minuszeichen!
- "Was ist der Nernst-Faktor?" -> 59,16 mV pro Zehnerpotenz (25 °C)
- "Nernst-Potenzial fuer K+?" -> ca. -90 mV (viel innen, wenig aussen)
- "Ruhemembranpotenzial?" -> ca. -70 mV, zwischen K+ und Na+

**Typische Fallen:**
- Minuszeichen vergessen -> Vorzeichen umgedreht
- Hohes [Ox] -> E wird **groesser** (nicht kleiner!) — mehr Oxidationsmittel = staerkerer Antrieb
- Ruhemembranpotenzial ist **nicht** gleich dem K+-Nernst, sondern liegt zwischen K+ und Na+
- Bei 37 °C: Nernst-Faktor 61,5 mV (nicht 59,16 mV)

---

## Zusammenfassung (ultrakompakt)

- **Nernst-Gleichung**: E = E° - (0,05916/n) * log(Q) — beschreibt, wie Konzentration die Spannung veraendert
- **Grundidee**: Mehr Oxidationsmittel -> staerkerer Antrieb -> E steigt. Mehr Reduktionsmittel -> E sinkt.
- **Nernst-Faktor**: 59,16 mV pro Zehnerpotenz (25 °C); bei 37 °C ~ 61,5 mV
- **Glaselektrode**: misst pH durch Spannungsaenderung (-59 mV pro pH-Einheit)
- **K+-Nernst**: ~-90 mV | **Na+-Nernst**: ~+62 mV | **Ruhemembranpotenzial**: ~-70 mV
```

## What changed (vs. old version)
1. **Einleitung**: Batterie-Analogie statt Formelsammlung
2. **"Lernst du"**: Konzepte statt Formeln
3. **Removed**: 2 unnoetige Rechenbeispiele (Cu-Elektrode, Zn-Elektrode), Daniell-K-Berechnung, Henderson-Hasselbalch-Ableitung, Konzentrationszelle-Details
4. **Added**: Wasserfall-Analogie, Schritt-fuer-Schritt Tabelle, Nervenzelle-Illustration
5. **MedAT-Fokus**: Nur Pruefungstipps, keine Formel-Wiederholung
6. **Zusammenfassung**: Knapp, mit Konzepten statt nur Formeln
7. **SVGs beibehalten**: grafik-nernst.svg und grafik-galvanische-zelle.svg

## Broader audit findings (apply to ALL UKs later)
- P0: Einleitungen umschreiben (Fliesstext statt Formelsammlung)
- P1: Unnoetige Rechenbeispiele entfernen
- P1: MedAT-Fokus Redundanz beseitigen
- P2: Analogien ergaenzen
- P2: Zu kurze Chemie-UKs auffuellen (ch-10-01 bis ch-10-04)
- P3: Zu lange UKs kuerzen (>2000w in Mathe/Physik)
- BUG: bio-4-01 bis bio-4-04 duplizierte IDs (kap3 vs kap4)
