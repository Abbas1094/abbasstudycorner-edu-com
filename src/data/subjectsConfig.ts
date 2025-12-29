import { chemistryChapters } from './chemistryData';
import { physicsChapters } from './physicsData';
import { mathChapters } from './mathData';
import { intelligenceChapters } from './intelligenceData';
import { gkChapters } from './generalKnowledgeData';
import { englishChapters } from './englishData';
import { islamicChapters } from './islamicData';
import { pakistanStudiesChapters } from './pakistanStudiesData';

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  chapters: any[];
}

export const subjects: Subject[] = [
  {
    id: 'intelligence',
    name: 'Intelligence',
    description: 'Verbal & Non-Verbal Reasoning',
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    chapters: intelligenceChapters
  },
  {
    id: 'english',
    name: 'English',
    description: 'Grammar, Vocabulary & Comprehension',
    icon: '📚',
    color: 'from-blue-500 to-cyan-600',
    chapters: englishChapters
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Arithmetic, Algebra & Geometry',
    icon: '📐',
    color: 'from-green-500 to-emerald-600',
    chapters: mathChapters
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, Waves & Electricity',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    chapters: physicsChapters
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Atomic Structure, Reactions & Organic',
    icon: '⚗️',
    color: 'from-pink-500 to-rose-600',
    chapters: chemistryChapters
  },
  {
    id: 'pakistan-studies',
    name: 'Pakistan Studies',
    description: 'History, Geography & Constitution',
    icon: '🇵🇰',
    color: 'from-emerald-500 to-teal-600',
    chapters: pakistanStudiesChapters
  },
  {
    id: 'islamic-studies',
    name: 'Islamic Studies',
    description: 'Quran, Hadith & Islamic History',
    icon: '☪️',
    color: 'from-amber-500 to-yellow-600',
    chapters: islamicChapters
  },
  {
    id: 'general-knowledge',
    name: 'General Knowledge',
    description: 'Current Affairs & World Facts',
    icon: '🌍',
    color: 'from-cyan-500 to-blue-600',
    chapters: gkChapters
  }
];

export const getTotalMCQs = () => {
  return subjects.reduce((total, subject) => {
    return total + subject.chapters.reduce((chapterTotal, chapter) => {
      return chapterTotal + chapter.mcqs.length;
    }, 0);
  }, 0);
};

export const getTotalChapters = () => {
  return subjects.reduce((total, subject) => total + subject.chapters.length, 0);
};

export const getRandomMCQs = (count: number) => {
  const allMCQs: any[] = [];
  subjects.forEach(subject => {
    subject.chapters.forEach(chapter => {
      chapter.mcqs.forEach((mcq: any) => {
        allMCQs.push({ ...mcq, subjectId: subject.id, chapterId: chapter.id, subjectName: subject.name });
      });
    });
  });
  return allMCQs.sort(() => Math.random() - 0.5).slice(0, count);
};

export const getIntelligenceMCQs = (count: number) => {
  const mcqs: any[] = [];
  const intel = subjects.find(s => s.id === 'intelligence');
  if (intel) {
    intel.chapters.forEach(chapter => {
      chapter.mcqs.forEach((mcq: any) => {
        mcqs.push({ ...mcq, subjectId: intel.id, chapterId: chapter.id });
      });
    });
  }
  return mcqs.sort(() => Math.random() - 0.5).slice(0, count);
};

export const getAcademicMCQs = (count: number) => {
  const mcqs: any[] = [];
  const academicSubjects = subjects.filter(s => s.id !== 'intelligence');
  academicSubjects.forEach(subject => {
    subject.chapters.forEach(chapter => {
      chapter.mcqs.forEach((mcq: any) => {
        mcqs.push({ ...mcq, subjectId: subject.id, chapterId: chapter.id, subjectName: subject.name });
      });
    });
  });
  return mcqs.sort(() => Math.random() - 0.5).slice(0, count);
};
