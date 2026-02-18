import type { Kapitel } from '../types';

export const bioKap1: Kapitel = {
  id: 'bio-kap1',
  title: 'Die Zelle',
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '',
  unterkapitel: [
    {
      id: 'bio-kap1-uk01',
      title: 'Zellstruktur',
      content: `# Zellstruktur

Die Zelle ist die kleinste lebende Einheit.

## Aufbau

- Zellmembran
- Zellkern
- Zytoplasma

> **Merksatz:** Alle Lebewesen bestehen aus Zellen.`,
      lernziele: [],
      sections: [],
      merksätze: [],
      selfTest: []
    }
  ]
};
