// Academic progress tracking via localStorage (+ cloud attempt history when signed in)
import { recordAttemptAsync } from "@/lib/quizAttempts";

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
