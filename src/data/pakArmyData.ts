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
