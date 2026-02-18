// Pakistan Army - PMA Long Course, TCC, DSSC, IC, LCC Data
import { Chapter, MCQ } from "@/types";
import { armyVerbalExperienceMCQsData } from "@/data/pakArmy/armyVerbalExperienceMCQs";
import { armyEnglishExperienceMCQsData } from "@/data/pakArmy/armyEnglishExperienceMCQs";
import { armyMathExperienceMCQsData } from "@/data/pakArmy/armyMathExperienceMCQs";
import { armyPakStudiesExperienceMCQsData } from "@/data/pakArmy/armyPakStudiesExperienceMCQs";
import { armyIslamiatExperienceMCQsData } from "@/data/pakArmy/armyIslamiatExperienceMCQs";
import { armyGKExperienceMCQsData } from "@/data/pakArmy/armyGKExperienceMCQs";

// Chapter MCQs
import { armyGKCh1MCQs, armyGKCh2MCQs, armyGKCh3MCQs, armyGKCh4MCQs, armyGKCh5MCQs, armyGKCh6MCQs, armyGKCh7MCQs, armyGKCh8MCQs } from "@/data/pakArmy/armyGKChapterMCQs";
import { armyPSCh1MCQs, armyPSCh2MCQs, armyPSCh3MCQs, armyPSCh4MCQs, armyPSCh5MCQs, armyPSCh8MCQs } from "@/data/pakArmy/armyPakStudiesChapterMCQs";
import { armyIslCh2MCQs, armyIslCh3MCQs, armyIslCh4MCQs, armyIslCh5MCQs, armyIslCh6MCQs, armyIslCh7MCQs } from "@/data/pakArmy/armyIslamiatChapterMCQs";
import { armyEngCh2MCQs, armyEngCh3MCQs, armyEngCh8MCQs, armyEngCh9MCQs } from "@/data/pakArmy/armyEnglishChapterMCQs";
import { armyMathCh2MCQs, armyMathCh3MCQs, armyMathCh5MCQs, armyMathCh6MCQs, armyMathCh7MCQs, armyMathCh8MCQs, armyMathCh9MCQs, armyMathCh10MCQs } from "@/data/pakArmy/armyMathChapterMCQs";
import { armyVerbalCh1MCQs, armyVerbalCh3MCQs, armyVerbalCh5MCQs, armyVerbalCh9MCQs } from "@/data/pakArmy/armyVerbalChapterMCQs";
import { allNonVerbalMCQs } from "@/data/nonVerbalPatterns";

// New Verbal MCQs from Ilyas Forces + Most Repeated PDFs
import {
  armyVerbalNewCh1MCQs,
  armyVerbalNewCh3MCQs,
  armyVerbalNewCh5MCQs,
  armyVerbalNewCh6MCQs,
  armyVerbalNewCh7TimeMCQs,
  armyVerbalNewCh7AgeMCQs,
  armyVerbalNewCh7MathMCQs,
  armyVerbalNewCh7SpeedMCQs,
  armyVerbalNewCh7ProfitMCQs,
  armyVerbalNewCh8MCQs,
  armyVerbalNewCh9MCQs,
  armyVerbalNewCh10MCQs,
} from "@/data/pakArmy/armyVerbalNewMCQs";

// Batch 2 Verbal MCQs
import {
  armyVerbalNewCh1Batch2MCQs,
  armyVerbalNewCh3Batch2MCQs,
  armyVerbalNewCh5Batch2MCQs,
  armyVerbalNewCh6Batch2MCQs,
  armyVerbalNewCh7SpeedBatch2MCQs,
  armyVerbalNewCh8Batch2MCQs,
  armyVerbalNewCh9Batch2MCQs,
  armyVerbalNewCh10Batch2MCQs,
} from "@/data/pakArmy/armyVerbalNewMCQs2";

