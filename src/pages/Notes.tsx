import { useState } from "react";
import { Search, StickyNote, Trash2, Edit3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { bmsChapters } from "@/data/bmsChapters";

export default function Notes() {
  const { notes, setNote } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const allNotes = Object.entries(notes)
    .filter(([, content]) => content.trim().length > 0)
    .map(([chapterId, content]) => {
      const chapter = bmsChapters.find((c) => c.id === chapterId);
      return {
        chapterId,
        content,
        chapterTitle: chapter?.title || chapterId,
        subject: chapter?.subject || "Sonstige",
      };
    })
    .filter(
      (n) =>
        searchQuery.length < 2 ||
        n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleEdit = (chapterId: string, content: string) => {
    setEditingId(chapterId);
    setEditContent(content);
  };

  const handleSave = () => {
    if (editingId) {
      setNote(editingId, editContent);
      setEditingId(null);
      setEditContent("");
    }
  };

  const handleDelete = (chapterId: string) => {
    setNote(chapterId, "");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Notizen" }]} />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Meine Notizen</h1>
          <p className="text-muted mt-1">{allNotes.length} Notiz{allNotes.length !== 1 ? "en" : ""} gespeichert</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Notizen durchsuchen..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 placeholder:text-muted outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {allNotes.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <StickyNote className="w-12 h-12 text-muted mx-auto mb-3" />
            <p className="text-muted">
              {searchQuery.length >= 2
                ? "Keine Notizen gefunden."
                : "Noch keine Notizen. Erstelle Notizen beim Lesen von BMS-Kapiteln!"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {allNotes.map((n) => (
            <Card key={n.chapterId}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base">{n.chapterTitle}</CardTitle>
                    <p className="text-xs text-muted capitalize mt-0.5">{n.subject}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(n.chapterId, n.content)}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(n.chapterId)}
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {editingId === n.chapterId ? (
                  <div className="space-y-2">
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full h-32 p-3 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary-500 resize-y"
                    />
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="sm" onClick={() => setEditingId(null)}>
                        Abbrechen
                      </Button>
                      <Button size="sm" onClick={handleSave}>
                        Speichern
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {n.content}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
