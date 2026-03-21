# KFF-Teile Funktionsaudit

- [ ] Zahlenfolgen: Prüfe src/data/kffZahlenfolgenMedAT.ts und zugehörige Generator/Validator-Funktionen in kffGenerators.ts auf Korrektheit, Eindeutigkeit und MedAT-Konformität
- [ ] Implikationen: Prüfe src/data/kffImplikationen.ts — Format der Aufgaben (Prämissen, Optionen, E-Option), Generator und Validator
- [ ] Wortflüssigkeit: Prüfe src/data/kffWortfluessigkeitMedAT.ts — Lexikon-basierte Generierung, Validator (genau 1 Wort bildbar), assertNotOfficialLikeWordFluency
- [ ] Figuren zusammensetzen: Prüfe src/data/kffFigurenZusammensetzenMedAT.ts — cutPolygonStrategically, generateFigurenTrainingTask, Validator (Teile passen exakt zu 1 Option)
- [ ] Merkfähigkeit: Prüfe Merkfähigkeit-Implementierung (Profil-Pool, Validator: genau 1 richtige Antwort)
- [ ] UI-Komponenten: Prüfe ob KFF-Seiten für alle 5 Untertests existieren (src/pages/*KFF* oder KFF-Routen in App.tsx), beide Modi (Offizielle Beispiele + Training) vorhanden
- [ ] TypeScript: npm run typecheck ausführen und KFF-bezogene Fehler melden
- [ ] Write summary of findings/changes to .dispatch/tasks/kff-audit/output.md
