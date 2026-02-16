// Pakistan Army - PMA Long Course, TCC, DSSC, IC, LCC Data
import { Chapter, MCQ } from "@/types";
import { armyVerbalExperienceMCQsData } from "@/data/pakArmy/armyVerbalExperienceMCQs";
import { armyEnglishExperienceMCQsData } from "@/data/pakArmy/armyEnglishExperienceMCQs";
import { armyMathExperienceMCQsData } from "@/data/pakArmy/armyMathExperienceMCQs";
import { armyPakStudiesExperienceMCQsData } from "@/data/pakArmy/armyPakStudiesExperienceMCQs";
import { armyIslamiatExperienceMCQsData } from "@/data/pakArmy/armyIslamiatExperienceMCQs";
import { armyGKExperienceMCQsData } from "@/data/pakArmy/armyGKExperienceMCQs";

// ============= INTELLIGENCE - VERBAL =============
export const armyVerbalChapters: Chapter[] = [
  {
    id: "army-verbal-1",
    name: "Verbal Analogies",
    description: "Word relationships and analogies",
    icon: "💭",
    mcqs: []
  },
  {
    id: "army-verbal-2",
    name: "Synonyms & Antonyms",
    description: "Words with similar and opposite meanings",
    icon: "🔤",
    mcqs: []
  },
  {
    id: "army-verbal-3",
    name: "Word Problems",
    description: "Logical word-based reasoning",
    icon: "📝",
    mcqs: []
  },
  {
    id: "army-verbal-4",
    name: "Sentence Completion",
    description: "Fill in the blanks with correct words",
    icon: "✍️",
    mcqs: []
  },
  {
    id: "army-verbal-5",
    name: "Verbal Series",
    description: "Letter and word sequences",
    icon: "🔡",
    mcqs: []
  },
  {
    id: "army-verbal-6",
    name: "Coding-Decoding",
    description: "Pattern recognition in letter/number codes",
    icon: "🔐",
    mcqs: []
  },
  {
    id: "army-verbal-7",
    name: "Logical Reasoning",
    description: "Deductive and inductive reasoning",
    icon: "🧠",
    mcqs: []
  },
  {
    id: "army-verbal-8",
    name: "Blood Relations",
    description: "Family relationship-based problems",
    icon: "👨‍👩‍👧‍👦",
    mcqs: []
  },
  {
    id: "army-verbal-9",
    name: "Direction Sense",
    description: "Navigation and direction-based problems",
    icon: "🧭",
    mcqs: []
  },
  {
    id: "army-verbal-10",
    name: "General Knowledge (Intelligence)",
    description: "GK-based intelligence questions",
    icon: "🌐",
    mcqs: []
  }
];

export const armyVerbalExperienceMCQs: MCQ[] = armyVerbalExperienceMCQsData;

// ============= INTELLIGENCE - NON-VERBAL =============
export const armyNonVerbalChapters: Chapter[] = [
  {
    id: "army-nv-1",
    name: "Pattern Recognition",
    description: "Identify patterns in visual sequences",
    icon: "🔲",
    mcqs: []
  },
  {
    id: "army-nv-2",
    name: "Figure Series",
    description: "Complete the visual sequence",
    icon: "🔳",
    mcqs: []
  },
  {
    id: "army-nv-3",
    name: "Mirror Images",
    description: "Identify mirror reflections of figures",
    icon: "🪞",
    mcqs: []
  },
  {
    id: "army-nv-4",
    name: "Paper Folding & Cutting",
    description: "Predict results of paper operations",
    icon: "📄",
    mcqs: []
  },
  {
    id: "army-nv-5",
    name: "Figure Analogies",
    description: "Visual relationship-based reasoning",
    icon: "🔀",
    mcqs: []
  },
  {
    id: "army-nv-6",
    name: "Embedded Figures",
    description: "Find hidden figures within complex shapes",
    icon: "🔍",
    mcqs: []
  },
  {
    id: "army-nv-7",
    name: "Shape Counting",
    description: "Count geometric shapes in figures",
    icon: "📐",
    mcqs: []
  },
  {
    id: "army-nv-8",
    name: "Cube & Dice Problems",
    description: "3D spatial reasoning with cubes",
    icon: "🎲",
    mcqs: []
  }
];

