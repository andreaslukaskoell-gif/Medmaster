# MedMaster Chapter Template

## Rules for Content Agents
- Structure: AMBOSS (inline Merksätze as `> **Merke:**`, 30% prose / 55% bullets / 15% tables)
- Content depth: StudyMed (every MedAT Stichwort covered)
- Length: 800-1500 words in content field
- Language: precise German, no clinical focus, fundamentals first
- Merksätze INLINE after relevant concept, NOT only at end
- selfTest: 4-6 questions, 0-indexed correctIndex, 5 options each
- altfragen: always A-E options, MedAT-style

## Content Markdown Structure
```
## Überblick
[2-3 Sätze + Bullets "Das Wichtigste auf einen Blick"]
---
## [Abschnitt 1: Grundlagen]
[Prose + Bold terms + Bullets]
> **Merke:** [inline after concept]
---
## [Abschnitt 2: Vertiefung]
[Prose + Table if comparison needed]
> **Merke:** [inline]
---
## MedAT-Fokus
[Häufige Fragen, Verwechslungen, Prüfungszahlen]
```
