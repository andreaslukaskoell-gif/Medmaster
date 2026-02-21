import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Target,
  Share2,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Trophy,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import {
  getDailyQuestion,
  getTodaysResult,
  saveDailyResult,
  generateShareText,
  getXPForAttempt,
  getCountdownToMidnight,
  type DailyChallenge,
  type DailyChallengeResult,
} from '@/lib/dailyChallenge';
import { cn } from '@/lib/utils';

// Map subject IDs to German display labels
const FACH_LABELS: Record<string, string> = {
  biologie: 'Biologie',
  chemie: 'Chemie',
  physik: 'Physik',
  mathematik: 'Mathematik',
};

// Map subject IDs to color classes
const FACH_COLORS: Record<string, string> = {
  biologie: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  chemie: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  physik: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  mathematik: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
};

type AnswerState = 'idle' | 'wrong' | 'correct';

export default function DailyChallengePage() {
  const navigate = useNavigate();
  const addXP = useStore((s) => s.addXP);

  const [challenge, setChallenge] = useState<DailyChallenge | null>(null);
  const [existingResult, setExistingResult] = useState<DailyChallengeResult | null>(null);

  // Attempt tracking: 1, 2, or 3
  const [attempt, setAttempt] = useState(1);
  // Which option index the user selected on the current attempt
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Current answer state feedback
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  // Whether the game is fully over (correct or 3 wrong)
  const [isFinished, setIsFinished] = useState(false);
  // Final result after finishing
  const [finalResult, setFinalResult] = useState<DailyChallengeResult | null>(null);
  // Countdown string
  const [countdown, setCountdown] = useState(getCountdownToMidnight());
  // Share feedback message
  const [shareMsg, setShareMsg] = useState('');

  // Load question and check for existing result on mount
  useEffect(() => {
    const q = getDailyQuestion();
    setChallenge(q);
    const result = getTodaysResult();
    if (result) {
      setExistingResult(result);
    }
  }, []);

  // Countdown timer — only runs when finished or already completed
  useEffect(() => {
    if (!isFinished && !existingResult) return;
    const id = setInterval(() => setCountdown(getCountdownToMidnight()), 1000);
    return () => clearInterval(id);
  }, [isFinished, existingResult]);

  const handleSelect = useCallback(
    (index: number) => {
      if (!challenge) return;
      if (selectedIndex !== null) return; // already answered this attempt
      if (isFinished) return;

      setSelectedIndex(index);

      if (index === challenge.correctIndex) {
        // Correct!
        setAnswerState('correct');
        const xp = getXPForAttempt(attempt);
        const result: DailyChallengeResult = {
          date: challenge.date,
          solved: true,
          correctOnAttempt: attempt,
          xpEarned: xp,
        };
        saveDailyResult(result);
        addXP(xp);
        setFinalResult(result);
        setIsFinished(true);
      } else {
        // Wrong
        setAnswerState('wrong');

        if (attempt >= 3) {
          // Out of attempts
          const xp = getXPForAttempt(4); // 25 XP for participating
          const result: DailyChallengeResult = {
            date: challenge.date,
            solved: false,
            correctOnAttempt: null,
            xpEarned: xp,
          };
          saveDailyResult(result);
          addXP(xp);
          setFinalResult(result);
          setIsFinished(true);
        } else {
          // Move to next attempt after brief delay
          setTimeout(() => {
            setAttempt((a) => a + 1);
            setSelectedIndex(null);
            setAnswerState('idle');
          }, 900);
        }
      }
    },
    [challenge, selectedIndex, isFinished, attempt, addXP]
  );

  const handleShare = useCallback(async () => {
    const result = finalResult ?? existingResult;
    if (!result) return;
    const text = generateShareText(result);
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
        setShareMsg('In die Zwischenablage kopiert!');
        setTimeout(() => setShareMsg(''), 2500);
      }
    } catch {
      // user cancelled share or clipboard failed
    }
  }, [finalResult, existingResult]);

  // Format date for display
  const displayDate = new Date().toLocaleDateString('de-AT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  // --- Already completed today ---
  if (existingResult && !isFinished) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        <div className="max-w-2xl mx-auto w-full px-4 py-8 flex flex-col gap-6">
          {/* Back */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Dashboard
          </button>

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-semibold">
              <Target className="w-4 h-4" />
              BMS des Tages
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{displayDate}</p>
          </div>

          {/* Already done card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 text-center space-y-5">
            <div className="flex justify-center">
              {existingResult.solved ? (
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-green-500" />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <XCircle className="w-10 h-10 text-gray-400" />
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {existingResult.solved ? 'Heute bereits gelöst!' : 'Heute nicht geschafft'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {existingResult.solved
                  ? `In ${existingResult.correctOnAttempt}/3 Versuchen`
                  : 'Morgen wieder!'}
              </p>
            </div>

            {/* XP badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              +{existingResult.xpEarned} XP verdient
            </div>

            {/* Countdown */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-1">
              <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Nächste Frage in
              </div>
              <div className="text-3xl font-mono font-bold text-gray-900 dark:text-gray-100 tracking-wider">
                {countdown}
              </div>
            </div>

            {/* Share */}
            <Button
              onClick={handleShare}
              variant="outline"
              className="gap-2 w-full"
            >
              <Share2 className="w-4 h-4" />
              Ergebnis teilen
            </Button>
            {shareMsg && (
              <p className="text-sm text-green-600 dark:text-green-400">{shareMsg}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- Loading state ---
  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
      </div>
    );
  }

  const fachLabel = FACH_LABELS[challenge.fach] ?? challenge.fach;
  const fachColorClass = FACH_COLORS[challenge.fach] ?? 'bg-gray-100 text-gray-700';
  const letterLabels = ['A', 'B', 'C', 'D', 'E'];

  // --- Finished state ---
  if (isFinished && finalResult) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        <div className="max-w-2xl mx-auto w-full px-4 py-8 flex flex-col gap-6">
          {/* Back */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Dashboard
          </button>

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-semibold">
              <Target className="w-4 h-4" />
              BMS des Tages
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{displayDate}</p>
          </div>

          {/* Result card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            {/* Status banner */}
            <div
              className={cn(
                'px-6 py-4 flex items-center gap-3',
                finalResult.solved
                  ? 'bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900/30'
                  : 'bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/30'
              )}
            >
              {finalResult.solved ? (
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
              )}
              <div>
                <p className={cn('font-bold', finalResult.solved ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300')}>
                  {finalResult.solved
                    ? `Richtig! In ${finalResult.correctOnAttempt}/3 Versuchen`
                    : 'Leider nicht richtig'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {finalResult.solved
                    ? 'Gut gemacht — weiter so!'
                    : `Die richtige Antwort war: ${letterLabels[challenge.correctIndex]}`}
                </p>
              </div>
              {/* XP badge */}
              <div className="ml-auto flex-shrink-0 inline-flex items-center gap-1 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                +{finalResult.xpEarned} XP
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Fach label */}
              <span className={cn('inline-block text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide', fachColorClass)}>
                {fachLabel}
              </span>

              {/* Question */}
              <p className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {challenge.question}
              </p>

              {/* Options — highlight correct and selected wrong */}
              <div className="space-y-2">
                {challenge.options.map((opt, i) => {
                  const isCorrect = i === challenge.correctIndex;
                  const isWrongSelected = selectedIndex === i && !isCorrect;
                  return (
                    <div
                      key={i}
                      className={cn(
                        'flex items-start gap-3 px-4 py-3 rounded-xl border text-sm',
                        isCorrect
                          ? 'bg-green-50 border-green-300 dark:bg-green-900/20 dark:border-green-700 text-green-800 dark:text-green-200'
                          : isWrongSelected
                          ? 'bg-red-50 border-red-300 dark:bg-red-900/20 dark:border-red-700 text-red-800 dark:text-red-200'
                          : 'bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 text-gray-600 dark:text-gray-400'
                      )}
                    >
                      <span className="font-bold flex-shrink-0 mt-0.5">{letterLabels[i]}.</span>
                      <span>{opt}</span>
                      {isCorrect && <CheckCircle2 className="w-4 h-4 ml-auto flex-shrink-0 mt-0.5 text-green-500" />}
                      {isWrongSelected && <XCircle className="w-4 h-4 ml-auto flex-shrink-0 mt-0.5 text-red-500" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-4">
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1.5">
                  Erklarung
                </p>
                <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
                  {challenge.explanation}
                </p>
              </div>

              {/* Countdown */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  Nachste Frage in
                </div>
                <div className="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100 tracking-wider">
                  {countdown}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="gap-2 flex-1"
                >
                  <Share2 className="w-4 h-4" />
                  Ergebnis teilen
                </Button>
                <Button
                  onClick={() => navigate('/bms')}
                  className="gap-2 flex-1"
                >
                  Weiter lernen
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              {shareMsg && (
                <p className="text-sm text-center text-green-600 dark:text-green-400">{shareMsg}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Active challenge state ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-4 py-8 flex flex-col gap-6">
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Dashboard
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-semibold">
            <Target className="w-4 h-4" />
            BMS des Tages
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{displayDate}</p>
        </div>

        {/* Question card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Top meta bar */}
          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className={cn('text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide', fachColorClass)}>
              {fachLabel}
            </span>
            {/* Attempt dots */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 dark:text-gray-500 mr-1">Versuche</span>
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-colors',
                    n < attempt
                      ? 'bg-red-400 dark:bg-red-500'
                      : n === attempt
                      ? 'bg-amber-400 dark:bg-amber-500 ring-2 ring-amber-200 dark:ring-amber-800'
                      : 'bg-gray-200 dark:bg-gray-700'
                  )}
                />
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Kapitel hint */}
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
              {challenge.kapitelTitle}
            </p>

            {/* Question text */}
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug">
              {challenge.question}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {challenge.options.map((opt, i) => {
                const isSelected = selectedIndex === i;
                const isCorrect = i === challenge.correctIndex;
                const isWrong = isSelected && answerState === 'wrong';
                const isCorrectSelected = isSelected && answerState === 'correct';

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={selectedIndex !== null || isFinished}
                    className={cn(
                      'w-full text-left flex items-start gap-3 px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-200',
                      // Base style
                      selectedIndex === null
                        ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20 cursor-pointer'
                        : isCorrectSelected
                        ? 'border-green-400 bg-green-50 dark:bg-green-900/20 dark:border-green-600 text-green-800 dark:text-green-200 cursor-default'
                        : isWrong
                        ? 'border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600 text-red-800 dark:text-red-200 cursor-default animate-shake'
                        : isCorrect && answerState !== 'idle'
                        ? 'border-green-300 bg-green-50/50 dark:bg-green-900/10 dark:border-green-800 text-green-700 dark:text-green-300 cursor-default'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-default opacity-60'
                    )}
                  >
                    {/* Letter badge */}
                    <span
                      className={cn(
                        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5',
                        selectedIndex === null
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          : isCorrectSelected
                          ? 'bg-green-500 text-white'
                          : isWrong
                          ? 'bg-red-500 text-white'
                          : isCorrect && answerState !== 'idle'
                          ? 'bg-green-400 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                      )}
                    >
                      {letterLabels[i]}
                    </span>
                    <span className="leading-snug">{opt}</span>
                    {/* Icon feedback */}
                    {isCorrectSelected && (
                      <CheckCircle2 className="w-5 h-5 ml-auto flex-shrink-0 mt-0.5 text-green-500" />
                    )}
                    {isWrong && (
                      <XCircle className="w-5 h-5 ml-auto flex-shrink-0 mt-0.5 text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Attempt feedback message (shown while waiting for next attempt) */}
            {answerState === 'wrong' && !isFinished && (
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium animate-pulse">
                <XCircle className="w-4 h-4" />
                Nicht richtig — noch {3 - attempt} {3 - attempt === 1 ? 'Versuch' : 'Versuche'}
              </div>
            )}

            {/* Instruction hint */}
            {selectedIndex === null && (
              <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                Wähle die richtige Antwort — du hast 3 Versuche
              </p>
            )}
          </div>
        </div>

        {/* XP preview */}
        <div className="flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>1. Versuch: <strong className="text-gray-700 dark:text-gray-300">100 XP</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>2. Versuch: <strong className="text-gray-700 dark:text-gray-300">75 XP</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <span>3. Versuch: <strong className="text-gray-700 dark:text-gray-300">50 XP</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