export const armyNonVerbalExperienceMCQs: MCQ[] = [];

// ============= ENGLISH =============
export const armyEnglishChapters: Chapter[] = [
  {
    id: "army-eng-1",
    name: "Prepositions",
    description: "Correct usage of prepositions",
    icon: "📍",
    mcqs: []
  },
  {
    id: "army-eng-2",
    name: "Synonyms",
    description: "Words with similar meanings",
    icon: "📝",
    mcqs: []
  },
  {
    id: "army-eng-3",
    name: "Antonyms",
    description: "Words with opposite meanings",
    icon: "↔️",
    mcqs: []
  },
  {
    id: "army-eng-4",
    name: "Active & Passive Voice",
    description: "Voice transformation exercises",
    icon: "🔄",
    mcqs: []
  },
  {
    id: "army-eng-5",
    name: "Direct & Indirect Speech",
    description: "Narration changes",
    icon: "💬",
    mcqs: []
  },
  {
    id: "army-eng-6",
    name: "Sentence Correction",
    description: "Error identification and correction",
    icon: "✏️",
    mcqs: []
  },
  {
    id: "army-eng-7",
    name: "Tenses",
    description: "Past, present, future tense usage",
    icon: "⏰",
    mcqs: []
  },
  {
    id: "army-eng-8",
    name: "Vocabulary & Idioms",
    description: "Common phrases and expressions",
    icon: "📚",
    mcqs: []
  },
  {
    id: "army-eng-9",
    name: "Articles & Determiners",
    description: "Correct use of a, an, the",
    icon: "📖",
    mcqs: []
  },
  {
    id: "army-eng-10",
    name: "Comprehension",
    description: "Reading comprehension passages",
    icon: "📰",
    mcqs: []
  }
];

export const armyEnglishExperienceMCQs: MCQ[] = armyEnglishExperienceMCQsData;

// ============= MATHEMATICS =============
export const armyMathChapters: Chapter[] = [
  {
    id: "army-math-1",
    name: "Quadratic Equations",
    description: "Solutions and applications of quadratics",
    icon: "📊",
    mcqs: []
  },
  {
    id: "army-math-2",
    name: "Matrices & Determinants",
    description: "Matrix operations and properties",
    icon: "🔢",
    mcqs: []
  },
  {
    id: "army-math-3",
    name: "Trigonometry",
    description: "Trigonometric identities and equations",
    icon: "📐",
    mcqs: []
  },
  {
    id: "army-math-4",
    name: "Sequences & Series",
    description: "AP, GP, and summation formulas",
    icon: "🔗",
    mcqs: []
  },
  {
    id: "army-math-5",
    name: "Permutations & Combinations",
    description: "Counting principles and probability",
    icon: "🎰",
    mcqs: []
  },
  {
    id: "army-math-6",
    name: "Differentiation",
    description: "Derivatives and their applications",
    icon: "📈",
    mcqs: []
  },
  {
    id: "army-math-7",
    name: "Integration",
    description: "Indefinite and definite integrals",
    icon: "∫",
    mcqs: []
  },
  {
    id: "army-math-8",
    name: "Arithmetic & Number Systems",
    description: "Basic arithmetic and number theory",
    icon: "🔢",
    mcqs: []
  },
  {
    id: "army-math-9",
    name: "Algebra",
    description: "Algebraic expressions and equations",
    icon: "➗",
    mcqs: []
  },
  {
    id: "army-math-10",
    name: "Geometry & Mensuration",
    description: "Shapes, areas, volumes",
    icon: "📏",
    mcqs: []
  }
];

export const armyMathExperienceMCQs: MCQ[] = armyMathExperienceMCQsData;

