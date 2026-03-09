/**
 * KFF Academy – Untertests: Lernen, Üben, Simulation
 */
/* eslint-disable @typescript-eslint/no-unused-vars -- many dev/debug vars */
/* eslint-disable @typescript-eslint/no-explicit-any -- legacy editor types */

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Save } from "lucide-react";

const _subjects = [
  { id: "biologie", label: "Biologie" },
  { id: "chemie", label: "Chemie" },
  { id: "physik", label: "Physik" },
  { id: "mathematik", label: "Mathematik" },
] as const;
import type { Unterkapitel } from "@/data/bmsKapitel/types";
import { normalizeChapterContent } from "@/utils/normalizeChapterContent";
import { splitChapterContent } from "@/utils/splitChapterContent";
import { alleKapitel } from "@/data/bmsKapitel";
import { saveChapter, saveSubchapter, loadChapterById, loadAllChapters } from "@/lib/bmsStorage";

// Liste der verfügbaren Kapitel
const kapitelListe = [
  {
    path: "biologie/kap1-zelle",
    label: "Biologie - Kap 1: Die Zelle",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap2-koerper",
    label: "Biologie - Kap 2: Körper",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap3-fortpflanzung",
    label: "Biologie - Kap 3: Fortpflanzung",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap4-genetik",
    label: "Biologie - Kap 4: Genetik",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap5-molekulargenetik",
    label: "Biologie - Kap 5: Molekulargenetik",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap6-evolution",
    label: "Biologie - Kap 6: Evolution",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap7-oekologie",
    label: "Biologie - Kap 7: Ökologie",
    subject: "biologie" as const,
  },
  {
    path: "biologie/kap8-immunbiologie",
    label: "Biologie - Kap 8: Immunbiologie",
    subject: "biologie" as const,
  },
  {
    path: "chemie/kap1-periodensystem",
    label: "Chemie - Kap 1: Periodensystem",
    subject: "chemie" as const,
  },
  { path: "chemie/kap2-atombau", label: "Chemie - Kap 2: Atombau", subject: "chemie" as const },
  { path: "chemie/kap3-bindungen", label: "Chemie - Kap 3: Bindungen", subject: "chemie" as const },
  {
    path: "chemie/kap4-stoechiometrie",
    label: "Chemie - Kap 4: Stöchiometrie",
    subject: "chemie" as const,
  },
  {
    path: "chemie/kap5-gasgesetze",
    label: "Chemie - Kap 5: Gasgesetze",
    subject: "chemie" as const,
  },
  {
    path: "chemie/kap6-aggregatzustaende",
    label: "Chemie - Kap 6: Aggregatzustände",
    subject: "chemie" as const,
  },
  {
    path: "chemie/kap7-reaktionen",
    label: "Chemie - Kap 7: Reaktionen",
    subject: "chemie" as const,
  },
  {
    path: "chemie/kap8-saeure-base",
    label: "Chemie - Kap 8: Säure-Base",
    subject: "chemie" as const,
  },
  { path: "chemie/kap9-redox", label: "Chemie - Kap 9: Redox", subject: "chemie" as const },
  { path: "chemie/kap10-organik", label: "Chemie - Kap 10: Organik", subject: "chemie" as const },
  {
    path: "chemie/kap11-biochemie",
    label: "Chemie - Kap 11: Biochemie",
    subject: "chemie" as const,
  },
  {
    path: "chemie/kap12-stoffwechsel",
    label: "Chemie - Kap 12: Stoffwechsel",
    subject: "chemie" as const,
  },
  { path: "physik/kap1-kinematik", label: "Physik - Kap 1: Kinematik", subject: "physik" as const },
  { path: "physik/kap2-dynamik", label: "Physik - Kap 2: Dynamik", subject: "physik" as const },
  { path: "physik/kap3-energie", label: "Physik - Kap 3: Energie", subject: "physik" as const },
  { path: "physik/kap4-impuls", label: "Physik - Kap 4: Impuls", subject: "physik" as const },
  { path: "physik/kap5-waerme", label: "Physik - Kap 5: Wärme", subject: "physik" as const },
  {
    path: "physik/kap6-elektrizitaet",
    label: "Physik - Kap 6: Elektrizität",
    subject: "physik" as const,
  },
  { path: "physik/kap7-wellen", label: "Physik - Kap 7: Wellen", subject: "physik" as const },
  {
    path: "physik/kap8-atomphysik",
    label: "Physik - Kap 8: Atomphysik",
    subject: "physik" as const,
  },
  {
    path: "mathematik/kap1-grundlagen",
    label: "Mathematik - Kap 1: Grundlagen",
    subject: "mathematik" as const,
  },
  {
    path: "mathematik/kap2-algebra",
    label: "Mathematik - Kap 2: Algebra",
    subject: "mathematik" as const,
  },
  {
    path: "mathematik/kap3-funktionen",
    label: "Mathematik - Kap 3: Funktionen",
    subject: "mathematik" as const,
  },
  {
    path: "mathematik/kap4-trigonometrie",
    label: "Mathematik - Kap 4: Trigonometrie",
    subject: "mathematik" as const,
  },
  {
    path: "mathematik/kap5-analysis",
    label: "Mathematik - Kap 5: Analysis",
    subject: "mathematik" as const,
  },
  {
    path: "mathematik/kap6-geometrie",
    label: "Mathematik - Kap 6: Geometrie",
    subject: "mathematik" as const,
  },
];

