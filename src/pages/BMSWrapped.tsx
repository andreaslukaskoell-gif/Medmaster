import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Share2, ChevronRight, Trophy, Flame, Target, BookOpen, Star, ArrowLeft } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { shareText, getWrappedShareText } from '@/lib/shareUtils';
import { getLevelFromXP } from '@/lib/progression';

const TOTAL_SLIDES = 6;

interface SlideData {
  totalQuestions: number;
  correctAnswers: number;
  correctRate: number;
  currentMonth: string;
  longestStreak: number;
  currentLevel: number;
  activeDays: number;
  xp: number;
}

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-3">
      {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-0.5 rounded-full overflow-hidden bg-white/30"
        >
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: i < current ? '100%' : i === current ? '100%' : '0%' }}
          />
        </div>
      ))}
    </div>
  );
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onBack();
      }}
      className="absolute top-8 left-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
    >
      <ArrowLeft className="w-5 h-5 text-white" />
    </button>
  );
}

const slideVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

function Slide0Intro({ data, onNext }: { data: SlideData; onNext: () => void }) {
  return (
    <motion.div
      key="slide-0"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.35 }}
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)' }}
      onClick={onNext}
    >
      <ProgressBar current={0} />
      <div className="text-center px-8 space-y-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-7xl"
        >
          📊
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-4xl font-extrabold text-white leading-tight"
        >
          Dein BMS-{data.currentMonth}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/70 text-lg"
        >
          Deine Zusammenfassung
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2 text-white/50 text-sm"
        >
          <span>Tippen um fortzufahren</span>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Slide1Fragen({ data, onNext, onBack }: { data: SlideData; onNext: () => void; onBack: () => void }) {
  return (
    <motion.div
      key="slide-1"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.35 }}
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)' }}
      onClick={onNext}
    >
      <ProgressBar current={1} />
      <BackButton onBack={onBack} />
      <div className="text-center px-8 space-y-4">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.1 }}
          className="text-8xl font-extrabold text-white leading-none"
        >
          {data.totalQuestions}
        </motion.div>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white"
        >
          Fragen beantwortet
        </motion.p>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-white/80 text-lg"
        >
          davon {data.correctRate}% richtig ✅
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6"
        >
          <BookOpen className="w-12 h-12 text-white/40 mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Slide2Streak({ data, onNext, onBack }: { data: SlideData; onNext: () => void; onBack: () => void }) {
  return (
    <motion.div
      key="slide-2"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.35 }}
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{ background: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)' }}
      onClick={onNext}
    >
      <ProgressBar current={2} />
      <BackButton onBack={onBack} />
      <div className="text-center px-8 space-y-4">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.1 }}
          className="text-8xl font-extrabold text-white leading-none"
        >
          {data.longestStreak}
        </motion.div>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white"
        >
          Tage 🔥
        </motion.p>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-white/80 text-lg"
        >
          längster Streak
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6"
        >
          <Flame className="w-12 h-12 text-white/40 mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Slide3Level({ data, onNext, onBack }: { data: SlideData; onNext: () => void; onBack: () => void }) {
  return (
    <motion.div
      key="slide-3"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.35 }}
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{ background: 'linear-gradient(135deg, #312e81 0%, #7c3aed 100%)' }}
      onClick={onNext}
    >
      <ProgressBar current={3} />
      <BackButton onBack={onBack} />
      <div className="text-center px-8 space-y-4">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.1 }}
          className="text-8xl font-extrabold text-white leading-none"
        >
          Level {data.currentLevel}
        </motion.div>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white"
        >
          ⭐ erreicht
        </motion.p>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-white/80 text-lg"
        >
          {data.xp} XP gesammelt
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6"
        >
          <Star className="w-12 h-12 text-white/40 mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Slide4Aktivitaet({ data, onNext, onBack }: { data: SlideData; onNext: () => void; onBack: () => void }) {
  return (
    <motion.div
      key="slide-4"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.35 }}
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{ background: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)' }}
      onClick={onNext}
    >
      <ProgressBar current={4} />
      <BackButton onBack={onBack} />
      <div className="text-center px-8 space-y-4">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.1 }}
          className="text-8xl font-extrabold text-white leading-none"
        >
          {data.activeDays}
        </motion.div>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white"
        >
          Tage 📅
        </motion.p>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-white/80 text-lg"
        >
          aktiv gelernt
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6"
        >
          <Target className="w-12 h-12 text-white/40 mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ConfettiDots() {
  const dots = [
    { color: '#f59e0b', top: '8%', left: '12%', size: 10, delay: 0 },
    { color: '#3b82f6', top: '15%', right: '10%', size: 14, delay: 0.1 },
    { color: '#10b981', top: '25%', left: '5%', size: 8, delay: 0.2 },
    { color: '#ef4444', top: '30%', right: '18%', size: 12, delay: 0.15 },
    { color: '#8b5cf6', bottom: '30%', left: '8%', size: 10, delay: 0.25 },
    { color: '#f97316', bottom: '20%', right: '6%', size: 16, delay: 0.05 },
    { color: '#06b6d4', top: '50%', left: '3%', size: 8, delay: 0.3 },
    { color: '#ec4899', bottom: '40%', right: '12%', size: 10, delay: 0.2 },
    { color: '#a3e635', top: '70%', left: '15%', size: 6, delay: 0.35 },
    { color: '#fbbf24', top: '60%', right: '5%', size: 12, delay: 0.1 },
  ];

  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: dot.delay, type: 'spring', stiffness: 200 }}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            top: (dot as Record<string, unknown>).top as string | undefined,
            bottom: (dot as Record<string, unknown>).bottom as string | undefined,
            left: (dot as Record<string, unknown>).left as string | undefined,
            right: (dot as Record<string, unknown>).right as string | undefined,
          }}
        />
      ))}
    </>
  );
}