// ============= PAK STUDIES =============
export const armyPakStudiesChapters: Chapter[] = [
  {
    id: "army-ps-1",
    name: "Pakistan Movement",
    description: "Events leading to creation of Pakistan",
    icon: "🇵🇰",
    mcqs: []
  },
  {
    id: "army-ps-2",
    name: "Constitutional History",
    description: "Constitutions of 1956, 1962, 1973",
    icon: "📜",
    mcqs: []
  },
  {
    id: "army-ps-3",
    name: "Geography of Pakistan",
    description: "Rivers, mountains, provinces, cities",
    icon: "🗺️",
    mcqs: []
  },
  {
    id: "army-ps-4",
    name: "Important Personalities",
    description: "Leaders and founders of Pakistan",
    icon: "👤",
    mcqs: []
  },
  {
    id: "army-ps-5",
    name: "Wars & Defense",
    description: "1965, 1971 wars and defense history",
    icon: "⚔️",
    mcqs: []
  },
  {
    id: "army-ps-6",
    name: "Culture & Society",
    description: "Pakistani culture, languages, traditions",
    icon: "🎭",
    mcqs: []
  },
  {
    id: "army-ps-7",
    name: "Economy & Resources",
    description: "Economic development and natural resources",
    icon: "💰",
    mcqs: []
  },
  {
    id: "army-ps-8",
    name: "Firsts in Pakistan",
    description: "First President, PM, CJ, etc.",
    icon: "🥇",
    mcqs: []
  }
];

export const armyPakStudiesExperienceMCQs: MCQ[] = armyPakStudiesExperienceMCQsData;

// ============= ISLAMIAT =============
export const armyIslamiatChapters: Chapter[] = [
  {
    id: "army-isl-1",
    name: "Basic Beliefs (Aqaid)",
    description: "Tawheed, Risalat, Akhirat",
    icon: "☪️",
    mcqs: []
  },
  {
    id: "army-isl-2",
    name: "Pillars of Islam",
    description: "Salah, Zakat, Sawm, Hajj, Shahada",
    icon: "🕌",
    mcqs: []
  },
  {
    id: "army-isl-3",
    name: "Life of Prophet Muhammad ﷺ",
    description: "Seerah and important events",
    icon: "📖",
    mcqs: []
  },
  {
    id: "army-isl-4",
    name: "Khulafa-e-Rashideen",
    description: "Four Rightly Guided Caliphs",
    icon: "👥",
    mcqs: []
  },
  {
    id: "army-isl-5",
    name: "Holy Quran",
    description: "Surahs, Ayahs, and Quranic knowledge",
    icon: "📗",
    mcqs: []
  },
  {
    id: "army-isl-6",
    name: "Hadith & Sunnah",
    description: "Famous Ahadith and their meanings",
    icon: "📚",
    mcqs: []
  },
  {
    id: "army-isl-7",
    name: "Islamic History",
    description: "Major events in Islamic civilization",
    icon: "🏛️",
    mcqs: []
  },
  {
    id: "army-isl-8",
    name: "Islamic Ethics & Morals",
    description: "Akhlaq, rights, and social values",
    icon: "⚖️",
    mcqs: []
  }
];

export const armyIslamiatExperienceMCQs: MCQ[] = armyIslamiatExperienceMCQsData;

// ============= GENERAL KNOWLEDGE & CURRENT AFFAIRS =============
export const armyGKChapters: Chapter[] = [
  {
    id: "army-gk-1",
    name: "World Capitals & Countries",
    description: "Capitals, currencies, and flags",
    icon: "🌍",
    mcqs: []
  },
  {
    id: "army-gk-2",
    name: "Current Affairs Pakistan",
    description: "Recent events and developments",
    icon: "📰",
    mcqs: []
  },
  {
    id: "army-gk-3",
    name: "International Organizations",
    description: "UN, OIC, SAARC, NATO, etc.",
    icon: "🏢",
    mcqs: []
  },
  {
    id: "army-gk-4",
    name: "Science & Technology",
    description: "Inventions, discoveries, space",
    icon: "🔬",
    mcqs: []
  },
  {
    id: "army-gk-5",
    name: "Sports & Awards",
    description: "World records, Olympics, Nobel prizes",
    icon: "🏆",
    mcqs: []
  },
  {
    id: "army-gk-6",
    name: "Geography (World)",
    description: "Rivers, mountains, deserts, oceans",
    icon: "🗺️",
    mcqs: []
  },
  {
    id: "army-gk-7",
    name: "Pakistan Armed Forces",
    description: "Army, Navy, Air Force knowledge",
    icon: "🎖️",
    mcqs: []
  },
  {
    id: "army-gk-8",
    name: "Books & Authors",
    description: "Famous books, writers, and literature",
    icon: "📚",
    mcqs: []
  }
];

export const armyGKExperienceMCQs: MCQ[] = armyGKExperienceMCQsData;

