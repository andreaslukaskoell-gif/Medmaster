import { useState, useEffect } from "react";
import { ArrowLeft, RotateCcw, ThumbsUp, ThumbsDown, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getDeckNames, flashcardDecks } from "@/data/flashcards";
import type { Flashcard } from "@/data/flashcards";
import { useStore } from "@/store/useStore";

type View = "decks" | "study";

export default function FlashcardsPage() {
  const [view, setView] = useState<View>("decks");
  const [activeDeck, setActiveDeck] = useState<string | null>(null);

  if (view === "study" && activeDeck) {
    return (
      <FlashcardStudy
        deckId={activeDeck}
        cards={flashcardDecks[activeDeck] || []}
        onBack={() => setView("decks")}
      />
    );
  }

  const decks = getDeckNames();
  const grouped = decks.reduce<Record<string, typeof decks>>((acc, d) => {
    if (!acc[d.category]) acc[d.category] = [];
    acc[d.category].push(d);
    return acc;
  }, {});

  const categoryLabels: Record<string, string> = {
    bio: "Biologie",
    chemie: "Chemie",
    physik: "Physik",
    mathe: "Mathematik",
  };

  const categoryColors: Record<string, { badge: string; stripe: string }> = {
    bio: { badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400", stripe: "bg-emerald-500" },
    chemie: { badge: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400", stripe: "bg-red-500" },
    physik: { badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400", stripe: "bg-blue-500" },
    mathe: { badge: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400", stripe: "bg-violet-500" },
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Karteikarten" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Karteikarten</h1>
        <p className="text-muted mt-1">Lerne mit Spaced Repetition. Wähle einen Stapel aus.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">
              {decks.reduce((sum, d) => sum + d.count, 0)}
            </p>
            <p className="text-xs text-muted">Karten gesamt</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{decks.length}</p>
            <p className="text-xs text-muted">Stapel</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">4</p>
            <p className="text-xs text-muted">Kategorien</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Layers className="w-8 h-8 text-primary-600 mx-auto" />
            <p className="text-xs text-muted mt-1">SM-2 Algorithmus</p>
          </CardContent>
        </Card>
      </div>

      {Object.entries(grouped).map(([category, categoryDecks]) => (
        <div key={category}>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {categoryLabels[category] || category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryDecks.map((deck) => (
              <Card
                key={deck.id}
                className="hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
                onClick={() => { setActiveDeck(deck.id); setView("study"); }}
              >
                <div className={`h-1.5 ${categoryColors[category]?.stripe || "bg-gray-400"}`} />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={categoryColors[category]?.badge}>{categoryLabels[category]}</Badge>
                    <span className="text-xs text-muted">{deck.count} Karten</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{deck.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FlashcardStudy({ deckId, cards, onBack }: { deckId: string; cards: Flashcard[]; onBack: () => void }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const { addXP, checkStreak, updateSpacedRepetition } = useStore();

  // Touch/swipe support
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const card = cards[index];
  const total = cards.length;
  const answered = Object.keys(results).length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); }
      if (e.key === "ArrowRight" || e.key === "j") handleKnown();
      if (e.key === "ArrowLeft" || e.key === "k") handleUnknown();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, flipped]);

  const advance = () => {
    if (index < total - 1) {
      setIndex((i) => i + 1);
      setFlipped(false);
    } else {
      setFinished(true);
    }
  };

  const handleKnown = () => {
    if (!flipped) { setFlipped(true); return; }
    setResults((r) => ({ ...r, [index]: true }));
    updateSpacedRepetition(card.id, true);
    advance();
  };

  const handleUnknown = () => {
    if (!flipped) { setFlipped(true); return; }
    setResults((r) => ({ ...r, [index]: false }));
    updateSpacedRepetition(card.id, false);
    advance();
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 80) {
      if (diff > 0) handleKnown();
      else handleUnknown();
    }
    setTouchStartX(null);
  };

  if (finished) {
    const correct = Object.values(results).filter(Boolean).length;
    const pct = Math.round((correct / total) * 100);
    addXP(correct * 5);
    checkStreak();

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <div className="text-5xl font-bold text-primary-700 dark:text-primary-400">{pct}%</div>
            <p className="text-lg text-muted">{correct} von {total} gewusst</p>
            <p className="text-sm text-green-600 dark:text-green-400">+{correct * 5} XP</p>
            <div className="flex gap-3 justify-center pt-4">
              <Button variant="outline" onClick={onBack}>Zurück zu Stapeln</Button>
              <Button onClick={() => { setIndex(0); setFlipped(false); setResults({}); setFinished(false); }}>
                <RotateCcw className="w-4 h-4 mr-1" /> Nochmal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <span className="text-sm text-muted">{index + 1} / {total}</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div
        className="[perspective:1000px] cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`relative [transition:transform_0.5s_ease-in-out] [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`} style={{ minHeight: "320px" }}>
          {/* Front */}
          <Card className="absolute inset-0 [backface-visibility:hidden] shadow-lg">
            <CardContent className="p-10 flex flex-col items-center justify-center min-h-[320px]">
              <Badge className="mb-5">{card.topic}</Badge>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center leading-relaxed">{card.front}</p>
              <p className="text-xs text-muted mt-8">Tippe zum Umdrehen</p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg">
            <CardContent className="p-10 flex flex-col items-center justify-center min-h-[320px]">
              <Badge variant="success" className="mb-5">Antwort</Badge>
              <p className="text-base text-gray-700 dark:text-gray-300 text-center whitespace-pre-line leading-relaxed">{card.back}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <Button variant="outline" size="lg" className="flex-1 max-w-[200px] border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20" onClick={handleUnknown}>
          <ThumbsDown className="w-5 h-5 mr-2" />
          Nicht gewusst
        </Button>
        <Button size="lg" className="flex-1 max-w-[200px] bg-green-600 hover:bg-green-700 text-white" onClick={handleKnown}>
          <ThumbsUp className="w-5 h-5 mr-2" />
          Gewusst
        </Button>
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={() => { if (index > 0) { setIndex((i) => i - 1); setFlipped(false); } }} disabled={index === 0} className="p-2 text-muted hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-30 cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => { if (index < total - 1) { setIndex((i) => i + 1); setFlipped(false); } }} disabled={index >= total - 1} className="p-2 text-muted hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-30 cursor-pointer">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-3 text-[11px] text-muted">
        <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[10px] font-mono">Space</kbd> Umdrehen</span>
        <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[10px] font-mono">&rarr;</kbd> Gewusst</span>
        <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[10px] font-mono">&larr;</kbd> Nicht gewusst</span>
      </div>
    </div>
  );
}