// ============= INTELLIGENCE - VERBAL =============
export const armyVerbalChapters: Chapter[] = [
  { id: "army-verbal-1", name: "Verbal Analogies", description: "Word relationships and analogies", icon: "💭",
    mcqs: [...armyVerbalExperienceMCQsData.slice(4, 6), ...armyVerbalCh1MCQs, ...armyVerbalNewCh1MCQs, ...armyVerbalNewCh1Batch2MCQs] },
  { id: "army-verbal-2", name: "Synonyms & Antonyms", description: "Words with similar and opposite meanings", icon: "🔤", mcqs: [] },
  { id: "army-verbal-3", name: "Word Problems", description: "Logical word-based reasoning / Odd One Out", icon: "📝",
    mcqs: [...armyVerbalExperienceMCQsData.slice(0, 4), ...armyVerbalCh3MCQs, ...armyVerbalNewCh3MCQs, ...armyVerbalNewCh3Batch2MCQs] },
  { id: "army-verbal-4", name: "Sentence Completion", description: "Fill in the blanks with correct words", icon: "✍️", mcqs: [] },
  { id: "army-verbal-5", name: "Verbal Series", description: "Letter and word sequences", icon: "🔡",
    mcqs: [...armyVerbalExperienceMCQsData.slice(11, 13), ...armyVerbalCh5MCQs, ...armyVerbalNewCh5MCQs, ...armyVerbalNewCh5Batch2MCQs] },
  { id: "army-verbal-6", name: "Coding-Decoding", description: "Pattern recognition in letter/number codes", icon: "🔐",
    mcqs: [...armyVerbalExperienceMCQsData.slice(13, 16), ...armyVerbalNewCh6MCQs, ...armyVerbalNewCh6Batch2MCQs] },
  { id: "army-verbal-7", name: "Logical Reasoning", description: "Time/Days, Age, Math, Speed problems", icon: "🧠",
    mcqs: [...armyVerbalExperienceMCQsData.slice(6, 10), ...armyVerbalNewCh7TimeMCQs, ...armyVerbalNewCh7AgeMCQs, ...armyVerbalNewCh7MathMCQs, ...armyVerbalNewCh7SpeedMCQs, ...armyVerbalNewCh7ProfitMCQs, ...armyVerbalNewCh7SpeedBatch2MCQs] },
  { id: "army-verbal-8", name: "Blood Relations", description: "Family relationship-based problems", icon: "👨‍👩‍👧‍👦",
    mcqs: [armyVerbalExperienceMCQsData[16], ...armyVerbalNewCh8MCQs, ...armyVerbalNewCh8Batch2MCQs] },
  { id: "army-verbal-9", name: "Direction Sense", description: "Navigation and direction-based problems", icon: "🧭",
    mcqs: [armyVerbalExperienceMCQsData[10], ...armyVerbalCh9MCQs, ...armyVerbalNewCh9MCQs, ...armyVerbalNewCh9Batch2MCQs] },
  { id: "army-verbal-10", name: "General Knowledge (Intelligence)", description: "GK-based intelligence & ranking", icon: "🌐",
    mcqs: [...armyVerbalExperienceMCQsData.slice(17, 20), ...armyVerbalNewCh10MCQs, ...armyVerbalNewCh10Batch2MCQs] }
];

export const armyVerbalExperienceMCQs: MCQ[] = armyVerbalExperienceMCQsData;

// ============= INTELLIGENCE - NON-VERBAL =============
// Map chapter IDs to question ranges for NonVerbalQuiz rendering
export const armyNvQuestionRanges: Record<string, { start: number; end: number }> = {
  "army-nv-1": { start: 1, end: 7 },
  "army-nv-2": { start: 8, end: 14 },
  "army-nv-3": { start: 15, end: 20 },
  "army-nv-4": { start: 21, end: 26 },
  "army-nv-5": { start: 27, end: 32 },
  "army-nv-6": { start: 33, end: 38 },
  "army-nv-7": { start: 39, end: 44 },
  "army-nv-8": { start: 45, end: 50 },
  "army-nv-9": { start: 51, end: 55 },
  "army-nv-10": { start: 56, end: 60 },
  "army-nv-11": { start: 61, end: 65 },
  "army-nv-12": { start: 66, end: 70 },
  "army-nv-13": { start: 71, end: 75 },
  "army-nv-14": { start: 76, end: 80 },
};

