/**
 * Nach dem Einstufungstest: Wahl „Lernplan jetzt erstellen“ oder „Später“.
 * Ja → /onboarding (Lernplan-Flow). Später → completeOnboarding, dann Dashboard.
 */
import { Navigate, useNavigate } from "react-router-dom";
import { CalendarDays, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/store/useStore";

export default function LernplanChoice() {
  const navigate = useNavigate();
  const { onboardingCompleted, completeOnboarding } = useStore();

  if (onboardingCompleted) {
    return <Navigate to="/" replace />;
  }

  const handleNow = () => {
    navigate("/onboarding", { replace: true });
  };

  const handleLater = () => {
    completeOnboarding(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:py-14 flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary-500/15 ring-2 ring-primary-500/30">
            <CalendarDays className="w-8 h-8 text-primary-500" aria-hidden />
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-app-foreground">
            Lernplan erstellen?
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-app-muted max-w-sm mx-auto">
            Mit einem Lernplan schlagen wir dir tägliche Ziele vor und du behältst bis zum MedAT den
            Überblick. Du kannst ihn jederzeit unter „Lernplan“ anpassen oder später erstellen.
          </p>
        </div>

        <Card className="border-app-border bg-app-card">
          <CardContent className="pt-6 pb-6 space-y-4">
            <Button
              size="lg"
              className="w-full gap-2 py-6 text-base font-semibold"
              onClick={handleNow}
            >
              <CalendarDays className="w-5 h-5 shrink-0" aria-hidden />
              Ja, Lernplan jetzt erstellen
              <ArrowRight className="w-4 h-4 ml-auto shrink-0" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 py-5 text-base"
              onClick={handleLater}
            >
              <Clock className="w-4 h-4 shrink-0" aria-hidden />
              Später – erstmal loslegen
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-app-muted">
          Du findest den Lernplan jederzeit in der Sidebar unter „Lernplan“.
        </p>
      </div>
    </div>
  );
}
