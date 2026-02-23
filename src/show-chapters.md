# Kapitel-Übersicht anzeigen

Um zu sehen, welche Kapitel vorhanden sind, öffne die Browser-Konsole (F12) und führe aus:

```javascript
// Übersicht in der Konsole anzeigen
window.showChapters();

// Oder Daten als Objekt erhalten
const data = window.listChapters();
console.log(data);
```

Die Funktion zeigt:

- Gesamtanzahl der Kapitel
- Anzahl der Unterkapitel
- Gruppierung nach Fächern
- Details zu jedem Kapitel (ID, Titel, Unterkapitel-Liste, Content-Status)