export const armyNonVerbalChapters: Chapter[] = [
  { id: "army-nv-1", name: "Pattern Recognition", description: "Identify patterns in visual sequences (Q1-Q7)", icon: "🔲", mcqs: allNonVerbalMCQs.slice(0, 7) },
  { id: "army-nv-2", name: "Figure Series", description: "Complete the visual sequence (Q8-Q14)", icon: "🔳", mcqs: allNonVerbalMCQs.slice(7, 14) },
  { id: "army-nv-3", name: "Mirror Images", description: "Identify mirror reflections of figures (Q15-Q20)", icon: "🪞", mcqs: allNonVerbalMCQs.slice(14, 20) },
  { id: "army-nv-4", name: "Paper Folding & Cutting", description: "Predict results of paper operations (Q21-Q26)", icon: "📄", mcqs: allNonVerbalMCQs.slice(20, 26) },
  { id: "army-nv-5", name: "Figure Analogies", description: "Visual relationship-based reasoning (Q27-Q32)", icon: "🔀", mcqs: allNonVerbalMCQs.slice(26, 32) },
  { id: "army-nv-6", name: "Embedded Figures", description: "Find hidden figures within complex shapes (Q33-Q38)", icon: "🔍", mcqs: allNonVerbalMCQs.slice(32, 38) },
  { id: "army-nv-7", name: "Shape Counting", description: "Count geometric shapes in figures (Q39-Q44)", icon: "📐", mcqs: allNonVerbalMCQs.slice(38, 44) },
  { id: "army-nv-8", name: "Cube & Dice Problems", description: "3D spatial reasoning with cubes (Q45-Q50)", icon: "🎲", mcqs: allNonVerbalMCQs.slice(44, 50) },
  { id: "army-nv-9", name: "Series Completion I", description: "Complete the series - lines & rotation (Q51-Q55)", icon: "🔄", mcqs: allNonVerbalMCQs.slice(50, 55) },
  { id: "army-nv-10", name: "Series Completion II", description: "Complete the series - shapes & fills (Q56-Q60)", icon: "🔁", mcqs: allNonVerbalMCQs.slice(55, 60) },
  { id: "army-nv-11", name: "Rotation & Direction", description: "Arrow/shape rotation patterns (Q61-Q65)", icon: "🧭", mcqs: allNonVerbalMCQs.slice(60, 65) },
  { id: "army-nv-12", name: "Complex Patterns", description: "Multi-element pattern sequences (Q66-Q70)", icon: "🧩", mcqs: allNonVerbalMCQs.slice(65, 70) },
  { id: "army-nv-13", name: "Shape Transformation", description: "Shapes changing form & complexity (Q71-Q75)", icon: "🔷", mcqs: allNonVerbalMCQs.slice(70, 75) },
  { id: "army-nv-14", name: "Mirror & Analogy", description: "Mirror images and visual analogies (Q76-Q80)", icon: "🪞", mcqs: allNonVerbalMCQs.slice(75, 80) },
];

export const armyNonVerbalExperienceMCQs: MCQ[] = allNonVerbalMCQs;

// ============= ENGLISH =============
export const armyEnglishChapters: Chapter[] = [
  { id: "army-eng-1", name: "Prepositions", description: "Correct usage of prepositions", icon: "📍",
    mcqs: armyEnglishExperienceMCQsData.slice(0, 6) },
  { id: "army-eng-2", name: "Synonyms", description: "Words with similar meanings", icon: "📝",
    mcqs: [...armyEnglishExperienceMCQsData.slice(6, 10), ...armyEngCh2MCQs] },
  { id: "army-eng-3", name: "Antonyms", description: "Words with opposite meanings", icon: "↔️",
    mcqs: [...armyEnglishExperienceMCQsData.slice(10, 14), ...armyEngCh3MCQs] },
  { id: "army-eng-4", name: "Active & Passive Voice", description: "Voice transformation exercises", icon: "🔄", mcqs: [] },
  { id: "army-eng-5", name: "Direct & Indirect Speech", description: "Narration changes", icon: "💬", mcqs: [] },
  { id: "army-eng-6", name: "Sentence Correction", description: "Error identification and correction", icon: "✏️", mcqs: [] },
  { id: "army-eng-7", name: "Tenses", description: "Past, present, future tense usage", icon: "⏰",
    mcqs: armyEnglishExperienceMCQsData.slice(14, 17) },
  { id: "army-eng-8", name: "Vocabulary & Idioms", description: "Common phrases and expressions", icon: "📚",
    mcqs: [...armyEnglishExperienceMCQsData.slice(17, 20), ...armyEngCh8MCQs] },
  { id: "army-eng-9", name: "Articles & Determiners", description: "Correct use of a, an, the", icon: "📖",
    mcqs: [...armyEnglishExperienceMCQsData.slice(20, 25), ...armyEngCh9MCQs] },
  { id: "army-eng-10", name: "Comprehension", description: "Reading comprehension passages", icon: "📰", mcqs: [] }
];