function Slide5Share({ data, onBack }: { data: SlideData; onBack: () => void }) {
  const navigate = useNavigate();
  const [shared, setShared] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await shareText(
      getWrappedShareText({
        month: data.currentMonth,
        questionsAnswered: data.totalQuestions,
        correctRate: data.correctRate,
        longestStreak: data.longestStreak,
        topPercentile: 20,
      })
    );
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleDashboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/');
  };

  return (
    <motion.div
      key="slide-5"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.35 }}
      className="absolute inset-0 flex flex-col items-center justify-center select-none"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}
    >
      <ProgressBar current={5} />
      <BackButton onBack={onBack} />
      <ConfettiDots />

      <div className="text-center px-8 space-y-6 relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="text-6xl"
        >
          🏆
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-3xl font-extrabold text-white"
        >
          Danke fuers Lernen!
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 rounded-2xl p-4 space-y-2 text-sm text-white/80"
        >
          <div className="flex justify-between">
            <span>Fragen beantwortet</span>
            <span className="font-bold text-white">{data.totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span>Richtig</span>
            <span className="font-bold text-white">{data.correctRate}%</span>
          </div>
          <div className="flex justify-between">
            <span>Streak</span>
            <span className="font-bold text-white">{data.longestStreak} Tage</span>
          </div>
          <div className="flex justify-between">
            <span>Level</span>
            <span className="font-bold text-white">{data.currentLevel}</span>
          </div>
          <div className="flex justify-between">
            <span>Aktive Tage</span>
            <span className="font-bold text-white">{data.activeDays}</span>
          </div>
          <div className="flex justify-between">
            <span>XP gesammelt</span>
            <span className="font-bold text-white">{data.xp}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="space-y-3"
        >
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 font-bold py-4 px-6 rounded-2xl text-lg hover:bg-gray-100 active:scale-95 transition-all"
          >
            {shared ? '✅ Kopiert!' : (
              <>
                <Share2 className="w-5 h-5" />
                Teilen 📤
              </>
            )}
          </button>
          <button
            onClick={handleDashboard}
            className="w-full text-white/60 hover:text-white text-sm py-2 transition-colors"
          >
            Zurueck zum Dashboard
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function BMSWrapped() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const store = useStore();

  const totalQuestions = store.quizResults.reduce((sum, r) => sum + r.total, 0);
  const correctAnswers = store.quizResults.reduce((sum, r) => sum + r.score, 0);
  const correctRate = Math.round((correctAnswers / Math.max(totalQuestions, 1)) * 100);
  const currentMonth = new Date().toLocaleDateString('de-AT', { month: 'long', year: 'numeric' });
  const longestStreak = store.streak;
  const currentLevel = getLevelFromXP(store.xp);
  const activeDays = Object.keys(store.activityLog || {}).length;

  const data: SlideData = {
    totalQuestions,
    correctAnswers,
    correctRate,
    currentMonth,
    longestStreak,
    currentLevel,
    activeDays,
    xp: store.xp,
  };

  const goNext = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide((s) => s + 1);
    }
  };

  const goBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide((s) => s - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <Slide0Intro key="s0" data={data} onNext={goNext} />
        )}
        {currentSlide === 1 && (
          <Slide1Fragen key="s1" data={data} onNext={goNext} onBack={goBack} />
        )}
        {currentSlide === 2 && (
          <Slide2Streak key="s2" data={data} onNext={goNext} onBack={goBack} />
        )}
        {currentSlide === 3 && (
          <Slide3Level key="s3" data={data} onNext={goNext} onBack={goBack} />
        )}
        {currentSlide === 4 && (
          <Slide4Aktivitaet key="s4" data={data} onNext={goNext} onBack={goBack} />
        )}
        {currentSlide === 5 && (
          <Slide5Share key="s5" data={data} onBack={goBack} />
        )}
      </AnimatePresence>
    </div>
  );
}
