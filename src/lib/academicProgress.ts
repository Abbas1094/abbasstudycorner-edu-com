// Academic progress tracking via localStorage (+ cloud attempt history when signed in)
import { recordAttemptAsync, listAttempts } from "@/lib/quizAttempts";

const STORAGE_KEY = "academic_progress";

export interface ChapterScore {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  attempts: number;
  bestScore: number;
  bestPercentage: number;
  lastAttemptDate: string;
}

export interface AcademicProgress {
  [classId: string]: {
    [subjectId: string]: {
      [chapterId: string]: ChapterScore;
    };
  };
}

function getProgress(): AcademicProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: AcademicProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getChapterScore(
  classId: string,
  subjectId: string,
  chapterId: string
): ChapterScore | null {
  const progress = getProgress();
  return progress[classId]?.[subjectId]?.[chapterId] ?? null;
}

export function saveChapterScore(
  classId: string,
  subjectId: string,
  chapterId: string,
  score: number,
  total: number
): ChapterScore {
  const progress = getProgress();
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 50;

  if (!progress[classId]) progress[classId] = {};
  if (!progress[classId][subjectId]) progress[classId][subjectId] = {};

  const existing = progress[classId][subjectId][chapterId];
  const attempts = (existing?.attempts ?? 0) + 1;
  const bestScore = Math.max(existing?.bestScore ?? 0, score);
  const bestPercentage = Math.max(existing?.bestPercentage ?? 0, percentage);

  const entry: ChapterScore = {
    score,
    total,
    percentage,
    passed: passed || (existing?.passed ?? false), // once passed, stays passed
    attempts,
    bestScore,
    bestPercentage,
    lastAttemptDate: new Date().toISOString(),
  };

  progress[classId][subjectId][chapterId] = entry;
  saveProgress(progress);

  recordAttemptAsync({
    quizKey: `${classId}/${subjectId}/${chapterId}`,
    category: "academic",
    subject: subjectId,
    chapter: chapterId,
    mode: "chapter",
    totalQuestions: total,
    correctAnswers: score,
    metadata: { classId },
  });

  return entry;
}

export function isChapterCompleted(
  classId: string,
  subjectId: string,
  chapterId: string
): boolean {
  const score = getChapterScore(classId, subjectId, chapterId);
  return score?.passed ?? false;
}

export function getSubjectProgress(
  classId: string,
  subjectId: string,
  chapterIds: string[]
): { completed: number; total: number } {
  const progress = getProgress();
  let completed = 0;
  for (const chapterId of chapterIds) {
    if (progress[classId]?.[subjectId]?.[chapterId]?.passed) {
      completed++;
    }
  }
  return { completed, total: chapterIds.length };
}

/**
 * Rebuilds local chapter progress from the signed-in user's cloud attempt
 * history, so progress follows the account across devices and cache clears.
 * Best-effort: never throws, never removes existing local progress.
 */
export async function syncProgressFromCloud(): Promise<void> {
  try {
    const records = await listAttempts(500);
    if (records.length === 0) return;

    const progress = getProgress();
    // oldest first so "attempts" counts and latest score end up correct
    const chapterRecords = records
      .filter((r) => r.category === "academic" && r.quiz_key.split("/").length === 3)
      .slice()
      .reverse();

    for (const r of chapterRecords) {
      const [classId, subjectId, chapterId] = r.quiz_key.split("/");
      if (!classId || !subjectId || !chapterId) continue;

      if (!progress[classId]) progress[classId] = {};
      if (!progress[classId][subjectId]) progress[classId][subjectId] = {};

      const existing = progress[classId][subjectId][chapterId];
      const date = r.completed_at ?? r.created_at;
      const isNewer = !existing || new Date(date) > new Date(existing.lastAttemptDate);

      progress[classId][subjectId][chapterId] = {
        score: isNewer ? r.correct_answers : existing!.score,
        total: isNewer ? r.total_questions : existing!.total,
        percentage: isNewer ? r.percentage : existing!.percentage,
        passed: r.passed || (existing?.passed ?? false),
        attempts: Math.max((existing?.attempts ?? 0), 0) + (existing ? 0 : 1),
        bestScore: Math.max(existing?.bestScore ?? 0, r.correct_answers),
        bestPercentage: Math.max(existing?.bestPercentage ?? 0, r.percentage),
        lastAttemptDate: isNewer ? date : existing!.lastAttemptDate,
      };
    }

    saveProgress(progress);
  } catch {
    // local progress remains the source of truth if sync fails
  }
}