export const armyEnglishExperienceMCQs: MCQ[] = armyEnglishExperienceMCQsData;

// ============= MATHEMATICS =============
export const armyMathChapters: Chapter[] = [
  { id: "army-math-1", name: "Quadratic Equations", description: "Solutions and applications of quadratics", icon: "📊", mcqs: [] },
  { id: "army-math-2", name: "Matrices & Determinants", description: "Matrix operations and properties", icon: "🔢",
    mcqs: armyMathCh2MCQs },
  { id: "army-math-3", name: "Trigonometry", description: "Trigonometric identities and equations", icon: "📐",
    mcqs: [...armyMathExperienceMCQsData.slice(19, 21), ...armyMathCh3MCQs] },
  { id: "army-math-4", name: "Sequences & Series", description: "AP, GP, and summation formulas", icon: "🔗", mcqs: [] },
  { id: "army-math-5", name: "Permutations & Combinations", description: "Counting principles and probability", icon: "🎰",
    mcqs: [...armyMathExperienceMCQsData.slice(21, 23), ...armyMathCh5MCQs] },
  { id: "army-math-6", name: "Differentiation", description: "Derivatives and their applications", icon: "📈",
    mcqs: [armyMathExperienceMCQsData[17], ...armyMathCh6MCQs] },
  { id: "army-math-7", name: "Integration", description: "Indefinite and definite integrals", icon: "∫",
    mcqs: armyMathCh7MCQs },
  { id: "army-math-8", name: "Arithmetic & Number Systems", description: "Basic arithmetic and number theory", icon: "🔢",
    mcqs: [...armyMathExperienceMCQsData.slice(0, 9), ...armyMathExperienceMCQsData.slice(23, 30), ...armyMathCh8MCQs] },
  { id: "army-math-9", name: "Algebra", description: "Algebraic expressions and equations", icon: "➗",
    mcqs: [...armyMathExperienceMCQsData.slice(18, 19), ...armyMathCh9MCQs] },
  { id: "army-math-10", name: "Geometry & Mensuration", description: "Shapes, areas, volumes", icon: "📏",
    mcqs: [...armyMathExperienceMCQsData.slice(27, 28), ...armyMathCh10MCQs] }
];

export const armyMathExperienceMCQs: MCQ[] = armyMathExperienceMCQsData;

// ============= PAK STUDIES =============
export const armyPakStudiesChapters: Chapter[] = [
  { id: "army-ps-1", name: "Pakistan Movement", description: "Events leading to creation of Pakistan", icon: "🇵🇰",
    mcqs: armyPSCh1MCQs },
  { id: "army-ps-2", name: "Constitutional History", description: "Constitutions of 1956, 1962, 1973", icon: "📜",
    mcqs: armyPSCh2MCQs },
  { id: "army-ps-3", name: "Geography of Pakistan", description: "Rivers, mountains, provinces, cities", icon: "🗺️",
    mcqs: armyPSCh3MCQs },
  { id: "army-ps-4", name: "Important Personalities", description: "Leaders and founders of Pakistan", icon: "👤",
    mcqs: armyPSCh4MCQs },
  { id: "army-ps-5", name: "Wars & Defense", description: "1965, 1971 wars and defense history", icon: "⚔️",
    mcqs: armyPSCh5MCQs },
  { id: "army-ps-6", name: "Culture & Society", description: "Pakistani culture, languages, traditions", icon: "🎭", mcqs: [] },
  { id: "army-ps-7", name: "Economy & Resources", description: "Economic development and natural resources", icon: "💰", mcqs: [] },
  { id: "army-ps-8", name: "Firsts in Pakistan", description: "First President, PM, CJ, etc.", icon: "🥇",
    mcqs: armyPSCh8MCQs }
];

export const armyPakStudiesExperienceMCQs: MCQ[] = armyPakStudiesExperienceMCQsData;