// ============= PHYSICS (TCC - FSc Level) =============
export const armyPhysicsChapters: Chapter[] = [
  {
    id: "army-phy-1",
    name: "Measurements",
    description: "Units, dimensions, and physical quantities",
    icon: "📏",
    mcqs: []
  },
  {
    id: "army-phy-2",
    name: "Vectors & Equilibrium",
    description: "Vector operations and equilibrium conditions",
    icon: "➡️",
    mcqs: []
  },
  {
    id: "army-phy-3",
    name: "Motion & Force",
    description: "Newton's laws, kinematics, dynamics",
    icon: "⚙️",
    mcqs: []
  },
  {
    id: "army-phy-4",
    name: "Work, Energy & Power",
    description: "Conservation laws and applications",
    icon: "⚡",
    mcqs: []
  },
  {
    id: "army-phy-5",
    name: "Circular Motion & Gravitation",
    description: "Orbital mechanics and gravity",
    icon: "🌍",
    mcqs: []
  },
  {
    id: "army-phy-6",
    name: "Oscillations & Waves",
    description: "SHM, wave properties, sound",
    icon: "🌊",
    mcqs: []
  },
  {
    id: "army-phy-7",
    name: "Thermodynamics",
    description: "Heat, temperature, gas laws",
    icon: "🌡️",
    mcqs: []
  },
  {
    id: "army-phy-8",
    name: "Optics",
    description: "Light, lenses, mirrors, interference",
    icon: "🔦",
    mcqs: []
  },
  {
    id: "army-phy-9",
    name: "Electrostatics",
    description: "Coulomb's law, electric fields, capacitors",
    icon: "⚡",
    mcqs: []
  },
  {
    id: "army-phy-10",
    name: "Current Electricity",
    description: "Circuits, Ohm's law, Kirchhoff's laws",
    icon: "🔌",
    mcqs: []
  },
  {
    id: "army-phy-11",
    name: "Electromagnetism",
    description: "Magnetic fields, electromagnetic induction",
    icon: "🧲",
    mcqs: []
  },
  {
    id: "army-phy-12",
    name: "Nuclear Physics",
    description: "Radioactivity, nuclear reactions",
    icon: "☢️",
    mcqs: []
  }
];

export const armyPhysicsExperienceMCQs: MCQ[] = [];

// ============= DISTRIBUTE ALL MCQs INTO CHAPTERS =============

// --- VERBAL INTELLIGENCE ---
// Verbal Analogies
armyVerbalChapters[0].mcqs = [armyVerbalExperienceMCQsData[4], armyVerbalExperienceMCQsData[5]];
// Word Problems (Odd One Out)
armyVerbalChapters[2].mcqs = armyVerbalExperienceMCQsData.slice(0, 4);
// Verbal Series
armyVerbalChapters[4].mcqs = [armyVerbalExperienceMCQsData[11], armyVerbalExperienceMCQsData[12]];
// Coding-Decoding
armyVerbalChapters[5].mcqs = [armyVerbalExperienceMCQsData[13], armyVerbalExperienceMCQsData[14], armyVerbalExperienceMCQsData[15]];
// Logical Reasoning
armyVerbalChapters[6].mcqs = [armyVerbalExperienceMCQsData[6], armyVerbalExperienceMCQsData[7], armyVerbalExperienceMCQsData[8], armyVerbalExperienceMCQsData[9]];
// Blood Relations
armyVerbalChapters[7].mcqs = [armyVerbalExperienceMCQsData[16]];
// Direction Sense
armyVerbalChapters[8].mcqs = [armyVerbalExperienceMCQsData[10]];
// GK (Intelligence)
armyVerbalChapters[9].mcqs = [armyVerbalExperienceMCQsData[17], armyVerbalExperienceMCQsData[18], armyVerbalExperienceMCQsData[19]];

// --- ENGLISH ---
// Prepositions
armyEnglishChapters[0].mcqs = armyEnglishExperienceMCQsData.slice(0, 6);
// Synonyms
armyEnglishChapters[1].mcqs = armyEnglishExperienceMCQsData.slice(6, 10);
// Antonyms
armyEnglishChapters[2].mcqs = armyEnglishExperienceMCQsData.slice(10, 14);
// Tenses
armyEnglishChapters[6].mcqs = [armyEnglishExperienceMCQsData[14], armyEnglishExperienceMCQsData[15], armyEnglishExperienceMCQsData[16]];
// Vocabulary & Idioms
armyEnglishChapters[7].mcqs = [armyEnglishExperienceMCQsData[17], armyEnglishExperienceMCQsData[18], armyEnglishExperienceMCQsData[19]];
// Articles & Determiners
armyEnglishChapters[8].mcqs = armyEnglishExperienceMCQsData.slice(20, 25);

