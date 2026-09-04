// Persistent quiz attempt history (cloud). Safe no-op when signed out.
import { supabase } from "@/integrations/supabase/client";

export interface AttemptInput {
  quizKey: string;
  category?: string | null;
  subject?: string | null;
  chapter?: string | null;
  mode?: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers?: number;
  unanswered?: number;
  timeSpentSeconds?: number | null;
  passPercentage?: number;
  metadata?: Record<string, unknown>;
}

export interface AttemptRecord {
  id: string;
  quiz_key: string;
  category: string | null;
  subject: string | null;
  chapter: string | null;
  mode: string;
  total_questions: number;
  correct_answers: number;
  incorrect_answers: number;
  unanswered: number;
  score: number;
  percentage: number;
  passed: boolean;
  time_spent_seconds: number | null;
  completed_at: string | null;
  created_at: string;
}

/** Records a completed attempt for the signed-in user. Never throws. */
export async function recordAttempt(input: AttemptInput): Promise<void> {
  try {
    const { data: authData } = await supabase.auth.getSession();
    const userId = authData.session?.user?.id;
    if (!userId) return;

    const total = Math.max(input.totalQuestions, 0);
    const correct = Math.max(input.correctAnswers, 0);
    const incorrect = input.incorrectAnswers ?? Math.max(total - correct, 0);
    const unanswered = input.unanswered ?? 0;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passed = percentage >= (input.passPercentage ?? 50);

    await supabase.from("quiz_attempts").insert({
      user_id: userId,
      quiz_key: input.quizKey,
      category: input.category ?? null,
      subject: input.subject ?? null,
      chapter: input.chapter ?? null,
      mode: input.mode ?? "practice",
      total_questions: total,
      correct_answers: correct,
      incorrect_answers: incorrect,
      unanswered,
      score: correct,
      percentage,
      passed,
      time_spent_seconds: input.timeSpentSeconds ?? null,
      completed_at: new Date().toISOString(),
      metadata: (input.metadata ?? {}) as never,
    });
  } catch {
    // progress sync is best-effort; local progress still works
  }
}

/** Fire-and-forget wrapper for use inside sync code paths. */
export function recordAttemptAsync(input: AttemptInput): void {
  void recordAttempt(input);
}

export async function listAttempts(limit = 50): Promise<AttemptRecord[]> {
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select(
      "id, quiz_key, category, subject, chapter, mode, total_questions, correct_answers, incorrect_answers, unanswered, score, percentage, passed, time_spent_seconds, completed_at, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []) as AttemptRecord[];
}

export interface AttemptStats {
  attempts: number;
  questionsAnswered: number;
  correct: number;
  averagePercentage: number;
  passRate: number;
  bestPercentage: number;
}

export function summarize(records: AttemptRecord[]): AttemptStats {
  if (records.length === 0) {
    return { attempts: 0, questionsAnswered: 0, correct: 0, averagePercentage: 0, passRate: 0, bestPercentage: 0 };
  }
  const questionsAnswered = records.reduce((s, r) => s + r.total_questions, 0);
  const correct = records.reduce((s, r) => s + r.correct_answers, 0);
  const averagePercentage = Math.round(records.reduce((s, r) => s + r.percentage, 0) / records.length);
  const passRate = Math.round((records.filter((r) => r.passed).length / records.length) * 100);
  const bestPercentage = records.reduce((m, r) => Math.max(m, r.percentage), 0);
  return { attempts: records.length, questionsAnswered, correct, averagePercentage, passRate, bestPercentage };
}
