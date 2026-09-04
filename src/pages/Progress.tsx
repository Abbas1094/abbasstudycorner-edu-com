import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, CheckCircle2, Target, Trophy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { listAttempts, summarize, type AttemptRecord } from "@/lib/quizAttempts";

const ProgressPage = () => {
  const [attempts, setAttempts] = useState<AttemptRecord[] | null>(null);

  useEffect(() => {
    let active = true;
    listAttempts(100).then((rows) => {
      if (active) setAttempts(rows);
    });
    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => summarize(attempts ?? []), [attempts]);

  return (
    <div className="min-h-screen bg-gradient-navy">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 sm:px-6 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Home
            </Link>
          </Button>
          <h1 className="font-display text-lg sm:text-xl font-bold text-gradient-gold">My Progress</h1>
        </div>
      </header>

      <main className="container px-4 sm:px-6 py-6 sm:py-10 max-w-3xl">
        {attempts === null ? (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
            Loading your progress…
          </div>
        ) : attempts.length === 0 ? (
          <div className="text-center py-16">
            <BarChart3 className="w-10 h-10 text-primary mx-auto mb-3" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-foreground mb-1">No attempts yet</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Finish a quiz while signed in and your results will show up here.
            </p>
            <Button asChild>
              <Link to="/">Start practising</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {[
                { icon: Target, label: "Attempts", value: String(stats.attempts) },
                { icon: CheckCircle2, label: "Correct", value: `${stats.correct}/${stats.questionsAnswered}` },
                { icon: BarChart3, label: "Average", value: `${stats.averagePercentage}%` },
                { icon: Trophy, label: "Best", value: `${stats.bestPercentage}%` },
              ].map((s) => (
                <div key={s.label} className="bg-gradient-card border border-border rounded-xl p-3 sm:p-4 text-center">
                  <s.icon className="w-4 h-4 text-primary mx-auto mb-1.5" aria-hidden="true" />
                  <p className="font-display font-bold text-foreground text-sm sm:text-base">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3">Recent attempts</h2>
            <ul className="space-y-2.5">
              {attempts.map((a) => (
                <li
                  key={a.id}
                  className="bg-gradient-card border border-border rounded-xl px-4 py-3 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {[a.subject, a.chapter].filter(Boolean).join(" · ") || a.quiz_key}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {a.mode} · {new Date(a.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className={`font-display font-bold text-sm ${a.passed ? "text-primary" : "text-destructive"}`}>
                      {a.percentage}%
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {a.correct_answers}/{a.total_questions}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
};

export default ProgressPage;