// ============= ISLAMIAT =============
export const armyIslamiatChapters: Chapter[] = [
  { id: "army-isl-1", name: "Basic Beliefs (Aqaid)", description: "Tawheed, Risalat, Akhirat", icon: "☪️", mcqs: [] },
  { id: "army-isl-2", name: "Pillars of Islam", description: "Salah, Zakat, Sawm, Hajj, Shahada", icon: "🕌",
    mcqs: armyIslCh2MCQs },
  { id: "army-isl-3", name: "Life of Prophet Muhammad ﷺ", description: "Seerah and important events", icon: "📖",
    mcqs: armyIslCh3MCQs },
  { id: "army-isl-4", name: "Khulafa-e-Rashideen", description: "Four Rightly Guided Caliphs", icon: "👥",
    mcqs: armyIslCh4MCQs },
  { id: "army-isl-5", name: "Holy Quran", description: "Surahs, Ayahs, and Quranic knowledge", icon: "📗",
    mcqs: armyIslCh5MCQs },
  { id: "army-isl-6", name: "Hadith & Sunnah", description: "Famous Ahadith and their meanings", icon: "📚",
    mcqs: armyIslCh6MCQs },
  { id: "army-isl-7", name: "Islamic History", description: "Major events in Islamic civilization", icon: "🏛️",
    mcqs: armyIslCh7MCQs },
  { id: "army-isl-8", name: "Islamic Ethics & Morals", description: "Akhlaq, rights, and social values", icon: "⚖️", mcqs: [] }
];

export const armyIslamiatExperienceMCQs: MCQ[] = armyIslamiatExperienceMCQsData;

// ============= GENERAL KNOWLEDGE & CURRENT AFFAIRS =============
export const armyGKChapters: Chapter[] = [
  { id: "army-gk-1", name: "World Capitals & Countries", description: "Capitals, currencies, and flags", icon: "🌍",
    mcqs: armyGKCh1MCQs },
  { id: "army-gk-2", name: "Current Affairs Pakistan", description: "Recent events and developments", icon: "📰",
    mcqs: armyGKCh2MCQs },
  { id: "army-gk-3", name: "International Organizations", description: "UN, OIC, SAARC, NATO, etc.", icon: "🏢",
    mcqs: armyGKCh3MCQs },
  { id: "army-gk-4", name: "Science & Technology", description: "Inventions, discoveries, space", icon: "🔬",
    mcqs: armyGKCh4MCQs },
  { id: "army-gk-5", name: "Sports & Awards", description: "World records, Olympics, Nobel prizes", icon: "🏆",
    mcqs: armyGKCh5MCQs },
  { id: "army-gk-6", name: "Geography (World)", description: "Rivers, mountains, deserts, oceans", icon: "🗺️",
    mcqs: armyGKCh6MCQs },
  { id: "army-gk-7", name: "Pakistan Armed Forces", description: "Army, Navy, Air Force knowledge", icon: "🎖️",
    mcqs: armyGKCh7MCQs },
  { id: "army-gk-8", name: "Books & Authors", description: "Famous books, writers, and literature", icon: "📚",
    mcqs: armyGKCh8MCQs }
];

export const armyGKExperienceMCQs: MCQ[] = armyGKExperienceMCQsData;

// ============= PHYSICS (TCC - FSc Level) =============
export const armyPhysicsChapters: Chapter[] = [
  { id: "army-phy-1", name: "Measurements", description: "Units, dimensions, and physical quantities", icon: "📏", mcqs: [] },
  { id: "army-phy-2", name: "Vectors & Equilibrium", description: "Vector operations and equilibrium conditions", icon: "➡️", mcqs: [] },
  { id: "army-phy-3", name: "Motion & Force", description: "Newton's laws and kinematics", icon: "🚀", mcqs: [] },
  { id: "army-phy-4", name: "Work, Energy & Power", description: "Energy conservation and power", icon: "⚡", mcqs: [] },
  { id: "army-phy-5", name: "Waves & Oscillations", description: "SHM, waves, and sound", icon: "🌊", mcqs: [] },
  { id: "army-phy-6", name: "Heat & Thermodynamics", description: "Temperature, heat transfer, gas laws", icon: "🌡️", mcqs: [] },
  { id: "army-phy-7", name: "Electrostatics", description: "Electric charge, field, and potential", icon: "🔋", mcqs: [] },
  { id: "army-phy-8", name: "Current Electricity", description: "Ohm's law, circuits, and resistance", icon: "💡", mcqs: [] }
];

export const armyPhysicsExperienceMCQs: MCQ[] = [];