// --- MATHEMATICS ---
// Trigonometry
armyMathChapters[2].mcqs = [armyMathExperienceMCQsData[19], armyMathExperienceMCQsData[20]];
// Permutations & Combinations
armyMathChapters[4].mcqs = [armyMathExperienceMCQsData[21], armyMathExperienceMCQsData[22]];
// Differentiation
armyMathChapters[5].mcqs = [armyMathExperienceMCQsData[17]];
// Arithmetic & Number Systems (percentages, fractions, word problems, day problems)
armyMathChapters[7].mcqs = [
  ...armyMathExperienceMCQsData.slice(0, 9),
  ...armyMathExperienceMCQsData.slice(9, 17),
  armyMathExperienceMCQsData[24],
  armyMathExperienceMCQsData[29]
];
// Algebra (cube root, empty set, roots of unity)
armyMathChapters[8].mcqs = [armyMathExperienceMCQsData[18], armyMathExperienceMCQsData[23], armyMathExperienceMCQsData[25]];
// Geometry & Mensuration (vectors, quadrants)
armyMathChapters[9].mcqs = [armyMathExperienceMCQsData[26], armyMathExperienceMCQsData[27], armyMathExperienceMCQsData[28]];

// --- PAK STUDIES ---
// Pakistan Movement
armyPakStudiesChapters[0].mcqs = [
  armyPakStudiesExperienceMCQsData[1], armyPakStudiesExperienceMCQsData[4],
  armyPakStudiesExperienceMCQsData[6], armyPakStudiesExperienceMCQsData[10],
  armyPakStudiesExperienceMCQsData[13], armyPakStudiesExperienceMCQsData[17],
  armyPakStudiesExperienceMCQsData[19], armyPakStudiesExperienceMCQsData[20]
];
// Constitutional History
armyPakStudiesChapters[1].mcqs = [
  armyPakStudiesExperienceMCQsData[9], armyPakStudiesExperienceMCQsData[14],
  armyPakStudiesExperienceMCQsData[22], armyPakStudiesExperienceMCQsData[26],
  armyPakStudiesExperienceMCQsData[27]
];
// Geography of Pakistan
armyPakStudiesChapters[2].mcqs = [
  armyPakStudiesExperienceMCQsData[2], armyPakStudiesExperienceMCQsData[23],
  armyPakStudiesExperienceMCQsData[24], armyPakStudiesExperienceMCQsData[25],
  armyPakStudiesExperienceMCQsData[28], armyPakStudiesExperienceMCQsData[29]
];
// Important Personalities
armyPakStudiesChapters[3].mcqs = [
  armyPakStudiesExperienceMCQsData[0], armyPakStudiesExperienceMCQsData[3],
  armyPakStudiesExperienceMCQsData[5], armyPakStudiesExperienceMCQsData[11],
  armyPakStudiesExperienceMCQsData[12], armyPakStudiesExperienceMCQsData[15],
  armyPakStudiesExperienceMCQsData[16], armyPakStudiesExperienceMCQsData[18],
  armyPakStudiesExperienceMCQsData[21]
];
// Wars & Defense
armyPakStudiesChapters[4].mcqs = [armyPakStudiesExperienceMCQsData[7]];
// Culture & Society
armyPakStudiesChapters[5].mcqs = [armyPakStudiesExperienceMCQsData[8]];
// Firsts in Pakistan
armyPakStudiesChapters[7].mcqs = [
  armyPakStudiesExperienceMCQsData[0], armyPakStudiesExperienceMCQsData[12],
  armyPakStudiesExperienceMCQsData[18], armyPakStudiesExperienceMCQsData[21]
];

