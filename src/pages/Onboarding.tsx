import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { GraduationCap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/store/useStore";

interface OnboardingQuestion {
  id: string;
  subject: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
}

const einstufungsFragen: OnboardingQuestion[] = [
  // 4 BMS
  { id: "e-bio", subject: "BMS - Biologie", text: "Welches Molekül speichert die genetische Information in Zellen?", options: [{ id: "a", text: "Proteine" }, { id: "b", text: "DNA" }, { id: "c", text: "Lipide" }, { id: "d", text: "Kohlenhydrate" }], correctOptionId: "b" },
  { id: "e-chem", subject: "BMS - Chemie", text: "Wie lautet die Summenformel von Wasser?", options: [{ id: "a", text: "HO2" }, { id: "b", text: "H2O" }, { id: "c", text: "OH" }, { id: "d", text: "H2O2" }], correctOptionId: "b" },
  { id: "e-phys", subject: "BMS - Physik", text: "Welche Einheit misst die elektrische Spannung?", options: [{ id: "a", text: "Ampere" }, { id: "b", text: "Watt" }, { id: "c", text: "Volt" }, { id: "d", text: "Ohm" }], correctOptionId: "c" },
  { id: "e-math", subject: "BMS - Mathematik", text: "Was ergibt 3² + 4²?", options: [{ id: "a", text: "7" }, { id: "b", text: "12" }, { id: "c", text: "24" }, { id: "d", text: "25" }], correctOptionId: "d" },
  // 4 BMS Advanced
  { id: "e-bio2", subject: "BMS - Biologie", text: "In welcher Phase der Mitose werden die Chromatiden zu den Zellpolen gezogen?", options: [{ id: "a", text: "Prophase" }, { id: "b", text: "Metaphase" }, { id: "c", text: "Anaphase" }, { id: "d", text: "Telophase" }], correctOptionId: "c" },
  { id: "e-chem2", subject: "BMS - Chemie", text: "Welche Bindungsart liegt im NaCl-Kristall vor?", options: [{ id: "a", text: "Kovalente Bindung" }, { id: "b", text: "Ionenbindung" }, { id: "c", text: "Metallische Bindung" }, { id: "d", text: "Van-der-Waals-Bindung" }], correctOptionId: "b" },
  { id: "e-phys2", subject: "BMS - Physik", text: "Wie berechnet sich die kinetische Energie?", options: [{ id: "a", text: "E = mgh" }, { id: "b", text: "E = ½mv²" }, { id: "c", text: "E = mc²" }, { id: "d", text: "E = Fs" }], correctOptionId: "b" },
  { id: "e-math2", subject: "BMS - Mathematik", text: "Was ist die Ableitung von f(x) = x³?", options: [{ id: "a", text: "3x" }, { id: "b", text: "3x²" }, { id: "c", text: "x²" }, { id: "d", text: "3x³" }], correctOptionId: "b" },
  // 4 KFF
  { id: "e-zf", subject: "KFF - Zahlenfolgen", text: "Welche Zahl kommt als nächstes? 2, 4, 8, 16, ...", options: [{ id: "a", text: "24" }, { id: "b", text: "32" }, { id: "c", text: "20" }, { id: "d", text: "30" }], correctOptionId: "b" },
  { id: "e-imp", subject: "KFF - Implikationen", text: "'Wenn es regnet, ist die Straße nass.' Die Straße ist trocken. Was folgt?", options: [{ id: "a", text: "Es regnet" }, { id: "b", text: "Es regnet nicht" }, { id: "c", text: "Keine Aussage möglich" }, { id: "d", text: "Die Straße ist nass" }], correctOptionId: "b" },
  { id: "e-zf2", subject: "KFF - Zahlenfolgen", text: "Welche Zahl kommt als nächstes? 1, 1, 2, 3, 5, ...", options: [{ id: "a", text: "7" }, { id: "b", text: "6" }, { id: "c", text: "8" }, { id: "d", text: "10" }], correctOptionId: "c" },
  { id: "e-imp2", subject: "KFF - Implikationen", text: "'Alle Ärzte haben studiert.' Tom hat studiert. Was folgt?", options: [{ id: "a", text: "Tom ist Arzt" }, { id: "b", text: "Tom ist kein Arzt" }, { id: "c", text: "Keine sichere Aussage möglich" }, { id: "d", text: "Tom hat Medizin studiert" }], correctOptionId: "c" },
  // 2 TV
  { id: "e-tv", subject: "TV - Textverständnis", text: "Wann ist eine Aussage 'ableitbar' aus einem Text?", options: [{ id: "a", text: "Wenn sie allgemein wahr ist" }, { id: "b", text: "Wenn sie logisch aus dem Text folgt" }, { id: "c", text: "Wenn sie plausibel klingt" }, { id: "d", text: "Wenn sie der eigenen Meinung entspricht" }], correctOptionId: "b" },
  { id: "e-tv2", subject: "TV - Textverständnis", text: "Ein Text sagt: 'Viele Patienten berichten Besserung.' Ist 'Alle Patienten werden geheilt' ableitbar?", options: [{ id: "a", text: "Ja, das ist ableitbar" }, { id: "b", text: "Nein, 'viele' heißt nicht 'alle'" }, { id: "c", text: "Ja, wenn die Behandlung wirkt" }, { id: "d", text: "Hängt vom Kontext ab" }], correctOptionId: "b" },
  // 2 SEK
  { id: "e-sek", subject: "SEK - Emotionen", text: "Welches Merkmal zeigt echte Freude (Duchenne-Lächeln)?", options: [{ id: "a", text: "Nur der Mund lächelt" }, { id: "b", text: "Krähenfüße um die Augen" }, { id: "c", text: "Gerümpfte Nase" }, { id: "d", text: "Angehobene Augenbrauen" }], correctOptionId: "b" },
  { id: "e-sek2", subject: "SEK - Regulation", text: "Ein Patient weint. Was ist die beste Reaktion?", options: [{ id: "a", text: "Schnell ablenken" }, { id: "b", text: "Sagen: 'Weinen hilft nicht'" }, { id: "c", text: "Empathie zeigen und zuhören" }, { id: "d", text: "Raum verlassen" }], correctOptionId: "c" },
];

const subjectGroups: Record<string, string[]> = {
  "BMS": ["e-bio", "e-chem", "e-phys", "e-math", "e-bio2", "e-chem2", "e-phys2", "e-math2"],
  "KFF": ["e-zf", "e-imp", "e-zf2", "e-imp2"],
  "TV": ["e-tv", "e-tv2"],
  "SEK": ["e-sek", "e-sek2"],
};

export default function Onboarding() {
  const [step, setStep] = useState<"welcome" | "quiz" | "results">("welcome");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { completeOnboarding } = useStore();

  const handleFinish = () => {
    const scores: Record<string, { correct: number; total: number }> = {};
    Object.entries(subjectGroups).forEach(([group, ids]) => {
      const groupQs = einstufungsFragen.filter((q) => ids.includes(q.id));
      const correct = groupQs.filter((q) => answers[q.id] === q.correctOptionId).length;
      scores[group] = { correct, total: groupQs.length };
    });

    const totalCorrect = Object.values(scores).reduce((s, v) => s + v.correct, 0);
    const totalTotal = Object.values(scores).reduce((s, v) => s + v.total, 0);
    const pct = Math.round((totalCorrect / totalTotal) * 100);

    const level = pct >= 75 ? "Fortgeschritten" : pct >= 50 ? "Mittel" : "Anfaenger";
    const recommendations: string[] = [];
    Object.entries(scores).forEach(([group, data]) => {
      const groupPct = Math.round((data.correct / data.total) * 100);
      if (groupPct < 50) recommendations.push(`${group}: Grundlagen auffrischen`);
      else if (groupPct < 75) recommendations.push(`${group}: Übungen vertiefen`);
    });

    completeOnboarding({ scores, recommendations, level, completedAt: new Date().toISOString() });
    setStep("results");
  };

  if (step === "welcome") {
    return (
      <div className="max-w-2xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <GraduationCap className="w-10 h-10 text-primary-700 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Willkommen bei MedMaster!</h1>
          <p className="text-muted max-w-md mx-auto">
            Bevor du loslegst, moechten wir deinen aktuellen Wissensstand einschätzen.
            Der Einstufungstest dauert nur wenige Minuten und hilft uns, deinen Lernplan zu personalisieren.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-bold text-gray-900 dark:text-gray-100">16</p>
                <p className="text-xs text-muted">Fragen</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-bold text-gray-900 dark:text-gray-100">~5 Min</p>
                <p className="text-xs text-muted">Dauer</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-bold text-gray-900 dark:text-gray-100">4</p>
                <p className="text-xs text-muted">Bereiche</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-bold text-gray-900 dark:text-gray-100">Individuell</p>
                <p className="text-xs text-muted">Lernplan</p>
              </div>
            </div>
            <Button size="lg" className="w-full" onClick={() => setStep("quiz")}>
              <Sparkles className="w-5 h-5 mr-2" />
              Einstufungstest starten
            </Button>
            <button
              onClick={() => { completeOnboarding(null); navigate("/"); }}
              className="w-full text-sm text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
            >
              Überspringen
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === "results") {
    const { einstufungsResult } = useStore.getState();
    if (!einstufungsResult) return null;

    const radarData = Object.entries(einstufungsResult.scores).map(([name, data]) => ({
      subject: name,
      Prozent: Math.round((data.correct / data.total) * 100),
      fullMark: 100,
    }));

    const totalCorrect = Object.values(einstufungsResult.scores).reduce((s, v) => s + v.correct, 0);
    const totalTotal = Object.values(einstufungsResult.scores).reduce((s, v) => s + v.total, 0);

    return (
      <div className="max-w-2xl mx-auto space-y-6 pt-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dein Ergebnis</h1>
          <p className="text-muted mt-1">Einstufungstest abgeschlossen!</p>
        </div>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-5xl font-bold text-primary-700 dark:text-primary-400">
              {totalCorrect}/{totalTotal}
            </div>
            <p className="text-muted mt-1">{Math.round((totalCorrect / totalTotal) * 100)}% richtig</p>
            <Badge className="mt-2" variant={einstufungsResult.level === "Fortgeschritten" ? "success" : einstufungsResult.level === "Mittel" ? "warning" : "info"}>
              Niveau: {einstufungsResult.level}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#64748b", fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 10 }} />
                <Radar name="Ergebnis" dataKey="Prozent" stroke="#0f766e" fill="#0f766e" fillOpacity={0.3} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {einstufungsResult.recommendations.length > 0 && (
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Empfehlungen</h3>
              {einstufungsResult.recommendations.map((rec, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                  {rec}
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        <Button size="lg" className="w-full" onClick={() => navigate("/")}>
          <ArrowRight className="w-5 h-5 mr-2" />
          Zum Dashboard
        </Button>
      </div>
    );
  }

  // Quiz step
  const q = einstufungsFragen[currentIndex];
  const allAnswered = einstufungsFragen.every((q) => answers[q.id]);

  return (
    <div className="max-w-2xl mx-auto space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <Badge variant="info">{q.subject}</Badge>
        <span className="text-sm text-muted">
          {currentIndex + 1} / {einstufungsFragen.length}
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / einstufungsFragen.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.text}</p>
          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setAnswers((p) => ({ ...p, [q.id]: opt.id }));
                  if (currentIndex < einstufungsFragen.length - 1) {
                    setTimeout(() => setCurrentIndex((i) => i + 1), 200);
                  }
                }}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[q.id] === opt.id
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
                {opt.text}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
        >
          Zurück
        </Button>
        {currentIndex < einstufungsFragen.length - 1 ? (
          <Button
            onClick={() => setCurrentIndex((i) => i + 1)}
            disabled={!answers[q.id]}
          >
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleFinish} disabled={!allAnswered}>
            Auswertung
          </Button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {einstufungsFragen.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentIndex(i)}
            className={`w-7 h-7 rounded text-xs font-medium transition-colors cursor-pointer ${
              i === currentIndex
                ? "bg-primary-700 text-white"
                : answers[q.id]
                  ? "bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
