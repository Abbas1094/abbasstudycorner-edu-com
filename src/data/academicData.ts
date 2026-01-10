// Academic data for Class 9-12
import { AcademicClass } from "@/types";

export const academicClasses: AcademicClass[] = [
  {
    id: "class-9",
    name: "Class 9",
    subjects: [
      {
        id: "physics-9",
        name: "Physics",
        icon: "⚛️",
        pairingScheme: "https://drive.google.com/file/d/1jgzF4PWOa5Zx4_jYn_ntvHjcMCp3FeRu/view?usp=drivesdk",
        chapters: [
          { id: "ch1", name: "Physical Quantities and Measurement" },
          { id: "ch2", name: "Kinematics" },
          { id: "ch3", name: "Dynamics" },
          { id: "ch4", name: "Turning Effect of Forces" },
          { id: "ch5", name: "Gravitation" },
          { id: "ch6", name: "Work and Energy" },
          { id: "ch7", name: "Properties of Matter" },
          { id: "ch8", name: "Thermal Properties of Matter" },
          { id: "ch9", name: "Transfer of Heat" },
        ],
        resources: [
          { id: "physics-9-book", name: "Physics 9 Textbook", type: "book", driveLink: "https://drive.google.com/file/d/1HikIwpSoNpKouPE0umIuNvl-iXY4xulm/view?usp=drivesdk" }
        ]
      },
      {
        id: "chemistry-9",
        name: "Chemistry",
        icon: "🧪",
        pairingScheme: "https://drive.google.com/file/d/1UU-Ro5Zuxhp0sStmblM5okIHiZcxWwPN/view?usp=drivesdk",
        chapters: [
          { id: "ch1", name: "Fundamentals of Chemistry" },
          { id: "ch2", name: "Structure of Atoms" },
          { id: "ch3", name: "Periodic Table and Periodicity" },
          { id: "ch4", name: "Structure of Molecules" },
          { id: "ch5", name: "Physical States of Matter" },
          { id: "ch6", name: "Solutions" },
          { id: "ch7", name: "Electrochemistry" },
          { id: "ch8", name: "Chemical Reactivity" },
        ],
        resources: [
          { id: "chemistry-9-book", name: "Chemistry 9 Textbook", type: "book", driveLink: "https://drive.google.com/file/d/1HdVdPMI99vKpT1XoDtoxOwd6Kh3Upt6d/view?usp=drivesdk" }
        ]
      },
      {
        id: "math-9",
        name: "Mathematics",
        icon: "📐",
        pairingScheme: "https://drive.google.com/file/d/1LwXgUE6AXNisB7uvcrLsoQeDHah0HAX6/view?usp=drivesdk",
        chapters: [
          { id: "ch1", name: "Matrices and Determinants" },
          { id: "ch2", name: "Real and Complex Numbers" },
          { id: "ch3", name: "Logarithms" },
          { id: "ch4", name: "Algebraic Expressions and Formulas" },
          { id: "ch5", name: "Factorization" },
          { id: "ch6", name: "Algebraic Manipulation" },
          { id: "ch7", name: "Linear Equations and Inequalities" },
          { id: "ch8", name: "Linear Graphs and Their Applications" },
          { id: "ch9", name: "Introduction to Coordinate Geometry" },
          { id: "ch10", name: "Congruent Triangles" },
          { id: "ch11", name: "Parallelograms and Triangles" },
          { id: "ch12", name: "Line Bisectors and Angle Bisectors" },
          { id: "ch13", name: "Sides and Angles of a Triangle" },
          { id: "ch14", name: "Ratio and Proportion" },
          { id: "ch15", name: "Pythagoras Theorem" },
          { id: "ch16", name: "Theorems Related with Area" },
        ],
        resources: [
          { id: "math-9-book", name: "Mathematics 9 Textbook", type: "book", driveLink: "https://drive.google.com/file/d/1O3mnyON3YsC1geOK41idQ1MOwOKIlsB6/view?usp=drivesdk" }
        ]
      },
      {
        id: "biology-9",
        name: "Biology",
        icon: "🧬",
        chapters: [
          { id: "ch1", name: "Introduction to Biology" },
          { id: "ch2", name: "Solving a Biological Problem" },
          { id: "ch3", name: "Biodiversity" },
          { id: "ch4", name: "Cells and Tissues" },
          { id: "ch5", name: "Cell Cycle" },
          { id: "ch6", name: "Enzymes" },
          { id: "ch7", name: "Bioenergetics" },
          { id: "ch8", name: "Nutrition" },
          { id: "ch9", name: "Transport" },
        ]
      },
      {
        id: "english-9",
        name: "English",
        icon: "📚",
        chapters: [
          { id: "ch1", name: "The Saviour of Mankind" },
          { id: "ch2", name: "Patriotism" },
          { id: "ch3", name: "Media and its Impact" },
          { id: "ch4", name: "Hazrat Asma" },
          { id: "ch5", name: "Daffodils" },
          { id: "ch6", name: "The Quaid's Vision" },
          { id: "ch7", name: "Sultan Ahmad Mosque" },
          { id: "ch8", name: "Stopping by Woods" },
          { id: "ch9", name: "All is Not Lost" },
          { id: "ch10", name: "Drug Addiction" },
          { id: "ch11", name: "Noise in the Environment" },
          { id: "ch12", name: "Three Days to See" },
        ]
      },
      {
        id: "pak-studies-9",
        name: "Pakistan Studies",
        icon: "🇵🇰",
        chapters: [
          { id: "ch1", name: "Ideology of Pakistan" },
          { id: "ch2", name: "Making of Pakistan" },
          { id: "ch3", name: "Constitutional Development" },
        ]
      },
      {
        id: "islamiat-9",
        name: "Islamiat",
        icon: "☪️",
        chapters: [
          { id: "ch1", name: "Quran and Hadith" },
          { id: "ch2", name: "Iman and Basic Articles" },
          { id: "ch3", name: "Life of Prophet (PBUH)" },
        ]
      },
    ]
  },
  {
    id: "class-10",
    name: "Class 10",
    subjects: [
      {
        id: "physics-10",
        name: "Physics",
        icon: "⚛️",
        pairingScheme: "https://drive.google.com/file/d/1I5w_bn0M_M41O-AoGkNqRWiDo0Ad7QOy/view?usp=drivesdk",
        chapters: [
          { id: "ch10", name: "Simple Harmonic Motion and Waves" },
          { id: "ch11", name: "Sound" },
          { id: "ch12", name: "Geometrical Optics" },
          { id: "ch13", name: "Electrostatics" },
          { id: "ch14", name: "Current Electricity" },
          { id: "ch15", name: "Electromagnetism" },
          { id: "ch16", name: "Basic Electronics" },
          { id: "ch17", name: "Information and Communication Technology" },
          { id: "ch18", name: "Atomic and Nuclear Physics" },
        ],
        resources: [
          { id: "physics-10-book", name: "Physics 10 Textbook", type: "book", driveLink: "https://drive.google.com/file/d/1YNDI4pfDNlKZ5vkUG3FpBgZH8Vq4rD5c/view?usp=drivesdk" }
        ]
      },
      {
        id: "chemistry-10",
        name: "Chemistry",
        icon: "🧪",
        pairingScheme: "https://drive.google.com/file/d/1192SGmupIwwexwh_34yK6OxYBwAkbbhK/view?usp=drivesdk",
        chapters: [
          { id: "ch9", name: "Chemical Equilibrium" },
          { id: "ch10", name: "Acids, Bases and Salts" },
          { id: "ch11", name: "Organic Chemistry" },
          { id: "ch12", name: "Hydrocarbons" },
          { id: "ch13", name: "Biochemistry" },
          { id: "ch14", name: "Environmental Chemistry I" },
          { id: "ch15", name: "Environmental Chemistry II" },
          { id: "ch16", name: "Chemical Industries" },
        ],
        resources: [
          { id: "chemistry-10-book", name: "Chemistry 10 Textbook", type: "book", driveLink: "https://drive.google.com/file/d/1o1NbqFMFX7spARRnFj4yb2f4kgkuHibE/view?usp=drivesdk" }
        ]
      },
      {
        id: "math-10",
        name: "Mathematics",
        icon: "📐",
        pairingScheme: "https://drive.google.com/file/d/18wHgdZqyyK3EUHDlMJjPAN_AnDqW3Uec/view?usp=drivesdk",
        chapters: [
          { id: "ch1", name: "Quadratic Equations" },
          { id: "ch2", name: "Theory of Quadratic Equations" },
          { id: "ch3", name: "Variations" },
          { id: "ch4", name: "Partial Fractions" },
          { id: "ch5", name: "Sets and Functions" },
          { id: "ch6", name: "Basic Statistics" },
          { id: "ch7", name: "Introduction to Trigonometry" },
          { id: "ch8", name: "Projection of a Side of a Triangle" },
          { id: "ch9", name: "Chords of a Circle" },
          { id: "ch10", name: "Tangent to a Circle" },
          { id: "ch11", name: "Chords and Arcs" },
          { id: "ch12", name: "Angle in a Segment of a Circle" },
          { id: "ch13", name: "Practical Geometry - Circles" },
        ],
        resources: [
          { id: "math-10-book", name: "Mathematics 10 Textbook", type: "book", driveLink: "https://drive.google.com/file/d/1c_VDPgAMX_h2nUBdhttYQb7foCXVi_wN/view?usp=drivesdk" }
        ]
      },
      {
        id: "biology-10",
        name: "Biology",
        icon: "🧬",
        chapters: [
          { id: "ch10", name: "Gaseous Exchange" },
          { id: "ch11", name: "Homeostasis" },
          { id: "ch12", name: "Coordination and Control" },
          { id: "ch13", name: "Support and Movement" },
          { id: "ch14", name: "Reproduction" },
          { id: "ch15", name: "Inheritance" },
          { id: "ch16", name: "Man and His Environment" },
          { id: "ch17", name: "Biotechnology" },
          { id: "ch18", name: "Pharmacology" },
        ]
      },
      {
        id: "english-10",
        name: "English",
        icon: "📚",
        chapters: [
          { id: "ch1", name: "Hazrat Muhammad (PBUH) as an Educator" },
          { id: "ch2", name: "Chinese New Year" },
          { id: "ch3", name: "Try Again" },
          { id: "ch4", name: "First Aid" },
          { id: "ch5", name: "Great Expectations" },
          { id: "ch6", name: "A Mild Attack of Locusts" },
          { id: "ch7", name: "The Rain" },
          { id: "ch8", name: "Little by Little, One Travels Far" },
          { id: "ch9", name: "Faithfulness" },
          { id: "ch10", name: "The Piece of String" },
          { id: "ch11", name: "The Customs of Various Regions of Pakistan" },
          { id: "ch12", name: "A Nation's Strength" },
          { id: "ch13", name: "The Monsters are Due on Maple Street" },
          { id: "ch14", name: "Peace" },
          { id: "ch15", name: "Secret of Success" },
        ]
      },
      {
        id: "pak-studies-10",
        name: "Pakistan Studies",
        icon: "🇵🇰",
        chapters: [
          { id: "ch4", name: "Land and Environment" },
          { id: "ch5", name: "Population" },
          { id: "ch6", name: "Culture and Society" },
        ]
      },
      {
        id: "islamiat-10",
        name: "Islamiat",
        icon: "☪️",
        chapters: [
          { id: "ch4", name: "Islamic Jurisprudence" },
          { id: "ch5", name: "Social System of Islam" },
          { id: "ch6", name: "Islamic Economic System" },
        ]
      },
    ]
  },
  {
    id: "class-11",
    name: "Class 11",
    subjects: [
      {
        id: "physics-11",
        name: "Physics",
        icon: "⚛️",
        chapters: [
          { id: "ch1", name: "Measurements" },
          { id: "ch2", name: "Vectors and Equilibrium" },
          { id: "ch3", name: "Motion and Force" },
          { id: "ch4", name: "Work and Energy" },
          { id: "ch5", name: "Circular Motion" },
          { id: "ch6", name: "Fluid Dynamics" },
          { id: "ch7", name: "Oscillations" },
          { id: "ch8", name: "Waves" },
          { id: "ch9", name: "Physical Optics" },
          { id: "ch10", name: "Optical Instruments" },
          { id: "ch11", name: "Thermodynamics" },
        ]
      },
      {
        id: "chemistry-11",
        name: "Chemistry",
        icon: "🧪",
        chapters: [
          { id: "ch1", name: "Basic Concepts" },
          { id: "ch2", name: "Experimental Techniques in Chemistry" },
          { id: "ch3", name: "Gases" },
          { id: "ch4", name: "Liquids and Solids" },
          { id: "ch5", name: "Atomic Structure" },
          { id: "ch6", name: "Chemical Bonding" },
          { id: "ch7", name: "Thermochemistry" },
          { id: "ch8", name: "Chemical Equilibrium" },
          { id: "ch9", name: "Solutions" },
          { id: "ch10", name: "Electrochemistry" },
          { id: "ch11", name: "Reaction Kinetics" },
        ]
      },
      {
        id: "math-11",
        name: "Mathematics",
        icon: "📐",
        chapters: [
          { id: "ch1", name: "Number Systems" },
          { id: "ch2", name: "Sets, Functions and Groups" },
          { id: "ch3", name: "Matrices and Determinants" },
          { id: "ch4", name: "Quadratic Equations" },
          { id: "ch5", name: "Partial Fractions" },
          { id: "ch6", name: "Sequences and Series" },
          { id: "ch7", name: "Permutation and Combination" },
          { id: "ch8", name: "Mathematical Induction and Binomial Theorem" },
          { id: "ch9", name: "Fundamentals of Trigonometry" },
          { id: "ch10", name: "Trigonometric Identities" },
          { id: "ch11", name: "Trigonometric Functions" },
          { id: "ch12", name: "Application of Trigonometry" },
          { id: "ch13", name: "Inverse Trigonometric Functions" },
          { id: "ch14", name: "Solutions of Trigonometric Equations" },
        ]
      },
      {
        id: "biology-11",
        name: "Biology",
        icon: "🧬",
        chapters: [
          { id: "ch1", name: "Introduction" },
          { id: "ch2", name: "Biological Molecules" },
          { id: "ch3", name: "Enzymes" },
          { id: "ch4", name: "The Cell" },
          { id: "ch5", name: "Variety of Life" },
          { id: "ch6", name: "Kingdom Prokaryotae" },
          { id: "ch7", name: "Kingdom Protista" },
          { id: "ch8", name: "Fungi" },
          { id: "ch9", name: "Kingdom Plantae" },
          { id: "ch10", name: "Kingdom Animalia" },
          { id: "ch11", name: "Bioenergetics" },
          { id: "ch12", name: "Nutrition" },
          { id: "ch13", name: "Gaseous Exchange" },
          { id: "ch14", name: "Transport" },
        ]
      },
      {
        id: "english-11",
        name: "English",
        icon: "📚",
        chapters: [
          { id: "ch1", name: "Button Button" },
          { id: "ch2", name: "Clearing in the Sky" },
          { id: "ch3", name: "Dark They Were and Golden Eyed" },
          { id: "ch4", name: "Thank You, Ma'am" },
          { id: "ch5", name: "The Piece of String" },
          { id: "ch6", name: "The Reward" },
          { id: "ch7", name: "The Use of Force" },
          { id: "ch8", name: "The Gift of Magi" },
          { id: "ch9", name: "The Necklace" },
        ]
      },
    ]
  },
  {
    id: "class-12",
    name: "Class 12",
    subjects: [
      {
        id: "physics-12",
        name: "Physics",
        icon: "⚛️",
        chapters: [
          { id: "ch12", name: "Electrostatics" },
          { id: "ch13", name: "Current Electricity" },
          { id: "ch14", name: "Electromagnetism" },
          { id: "ch15", name: "Electromagnetic Induction" },
          { id: "ch16", name: "Alternating Current" },
          { id: "ch17", name: "Physics of Solids" },
          { id: "ch18", name: "Electronics" },
          { id: "ch19", name: "Dawn of Modern Physics" },
          { id: "ch20", name: "Atomic Spectra" },
          { id: "ch21", name: "Nuclear Physics" },
        ]
      },
      {
        id: "chemistry-12",
        name: "Chemistry",
        icon: "🧪",
        chapters: [
          { id: "ch1", name: "Periodic Classification of Elements" },
          { id: "ch2", name: "s-Block Elements" },
          { id: "ch3", name: "Group IIIA and IVA Elements" },
          { id: "ch4", name: "Group VA and VIA Elements" },
          { id: "ch5", name: "The Halogens and Noble Gases" },
          { id: "ch6", name: "Transition Elements" },
          { id: "ch7", name: "Fundamental Principles of Organic Chemistry" },
          { id: "ch8", name: "Aliphatic Hydrocarbons" },
          { id: "ch9", name: "Aromatic Hydrocarbons" },
          { id: "ch10", name: "Alkyl Halides" },
          { id: "ch11", name: "Alcohols, Phenols and Ethers" },
          { id: "ch12", name: "Aldehydes and Ketones" },
          { id: "ch13", name: "Carboxylic Acids" },
          { id: "ch14", name: "Macromolecules" },
          { id: "ch15", name: "Environmental Chemistry" },
        ]
      },
      {
        id: "math-12",
        name: "Mathematics",
        icon: "📐",
        chapters: [
          { id: "ch1", name: "Functions and Limits" },
          { id: "ch2", name: "Differentiation" },
          { id: "ch3", name: "Higher Order Derivatives" },
          { id: "ch4", name: "Application of Derivatives" },
          { id: "ch5", name: "Integration" },
          { id: "ch6", name: "Application of Integration" },
          { id: "ch7", name: "Differential Equations" },
          { id: "ch8", name: "Vectors" },
          { id: "ch9", name: "Analytic Geometry (Straight Line)" },
          { id: "ch10", name: "Circle" },
          { id: "ch11", name: "Conic Sections" },
          { id: "ch12", name: "Linear Programming" },
        ]
      },
      {
        id: "biology-12",
        name: "Biology",
        icon: "🧬",
        chapters: [
          { id: "ch15", name: "Homeostasis" },
          { id: "ch16", name: "Support and Movement" },
          { id: "ch17", name: "Nervous Coordination" },
          { id: "ch18", name: "Chemical Coordination" },
          { id: "ch19", name: "Behaviour" },
          { id: "ch20", name: "Reproduction" },
          { id: "ch21", name: "Development and Aging" },
          { id: "ch22", name: "Chromosomes and DNA" },
          { id: "ch23", name: "Gene Expression" },
          { id: "ch24", name: "Inheritance" },
          { id: "ch25", name: "Man and His Environment" },
          { id: "ch26", name: "Biotechnology" },
          { id: "ch27", name: "Biology and Human Welfare" },
        ]
      },
      {
        id: "english-12",
        name: "English",
        icon: "📚",
        chapters: [
          { id: "ch1", name: "The Dying Sun" },
          { id: "ch2", name: "Using the Scientific Method" },
          { id: "ch3", name: "Why Boys Fail in College" },
          { id: "ch4", name: "End of Term" },
          { id: "ch5", name: "On Destroying Books" },
          { id: "ch6", name: "The Man Who was a Hospital" },
          { id: "ch7", name: "My Financial Career" },
          { id: "ch8", name: "China's Way to Progress" },
          { id: "ch9", name: "Hunger and Population Explosion" },
          { id: "ch10", name: "A World Without Books" },
        ]
      },
    ]
  }
];
