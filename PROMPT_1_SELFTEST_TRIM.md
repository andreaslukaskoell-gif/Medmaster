# Claude Code Prompt 1 — selfTest auf 3–7 Fragen trimmen

**Laufzeit:** ~20 Minuten | **Modus:** --dangerously-skip-permissions

## AUFGABE

Gehe durch ALLE TypeScript-Dateien in `src/data/bmsKapitel/` und trimme die `selfTest`-Arrays auf exakt **3–7 Fragen** pro Unterkapitel.

## REGELN

1. Hat ein UK **> 7 Fragen**: Behalte die besten 5–7. Priorität: schwierigkeit 2+3 behalten, triviale difficulty-1 raus. Behalte Fragen die verschiedene Aspekte abdecken (nicht alle über dasselbe Detail).
2. Hat ein UK **< 3 Fragen**: Ergänze auf mindestens 3 — generiere fehlende Fragen aus dem UK-Inhalt.
3. Hat ein UK **3–7 Fragen**: nichts tun.
4. Die selfTest-Fragen kommen IMMER am Ende des UK-Objekts (nach `klinischerBezug`, nach `altfrage`) — das ist schon so, nicht umstrukturieren.
5. Jede Frage muss haben: `question`, `options: string[]` (5 Optionen), `correctIndex`, `explanation` (2–4 Sätze), `hints` (2 Schritte), `difficulty: 1|2|3`, `tags: string[]`.

## DATEIEN

Alle Dateien in diesen Ordnern:

```
src/data/bmsKapitel/biologie/     (kap1–kap11, alle .ts Dateien)
src/data/bmsKapitel/chemie/       (kap1–kap13)
src/data/bmsKapitel/physik/       (kap1–kap7)
src/data/bmsKapitel/mathematik/   (kap1–kap6)
```

## QUALITÄTSPRÜFUNG

Nach jeder Datei: TypeScript-Syntax korrekt? Kein Array mit < 3 oder > 7 Einträgen?

Am Ende:

```bash
npx tsc --noEmit
```

Behebe alle Fehler. Fertig wenn 0 TypeScript-Fehler.