// Content-Bereinigung (verwendet jetzt normalizeChapterContent)
function cleanContent(raw: string): string {
  return normalizeChapterContent(raw);
}

// Markdown-Formatierung mit verbesserter visueller Darstellung
function formatText(
  text: string,
  escapeHtml = false,
  subjectBorderColor?: string,
  subjectBgColor?: string
): string {
  let t = text;
  if (escapeHtml) {
    t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  const lines = t.split("\n");
  const processed: string[] = [];
  let inBlockquote = false;
  let inOrderedList = false;
  let inUnorderedList = false;

  // Bestimme Blockquote-Farben basierend auf Subject
  const borderClass = subjectBorderColor || "border-primary-500";
  const bgClass = subjectBgColor || "bg-primary-50 dark:bg-primary-900/20";
  const blockquoteClasses = `border-l-4 ${borderClass} pl-4 py-2 my-4 ${bgClass} rounded-r`;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Überschriften (# H1, ## H2, ### H3, etc.)
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = headingMatch[2];
      // Schließe offene Listen/Blockquotes
      if (inBlockquote) {
        processed.push("</blockquote>");
        inBlockquote = false;
      }
      if (inOrderedList) {
        processed.push("</ol>");
        inOrderedList = false;
      }
      if (inUnorderedList) {
        processed.push("</ul>");
        inUnorderedList = false;
      }

      // CSS-Klassen für verschiedene Überschriften-Level
      const headingClasses = {
        1: "text-2xl font-bold text-foreground mt-6 mb-4",
        2: "text-xl font-bold text-foreground mt-5 mb-3",
        3: "text-lg font-semibold text-foreground mt-4 mb-2",
        4: "text-base font-semibold text-foreground mt-3 mb-2",
        5: "text-sm font-semibold text-foreground/80 mt-3 mb-2",
        6: "text-sm font-medium text-foreground/80 mt-2 mb-1",
      };
      processed.push(
        `<h${level} class="${headingClasses[level as keyof typeof headingClasses] || ""}">${content}</h${level}>`
      );
      continue;
    }

    // Blockquotes (Merksätze)
    const isBlockquote = /^>\s*(.+)$/.test(line);
    if (isBlockquote) {
      const content = line.replace(/^>\s*/, "");
      if (!inBlockquote) {
        if (inOrderedList) {
          processed.push("</ol>");
          inOrderedList = false;
        }
        if (inUnorderedList) {
          processed.push("</ul>");
          inUnorderedList = false;
        }
        processed.push(`<blockquote class="${blockquoteClasses}">`);
        inBlockquote = true;
      }
      processed.push(content);
      continue;
    }

    // Nummerierte Listen (1. ..., 2. ..., etc.)
    const orderedListMatch = /^\d+\.\s+(.+)$/.test(trimmed);
    if (orderedListMatch) {
      const content = trimmed.replace(/^\d+\.\s+/, "");
      if (!inOrderedList) {
        if (inBlockquote) {
          processed.push("</blockquote>");
          inBlockquote = false;
        }
        if (inUnorderedList) {
          processed.push("</ul>");
          inUnorderedList = false;
        }
        processed.push('<ol class="list-decimal list-inside space-y-1 my-3 ml-4">');
        inOrderedList = true;
      }
      processed.push(`<li class="ml-2">${content}</li>`);
      continue;
    }

    // Unnummerierte Listen (- ..., * ..., etc.)
    const unorderedListMatch = /^[-*]\s+(.+)$/.test(trimmed);
    if (unorderedListMatch) {
      const content = trimmed.replace(/^[-*]\s+/, "");
      if (!inUnorderedList) {
        if (inBlockquote) {
          processed.push("</blockquote>");
          inBlockquote = false;
        }
        if (inOrderedList) {
          processed.push("</ol>");
          inOrderedList = false;
        }
        processed.push('<ul class="list-disc list-inside space-y-1 my-3 ml-4">');
        inUnorderedList = true;
      }
      processed.push(`<li class="ml-2">${content}</li>`);
      continue;
    }

    // Normale Zeile - schließe offene Listen/Blockquotes
    if (inBlockquote) {
      processed.push("</blockquote>");
      inBlockquote = false;
    }
    if (inOrderedList) {
      processed.push("</ol>");
      inOrderedList = false;
    }
    if (inUnorderedList) {
      processed.push("</ul>");
      inUnorderedList = false;
    }

    processed.push(line);
  }

  // Schließe alle offenen Tags
  if (inBlockquote) processed.push("</blockquote>");
  if (inOrderedList) processed.push("</ol>");
  if (inUnorderedList) processed.push("</ul>");

  t = processed.join("\n");

  // Inline-Formatierung
  return t
    .replace(/\*\*(.*?)\*\*/g, '<b class="font-semibold">$1</b>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/\n\n/g, '</p><p class="mt-3 mb-3 leading-relaxed">')
    .replace(/\n/g, "<br/>");
}

const SUBJECT_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  biologie: {
    border: "border-emerald-500",
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  chemie: {
    border: "border-red-500",
    text: "text-red-700 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
  physik: {
    border: "border-blue-500",
    text: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  mathematik: {
    border: "border-violet-500",
    text: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
};

interface Version {
  id: string;
  timestamp: string;
  title: string;
  content: string;
  kapitel: string;
  ukNumber?: number; // UK-Nummer, wenn verfügbar
}

const STORAGE_KEY = "kapitel-editor-versions";
const LAST_EDITED_KEY = "kapitel-editor-last-edited";

export default function KapitelEditor() {
  // Vereinfachter Editor: Nur Copy-Paste
  const [pasteText, setPasteText] = useState("");
  const [detectedSubject, setDetectedSubject] = useState<
    "biologie" | "chemie" | "physik" | "mathematik"
  >("biologie");
  const [selectedChapterId, setSelectedChapterId] = useState<string>(""); // ID des ausgewählten Überkapitels
  const [newChapterTitle, setNewChapterTitle] = useState(""); // Titel für neues Überkapitel
  const [isCreatingNewChapter, setIsCreatingNewChapter] = useState(false);

  // Automatische Erkennung des Fachgebiets aus dem Text
  const detectSubject = (text: string): "biologie" | "chemie" | "physik" | "mathematik" => {
    const lower = text.toLowerCase();
    if (
      lower.includes("zelle") ||
      lower.includes("dna") ||
      lower.includes("genetik") ||
      lower.includes("evolution") ||
      lower.includes("biologie")
    ) {
      return "biologie";
    }
    if (
      lower.includes("periodensystem") ||
      lower.includes("atom") ||
      lower.includes("bindung") ||
      lower.includes("reaktion") ||
      lower.includes("chemie")
    ) {
      return "chemie";
    }
    if (
      lower.includes("kinematik") ||
      lower.includes("mechanik") ||
      lower.includes("elektrizität") ||
      lower.includes("welle") ||
      lower.includes("physik")
    ) {
      return "physik";
    }
    if (
      lower.includes("algebra") ||
      lower.includes("analysis") ||
      lower.includes("geometrie") ||
      lower.includes("trigonometrie") ||
      lower.includes("mathematik")
    ) {
      return "mathematik";
    }
    return "biologie"; // Default
  };

  // Lade alle existierenden Kapitel (statisch + dynamisch)
  const allAvailableChapters = useMemo(() => {
    const staticChapters = alleKapitel || [];
    const dynamicChapters = loadAllChapters();

    // Merge: dynamische überschreiben statische mit gleicher ID
    const merged = [...staticChapters];
    for (const dynChapter of dynamicChapters) {
      const index = merged.findIndex((c) => c.id === dynChapter.id);
      if (index >= 0) {
        merged[index] = dynChapter;
      } else {
        merged.push(dynChapter);
      }
    }

    return merged;
  }, []);

  // Filtere Kapitel nach ausgewähltem Fachgebiet
  const chaptersForSubject = useMemo(() => {
    return allAvailableChapters.filter((ch) => ch.subject === detectedSubject);
  }, [allAvailableChapters, detectedSubject]);

  // Extrahiere Titel aus erster Zeile des Inhalts
  const extractTitleFromFirstLine = (text: string): string => {
    const lines = text.split("\n").filter((l) => l.trim());
    if (lines.length === 0) return "";

    let firstLine = lines[0].trim();

    // Entferne Markdown-Header-Syntax (#, ##, etc.)
    firstLine = firstLine.replace(/^#+\s*/, "");

    // Entferne führende/abschließende Leerzeichen
    firstLine = firstLine.trim();

    // Wenn zu kurz oder leer, return empty
    if (firstLine.length < 3) return "";

    // Maximal 100 Zeichen für Titel
    if (firstLine.length > 100) {
      firstLine = firstLine.substring(0, 97) + "...";
    }

    return firstLine;
  };

  // Prüfe ob Unterkapitel mit diesem Titel bereits existiert
  const checkSubchapterExists = (chapterId: string, subchapterTitle: string): boolean => {
    const chapter =
      loadChapterById(chapterId) || allAvailableChapters.find((c) => c.id === chapterId);
    if (!chapter || !chapter.unterkapitel) return false;

    return chapter.unterkapitel.some(
      (uk) => uk.title.toLowerCase().trim() === subchapterTitle.toLowerCase().trim()
    );
  };

  // Projektordner-Handle für direkte Speicherung
  const [projectDirectoryHandle, setProjectDirectoryHandle] = useState<any>(null);

  // Finde die nächste verfügbare Kapitel-Nummer für ein Fachgebiet
  const getNextChapterNumber = (subject: string): number => {
    const existingChapters = allAvailableChapters.filter((k) => k.subject === subject);
    if (existingChapters.length === 0) return 1;

    const numbers = existingChapters
      .map((k) => {
        const match = k.id.match(/kap(\d+)/);
        return match ? parseInt(match[1]) : 0;
      })
      .filter((n) => n > 0);

    return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
  };

  // Speichere Datei direkt ins Dateisystem (File System Access API)
  const requestProjectDirectory = async () => {
    try {
      if ("showDirectoryPicker" in window) {
        const handle = await (window as any).showDirectoryPicker();
        setProjectDirectoryHandle(handle);
        localStorage.setItem("project-directory-granted", "true");
        return handle;
      }
      return null;
    } catch (error: any) {
      if (error.name !== "AbortError") {
        console.error("Fehler beim Öffnen des Projektordners:", error);
      }
      return null;
    }
  };

  // Generiere eindeutigen Dateinamen mit automatischem Suffix bei Duplikaten
  const generateUniqueFilename = async (
    dirHandle: any,
    baseFilename: string,
    isIndexFile: boolean = false
  ): Promise<string> => {
    if (isIndexFile) {
      return "index.ts"; // index.ts wird immer überschrieben
    }

    // Prüfe ob Datei existiert
    let filename = baseFilename;
    let counter = 1;
    const maxAttempts = 100; // Sicherheitsschranke

    try {
      while (counter <= maxAttempts) {
        try {
          // Versuche Datei zu öffnen (wenn sie existiert, wird kein Fehler geworfen)
          await dirHandle.getFileHandle(filename, { create: false });
          // Datei existiert → generiere neuen Namen mit Suffix
          const nameWithoutExt = baseFilename.replace(/\.ts$/, "");
          filename = `${nameWithoutExt}-${counter}.ts`;
          counter++;
        } catch (error: any) {
          // Fehler bedeutet: Datei existiert nicht (NotFoundError) oder anderer Fehler
          // In beiden Fällen können wir diesen Namen verwenden
          if (error.name === "NotFoundError" || error.code === "ENOENT") {
            // Datei existiert nicht → verwende diesen Namen
            break;
          } else {
            // Unerwarteter Fehler → verwende Basis-Name und logge Warnung
            console.warn("Unerwarteter Fehler beim Prüfen der Datei-Existenz:", error);
            break;
          }
        }
      }

      if (counter > maxAttempts) {
        console.error(
          "Konnte keinen eindeutigen Dateinamen generieren nach",
          maxAttempts,
          "Versuchen"
        );
        // Verwende Timestamp als Fallback
        const timestamp = Date.now();
        const nameWithoutExt = baseFilename.replace(/\.ts$/, "");
        filename = `${nameWithoutExt}-${timestamp}.ts`;
      }
    } catch (error) {
      // Fehler beim Prüfen → verwende Basis-Name
      console.warn("Konnte Datei-Existenz nicht prüfen, verwende Basis-Name:", error);
    }

    console.log(`📝 Generierter eindeutiger Dateiname: ${filename} (aus Basis: ${baseFilename})`);
    return filename;
  };

  const saveFileToDisk = async (
    content: string,
    baseFilename: string,
    relativePath?: string,
    isIndexFile: boolean = false
  ) => {
    try {
      // Immer direkt speichern, kein Dialog mehr
      let dirHandle = projectDirectoryHandle;

      // Wenn kein Projektordner gespeichert ist, frage einmalig danach
      if (!dirHandle && localStorage.getItem("project-directory-granted") !== "true") {
        const useProjectDir = confirm(
          "Möchtest du die Dateien direkt im Projektordner speichern?\n\n" +
            'Klicke "OK" um den Projektordner auszuwählen (einmalig).\n' +
            'Klicke "Abbrechen" um die Dateien automatisch herunterzuladen.'
        );

        if (useProjectDir) {
          dirHandle = await requestProjectDirectory();
        } else {
          localStorage.setItem("project-directory-granted", "skipped");
        }
      }

      // Wenn Projektordner verfügbar ist, speichere direkt dort
      if (dirHandle && relativePath) {
        try {
          const pathParts = relativePath.split("/");
          let currentHandle = dirHandle;

          // Navigiere durch den Pfad
          for (let i = 0; i < pathParts.length - 1; i++) {
            const part = pathParts[i];
            if (part) {
              currentHandle = await currentHandle.getDirectoryHandle(part, { create: true });
            }
          }

          // Generiere eindeutigen Dateinamen
          const uniqueFilename = await generateUniqueFilename(
            currentHandle,
            baseFilename,
            isIndexFile
          );

          console.log(`📁 Speichere Datei: ${relativePath}`, {
            baseFilename,
            uniqueFilename,
            isIndexFile,
          });

          // Erstelle Datei (create: true erlaubt Überschreiben, aber wir haben bereits einen eindeutigen Namen)
          const fileHandle = await currentHandle.getFileHandle(uniqueFilename, { create: true });
          const writable = await fileHandle.createWritable();
          await writable.write(content);
          await writable.close();

          console.log(`✅ Datei gespeichert: ${relativePath} (als ${uniqueFilename})`);
          return { success: true, filename: uniqueFilename };
        } catch (error) {
          console.error("Fehler beim Speichern im Projektordner:", error);
          // Fallback zu Download
        }
      }

      // Fallback: Automatischer Download (kein Dialog)
      const blob = new Blob([content], { type: "text/typescript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = baseFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      console.log(`📥 Datei als Download bereitgestellt: ${baseFilename}`);
      return { success: false, filename: baseFilename };
    } catch (error: any) {
      console.error("Fehler beim Speichern:", error);

      // Fallback zu Download
      try {
        const blob = new Blob([content], { type: "text/typescript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = baseFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log(`📥 Datei als Download bereitgestellt: ${baseFilename}`);
        return { success: false, filename: baseFilename };
      } catch (downloadError) {
        console.error("Fehler beim Download:", downloadError);
        return { success: false, filename: baseFilename };
      }
    }
  };

  // Neue Funktion: Erstelle Kapitel aus Copy-Paste Text
  const createChapterFromPaste = async () => {
    if (!pasteText.trim()) {
      alert("Bitte füge zuerst den Text ein!");
      return;
    }

    // VALIDIERUNG 1: Überkapitel muss ausgewählt sein
    let chapterId: string;
    let chapterTitle: string;

    if (isCreatingNewChapter) {
      // Neues Überkapitel erstellen
      if (!newChapterTitle.trim()) {
        alert("⚠️ Bitte gib einen Titel für das neue Überkapitel ein!");
        return;
      }

      // Prüfe ob Überkapitel mit diesem Titel bereits existiert
      const existingChapter = chaptersForSubject.find(
        (ch) => ch.title.toLowerCase().trim() === newChapterTitle.trim().toLowerCase()
      );

      if (existingChapter) {
        alert(
          `⚠️ Ein Überkapitel mit dem Titel "${newChapterTitle}" existiert bereits!\n\nBitte wähle es aus dem Dropdown aus oder verwende einen anderen Titel.`
        );
        return;
      }

      // Erstelle neues Überkapitel
      const kapNum = getNextChapterNumber(detectedSubject);
      chapterId = `${detectedSubject.slice(0, 3)}-kap${kapNum}`;
      chapterTitle = newChapterTitle.trim();
    } else {
      // Existierendes Überkapitel verwenden
      if (!selectedChapterId) {
        alert("⚠️ Bitte wähle ein Überkapitel aus oder erstelle ein neues!");
        return;
      }

      const selectedChapter = chaptersForSubject.find((ch) => ch.id === selectedChapterId);
      if (!selectedChapter) {
        alert("⚠️ Das ausgewählte Überkapitel konnte nicht gefunden werden!");
        return;
      }

      chapterId = selectedChapterId;
      chapterTitle = selectedChapter.title;
    }

    // VALIDIERUNG 2: Titel aus erster Zeile extrahieren
    const subchapterTitle = extractTitleFromFirstLine(pasteText);

    if (!subchapterTitle || subchapterTitle.length < 3) {
      alert(
        "⚠️ Die erste Zeile des Inhalts muss den Titel des Unterkapitels enthalten!\n\nBitte stelle sicher, dass die erste Zeile mindestens 3 Zeichen lang ist."
      );
      return;
    }

    // VALIDIERUNG 3: Prüfe ob Unterkapitel bereits existiert
    if (checkSubchapterExists(chapterId, subchapterTitle)) {
      const proceed = confirm(
        `⚠️ Ein Unterkapitel mit dem Titel "${subchapterTitle}" existiert bereits in diesem Überkapitel.\n\n` +
          `Möchtest du es trotzdem neu anlegen?`
      );

      if (!proceed) {
        return;
      }
    }

    try {
      const subject = detectedSubject;

      // Normalisiere Content (entferne erste Zeile, da sie der Titel ist)
      const lines = pasteText.split("\n");
      const contentLines = lines.slice(1); // Entferne erste Zeile
      const content = contentLines.join("\n").trim();

      if (!content) {
        alert("⚠️ Der Inhalt darf nicht leer sein!");
        return;
      }

      // Normalisiere Content
      const normalizedText = normalizeChapterContent(content);
      const { main, questions } = splitChapterContent(normalizedText);
      const finalContent = questions ? `${main}\n\n${questions}` : main;

      // Generiere eindeutige Unterkapitel-ID
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 9);
      const ukId = `${chapterId}-uk-${timestamp}-${random}`;

      // Erstelle Unterkapitel-Objekt
      const subchapterObject: Unterkapitel = {
        id: ukId,
        title: subchapterTitle,
        content: finalContent,
        lernziele: [],
        sections: [],
        merksätze: [],
        selfTest: [],
      };

      // Speichere in localStorage
      const subjectIcons: Record<string, string> = {
        biologie: "🔬",
        chemie: "⚗️",
        physik: "⚛️",
        mathematik: "📐",
      };

      if (isCreatingNewChapter) {
        // Neues Überkapitel erstellen
        saveSubchapter(chapterId, subchapterObject, {
          title: chapterTitle,
          subject: subject,
          icon: subjectIcons[subject] || "📚",
          estimatedTime: "",
        });
        console.log("✅ New chapter created with subchapter:", chapterId, chapterTitle);
      } else {
        // Existierendes Überkapitel verwenden
        const existingChapter =
          loadChapterById(chapterId) || chaptersForSubject.find((ch) => ch.id === chapterId);
        if (!existingChapter) {
          throw new Error(`Chapter ${chapterId} not found`);
        }

        saveSubchapter(chapterId, subchapterObject, {
          title: existingChapter.title,
          subject: existingChapter.subject,
          icon: existingChapter.icon,
          estimatedTime: existingChapter.estimatedTime || "",
        });
        console.log("✅ Subchapter added to existing chapter:", chapterId);
      }

      // Lade aktualisiertes Kapitel
      const updatedChapter = loadChapterById(chapterId);
      if (!updatedChapter) {
        throw new Error(`Failed to load chapter ${chapterId} after saving`);
      }

      const allSubchapters = updatedChapter.unterkapitel || [];

      console.log(`📚 Chapter now has ${allSubchapters.length} subchapter(s)`);

      // Generiere TypeScript-Code mit ALLEN Unterkapiteln
      const subchaptersCode = allSubchapters
        .map((uk) => {
          const ukContentLines = uk.content.split("\n");
          const ukFormattedContent = ukContentLines
            .map((line) => {
              const escaped = line
                .replace(/\\/g, "\\\\")
                .replace(/`/g, "\\`")
                .replace(/\${/g, "\\${");
              return escaped === "" ? "" : `      ${escaped}`;
            })
            .join("\n");

          return `    {
      id: '${uk.id}',
      title: '${uk.title.replace(/'/g, "\\'")}',
      content: \`${ukFormattedContent}\`,
      lernziele: [],
      sections: [],
      merksätze: [],
      selfTest: []
    }`;
        })
        .join(",\n");

      const match = chapterId.match(/(\w+)-kap(\d+)/);
      const prefix = match?.[1] || subject.slice(0, 3);
      const kapNum = match ? parseInt(match[2]) : getNextChapterNumber(subject);
      const varName = `${prefix.slice(0, 3)}Kap${kapNum}`;

      const chapterCode = `import type { Kapitel } from '../types';

export const ${varName}: Kapitel = {
  id: '${chapterId}',
  title: '${updatedChapter.title.replace(/'/g, "\\'")}',
  subject: '${subject}',
  icon: '${updatedChapter.icon}',
  estimatedTime: '',
  unterkapitel: [
${subchaptersCode}
  ]
};`;

      // Generiere Dateinamen basierend auf Unterkapitel-Titel (erste Zeile)
      const subchapterTitleSlug = subchapterTitle
        .toLowerCase()
        .replace(/[^a-z0-9äöüß]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 50); // Max 50 Zeichen für Dateinamen

      // Dateiname: kap<nummer>-<unterkapitel-titel-slug>.ts
      const baseFilename = `kap${kapNum}-${subchapterTitleSlug || "unterkapitel"}.ts`;

      const chapterPath = `src/data/bmsKapitel/${subject}/${baseFilename}`;

      // SPEICHERE ZUERST die Chapter-Datei (mit eindeutigem Namen basierend auf Unterkapitel-Titel)
      // Dies gibt uns den tatsächlichen Dateinamen zurück (kann Suffix haben)
      const chapterSaveResult = await saveFileToDisk(chapterCode, baseFilename, chapterPath, false);
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Jetzt haben wir den tatsächlichen Dateinamen → generiere index.ts damit
      const subjectIndexFiles: Record<string, string> = {
        biologie: "biologie/index.ts",
        chemie: "chemie/index.ts",
        physik: "physik/index.ts",
        mathematik: "mathematik/index.ts",
      };

      const indexPath = subjectIndexFiles[subject];
      const existingChapters = allAvailableChapters.filter((k) => k.subject === subject);

      const existingImports: Array<{ varName: string; fileName: string }> = [];

      // Sammle alle bestehenden Imports (außer dem aktuellen Kapitel)
      for (const k of existingChapters) {
        // Überspringe das aktuelle Kapitel (wird später mit aktuellem Dateinamen hinzugefügt)
        if (k.id === chapterId) {
          continue;
        }

        const match = k.id.match(/(\w+)-kap(\d+)/);
        if (match) {
          const prefix = match[1];
          const num = match[2];
          const varName = `${prefix.slice(0, 3)}Kap${num}`;
          const titleSlug = k.title
            .toLowerCase()
            .replace(/[^a-z0-9äöüß]+/g, "-")
            .replace(/^-|-$/g, "");
          const existingFileName = `kap${num}-${titleSlug}`;
          existingImports.push({ varName, fileName: existingFileName });
        }
      }

      // Verwende den tatsächlich gespeicherten Dateinamen (kann Suffix haben)
      const actualSavedFilename = chapterSaveResult.filename || baseFilename;
      const newFileName = actualSavedFilename.replace(".ts", "");

      // Prüfe ob diese Datei bereits in den Imports ist
      const chapterIndex = existingImports.findIndex((imp) => imp.fileName === newFileName);
      if (chapterIndex < 0) {
        // Neue Datei → hinzufügen
        existingImports.push({ varName, fileName: newFileName });
      } else {
        // Datei existiert bereits → aktualisiere nur den Variablennamen falls nötig
        existingImports[chapterIndex].varName = varName;
      }

      existingImports.sort((a, b) => {
        const numA = parseInt(a.fileName.match(/kap(\d+)/)?.[1] || "0");
        const numB = parseInt(b.fileName.match(/kap(\d+)/)?.[1] || "0");
        return numA - numB;
      });

      const subjectVarName = `${subject}Kapitel`;
      const indexCode = `import type { Kapitel } from '../types';
${existingImports.map((imp) => `import { ${imp.varName} } from './${imp.fileName}';`).join("\n")}

export const ${subjectVarName}: Kapitel[] = [
${existingImports.map((imp) => `  ${imp.varName},`).join("\n")}
];`;

      const indexPathFull = `src/data/bmsKapitel/${indexPath}`;

      // Speichere index.ts (wird immer überschrieben, daher isIndexFile=true)
      const indexSaveResult = await saveFileToDisk(indexCode, "index.ts", indexPathFull, true);

      const savedDirectly = chapterSaveResult.success && indexSaveResult.success;
      const actualFilename = chapterSaveResult.filename || baseFilename;

      const successMessage = savedDirectly
        ? `✅ Unterkapitel "${subchapterTitle}" wurde zum Überkapitel "${updatedChapter.title}" hinzugefügt!\n\n` +
          `📁 Datei gespeichert: ${actualFilename}\n` +
          `✨ Das Kapitel ist SOFORT in BMS verfügbar!\n\n` +
          `Du kannst jetzt ein weiteres Unterkapitel hinzufügen.`
        : `✅ Unterkapitel "${subchapterTitle}" wurde erstellt!\n\n` +
          `📥 Datei heruntergeladen: ${actualFilename}\n` +
          `✨ Das Kapitel ist SOFORT in BMS verfügbar!\n\n` +
          `💡 Tipp: Wähle einen Projektordner aus, um Dateien automatisch zu speichern.`;

      alert(successMessage);

      // Reset
      setPasteText("");
      setIsCreatingNewChapter(false);
      setNewChapterTitle("");
      if (!isCreatingNewChapter) {
        // Behalte ausgewähltes Kapitel
      } else {
        setSelectedChapterId(chapterId); // Setze neu erstelltes Kapitel als ausgewählt
      }
    } catch (error: any) {
      console.error("Fehler beim Erstellen des Kapitels:", error);
      alert(
        `❌ Fehler beim Speichern: ${error.message || error}\n\nBitte überprüfe die Browser-Konsole für Details.`
      );
    }
  };

  // Extrahiere Titel-Vorschau aus erster Zeile
  const previewTitle = useMemo(() => {
    if (!pasteText.trim()) return "";
    return extractTitleFromFirstLine(pasteText);
  }, [pasteText]);

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Kapitel-Editor</h1>
        <p className="text-muted mt-2">
          Wähle ein Überkapitel aus und füge Unterkapitel-Inhalt ein
        </p>
      </div>

      <Card className="border-2 border-primary-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Überkapitel & Inhalt
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Fachgebiet */}
          <div>
            <label className="text-sm font-medium text-foreground/80 mb-2 block">Fachgebiet</label>
            <select
              value={detectedSubject}
              onChange={(e) => {
                setDetectedSubject(e.target.value as typeof detectedSubject);
                setSelectedChapterId(""); // Reset Auswahl bei Fachwechsel
                setIsCreatingNewChapter(false);
                setNewChapterTitle("");
              }}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="biologie">Biologie</option>
              <option value="chemie">Chemie</option>
              <option value="physik">Physik</option>
              <option value="mathematik">Mathematik</option>
            </select>
          </div>

          {/* Überkapitel-Auswahl */}
          <div>
            <label className="text-sm font-medium text-foreground/80 mb-2 block">
              Überkapitel auswählen <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <select
                value={isCreatingNewChapter ? "__NEW__" : selectedChapterId}
                onChange={(e) => {
                  if (e.target.value === "__NEW__") {
                    setIsCreatingNewChapter(true);
                    setSelectedChapterId("");
                  } else {
                    setIsCreatingNewChapter(false);
                    setSelectedChapterId(e.target.value);
                    setNewChapterTitle("");
                  }
                }}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">-- Bitte wählen --</option>
                <option value="__NEW__">+ Neues Überkapitel anlegen</option>
                {chaptersForSubject.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.title}{" "}
                    {ch.unterkapitel?.length ? `(${ch.unterkapitel.length} Unterkapitel)` : ""}
                  </option>
                ))}
              </select>

              {isCreatingNewChapter && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={newChapterTitle}
                    onChange={(e) => setNewChapterTitle(e.target.value)}
                    placeholder="Titel des neuen Überkapitels eingeben..."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <p className="text-xs text-muted mt-1">
                    ⚠️ Prüfe, ob ein Überkapitel mit diesem Titel bereits existiert!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Inhalt */}
          <div>
            <label className="text-sm font-medium text-foreground/80 mb-2 block">
              Inhalt einfügen <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {previewTitle && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 mb-1">
                    📝 Erkannte Unterkapitel-Titel (aus erster Zeile):
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-400 font-medium">
                    "{previewTitle}"
                  </p>
                </div>
              )}
              <textarea
                value={pasteText}
                onChange={(e) => {
                  setPasteText(e.target.value);
                  if (e.target.value.trim()) {
                    setDetectedSubject(detectSubject(e.target.value));
                  }
                }}
                placeholder={`Die erste Zeile wird automatisch als Titel verwendet.

Beispiel:
Die Zellmembran

Die Zellmembran besteht aus einer Doppellipidschicht...

→ Titel: "Die Zellmembran"
→ Inhalt: Alles ab Zeile 2`}
                className="w-full h-[400px] px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base leading-relaxed font-mono outline-none focus:ring-2 focus:ring-primary-500 resize-none whitespace-pre-wrap"
                style={{
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  lineHeight: "1.7",
                  letterSpacing: "0.01em",
                  tabSize: 2,
                }}
              />
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={createChapterFromPaste}
            disabled={
              !pasteText.trim() ||
              (!isCreatingNewChapter && !selectedChapterId) ||
              (isCreatingNewChapter && !newChapterTitle.trim())
            }
            className="w-full"
          >
            <Save className="w-5 h-5 mr-2" />
            Unterkapitel speichern
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