// --- ISLAMIAT ---
// Basic Beliefs (Aqaid) - Prophet titles
armyIslamiatChapters[0].mcqs = [armyIslamiatExperienceMCQsData[3], armyIslamiatExperienceMCQsData[26]];
// Pillars of Islam
armyIslamiatChapters[1].mcqs = [armyIslamiatExperienceMCQsData[16], armyIslamiatExperienceMCQsData[18]];
// Life of Prophet Muhammad ﷺ
armyIslamiatChapters[2].mcqs = [
  armyIslamiatExperienceMCQsData[2], armyIslamiatExperienceMCQsData[4],
  armyIslamiatExperienceMCQsData[6], armyIslamiatExperienceMCQsData[21],
  armyIslamiatExperienceMCQsData[29]
];
// Khulafa-e-Rashideen
armyIslamiatChapters[3].mcqs = [
  armyIslamiatExperienceMCQsData[23], armyIslamiatExperienceMCQsData[24],
  armyIslamiatExperienceMCQsData[28]
];
// Holy Quran
armyIslamiatChapters[4].mcqs = [
  armyIslamiatExperienceMCQsData[9], armyIslamiatExperienceMCQsData[10],
  armyIslamiatExperienceMCQsData[15], armyIslamiatExperienceMCQsData[20]
];
// Islamic History (Battles, events, dates)
armyIslamiatChapters[6].mcqs = [
  armyIslamiatExperienceMCQsData[0], armyIslamiatExperienceMCQsData[1],
  armyIslamiatExperienceMCQsData[5], armyIslamiatExperienceMCQsData[7],
  armyIslamiatExperienceMCQsData[8], armyIslamiatExperienceMCQsData[11],
  armyIslamiatExperienceMCQsData[12], armyIslamiatExperienceMCQsData[13],
  armyIslamiatExperienceMCQsData[14], armyIslamiatExperienceMCQsData[17],
  armyIslamiatExperienceMCQsData[22], armyIslamiatExperienceMCQsData[25],
  armyIslamiatExperienceMCQsData[27]
];

// --- GENERAL KNOWLEDGE ---
// World Capitals & Countries (capitals + currencies)
armyGKChapters[0].mcqs = [
  armyGKExperienceMCQsData[0], armyGKExperienceMCQsData[4],
  armyGKExperienceMCQsData[13], armyGKExperienceMCQsData[14],
  armyGKExperienceMCQsData[16], armyGKExperienceMCQsData[22],
  armyGKExperienceMCQsData[23], armyGKExperienceMCQsData[24],
  armyGKExperienceMCQsData[37]
];
// Current Affairs Pakistan
armyGKChapters[1].mcqs = [
  armyGKExperienceMCQsData[1], armyGKExperienceMCQsData[9],
  armyGKExperienceMCQsData[31], armyGKExperienceMCQsData[36],
  armyGKExperienceMCQsData[40], armyGKExperienceMCQsData[41],
  armyGKExperienceMCQsData[42], armyGKExperienceMCQsData[43],
  armyGKExperienceMCQsData[44]
];
// International Organizations
armyGKChapters[2].mcqs = [
  armyGKExperienceMCQsData[12], armyGKExperienceMCQsData[19],
  armyGKExperienceMCQsData[21], armyGKExperienceMCQsData[25],
  armyGKExperienceMCQsData[26], armyGKExperienceMCQsData[35]
];
// Science & Technology
armyGKChapters[3].mcqs = [
  armyGKExperienceMCQsData[2], armyGKExperienceMCQsData[5],
  armyGKExperienceMCQsData[6], armyGKExperienceMCQsData[10]
];
// Sports & Awards
armyGKChapters[4].mcqs = [armyGKExperienceMCQsData[15], armyGKExperienceMCQsData[33]];
// Geography (World)
armyGKChapters[5].mcqs = [
  armyGKExperienceMCQsData[3], armyGKExperienceMCQsData[7],
  armyGKExperienceMCQsData[8], armyGKExperienceMCQsData[17],
  armyGKExperienceMCQsData[20], armyGKExperienceMCQsData[27],
  armyGKExperienceMCQsData[28], armyGKExperienceMCQsData[30],
  armyGKExperienceMCQsData[32], armyGKExperienceMCQsData[34],
  armyGKExperienceMCQsData[38], armyGKExperienceMCQsData[39]
];
// Pakistan Armed Forces
armyGKChapters[6].mcqs = [armyGKExperienceMCQsData[11], armyGKExperienceMCQsData[29]];
