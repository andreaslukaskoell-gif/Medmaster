import { Link } from "react-router-dom";
import { ArrowLeft, Heart, GraduationCap, Stethoscope, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function UeberUns() {
  usePageTitle("Über uns");

  return (
    <div className="max-w-3xl mx-auto space-y-10 py-8 px-4">
      {/* Back */}
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Link>
      </Button>

      {/* Hero */}
      <div className="text-center space-y-4 hero-orbs py-8">
        <h1 className="heading-glow text-2xl sm:text-[3rem] sm:leading-tight font-bold text-[var(--text-primary)]">
          Die Geschichte hinter MedMaster
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">
          Gebaut von jemandem, der den MedAT selbst gemeistert hat — für alle, die es auch schaffen
          wollen.
        </p>
      </div>

      {/* Personal story */}
      <Card>
        <CardContent className="p-8 space-y-6">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
              <Stethoscope className="w-8 h-8 text-[var(--accent)]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                Andreas Lukas Köll
              </h2>
              <p className="text-sm text-[var(--muted)]">
                Gründer von MedMaster — Arzt in Ausbildung zum Kardiologen, Klinik Hietzing, Wien
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Ich habe den MedAT beim ersten Anlauf geschafft. Nicht, weil ich ein Genie bin —
              sondern weil ich systematisch gelernt habe. Aber der Weg dorthin war frustrierend. Die
              Materialien, die es damals gab, waren entweder veraltet, unvollständig oder absurd
              teuer. Ich habe mir oft gewünscht, es gäbe eine Plattform, die alles an einem Ort
              vereint: aktuelle Inhalte, echtes MedAT-Format, intelligentes Üben — und das zu einem
              fairen Preis.
            </p>

            <p>
              Genau das ist MedMaster. Ich baue die Lernplattform, die ich mir damals selbst
              gewünscht hätte.
            </p>

            <p>
              Heute arbeite ich als Arzt in Ausbildung zum Kardiologen an der Klinik Hietzing in
              Wien. Neben meiner klinischen Arbeit stecke ich jede freie Minute in MedMaster — weil
              ich weiß, wie entscheidend eine gute Vorbereitung für den MedAT ist und wie sehr der
              Zugang zu hochwertigen Materialien den Unterschied machen kann.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Mission */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--text-primary)] text-center">
          Warum MedMaster?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto">
                <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">Aus Erfahrung</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Jede Aufgabe, jede Strategie und jedes Feature basiert auf echten MedAT-Erfahrungen
                — nicht auf Theorie aus dem Lehrbuch.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                <Target className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">Echtes MedAT-Format</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Alle Aufgaben orientieren sich 1:1 an den offiziellen Beispielen der MedUnis. Kein
                generischer MC-Test, sondern echte Prüfungsvorbereitung.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto">
                <Heart className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">Fair & unabhängig</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Einmalzahlung statt Abo-Falle. Kein Konzern im Hintergrund. Ein Arzt, der will, dass
                du es schaffst.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Closing */}
      <Card className="border-[var(--accent)]/30 bg-[var(--accent)]/5">
        <CardContent className="p-6 text-center space-y-3">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            MedMaster ist kein anonymes Produkt eines großen Unternehmens. Es ist ein persönliches
            Projekt von jemandem, der genau weiß, was du gerade durchmachst — und der will, dass du
            es beim ersten Anlauf schaffst.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Fragen oder Feedback? Schreib uns direkt:{" "}
            <a
              href="mailto:support@medmaster.at"
              className="text-[var(--accent)] font-medium hover:underline"
            >
              support@medmaster.at
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
