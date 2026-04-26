// Academic data for Class 9-12 with MCQs, Pairing Schemes and Resources
import { AcademicClass } from "@/types";
import {
  chemistry9NewCh3MCQs, chemistry9NewCh4MCQs, chemistry9NewCh5MCQs,
  chemistry9NewCh6MCQs, chemistry9NewCh7MCQs, chemistry9NewCh8MCQs,
  chemistry9NewCh9MCQs, chemistry9NewCh10MCQs, chemistry9NewCh11MCQs,
  chemistry9NewCh12MCQs, chemistry9NewCh13MCQs
} from "@/data/chemistry9NewMCQs";
import {
  e9PresentIndefiniteMCQs, e9PresentIndefiniteNotes,
  e9PresentContinuousMCQs, e9PresentContinuousNotes,
  e9PresentPerfectMCQs, e9PresentPerfectNotes,
  e9PresentPerfectContinuousMCQs, e9PresentPerfectContinuousNotes,
  e9PastIndefiniteMCQs, e9PastIndefiniteNotes,
  e9PastContinuousMCQs, e9PastContinuousNotes,
  e9PastPerfectMCQs, e9PastPerfectNotes,
  e9PastPerfectContinuousMCQs, e9PastPerfectContinuousNotes,
  e9FutureIndefiniteMCQs, e9FutureIndefiniteNotes,
  e9FutureContinuousMCQs, e9FutureContinuousNotes,
  e9FuturePerfectMCQs, e9FuturePerfectNotes,
  e9FuturePerfectContinuousMCQs, e9FuturePerfectContinuousNotes,
  e9AllTenseMCQs,
  e9SpellingMCQs, e9SpellingNotes,
  e9VocabularyMCQs, e9VocabularyNotes,
  e9NounsPronounsMCQs, e9NounsPronounsNotes,
  e9VerbsGerundsMCQs, e9VerbsGerundsNotes,
  e9AdverbsClausesMCQs, e9AdverbsClausesNotes,
  e9PrepositionsConjunctionsMCQs, e9PrepositionsConjunctionsNotes,
  e9SentenceConditionalsMCQs, e9SentenceConditionalsNotes,
  e9FiguresOfSpeechMCQs, e9FiguresOfSpeechNotes,
  e9AllGrammarMCQs,
} from "@/data/english9NewMCQs";
import { e9MostRepeatedMCQs } from "@/data/english9MostRepeatedMCQs";
import { e10MostRepeatedMCQs } from "@/data/english10MostRepeatedMCQs";
import {
  physics12Ch12MCQs, physics12Ch13MCQs, physics12Ch14MCQs,
  physics12Ch15MCQs, physics12Ch16MCQs, physics12Ch17MCQs,
  physics12Ch18MCQs, physics12Ch19MCQs, physics12Ch20MCQs,
  physics12Ch21MCQs, physics12Ch22MCQs, physics12Ch23MCQs
} from "@/data/physics12Data";
import {
  math12Ch1MCQs, math12Ch2MCQs, math12Ch3MCQs,
  math12Ch4MCQs, math12Ch5MCQs, math12Ch6MCQs,
  math12Ch7MCQs
} from "@/data/math12Data";
import {
  p10Ch10OutsideMCQs, p10Ch11OutsideMCQs, p10Ch12OutsideMCQs,
  p10Ch13OutsideMCQs, p10Ch14OutsideMCQs, p10Ch15OutsideMCQs,
  p10Ch16OutsideMCQs, p10Ch17OutsideMCQs, p10Ch18OutsideMCQs
} from "@/data/physics10OutsideMCQs";
import {
  c10Ch9OutsideMCQs, c10Ch10OutsideMCQs, c10Ch11OutsideMCQs,
  c10Ch13OutsideMCQs, c10Ch14OutsideMCQs, c10Ch15OutsideMCQs,
  c10Ch16OutsideMCQs
} from "@/data/chemistry10OutsideMCQs";
import {
  ps10Ch1MCQs, ps10Ch2MCQs, ps10Ch3MCQs, ps10Ch4MCQs,
  ps10Ch5MCQs, ps10Ch6MCQs, ps10Ch7MCQs, ps10Ch8MCQs,
  ps10Ch1OutsideMCQs, ps10Ch4OutsideMCQs, ps10Ch5OutsideMCQs,
  ps10Ch8OutsideMCQs
} from "@/data/pakStudy10Data";
import {
  cs10Unit1MCQs, cs10Unit2MCQs, cs10Unit3MCQs, cs10Unit4MCQs, cs10Unit5MCQs,
  cs10Unit1OutsideMCQs, cs10Unit2OutsideMCQs, cs10Unit3OutsideMCQs,
  cs10Unit4OutsideMCQs, cs10Unit5OutsideMCQs
} from "@/data/computerScience10Data";
import {
  c9OldCh1MCQs, c9OldCh2MCQs, c9OldCh3MCQs, c9OldCh4MCQs,
  c9OldCh5MCQs, c9OldCh6MCQs, c9OldCh7MCQs, c9OldCh8MCQs
} from "@/data/chemistry9OldMCQs";

export const academicClasses: AcademicClass[] = [
  {
    id: "class-9",
    name: "Class 9",
    subjects: [
      {
        id: "physics-9-old",
        name: "Physics (Old Book)",
        icon: "⚛️",
        pairingScheme: `
📋 PHYSICS CLASS 9 - PAIRING SCHEME 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 SECTION A - MCQs (12 Marks)
• 12 MCQs from all chapters (1 mark each)

📝 SECTION B - Short Questions (36 Marks)
Attempt 9 out of 12 questions (4 marks each)

Q.2: Chapter 1 + Chapter 2 (4 questions)
Q.3: Chapter 3 + Chapter 4 (4 questions)  
Q.4: Chapter 5 + Chapter 6 + Chapter 7 (4 questions)

📝 SECTION C - Long Questions (27 Marks)
Attempt 3 out of 5 questions (9 marks each)

Q.5: Chapter 1 + Chapter 2
Q.6: Chapter 3 + Chapter 4
Q.7: Chapter 5 + Chapter 6
Q.8: Chapter 7 + Chapter 8
Q.9: Chapter 8 + Chapter 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Marks: 75 | Time: 2 Hours 30 Minutes
        `,
        resources: [
          {
            id: "physics-9-book",
            name: "Physics 9 Textbook (Punjab Board)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1HikIwpSoNpKouPE0umIuNvl-iXY4xulm/view?usp=drivesdk"
          },
          {
            id: "physics-9-pairing",
            name: "Physics 9 Pairing Scheme 2026",
            type: "notes",
            driveLink: "https://drive.google.com/file/d/1jgzF4PWOa5Zx4_jYn_ntvHjcMCp3FeRu/view?usp=drivesdk"
          }
        ],
        chapters: [
          { id: "ch1", name: "Physical Quantities and Measurement", importantTopics: ["Base & Derived Units", "Prefixes", "Significant Figures", "Scientific Notation", "Measuring Instruments"], keyConcepts: ["SI Units", "Physical Quantities", "Vernier Caliper", "Screw Gauge"], formulas: ["Least Count = Smallest Division", "Vernier Scale Reading = Main Scale + (Vernier Coincidence × LC)"], mcqs: [] },
          { id: "ch2", name: "Kinematics", importantTopics: ["Types of Motion", "Speed & Velocity", "Acceleration", "Equations of Motion", "Graphical Analysis"], keyConcepts: ["Scalar vs Vector", "Uniform & Non-uniform Motion", "Distance vs Displacement"], formulas: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = (v+u)/2 × t"], mcqs: [] },
          { id: "ch3", name: "Dynamics", importantTopics: ["Newton's Laws of Motion", "Momentum", "Force", "Friction", "Circular Motion"], keyConcepts: ["Inertia", "Action-Reaction", "Law of Conservation of Momentum"], formulas: ["F = ma", "p = mv", "W = mg", "Impulse = FΔt = Δp"], mcqs: [] },
          { id: "ch4", name: "Turning Effect of Forces", importantTopics: ["Torque", "Centre of Mass", "Centre of Gravity", "Equilibrium", "Couple"], keyConcepts: ["Moment of Force", "Principle of Moments", "Stability"], formulas: ["Torque τ = F × d", "Principle of Moments: Σ clockwise = Σ anticlockwise"], mcqs: [] },
          { id: "ch5", name: "Gravitation", importantTopics: ["Law of Gravitation", "Mass vs Weight", "Gravitational Field", "Satellites"], keyConcepts: ["Universal Gravitational Constant", "g variation", "Orbital velocity"], formulas: ["F = Gm₁m₂/r²", "g = GM/R²", "W = mg", "v = √(gR)"], mcqs: [] },
          { id: "ch6", name: "Work and Energy", importantTopics: ["Work", "Energy Types", "Power", "Efficiency", "Energy Conservation"], keyConcepts: ["Kinetic Energy", "Potential Energy", "Work-Energy Theorem"], formulas: ["W = F⋅s⋅cosθ", "KE = ½mv²", "PE = mgh", "P = W/t", "Efficiency = (Output/Input) × 100%"], mcqs: [] },
          { id: "ch7", name: "Properties of Matter", importantTopics: ["Density", "Pressure", "Atmospheric Pressure", "Pascal's Law", "Archimedes Principle"], keyConcepts: ["States of Matter", "Hooke's Law", "Elasticity"], formulas: ["Density = m/V", "P = F/A", "P = ρgh", "F = kx (Hooke's Law)"], mcqs: [] },
          { id: "ch8", name: "Thermal Properties of Matter", importantTopics: ["Temperature", "Thermometers", "Thermal Expansion", "Heat Capacity", "Latent Heat"], keyConcepts: ["Celsius & Kelvin Scale", "Specific Heat", "Change of State"], formulas: ["K = °C + 273", "Q = mcΔT", "Q = mL", "Linear expansion: ΔL = αLΔT"], mcqs: [] },
          { id: "ch9", name: "Transfer of Heat", importantTopics: ["Conduction", "Convection", "Radiation", "Greenhouse Effect"], keyConcepts: ["Conductors & Insulators", "Heat Transfer Methods"], formulas: ["Q/t = kA(T₁-T₂)/L (Conduction)"], mcqs: [] }
        ]
      },
      {
        id: "chemistry-9-old",
        name: "Chemistry (Old Book)",
        icon: "🧪",
        pairingScheme: `
📋 CHEMISTRY CLASS 9 - PAIRING SCHEME 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 SECTION A - MCQs (12 Marks)
• 12 MCQs from all chapters (1 mark each)

📝 SECTION B - Short Questions (36 Marks)
Attempt 9 out of 12 questions (4 marks each)

Q.2: Chapter 1 + Chapter 2 (4 questions)
Q.3: Chapter 3 + Chapter 4 (4 questions)
Q.4: Chapter 5 + Chapter 6 + Chapter 7 + Chapter 8 (4 questions)

📝 SECTION C - Long Questions (27 Marks)
Attempt 3 out of 5 questions (9 marks each)

Q.5: Chapter 1 + Chapter 2
Q.6: Chapter 3 + Chapter 4
Q.7: Chapter 4 + Chapter 5
Q.8: Chapter 6 + Chapter 7
Q.9: Chapter 7 + Chapter 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Marks: 75 | Time: 2 Hours 30 Minutes
        `,
        resources: [
          {
            id: "chemistry-9-book",
            name: "Chemistry 9 Textbook (Punjab Board)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1HdVdPMI99vKpT1XoDtoxOwd6Kh3Upt6d/view?usp=drivesdk"
          },
          {
            id: "chemistry-9-pairing",
            name: "Chemistry 9 Pairing Scheme 2026",
            type: "notes",
            driveLink: "https://drive.google.com/file/d/1UU-Ro5Zuxhp0sStmblM5okIHiZcxWwPN/view?usp=drivesdk"
          }
        ],
        chapters: [
          { id: "ch1", name: "Fundamentals of Chemistry", importantTopics: ["Branches of Chemistry", "Empirical & Molecular Formula", "Mole Concept", "Avogadro's Number"], keyConcepts: ["Matter", "Element", "Compound", "Mixture", "Atomic Mass Unit"], formulas: ["No. of moles = mass/molar mass", "No. of particles = n × Nₐ", "Nₐ = 6.022 × 10²³"], mcqs: c9OldCh1MCQs },
          { id: "ch2", name: "Structure of Atoms", importantTopics: ["Subatomic Particles", "Atomic Models", "Electronic Configuration", "Isotopes"], keyConcepts: ["Proton", "Neutron", "Electron", "Atomic Number", "Mass Number", "Rutherford & Bohr Models"], formulas: ["Mass Number = Protons + Neutrons", "Atomic Number = Number of Protons"], mcqs: c9OldCh2MCQs },
          { id: "ch3", name: "Periodic Table and Periodicity", importantTopics: ["Modern Periodic Table", "Groups & Periods", "Periodic Trends", "Metals & Non-metals"], keyConcepts: ["Periodic Law", "Electronegativity", "Ionization Energy", "Electron Affinity"], formulas: [], mcqs: c9OldCh3MCQs },
          { id: "ch4", name: "Structure of Molecules", importantTopics: ["Chemical Bonding", "Ionic Bonds", "Covalent Bonds", "Metallic Bonds"], keyConcepts: ["Octet Rule", "Lewis Dot Structure", "Electrovalent Compounds", "Coordinate Covalent Bond"], formulas: [], mcqs: c9OldCh4MCQs },
          { id: "ch5", name: "Physical States of Matter", importantTopics: ["Solid, Liquid, Gas", "Plasma", "Kinetic Molecular Theory", "Gas Laws"], keyConcepts: ["Boyle's Law", "Charles's Law", "Pressure-Temperature Relationship", "Diffusion"], formulas: ["P₁V₁ = P₂V₂ (Boyle's)", "V₁/T₁ = V₂/T₂ (Charles's)", "PV = nRT (Ideal Gas)"], mcqs: c9OldCh5MCQs },
          { id: "ch6", name: "Solutions", importantTopics: ["Types of Solutions", "Concentration Units", "Solubility", "Saturated & Unsaturated Solutions"], keyConcepts: ["Solute", "Solvent", "Molarity", "Dilution"], formulas: ["Molarity (M) = moles of solute / liters of solution", "% concentration = (solute/solution) × 100"], mcqs: c9OldCh6MCQs },
          { id: "ch7", name: "Electrochemistry", importantTopics: ["Electrolytes", "Electrolysis", "Electrochemical Cells", "Oxidation & Reduction"], keyConcepts: ["Anode", "Cathode", "Galvanic Cell", "Electrolytic Cell", "Redox Reactions"], formulas: ["Oxidation = Loss of electrons", "Reduction = Gain of electrons"], mcqs: c9OldCh7MCQs },
          { id: "ch8", name: "Chemical Reactivity", importantTopics: ["Metals and Non-metals", "Reactivity Series", "Chemical Reactions"], keyConcepts: ["Activity Series", "Displacement Reactions", "Corrosion"], formulas: [], mcqs: c9OldCh8MCQs }
        ]
      },
      {
        id: "math-9-old",
        name: "Mathematics (Old Book)",
        icon: "📐",
        pairingScheme: `
📋 MATHEMATICS CLASS 9 - PAIRING SCHEME 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 SECTION A - MCQs (15 Marks)
• 15 MCQs from all chapters (1 mark each)

📝 SECTION B - Short Questions (48 Marks)
Attempt 8 out of 12 questions (6 marks each)

Q.2: Chapter 1 + Chapter 2 (2 questions each)
Q.3: Chapter 3 + Chapter 4 (2 questions each)
Q.4: Chapter 5 + Chapter 6 (2 questions each)
Q.5: Chapter 7 + Chapter 8 + Chapter 9 (4 questions)
Q.6: Chapter 10 + Chapter 11 (2 questions each)
Q.7: Chapter 12 + Chapter 13 (2 questions each)
Q.8: Chapter 14 + Chapter 15 + Chapter 16 (4 questions)

📝 SECTION C - Long Questions (24 Marks)
Attempt 2 out of 4 questions (12 marks each)

Q.9: Chapter 1 + Chapter 6
Q.10: Chapter 7 + Chapter 10
Q.11: Chapter 12 + Chapter 14
Q.12: Chapter 15 + Chapter 16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Marks: 87 | Time: 2 Hours 30 Minutes
        `,
        resources: [
          {
            id: "math-9-book",
            name: "Mathematics 9 Textbook (Punjab Board)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1O3mnyON3YsC1geOK41idQ1MOwOKIlsB6/view?usp=drivesdk"
          },
          {
            id: "math-9-pairing",
            name: "Mathematics 9 Pairing Scheme 2026",
            type: "notes",
            driveLink: "https://drive.google.com/file/d/1LwXgUE6AXNisB7uvcrLsoQeDHah0HAX6/view?usp=drivesdk"
          }
        ],
        chapters: [
          {
            id: "ch1",
            name: "Matrices and Determinants",
            importantTopics: ["Types of Matrices", "Matrix Operations", "Determinants", "Inverse of Matrix"],
            keyConcepts: ["Row Matrix", "Column Matrix", "Square Matrix", "Identity Matrix", "Transpose"],
            formulas: ["det(2×2) = ad - bc", "A⁻¹ = adj(A)/det(A)", "(AB)ᵀ = BᵀAᵀ"],
            mcqs: [
              { id: "m9-ch1-1", question: "Order of matrix [1 2 3] is:", options: ["1×3", "3×1", "3×3", "1×1"], correctAnswer: 0, explanation: "Row matrix with 1 row and 3 columns = 1×3." },
              { id: "m9-ch1-2", question: "A matrix with equal rows and columns is:", options: ["Row matrix", "Column matrix", "Square matrix", "Zero matrix"], correctAnswer: 2, explanation: "Square matrix has m = n (rows = columns)." },
              { id: "m9-ch1-3", question: "If det(A) = 0, matrix is:", options: ["Singular", "Non-singular", "Identity", "Symmetric"], correctAnswer: 0, explanation: "Singular matrix has determinant = 0 (no inverse exists)." },
              { id: "m9-ch1-4", question: "Multiplicative inverse of a matrix A is:", options: ["A", "A⁻¹", "Aᵀ", "-A"], correctAnswer: 1, explanation: "A⁻¹ is the multiplicative inverse where A × A⁻¹ = I." }
            ]
          },
          {
            id: "ch2",
            name: "Real and Complex Numbers",
            importantTopics: ["Types of Numbers", "Properties of Real Numbers", "Complex Numbers", "Operations"],
            keyConcepts: ["Natural Numbers", "Integers", "Rational & Irrational", "Imaginary Unit i"],
            formulas: ["i² = -1", "√(-a) = i√a", "(a+bi)(c+di) = (ac-bd) + (ad+bc)i"],
            mcqs: [
              { id: "m9-ch2-1", question: "√(-1) is denoted by:", options: ["0", "1", "i", "-1"], correctAnswer: 2, explanation: "i (iota) = √(-1), the imaginary unit." },
              { id: "m9-ch2-2", question: "i² equals:", options: ["1", "-1", "i", "-i"], correctAnswer: 1, explanation: "i² = (√-1)² = -1" },
              { id: "m9-ch2-3", question: "π is a/an:", options: ["Rational number", "Irrational number", "Integer", "Natural number"], correctAnswer: 1, explanation: "π cannot be expressed as a fraction, hence irrational." },
              { id: "m9-ch2-4", question: "Sum of two irrational numbers is:", options: ["Always rational", "Always irrational", "May be rational or irrational", "Zero"], correctAnswer: 2, explanation: "e.g., √2 + (-√2) = 0 (rational), but √2 + √3 is irrational." }
            ]
          },
          {
            id: "ch3",
            name: "Logarithms",
            importantTopics: ["Definition", "Laws of Logarithms", "Common & Natural Logs", "Antilogarithms"],
            keyConcepts: ["log_a(x)", "log₁₀", "ln (natural log)", "Characteristic & Mantissa"],
            formulas: ["log(ab) = log a + log b", "log(a/b) = log a - log b", "log(aⁿ) = n log a", "a^(log_a x) = x"],
            mcqs: [
              { id: "m9-ch3-1", question: "log₁₀(100) equals:", options: ["1", "2", "10", "100"], correctAnswer: 1, explanation: "log₁₀(100) = log₁₀(10²) = 2" },
              { id: "m9-ch3-2", question: "log₁₀(1) equals:", options: ["0", "1", "10", "Undefined"], correctAnswer: 0, explanation: "log of 1 to any base = 0 (since a⁰ = 1)." },
              { id: "m9-ch3-3", question: "log a + log b equals:", options: ["log(a+b)", "log(ab)", "log(a/b)", "log(a-b)"], correctAnswer: 1, explanation: "Product rule: log(ab) = log a + log b." },
              { id: "m9-ch3-4", question: "log₁₀(10) equals:", options: ["0", "1", "10", "e"], correctAnswer: 1, explanation: "log_a(a) = 1 for any base a." }
            ]
          },
          {
            id: "ch4",
            name: "Algebraic Expressions and Formulas",
            importantTopics: ["Algebraic Expressions", "Special Products", "Algebraic Identities"],
            keyConcepts: ["Polynomial", "Monomial", "Binomial", "Trinomial"],
            formulas: ["(a+b)² = a² + 2ab + b²", "(a-b)² = a² - 2ab + b²", "a² - b² = (a+b)(a-b)", "(a+b)³ = a³ + 3a²b + 3ab² + b³"],
            mcqs: [
              { id: "m9-ch4-1", question: "(a+b)² equals:", options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"], correctAnswer: 1, explanation: "(a+b)² = a² + 2ab + b²" },
              { id: "m9-ch4-2", question: "a² - b² equals:", options: ["(a+b)²", "(a-b)²", "(a+b)(a-b)", "(a-b)(a+b)²"], correctAnswer: 2, explanation: "Difference of squares: a² - b² = (a+b)(a-b)." },
              { id: "m9-ch4-3", question: "What is the result of 1356 × 1356?", options: ["1738736", "1838736", "1938736", "1638736"], correctAnswer: 1, explanation: "1356² = 1838736" }
            ]
          },
          {
            id: "ch5",
            name: "Factorization",
            importantTopics: ["Common Factors", "Grouping", "Factoring Trinomials", "Special Cases"],
            keyConcepts: ["HCF", "Factor Theorem", "Remainder Theorem"],
            formulas: [],
            mcqs: [
              { id: "m9-ch5-1", question: "x² - 9 factors to:", options: ["(x-3)²", "(x+3)²", "(x+3)(x-3)", "Cannot be factored"], correctAnswer: 2, explanation: "x² - 9 = x² - 3² = (x+3)(x-3)" },
              { id: "m9-ch5-2", question: "HCF of 12 and 18 is:", options: ["2", "3", "6", "36"], correctAnswer: 2, explanation: "12 = 2²×3, 18 = 2×3², HCF = 2×3 = 6" }
            ]
          },
          {
            id: "ch6",
            name: "Algebraic Manipulation",
            importantTopics: ["LCM of Algebraic Expressions", "Simplification", "Algebraic Fractions"],
            keyConcepts: ["Finding LCM", "Addition/Subtraction of Fractions"],
            formulas: [],
            mcqs: [
              { id: "m9-ch6-1", question: "LCM of x² and x³ is:", options: ["x", "x²", "x³", "x⁵"], correctAnswer: 2, explanation: "LCM takes highest power: x³" }
            ]
          },
          {
            id: "ch7",
            name: "Linear Equations and Inequalities",
            importantTopics: ["Solving Linear Equations", "Word Problems", "Linear Inequalities", "Graphing"],
            keyConcepts: ["One Variable", "Two Variables", "Solution Set"],
            formulas: ["ax + b = 0 → x = -b/a"],
            mcqs: [
              { id: "m9-ch7-1", question: "If 2x + 4 = 10, then x equals:", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "2x = 10 - 4 = 6, x = 3" },
              { id: "m9-ch7-2", question: "Product of 49 and 81 is:", options: ["3969", "4000", "3800", "3900"], correctAnswer: 0, explanation: "49 × 81 = 3969" }
            ]
          },
          {
            id: "ch8",
            name: "Linear Graphs and Their Applications",
            importantTopics: ["Cartesian Plane", "Plotting Points", "Slope", "Graphing Lines"],
            keyConcepts: ["x-axis", "y-axis", "Origin", "Quadrants", "Intercepts"],
            formulas: ["Slope m = (y₂-y₁)/(x₂-x₁)", "y = mx + c"],
            mcqs: [
              { id: "m9-ch8-1", question: "Slope of a horizontal line is:", options: ["0", "1", "Undefined", "Infinity"], correctAnswer: 0, explanation: "Horizontal line has no vertical change, slope = 0." },
              { id: "m9-ch8-2", question: "Origin has coordinates:", options: ["(1,1)", "(0,1)", "(1,0)", "(0,0)"], correctAnswer: 3, explanation: "Origin is at (0,0) where axes intersect." }
            ]
          },
          {
            id: "ch9",
            name: "Introduction to Coordinate Geometry",
            importantTopics: ["Distance Formula", "Mid-point Formula", "Collinear Points"],
            keyConcepts: ["Cartesian Coordinates", "Distance Between Points"],
            formulas: ["Distance = √[(x₂-x₁)² + (y₂-y₁)²]", "Mid-point = ((x₁+x₂)/2, (y₁+y₂)/2)"],
            mcqs: [
              { id: "m9-ch9-1", question: "Distance between (0,0) and (3,4) is:", options: ["3", "4", "5", "7"], correctAnswer: 2, explanation: "d = √(3² + 4²) = √(9+16) = √25 = 5" }
            ]
          },
          {
            id: "ch10",
            name: "Congruent Triangles",
            importantTopics: ["Congruence Conditions", "SSS, SAS, ASA, RHS"],
            keyConcepts: ["Congruent Figures", "Corresponding Parts"],
            formulas: [],
            mcqs: [
              { id: "m9-ch10-1", question: "For congruent triangles, all corresponding sides are:", options: ["Parallel", "Equal", "Perpendicular", "Similar"], correctAnswer: 1, explanation: "Congruent triangles have equal corresponding sides and angles." }
            ]
          },
          {
            id: "ch11",
            name: "Parallelograms and Triangles",
            importantTopics: ["Properties of Parallelograms", "Mid-point Theorem"],
            keyConcepts: ["Opposite Sides", "Opposite Angles", "Diagonals"],
            formulas: [],
            mcqs: [
              { id: "m9-ch11-1", question: "Opposite sides of parallelogram are:", options: ["Perpendicular", "Equal and parallel", "Equal only", "Parallel only"], correctAnswer: 1, explanation: "In parallelogram, opposite sides are equal and parallel." }
            ]
          },
          {
            id: "ch12",
            name: "Line Bisectors and Angle Bisectors",
            importantTopics: ["Perpendicular Bisector", "Angle Bisector", "Properties"],
            keyConcepts: ["Bisector", "Equidistant Points"],
            formulas: [],
            mcqs: [
              { id: "m9-ch12-1", question: "Perpendicular bisector of a segment:", options: ["Passes through one end", "Divides at 90° at midpoint", "Is parallel to segment", "Touches one point"], correctAnswer: 1, explanation: "Perpendicular bisector passes through midpoint at 90°." }
            ]
          },
          {
            id: "ch13",
            name: "Sides and Angles of a Triangle",
            importantTopics: ["Triangle Inequality", "Angle Sum Property", "Exterior Angle"],
            keyConcepts: ["Sum of angles = 180°", "Largest side opposite largest angle"],
            formulas: ["Sum of interior angles = 180°"],
            mcqs: [
              { id: "m9-ch13-1", question: "Sum of angles in a triangle is:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "Triangle's interior angles always sum to 180°." },
              { id: "m9-ch13-2", question: "The longest side of a triangle is opposite:", options: ["Smallest angle", "Largest angle", "Right angle", "Equal angle"], correctAnswer: 1, explanation: "The largest angle is opposite the longest side." }
            ]
          },
          {
            id: "ch14",
            name: "Ratio and Proportion",
            importantTopics: ["Ratio", "Proportion", "Continued Proportion", "Mean Proportional"],
            keyConcepts: ["a:b = c:d means ad = bc", "Mean proportional"],
            formulas: ["If a:b = b:c, then b² = ac"],
            mcqs: [
              { id: "m9-ch14-1", question: "Extreme mean is true only in which type of proportion?", options: ["Direct proportion", "Inverse proportion", "Continuous proportion", "Ratio proportion"], correctAnswer: 2, explanation: "In continuous proportion a:b = b:c, middle term b is geometric mean." }
            ]
          },
          {
            id: "ch15",
            name: "Pythagoras Theorem",
            importantTopics: ["Pythagoras Theorem", "Converse", "Applications"],
            keyConcepts: ["Right Triangle", "Hypotenuse", "Pythagorean Triples"],
            formulas: ["c² = a² + b² (for right triangle)"],
            mcqs: [
              { id: "m9-ch15-1", question: "In right triangle with legs 3 and 4, hypotenuse is:", options: ["5", "6", "7", "8"], correctAnswer: 0, explanation: "c² = 3² + 4² = 9 + 16 = 25, c = 5" },
              { id: "m9-ch15-2", question: "Pythagorean theorem applies to:", options: ["All triangles", "Equilateral triangles", "Right triangles only", "Isosceles triangles"], correctAnswer: 2, explanation: "Pythagoras theorem is specific to right triangles." }
            ]
          },
          {
            id: "ch16",
            name: "Theorems Related with Area",
            importantTopics: ["Area of Triangle", "Area of Parallelogram", "Theorems"],
            keyConcepts: ["Area = ½ × base × height (triangle)", "Area = base × height (parallelogram)"],
            formulas: ["Area of triangle = ½bh", "Area of parallelogram = bh"],
            mcqs: [
              { id: "m9-ch16-1", question: "Area of triangle with base 6 and height 4 is:", options: ["10", "12", "24", "20"], correctAnswer: 1, explanation: "Area = ½ × 6 × 4 = 12 square units." }
            ]
          }
        ]
      },
      {
        id: "physics-9",
        name: "Physics (New Book)",
        icon: "⚛️",
        pairingScheme: null,
        resources: [
          {
            id: "physics-9-new-book",
            name: "Physics 9 New Textbook (Punjab Board 2025-26)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1HikIwpSoNpKouPE0umIuNvl-iXY4xulm/view"
          }
        ],
        chapters: [
          { id: "new-ch1", name: "Physical Quantities and Measurements", importantTopics: ["Base & Derived Units", "Prefixes", "Scientific Notation", "Measuring Instruments", "Errors"], keyConcepts: ["SI Units", "Vernier Callipers", "Screw Gauge", "Significant Figures", "Precision & Accuracy"], formulas: ["Least Count of Vernier = 0.1 mm", "Least Count of Screw Gauge = 0.01 mm"], mcqs: [
            { id: "np9-ch1-1", question: "The instrument that is most suitable for measuring the thickness of a few sheets of cardboard is a:", options: ["metre rule", "measuring tape", "micrometer screw gauge", "Vernier Callipers"], correctAnswer: 2, explanation: "Micrometer screw gauge has the smallest least count (0.01 mm) suitable for thin sheets." },
            { id: "np9-ch1-2", question: "One femtometre is equal to:", options: ["10 m", "10¹⁵ m", "10⁻¹⁵ m", "10⁻⁹ m"], correctAnswer: 2, explanation: "Femto prefix = 10⁻¹⁵" },
            { id: "np9-ch1-3", question: "A light year is a unit of:", options: ["light", "time", "distance", "speed"], correctAnswer: 2, explanation: "A light year is the distance light travels in one year." },
            { id: "np9-ch1-4", question: "Which one is a non-physical quantity?", options: ["distance", "density", "colour", "temperature"], correctAnswer: 2, explanation: "Colour cannot be measured with instruments; it is a non-physical quantity." },
            { id: "np9-ch1-5", question: "When using a measuring cylinder, one precaution to take is to:", options: ["check for the zero error", "look at the meniscus from below the level of the water surface", "take several readings by looking from more than one direction", "position the eye in line with the bottom of the meniscus"], correctAnswer: 3, explanation: "The eye must be level with the bottom of the meniscus to avoid parallax error." },
            { id: "np9-ch1-6", question: "Volume of water consumed by you per day is estimated in:", options: ["millilitre", "litre", "kilogram", "cubic metre"], correctAnswer: 1, explanation: "Daily water consumption is typically measured in litres." },
            { id: "np9-ch1-7", question: "A displacement can is used to measure:", options: ["mass of a liquid", "mass of a solid", "volume of a liquid", "volume of a solid"], correctAnswer: 3, explanation: "A displacement can measures volume of irregular solids by water displacement." },
            { id: "np9-ch1-8", question: "Two rods with lengths 12.321 cm and 10.3 cm are placed side by side, the difference in their lengths is:", options: ["2.02 cm", "2.0 cm", "2 cm", "2.021 cm"], correctAnswer: 1, explanation: "Following significant figures rules: 12.321 - 10.3 = 2.0 cm (1 decimal place)." },
            { id: "np9-ch1-9", question: "Four students measure the diameter of a cylinder with Vernier Callipers. Which of the following readings is correct?", options: ["3.4 cm", "3.475 cm", "3.47 cm", "3.5 cm"], correctAnswer: 2, explanation: "Vernier Callipers reads to 0.01 cm, so 3.47 cm is the correct precision." },
            { id: "np9-ch1-10", question: "Which of the following measures are likely to represent the thickness of a sheet of this book?", options: ["6 × 10⁻²⁵ m", "1 × 10⁻⁴ m", "1.2 × 10⁻¹⁵ m", "4 × 10⁻² m"], correctAnswer: 1, explanation: "A sheet of paper is about 0.1 mm = 1 × 10⁻⁴ m thick." },
            { id: "np9-ch1-11", question: "In a Vernier Callipers ten smallest divisions of the Vernier scale are equal to nine smallest divisions of the main scale. If the smallest division of the main scale is half millimetre, the Vernier constant is equal to:", options: ["0.5 mm", "0.1 mm", "0.05 mm", "0.001 mm"], correctAnswer: 2, explanation: "LC = 0.5 mm / 10 = 0.05 mm" }
          ] },
          { id: "new-ch2", name: "Kinematics", importantTopics: ["Scalars & Vectors", "Types of Motion", "Speed & Velocity", "Acceleration", "Graphical Analysis", "Equations of Motion"], keyConcepts: ["Distance vs Displacement", "Uniform & Non-uniform Motion", "Free Fall"], formulas: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as"], mcqs: [
            { id: "np9-ch2-1", question: "The numerical ratio of displacement to distance is:", options: ["always less than one", "always equal to one", "always greater than one", "equal to or less than one"], correctAnswer: 3, explanation: "Displacement ≤ Distance, so the ratio is always ≤ 1." },
            { id: "np9-ch2-2", question: "If a body does not change its position with respect to some fixed point, then it will be in a state of:", options: ["rest", "motion", "uniform motion", "variable motion"], correctAnswer: 0, explanation: "No change in position means the body is at rest." },
            { id: "np9-ch2-3", question: "A ball is dropped from the top of a tower, the distance covered by it in the first second is:", options: ["5 m", "10 m", "50 m", "100 m"], correctAnswer: 0, explanation: "s = ½gt² = ½ × 10 × 1² = 5 m" },
            { id: "np9-ch2-4", question: "A body accelerates from rest to a velocity of 144 km/h in 20 seconds. The distance covered by it is:", options: ["100 m", "400 m", "1400 m", "1440 m"], correctAnswer: 1, explanation: "144 km/h = 40 m/s. s = ½at² = ½ × 2 × 400 = 400 m" },
            { id: "np9-ch2-5", question: "A body is moving with constant acceleration starting from rest. It covers a distance S in 4 seconds. How much time does it take to cover one-fourth of this distance?", options: ["1 s", "2 s", "4 s", "16 s"], correctAnswer: 1, explanation: "s ∝ t², so t = 4 × √(1/4) = 2 s" },
            { id: "np9-ch2-6", question: "The displacement time graphs of two objects A and B are shown in the figure. Point out the true statement from the following:", options: ["The velocity of A is greater than B", "The velocity of A is less than B", "The velocity of A is equal to that of B", "The graph gives no information in this regard"], correctAnswer: 0, explanation: "Steeper slope in displacement-time graph means greater velocity." },
            { id: "np9-ch2-7", question: "The area under the speed-time graph is numerically equal to:", options: ["velocity", "uniform velocity", "acceleration", "distance covered"], correctAnswer: 3, explanation: "Area under speed-time graph = distance covered by the object." },
            { id: "np9-ch2-8", question: "Gradient of the speed-time graph is equal to:", options: ["speed", "velocity", "acceleration", "distance covered"], correctAnswer: 2, explanation: "Slope of speed-time graph = rate of change of speed = acceleration." },
            { id: "np9-ch2-9", question: "Gradient of the distance-time graph is equal to the:", options: ["speed", "velocity", "distance covered", "acceleration"], correctAnswer: 0, explanation: "Slope of distance-time graph = distance/time = speed." },
            { id: "np9-ch2-10", question: "A car accelerates uniformly from 80.5 km/h at t = 0 to 113 km/h at t = 9 s. Which graph best describes the motion of the car?", options: ["Speed increasing linearly with time", "Speed constant with time", "Speed decreasing with time", "Speed increasing then decreasing"], correctAnswer: 0, explanation: "Uniform acceleration means speed increases linearly with time." }
          ] },
          { id: "new-ch3", name: "Dynamics", importantTopics: ["Newton's Laws", "Momentum", "Force", "Friction", "Impulse"], keyConcepts: ["Inertia", "Action-Reaction", "Conservation of Momentum", "Contact & Non-contact Forces"], formulas: ["F = ma", "p = mv", "Impulse = FΔt = Δp"], mcqs: [
            { id: "np9-ch3-1", question: "When we kick a stone, we get hurt. This is due to:", options: ["inertia", "velocity", "momentum", "reaction"], correctAnswer: 3, explanation: "Newton's third law: the stone exerts an equal and opposite reaction force on our foot." },
            { id: "np9-ch3-2", question: "An object will continue its motion with constant acceleration until:", options: ["the resultant force on it begins to decrease", "the resultant force on it is zero", "the resultant force on it begins to increase", "the resultant force is at right angle to its tangential velocity"], correctAnswer: 0, explanation: "Constant acceleration requires constant net force; if force decreases, acceleration changes." },
            { id: "np9-ch3-3", question: "Which of the following is a non-contact force?", options: ["Friction", "Air resistance", "Electrostatic force", "Tension in the string"], correctAnswer: 2, explanation: "Electrostatic force acts without physical contact between objects." },
            { id: "np9-ch3-4", question: "A ball with initial momentum p hits a solid wall and bounces back with the same velocity. Its momentum p' after collision will be:", options: ["p' = p", "p' = -p", "p' = 2p", "p' = -2p"], correctAnswer: 1, explanation: "Direction reverses with same magnitude, so momentum becomes -p." },
            { id: "np9-ch3-5", question: "A particle of mass m moving with a velocity v collides with another particle of the same mass at rest. The velocity of the first particle after collision is:", options: ["v", "-v", "0", "-1/2"], correctAnswer: 2, explanation: "In a perfectly elastic collision between equal masses, the first particle stops." },
            { id: "np9-ch3-6", question: "Conservation of linear momentum is equivalent to:", options: ["Newton's first law of motion", "Newton's second law of motion", "Newton's third law of motion", "None of these"], correctAnswer: 2, explanation: "Conservation of momentum is derived from Newton's third law (action-reaction pairs)." },
            { id: "np9-ch3-7", question: "An object with a mass of 5 kg moves at constant velocity of 10 m/s. A constant force then acts for 5 seconds on the object and gives it a velocity of 2 m/s in the opposite direction. The force acting on the object is:", options: ["5 N", "-10 N", "-12 N", "-15 N"], correctAnswer: 2, explanation: "F = m(v-u)/t = 5(-2-10)/5 = 5(-12)/5 = -12 N" },
            { id: "np9-ch3-8", question: "A large force acts on an object for a very short interval of time. In this case, it is easy to determine:", options: ["magnitude of force", "time interval", "product of force and time", "none of these"], correctAnswer: 2, explanation: "Impulse (F×t) is easier to determine than individual F or t for impulsive forces." },
            { id: "np9-ch3-9", question: "A lubricant is usually introduced between two surfaces to decrease friction. The lubricant:", options: ["decreases temperature", "acts as ball bearings", "prevents direct contact of the surfaces", "provides rolling friction"], correctAnswer: 2, explanation: "Lubricant forms a thin layer preventing direct surface-to-surface contact." }
          ] },
          { id: "new-ch4", name: "Turning Effects of Force", importantTopics: ["Torque", "Centre of Mass", "Equilibrium", "Couple", "Centripetal Force"], keyConcepts: ["Moment of Force", "Principle of Moments", "Stable/Unstable/Neutral Equilibrium"], formulas: ["τ = F × d", "Fc = mv²/r"], mcqs: [
            { id: "np9-ch4-1", question: "A particle is simultaneously acted upon by two forces of 4 and 3 newtons. The net force on the particle is:", options: ["1 N", "between 1 N and 7 N", "5 N", "7 N"], correctAnswer: 1, explanation: "Net force ranges from |4-3|=1 N to 4+3=7 N depending on direction." },
            { id: "np9-ch4-2", question: "A force F is making an angle of 60° with x-axis. Its y-component is equal to:", options: ["F", "F sin 60°", "F cos 60°", "F tan 60°"], correctAnswer: 1, explanation: "y-component = F sin θ = F sin 60°" },
            { id: "np9-ch4-3", question: "Moment of force is called:", options: ["moment arm", "couple", "couple arm", "torque"], correctAnswer: 3, explanation: "The turning effect of a force is called torque (moment of force)." },
            { id: "np9-ch4-4", question: "If F₁ and F₂ are the forces acting on a body and τ is the torque produced in it, the body will be completely in equilibrium, when:", options: ["ΣF = 0 and Στ = 0", "ΣF = 0 and Στ ≠ 0", "ΣF ≠ 0 and Στ = 0", "ΣF ≠ 0 and Στ ≠ 0"], correctAnswer: 0, explanation: "Complete equilibrium requires both net force and net torque to be zero." },
            { id: "np9-ch4-5", question: "A Shopkeeper sells his articles by a balance having unequal arms of the pans. If he puts the weights in the pan having shorter arm, then the customer:", options: ["loses", "gains", "neither loses nor gains", "not certain"], correctAnswer: 0, explanation: "Shorter arm needs less weight to balance, so customer gets less than paid for." },
            { id: "np9-ch4-6", question: "A man walks on a tight rope. He balances himself by holding a bamboo stick horizontally. It is an application of:", options: ["law of conservation of momentum", "Newton's second law of motion", "principle of moments", "Newton's third law of motion"], correctAnswer: 2, explanation: "The bamboo stick helps balance by applying the principle of moments." },
            { id: "np9-ch4-7", question: "In stable equilibrium, the centre of gravity of the body lies:", options: ["at the highest position", "at the lowest position", "at any position", "outside the body"], correctAnswer: 1, explanation: "In stable equilibrium, the centre of gravity is at its lowest possible position." },
            { id: "np9-ch4-8", question: "The centre of mass of a body:", options: ["lies always inside the body", "lies always outside the body", "lies always on the surface of the body", "may lie within, outside or on the surface"], correctAnswer: 3, explanation: "Centre of mass can be inside (solid sphere), outside (ring), or on surface depending on shape." },
            { id: "np9-ch4-9", question: "A cylinder resting on its circular base is in:", options: ["stable equilibrium", "unstable equilibrium", "neutral equilibrium", "none of these"], correctAnswer: 0, explanation: "A cylinder on its base returns to position when slightly tilted - stable equilibrium." },
            { id: "np9-ch4-10", question: "Centripetal force is given by:", options: ["rF", "rF cos θ", "mv²/r", "mv/r²"], correctAnswer: 2, explanation: "Centripetal force Fc = mv²/r directed toward the centre of circular path." }
          ] },
          { id: "new-ch5", name: "Work, Energy and Power", importantTopics: ["Work", "Energy Types", "Power", "Energy Conservation"], keyConcepts: ["Kinetic Energy", "Potential Energy", "Work-Energy Theorem", "Renewable Energy"], formulas: ["W = Fd cos θ", "KE = ½mv²", "PE = mgh", "P = W/t"], mcqs: [
            { id: "np9-ch5-1", question: "Work done is maximum when the angle between the force F and the displacement d is:", options: ["0°", "30°", "60°", "90°"], correctAnswer: 0, explanation: "W = Fd cos θ is maximum when θ = 0° (cos 0° = 1)." },
            { id: "np9-ch5-2", question: "A joule can also be written as:", options: ["kg m s⁻²", "kg m s⁻¹", "kg m² s⁻³", "kg m² s⁻²"], correctAnswer: 3, explanation: "1 J = 1 kg⋅m²⋅s⁻² (force × distance = kg⋅m⋅s⁻² × m)." },
            { id: "np9-ch5-3", question: "The SI unit of power is:", options: ["joule", "newton", "watt", "second"], correctAnswer: 2, explanation: "Power is measured in watts (W) in SI system." },
            { id: "np9-ch5-4", question: "The power of a water pump is 2 kW. The amount of water it can raise in one minute to a height of 5 metres is:", options: ["1000 litres", "1200 litres", "2000 litres", "2400 litres"], correctAnswer: 3, explanation: "P = mgh/t, m = Pt/(gh) = 2000×60/(10×5) = 2400 kg = 2400 litres." },
            { id: "np9-ch5-5", question: "A bullet of mass 0.05 kg has a speed of 300 m/s. Its kinetic energy will be:", options: ["2250 J", "4500 J", "1500 J", "1125 J"], correctAnswer: 0, explanation: "KE = ½mv² = ½ × 0.05 × 300² = ½ × 0.05 × 90000 = 2250 J" },
            { id: "np9-ch5-6", question: "If a car doubles its speed, its kinetic energy will be:", options: ["the same", "doubled", "increased to three times", "increased to four times"], correctAnswer: 3, explanation: "KE = ½mv². If v doubles, KE becomes 4 times (since KE ∝ v²)." },
            { id: "np9-ch5-7", question: "The energy possessed by a body by virtue of its position is:", options: ["kinetic energy", "potential energy", "chemical energy", "solar energy"], correctAnswer: 1, explanation: "Potential energy is the energy due to position or configuration." },
            { id: "np9-ch5-8", question: "The magnitude of momentum of an object is doubled, the kinetic energy of the object will:", options: ["double", "increase to four times", "reduce to one-half", "remain the same"], correctAnswer: 1, explanation: "KE = p²/(2m). If p doubles, KE becomes 4 times." },
            { id: "np9-ch5-9", question: "Which of the following is not renewable energy source?", options: ["Hydroelectric energy", "Fossil fuels", "Wind energy", "Solar energy"], correctAnswer: 1, explanation: "Fossil fuels (coal, oil, gas) are non-renewable - they take millions of years to form." }
          ] },
          { id: "new-ch6", name: "Mechanical Properties of Matter", importantTopics: ["Elasticity", "Stress & Strain", "Pressure", "Pascal's Law", "Archimedes Principle"], keyConcepts: ["Hooke's Law", "Young's Modulus", "Atmospheric Pressure", "Hydraulic Press"], formulas: ["Stress = F/A", "Strain = ΔL/L", "P = F/A", "P = ρgh"], mcqs: [
            { id: "np9-ch6-1", question: "A wire is stretched by a weight w. If the diameter of the wire is reduced to half of its previous value, the extension will become:", options: ["one half", "double", "one fourth", "four times"], correctAnswer: 3, explanation: "Extension ∝ 1/A ∝ 1/d². If d halves, extension becomes 4 times." },
            { id: "np9-ch6-2", question: "Four wires of the same material are stretched by the same load. Their dimensions are given below. Which of them will elongate most?", options: ["Length 1 m, diameter 1 mm", "Length 2 m, diameter 2 mm", "Length 3 m, diameter 3 mm", "Length 4 m, diameter 0.5 mm"], correctAnswer: 3, explanation: "Extension ∝ L/d². Wire D has L/d² = 4/0.25 = 16, which is the largest." },
            { id: "np9-ch6-3", question: "Two metal plates of area 2 and 3 square metres are placed in a liquid at the same depth. The ratio of pressures on the two plates is:", options: ["1:1", "√2:√3", "2:3", "4:9"], correctAnswer: 0, explanation: "Pressure = ρgh depends only on depth, not area. Same depth = same pressure = 1:1." },
            { id: "np9-ch6-4", question: "The pressure at any point in a liquid is proportional to:", options: ["density of the liquid", "depth of the point below the surface of the liquid", "acceleration due to gravity", "all of the above"], correctAnswer: 3, explanation: "P = ρgh, so pressure is proportional to density, depth, and g." },
            { id: "np9-ch6-5", question: "Pressure applied to an enclosed fluid is:", options: ["increased and applied to every part of the fluid", "diminished and transmitted to the walls of container", "increased in proportional to the mass of fluid and then transmitted to each part of the fluid", "transmitted unchanged to every portion of the fluid and walls of containing vessel"], correctAnswer: 3, explanation: "Pascal's law: pressure is transmitted unchanged throughout the fluid." },
            { id: "np9-ch6-6", question: "The principle of a hydraulic press is based on:", options: ["Hooke's law", "Pascal's law", "Principle of conservation of energy", "Principle of conservation of momentum"], correctAnswer: 1, explanation: "Hydraulic press works on Pascal's law of fluid pressure transmission." },
            { id: "np9-ch6-7", question: "When a spring is compressed, what form of energy does it possess?", options: ["Kinetic", "Potential", "Internal", "Heat"], correctAnswer: 1, explanation: "A compressed spring stores elastic potential energy." },
            { id: "np9-ch6-8", question: "What is the force exerted by the atmosphere on a rectangular block surface of length 50 cm and breadth 40 cm? The atmospheric pressure is 100 kPa.", options: ["20 kN", "100 kN", "200 kN", "500 kN"], correctAnswer: 0, explanation: "F = PA = 100,000 × 0.5 × 0.4 = 20,000 N = 20 kN" }
          ] },
          { id: "new-ch7", name: "Thermal Properties of Matter", importantTopics: ["Temperature", "Thermometers", "Thermal Expansion", "Kinetic Molecular Theory"], keyConcepts: ["Celsius & Kelvin Scale", "Fahrenheit Scale", "Liquid-in-glass Thermometers", "Thermocouple"], formulas: ["K = °C + 273", "°F = (9/5)°C + 32"], mcqs: [
            { id: "np9-ch7-1", question: "How do the molecules in a solid behave?", options: ["Move randomly", "Vibrate about their mean positions", "Rotate and vibrate randomly at their own positions", "Move in a straight line from hot to cold ends"], correctAnswer: 1, explanation: "In solids, molecules vibrate about fixed mean positions." },
            { id: "np9-ch7-2", question: "What type of motion is of the molecules in a gas?", options: ["Linear motion", "Random motion", "Vibratory motion", "Rotatory motion"], correctAnswer: 1, explanation: "Gas molecules move in random directions with random speeds." },
            { id: "np9-ch7-3", question: "Temperature of a substance is:", options: ["the total amount of heat contained in it", "the total number of molecules in it", "degree of hotness or coldness", "dependent upon the intermolecular distance"], correctAnswer: 2, explanation: "Temperature is the degree of hotness or coldness of a body." },
            { id: "np9-ch7-4", question: "Heat is the:", options: ["total kinetic energy of the molecules", "the internal energy", "work done by the molecules", "the energy in transit"], correctAnswer: 3, explanation: "Heat is energy in transit that flows from hot to cold body." },
            { id: "np9-ch7-5", question: "In Kelvin scale, the temperature corresponding to melting point of ice is:", options: ["zero", "32", "-273", "+273"], correctAnswer: 3, explanation: "0°C = 273 K (melting point of ice)." },
            { id: "np9-ch7-6", question: "The temperature which has the same value on Celsius and Fahrenheit scale is:", options: ["-40", "+40", "+45", "-45"], correctAnswer: 0, explanation: "-40°C = -40°F (the only temperature where both scales agree)." },
            { id: "np9-ch7-7", question: "Which one is a better choice for a liquid-in-glass thermometer?", options: ["Is colourless", "Is a bad conductor", "Expand linearly", "Wets glass"], correctAnswer: 2, explanation: "A good thermometric liquid should expand linearly with temperature." },
            { id: "np9-ch7-8", question: "One disadvantage of using alcohol in a liquid-in-glass thermometer:", options: ["it has large expansivity", "it has low freezing point (-112°C)", "it wets the glass tube", "its expansion is linear"], correctAnswer: 2, explanation: "Alcohol wets the glass tube, making readings less accurate." },
            { id: "np9-ch7-9", question: "Water is not used as a thermometric liquid mainly due to:", options: ["colourless", "a bad conductor of heat", "non-linear expansion", "a low boiling point (100°C)"], correctAnswer: 2, explanation: "Water's anomalous (non-linear) expansion makes it unsuitable as thermometric liquid." },
            { id: "np9-ch7-10", question: "A thermometer has a narrow capillary tube so that it:", options: ["quickly responds to temperature changes", "can read the maximum temperature", "gives a large change for a given temperature rise", "can measure a large range of temperature"], correctAnswer: 2, explanation: "Narrow bore causes liquid to move more for same volume change, giving larger readings." },
            { id: "np9-ch7-11", question: "Which thermometer is most suitable for recording rapidly varying temperature?", options: ["Thermocouple thermometer", "Mercury-in-glass laboratory thermometer", "Alcohol-in-glass thermometer", "Mercury-in-glass clinical thermometer"], correctAnswer: 0, explanation: "Thermocouple has the fastest response time for rapidly changing temperatures." }
          ] },
          { id: "new-ch8", name: "Magnetism", importantTopics: ["Magnetic Materials", "Magnetic Field Lines", "Magnetization Methods", "Electromagnets"], keyConcepts: ["Permanent & Temporary Magnets", "Domain Theory", "Magnetic Shielding"], formulas: [], mcqs: [
            { id: "np9-ch8-1", question: "Which one of the following is not a magnetic material?", options: ["Cobalt", "Iron", "Aluminium", "Nickel"], correctAnswer: 2, explanation: "Aluminium is paramagnetic, not a ferromagnetic material like cobalt, iron, and nickel." },
            { id: "np9-ch8-2", question: "Magnetic lines of force:", options: ["are always directed in a straight line", "cross one another", "enter into the north pole", "enter into the south pole"], correctAnswer: 3, explanation: "Magnetic field lines exit from north pole and enter into the south pole." },
            { id: "np9-ch8-3", question: "Permanent magnets cannot be made by:", options: ["soft iron", "steel", "neodymium", "alnico"], correctAnswer: 0, explanation: "Soft iron loses magnetism easily - used for temporary magnets, not permanent ones." },
            { id: "np9-ch8-4", question: "Permanent magnets are used in:", options: ["circuit breaker", "loudspeaker", "electric crane", "magnetic recording"], correctAnswer: 1, explanation: "Loudspeakers use permanent magnets to convert electrical signals to sound." },
            { id: "np9-ch8-5", question: "A common method used to magnetise a material is:", options: ["stroking", "hitting", "heating", "placing inside a solenoid having A.C"], correctAnswer: 0, explanation: "Stroking with a magnet is a common method to magnetise a material." },
            { id: "np9-ch8-6", question: "A magnetic compass is placed around a bar magnet at four points as shown in figure below. Which diagram would indicate the correct directions of the field?", options: ["Compass needles point away from N pole toward S pole", "Compass needles point from S to N outside the magnet", "All compass needles point in the same direction", "Compass needles point randomly"], correctAnswer: 0, explanation: "Compass needles align with field lines: away from N pole, toward S pole outside the magnet." },
            { id: "np9-ch8-7", question: "A steel rod is magnetised by double touch stroking method. Which one would be the correct polarity of the AB magnet?", options: ["A is N-pole and B is S-pole", "A is S-pole and B is N-pole", "Both are N-poles", "Both are S-poles"], correctAnswer: 1, explanation: "In double touch method, the polarity at each end is opposite to the stroking magnet's pole at that end." },
            { id: "np9-ch8-8", question: "The best material to protect a device from external magnetic field is:", options: ["wood", "plastic", "steel", "soft iron"], correctAnswer: 3, explanation: "Soft iron provides magnetic shielding by redirecting field lines through itself." }
          ] },
          { id: "new-ch9", name: "Nature of Science", importantTopics: ["Branches of Physics", "Scientific Method", "Physics in Technology"], keyConcepts: ["Observation", "Hypothesis", "Experimentation", "Theory", "Law"], formulas: [], mcqs: [
            { id: "np9-ch9-1", question: "Physics is a branch of:", options: ["social science", "life science", "physical science", "biological science"], correctAnswer: 2, explanation: "Physics is a branch of physical science dealing with matter and energy." },
            { id: "np9-ch9-2", question: "Which branch of science plays vital role in technology and engineering?", options: ["Biology", "Chemistry", "Geology", "Physics"], correctAnswer: 3, explanation: "Physics provides fundamental principles for technology and engineering." },
            { id: "np9-ch9-3", question: "Automobile technology is based on:", options: ["acoustics", "electromagnetism", "optics", "thermodynamics"], correctAnswer: 3, explanation: "Automobile engines work on principles of thermodynamics (heat engines)." },
            { id: "np9-ch9-4", question: "A user friendly software application of smart phone use:", options: ["laser technology", "information technology", "medical technology", "electronic technology"], correctAnswer: 1, explanation: "Smartphone apps are products of information technology." },
            { id: "np9-ch9-5", question: "The working of refrigeration and air conditioning involves:", options: ["electromagnetism", "mechanics", "climate science", "thermodynamics"], correctAnswer: 3, explanation: "Refrigeration and AC work on thermodynamic principles of heat transfer." },
            { id: "np9-ch9-6", question: "What is the ultimate truth of a scientific method?", options: ["Hypothesis", "Experimentation", "Theory", "Law"], correctAnswer: 3, explanation: "A scientific law is the ultimate truth - a well-tested statement of nature." },
            { id: "np9-ch9-7", question: "The statement 'If I do not study for this test, then I will not get good grade' is an example of:", options: ["theory", "observation", "prediction", "law"], correctAnswer: 2, explanation: "This is a prediction - an if-then statement about expected outcomes." },
            { id: "np9-ch9-8", question: "Which of the following are methods of investigation?", options: ["Observation", "Experimentation", "Research", "All of these"], correctAnswer: 3, explanation: "Observation, experimentation, and research are all methods of scientific investigation." },
            { id: "np9-ch9-9", question: "A hypothesis:", options: ["may or may not be testable", "is supported by evidence", "is a possible answer to a question", "all of these"], correctAnswer: 2, explanation: "A hypothesis is a possible answer to a scientific question that can be tested." },
            { id: "np9-ch9-10", question: "A graph of an organized data is an example of:", options: ["collecting data", "forming a hypothesis", "asking question", "analyzing data"], correctAnswer: 3, explanation: "Graphing organized data is part of analyzing data in the scientific method." },
            { id: "np9-ch9-11", question: "The colour of a door is brown. It is an example of:", options: ["observation", "hypothesis", "prediction", "law"], correctAnswer: 0, explanation: "Noting the colour of a door is a direct observation." }
          ] }
        ]
      },
      {
        id: "chemistry-9",
        name: "Chemistry (New Book)",
        icon: "🧪",
        pairingScheme: null,
        resources: [],
        chapters: [
          { id: "new-ch1", name: "States of Matter and Phase Changes", importantTopics: ["Chemistry Branches", "States of Matter", "Allotropy", "Solutions", "Solubility"], keyConcepts: ["Solid, Liquid, Gas, Plasma", "Elements, Compounds, Mixtures", "Saturated & Unsaturated Solutions"], formulas: [], mcqs: [
            { id: "nc9-ch1-1", question: "Matter is present in neon signs in the state of:", options: ["Supercritical fluid", "Plasma", "Gas", "Liquid crystal"], correctAnswer: 1, explanation: "Neon signs contain plasma - ionized gas that glows." },
            { id: "nc9-ch1-2", question: "Hazardous effects of shopping bags are studied in:", options: ["Geochemistry", "Inorganic Chemistry", "Analytical Chemistry", "Environmental Chemistry"], correctAnswer: 3, explanation: "Environmental Chemistry studies the effects of pollutants including plastic bags." },
            { id: "nc9-ch1-3", question: "The man-made polymer is:", options: ["Starch", "Polystyrene", "Protein", "Cellulose"], correctAnswer: 1, explanation: "Polystyrene is a synthetic polymer; the others are natural polymers." },
            { id: "nc9-ch1-4", question: "The crystals of which substance has rhombic shape?", options: ["Brass", "Sulphur", "Graphite", "Bronze"], correctAnswer: 1, explanation: "Sulphur exists in rhombic crystalline allotropic form." },
            { id: "nc9-ch1-5", question: "Which liquid among the following is a colloidal solution?", options: ["Milk", "Slaked lime used for white wash", "Vinegar solution", "Mixture of AgCl in water"], correctAnswer: 0, explanation: "Milk is a colloidal solution with fat globules dispersed in water." },
            { id: "nc9-ch1-6", question: "Which of the following is a heterogeneous mixture?", options: ["A solution of calcium hydroxide in water", "A solution of potassium nitrate in water", "Hot chocolate", "Concrete mixture"], correctAnswer: 3, explanation: "Concrete is a heterogeneous mixture of cement, sand, gravel and water." },
            { id: "nc9-ch1-7", question: "A state of matter whose properties are between those of liquids and crystalline solids:", options: ["Liquid crystal", "Supercritical fluid", "Plasma", "Dark matter"], correctAnswer: 0, explanation: "Liquid crystals have properties intermediate between liquids and crystalline solids." },
            { id: "nc9-ch1-8", question: "When the tiny visible particles of a substance are dispersed through a medium, the mixture is named as:", options: ["True solution", "Colloid", "Suspension", "Saturated solution"], correctAnswer: 2, explanation: "In a suspension, visible particles are dispersed but settle down over time." },
            { id: "nc9-ch1-9", question: "A solution of KClO₃ has a solubility of about 13.2g per 100 cm³ at 40°C. How its solubility will be affected, if you decrease the temperature?", options: ["The solubility will increase", "The solubility will decrease", "The solubility will first increase then decrease", "The solubility will remain same"], correctAnswer: 1, explanation: "Solubility of most solids decreases with decrease in temperature." },
            { id: "nc9-ch1-10", question: "You are studying the rate of hydrolysis of starch under different conditions of temperature. In which branch of chemistry this topic will fall?", options: ["Organic Chemistry", "Analytical Chemistry", "Biochemistry", "Physical Chemistry"], correctAnswer: 3, explanation: "Rate of reactions is studied in Physical Chemistry." }
          ] },
          { id: "new-ch2", name: "Atomic Structure", importantTopics: ["Discharge Tube", "Subatomic Particles", "Bohr's Model", "Isotopes", "Radioactivity"], keyConcepts: ["Electron, Proton, Neutron", "Atomic Number", "Mass Number", "Shells & Energy Levels"], formulas: ["N = A - Z", "Max electrons in shell = 2n²"], mcqs: [
            { id: "nc9-ch2-1", question: "How many electrons can be accommodated at the most in the third shell of the elements?", options: ["8", "18", "10", "32"], correctAnswer: 1, explanation: "Using 2n² formula: 2(3)² = 18 electrons." },
            { id: "nc9-ch2-2", question: "What information was obtained from discharge tube experiments?", options: ["Structure of atom was discovered", "Neutrons and protons were discovered", "Electrons and protons were discovered", "Presence of nucleus in an atom was discovered"], correctAnswer: 2, explanation: "Discharge tube experiments led to discovery of cathode rays (electrons) and canal rays (protons)." },
            { id: "nc9-ch2-3", question: "Why have isotopes not been shown in the periodic table?", options: ["Periodic table cannot accommodate a large number of isotopes", "Isotopes are not important enough", "All the isotopes have same atomic number; so there is no need to give them separate places", "Isotopes do not show periodic behavior"], correctAnswer: 2, explanation: "Isotopes have the same atomic number and periodic table is arranged by atomic number." },
            { id: "nc9-ch2-4", question: "Which particle is present in different number in the isotopes?", options: ["Electron", "Neutron", "Proton", "Both neutron and electron"], correctAnswer: 1, explanation: "Isotopes differ only in the number of neutrons." },
            { id: "nc9-ch2-5", question: "In which isotope of oxygen there are the equal number of protons, electrons and neutrons?", options: ["¹⁶O", "¹⁷O", "¹⁸O", "None of these"], correctAnswer: 0, explanation: "¹⁶O has 8 protons, 8 electrons and 8 neutrons - all equal." },
            { id: "nc9-ch2-6", question: "What will be the relative atomic mass of nitrogen given the abundances of its two isotopes, ¹⁴N and ¹⁵N are 99.64 and 0.36 respectively?", options: ["14.1200", "14.0210", "14.0021", "14.2100"], correctAnswer: 2, explanation: "RAM = (14 × 99.64 + 15 × 0.36)/100 = 14.0036 ≈ 14.0021" },
            { id: "nc9-ch2-7", question: "How is radiocarbon dating useful for archeologists?", options: ["It helps determine the age of organic matter", "It helps determine the composition of matter", "It helps determine the usefulness of matter", "It helps determine whether the matter is radioactive or not"], correctAnswer: 0, explanation: "Radiocarbon dating uses ¹⁴C decay to determine the age of organic remains." },
            { id: "nc9-ch2-8", question: "What does keep the particles present in the nucleus intact?", options: ["Particles are held together by strong nuclear force", "Particles are held together by weak nuclear force", "Particles are held together by electrostatic force", "Particles are held together by dipolar force"], correctAnswer: 0, explanation: "Strong nuclear force holds protons and neutrons together in the nucleus." },
            { id: "nc9-ch2-9", question: "How do electrons keep themselves away from the oppositely charged nucleus?", options: ["By keeping themselves stationary", "By revolving around the nucleus", "Due to their wave-like nature", "A magnetic field around the nucleus keeps them away"], correctAnswer: 1, explanation: "Electrons revolve around the nucleus in orbits, their kinetic energy prevents them from falling in." },
            { id: "nc9-ch2-10", question: "Rubidium consists of two isotopes ⁸⁵Rb and ⁸⁷Rb. The percent abundance of the light isotope is 72.2%. What is the percent abundance of the heavier isotope?", options: ["72%", "15%", "27.8%", "37%"], correctAnswer: 2, explanation: "100% - 72.2% = 27.8% for the heavier isotope." }
          ] },
          { id: "new-ch3", name: "Chemical Bonding", importantTopics: ["Ionic Bonds", "Covalent Bonds", "Metallic Bonds", "Coordinate Covalent Bond", "Properties"], keyConcepts: ["Octet Rule", "Electronegativity", "Intermolecular Forces", "Hydrogen Bonding"], formulas: [], mcqs: chemistry9NewCh3MCQs },
          { id: "new-ch4", name: "Stoichiometry", importantTopics: ["Mole Concept", "Avogadro's Number", "Empirical & Molecular Formula", "Chemical Calculations"], keyConcepts: ["Molar Mass", "Percentage Composition", "Stoichiometric Calculations"], formulas: ["No. of moles = mass/molar mass", "No. of particles = n × Nₐ"], mcqs: chemistry9NewCh4MCQs },
          { id: "new-ch5", name: "Energetics", importantTopics: ["Exothermic & Endothermic Reactions", "Enthalpy", "Bond Energy", "Activation Energy"], keyConcepts: ["Enthalpy Change", "Energy Diagrams", "Hess's Law", "Calorimetry"], formulas: ["ΔH = ΣBond energies(broken) - ΣBond energies(formed)"], mcqs: chemistry9NewCh5MCQs },
          { id: "new-ch6", name: "Equilibria", importantTopics: ["Reversible Reactions", "Dynamic Equilibrium", "Le Chatelier's Principle", "Factors Affecting Equilibrium"], keyConcepts: ["Equilibrium Constant", "Effect of Temperature, Pressure, Concentration"], formulas: ["Kc = [Products]/[Reactants]"], mcqs: chemistry9NewCh6MCQs },
          { id: "new-ch7", name: "Acid Base Chemistry", importantTopics: ["Acids & Bases", "Neutralization", "pH Scale", "Salts"], keyConcepts: ["Bronsted-Lowry Theory", "Conjugate Acid-Base Pairs", "Indicators"], formulas: ["pH = -log[H⁺]"], mcqs: chemistry9NewCh7MCQs },
          { id: "new-ch8", name: "Periodic Table and Periodicity", importantTopics: ["Modern Periodic Table", "Groups & Periods", "Periodic Trends"], keyConcepts: ["Atomic Radius", "Ionization Energy", "Electron Affinity", "Electronegativity"], formulas: [], mcqs: chemistry9NewCh8MCQs },
          { id: "new-ch9", name: "Group Properties and Elements", importantTopics: ["Alkali Metals", "Alkaline Earth Metals", "Halogens", "Noble Gases", "Transition Metals"], keyConcepts: ["Reactivity Trends", "Physical Properties", "Chemical Properties"], formulas: [], mcqs: chemistry9NewCh9MCQs },
          { id: "new-ch10", name: "Environmental Chemistry", importantTopics: ["Air Pollution", "Greenhouse Effect", "Acid Rain", "Ozone Depletion"], keyConcepts: ["Pollutants", "Catalytic Converter", "Smog", "Global Warming"], formulas: [], mcqs: chemistry9NewCh10MCQs },
          { id: "new-ch11", name: "Hydrocarbons", importantTopics: ["Alkanes", "Alkenes", "Alkynes", "Combustion", "Substitution"], keyConcepts: ["Saturated & Unsaturated", "Halogenation", "Cracking"], formulas: ["CₙH₂ₙ₊₂ (Alkanes)", "CₙH₂ₙ (Alkenes)"], mcqs: chemistry9NewCh11MCQs },
          { id: "new-ch12", name: "Empirical Data Collection and Analysis", importantTopics: ["SI Units", "Scientific Notation", "Measurement", "Prefixes"], keyConcepts: ["Base Units", "Derived Units", "Precision", "Accuracy"], formulas: ["K = °C + 273"], mcqs: chemistry9NewCh12MCQs },
          { id: "new-ch13", name: "Laboratory and Practical Skills", importantTopics: ["Lab Safety", "Chemical Hazards", "Safety Equipment", "Proper Procedures"], keyConcepts: ["Warning Labels", "Corrosive Chemicals", "Dilution", "Fire Safety"], formulas: [], mcqs: chemistry9NewCh13MCQs }
        ]
      },
      {
        id: "math-9",
        name: "Mathematics (New Book)",
        icon: "📐",
        pairingScheme: null,
        resources: [],
        chapters: [
          { id: "new-ch1", name: "Real Numbers", importantTopics: ["Rational & Irrational Numbers", "Properties of Real Numbers", "Radicals & Indices", "Applications"], keyConcepts: ["Terminating & Non-terminating Decimals", "Number Line", "Surds", "Rationalization"], formulas: ["a(b+c) = ab + ac", "√a × √b = √(ab)", "(a+b)(a-b) = a²-b²"], mcqs: [
            { id: "nm9-ch1-1", question: "√7 is:", options: ["integer", "rational number", "irrational number", "natural number"], correctAnswer: 2, explanation: "7 is not a perfect square, so √7 is an irrational number." },
            { id: "nm9-ch1-2", question: "π and e are:", options: ["natural numbers", "integers", "rational numbers", "irrational numbers"], correctAnswer: 3, explanation: "Both π and e are non-terminating, non-recurring decimals — irrational numbers." },
            { id: "nm9-ch1-3", question: "If n is not a perfect square, then √n is:", options: ["rational number", "natural number", "integer", "irrational number"], correctAnswer: 3, explanation: "Square root of a non-perfect square is always irrational." },
            { id: "nm9-ch1-4", question: "√3 + √5 is:", options: ["whole number", "integer", "rational number", "irrational number"], correctAnswer: 3, explanation: "Sum of two irrational numbers (√3 and √5) is irrational." },
            { id: "nm9-ch1-5", question: "For all x ∈ R, x = x is called:", options: ["reflexive property", "transitive property", "symmetric property", "trichotomy property"], correctAnswer: 0, explanation: "Every element equals itself — this is the reflexive property." },
            { id: "nm9-ch1-6", question: "Let a, b, c ∈ R, then a > b and b > c ⇒ a > c is called ______ property:", options: ["trichotomy", "transitive", "additive", "multiplicative"], correctAnswer: 1, explanation: "If a > b and b > c implies a > c, this is the transitive property." },
            { id: "nm9-ch1-7", question: "2ˣ × 8ˣ = 64 then x =", options: ["3/2", "3/4", "5/6", "2/3"], correctAnswer: 0, explanation: "2ˣ × (2³)ˣ = 2⁶ → 2ˣ × 2³ˣ = 2⁶ → 2⁴ˣ = 2⁶ → 4x = 6, x = 3/2." },
            { id: "nm9-ch1-8", question: "Let a, b ∈ R, then a = b and b = a is called ______ property:", options: ["reflexive", "symmetric", "transitive", "additive"], correctAnswer: 1, explanation: "If a = b implies b = a, this is the symmetric property." },
            { id: "nm9-ch1-9", question: "√75 + √27 =", options: ["√102", "9√3", "5√3", "8√3"], correctAnswer: 3, explanation: "√75 = 5√3, √27 = 3√3, so 5√3 + 3√3 = 8√3." },
            { id: "nm9-ch1-10", question: "The product of (3 + √5)(3 − √5) is:", options: ["prime number", "odd number", "irrational number", "rational number"], correctAnswer: 3, explanation: "(3+√5)(3−√5) = 9 − 5 = 4, which is a rational number." }
          ] },
          { id: "new-ch2", name: "Logarithms", importantTopics: ["Scientific Notation", "Common & Natural Logarithm", "Laws of Logarithm", "Applications"], keyConcepts: ["Characteristic & Mantissa", "Product, Quotient, Power Laws", "Antilogarithm"], formulas: ["log(ab) = log a + log b", "log(a/b) = log a - log b", "log(aⁿ) = n log a"], mcqs: [
            { id: "nm9-ch2-1", question: "The standard form of 5.2 × 10⁶ is:", options: ["52,000", "520,000", "5,200,000", "52,000,000"], correctAnswer: 2, explanation: "5.2 × 10⁶ = 5,200,000." },
            { id: "nm9-ch2-2", question: "Scientific notation of 0.00034 is:", options: ["3.4 × 10³", "3.4 × 10⁻⁴", "3.4 × 10⁴", "3.4 × 10⁻³"], correctAnswer: 1, explanation: "0.00034 = 3.4 × 10⁻⁴." },
            { id: "nm9-ch2-3", question: "The base of common logarithm is:", options: ["2", "10", "5", "e"], correctAnswer: 1, explanation: "Common logarithm uses base 10." },
            { id: "nm9-ch2-4", question: "log₂ 2³ =", options: ["1", "2", "5", "3"], correctAnswer: 3, explanation: "log₂ 2³ = 3 log₂ 2 = 3 × 1 = 3." },
            { id: "nm9-ch2-5", question: "log 100 =", options: ["2", "3", "10", "1"], correctAnswer: 0, explanation: "log₁₀(100) = log₁₀(10²) = 2." },
            { id: "nm9-ch2-6", question: "If log 2 = 0.3010, then log 200 is:", options: ["1.3010", "0.6010", "2.3010", "2.6010"], correctAnswer: 2, explanation: "log 200 = log(2 × 100) = log 2 + log 100 = 0.3010 + 2 = 2.3010." },
            { id: "nm9-ch2-7", question: "log(0) =", options: ["positive", "negative", "zero", "undefined"], correctAnswer: 3, explanation: "log(0) is undefined because no power of 10 equals 0." },
            { id: "nm9-ch2-8", question: "log 10,000 =", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "log₁₀(10,000) = log₁₀(10⁴) = 4." },
            { id: "nm9-ch2-9", question: "log 5 + log 3 =", options: ["log 0", "log 2", "log(5/3)", "log 15"], correctAnswer: 3, explanation: "By product law: log 5 + log 3 = log(5 × 3) = log 15." },
            { id: "nm9-ch2-10", question: "3⁴ = 81 in logarithmic form is:", options: ["log₃ 4 = 81", "log₄ 3 = 81", "log₃ 81 = 4", "log₄ 81 = 3"], correctAnswer: 2, explanation: "3⁴ = 81 converts to log₃ 81 = 4." }
          ] },
          { id: "new-ch3", name: "Set and Functions", importantTopics: ["Set Builder Form", "Power Set", "Venn Diagrams", "Cartesian Product", "Functions"], keyConcepts: ["Union, Intersection, Difference", "Complement", "Injective, Surjective, Bijective"], formulas: ["n(A∪B) = n(A) + n(B) - n(A∩B)", "|A×B| = |A| × |B|"], mcqs: [
            { id: "nm9-ch3-1", question: "The set builder form of the set {1, 1/3, 1/5, 1/7 …} is:", options: ["{x | x = 1/n, n ∈ W}", "{x | x = 1/(2n+1), n ∈ W}", "{x | x = 1/(n+1), n ∈ W}", "{x | x = 2n+1, n ∈ W}"], correctAnswer: 1, explanation: "For n=0,1,2,3…: 1/(2(0)+1)=1, 1/(2(1)+1)=1/3, 1/5, 1/7… matches the set." },
            { id: "nm9-ch3-2", question: "If A = {}, then P(A) is:", options: ["{}", "{1}", "{{}}", "∅"], correctAnswer: 2, explanation: "Power set of empty set = {∅} = {{}}, which has one element." },
            { id: "nm9-ch3-3", question: "If U = {1,2,3,4,5}, A = {1,2,3} and B = {3,4,5}, then U − (A ∩ B) is:", options: ["{1,2,4,5}", "{2,3}", "{1,3,4,5}", "{1,2,3}"], correctAnswer: 0, explanation: "A ∩ B = {3}, so U − {3} = {1,2,4,5}." },
            { id: "nm9-ch3-4", question: "If A and B are overlapping sets, then n(A−B) is equal to:", options: ["n(A)", "n(B)", "A ∩ B", "n(A) − n(A ∩ B)"], correctAnswer: 3, explanation: "n(A−B) = n(A) − n(A ∩ B) for overlapping sets." },
            { id: "nm9-ch3-5", question: "If A ⊆ B and B−A ≠ ∅, then n(B−A) is equal to:", options: ["0", "n(B)", "n(A)", "n(B) − n(A)"], correctAnswer: 3, explanation: "Since A ⊆ B, B−A contains elements in B not in A, so n(B−A) = n(B) − n(A)." },
            { id: "nm9-ch3-6", question: "If n(A ∪ B) = 50, n(A) = 30 and n(B) = 35, then n(A ∩ B) =", options: ["23", "15", "9", "40"], correctAnswer: 1, explanation: "n(A∩B) = n(A) + n(B) − n(A∪B) = 30 + 35 − 50 = 15." },
            { id: "nm9-ch3-7", question: "If A = {1,2,3,4} and B = {x,y,z}, then cartesian product of A and B contains exactly ______ elements.", options: ["13", "12", "10", "6"], correctAnswer: 1, explanation: "|A×B| = |A| × |B| = 4 × 3 = 12." },
            { id: "nm9-ch3-8", question: "If f(x) = x² − 3x + 2, then the value of f(a+1) is equal to:", options: ["a+1", "a²+1", "a²+2a+1", "a²−a"], correctAnswer: 3, explanation: "f(a+1) = (a+1)² − 3(a+1) + 2 = a²+2a+1 − 3a−3 + 2 = a²−a." },
            { id: "nm9-ch3-9", question: "Given that f(x) = 3x + 1, if f(x) = 28, then the value of x is:", options: ["9", "27", "3", "18"], correctAnswer: 0, explanation: "3x + 1 = 28 → 3x = 27 → x = 9." },
            { id: "nm9-ch3-10", question: "Let A={1,2,3} and B={a,b}, f={(1,a),(2,b),(3,b)}, then which statement is true?", options: ["f is injective", "f is surjective", "f is bijective", "f is into only"], correctAnswer: 1, explanation: "Every element of B is mapped to (a←1, b←2,3), so f is surjective (onto)." }
          ] },
          { id: "new-ch4", name: "Factorization and Algebraic Manipulation", importantTopics: ["Common Factors", "Perfect Squares", "HCF & LCM", "Cube Factorization"], keyConcepts: ["Factor Theorem", "Difference/Sum of Cubes", "Square Root of Expression"], formulas: ["(a±b)³ = a³±3a²b+3ab²±b³", "a³−b³ = (a−b)(a²+ab+b²)", "LCM × HCF = Product"], mcqs: [
            { id: "nm9-ch4-1", question: "The factorization of 12x + 36 is:", options: ["12(x+3)", "12(3x)", "12(3x+1)", "x(12+36x)"], correctAnswer: 0, explanation: "12x + 36 = 12(x + 3)." },
            { id: "nm9-ch4-2", question: "The factors of 4x² − 12x + 9 are:", options: ["(2x+3)²", "(2x−3)²", "(2x−3)(2x+3)", "(2+3x)(2−3x)²"], correctAnswer: 1, explanation: "4x² − 12x + 9 = (2x)² − 2(2x)(3) + 3² = (2x−3)²." },
            { id: "nm9-ch4-3", question: "The HCF of a³b³ and ab² is:", options: ["a³b³", "ab²", "a⁴b⁵", "a²b"], correctAnswer: 1, explanation: "HCF = a^min(3,1) × b^min(3,2) = ab²." },
            { id: "nm9-ch4-4", question: "The LCM of 16x², 4x and 30xy is:", options: ["480x³y", "240xy", "240x²y", "120x⁴y"], correctAnswer: 2, explanation: "LCM of coefficients: LCM(16,4,30)=240. Variables: x² and y. So 240x²y." },
            { id: "nm9-ch4-5", question: "Product of LCM and HCF = ______ of two polynomials.", options: ["sum", "difference", "product", "quotient"], correctAnswer: 2, explanation: "LCM × HCF = Product of the two polynomials." },
            { id: "nm9-ch4-6", question: "The square root of x² − 6x + 9 is:", options: ["±(x−3)", "±(x+3)", "x−3", "x+3"], correctAnswer: 0, explanation: "x² − 6x + 9 = (x−3)², so √ = ±(x−3)." },
            { id: "nm9-ch4-7", question: "The LCM of (a−b)² and (a−b)³ is:", options: ["(a−b)²", "(a−b)³", "(a−b)⁴", "(a−b)⁶"], correctAnswer: 1, explanation: "LCM takes highest power: (a−b)³." },
            { id: "nm9-ch4-8", question: "Factorization of x³ + 3x² + 3x + 1 is:", options: ["(x+1)³", "(x−1)³", "(x+1)(x²+x+1)", "(x−1)(x²−x+1)"], correctAnswer: 0, explanation: "x³+3x²+3x+1 = (x+1)³ by the cube formula." },
            { id: "nm9-ch4-9", question: "Cubic polynomial has degree:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "A cubic polynomial has degree 3." },
            { id: "nm9-ch4-10", question: "One of the factors of x³ − 27 is:", options: ["x−3", "x+3", "x²−3x+9", "Both a and c"], correctAnswer: 3, explanation: "x³−27 = (x−3)(x²+3x+9), so both x−3 and x²+3x+9 are factors. Note: option c shows x²−3x+9 but the textbook answer is 'Both a and c'." }
          ] },
          { id: "new-ch5", name: "Linear Equations and Inequalities", importantTopics: ["Linear Equations", "Linear Inequalities", "Graphing", "Feasible Region"], keyConcepts: ["Solution Set", "Associated Equation", "Half Planes", "Corner Point", "Objective Function"], formulas: [], mcqs: [
            { id: "nm9-ch5-1", question: "In the following, linear equation is:", options: ["5x > 7", "4x − 2 < 1", "2x + 1 = 1", "4 = 1 + 3"], correctAnswer: 2, explanation: "2x + 1 = 1 is a linear equation (contains = sign and variable)." },
            { id: "nm9-ch5-2", question: "Solution of 5x − 10 = 10 is:", options: ["0", "50", "4", "−4"], correctAnswer: 2, explanation: "5x − 10 = 10 → 5x = 20 → x = 4." },
            { id: "nm9-ch5-3", question: "If 7x + 4 < 6x + 6, then x belongs to the interval:", options: ["(2, ∞)", "[2, ∞)", "(−∞, 2)", "(−∞, 2]"], correctAnswer: 2, explanation: "7x + 4 < 6x + 6 → x < 2, so x ∈ (−∞, 2)." },
            { id: "nm9-ch5-4", question: "A vertical line divides the plane into:", options: ["left half plane", "right half plane", "full plane", "two half planes"], correctAnswer: 3, explanation: "A vertical line divides the plane into two half planes (left and right)." },
            { id: "nm9-ch5-5", question: "The linear equation formed out of the linear inequality is called:", options: ["linear equation", "associated equation", "quadratic equation", "none of these"], correctAnswer: 1, explanation: "The equation obtained by replacing inequality sign with = is called the associated equation." },
            { id: "nm9-ch5-6", question: "3x + 4 < 0 is:", options: ["equation", "inequality", "not inequality", "identity"], correctAnswer: 1, explanation: "3x + 4 < 0 contains < sign, so it is an inequality." },
            { id: "nm9-ch5-7", question: "Corner point is also called:", options: ["code", "vertex", "curve", "region"], correctAnswer: 1, explanation: "A corner point of a feasible region is also called a vertex." },
            { id: "nm9-ch5-8", question: "(0,0) is solution of inequality:", options: ["4x + 5y > 8", "3x + y > 6", "−2x + 3y < 0", "x + y > 4"], correctAnswer: 2, explanation: "Substituting (0,0): −2(0)+3(0) = 0 < 0 ✓. The others give 0 > positive, which is false." },
            { id: "nm9-ch5-9", question: "The solution region restricted to the first quadrant is called:", options: ["objective region", "feasible region", "solution region", "constraints region"], correctAnswer: 1, explanation: "The feasible region is the solution region restricted to given constraints (usually first quadrant)." },
            { id: "nm9-ch5-10", question: "A function that is to be maximized or minimized is called:", options: ["solution function", "objective function", "feasible function", "none of these"], correctAnswer: 1, explanation: "In linear programming, the function to optimize is called the objective function." }
          ] },
          { id: "new-ch6", name: "Trigonometry", importantTopics: ["Radian & Degree Conversion", "Trigonometric Ratios", "Identities", "Heights & Distances"], keyConcepts: ["sin, cos, tan and reciprocals", "Pythagorean Identity", "Complementary Angles"], formulas: ["sin²θ + cos²θ = 1", "sec²θ − tan²θ = 1", "π rad = 180°"], mcqs: [
            { id: "nm9-ch6-1", question: "The value of tan⁻¹(2) in radians is:", options: ["π/2", "3π/2", "0.4636π", "0.4636"], correctAnswer: 3, explanation: "tan⁻¹(2) ≈ 1.1071 radians ≈ 0.4636 (not multiplied by π)." },
            { id: "nm9-ch6-2", question: "In a right triangle, hypotenuse is 13 units and θ = 30°. The length of the opposite side is:", options: ["6.5 units", "7.5 units", "6 units", "5 units"], correctAnswer: 0, explanation: "opposite = hypotenuse × sin 30° = 13 × 0.5 = 6.5 units." },
            { id: "nm9-ch6-3", question: "A person standing 50 m away from a building sees the top at angle of elevation 45°. Height of the building is:", options: ["50 m", "25 m", "35 m", "70 m"], correctAnswer: 0, explanation: "tan 45° = height/50 → height = 50 × 1 = 50 m." },
            { id: "nm9-ch6-4", question: "sec²θ − tan²θ =", options: ["sin²θ", "1", "cos²θ", "cot²θ"], correctAnswer: 1, explanation: "This is a standard Pythagorean identity: sec²θ − tan²θ = 1." },
            { id: "nm9-ch6-5", question: "If sinθ = 3/5 and θ is acute, cos²θ =", options: ["7/25", "24/25", "16/25", "4/25"], correctAnswer: 2, explanation: "cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25." },
            { id: "nm9-ch6-6", question: "5π/24 rad = ______ degrees:", options: ["30°", "37.5°", "45°", "52.5°"], correctAnswer: 1, explanation: "5π/24 × (180/π) = 5×180/24 = 900/24 = 37.5°." },
            { id: "nm9-ch6-7", question: "292.5° = ______ rad:", options: ["17π/6", "17π/4", "1.6π", "1.625π"], correctAnswer: 3, explanation: "292.5 × π/180 = 292.5π/180 = 1.625π." },
            { id: "nm9-ch6-8", question: "Which of the following is a valid identity?", options: ["cos(π/2 − θ) = sinθ", "cos(π/2 − θ) = cosθ", "cos(π/2 − θ) = secθ", "cos(π/2 − θ) = cosecθ"], correctAnswer: 0, explanation: "cos(90° − θ) = sinθ is the complementary angle identity." },
            { id: "nm9-ch6-9", question: "sin 60° =", options: ["1", "1/2", "√3²", "√3/2"], correctAnswer: 3, explanation: "sin 60° = √3/2 ≈ 0.866." },
            { id: "nm9-ch6-10", question: "cos²(100π) + sin²(100π) =", options: ["1", "2", "3", "4"], correctAnswer: 0, explanation: "sin²x + cos²x = 1 for any value of x." }
          ] },
          { id: "new-ch7", name: "Coordinate Geometry", importantTopics: ["Distance Formula", "Midpoint", "Slope", "Equation of Line Forms"], keyConcepts: ["Slope-Intercept Form", "Point-Slope Form", "Symmetric Form", "Normal Form", "Parallel & Perpendicular Lines"], formulas: ["d = √((x₂−x₁)²+(y₂−y₁)²)", "m = (y₂−y₁)/(x₂−x₁)", "y = mx + c"], mcqs: [
            { id: "nm9-ch7-1", question: "The equation of a straight line in the slope-intercept form is written as:", options: ["y = m(x+c)", "y − y₁ = m(x − x₁)", "y = c + mx", "ax + by + c = 0"], correctAnswer: 2, explanation: "Slope-intercept form: y = mx + c (or y = c + mx)." },
            { id: "nm9-ch7-2", question: "The gradients of two parallel lines are:", options: ["equal", "zero", "negative reciprocals of each other", "always undefined"], correctAnswer: 0, explanation: "Parallel lines have equal slopes (gradients)." },
            { id: "nm9-ch7-3", question: "If the product of the gradients of two lines is −1, then the lines are:", options: ["Parallel", "Perpendicular", "Collinear", "Coincident"], correctAnswer: 1, explanation: "m₁ × m₂ = −1 means the lines are perpendicular." },
            { id: "nm9-ch7-4", question: "Distance between two points P(1,2) and Q(4,6) is:", options: ["5", "6", "√13", "4"], correctAnswer: 0, explanation: "d = √((4−1)²+(6−2)²) = √(9+16) = √25 = 5." },
            { id: "nm9-ch7-5", question: "The midpoint of a line segment with endpoints (−2,4) and (6,−2) is:", options: ["(4,2)", "(2,1)", "(1,1)", "(0,0)"], correctAnswer: 1, explanation: "Midpoint = ((−2+6)/2, (4+(−2))/2) = (2, 1)." },
            { id: "nm9-ch7-6", question: "A line passing through points (1,2) and (4,5) is:", options: ["y = x + 1", "y = 2x + 3", "y = 3x − 2", "y = x + 2"], correctAnswer: 0, explanation: "Slope = (5−2)/(4−1) = 1. Using point (1,2): y − 2 = 1(x − 1) → y = x + 1." },
            { id: "nm9-ch7-7", question: "The equation of a line in point-slope form is:", options: ["y = m(x+c)", "y − y₁ = m(x − x₁)", "y = c + mx", "ax + by + c = 0"], correctAnswer: 1, explanation: "Point-slope form: y − y₁ = m(x − x₁)." },
            { id: "nm9-ch7-8", question: "2x + 3y − 6 = 0 in the slope-intercept form is:", options: ["y = (−2/3)x + 2", "y = (2/3)x − 2", "y = (2/3)x + 1", "y = (−2/3)x − 2"], correctAnswer: 0, explanation: "3y = −2x + 6 → y = (−2/3)x + 2." },
            { id: "nm9-ch7-9", question: "The equation of a line in symmetric form is:", options: ["x/a + y/b = 1", "(x−x₁)/1 = (y−y₁)/m", "ax + by + c = 0", "y − y₁ = m(x − x₁)"], correctAnswer: 0, explanation: "The symmetric (intercept) form is x/a + y/b = 1." },
            { id: "nm9-ch7-10", question: "The equation of a line in normal form is:", options: ["y = mx + c", "x/a + y/b = 1", "(x−x₁)/cosα = (y−y₁)/sinα", "x cosα + y sinα = p"], correctAnswer: 3, explanation: "Normal form: x cosα + y sinα = p." }
          ] },
          { id: "new-ch8", name: "Logic", importantTopics: ["Inductive & Deductive Reasoning", "Logical Connectives", "Truth Tables", "Conditional & Contrapositive"], keyConcepts: ["Negation", "Conjunction", "Disjunction", "Conditional", "Biconditional", "Theorem vs Conjecture vs Axiom"], formulas: [], mcqs: [
            { id: "nm9-ch8-1", question: "Which of the following expressions is often related to inductive reasoning?", options: ["based on repeated experiments", "if and only if statements", "statement is proven by a theorem", "based on general principles"], correctAnswer: 0, explanation: "Inductive reasoning draws conclusions from repeated experiments/observations." },
            { id: "nm9-ch8-2", question: "Which of the following sentences describe deductive reasoning?", options: ["general conclusions from limited observations", "based on repeated experiments", "based on units of information that are accurate", "draw conclusion from well-known facts"], correctAnswer: 3, explanation: "Deductive reasoning draws conclusions from well-known, established facts." },
            { id: "nm9-ch8-3", question: "Which one of the following statements is true?", options: ["The set of integers is finite", "Sum of interior angles of any quadrilateral is always 180°", "22/7 ∉ Q'", "All isosceles triangles are equilateral triangles"], correctAnswer: 2, explanation: "22/7 is a rational number, so it does not belong to Q' (set of irrationals). This is true." },
            { id: "nm9-ch8-4", question: "Which statement best represents the negation of 'The stove is burning'?", options: ["the stove is not burning", "the stove is dim", "the stove is turned to low heat", "it is both burning and not burning"], correctAnswer: 0, explanation: "Negation simply reverses the truth value: 'The stove is not burning.'" },
            { id: "nm9-ch8-5", question: "The conjunction of two statements p and q is true when:", options: ["both p and q are false", "both p and q are true", "only q is true", "only p is true"], correctAnswer: 1, explanation: "p ∧ q is true only when both p and q are true." },
            { id: "nm9-ch8-6", question: "A conditional is regarded as false only when:", options: ["antecedent is true and consequent is false", "consequent is true and antecedent is false", "antecedent is true only", "consequent is false only"], correctAnswer: 0, explanation: "p → q is false only when p is true and q is false." },
            { id: "nm9-ch8-7", question: "Contrapositive of q → p is:", options: ["q → ~p", "~q → p", "~p → ~q", "~q → ~p"], correctAnswer: 2, explanation: "Contrapositive of q → p is ~p → ~q." },
            { id: "nm9-ch8-8", question: "The statement 'Every integer greater than 2 is a sum of two prime numbers' is:", options: ["theorem", "conjecture", "axiom", "postulate"], correctAnswer: 1, explanation: "This is Goldbach's conjecture — unproven but widely believed to be true." },
            { id: "nm9-ch8-9", question: "The statement 'A straight line can be drawn between any two points' is:", options: ["theorem", "conjecture", "axiom", "logic"], correctAnswer: 2, explanation: "This is Euclid's first postulate/axiom — accepted without proof." },
            { id: "nm9-ch8-10", question: "The statement 'The sum of the interior angles of a triangle is 180°' is:", options: ["converse", "theorem", "axiom", "conditional"], correctAnswer: 1, explanation: "This is a proven theorem in Euclidean geometry." }
          ] },
          { id: "new-ch9", name: "Similar Figures", importantTopics: ["Similar Polygons", "Area & Volume Ratios", "Regular Polygons", "Diagonals"], keyConcepts: ["Corresponding Sides Ratio", "Area ∝ (side)²", "Volume ∝ (side)³", "Exterior Angle = 360°/n"], formulas: ["Diagonals = n(n−3)/2", "Interior angle = (n−2)×180°/n", "Exterior angle = 360°/n"], mcqs: [
            { id: "nm9-ch9-1", question: "If two polygons are similar, then:", options: ["their corresponding angles are equal", "their areas are equal", "their volumes are equal", "their corresponding sides are equal"], correctAnswer: 0, explanation: "Similar polygons have equal corresponding angles (sides are proportional, not equal)." },
            { id: "nm9-ch9-2", question: "The ratio of the areas of two similar polygons is:", options: ["equal to ratio of perimeters", "equal to square of ratio of corresponding sides", "equal to cube of ratio of corresponding sides", "equal to sum of corresponding sides"], correctAnswer: 1, explanation: "Area ratio = (side ratio)² for similar polygons." },
            { id: "nm9-ch9-3", question: "If volumes of two similar solids are 125 cm³ and 27 cm³, the ratio of their corresponding heights is:", options: ["3:5", "5:3", "25:9", "9:25"], correctAnswer: 1, explanation: "Volume ratio = (height ratio)³. ∛(125/27) = 5/3, so height ratio = 5:3." },
            { id: "nm9-ch9-4", question: "The exterior angle of a regular pentagon is:", options: ["40°", "45°", "60°", "72°"], correctAnswer: 3, explanation: "Exterior angle = 360°/5 = 72°." },
            { id: "nm9-ch9-5", question: "A parallelogram has area 64 cm² and a similar one has area 144 cm². If a side of the smaller is 8 cm, the corresponding side of the larger is:", options: ["10 cm", "12 cm", "18 cm", "16 cm"], correctAnswer: 1, explanation: "Area ratio = 144/64 = 9/4. Side ratio = √(9/4) = 3/2. Larger side = 8 × 3/2 = 12 cm." },
            { id: "nm9-ch9-6", question: "The total number of diagonals in a polygon with 9 sides is:", options: ["18", "21", "25", "27"], correctAnswer: 3, explanation: "Diagonals = n(n−3)/2 = 9(9−3)/2 = 9×6/2 = 27." },
            { id: "nm9-ch9-7", question: "Two spheres are similar with radii ratio 4:5. If surface area of larger sphere is 500π cm², the surface area of the smaller is:", options: ["256π cm²", "320π cm²", "400π cm²", "405π cm²"], correctAnswer: 1, explanation: "Surface area ratio = (4/5)² = 16/25. Smaller SA = 500π × 16/25 = 320π cm²." },
            { id: "nm9-ch9-8", question: "A regular polygon has an exterior angle of 30°. How many diagonals does it have?", options: ["54", "90", "72", "108"], correctAnswer: 0, explanation: "n = 360/30 = 12 sides. Diagonals = 12(12−3)/2 = 12×9/2 = 54." },
            { id: "nm9-ch9-9", question: "In a regular hexagon, the ratio of the length of a diagonal to the side length is:", options: ["√3 : 1", "2 : 1", "3 : 2", "2 : 3"], correctAnswer: 0, explanation: "The shorter diagonal of a regular hexagon = side × √3, so ratio is √3 : 1." },
            { id: "nm9-ch9-10", question: "A regular polygon has an interior angle of 165°. How many sides does it have?", options: ["15", "16", "20", "24"], correctAnswer: 3, explanation: "Exterior angle = 180° − 165° = 15°. n = 360/15 = 24 sides." }
          ] },
          { id: "new-ch10", name: "Graphs of Functions", importantTopics: ["Linear Graphs", "Quadratic Graphs", "Cubic Graphs", "Exponential & Reciprocal Functions"], keyConcepts: ["Slope & Intercept", "Parabola Opening", "Growth vs Decay"], formulas: ["y = mx + c", "y = ax² + bx + c", "y = aˣ"], mcqs: [
            { id: "nm9-ch10-1", question: "x = 5 represents:", options: ["x-axis", "y-axis", "line parallel to x-axis", "line parallel to y-axis"], correctAnswer: 3, explanation: "x = 5 is a vertical line, parallel to the y-axis." },
            { id: "nm9-ch10-2", question: "Slope of the line y = 5x + 3 is:", options: ["3", "−3", "5", "−5"], correctAnswer: 2, explanation: "In y = mx + c, slope m = 5." },
            { id: "nm9-ch10-3", question: "The y-intercept of y = −2x − 1 is:", options: ["−2", "2", "−1", "1"], correctAnswer: 2, explanation: "In y = mx + c, y-intercept c = −1." },
            { id: "nm9-ch10-4", question: "The graph of y = x³ cuts the x-axis at:", options: ["x = 0", "x = 1", "x = −1", "x = 2"], correctAnswer: 0, explanation: "y = x³ = 0 when x = 0." },
            { id: "nm9-ch10-5", question: "The graph of 3ˣ represents:", options: ["growth", "decay", "both (a) and (b)", "a line"], correctAnswer: 0, explanation: "3ˣ with base > 1 represents exponential growth." },
            { id: "nm9-ch10-6", question: "The graph of y = −x² + 5 opens:", options: ["upward", "downward", "left side", "right side"], correctAnswer: 1, explanation: "Coefficient of x² is negative (−1), so the parabola opens downward." },
            { id: "nm9-ch10-7", question: "The graph of y = x² − 9 opens:", options: ["upward", "downward", "left side", "right side"], correctAnswer: 0, explanation: "Coefficient of x² is positive (+1), so the parabola opens upward." },
            { id: "nm9-ch10-8", question: "y = 5ˣ is ______ function:", options: ["linear", "quadratic", "cubic", "exponential"], correctAnswer: 3, explanation: "y = 5ˣ is an exponential function (variable in exponent)." },
            { id: "nm9-ch10-9", question: "Reciprocal function is:", options: ["y = 7ˣ", "y = 2/x", "y = 2x²", "y = 5x³"], correctAnswer: 1, explanation: "y = 2/x is a reciprocal function (y = k/x form)." },
            { id: "nm9-ch10-10", question: "y = −3x³ + 7 is ______ function:", options: ["exponential", "cubic", "linear", "reciprocal"], correctAnswer: 1, explanation: "Highest power of x is 3, so it's a cubic function." }
          ] },
          { id: "new-ch11", name: "Loci and Construction", importantTopics: ["Triangle Construction", "Locus Definitions", "Angle & Perpendicular Bisectors"], keyConcepts: ["Median", "Circumcircle", "Incircle", "Locus from Point/Line"], formulas: [], mcqs: [
            { id: "nm9-ch11-1", question: "A triangle can be constructed if the sum of the measure of any two sides is ______ the measure of the third side.", options: ["less than", "greater than", "equal to", "greater than and equal to"], correctAnswer: 1, explanation: "Triangle inequality: sum of any two sides must be greater than the third." },
            { id: "nm9-ch11-2", question: "An equilateral triangle ______.", options: ["can be isosceles", "can be right angled", "can be obtuse angled", "has each angle equal to 50°"], correctAnswer: 0, explanation: "An equilateral triangle (all sides equal) is also isosceles (at least two sides equal)." },
            { id: "nm9-ch11-3", question: "If the sum of the measures of two angles is less than 90°, then the triangle is:", options: ["equilateral", "acute angled", "obtuse angled", "right angled"], correctAnswer: 2, explanation: "If two angles sum to < 90°, the third angle > 90°, making it obtuse." },
            { id: "nm9-ch11-4", question: "The line segment joining the midpoint of a side to its opposite vertex in a triangle is called:", options: ["median", "perpendicular bisector", "angle bisector", "circle"], correctAnswer: 0, explanation: "A median connects a vertex to the midpoint of the opposite side." },
            { id: "nm9-ch11-5", question: "The angle bisectors of a triangle intersect at:", options: ["one point", "two points", "three points", "four points"], correctAnswer: 0, explanation: "All three angle bisectors of a triangle meet at one point (the incenter)." },
            { id: "nm9-ch11-6", question: "Locus of all points equidistant from a fixed point is:", options: ["circle", "perpendicular bisector", "angle bisector", "parallel lines"], correctAnswer: 0, explanation: "All points at equal distance from a fixed point form a circle." },
            { id: "nm9-ch11-7", question: "Locus of points equidistant from two fixed points is:", options: ["circle", "perpendicular bisector", "angle bisector", "parallel lines"], correctAnswer: 1, explanation: "The perpendicular bisector of the segment joining two points is the locus equidistant from both." },
            { id: "nm9-ch11-8", question: "Locus of points equidistant from a fixed line is/are:", options: ["circle", "perpendicular bisector", "angle bisector", "parallel lines"], correctAnswer: 3, explanation: "Points at equal distance from a line form parallel lines on both sides." },
            { id: "nm9-ch11-9", question: "Locus of points equidistant from two intersecting lines is:", options: ["circle", "perpendicular bisector", "angle bisector", "parallel lines"], correctAnswer: 2, explanation: "The angle bisectors of two intersecting lines are the locus equidistant from both." },
            { id: "nm9-ch11-10", question: "The set of all points farther than 2 km from a fixed point B is a region outside a circle of radius ______ and centre at B.", options: ["1 km", "1.9 km", "2 km", "2.1 km"], correctAnswer: 2, explanation: "Points farther than 2 km from B lie outside a circle of radius 2 km centered at B." }
          ] },
          { id: "new-ch12", name: "Information Handling", importantTopics: ["Data Types", "Frequency Distribution", "Central Tendency", "Graphical Representation"], keyConcepts: ["Discrete vs Continuous", "Mean, Median, Mode", "Histogram", "Frequency Polygon", "Range"], formulas: ["Mean = Σx/n", "Range = Max − Min"], mcqs: [
            { id: "nm9-ch12-1", question: "Which data takes only some specific values?", options: ["continuous data", "discrete data", "grouped data", "ungrouped data"], correctAnswer: 1, explanation: "Discrete data can only take specific, distinct values." },
            { id: "nm9-ch12-2", question: "The number of times a value occurs in a data is called:", options: ["frequency", "relative frequency", "class limit", "class boundaries"], correctAnswer: 0, explanation: "Frequency is the count of how many times a value occurs." },
            { id: "nm9-ch12-3", question: "Midpoint is also known as:", options: ["mean", "median", "class limit", "class mark"], correctAnswer: 3, explanation: "The midpoint of a class interval is called the class mark." },
            { id: "nm9-ch12-4", question: "Frequency polygon is also drawn/constructed by using:", options: ["histogram", "bar graph", "class boundaries", "class limit"], correctAnswer: 0, explanation: "A frequency polygon can be drawn by connecting midpoints of histogram bars." },
            { id: "nm9-ch12-5", question: "The difference between the greatest value and the smallest value is called:", options: ["class limits", "midpoint", "relative frequency", "range"], correctAnswer: 3, explanation: "Range = Maximum value − Minimum value." },
            { id: "nm9-ch12-6", question: "Measure of central tendency is used to find out the ______ of a data set.", options: ["class boundaries", "cumulative frequency", "middle or centre value", "frequency"], correctAnswer: 2, explanation: "Central tendency measures (mean, median, mode) find the middle/centre of data." },
            { id: "nm9-ch12-7", question: "If the mean of 5, 7, 8, 9 and x is 7.5, what will be the value of x?", options: ["10", "8", "8.5", "5.8"], correctAnswer: 2, explanation: "(5+7+8+9+x)/5 = 7.5 → 29+x = 37.5 → x = 8.5." },
            { id: "nm9-ch12-8", question: "Find the mode of the given data: 2, 5, 8, 9, 0, 1, 3, 7 and 10", options: ["5", "7", "0", "no mode"], correctAnswer: 3, explanation: "No value repeats, so there is no mode." },
            { id: "nm9-ch12-9", question: "In a data the value which appears or occurs most often is called:", options: ["mean", "mode", "median", "weighted mean"], correctAnswer: 1, explanation: "Mode is the most frequently occurring value." },
            { id: "nm9-ch12-10", question: "Find the median of the given data: 110, 125, 122, 130, 124, 127 and 120", options: ["124", "120", "125", "127"], correctAnswer: 0, explanation: "Arranged: 110,120,122,124,125,127,130. Middle (4th) value = 124." }
          ] },
          { id: "new-ch13", name: "Probability", importantTopics: ["Sample Space", "Events", "Relative Frequency", "Expected Frequency"], keyConcepts: ["Sample Point", "Favourable Outcome", "Equally Likely Events", "Probability Formula"], formulas: ["P(E) = n(E)/n(S)", "Expected Freq = P(E) × n"], mcqs: [
            { id: "nm9-ch13-1", question: "Each element of the sample space is called:", options: ["event", "experiment", "sample point", "outcomes"], correctAnswer: 2, explanation: "Each individual element in the sample space is called a sample point." },
            { id: "nm9-ch13-2", question: "An outcome which represents how many times we expect the things to happen is called:", options: ["outcomes", "favourable outcome", "sample space", "sample point"], correctAnswer: 1, explanation: "A favourable outcome is one that satisfies the desired condition." },
            { id: "nm9-ch13-3", question: "Which one tells us how often a specific event occurs relative to the total number of trials?", options: ["expected frequency", "sum of relative frequency", "relative frequency", "frequency"], correctAnswer: 2, explanation: "Relative frequency = frequency of event / total number of trials." },
            { id: "nm9-ch13-4", question: "Estimated probability of an event occurring is also known as:", options: ["relative frequency", "expected frequency", "class boundaries", "sum of expected frequency"], correctAnswer: 0, explanation: "Estimated (experimental) probability is the relative frequency." },
            { id: "nm9-ch13-5", question: "The sum of all expected frequencies is equal to the fixed number of:", options: ["trials", "relative frequencies", "outcomes", "events"], correctAnswer: 0, explanation: "Sum of all expected frequencies equals the total number of trials." },
            { id: "nm9-ch13-6", question: "The chance of occurrence of a particular event is called:", options: ["sample space", "estimated probability", "probability", "expected frequency"], correctAnswer: 2, explanation: "Probability measures the chance/likelihood of an event occurring." },
            { id: "nm9-ch13-7", question: "An event which will probably occur and has greater chance to occur is called:", options: ["equally likely event", "likely event", "unlikely event", "certain event"], correctAnswer: 1, explanation: "A likely event has a high probability of occurring." },
            { id: "nm9-ch13-8", question: "Find the total number of possible sample space when 4 dice are rolled:", options: ["6²", "6³", "6⁴", "6⁶"], correctAnswer: 2, explanation: "Each die has 6 outcomes, so 4 dice = 6⁴ = 1296 total outcomes." },
            { id: "nm9-ch13-9", question: "While rolling a pair of dice, what is the probability of double 2?", options: ["1/6", "1/3", "5/6", "1/36"], correctAnswer: 3, explanation: "P(2,2) = (1/6)(1/6) = 1/36." },
            { id: "nm9-ch13-10", question: "A card is chosen from a pack of 52 playing cards. Find the probability of getting no jack and king:", options: ["2/13", "11/13", "2/52", "11/52"], correctAnswer: 1, explanation: "There are 4 jacks + 4 kings = 8 cards. P(no jack or king) = 44/52 = 11/13." }
          ] }
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
          { id: "ch9", name: "Transport" }
        ]
      },
      {
        id: "english-9",
        name: "English (Old Book)",
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
          { id: "ch12", name: "Three Days to See" }
        ]
      },
      {
        id: "english-9-new",
        name: "English (New Book)",
        icon: "📚",
        chapters: [
          // ── PART A: Correct Form of Verb – by Tense ──
          { id: "part-a-present-indefinite", name: "Part A – Present Indefinite Tense", mcqs: e9PresentIndefiniteMCQs, notes: e9PresentIndefiniteNotes },
          { id: "part-a-present-continuous", name: "Part A – Present Continuous Tense", mcqs: e9PresentContinuousMCQs, notes: e9PresentContinuousNotes },
          { id: "part-a-present-perfect", name: "Part A – Present Perfect Tense", mcqs: e9PresentPerfectMCQs, notes: e9PresentPerfectNotes },
          { id: "part-a-present-perfect-continuous", name: "Part A – Present Perfect Continuous", mcqs: e9PresentPerfectContinuousMCQs, notes: e9PresentPerfectContinuousNotes },
          { id: "part-a-past-indefinite", name: "Part A – Past Indefinite Tense", mcqs: e9PastIndefiniteMCQs, notes: e9PastIndefiniteNotes },
          { id: "part-a-past-continuous", name: "Part A – Past Continuous Tense", mcqs: e9PastContinuousMCQs, notes: e9PastContinuousNotes },
          { id: "part-a-past-perfect", name: "Part A – Past Perfect Tense", mcqs: e9PastPerfectMCQs, notes: e9PastPerfectNotes },
          { id: "part-a-past-perfect-continuous", name: "Part A – Past Perfect Continuous", mcqs: e9PastPerfectContinuousMCQs, notes: e9PastPerfectContinuousNotes },
          { id: "part-a-future-indefinite", name: "Part A – Future Indefinite Tense", mcqs: e9FutureIndefiniteMCQs, notes: e9FutureIndefiniteNotes },
          { id: "part-a-future-continuous", name: "Part A – Future Continuous Tense", mcqs: e9FutureContinuousMCQs, notes: e9FutureContinuousNotes },
          { id: "part-a-future-perfect", name: "Part A – Future Perfect Tense", mcqs: e9FuturePerfectMCQs, notes: e9FuturePerfectNotes },
          { id: "part-a-future-perfect-continuous", name: "Part A – Future Perfect Continuous", mcqs: e9FuturePerfectContinuousMCQs, notes: e9FuturePerfectContinuousNotes },
          { id: "part-a-mixed", name: "Part A – Mixed Tenses Practice (Random 30 MCQs)", mcqs: e9AllTenseMCQs, notes: [
            "**Mixed Practice:** This section randomly picks 30 MCQs from ALL tenses each time.",
            "**Tip:** Identify the keyword first (now, yesterday, since, by, ago, always) to determine the tense.",
            "**Present:** always/daily → Indefinite, now → Continuous, already/just → Perfect, since/for → Perfect Continuous.",
            "**Past:** yesterday/ago → Indefinite, when → Continuous, before/after → Perfect, since/for (past) → Perfect Continuous.",
            "**Future:** tomorrow/next → Indefinite, at that time → Continuous, by/before → Perfect.",
          ]},
          // ── PART B: Correct Spellings ──
          { id: "part-b", name: "Part B – Correct Spellings (40 MCQs)", mcqs: e9SpellingMCQs, notes: e9SpellingNotes },
          // ── PART C: Synonyms, Antonyms & Meanings ──
          { id: "part-c", name: "Part C – Synonyms, Antonyms & Meanings (40 MCQs)", mcqs: e9VocabularyMCQs, notes: e9VocabularyNotes },
          // ── PART D: Grammar – by Category ──
          { id: "part-d-nouns-pronouns", name: "Part D – Nouns & Pronouns", mcqs: e9NounsPronounsMCQs, notes: e9NounsPronounsNotes },
          { id: "part-d-verbs-gerunds", name: "Part D – Verbs, Gerunds, Infinitives & Participles", mcqs: e9VerbsGerundsMCQs, notes: e9VerbsGerundsNotes },
          { id: "part-d-adverbs-clauses", name: "Part D – Adjectives, Adverbs, Phrases & Clauses", mcqs: e9AdverbsClausesMCQs, notes: e9AdverbsClausesNotes },
          { id: "part-d-prepositions", name: "Part D – Prepositions & Conjunctions", mcqs: e9PrepositionsConjunctionsMCQs, notes: e9PrepositionsConjunctionsNotes },
          { id: "part-d-sentences", name: "Part D – Sentence Structure & Conditionals", mcqs: e9SentenceConditionalsMCQs, notes: e9SentenceConditionalsNotes },
          { id: "part-d-figures", name: "Part D – Figures of Speech", mcqs: e9FiguresOfSpeechMCQs, notes: e9FiguresOfSpeechNotes },
          { id: "part-d-mixed", name: "Part D – Mixed Grammar Practice (Random 30 MCQs)", mcqs: e9AllGrammarMCQs, notes: [
            "**Mixed Practice:** This section randomly picks 30 MCQs from ALL grammar categories each time.",
            "**Categories covered:** Nouns, Pronouns, Verbs, Gerunds, Infinitives, Participles, Adverbs, Clauses, Phrases, Prepositions, Conjunctions, Conditionals, Figures of Speech.",
            "**Tip:** Read the question carefully – identify whether it asks about a word's type, clause type, or sentence type.",
          ]},
          // ── Most Repeated MCQs ──
          { id: "most-repeated", name: "🔴 Most Repeated MCQs (30 Past Paper Questions)", mcqs: e9MostRepeatedMCQs, notes: [
            "**These are the 30 most repeated MCQs** from Class 9 English past papers.",
            "**Frequency ranges from 2 to 7 times** – these questions appear again and again in board exams.",
            "**Covers all sections:** Verb Forms, Grammar, Vocabulary/Meanings, and Spellings.",
            "**Tip:** Memorize these thoroughly – they have the highest probability of appearing in your exam!",
          ]},
        ]
      },
      {
        id: "pak-studies-9",
        name: "Pakistan Studies",
        icon: "🇵🇰",
        chapters: [
          { id: "ch1", name: "Ideology of Pakistan" },
          { id: "ch2", name: "Making of Pakistan" },
          { id: "ch3", name: "Constitutional Development" }
        ]
      },
      {
        id: "islamiat-9",
        name: "Islamiat",
        icon: "☪️",
        chapters: [
          { id: "ch1", name: "Quran and Hadith" },
          { id: "ch2", name: "Iman and Basic Articles" },
          { id: "ch3", name: "Life of Prophet (PBUH)" }
        ]
      }
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
        pairingScheme: `
📋 PHYSICS CLASS 10 - PAIRING SCHEME 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 SECTION A - MCQs (12 Marks)
• 12 MCQs from all chapters (1 mark each)

📝 SECTION B - Short Questions (36 Marks)
Attempt 9 out of 12 questions (4 marks each)

Q.2: Chapter 10 + Chapter 11 (4 questions)
Q.3: Chapter 12 + Chapter 13 (4 questions)
Q.4: Chapter 14 + Chapter 15 + Chapter 16 + Chapter 17 + Chapter 18 (4 questions)

📝 SECTION C - Long Questions (27 Marks)
Attempt 3 out of 5 questions (9 marks each)

Q.5: Chapter 10 + Chapter 11
Q.6: Chapter 12 + Chapter 13
Q.7: Chapter 14 + Chapter 15
Q.8: Chapter 15 + Chapter 16
Q.9: Chapter 17 + Chapter 18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Marks: 75 | Time: 2 Hours 30 Minutes
        `,
        resources: [
          {
            id: "physics-10-book",
            name: "Physics 10 Textbook (Punjab Board)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1YNDI4pfDNlKZ5vkUG3FpBgZH8Vq4rD5c/view?usp=drivesdk"
          },
          {
            id: "physics-10-pairing",
            name: "Physics 10 Pairing Scheme 2026",
            type: "notes",
            driveLink: "https://drive.google.com/file/d/1I5w_bn0M_M41O-AoGkNqRWiDo0Ad7QOy/view?usp=drivesdk"
          }
        ],
        chapters: [
          {
            id: "ch10",
            name: "Simple Harmonic Motion and Waves",
            importantTopics: ["SHM Definition", "Time Period & Frequency", "Wave Types", "Wave Equation"],
            keyConcepts: ["Oscillation", "Amplitude", "Frequency", "Wavelength", "Transverse & Longitudinal Waves"],
            formulas: ["T = 2π√(l/g) (Simple Pendulum)", "v = fλ", "T = 1/f"],
            mcqs: [
              { id: "p10-ch10-1", question: "Which of the following is an example of simple harmonic motion?", options: ["The motion of simple pendulum", "The motion of ceiling fan", "The spinning of the Earth on its axis", "A bouncing ball on a floor"], correctAnswer: 0, explanation: "A simple pendulum executes SHM for small angular displacements." },
              { id: "p10-ch10-2", question: "If the mass of the bob of a pendulum is increased by a factor of 3, the period of the pendulum's motion will", options: ["Be increased by a factor of 2", "Remain the same", "Be decreased by a factor of 2", "Be decreased by a factor of 4"], correctAnswer: 1, explanation: "T = 2π√(l/g). The period depends on length and g, not on mass." },
              { id: "p10-ch10-3", question: "Which of the following devices can be used to produce both transverse and longitudinal waves?", options: ["A string", "A ripple tank", "A helical spring (slinky)", "A tuning fork"], correctAnswer: 2, explanation: "A slinky can demonstrate both transverse and longitudinal waves." },
              { id: "p10-ch10-4", question: "Waves transfer", options: ["Energy", "Frequency", "Wavelength", "Velocity"], correctAnswer: 0, explanation: "Waves transfer energy from one place to another without transferring matter." },
              { id: "p10-ch10-5", question: "Which of the following is a method of energy transfer?", options: ["Conduction", "Radiation", "Wave motion", "All of these"], correctAnswer: 3, explanation: "Conduction, radiation, and wave motion are all methods of energy transfer." },
              { id: "p10-ch10-6", question: "In a vacuum, all electromagnetic waves have the same", options: ["Speed", "Frequency", "Amplitude", "Wavelength"], correctAnswer: 0, explanation: "All electromagnetic waves travel at the speed of light (3 × 10⁸ m/s) in vacuum." },
              { id: "p10-ch10-7", question: "A large ripple tank with a vibrator working at a frequency of 30 Hz produces 25 complete waves in a distance of 50 cm. The velocity of the wave is", options: ["53 cm s⁻¹", "60 cm s⁻¹", "750 cm s⁻¹", "1500 cm s⁻¹"], correctAnswer: 1, explanation: "λ = 50/25 = 2 cm. v = fλ = 30 × 2 = 60 cm/s." },
              { id: "p10-ch10-8", question: "Which of the following characteristics of a wave is independent of the others?", options: ["Speed", "Frequency", "Amplitude", "Wavelength"], correctAnswer: 2, explanation: "Amplitude is independent of speed, frequency, and wavelength." },
              { id: "p10-ch10-9", question: "The relation between v, f and λ of a wave is", options: ["vf = λ", "fλ = v", "vλ = f", "v = λ / f"], correctAnswer: 1, explanation: "The wave equation: velocity = frequency × wavelength, i.e., v = fλ." }
            ],
            outsideExerciseMCQs: p10Ch10OutsideMCQs
          },
          {
            id: "ch11",
            name: "Sound",
            importantTopics: ["Nature of Sound", "Speed of Sound", "Echo", "Musical Sound"],
            keyConcepts: ["Longitudinal Wave", "Intensity", "Loudness", "Pitch", "Quality"],
            formulas: ["v = 331 + 0.6T (m/s in air)", "d = vt/2 (Echo distance)"],
            mcqs: [
              { id: "p10-ch11-1", question: "Which is an example of a longitudinal wave?", options: ["Sound wave", "Light wave", "Radiowave", "Water wave"], correctAnswer: 0, explanation: "Sound is a longitudinal mechanical wave where particles vibrate along the direction of propagation." },
              { id: "p10-ch11-2", question: "How does sound travel from its source to your ear?", options: ["By changes in air pressure", "By vibrations in wires or strings", "By electromagnetic wave", "By infrared waves"], correctAnswer: 0, explanation: "Sound travels as pressure variations (compressions and rarefactions) in air." },
              { id: "p10-ch11-3", question: "Which form of energy is sound?", options: ["Electrical", "Mechanical", "Thermal", "Chemical"], correctAnswer: 1, explanation: "Sound is a form of mechanical energy as it requires a medium to travel." },
              { id: "p10-ch11-4", question: "Astronauts in space need to communicate with each other by radio links because", options: ["Sound waves travel very slowly in space", "Sound waves travel very fast in space", "Sound waves cannot travel in space", "Sound waves have low frequency in space"], correctAnswer: 2, explanation: "Space is a vacuum and sound cannot travel without a medium." },
              { id: "p10-ch11-5", question: "The loudness of a sound is most closely related to its", options: ["Frequency", "Period", "Wavelength", "Amplitude"], correctAnswer: 3, explanation: "Loudness depends on the amplitude of the sound wave." },
              { id: "p10-ch11-6", question: "For a normal person, audible frequency range for sound wave lies between", options: ["10 Hz and 10 kHz", "20 Hz and 20 kHz", "25 Hz and 25 kHz", "30 Hz and 30 kHz"], correctAnswer: 1, explanation: "The human audible range is 20 Hz to 20,000 Hz (20 kHz)." },
              { id: "p10-ch11-7", question: "When the frequency of a sound wave is increased, which of the following will decrease? i. wavelength  ii. period  iii. amplitude", options: ["i only", "iii only", "i and ii only", "i and iii only"], correctAnswer: 2, explanation: "Increasing frequency decreases wavelength (v = fλ) and period (T = 1/f). Amplitude is independent." }
            ],
            outsideExerciseMCQs: p10Ch11OutsideMCQs
          },
          {
            id: "ch12",
            name: "Geometrical Optics",
            importantTopics: ["Reflection", "Refraction", "Lenses", "Mirrors", "Human Eye"],
            keyConcepts: ["Laws of Reflection", "Snell's Law", "Real & Virtual Images", "Focal Length"],
            formulas: ["1/f = 1/p + 1/q", "n = sin i / sin r", "Power = 1/f (in meters)"],
            mcqs: [
              { id: "p10-ch12-1", question: "Which of the following quantity is not changed during refraction of light?", options: ["Its direction", "Its speed", "Its frequency", "Its wavelength"], correctAnswer: 2, explanation: "During refraction, frequency remains constant while speed, wavelength, and direction change." },
              { id: "p10-ch12-2", question: "A converging mirror with a radius of 20 cm creates a real image 30 cm from the mirror. What is the object distance?", options: ["-5.0 cm", "-7.5 cm", "-15 cm", "-20 cm"], correctAnswer: 2, explanation: "f = R/2 = 10 cm. Using 1/f = 1/p + 1/q: 1/10 = 1/p + 1/30, so p = 15 cm." },
              { id: "p10-ch12-3", question: "An object is placed at the centre of curvature of a concave mirror. The image produced by the mirror is located", options: ["Out beyond the centre of curvature", "At the centre of curvature", "Between the centre of curvature and the focal point", "At the focal point"], correctAnswer: 1, explanation: "When object is at C, the image forms at C (same size, real, inverted)." },
              { id: "p10-ch12-4", question: "An object is 14 cm in front of a convex mirror. The image is 5.8 cm behind the mirror. What is the focal length of the mirror?", options: ["-4.1 cm", "-8.2 cm", "-9.9 cm", "-20 cm"], correctAnswer: 2, explanation: "Using 1/f = 1/p + 1/q: 1/f = 1/(-14) + 1/5.8 ≈ -0.101, f ≈ -9.9 cm." },
              { id: "p10-ch12-5", question: "The index of refraction depends on", options: ["The focal length", "The speed of light", "The image distance", "The object distance"], correctAnswer: 1, explanation: "Refractive index n = c/v, it depends on the speed of light in the medium." },
              { id: "p10-ch12-6", question: "Which type of image is formed by a concave lens on a screen?", options: ["Inverted and real", "Inverted and virtual", "Upright and real", "Upright and virtual"], correctAnswer: 3, explanation: "A concave (diverging) lens always forms a virtual, upright, diminished image." },
              { id: "p10-ch12-7", question: "Which type of image is produced by the converging lens of human eye if it views a distant object?", options: ["Real, erect, same size", "Real, inverted, diminished", "Virtual, erect, diminished", "Virtual, inverted, magnified"], correctAnswer: 1, explanation: "The eye lens forms a real, inverted, diminished image on the retina." },
              { id: "p10-ch12-8", question: "Image formed by a camera is", options: ["Real, inverted, and diminished", "Virtual, upright and diminished", "Virtual, upright and magnified", "Real, inverted and magnified"], correctAnswer: 0, explanation: "A camera lens forms a real, inverted, diminished image on the film/sensor." },
              { id: "p10-ch12-9", question: "If a ray of light in glass is incident on an air surface at an angle greater than the critical angle, the ray will", options: ["Refract only", "Reflect only", "Partially refract and partially reflect", "Diffract only"], correctAnswer: 1, explanation: "At angles greater than the critical angle, total internal reflection occurs." },
              { id: "p10-ch12-10", question: "The critical angle for a beam of light passing from water into air is 48.8 degrees. This means that all light rays with an angle of incidence greater than this angle will be", options: ["Absorbed", "Totally reflected", "Partially reflected and partially transmitted", "Totally transmitted"], correctAnswer: 1, explanation: "Beyond the critical angle, total internal reflection occurs — all light is reflected back." }
            ],
            outsideExerciseMCQs: p10Ch12OutsideMCQs
          },
          {
            id: "ch13",
            name: "Electrostatics",
            importantTopics: ["Electric Charge", "Coulomb's Law", "Electric Field", "Capacitance"],
            keyConcepts: ["Positive & Negative Charges", "Electroscope", "Charging Methods"],
            formulas: ["F = kq₁q₂/r²", "E = F/q", "C = Q/V"],
            mcqs: [
              { id: "p10-ch13-1", question: "A positive electric charge", options: ["Attracts other positive charge", "Repels other positive charge", "Attracts a neutral charge", "Repels a neutral charge"], correctAnswer: 1, explanation: "Like charges repel each other. A positive charge repels another positive charge." },
              { id: "p10-ch13-2", question: "An object gains excess negative charge after being rubbed against another object, which is:", options: ["Neutral", "Negatively charged", "Positively charged", "Either a, b or c"], correctAnswer: 2, explanation: "By conservation of charge, if one object gains negative charge, the other becomes positively charged." },
              { id: "p10-ch13-3", question: "Two uncharged objects A and B are rubbed against each other. When object B is placed near a negatively charged object C, the two objects repel each other. Which of the following statements is true about object A?", options: ["Remains uncharged", "Becomes positively charged", "Becomes negatively charged", "Unpredictable"], correctAnswer: 1, explanation: "If B repels C (negative), B is negative. So A must be positive (conservation of charge)." },
              { id: "p10-ch13-4", question: "When you rub a plastic rod against your hair several times and put it near some bits of paper, the pieces of papers are attracted towards it. What does this observation indicate?", options: ["The rod and the paper are oppositely charged", "The rod acquires a positive charge", "The rod and the paper have the same charges", "The rod acquires a negative charge"], correctAnswer: 3, explanation: "Plastic rod gains electrons (negative charge) when rubbed against hair." },
              { id: "p10-ch13-5", question: "According to Coulomb's law, what happens to the attraction of two oppositely charged objects as their distance of separation increases?", options: ["Increases", "Decreases", "Remains unchanged", "Cannot be determined"], correctAnswer: 1, explanation: "F = kq₁q₂/r². Force is inversely proportional to square of distance." },
              { id: "p10-ch13-6", question: "The Coulomb's law is valid for the charges which are", options: ["Moving and point charges", "Moving and non-point charges", "Stationary and point charges", "Stationary and large size charges"], correctAnswer: 2, explanation: "Coulomb's law applies to stationary (electrostatic) point charges." },
              { id: "p10-ch13-7", question: "A positive and a negative charge are initially 4 cm apart. When they are moved closer together so that they are now only 1 cm apart, the force between them is", options: ["4 times smaller than before", "4 times larger than before", "8 times larger than before", "16 times larger than before"], correctAnswer: 3, explanation: "Distance reduced by factor 4, so force increases by 4² = 16 times (inverse square law)." },
              { id: "p10-ch13-8", question: "Five joules of work is needed to shift 10 C of charge from one place to another. The potential difference between the places is", options: ["0.5 V", "2 V", "5 V", "10 V"], correctAnswer: 0, explanation: "V = W/Q = 5/10 = 0.5 V." },
              { id: "p10-ch13-9", question: "Two small charged spheres are separated by 2 mm. Which of the following would produce the greatest attractive force?", options: ["+1q and +4q", "–1q and –4q", "+2q and +2q", "+2q and –2q"], correctAnswer: 3, explanation: "For attractive force we need opposite charges. |+2q × –2q| = 4q² gives greatest attractive force among opposite charge pairs." },
              { id: "p10-ch13-10", question: "Electric field lines", options: ["Always cross each other", "Never cross each other", "Cross each other in the region of strong field", "Cross each other in the region of weak field"], correctAnswer: 1, explanation: "Electric field lines never cross because at any point, the field has a unique direction." },
              { id: "p10-ch13-11", question: "Capacitance is defined as", options: ["VC", "Q/V", "QV", "V/Q"], correctAnswer: 1, explanation: "Capacitance C = Q/V, the ratio of charge stored to potential difference." }
            ],
            outsideExerciseMCQs: p10Ch13OutsideMCQs
          },
          {
            id: "ch14",
            name: "Current Electricity",
            importantTopics: ["Electric Current", "Ohm's Law", "Resistance", "Power"],
            keyConcepts: ["Voltage", "Current", "Resistance", "Series & Parallel Circuits"],
            formulas: ["V = IR (Ohm's Law)", "P = VI = I²R = V²/R", "R_series = R₁ + R₂ + ...", "1/R_parallel = 1/R₁ + 1/R₂ + ..."],
            mcqs: [
              { id: "p10-ch14-1", question: "An electric current in conductors is due to the flow of", options: ["Positive ions", "Negative ions", "Positive charges", "Free electrons"], correctAnswer: 3, explanation: "In conductors, current is due to the flow of free electrons." },
              { id: "p10-ch14-2", question: "What is the voltage across a 6 Ω resistor when 3 A of current passes through it?", options: ["2 V", "9 V", "18 V", "36 V"], correctAnswer: 2, explanation: "V = IR = 3 × 6 = 18 V." },
              { id: "p10-ch14-3", question: "What happens to the intensity or the brightness of the lamps connected in series as more and more lamps are added?", options: ["Increases", "Decreases", "Remains the same", "Cannot be predicted"], correctAnswer: 1, explanation: "In series, adding more lamps increases total resistance, reducing current and brightness." },
              { id: "p10-ch14-4", question: "Why should household appliances be connected in parallel with the voltage source?", options: ["To increase the resistance of the circuit", "To decrease the resistance of the circuit", "To provide each appliance the same voltage as the power source", "To provide each appliance the same current as the power source"], correctAnswer: 2, explanation: "Parallel connection ensures each appliance gets the full supply voltage." },
              { id: "p10-ch14-5", question: "Electric potential and e.m.f", options: ["Are the same terms", "Are the different terms", "Have different units", "Both (b) and (c)"], correctAnswer: 1, explanation: "Potential difference and EMF are different: EMF is the total energy per charge from the source, while PD is energy dissipated per charge." },
              { id: "p10-ch14-6", question: "When we double the voltage in a simple electric circuit, we double the", options: ["Current", "Power", "Resistance", "Both (a) and (b)"], correctAnswer: 3, explanation: "By Ohm's law I = V/R, doubling V doubles I. Power P = VI, so P also increases (quadruples actually, but current doubles)." },
              { id: "p10-ch14-7", question: "If we double both the current and the voltage in a circuit while keeping its resistance constant, the power", options: ["Remains unchanged", "Halves", "Doubles", "Quadruples"], correctAnswer: 3, explanation: "P = VI. If both V and I double, P = (2V)(2I) = 4VI = 4 times original power." },
              { id: "p10-ch14-8", question: "What is the power rating of a lamp connected to a 12 V source when it carries 2.5 A?", options: ["4.8 W", "14.5 W", "30 W", "60 W"], correctAnswer: 2, explanation: "P = VI = 12 × 2.5 = 30 W." },
              { id: "p10-ch14-9", question: "The combined resistance of two identical resistors, connected in series is 8 Ω. Their combined resistance in a parallel arrangement will be", options: ["2 Ω", "4 Ω", "8 Ω", "12 Ω"], correctAnswer: 0, explanation: "Each resistor is 4 Ω (8/2). In parallel: 1/R = 1/4 + 1/4 = 1/2, R = 2 Ω." }
            ],
            outsideExerciseMCQs: p10Ch14OutsideMCQs
          },
          {
            id: "ch15",
            name: "Electromagnetism",
            importantTopics: ["Magnetic Field", "Electromagnet", "DC Motor", "Electromagnetic Induction"],
            keyConcepts: ["Magnetic Field Lines", "Right Hand Rule", "Faraday's Law"],
            formulas: ["F = BIL (Force on conductor)", "emf = -NΔΦ/Δt"],
            mcqs: [
              { id: "p10-ch15-1", question: "Which statement is true about the magnetic poles?", options: ["Unlike poles repel", "Like poles attract", "Magnetic poles do not affect each other", "A single magnetic pole does not exist"], correctAnswer: 3, explanation: "Magnetic monopoles do not exist; every magnet has both north and south poles." },
              { id: "p10-ch15-2", question: "What is the direction of the magnetic field lines inside a bar magnet?", options: ["From north pole to south pole", "From south pole to north pole", "From side to side", "There are no magnetic field lines"], correctAnswer: 1, explanation: "Inside a magnet, field lines go from south to north pole (forming closed loops)." },
              { id: "p10-ch15-3", question: "The presence of a magnetic field can be detected by a", options: ["Small mass", "Stationary positive charge", "Stationary negative charge", "Magnetic compass"], correctAnswer: 3, explanation: "A magnetic compass needle aligns with the magnetic field, detecting its presence." },
              { id: "p10-ch15-4", question: "If the current in a wire which is placed perpendicular to a magnetic field increases, the force on the wire", options: ["Increases", "Decreases", "Remains the same", "Will be zero"], correctAnswer: 0, explanation: "F = BIL. Force is directly proportional to current." },
              { id: "p10-ch15-5", question: "A D.C motor converts", options: ["Mechanical energy into electrical energy", "Mechanical energy into chemical energy", "Electrical energy into mechanical energy", "Electrical energy into chemical energy"], correctAnswer: 2, explanation: "A DC motor converts electrical energy into mechanical (rotational) energy." },
              { id: "p10-ch15-6", question: "Which part of a D.C motor reverses the direction of current through the coil every half-cycle?", options: ["The armature", "The commutator", "The brushes", "The slip rings"], correctAnswer: 1, explanation: "The commutator (split ring) reverses current direction every half rotation." },
              { id: "p10-ch15-7", question: "The direction of induced e.m.f. in a circuit is in accordance with conservation of", options: ["Mass", "Charge", "Momentum", "Energy"], correctAnswer: 3, explanation: "Lenz's law (direction of induced EMF) follows the law of conservation of energy." },
              { id: "p10-ch15-8", question: "The step-up transformer", options: ["Increases the input current", "Increases the input voltage", "Has more turns in the primary", "Has less turns in the secondary coil"], correctAnswer: 1, explanation: "A step-up transformer increases voltage (more turns in secondary than primary)." },
              { id: "p10-ch15-9", question: "The turn ratio of a transformer is 10. It means", options: ["Is = 10 Ip", "Ns = Np/10", "Ns = 10 Np", "Vs = Vp/10"], correctAnswer: 2, explanation: "Turn ratio = Ns/Np = 10, so Ns = 10 Np." }
            ],
            outsideExerciseMCQs: p10Ch15OutsideMCQs
          },
          {
            id: "ch16",
            name: "Basic Electronics",
            importantTopics: ["Semiconductors", "Diodes", "Transistors", "Logic Gates"],
            keyConcepts: ["P-type & N-type", "Forward & Reverse Bias", "Rectification"],
            formulas: [],
            mcqs: [
              { id: "p10-ch16-1", question: "The process by which electrons are emitted by a hot metal surface is known as", options: ["Boiling", "Evaporation", "Conduction", "Thermionic emission"], correctAnswer: 3, explanation: "Thermionic emission is the emission of electrons from a heated metal surface." },
              { id: "p10-ch16-2", question: "The particles emitted from a hot cathode surface are", options: ["Positive ions", "Negative ions", "Protons", "Electrons"], correctAnswer: 3, explanation: "Hot cathode emits electrons through thermionic emission." },
              { id: "p10-ch16-3", question: "The logical operation performed by a NAND gate is", options: ["AND", "NOR", "NAND", "OR"], correctAnswer: 2, explanation: "A NAND gate performs the NOT-AND operation." },
              { id: "p10-ch16-4", question: "AND gate can be formed by using two", options: ["NOT gates", "OR gates", "NOR gates", "NAND gates"], correctAnswer: 3, explanation: "AND gate can be constructed using two NAND gates." },
              { id: "p10-ch16-5", question: "The output of a two-input NOR gate is 1 when:", options: ["A is '1' and B is '0'", "A is '0' and B is '1'", "Both A and B are '0'", "Both A and B are '1'"], correctAnswer: 2, explanation: "NOR gate output is 1 only when both inputs are 0." },
              { id: "p10-ch16-6", question: "If X = A.B, then X is '1' when:", options: ["A and B are '1'", "A or B is '0'", "A is '0' and B is '1'", "A is '1' and B is '0'"], correctAnswer: 0, explanation: "AND operation (A.B) gives 1 only when both A and B are 1." },
              { id: "p10-ch16-7", question: "The output of a NAND gate is '0' when", options: ["Both of its inputs are '0'", "Both of its inputs are '1'", "Any of its inputs is '0'", "Any of its inputs is '1'"], correctAnswer: 1, explanation: "NAND gate output is 0 only when both inputs are 1." }
            ],
            outsideExerciseMCQs: p10Ch16OutsideMCQs
          },
          {
            id: "ch17",
            name: "Information and Communication Technology",
            importantTopics: ["Computer Components", "Internet", "Data Transmission"],
            keyConcepts: ["Hardware", "Software", "Digital Communication"],
            formulas: [],
            mcqs: [
              { id: "p10-ch17-1", question: "In computer terminology information means", options: ["Any data", "Raw data", "Processed data", "Large data"], correctAnswer: 2, explanation: "Information is processed data that is meaningful and useful." },
              { id: "p10-ch17-2", question: "Which is the most suitable means of reliable continuous communication between an orbiting satellite and Earth?", options: ["Microwaves", "Radiowaves", "Sound waves", "Any light wave"], correctAnswer: 0, explanation: "Microwaves are used for satellite communication as they can penetrate the atmosphere." },
              { id: "p10-ch17-3", question: "The basic operations performed by a computer are", options: ["Arithmetic operations", "Non-arithmetic operations", "Logical operations", "Both (a) and (c)"], correctAnswer: 3, explanation: "Computers perform both arithmetic and logical operations." },
              { id: "p10-ch17-4", question: "The brain of any computer system is", options: ["Monitor", "Memory", "CPU", "Control unit"], correctAnswer: 2, explanation: "The CPU (Central Processing Unit) is the brain of the computer." },
              { id: "p10-ch17-5", question: "Which of the following is not processing?", options: ["Arranging", "Manipulating", "Calculating", "Gathering"], correctAnswer: 3, explanation: "Gathering is data collection (input), not processing." },
              { id: "p10-ch17-6", question: "From which of the following we can get information almost about everything?", options: ["Book", "Teacher", "Computer", "Internet"], correctAnswer: 3, explanation: "The internet provides access to information on virtually any topic." },
              { id: "p10-ch17-7", question: "What does the term e-mail stand for?", options: ["Emergency mail", "Electronic mail", "Extra mail", "External mail"], correctAnswer: 1, explanation: "E-mail stands for electronic mail." }
            ],
            outsideExerciseMCQs: p10Ch17OutsideMCQs
          },
          {
            id: "ch18",
            name: "Atomic and Nuclear Physics",
            importantTopics: ["Radioactivity", "Half-life", "Nuclear Reactions", "Fission & Fusion"],
            keyConcepts: ["Alpha, Beta, Gamma Rays", "Nuclear Energy", "Atomic Models"],
            formulas: ["E = mc² (Einstein's equation)", "N = N₀(1/2)^(t/T₁/₂)"],
            mcqs: [
              { id: "p10-ch18-1", question: "Isotopes are atoms of same element with different", options: ["Atomic mass", "Atomic number", "Number of protons", "Number of electrons"], correctAnswer: 0, explanation: "Isotopes have same atomic number but different mass numbers (different neutrons)." },
              { id: "p10-ch18-2", question: "One of the isotopes of uranium is ²³⁸U₉₂. The number of neutrons in this isotope is", options: ["92", "146", "238", "330"], correctAnswer: 1, explanation: "Neutrons = Mass number − Atomic number = 238 − 92 = 146." },
              { id: "p10-ch18-3", question: "Which among the following radiations has more penetrating power?", options: ["A beta particle", "A gamma ray", "An alpha particle", "All have the same penetrating ability"], correctAnswer: 1, explanation: "Gamma rays have the highest penetrating power (no charge, no mass, pure energy)." },
              { id: "p10-ch18-4", question: "What happens to the atomic number of an element which emits one alpha particle?", options: ["Increases by 1", "Stays the same", "Decreases by 2", "Decreases by 1"], correctAnswer: 2, explanation: "Alpha particle has 2 protons, so atomic number decreases by 2." },
              { id: "p10-ch18-5", question: "The half-life of a certain isotope is 1 day. What is the quantity of the isotope after 2 days?", options: ["One-half", "One-quarter", "One-eighth", "None of these"], correctAnswer: 1, explanation: "After 2 half-lives: (1/2)² = 1/4 of original quantity remains." },
              { id: "p10-ch18-6", question: "When Uranium (92 protons) ejects a beta particle, how many protons will be in the remaining nucleus?", options: ["89 protons", "90 protons", "91 protons", "93 protons"], correctAnswer: 3, explanation: "In beta decay, a neutron converts to a proton, so atomic number increases by 1: 92 + 1 = 93." },
              { id: "p10-ch18-7", question: "Release of energy by the Sun is due to", options: ["Nuclear fission", "Nuclear fusion", "Burning of gases", "Chemical reaction"], correctAnswer: 1, explanation: "The Sun produces energy by nuclear fusion of hydrogen into helium." },
              { id: "p10-ch18-8", question: "When a heavy nucleus splits into two lighter nuclei, the process would", options: ["Release nuclear energy", "Absorb nuclear energy", "Release chemical energy", "Absorb chemical energy"], correctAnswer: 0, explanation: "Nuclear fission (splitting heavy nuclei) releases enormous nuclear energy." },
              { id: "p10-ch18-9", question: "The reason carbon-dating works is that", options: ["Plants and animals are such strong emitters of carbon-14", "After a plant or animal dies, it stops taking in fresh carbon-14", "There is so much non-radioactive carbon dioxide in the air", "When plants or animals die, they absorb fresh carbon-14"], correctAnswer: 1, explanation: "After death, organisms stop absorbing C-14, so the remaining C-14 decays at a known rate." }
            ],
            outsideExerciseMCQs: p10Ch18OutsideMCQs
          }
        ]
      },
      {
        id: "chemistry-10",
        name: "Chemistry",
        icon: "🧪",
        pairingScheme: `
📋 CHEMISTRY CLASS 10 - PAIRING SCHEME 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 SECTION A - MCQs (12 Marks)
• 12 MCQs from all chapters (1 mark each)

📝 SECTION B - Short Questions (36 Marks)
Attempt 9 out of 12 questions (4 marks each)

Q.2: Chapter 9 + Chapter 10 (4 questions)
Q.3: Chapter 11 + Chapter 12 (4 questions)
Q.4: Chapter 13 + Chapter 14 + Chapter 15 + Chapter 16 (4 questions)

📝 SECTION C - Long Questions (27 Marks)
Attempt 3 out of 5 questions (9 marks each)

Q.5: Chapter 9 + Chapter 10
Q.6: Chapter 11 + Chapter 12
Q.7: Chapter 12 + Chapter 13
Q.8: Chapter 14 + Chapter 15
Q.9: Chapter 15 + Chapter 16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Marks: 75 | Time: 2 Hours 30 Minutes
        `,
        resources: [
          {
            id: "chemistry-10-book",
            name: "Chemistry 10 Textbook (Punjab Board)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1o1NbqFMFX7spARRnFj4yb2f4kgkuHibE/view?usp=drivesdk"
          },
          {
            id: "chemistry-10-pairing",
            name: "Chemistry 10 Pairing Scheme 2026",
            type: "notes",
            driveLink: "https://drive.google.com/file/d/1192SGmupIwwexwh_34yK6OxYBwAkbbhK/view?usp=drivesdk"
          }
        ],
        chapters: [
          {
            id: "ch9",
            name: "Chemical Equilibrium",
            importantTopics: ["Reversible Reactions", "Law of Mass Action", "Le Chatelier's Principle"],
            keyConcepts: ["Dynamic Equilibrium", "Equilibrium Constant", "Factors Affecting Equilibrium"],
            formulas: ["Kc = [Products]/[Reactants]"],
            mcqs: [
              { id: "c10-ch9-1", question: "The characteristics of reversible reactions are many, except following one:", options: ["Products never recombine to form reactants", "They never complete", "They proceed in both ways", "They have a double arrow between reactants and products"], correctAnswer: 0, explanation: "In reversible reactions, products DO recombine to form reactants. That's the whole point of reversibility." },
              { id: "c10-ch9-2", question: "In the lime kiln, the reaction: CaCO₃(s) → CaO(s) + CO₂(g) goes to completion because", options: ["Of high temperature", "CaO is more stable than CaCO₃", "CO₂ escapes continuously", "CaO is not dissociated"], correctAnswer: 2, explanation: "CO₂ gas escapes continuously, preventing the reverse reaction from occurring." },
              { id: "c10-ch9-3", question: "For the reaction, 2A(g) + B(g) ⇌ 3C(g) the expression for the equilibrium constant is:", options: ["[2A][B] / [3C]", "[A]²[B] / [C]³", "[3C] / [2A][B]", "[C]³ / ([A]²[B])"], correctAnswer: 3, explanation: "Kc = [Products]^coefficients / [Reactants]^coefficients = [C]³ / ([A]²[B])." },
              { id: "c10-ch9-4", question: "When a system is at equilibrium states:", options: ["The concentration of reactants and products becomes equal", "The opposing reactions (forward and reverse) stop", "The rate of the reverse reaction becomes very low", "The rates of the forward and reverse reactions become equal"], correctAnswer: 3, explanation: "At equilibrium, the rate of forward reaction equals the rate of reverse reaction." },
              { id: "c10-ch9-5", question: "Which one of the following statements is not correct about active mass?", options: ["Rate of reaction is directly proportional to active mass", "Active mass is taken in molar concentration", "Active mass is represented by square brackets", "Active mass means total mass of substances"], correctAnswer: 3, explanation: "Active mass is molar concentration (mol/dm³), not total mass." },
              { id: "c10-ch9-6", question: "When the magnitude of Kc is very large it indicates:", options: ["Reaction mixture consists of almost all products", "Reaction mixture has almost all reactants", "Reaction has not gone to completion", "Reaction mixture has negligible products"], correctAnswer: 0, explanation: "Large Kc means products >> reactants at equilibrium." },
              { id: "c10-ch9-7", question: "When the magnitude of Kc is very small it indicates:", options: ["Equilibrium will never establish", "All reactants will be converted to products", "Reaction will go to completion", "The amount of products is negligible"], correctAnswer: 3, explanation: "Very small Kc means very little product is formed; reactants dominate." },
              { id: "c10-ch9-8", question: "Reactions which have comparable amounts of reactants and products at equilibrium state have:", options: ["Very small Kc value", "Very large Kc value", "Moderate Kc value", "None of these"], correctAnswer: 2, explanation: "Moderate Kc (close to 1) means comparable amounts of reactants and products." },
              { id: "c10-ch9-9", question: "At dynamic equilibrium:", options: ["The reaction stops to proceed", "The amounts of reactants and products are equal", "The speeds of the forward and reverse reactions are equal", "The reaction can no longer be reversed"], correctAnswer: 2, explanation: "Dynamic equilibrium: forward and reverse reaction rates are equal, but reactions continue." },
              { id: "c10-ch9-10", question: "In an irreversible reaction dynamic equilibrium:", options: ["Never establishes", "Establishes before the completion of reaction", "Establishes after the completion of reaction", "Establishes readily"], correctAnswer: 0, explanation: "Irreversible reactions go to completion; no equilibrium is established." },
              { id: "c10-ch9-11", question: "A reverse reaction is one:", options: ["Which proceeds from left to right", "In which reactants react to form products", "Which slows down gradually", "Which speeds up gradually"], correctAnswer: 2, explanation: "The reverse reaction starts fast then slows down as product concentration decreases." },
              { id: "c10-ch9-12", question: "Nitrogen and hydrogen were reacted together to make ammonia: N₂ + 3H₂ ⇌ 2NH₃. Kc = 2.86 mol⁻² dm⁶. What will be present in the equilibrium mixture?", options: ["NH₃ only", "N₂, H₂ and NH₃", "N₂ and H₂ only", "H₂ only"], correctAnswer: 1, explanation: "At equilibrium, all species (reactants and products) are present: N₂, H₂, and NH₃." },
              { id: "c10-ch9-13", question: "For a reaction between PCl₃ and Cl₂ to form PCl₅, the units of Kc are:", options: ["mol dm⁻³", "mol⁻¹ dm⁻³", "mol⁻¹ dm³", "mol dm³"], correctAnswer: 2, explanation: "PCl₃ + Cl₂ ⇌ PCl₅. Kc = [PCl₅]/([PCl₃][Cl₂]). Units: (mol/dm³)/((mol/dm³)(mol/dm³)) = mol⁻¹ dm³." }
            ],
            outsideExerciseMCQs: c10Ch9OutsideMCQs
          },
          {
            id: "ch10",
            name: "Acids, Bases and Salts",
            importantTopics: ["Acids & Bases", "pH Scale", "Neutralization", "Salts"],
            keyConcepts: ["Arrhenius Theory", "Bronsted-Lowry", "Lewis Concept", "Buffer Solutions"],
            formulas: ["pH = -log[H⁺]", "pOH = -log[OH⁻]", "pH + pOH = 14"],
            mcqs: [
              { id: "c10-ch10-1", question: "A base is a substance which neutralizes an acid. Which of these substances is not a base?", options: ["Aqueous ammonia", "Sodium chloride", "Sodium carbonate", "Calcium oxide"], correctAnswer: 1, explanation: "Sodium chloride (NaCl) is a salt, not a base." },
              { id: "c10-ch10-2", question: "Lewis acid-base concept have the following characteristics except:", options: ["Formation of an adduct", "Formation of a coordinate covalent bond", "Donation and acceptance of an electron pair", "Donation and acceptance of a proton"], correctAnswer: 3, explanation: "Lewis concept involves electron pairs, not protons. Proton transfer is Bronsted-Lowry concept." },
              { id: "c10-ch10-3", question: "Acetic acid is used for:", options: ["Flavouring food", "Making explosive", "Etching designs", "Cleaning metals"], correctAnswer: 0, explanation: "Acetic acid (vinegar) is commonly used for flavouring food." },
              { id: "c10-ch10-4", question: "A salt is not composed of:", options: ["A metallic cation", "Non-metallic anion", "An anion of a base", "An anion of an acid"], correctAnswer: 2, explanation: "A salt consists of the cation from a base and the anion from an acid, not the anion of a base." },
              { id: "c10-ch10-5", question: "If a liquid has a pH of 7 then it must:", options: ["Be a colourless and odourless liquid", "Freeze at 0°C and boil at 100°C", "Be neutral", "Be a solution containing water"], correctAnswer: 2, explanation: "pH 7 indicates a neutral solution." },
              { id: "c10-ch10-6", question: "A salt always:", options: ["Contains ions", "Contains water of crystallization", "Dissolves in water", "Forms crystals which conduct electricity"], correctAnswer: 0, explanation: "All salts are ionic compounds and always contain ions." },
              { id: "c10-ch10-7", question: "Dilute acids react with carbonates to produce the given products except:", options: ["Salt", "Water", "Carbon dioxide", "Hydrogen"], correctAnswer: 3, explanation: "Acid + Carbonate → Salt + Water + CO₂. No hydrogen gas is produced." },
              { id: "c10-ch10-8", question: "In the preparation of insoluble salts, which one of the facts is incorrect?", options: ["Two soluble salts are mixed", "Ions of both salts are exchanged", "One of the salts produced is insoluble", "Both of the salts produced are insoluble"], correctAnswer: 3, explanation: "In double decomposition, only one product is insoluble (precipitate), not both." },
              { id: "c10-ch10-9", question: "A reaction between an acid and a base produces:", options: ["Salt and water", "Salt and gas", "Salt and an acid", "Salt and a base"], correctAnswer: 0, explanation: "Neutralization: Acid + Base → Salt + Water." },
              { id: "c10-ch10-10", question: "The conjugate acid of HPO₄²⁻ is:", options: ["PO₄³⁻", "H₂PO₄²⁻", "H₂PO₄⁻", "H₃PO₄"], correctAnswer: 2, explanation: "Conjugate acid is formed by adding a proton: HPO₄²⁻ + H⁺ → H₂PO₄⁻." },
              { id: "c10-ch10-11", question: "What is the pOH of a 0.02M Ca(OH)₂?", options: ["1.698", "1.397", "12.31", "12.61"], correctAnswer: 1, explanation: "Ca(OH)₂ gives 2 OH⁻ ions. [OH⁻] = 0.04M. pOH = -log(0.04) = 1.397." },
              { id: "c10-ch10-12", question: "Which one of the following species is not amphoteric?", options: ["H₂O", "NH₃", "HCO₃⁻", "SO₄²⁻"], correctAnswer: 3, explanation: "SO₄²⁻ can only act as a base (accept proton), it is not amphoteric." },
              { id: "c10-ch10-13", question: "The product of Lewis acid-base reaction is called adduct. The bond between the adduct species is:", options: ["Ionic", "Covalent", "Metallic", "Coordinate covalent"], correctAnswer: 3, explanation: "In Lewis acid-base reaction, one species donates an electron pair forming a coordinate covalent bond." },
              { id: "c10-ch10-14", question: "The water of crystallization is responsible for the:", options: ["Melting points of crystals", "Boiling points of crystals", "Shapes of crystals", "Transition point of crystals"], correctAnswer: 2, explanation: "Water of crystallization gives crystals their characteristic shape and structure." },
              { id: "c10-ch10-15", question: "You want to dry a gas, which one of the following salts you will use?", options: ["CaCl₂", "NaCl", "CaO", "Na₂SiO₃"], correctAnswer: 0, explanation: "Anhydrous CaCl₂ is a common desiccant used to dry gases." },
              { id: "c10-ch10-16", question: "FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s) + 3NaCl(aq). Colour of the precipitate is:", options: ["White", "Blue", "Dirty green", "Brown"], correctAnswer: 3, explanation: "Ferric hydroxide Fe(OH)₃ is a brown precipitate." },
              { id: "c10-ch10-17", question: "Which ion is the conjugate base of sulphuric acid?", options: ["SO₃²⁻", "S²⁻", "HSO₃⁻", "HSO₄⁻"], correctAnswer: 3, explanation: "H₂SO₄ donates one proton to form HSO₄⁻ (its conjugate base)." },
              { id: "c10-ch10-18", question: "Which one of the following is a Lewis base?", options: ["NH₃", "BF₃", "H⁺", "AlCl₃"], correctAnswer: 0, explanation: "NH₃ has a lone pair of electrons to donate, making it a Lewis base." },
              { id: "c10-ch10-19", question: "According to the Lewis concept, acid is a substance which can:", options: ["Donate a proton", "Donate a pair of electrons", "Accept a proton", "Accept a pair of electrons"], correctAnswer: 3, explanation: "Lewis acid accepts an electron pair." },
              { id: "c10-ch10-20", question: "Given Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C. What is the concentration of H⁺ in pure water at 25°C?", options: ["1 × 10⁻⁷ mol dm⁻³", "1 × 10⁷ mol dm⁻³", "1 × 10⁻¹⁴ mol dm⁻³", "1 × 10¹⁴ mol dm⁻³"], correctAnswer: 0, explanation: "In pure water [H⁺] = [OH⁻] = √(10⁻¹⁴) = 10⁻⁷ mol dm⁻³." }
            ],
            outsideExerciseMCQs: c10Ch10OutsideMCQs
          },
          {
            id: "ch11",
            name: "Organic Chemistry",
            importantTopics: ["Introduction to Organic", "Functional Groups", "Nomenclature", "Fossil Fuels"],
            keyConcepts: ["Carbon Bonding", "Catenation", "Isomerism", "Coal", "Petroleum"],
            formulas: [],
            mcqs: [
              { id: "c10-ch11-1", question: "The ability of carbon atoms to form chains is called:", options: ["Isomerism", "Catenation", "Resonance", "Condensation"], correctAnswer: 1, explanation: "Catenation is the ability of carbon to form long chains by bonding with itself." },
              { id: "c10-ch11-2", question: "Coal having 90% carbon contents is called:", options: ["Peat", "Lignite", "Anthracite", "Bituminous"], correctAnswer: 2, explanation: "Anthracite is the highest grade coal with about 90% carbon content." },
              { id: "c10-ch11-3", question: "Main component of natural gas is:", options: ["Methane", "Propane", "Butane", "Propene"], correctAnswer: 0, explanation: "Natural gas is approximately 85% methane (CH₄)." },
              { id: "c10-ch11-4", question: "The strong heating of coal in retorts in the absence of air is called:", options: ["Fractional distillation", "Sublimation", "Roasting", "Destructive distillation"], correctAnswer: 3, explanation: "Destructive distillation is heating coal strongly in the absence of air." },
              { id: "c10-ch11-5", question: "Pitch is black residue of:", options: ["Coke", "Coal tar", "Coal", "Coal gas"], correctAnswer: 1, explanation: "Pitch is the black residue left after distilling coal tar." },
              { id: "c10-ch11-6", question: "Natural gas is 85% methane. It is used to make:", options: ["Carbon black", "Coke", "Coal tar", "Coal gas"], correctAnswer: 0, explanation: "Incomplete combustion of methane produces carbon black." },
              { id: "c10-ch11-7", question: "Which one of the following does not contain starch:", options: ["Sugar cane", "Maize", "Barley", "Potatoes"], correctAnswer: 0, explanation: "Sugar cane contains sucrose, not starch." },
              { id: "c10-ch11-8", question: "Petroleum is refined by:", options: ["Destructive distillation", "Fractional distillation", "Simple distillation", "Dry distillation"], correctAnswer: 1, explanation: "Petroleum is separated into fractions by fractional distillation." },
              { id: "c10-ch11-9", question: "In laboratory urea was prepared by:", options: ["Wöhler", "Rutherford", "Berzelius", "Dalton"], correctAnswer: 0, explanation: "Friedrich Wöhler first synthesized urea in the laboratory in 1828." },
              { id: "c10-ch11-10", question: "General formula of alkyl radical is:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙH₂ₙ"], correctAnswer: 2, explanation: "An alkyl radical is formed by removing one H from an alkane: CₙH₂ₙ₊₁." },
              { id: "c10-ch11-11", question: "Identify which one of the following compounds is a ketone?", options: ["(CH₃)₂CHOH", "(CH₃)₂CO", "(CH₃)₂NH", "(CH₃)₂CHCl"], correctAnswer: 1, explanation: "(CH₃)₂CO is acetone, a ketone with C=O between two carbon groups." },
              { id: "c10-ch11-12", question: "The functional group –COOH is found in:", options: ["Carboxylic acids", "Aldehydes", "Alcohols", "Esters"], correctAnswer: 0, explanation: "–COOH is the carboxyl group, characteristic of carboxylic acids." },
              { id: "c10-ch11-13", question: "Which one of the following statements is not true about fossil fuels?", options: ["They all contain carbon", "They are renewable", "They produce pollutants when burnt", "They cause acid rain"], correctAnswer: 1, explanation: "Fossil fuels are non-renewable resources." },
              { id: "c10-ch11-14", question: "Which one of the following is the hardest coal?", options: ["Peat", "Lignite", "Bituminous", "Anthracite"], correctAnswer: 3, explanation: "Anthracite is the hardest and highest quality coal." },
              { id: "c10-ch11-15", question: "In which of the following groups, oxygen is attached on both sides with carbon atoms?", options: ["Ketone", "Ether", "Aldehyde", "Ester"], correctAnswer: 1, explanation: "In ethers (R-O-R), oxygen is bonded to carbon atoms on both sides." },
              { id: "c10-ch11-16", question: "Carbonization process is the conversion of:", options: ["Coal into coal gas", "Coal into wood", "Wood into coal", "Wood into coal tar"], correctAnswer: 2, explanation: "Carbonization is the slow conversion of dead vegetation (wood) into coal over millions of years." },
              { id: "c10-ch11-17", question: "Coal gas is a mixture of:", options: ["CO and CH₄", "CO, CH₄ and CO₂", "CO, CH₄ and H₂", "CO, H₂ and CO₂"], correctAnswer: 2, explanation: "Coal gas is a mixture of carbon monoxide, methane, and hydrogen." },
              { id: "c10-ch11-18", question: "Which one of the following is a synthetic fibre?", options: ["Cotton", "Wool", "Nylon", "Silk"], correctAnswer: 2, explanation: "Nylon is a synthetic polymer/fibre. Cotton, wool, and silk are natural." },
              { id: "c10-ch11-19", question: "Which one of the following is not a fossil fuel?", options: ["Coal", "Natural gas", "Biogas", "Petroleum"], correctAnswer: 2, explanation: "Biogas is produced from decomposition of organic waste, not a fossil fuel." },
              { id: "c10-ch11-20", question: "Which one of the following does not contain protein:", options: ["Pulses", "Potatoes", "Beans", "Eggs"], correctAnswer: 1, explanation: "Potatoes mainly contain starch (carbohydrates), not significant protein." },
              { id: "c10-ch11-21", question: "Conversion of dead plants into coal by the action of bacteria and heat is called:", options: ["Carbonization", "Catenation", "Hydrogenation", "Cracking"], correctAnswer: 0, explanation: "Carbonization is the natural process of converting dead plants into coal." },
              { id: "c10-ch11-22", question: "Which one of the following compounds is an aldehyde?", options: ["CH₃–CH₂–OH", "CH₃–COOH", "CH₃CHO", "CH₃COCH₃"], correctAnswer: 2, explanation: "CH₃CHO (acetaldehyde) contains the –CHO aldehyde functional group." },
              { id: "c10-ch11-23", question: "Formula of acetaldehyde is:", options: ["CH₃–CH₂OH", "CH₃–CO–OH", "CH₃–CO–H", "H–CO–H"], correctAnswer: 2, explanation: "Acetaldehyde is CH₃CHO (CH₃–CO–H)." }
            ],
            outsideExerciseMCQs: c10Ch11OutsideMCQs
          },
          {
            id: "ch12",
            name: "Hydrocarbons",
            importantTopics: ["Alkanes", "Alkenes", "Alkynes", "Reactions"],
            keyConcepts: ["Saturated & Unsaturated", "Combustion", "Addition Reactions", "Substitution"],
            formulas: ["Alkane: CₙH₂ₙ₊₂", "Alkene: CₙH₂ₙ", "Alkyne: CₙH₂ₙ₋₂"],
            mcqs: [
              { id: "c10-ch12-1", question: "Which one of these hydrocarbon molecules would have no effect on an aqueous solution of bromine?", options: ["CH₄", "C₁₀H₂₀", "C₂H₄", "C₂H₂"], correctAnswer: 0, explanation: "CH₄ (methane) is a saturated alkane and does not react with bromine water." },
              { id: "c10-ch12-2", question: "If an organic compound has 4 carbon atoms, all singly bonded, it will have the following characteristics except one:", options: ["It will be saturated hydrocarbon", "It will have 8 hydrogen atoms", "Its name will be n-butane", "It will be least reactive"], correctAnswer: 1, explanation: "C₄H₁₀ (butane) has 10 hydrogen atoms, not 8. Formula: CₙH₂ₙ₊₂ = C₄H₁₀." },
              { id: "c10-ch12-3", question: "The reduction of alkyl halides takes place in the presence of:", options: ["Zn/HCl", "Na/HCl", "Mg/HCl", "Cu/HCl"], correctAnswer: 0, explanation: "Zn/HCl (zinc and hydrochloric acid) is used for reduction of alkyl halides." },
              { id: "c10-ch12-4", question: "Halogenation of methane does not produce:", options: ["Carbon tetrachloride", "Chloroform", "Carbon black", "Chloromethane"], correctAnswer: 2, explanation: "Halogenation of methane produces CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄ — not carbon black." },
              { id: "c10-ch12-5", question: "Incomplete combustion of alkanes produces:", options: ["Carbon dioxide only", "Carbon monoxide only", "Carbon monoxide and carbon black", "Carbon dioxide and carbon black"], correctAnswer: 2, explanation: "Incomplete combustion produces CO and carbon black (soot) due to insufficient oxygen." },
              { id: "c10-ch12-6", question: "Alkenes are prepared from alcohols by a process called:", options: ["Dehydrogenation", "Dehalogenation", "Dehydration", "Dehydrohalogenation"], correctAnswer: 2, explanation: "Dehydration removes water from alcohols to form alkenes." },
              { id: "c10-ch12-7", question: "Dehydrohalogenation takes place in the presence of:", options: ["Aqueous NaOH", "Alcoholic KOH", "Aqueous KOH", "Alcoholic NaOH"], correctAnswer: 1, explanation: "Alcoholic KOH is used for dehydrohalogenation (elimination reaction)." },
              { id: "c10-ch12-8", question: "Oxidation of ethene with KMnO₄ produces:", options: ["Oxalic acid", "Glyoxal", "Ethane glycol", "Propene glycol"], correctAnswer: 2, explanation: "Mild oxidation of ethene with KMnO₄ produces ethylene glycol (ethane-1,2-diol)." },
              { id: "c10-ch12-9", question: "Which one of these is a saturated hydrocarbon?", options: ["C₂H₄", "C₃H₆", "C₄H₈", "C₅H₁₂"], correctAnswer: 3, explanation: "C₅H₁₂ follows CₙH₂ₙ₊₂ (alkane formula), so it is saturated." },
              { id: "c10-ch12-10", question: "A hydrocarbon has molecular formula C₈H₁₄. What is the molecular formula of the next member of the same homologous series?", options: ["C₉H₁₈", "C₉H₁₆", "C₉H₂₀", "C₉H₁₂"], correctAnswer: 1, explanation: "Same series means same general formula pattern. C₈H₁₄ → next is C₉H₁₆ (difference of CH₂)." },
              { id: "c10-ch12-11", question: "What is the molecular formula for the eighth alkane member, octane, which is found in petrol?", options: ["C₈H₈", "C₈H₁₆", "C₈H₁₈", "C₈H₂₀"], correctAnswer: 2, explanation: "Octane: CₙH₂ₙ₊₂ = C₈H₁₈." },
              { id: "c10-ch12-12", question: "One of the hydrocarbons reacts with one mole of hydrogen to form a saturated hydrocarbon. What could be the formula of X?", options: ["C₃H₈", "C₆H₁₂", "C₄H₁₀", "C₇H₁₆"], correctAnswer: 1, explanation: "C₆H₁₂ (alkene) + H₂ → C₆H₁₄ (saturated). Alkenes react with 1 mol H₂." },
              { id: "c10-ch12-13", question: "Dehydration of alcohols can be carried out with:", options: ["NaOH", "KOH", "H₂SO₄", "HCl"], correctAnswer: 2, explanation: "Concentrated H₂SO₄ acts as a dehydrating agent for alcohols." },
              { id: "c10-ch12-14", question: "The end product of oxidation of acetylene is:", options: ["Oxalic acid", "Glycol", "Glyoxal", "None of these"], correctAnswer: 0, explanation: "Complete oxidation of acetylene (C₂H₂) with KMnO₄ produces oxalic acid." },
              { id: "c10-ch12-15", question: "Dehalogenation of tetrahalides produces acetylene. This reaction takes place in the presence of:", options: ["Sodium metal", "Zinc metal", "Magnesium metal", "Potassium metal"], correctAnswer: 1, explanation: "Zinc dust is used for dehalogenation of tetrahalides to produce alkynes." },
              { id: "c10-ch12-16", question: "Substitution reaction is the characteristic of:", options: ["Alkanes", "Alkenes", "Alkynes", "None of these"], correctAnswer: 0, explanation: "Alkanes (saturated) undergo substitution reactions, not addition." },
              { id: "c10-ch12-17", question: "Halogenation of methane in the presence of diffused sunlight takes place:", options: ["Suddenly, only in one step", "Slowly in one step", "In a series of four steps", "Fastly in two steps"], correctAnswer: 2, explanation: "Halogenation of methane occurs in steps: CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄." },
              { id: "c10-ch12-18", question: "Which one of the followings is a substitution reaction?", options: ["Halogenation of alkynes", "Halogenation of alkenes", "Halogenation of alkanes", "Bromination of alkenes"], correctAnswer: 2, explanation: "Halogenation of alkanes is a substitution reaction (H replaced by halogen)." },
              { id: "c10-ch12-19", question: "The order of reactivity of hydrogen halides with alkenes is", options: ["HI > HBr", "HBr > HI", "HCl > HBr", "HBr < HCl"], correctAnswer: 0, explanation: "Reactivity order: HI > HBr > HCl (weaker H-X bond = more reactive)." },
              { id: "c10-ch12-20", question: "Oxidation of alkenes produces:", options: ["Glyoxal", "Glycol", "Oxalic acid", "Formic acid"], correctAnswer: 1, explanation: "Mild oxidation of alkenes with KMnO₄ produces glycols (diols)." }
            ]
          },
          {
            id: "ch13",
            name: "Biochemistry",
            importantTopics: ["Carbohydrates", "Proteins", "Lipids", "Nucleic Acids", "Vitamins"],
            keyConcepts: ["Amino Acids", "Enzymes", "DNA & RNA", "Monosaccharides", "Disaccharides"],
            formulas: [],
            mcqs: [
              { id: "c10-ch13-1", question: "Carbohydrates are synthesized by plants through photosynthesis process which requires the following except:", options: ["CO₂ and water", "Presence of sunlight", "O₂", "Chlorophyll"], correctAnswer: 2, explanation: "Photosynthesis requires CO₂, water, sunlight, and chlorophyll. O₂ is a product, not a requirement." },
              { id: "c10-ch13-2", question: "Which of the following is a disaccharide?", options: ["Glucose", "Fructose", "Sucrose", "Starch"], correctAnswer: 2, explanation: "Sucrose (glucose + fructose) is a disaccharide." },
              { id: "c10-ch13-3", question: "Photosynthesis process produces:", options: ["Starch", "Cellulose", "Sucrose", "Glucose"], correctAnswer: 3, explanation: "The primary product of photosynthesis is glucose." },
              { id: "c10-ch13-4", question: "Which one of the following is tasteless?", options: ["Starch", "Glucose", "Fructose", "Sucrose"], correctAnswer: 0, explanation: "Starch is a polysaccharide that is tasteless." },
              { id: "c10-ch13-5", question: "When glucose and fructose combine they produce:", options: ["Starch", "Cellulose", "Sucrose", "None of these"], correctAnswer: 2, explanation: "Glucose + Fructose → Sucrose (a disaccharide)." },
              { id: "c10-ch13-6", question: "Glucose is:", options: ["Hexahydroxy aldehyde", "Hexahydroxy ketone", "Pentahydroxy aldehyde", "Pentahydroxy ketone"], correctAnswer: 2, explanation: "Glucose (C₆H₁₂O₆) is a pentahydroxy aldehyde (5 OH groups + 1 CHO group)." },
              { id: "c10-ch13-7", question: "Thousands of amino acids polymerize to form:", options: ["Carbohydrates", "Proteins", "Lipids", "Vitamins"], correctAnswer: 1, explanation: "Proteins are polymers of amino acids linked by peptide bonds." },
              { id: "c10-ch13-8", question: "Which one of the following is a triglyceride?", options: ["Carbohydrates", "Proteins", "Lipids", "Vitamins"], correctAnswer: 2, explanation: "Lipids (fats and oils) are triglycerides — esters of glycerol with fatty acids." },
              { id: "c10-ch13-9", question: "Enzymes are proteins. Which one of the following properties they do not have?", options: ["They catalyze reactions", "They are highly non-specific", "They are highly efficient", "They are produced by living cells"], correctAnswer: 1, explanation: "Enzymes are highly SPECIFIC, not non-specific. Each enzyme acts on a specific substrate." },
              { id: "c10-ch13-10", question: "Which one of the following vitamins is water soluble?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correctAnswer: 1, explanation: "Vitamin C (ascorbic acid) is water soluble. A, D, E, K are fat soluble." },
              { id: "c10-ch13-11", question: "Which one of the following is a fat soluble vitamin?", options: ["A", "E", "K", "All of these"], correctAnswer: 3, explanation: "Vitamins A, D, E, and K are all fat soluble." },
              { id: "c10-ch13-12", question: "Which one of the following is not the characteristic of monosaccharide?", options: ["White crystalline solids", "Soluble in water", "Hydrolysable", "Reducing in nature"], correctAnswer: 2, explanation: "Monosaccharides cannot be hydrolyzed further as they are the simplest sugars." },
              { id: "c10-ch13-13", question: "Which one of the following statements about glucose and sucrose is incorrect?", options: ["Soluble in water", "Naturally occurring", "Carbohydrates", "Disaccharides"], correctAnswer: 3, explanation: "Glucose is a monosaccharide, not a disaccharide. Only sucrose is a disaccharide." },
              { id: "c10-ch13-14", question: "Which one of the following is a reducing sugar?", options: ["Glucose", "Maltose", "Sucrose", "Starch"], correctAnswer: 0, explanation: "Glucose is a reducing sugar due to its free aldehyde group." },
              { id: "c10-ch13-15", question: "The most important oligosaccharide is:", options: ["Sucrose", "Glucose", "Fructose", "Maltose"], correctAnswer: 0, explanation: "Sucrose is the most important oligosaccharide (disaccharide)." },
              { id: "c10-ch13-16", question: "Night blindness is because of deficiency of:", options: ["Vitamin A", "Vitamin E", "Vitamin C", "Vitamin D"], correctAnswer: 0, explanation: "Vitamin A deficiency causes night blindness." },
              { id: "c10-ch13-17", question: "The organic compounds used as drugs to control bleeding are:", options: ["Vitamins", "Proteins", "Lipids", "Glycerides"], correctAnswer: 0, explanation: "Vitamin K helps in blood clotting and controls bleeding." },
              { id: "c10-ch13-18", question: "Deficiency of Vitamin E causes:", options: ["Rickets", "Scurvy", "Anemia in babies", "Night blindness"], correctAnswer: 2, explanation: "Vitamin E deficiency can cause anemia, especially in premature babies." },
              { id: "c10-ch13-19", question: "Lipids are macromolecules. They have characteristics except one of the following:", options: ["They are high energy foods", "They are soluble in water", "They are poor conductors of heat", "They are esters of fatty acids"], correctAnswer: 1, explanation: "Lipids are insoluble in water (they are non-polar/hydrophobic)." },
              { id: "c10-ch13-20", question: "Vitamins are Accessory Growth Factors. They play important role in our body like:", options: ["Provide energy to the body", "Insulate our body from electric shock", "Build brain cells", "Regulate metabolic process"], correctAnswer: 3, explanation: "Vitamins regulate metabolic processes as coenzymes and cofactors." }
            ],
            outsideExerciseMCQs: c10Ch13OutsideMCQs
          },
          {
            id: "ch14",
            name: "The Atmosphere",
            importantTopics: ["Atmosphere Layers", "Air Pollution", "Greenhouse Effect", "Acid Rain", "Ozone Depletion"],
            keyConcepts: ["Troposphere", "Stratosphere", "Global Warming", "Pollutants"],
            formulas: [],
            mcqs: [
              { id: "c10-ch14-1", question: "About 99% atmosphere's mass lies within:", options: ["30 kilometre", "35 kilometre", "15 kilometre", "11 kilometre"], correctAnswer: 0, explanation: "About 99% of the atmosphere's mass is within 30 km of Earth's surface." },
              { id: "c10-ch14-2", question: "Depending upon temperature variation, atmosphere is divided into:", options: ["One region", "Two regions", "Three regions", "Four regions"], correctAnswer: 3, explanation: "The atmosphere is divided into 4 regions: troposphere, stratosphere, mesosphere, thermosphere." },
              { id: "c10-ch14-3", question: "Just above the Earth's surface is:", options: ["Mesosphere", "Stratosphere", "Thermosphere", "Troposphere"], correctAnswer: 3, explanation: "The troposphere is the lowest layer, directly above Earth's surface." },
              { id: "c10-ch14-4", question: "A group of gases that maintains temperature of atmosphere is:", options: ["Carbon dioxide and water vapours", "Nitrogen and carbon dioxide", "Oxygen and water vapours", "Nitrogen and oxygen"], correctAnswer: 0, explanation: "CO₂ and water vapours are greenhouse gases that maintain atmospheric temperature." },
              { id: "c10-ch14-5", question: "The Earth's atmosphere is getting hotter because of:", options: ["Increasing concentration of CO", "Increasing concentration of CO₂", "Increasing concentration of O₃", "Increasing concentration of SO₂"], correctAnswer: 1, explanation: "Increasing CO₂ concentration enhances the greenhouse effect, causing global warming." },
              { id: "c10-ch14-6", question: "Which one of the followings is not a Greenhouse Effect?", options: ["Increasing atmospheric temperature", "Increasing food chains", "Increasing flood risks", "Increasing sea-level"], correctAnswer: 1, explanation: "Increasing food chains is not a consequence of the greenhouse effect." },
              { id: "c10-ch14-7", question: "Normally rain water is weakly acidic because of:", options: ["SO₃ gas", "CO₂ gas", "SO₂ gas", "NO₂ gas"], correctAnswer: 1, explanation: "CO₂ dissolves in rainwater to form weak carbonic acid (H₂CO₃), making it slightly acidic (pH ~5.6)." },
              { id: "c10-ch14-8", question: "Buildings are being damaged by acid rain because it attacks:", options: ["Calcium sulphate", "Calcium nitrate", "Calcium carbonate", "Calcium oxalate"], correctAnswer: 2, explanation: "Acid rain reacts with calcium carbonate (CaCO₃) in limestone/marble buildings." },
              { id: "c10-ch14-9", question: "Acid rain affects the aquatic life by clogging fish gills because of:", options: ["Lead metal", "Chromium metal", "Mercury metal", "Aluminium metal"], correctAnswer: 3, explanation: "Acid rain leaches aluminium from soil into water, which clogs fish gills." },
              { id: "c10-ch14-10", question: "Ozone is beneficial for us as it:", options: ["Absorbs infrared radiations", "Absorbs ultraviolet radiations", "Absorbs chlorofluorocarbons", "Absorbs air pollutants"], correctAnswer: 1, explanation: "The ozone layer absorbs harmful UV radiation from the Sun." },
              { id: "c10-ch14-11", question: "Which one of the following is not an air pollutant?", options: ["Nitrogen", "Carbon monoxide", "Nitrogen dioxide", "Ozone"], correctAnswer: 0, explanation: "Nitrogen (N₂) is a natural component of air (78%), not a pollutant." },
              { id: "c10-ch14-12", question: "Iron and steel structures are damaged by:", options: ["Carbon monoxide", "Sulphur dioxide", "Methane", "Carbon dioxide"], correctAnswer: 1, explanation: "SO₂ causes acid rain which corrodes iron and steel structures." },
              { id: "c10-ch14-13", question: "Infrared radiations emitted by the Earth are absorbed by:", options: ["CO₂ and H₂O", "N₂ and O₂", "CO₂ and N₂", "O₂ and CO₂"], correctAnswer: 0, explanation: "CO₂ and water vapour are greenhouse gases that absorb infrared radiation from Earth." },
              { id: "c10-ch14-14", question: "Global warming causes rising of the sea level. The cause of global warming is:", options: ["CO₂ gas", "SO₂ gas", "NOₓ gases", "O₃ gas"], correctAnswer: 0, explanation: "CO₂ is the primary greenhouse gas responsible for global warming." },
              { id: "c10-ch14-15", question: "Which gas protects the Earth's surface from ultraviolet radiations?", options: ["CO₂", "CO", "N₂", "O₃"], correctAnswer: 3, explanation: "Ozone (O₃) in the stratosphere filters out harmful UV radiation." },
              { id: "c10-ch14-16", question: "Effects of ozone depletion are except the following one:", options: ["Increases infectious diseases", "Increases crops production", "Can cause skin cancer", "Can cause climatic changes"], correctAnswer: 1, explanation: "Ozone depletion does not increase crop production; it damages crops due to increased UV." },
              { id: "c10-ch14-17", question: "Which one of these pollutants is not found in car exhaust fumes?", options: ["CO", "O₃", "NO₂", "SO₂"], correctAnswer: 1, explanation: "Ozone (O₃) is not directly emitted from car exhausts; it forms in the atmosphere." },
              { id: "c10-ch14-18", question: "The process by which atmospheric nitrogen is turned into nitrates in the soil is called:", options: ["Nitration", "Fixing", "Oxidation", "Reduction"], correctAnswer: 1, explanation: "Nitrogen fixation converts atmospheric N₂ into soil nitrates." },
              { id: "c10-ch14-19", question: "Global warming is caused by:", options: ["Absorption of infrared radiations emitted by the Earth's surface", "Absorption of infrared radiations coming from the Sun", "Absorption of ultraviolet radiation coming from the Sun", "Emission of ultraviolet radiation from the Earth's surface"], correctAnswer: 0, explanation: "Greenhouse gases absorb infrared radiation emitted by Earth's surface, causing global warming." },
              { id: "c10-ch14-20", question: "Carbon monoxide is harmful to us because:", options: ["It paralyses the lungs", "It damages lungs tissues", "It reduces oxygen carrying ability of haemoglobin", "It makes the blood coagulate"], correctAnswer: 2, explanation: "CO binds to haemoglobin 200x more strongly than O₂, reducing oxygen transport." }
            ],
            outsideExerciseMCQs: c10Ch14OutsideMCQs
          },
          {
            id: "ch15",
            name: "Water",
            importantTopics: ["Properties of Water", "Hard Water", "Soft Water", "Water Purification", "Waterborne Diseases"],
            keyConcepts: ["Hardness Types", "Temporary & Permanent Hardness", "Boiling Method", "Clark's Method", "Distillation"],
            formulas: ["Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂ (temporary hardness removal)"],
            mcqs: [
              { id: "c10-ch15-1", question: "Which one of the following properties of water is responsible for rising of water in plants?", options: ["Specific heat capacity", "Surface tension", "Excellent solvent action", "Capillary action"], correctAnswer: 3, explanation: "Capillary action enables water to rise through narrow tubes in plant stems." },
              { id: "c10-ch15-2", question: "Specific heat capacity of water is:", options: ["4.2 kJ g⁻¹ K⁻¹", "4.2 J g⁻¹ K⁻¹", "2.4 kJ g⁻¹ K⁻¹", "2.4 J g⁻¹ K⁻¹"], correctAnswer: 1, explanation: "The specific heat capacity of water is 4.2 J g⁻¹ K⁻¹ (or 4200 J kg⁻¹ K⁻¹)." },
              { id: "c10-ch15-3", question: "Water dissolves non-ionic compounds by:", options: ["Ion-ion forces", "Ion-dipole forces", "Dipole-dipole forces", "Hydrogen bonding"], correctAnswer: 2, explanation: "Non-ionic (polar) compounds dissolve via dipole-dipole interactions with water." },
              { id: "c10-ch15-4", question: "Temporary hardness is because of:", options: ["Ca(HCO₃)₂", "CaCO₃", "MgCO₃", "MgSO₄"], correctAnswer: 0, explanation: "Temporary hardness is caused by dissolved calcium bicarbonate Ca(HCO₃)₂." },
              { id: "c10-ch15-5", question: "Temporary hardness is removed by adding:", options: ["Quick lime", "Slaked lime", "Limestone", "Lime water"], correctAnswer: 3, explanation: "Lime water Ca(OH)₂ solution removes temporary hardness (Clark's method)." },
              { id: "c10-ch15-6", question: "Permanent hardness is removed by adding:", options: ["Na₂ zeolite", "Soda lime", "Lime water", "Quick lime"], correctAnswer: 0, explanation: "Sodium zeolite (ion exchange) removes permanent hardness by exchanging Ca²⁺/Mg²⁺ with Na⁺." },
              { id: "c10-ch15-7", question: "Which one of the following salts makes the water permanently hard?", options: ["Na₂CO₃", "NaHCO₃", "Ca(HCO₃)₂", "CaSO₄"], correctAnswer: 3, explanation: "CaSO₄ causes permanent hardness (cannot be removed by boiling)." },
              { id: "c10-ch15-8", question: "Rapid growth of algae in water bodies is because of detergent having:", options: ["Carbonate salts", "Sulphonic acid salts", "Sulphate salts", "Phosphate salts"], correctAnswer: 3, explanation: "Phosphates in detergents cause eutrophication, leading to rapid algae growth." },
              { id: "c10-ch15-9", question: "Depletion of O₂ from water is not because of:", options: ["Decaying of aquatic plants", "Biodegradation of aquatic plants", "Rapid growth of aquatic plants", "Decomposition of aquatic plants"], correctAnswer: 2, explanation: "Rapid growth of plants produces O₂ through photosynthesis, not depletes it." },
              { id: "c10-ch15-10", question: "Which one of the following diseases causes liver inflammation?", options: ["Typhoid", "Jaundice", "Cholera", "Hepatitis"], correctAnswer: 3, explanation: "Hepatitis causes inflammation of the liver." },
              { id: "c10-ch15-11", question: "Which one of the following diseases causes severe diarrhea and can be fatal?", options: ["Jaundice", "Dysentery", "Cholera", "Typhoid"], correctAnswer: 2, explanation: "Cholera causes severe watery diarrhea and can be fatal if untreated." },
              { id: "c10-ch15-12", question: "Which one of the following gases is used to destroy harmful bacteria in water?", options: ["Iodine", "Chlorine", "Fluorine", "Bromine"], correctAnswer: 1, explanation: "Chlorine is used to disinfect water by killing harmful bacteria." },
              { id: "c10-ch15-13", question: "Which one of the following ions does not cause hardness in water?", options: ["Ca²⁺", "Mg²⁺", "SO₄²⁻", "Na⁺"], correctAnswer: 3, explanation: "Na⁺ ions do not cause water hardness. Only Ca²⁺ and Mg²⁺ cause hardness." },
              { id: "c10-ch15-14", question: "A disease that causes bone and tooth damage is:", options: ["Fluorosis", "Hepatitis", "Cholera", "Jaundice"], correctAnswer: 0, explanation: "Fluorosis (excess fluoride) causes damage to bones and teeth." },
              { id: "c10-ch15-15", question: "Ionic compounds are soluble in water due to:", options: ["Hydrogen bonding", "Ion-dipole forces", "Dipole-dipole forces", "Dipole-induced dipole forces"], correctAnswer: 1, explanation: "Ionic compounds dissolve in water through ion-dipole interactions." },
              { id: "c10-ch15-16", question: "The chemicals used to kill or control pests are called pesticides. They are:", options: ["Dangerous inorganic chemicals", "Dangerous organic chemicals", "Beneficial inorganic chemicals", "Beneficial organic chemicals"], correctAnswer: 1, explanation: "Pesticides are dangerous organic chemicals used to control pests." }
            ],
            outsideExerciseMCQs: c10Ch15OutsideMCQs
          },
          {
            id: "ch16",
            name: "Chemical Industries",
            importantTopics: ["Fertilizers", "Petrochemicals", "Metallurgy", "Solvay Process"],
            keyConcepts: ["Urea Production", "Petroleum Refining", "Manufacturing Processes", "Copper Extraction"],
            formulas: [],
            mcqs: [
              { id: "c10-ch16-1", question: "Concentration is a:", options: ["Mixing technique", "Separating technique", "Boiling technique", "Cooling technique"], correctAnswer: 1, explanation: "Concentration is a separating technique to remove gangue from ore." },
              { id: "c10-ch16-2", question: "Froth flotation process is used to concentrate the ore on:", options: ["Density basis", "Concentration basis", "Wetting basis", "Magnetic basis"], correctAnswer: 2, explanation: "Froth flotation separates ore based on wetting properties (hydrophobic vs hydrophilic)." },
              { id: "c10-ch16-3", question: "Matte is a mixture of:", options: ["FeS and CuS", "Cu₂O and FeO", "Cu₂S and FeS", "CuS and FeO"], correctAnswer: 2, explanation: "Matte produced during copper extraction is a mixture of Cu₂S and FeS." },
              { id: "c10-ch16-4", question: "In the bessemerization process:", options: ["Roasted ore is heated", "Molten matte is removed", "Molten matte is heated", "Molten matte is added"], correctAnswer: 2, explanation: "In bessemerization, molten matte is heated in a Bessemer converter with air blast." },
              { id: "c10-ch16-5", question: "Concentration of the copper ore is carried out by:", options: ["Calcination", "Roasting", "Froth flotation", "Distillation"], correctAnswer: 2, explanation: "Copper sulphide ores are concentrated by froth flotation process." },
              { id: "c10-ch16-6", question: "When CO₂ is passed through the ammonical brine the only salt that precipitates is:", options: ["NaHCO₃", "NH₄HCO₃", "Na₂CO₃", "(NH₄)₂CO₃"], correctAnswer: 0, explanation: "NaHCO₃ precipitates out as it is least soluble in the cold ammoniacal brine." },
              { id: "c10-ch16-7", question: "In Solvay's process slaked lime is used to:", options: ["Prepare CO₂", "Prepare quick lime", "Recover ammonia", "Form Na₂CO₃"], correctAnswer: 2, explanation: "Slaked lime reacts with NH₄Cl to recover ammonia for reuse." },
              { id: "c10-ch16-8", question: "When NaHCO₃ is heated it forms:", options: ["CO₂", "Ca(OH)₂", "CaCO₃", "CaO"], correctAnswer: 0, explanation: "2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. CO₂ is released on heating." },
              { id: "c10-ch16-9", question: "Formula of urea is:", options: ["NH₂COONH₄", "NH₂COONH₂", "NH₂CONH₄", "NH₂CONH₂"], correctAnswer: 3, explanation: "Urea formula is NH₂CONH₂ (also written as CO(NH₂)₂)." },
              { id: "c10-ch16-10", question: "Crude oil is heated in the furnace up to:", options: ["300°C", "350°C", "400°C", "450°C"], correctAnswer: 2, explanation: "In petroleum refining, crude oil is heated to about 400°C in the furnace." },
              { id: "c10-ch16-11", question: "When heated crude oil is fed to the fractionating tower:", options: ["Vapours of higher boiling point fraction condense first in the lower part of the tower", "Vapours of lower boiling point fraction condense first in the lower part of tower", "Vapours of higher boiling point condense later in the upper part of tower", "Vapours of higher boiling point never condense"], correctAnswer: 0, explanation: "Higher boiling point fractions condense first at the bottom of the tower." },
              { id: "c10-ch16-12", question: "Which one of the following is used as jet fuel:", options: ["Kerosene oil", "Lubricating oil", "Fuel oil", "Diesel oil"], correctAnswer: 0, explanation: "Kerosene oil is used as jet fuel (aviation fuel)." },
              { id: "c10-ch16-13", question: "Which one of the following is not a fraction of Residual oil?", options: ["Paraffin wax", "Asphalt", "Fuel oil", "Petroleum coke"], correctAnswer: 2, explanation: "Fuel oil is a separate fraction, not part of the residual oil fractions." },
              { id: "c10-ch16-14", question: "Which one of the following is not a fraction of petroleum?", options: ["Kerosene oil", "Diesel oil", "Alcohol", "Petrol"], correctAnswer: 2, explanation: "Alcohol is not a petroleum fraction; it is obtained by fermentation." },
              { id: "c10-ch16-15", question: "The nitrogen present in urea is used by plants to synthesize:", options: ["Sugar", "Proteins", "Fats", "DNA"], correctAnswer: 1, explanation: "Plants use nitrogen from urea to synthesize proteins (amino acids)." },
              { id: "c10-ch16-16", question: "Which one of the following organic compounds is found in gasoline?", options: ["C₂H₄", "C₃H₈", "C₈H₁₈", "C₁₂H₂₆"], correctAnswer: 2, explanation: "C₈H₁₈ (octane) is the main component found in gasoline/petrol." }
            ],
            outsideExerciseMCQs: c10Ch16OutsideMCQs
          }
        ]
      },
      {
        id: "math-10",
        name: "Mathematics",
        icon: "📐",
        pairingScheme: `
📋 MATHEMATICS CLASS 10 - PAIRING SCHEME 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 SECTION A - MCQs (15 Marks)
• 15 MCQs from all chapters (1 mark each)

📝 SECTION B - Short Questions (48 Marks)
Attempt 8 out of 12 questions (6 marks each)

Q.2: Chapter 1 + Chapter 2 (2 questions each)
Q.3: Chapter 3 + Chapter 4 (2 questions each)
Q.4: Chapter 5 + Chapter 6 (2 questions each)
Q.5: Chapter 7 + Chapter 8 (2 questions each)
Q.6: Chapter 9 + Chapter 10 (2 questions each)
Q.7: Chapter 11 + Chapter 12 (2 questions each)
Q.8: Chapter 13 (4 questions)

📝 SECTION C - Long Questions (24 Marks)
Attempt 2 out of 4 questions (12 marks each)

Q.9: Chapter 1 + Chapter 2
Q.10: Chapter 3 + Chapter 5
Q.11: Chapter 7 + Chapter 9
Q.12: Chapter 10 + Chapter 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Marks: 87 | Time: 2 Hours 30 Minutes
        `,
        resources: [
          {
            id: "math-10-book",
            name: "Mathematics 10 Textbook (Punjab Board)",
            type: "book",
            driveLink: "https://drive.google.com/file/d/1c_VDPgAMX_h2nUBdhttYQb7foCXVi_wN/view?usp=drivesdk"
          },
          {
            id: "math-10-pairing",
            name: "Mathematics 10 Pairing Scheme 2026",
            type: "notes",
            driveLink: "https://drive.google.com/file/d/18wHgdZqyyK3EUHDlMJjPAN_AnDqW3Uec/view?usp=drivesdk"
          }
        ],
        chapters: [
          {
            id: "ch1",
            name: "Quadratic Equations",
            importantTopics: ["Solving Quadratic Equations", "Factorization Method", "Quadratic Formula", "Completing the Square"],
            keyConcepts: ["Standard Form ax² + bx + c = 0", "Roots", "Methods of Solving"],
            formulas: ["x = (-b ± √(b²-4ac)) / 2a"],
            mcqs: [
              { id: "m10-ch1-1", question: "Standard form of quadratic equation is:", options: ["bx + c = 0, b ≠ 0", "ax² + bx + c = 0, a ≠ 0", "ax² = bx, a ≠ 0", "ax² = 0, a ≠ 0"], correctAnswer: 1, explanation: "The standard form of a quadratic equation is ax² + bx + c = 0 where a ≠ 0." },
              { id: "m10-ch1-2", question: "The number of terms in a standard quadratic equation ax² + bx + c = 0 is:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "A standard quadratic has three terms: ax², bx, and c." },
              { id: "m10-ch1-3", question: "The number of methods to solve a quadratic equation is:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "Three methods: factorization, completing the square, and quadratic formula." },
              { id: "m10-ch1-4", question: "Two linear factors of x² − 15x + 56 are:", options: ["(x − 7) and (x + 8)", "(x + 7) and (x − 8)", "(x − 7) and (x − 8)", "(x + 7) and (x + 8)"], correctAnswer: 2, explanation: "x² − 15x + 56 = (x − 7)(x − 8) since (−7) + (−8) = −15 and (−7)(−8) = 56." },
              { id: "m10-ch1-5", question: "An equation of the type 3ˣ + 3²⁻ˣ + 6 = 0 is a/an:", options: ["Exponential equation", "Reciprocal equation", "Radical equation", "None of these"], correctAnswer: 0, explanation: "Equations involving variable exponents are exponential equations." },
              { id: "m10-ch1-6", question: "The solution set of equation 4x² − 16 = 0 is:", options: ["{−4}", "{4}", "{−2, 2}", "{2}"], correctAnswer: 2, explanation: "4x² = 16, x² = 4, x = ±2." },
              { id: "m10-ch1-7", question: "The solution set of equation x² − 7x + 6 = 0 is:", options: ["{1, 6}", "{−1, −6}", "{−1, 6}", "{1, −6}"], correctAnswer: 0, explanation: "x² − 7x + 6 = (x − 1)(x − 6) = 0, so x = 1 or x = 6." },
              { id: "m10-ch1-8", question: "If b = 0 in a quadratic equation ax² + bx + c = 0, then it is called:", options: ["Pure quadratic equation", "Linear equation", "Quadratic equation", "Exponential equation"], correctAnswer: 0, explanation: "When b = 0, the equation becomes ax² + c = 0, called a pure quadratic." },
              { id: "m10-ch1-9", question: "What is the degree of a quadratic equation?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "A quadratic equation has degree 2." },
              { id: "m10-ch1-10", question: "The number of roots of a quadratic equation is:", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "A quadratic equation always has exactly two roots (which may be equal or complex)." }
            ]
          },
          {
            id: "ch2",
            name: "Theory of Quadratic Equations",
            importantTopics: ["Nature of Roots", "Discriminant", "Cube Roots of Unity", "Symmetric Functions"],
            keyConcepts: ["D = b² - 4ac", "Sum and Product of Roots", "ω and ω²"],
            formulas: ["D = b² - 4ac", "α + β = -b/a", "αβ = c/a", "1 + ω + ω² = 0"],
            mcqs: [
              { id: "m10-ch2-1", question: "α² + β² is equal to:", options: ["α² − β²", "1/α + 1/β", "(α + β)² − 2αβ", "α + β"], correctAnswer: 2, explanation: "α² + β² = (α + β)² − 2αβ is a standard identity." },
              { id: "m10-ch2-2", question: "Two square roots of unity are:", options: ["1, −1", "1, ω", "1, −ω", "ω, ω²"], correctAnswer: 0, explanation: "x² = 1 gives x = 1 or x = −1." },
              { id: "m10-ch2-3", question: "Roots of the equation 4x² − 4x + 1 = 0 are:", options: ["Real, equal", "Real, unequal", "Imaginary", "Irrational"], correctAnswer: 0, explanation: "D = 16 − 16 = 0, so roots are real and equal." },
              { id: "m10-ch2-4", question: "If α, β are the roots of px² + qx + r = 0, then sum of the roots 2α and 2β is:", options: ["-q/p", "r/p", "-2q/p", "2r/p"], correctAnswer: 2, explanation: "Sum of 2α and 2β = 2(α + β) = 2(−q/p) = −2q/p." },
              { id: "m10-ch2-5", question: "If α, β are the roots of x² − x + 1 = 0, then product of the roots 2α and 2β is:", options: ["-2", "2", "4", "-4"], correctAnswer: 2, explanation: "(2α)(2β) = 4αβ = 4(1) = 4." },
              { id: "m10-ch2-6", question: "The nature of the roots of equation ax² + bx + c = 0 is determined by:", options: ["Sum of the roots", "Product of the roots", "Synthetic division", "Discriminant"], correctAnswer: 3, explanation: "The discriminant b² − 4ac determines the nature of the roots." },
              { id: "m10-ch2-7", question: "The discriminant of ax² + bx + c = 0 is:", options: ["b² − 4ac", "b² + 4ac", "−b² + 4ac", "−b² − 4ac"], correctAnswer: 0, explanation: "The discriminant is D = b² − 4ac." },
              { id: "m10-ch2-8", question: "If b² − 4ac < 0, then the roots of ax² + bx + c = 0 are:", options: ["Irrational", "Rational", "Imaginary", "None of these"], correctAnswer: 2, explanation: "When discriminant is negative, roots are imaginary/complex." },
              { id: "m10-ch2-9", question: "Sum of the cube roots of unity is:", options: ["0", "1", "−1", "3"], correctAnswer: 0, explanation: "1 + ω + ω² = 0 is a fundamental property of cube roots of unity." },
              { id: "m10-ch2-10", question: "Product of cube roots of unity is:", options: ["0", "1", "−1", "3"], correctAnswer: 1, explanation: "1 · ω · ω² = ω³ = 1." }
            ]
          },
          {
            id: "ch3",
            name: "Variations",
            importantTopics: ["Direct Variation", "Inverse Variation", "Joint Variation", "Proportion"],
            keyConcepts: ["Constant of Variation", "Continued Proportion", "k-variation"],
            formulas: ["Direct: y = kx", "Inverse: y = k/x", "Joint: z = kxy"],
            mcqs: [
              { id: "m10-ch3-1", question: "If u ∝ v², then:", options: ["u = v²", "u = kv²", "uv² = k", "uv² = 1"], correctAnswer: 1, explanation: "Direct variation: u ∝ v² means u = kv² for some constant k." },
              { id: "m10-ch3-2", question: "In continued proportion a:b = b:c, b is said to be ___ proportional:", options: ["Third", "Fourth", "Mean", "None of these"], correctAnswer: 2, explanation: "In continued proportion, b is the mean proportional between a and c." },
              { id: "m10-ch3-3", question: "In continued proportion a:b = b:c, c is said to be ___ proportional to a and b:", options: ["Third", "Fourth", "Mean", "None of these"], correctAnswer: 0, explanation: "c is the third proportional to a and b in continued proportion." },
              { id: "m10-ch3-4", question: "Find x in proportion 4:x :: 5:15:", options: ["75", "12", "4", "3"], correctAnswer: 1, explanation: "4/x = 5/15, so x = 4 × 15/5 = 12." },
              { id: "m10-ch3-5", question: "Newton's law of Gravitation is an example of:", options: ["Variation", "Direct variation", "Inverse variation", "Joint variation"], correctAnswer: 3, explanation: "Gravitational force varies jointly with masses and inversely with distance squared." },
              { id: "m10-ch3-6", question: "The relation between radius and circumference of a circle is an example of:", options: ["Variation", "Direct variation", "Inverse variation", "Joint variation"], correctAnswer: 1, explanation: "C = 2πr shows circumference varies directly with radius." },
              { id: "m10-ch3-7", question: "If x and y vary directly, then x =:", options: ["y", "ky", "k", "k/y"], correctAnswer: 1, explanation: "Direct variation: x = ky where k is the constant of variation." },
              { id: "m10-ch3-8", question: "If w varies inversely as p², then k =:", options: ["w/p²", "wp²", "p²/w", "wp"], correctAnswer: 1, explanation: "Inverse variation: w = k/p², so k = wp²." },
              { id: "m10-ch3-9", question: "A third proportional of 12 and 4 is:", options: ["3", "4/3", "12", "16"], correctAnswer: 1, explanation: "12:4 = 4:x, so x = 16/12 = 4/3." },
              { id: "m10-ch3-10", question: "In proportion 7:4 :: p:8, p =:", options: ["1", "28", "14", "56"], correctAnswer: 2, explanation: "7/4 = p/8, so p = 56/4 = 14." }
            ]
          },
          {
            id: "ch4",
            name: "Partial Fractions",
            importantTopics: ["Proper & Improper Fractions", "Linear Factors", "Repeated Factors", "Quadratic Factors"],
            keyConcepts: ["Decomposition", "Distinct Linear Factors", "Identity vs Equation"],
            formulas: ["A/(x-a) + B/(x-b)"],
            mcqs: [
              { id: "m10-ch4-1", question: "The identity (5x + 4)² = 25x² + 40x + 16 is true for:", options: ["One value of x", "Two values of x", "All values of x", "None of these"], correctAnswer: 2, explanation: "An identity holds for all values of the variable." },
              { id: "m10-ch4-2", question: "A function of the form f(x) = N(x)/D(x), where N(x) and D(x) are polynomials, is called:", options: ["An identity", "An equation", "A fraction", "None of these"], correctAnswer: 2, explanation: "A ratio of two polynomials is a rational fraction." },
              { id: "m10-ch4-3", question: "A fraction in which the degree of the numerator is greater than or equal to the degree of the denominator is called:", options: ["A proper fraction", "An improper fraction", "An equation", "Algebraic relation"], correctAnswer: 1, explanation: "When degree of numerator ≥ degree of denominator, it's an improper fraction." },
              { id: "m10-ch4-4", question: "A fraction in which the degree of the numerator is less than the degree of the denominator is called:", options: ["An equation", "An improper fraction", "An identity", "A proper fraction"], correctAnswer: 3, explanation: "When degree of numerator < degree of denominator, it's a proper fraction." },
              { id: "m10-ch4-5", question: "(x + 3)² = x² + 6x + 9 is:", options: ["A linear equation", "An equation", "An identity", "None of these"], correctAnswer: 2, explanation: "This is true for all values of x, so it's an identity." },
              { id: "m10-ch4-6", question: "(x³ + 1)/((x − 1)(x + 2)) is:", options: ["A proper fraction", "An improper fraction", "An identity", "A constant term"], correctAnswer: 1, explanation: "Degree of numerator (3) ≥ degree of denominator (2), so it's improper." },
              { id: "m10-ch4-7", question: "Partial fractions of (x − 2)/((x − 1)(x + 2)) are of the form:", options: ["A/(x−1) + B/(x+2)", "(Ax+B)/((x−1)(x+2))", "A + Bx + C/((x−1)(x+2))", "Ax + B + C/((x−1)(x+2))"], correctAnswer: 0, explanation: "For distinct linear factors, use A/(x−1) + B/(x+2)." },
              { id: "m10-ch4-8", question: "How many linear factors a quadratic equation has?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "A quadratic expression has exactly two linear factors." },
              { id: "m10-ch4-9", question: "Partial fractions of (x + 2)/((x + 1)(x² + 2)) are of the form:", options: ["A/(x+1) + B/(x²+2)", "A/(x+1) + (Bx+C)/(x²+2)", "Ax+B+C/((x+1)(x²+2))", "A + Bx/((x+1)(x²+2))"], correctAnswer: 1, explanation: "For irreducible quadratic factor, use (Bx + C)/(x² + 2)." },
              { id: "m10-ch4-10", question: "Cubic polynomial has degree:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "A cubic polynomial has the highest power 3." }
            ]
          },
          {
            id: "ch5",
            name: "Sets and Functions",
            importantTopics: ["Types of Sets", "Set Operations", "Functions", "Types of Functions"],
            keyConcepts: ["Union", "Intersection", "Domain", "Range", "One-to-One", "Onto"],
            formulas: ["n(A∪B) = n(A) + n(B) - n(A∩B)"],
            mcqs: [
              { id: "m10-ch5-1", question: "A collection of well-defined distinct objects is called:", options: ["Subset", "Power set", "Set", "None of these"], correctAnswer: 2, explanation: "A set is a well-defined collection of distinct objects." },
              { id: "m10-ch5-2", question: "A set with no element is called:", options: ["Subset", "Empty set", "Singleton set", "Super set"], correctAnswer: 1, explanation: "A set with no elements is called an empty or null set." },
              { id: "m10-ch5-3", question: "If number of elements in set A is 3 and in set B is 4, then number of elements in A × B is:", options: ["3", "4", "12", "7"], correctAnswer: 2, explanation: "n(A × B) = n(A) × n(B) = 3 × 4 = 12." },
              { id: "m10-ch5-4", question: "The relation {(1,2), (2,3), (3,3), (3,4)} is:", options: ["Onto function", "Into function", "Not a function", "One-one function"], correctAnswer: 2, explanation: "Element 3 maps to both 3 and 4, so it's not a function." },
              { id: "m10-ch5-5", question: "If A ∩ B = ∅, then sets A and B are ___ sets:", options: ["Sub", "Overlapping", "Disjoint", "Power"], correctAnswer: 2, explanation: "Sets with no common elements are called disjoint sets." },
              { id: "m10-ch5-6", question: "If A ⊆ B and B ⊆ A, then:", options: ["A = B", "A ⊂ B", "A ∩ B = ∅", "A ∪ B = ∅"], correctAnswer: 0, explanation: "If each is a subset of the other, they must be equal." },
              { id: "m10-ch5-7", question: "Point (−1, 4) lies in the quadrant:", options: ["I", "II", "III", "IV"], correctAnswer: 1, explanation: "Negative x and positive y means quadrant II." },
              { id: "m10-ch5-8", question: "The domain of {(a,b), (b,c), (c,d)} is:", options: ["{a, b, c}", "{b, c, d}", "{a, b}", "{a, b, c, d}"], correctAnswer: 0, explanation: "Domain is the set of first elements: {a, b, c}." },
              { id: "m10-ch5-9", question: "If f:A → B and range of f = B, then f is an:", options: ["Into function", "Onto function", "Bijective function", "Function"], correctAnswer: 1, explanation: "When range equals codomain, the function is onto (surjective)." },
              { id: "m10-ch5-10", question: "Venn diagram was first used by:", options: ["John Venn", "Newton", "Arthur Cayley", "John Napier"], correctAnswer: 0, explanation: "Venn diagrams are named after John Venn who introduced them." }
            ]
          },
          {
            id: "ch6",
            name: "Basic Statistics",
            importantTopics: ["Measures of Central Tendency", "Mean", "Median", "Mode", "Dispersion"],
            keyConcepts: ["Grouped & Ungrouped Data", "Variance", "Standard Deviation"],
            formulas: ["Mean = Σx/n", "Mean (grouped) = Σfx/Σf", "Variance = S²"],
            mcqs: [
              { id: "m10-ch6-1", question: "A data in the form of frequency distribution is called:", options: ["Grouped data", "Ungrouped data", "Histogram", "Dispersion"], correctAnswer: 0, explanation: "Data organized in a frequency distribution table is grouped data." },
              { id: "m10-ch6-2", question: "The most frequently occurring observation in a data set is called:", options: ["Mode", "Median", "Harmonic mean", "Mean"], correctAnswer: 0, explanation: "Mode is the value that appears most often in a data set." },
              { id: "m10-ch6-3", question: "The measure which determines the middlemost observation in a data set is called:", options: ["Median", "Mode", "Mean", "Range"], correctAnswer: 0, explanation: "Median is the middle value when data is arranged in order." },
              { id: "m10-ch6-4", question: "The observations that divide a data set into four equal parts are called:", options: ["Deciles", "Quartiles", "Percentiles", "Mode"], correctAnswer: 1, explanation: "Quartiles divide data into four equal parts." },
              { id: "m10-ch6-5", question: "Median from the data 82, 93, 86, 92 and 79 is:", options: ["82", "86", "92", "93"], correctAnswer: 1, explanation: "Arranged: 79, 82, 86, 92, 93. Middle value is 86." },
              { id: "m10-ch6-6", question: "The class having maximum frequency is called ___ class:", options: ["Modal", "Median", "Lower", "Upper"], correctAnswer: 0, explanation: "The class with the highest frequency is the modal class." },
              { id: "m10-ch6-7", question: "Variance is denoted by:", options: ["V", "S", "S²", "X̄"], correctAnswer: 2, explanation: "Variance is denoted by S² (sigma squared)." },
              { id: "m10-ch6-8", question: "Sum of the deviations of variable x from its mean is always:", options: ["Zero", "One", "Same", "Negative"], correctAnswer: 0, explanation: "The sum of deviations from the mean is always zero: Σ(xᵢ − x̄) = 0." },
              { id: "m10-ch6-9", question: "Geometric Mean of 2, 4, 8 is:", options: ["2", "4", "8", "3"], correctAnswer: 1, explanation: "G.M. = ∛(2 × 4 × 8) = ∛64 = 4." },
              { id: "m10-ch6-10", question: "If standard deviation is 6 then its variance is:", options: ["6", "36", "√6", "12"], correctAnswer: 1, explanation: "Variance = (Standard Deviation)² = 6² = 36." }
            ]
          },
          {
            id: "ch7",
            name: "Introduction to Trigonometry",
            importantTopics: ["Trigonometric Ratios", "Angle Measurement", "Trigonometric Identities"],
            keyConcepts: ["sin, cos, tan", "sec, cosec, cot", "Degrees & Radians"],
            formulas: ["sin²θ + cos²θ = 1", "1 + tan²θ = sec²θ", "1 + cot²θ = cosec²θ"],
            mcqs: [
              { id: "m10-ch7-1", question: "The system of measurement in which the angle is measured in radians is called:", options: ["CGS system", "Sexagesimal system", "MKS system", "Circular system"], correctAnswer: 3, explanation: "The circular system measures angles in radians." },
              { id: "m10-ch7-2", question: "sec²θ =", options: ["1 − sin²θ", "1 + tan²θ", "1 + cos²θ", "1 − tan²θ"], correctAnswer: 1, explanation: "sec²θ = 1 + tan²θ is a fundamental trigonometric identity." },
              { id: "m10-ch7-3", question: "cosec²θ − cot²θ =", options: ["−1", "1", "0", "tanθ"], correctAnswer: 1, explanation: "From the identity 1 + cot²θ = cosec²θ, we get cosec²θ − cot²θ = 1." },
              { id: "m10-ch7-4", question: "sin 30° =", options: ["1", "√3/2", "1/2", "0"], correctAnswer: 2, explanation: "sin 30° = 1/2 is a standard trigonometric value." },
              { id: "m10-ch7-5", question: "cos 45° =", options: ["1", "√2", "1/√2", "0"], correctAnswer: 2, explanation: "cos 45° = 1/√2 = √2/2." },
              { id: "m10-ch7-6", question: "tan 60° =", options: ["1", "√3", "1/√3", "2"], correctAnswer: 1, explanation: "tan 60° = √3." },
              { id: "m10-ch7-7", question: "π radians =", options: ["0°", "90°", "180°", "360°"], correctAnswer: 2, explanation: "π radians = 180°." },
              { id: "m10-ch7-8", question: "sin²θ + cos²θ =", options: ["tan²θ", "cot²θ", "1", "0"], correctAnswer: 2, explanation: "The Pythagorean identity: sin²θ + cos²θ = 1." },
              { id: "m10-ch7-9", question: "1° =", options: ["π/180 radian", "180/π radian", "π radian", "180 radian"], correctAnswer: 0, explanation: "To convert degrees to radians: multiply by π/180." },
              { id: "m10-ch7-10", question: "In which quadrant are all trigonometric ratios positive?", options: ["I", "II", "III", "IV"], correctAnswer: 0, explanation: "All trigonometric ratios are positive in quadrant I." }
            ]
          },
          {
            id: "ch8",
            name: "Projection of a Side of a Triangle",
            importantTopics: ["Projection Formula", "Law of Cosines"],
            keyConcepts: ["Projection", "Oblique Triangles"],
            formulas: ["a = b cos C + c cos B", "a² = b² + c² − 2bc cos A"],
            mcqs: [
              { id: "m10-ch8-1", question: "In a right triangle, the square of the hypotenuse is equal to:", options: ["Sum of other two sides", "Sum of squares of other two sides", "Product of other two sides", "Difference of squares"], correctAnswer: 1, explanation: "Pythagoras theorem: c² = a² + b²." },
              { id: "m10-ch8-2", question: "The projection of side b on side c is:", options: ["b cos A", "b cos C", "c cos B", "a cos C"], correctAnswer: 0, explanation: "The projection of b on c = b cos A where A is the included angle." },
              { id: "m10-ch8-3", question: "In △ABC, a² = b² + c² − 2bc cos A is called:", options: ["Sine rule", "Cosine rule", "Projection formula", "Tangent rule"], correctAnswer: 1, explanation: "This is the law of cosines (cosine rule)." },
              { id: "m10-ch8-4", question: "If angle A = 90° in the cosine rule, then a² =:", options: ["b² + c²", "b² − c²", "2bc", "b² + c² + 2bc"], correctAnswer: 0, explanation: "When A = 90°, cos 90° = 0, so a² = b² + c² (Pythagoras)." },
              { id: "m10-ch8-5", question: "In △ABC, a = b cos C + c cos B is called:", options: ["Sine rule", "Cosine rule", "Projection formula", "Hero's formula"], correctAnswer: 2, explanation: "a = b cos C + c cos B is the projection formula." },
              { id: "m10-ch8-6", question: "The projection formula relates sides and:", options: ["Areas", "Angles", "Perimeter", "Height"], correctAnswer: 1, explanation: "The projection formula involves sides and their opposite angles." },
              { id: "m10-ch8-7", question: "In a triangle, b = a cos C + c cos A is a:", options: ["Cosine formula", "Projection formula", "Sine formula", "Area formula"], correctAnswer: 1, explanation: "This is the projection formula for side b." },
              { id: "m10-ch8-8", question: "cos 0° =", options: ["0", "1", "−1", "1/2"], correctAnswer: 1, explanation: "cos 0° = 1." },
              { id: "m10-ch8-9", question: "If A = 0° in a² = b² + c² − 2bc cos A, then a² =:", options: ["b² + c² − 2bc", "(b − c)²", "Both A and B", "b² + c²"], correctAnswer: 2, explanation: "cos 0° = 1, so a² = b² + c² − 2bc = (b − c)²." },
              { id: "m10-ch8-10", question: "In an obtuse-angled triangle, the square of the side opposite to obtuse angle is:", options: ["Less than sum of squares of other two sides", "Equal to sum of squares of other two sides", "Greater than sum of squares of other two sides", "None of these"], correctAnswer: 2, explanation: "Since cos of an obtuse angle is negative, a² > b² + c²." }
            ]
          },
          {
            id: "ch9",
            name: "Chords of a Circle",
            importantTopics: ["Chord Properties", "Perpendicular from Center", "Equal Chords"],
            keyConcepts: ["Chord bisected by perpendicular from center", "Congruent chords"],
            formulas: [],
            mcqs: [
              { id: "m10-ch9-1", question: "A line segment joining any two points of a circle is called:", options: ["Circumference", "Radial segment", "Chord", "Diameter"], correctAnswer: 2, explanation: "A chord is a line segment joining any two points on a circle." },
              { id: "m10-ch9-2", question: "The largest chord of a circle is its:", options: ["Circumference", "Radial segment", "Chord", "Diameter"], correctAnswer: 3, explanation: "The diameter is the longest possible chord of a circle." },
              { id: "m10-ch9-3", question: "Perpendicular from center to a chord:", options: ["Passes through circumference", "Bisects the chord", "Is parallel to chord", "Equals the radius"], correctAnswer: 1, explanation: "A perpendicular from the center of a circle bisects the chord." },
              { id: "m10-ch9-4", question: "Two chords equidistant from the center are:", options: ["Parallel", "Non congruent", "Congruent", "Perpendicular"], correctAnswer: 2, explanation: "Chords equidistant from the center are equal in length (congruent)." },
              { id: "m10-ch9-5", question: "Through how many non-collinear points can a circle pass?", options: ["One", "Two", "Three", "None"], correctAnswer: 2, explanation: "A unique circle passes through exactly three non-collinear points." },
              { id: "m10-ch9-6", question: "Locus of a point in a plane equidistant from a fixed point is called:", options: ["Radius", "Circle", "Circumference", "Diameter"], correctAnswer: 1, explanation: "A circle is the set of all points equidistant from a fixed point (center)." },
              { id: "m10-ch9-7", question: "The line segment joining the center and any point of circle is called:", options: ["Circumference", "Radial segment", "Chord", "Diameter"], correctAnswer: 1, explanation: "A radial segment connects the center to any point on the circle." },
              { id: "m10-ch9-8", question: "If central chord of a circle is 12 cm, then its radius is:", options: ["6 cm", "8 cm", "12 cm", "24 cm"], correctAnswer: 0, explanation: "The central chord is the diameter. Radius = diameter/2 = 12/2 = 6 cm." },
              { id: "m10-ch9-9", question: "A complete circle is divided into:", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], correctAnswer: 3, explanation: "A full circle measures 360°." },
              { id: "m10-ch9-10", question: "π is the ratio of:", options: ["Radius and diameter", "Diameter and circumference", "Circumference and diameter", "Circumference and radius"], correctAnswer: 2, explanation: "π = circumference/diameter." }
            ]
          },
          {
            id: "ch10",
            name: "Tangent to a Circle",
            importantTopics: ["Tangent Properties", "Tangent-Radius Relationship", "Tangent from External Point"],
            keyConcepts: ["Tangent perpendicular to radius", "Equal tangents from external point"],
            formulas: [],
            mcqs: [
              { id: "m10-ch10-1", question: "A line which has only one point in common with a circle is called:", options: ["Sine of a circle", "Cosine of a circle", "Tangent of a circle", "Secant of a circle"], correctAnswer: 2, explanation: "A tangent touches the circle at exactly one point." },
              { id: "m10-ch10-2", question: "A line which has two points in common with a circle is called:", options: ["Sine of a circle", "Cosine of a circle", "Tangent of a circle", "Secant of a circle"], correctAnswer: 3, explanation: "A secant intersects the circle at two points." },
              { id: "m10-ch10-3", question: "Two tangents drawn to a circle from a point outside it are ___ in length:", options: ["Half", "Equal", "Double", "Triple"], correctAnswer: 1, explanation: "Tangent segments from the same external point are equal in length." },
              { id: "m10-ch10-4", question: "A circle has only one:", options: ["Secant", "Chord", "Diameter", "Center"], correctAnswer: 3, explanation: "Every circle has exactly one center." },
              { id: "m10-ch10-5", question: "A tangent line intersects the circle at:", options: ["Three points", "Two points", "Single point", "No point"], correctAnswer: 2, explanation: "A tangent meets (touches) the circle at exactly one point." },
              { id: "m10-ch10-6", question: "Tangents drawn at the ends of a diameter of a circle are ___ to each other:", options: ["Parallel", "Non-parallel", "Perpendicular", "Coincident"], correctAnswer: 0, explanation: "Tangents at the endpoints of a diameter are parallel." },
              { id: "m10-ch10-7", question: "Tangent to circle is perpendicular to:", options: ["Chord", "Diameter", "Radius at point of contact", "Secant"], correctAnswer: 2, explanation: "The tangent is always perpendicular to the radius at the point of tangency." },
              { id: "m10-ch10-8", question: "How many tangents can be drawn from a point outside the circle?", options: ["1", "2", "3", "None"], correctAnswer: 1, explanation: "Exactly two tangents can be drawn from an external point to a circle." },
              { id: "m10-ch10-9", question: "If two circles touch each other, their centers and point of contact are:", options: ["Coincident", "Non collinear", "Collinear", "Non coplanar"], correctAnswer: 2, explanation: "The centers and the point of tangency lie on the same straight line." },
              { id: "m10-ch10-10", question: "The distance between the centers of two congruent circles touching externally is:", options: ["Zero length", "The radius of each circle", "The diameter of each circle", "Twice the diameter"], correctAnswer: 2, explanation: "Distance = r₁ + r₂ = r + r = 2r = diameter (for congruent circles)." }
            ]
          },
          {
            id: "ch11",
            name: "Chords and Arcs",
            importantTopics: ["Arc Length", "Relation between Chords and Arcs", "Central Angle"],
            keyConcepts: ["Equal chords = equal arcs", "Arc subtended angle"],
            formulas: ["Arc length = rθ (θ in radians)"],
            mcqs: [
              { id: "m10-ch11-1", question: "A 4 cm long chord subtends a central angle of 60°. The radial segment of this circle is:", options: ["1 cm", "2 cm", "3 cm", "4 cm"], correctAnswer: 3, explanation: "If chord = radius and central angle = 60°, then an equilateral triangle is formed, so r = 4 cm." },
              { id: "m10-ch11-2", question: "The length of a chord and the radial segment of a circle are congruent. The central angle made by the chord will be:", options: ["30°", "45°", "60°", "75°"], correctAnswer: 2, explanation: "When chord = radius, the triangle formed is equilateral, so central angle = 60°." },
              { id: "m10-ch11-3", question: "Out of two congruent arcs of a circle, if one arc makes a central angle of 30° then the other arc will subtend:", options: ["15°", "30°", "45°", "60°"], correctAnswer: 1, explanation: "Congruent arcs subtend equal central angles." },
              { id: "m10-ch11-4", question: "An arc subtends a central angle of 40°, then the corresponding chord will subtend a central angle of:", options: ["20°", "40°", "60°", "80°"], correctAnswer: 1, explanation: "A chord and its arc subtend the same central angle." },
              { id: "m10-ch11-5", question: "A pair of chords subtending two congruent central angles is:", options: ["Congruent", "Incongruent", "Overlapping", "Parallel"], correctAnswer: 0, explanation: "Equal central angles correspond to equal chords." },
              { id: "m10-ch11-6", question: "Equal chords cut off:", options: ["Unequal arcs", "Equal arcs", "No arcs", "Diameter"], correctAnswer: 1, explanation: "Equal chords subtend equal arcs in the same circle." },
              { id: "m10-ch11-7", question: "The semi-circumference and diameter both subtend a central angle of:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "Both the semi-circumference and diameter subtend 180° at the center." },
              { id: "m10-ch11-8", question: "If an arc subtends a central angle of 60°, the corresponding chord makes a central angle of:", options: ["20°", "40°", "60°", "80°"], correctAnswer: 2, explanation: "The chord and its corresponding arc subtend the same central angle." },
              { id: "m10-ch11-9", question: "The arc length formula is:", options: ["l = r/θ", "l = θ/r", "l = rθ", "l = r²θ"], correctAnswer: 2, explanation: "Arc length l = rθ where θ is in radians." },
              { id: "m10-ch11-10", question: "Area of a circular sector =", options: ["rθ", "r²θ", "(1/2)rθ", "(1/2)r²θ"], correctAnswer: 3, explanation: "Area of sector = (1/2)r²θ where θ is in radians." }
            ]
          },
          {
            id: "ch12",
            name: "Angle in a Segment of a Circle",
            importantTopics: ["Inscribed Angle", "Central Angle", "Angle in Semicircle"],
            keyConcepts: ["Inscribed angle = half central angle", "Angle in semicircle = 90°"],
            formulas: [],
            mcqs: [
              { id: "m10-ch12-1", question: "Angle inscribed in a semicircle is:", options: ["45°", "60°", "90°", "180°"], correctAnswer: 2, explanation: "An angle inscribed in a semicircle is always a right angle (90°)." },
              { id: "m10-ch12-2", question: "Inscribed angle is ___ of central angle on the same arc:", options: ["Equal", "Half", "Double", "Quarter"], correctAnswer: 1, explanation: "The inscribed angle is half the central angle subtended by the same arc." },
              { id: "m10-ch12-3", question: "A circle passes through the vertices of a right-angled triangle with hypotenuse 5 cm. Radius of the circle is:", options: ["1.5 cm", "2.0 cm", "2.5 cm", "3.5 cm"], correctAnswer: 2, explanation: "The hypotenuse is the diameter of the circumscribed circle. Radius = 5/2 = 2.5 cm." },
              { id: "m10-ch12-4", question: "Central angle is ___ the inscribed angle on the same arc:", options: ["Equal to", "Half of", "Double of", "Triple of"], correctAnswer: 2, explanation: "Central angle = 2 × inscribed angle on the same arc." },
              { id: "m10-ch12-5", question: "The circumference of a circle is called its:", options: ["Chord", "Segment", "Boundary", "Point"], correctAnswer: 2, explanation: "The circumference is the boundary of a circle." },
              { id: "m10-ch12-6", question: "A line intersecting a circle is called:", options: ["Tangent", "Secant", "Chord", "Diameter"], correctAnswer: 1, explanation: "A secant is a line that intersects a circle at two points." },
              { id: "m10-ch12-7", question: "The portion of a circle between two radii and an arc is called:", options: ["Sector", "Segment", "Chord", "Interior"], correctAnswer: 0, explanation: "A sector is the region bounded by two radii and an arc." },
              { id: "m10-ch12-8", question: "Angles inscribed in the same arc are:", options: ["Supplementary", "Complementary", "Equal", "Unequal"], correctAnswer: 2, explanation: "Inscribed angles in the same arc (on the same side) are equal." },
              { id: "m10-ch12-9", question: "If a central angle is 120°, the inscribed angle on the same arc is:", options: ["30°", "60°", "90°", "120°"], correctAnswer: 1, explanation: "Inscribed angle = half of central angle = 120°/2 = 60°." },
              { id: "m10-ch12-10", question: "The angle in a major segment is:", options: ["Acute", "Right", "Obtuse", "Reflex"], correctAnswer: 0, explanation: "An inscribed angle in the major segment is always acute (< 90°)." }
            ]
          },
          {
            id: "ch13",
            name: "Practical Geometry - Circles",
            importantTopics: ["Constructing Tangents", "Circumscribed & Inscribed Circles", "Escribed Circles"],
            keyConcepts: ["Tangent construction", "Circumcircle", "Incircle"],
            formulas: [],
            mcqs: [
              { id: "m10-ch13-1", question: "The circle passing through vertices of a triangle is called:", options: ["Circumscribed circle", "Inscribed circle", "Escribed circle", "Right circle"], correctAnswer: 0, explanation: "The circumscribed circle (circumcircle) passes through all three vertices." },
              { id: "m10-ch13-2", question: "The circle which touches the three sides of a triangle is called:", options: ["Circumscribed circle", "Inscribed circle", "Escribed circle", "Right circle"], correctAnswer: 1, explanation: "The inscribed circle (incircle) touches all three sides of the triangle." },
              { id: "m10-ch13-3", question: "The circle touching one side externally and two produced sides internally is called:", options: ["Circumscribed circle", "Inscribed circle", "Escribed circle", "Right circle"], correctAnswer: 2, explanation: "An escribed circle touches one side and the extensions of the other two." },
              { id: "m10-ch13-4", question: "How many tangents can be drawn from external point to a circle?", options: ["One", "Two", "Three", "Infinite"], correctAnswer: 1, explanation: "Exactly two tangents can be drawn from an external point." },
              { id: "m10-ch13-5", question: "The tangent and radius of a circle at the point of contact are:", options: ["Parallel", "Not perpendicular", "Perpendicular", "Collinear"], correctAnswer: 2, explanation: "A tangent is always perpendicular to the radius at the point of contact." },
              { id: "m10-ch13-6", question: "If the in-center and circumcenter of a triangle coincide, the triangle is:", options: ["Isosceles", "Right triangle", "Equilateral", "Scalene"], correctAnswer: 2, explanation: "Only in an equilateral triangle do all centers coincide." },
              { id: "m10-ch13-7", question: "The length of the diameter of a circle is how many times the radius?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "Diameter = 2 × radius." },
              { id: "m10-ch13-8", question: "Tangent is a line touching a circle at:", options: ["No point", "One point", "Two points", "Infinite points"], correctAnswer: 1, explanation: "A tangent touches the circle at exactly one point." },
              { id: "m10-ch13-9", question: "How many common tangents can be drawn for two disjoint circles?", options: ["1", "2", "3", "4"], correctAnswer: 3, explanation: "Two disjoint circles have 4 common tangents (2 external + 2 internal)." },
              { id: "m10-ch13-10", question: "The word geometry is derived from two ___ words:", options: ["English", "Latin", "Greek", "Chinese"], correctAnswer: 2, explanation: "Geometry comes from Greek words 'Geo' (earth) and 'Metron' (measure)." }
            ]
          }
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
          { id: "ch18", name: "Pharmacology" }
        ]
      },
      {
        id: "english-10",
        name: "English",
        icon: "📚",
        chapters: [
          {
            id: "part-a",
            name: "Part A – Correct Form of Verb (Tenses)",
            mcqs: [
              { id: "e10-a1", question: "The sun ______ in the east.", options: ["rise", "rises", "rising", "rised"], correctAnswer: 1, explanation: "Present Indefinite: 'The sun rises' – third person singular takes 's'." },
              { id: "e10-a2", question: "Good students always ______ hard.", options: ["Works", "Work", "Has worked", "Have been worked"], correctAnswer: 1, explanation: "Present Indefinite: plural subject 'students' takes base form 'work'." },
              { id: "e10-a3", question: "Do you ______ to school everyday?", options: ["go", "goes", "going", "went"], correctAnswer: 0, explanation: "After 'do', use base form of the verb: 'go'." },
              { id: "e10-a4", question: "They ______ to school in time.", options: ["come", "comes", "has came", "have comes"], correctAnswer: 0, explanation: "Present Indefinite with plural subject: 'They come'." },
              { id: "e10-a5", question: "The sun ______ in the West.", options: ["Set", "Sets", "Is set", "Setting"], correctAnswer: 1, explanation: "Present Indefinite: 'The sun sets' – third person singular." },
              { id: "e10-a6", question: "I ______ new clothes.", options: ["wears", "has wear", "wear", "have wore"], correctAnswer: 2, explanation: "Present Indefinite with 'I': base form 'wear'." },
              { id: "e10-a7", question: "He ______ newspaper for living.", options: ["sells", "have sold", "selling", "sell"], correctAnswer: 0, explanation: "Present Indefinite: 'He sells' – third person singular takes 's'." },
              { id: "e10-a8", question: "They ______ to sleep at ten.", options: ["went", "gone", "goes", "go"], correctAnswer: 3, explanation: "Present Indefinite with plural subject: 'They go'." },
              { id: "e10-a9", question: "The earth ______ round the sun.", options: ["revolve", "revolving", "revolved", "revolves"], correctAnswer: 3, explanation: "Universal truth in Present Indefinite: 'revolves'." },
              { id: "e10-a10", question: "Najma ______ the clothes clean.", options: ["wash", "have washed", "has wash", "washes"], correctAnswer: 3, explanation: "Present Indefinite: 'Najma washes' – third person singular." },
              { id: "e10-a11", question: "Nasima always ______ the truth.", options: ["speak", "speaks", "speaking", "spoke"], correctAnswer: 1, explanation: "Present Indefinite: 'Nasima speaks' – third person singular." },
              { id: "e10-a12", question: "They ______ tea every morning.", options: ["have taken", "took", "take", "taking"], correctAnswer: 2, explanation: "Present Indefinite with plural subject: 'They take'." },
              { id: "e10-a13", question: "She ______ for London tomorrow.", options: ["Leaves", "Is leaving", "Left", "Will leave"], correctAnswer: 1, explanation: "Present Continuous for planned future: 'She is leaving'." },
              { id: "e10-a14", question: "They are ______ to dinner on Sunday.", options: ["come", "coming", "came", "comes"], correctAnswer: 1, explanation: "Present Continuous: 'are coming'." },
              { id: "e10-a15", question: "The baby ______ for milk now.", options: ["Is crying", "Cried", "Crying", "Was crying"], correctAnswer: 0, explanation: "Present Continuous with 'now': 'is crying'." },
              { id: "e10-a16", question: "She ______ English now.", options: ["Spoke", "Was spoken", "Is speaking", "Speak"], correctAnswer: 2, explanation: "Present Continuous with 'now': 'is speaking'." },
              { id: "e10-a17", question: "Children are not ______ butterflies.", options: ["catch", "caught", "catching", "catches"], correctAnswer: 2, explanation: "Present Continuous: 'are not catching'." },
              { id: "e10-a18", question: "The rickshaw is not ______ this way.", options: ["coming", "come", "comes", "came"], correctAnswer: 0, explanation: "Present Continuous: 'is not coming'." },
              { id: "e10-a19", question: "He is ______ back next week.", options: ["come", "coming", "comes", "came"], correctAnswer: 1, explanation: "Present Continuous for planned future: 'is coming'." },
              { id: "e10-a20", question: "I am not ______ him the secret.", options: ["telling", "tell", "tells", "told"], correctAnswer: 0, explanation: "Present Continuous: 'am not telling'." },
              { id: "e10-a21", question: "I am not ______ tea.", options: ["make", "making", "made", "makes"], correctAnswer: 1, explanation: "Present Continuous: 'am not making'." },
              { id: "e10-a22", question: "She has ______ her lesson.", options: ["Learn", "Learning", "Learns", "Learnt"], correctAnswer: 3, explanation: "Present Perfect: 'has learnt'." },
              { id: "e10-a23", question: "She ______ him back.", options: ["Has not send", "Am not sending", "Has not sent", "Have not sent"], correctAnswer: 2, explanation: "Present Perfect: 'has not sent'." },
              { id: "e10-a24", question: "I already ______ the letter.", options: ["post", "posts", "have been post", "have posted"], correctAnswer: 3, explanation: "Present Perfect: 'have posted'." },
              { id: "e10-a25", question: "She ______ since morning.", options: ["has slept", "has been sleeping", "sleeps", "slept"], correctAnswer: 1, explanation: "Present Perfect Continuous: 'has been sleeping' with 'since'." },
              { id: "e10-a26", question: "You ______ since morning.", options: ["are resting", "rest", "rested", "have been resting"], correctAnswer: 3, explanation: "Present Perfect Continuous: 'have been resting' with 'since'." },
              { id: "e10-a27", question: "Aslam ______ for three hours.", options: ["swam", "has been swimming", "swim", "swimming"], correctAnswer: 1, explanation: "Present Perfect Continuous: 'has been swimming' with 'for'." },
              { id: "e10-a28", question: "He ______ in the sun for an hour.", options: ["standing", "have stood", "stand", "has been standing"], correctAnswer: 3, explanation: "Present Perfect Continuous: 'has been standing' with 'for'." },
              { id: "e10-a29", question: "I ______ here for two hours.", options: ["am waiting", "have been waiting", "have had wait", "have wait"], correctAnswer: 1, explanation: "Present Perfect Continuous: 'have been waiting' with 'for'." },
              { id: "e10-a30", question: "He ______ here since 1970.", options: ["Have been coming", "Had been coming", "Shall be coming", "Will be coming"], correctAnswer: 0, explanation: "Present Perfect Continuous: 'have been coming' with 'since'." },
              { id: "e10-a31", question: "I ______ this motor bike only a month ago.", options: ["Buy", "Am buying", "Bought", "Have been bought"], correctAnswer: 2, explanation: "Past Indefinite: 'bought' – 'a month ago' indicates past." },
              { id: "e10-a32", question: "I ______ her in the plane.", options: ["met", "have meet", "meets", "meeting"], correctAnswer: 0, explanation: "Past Indefinite: 'met'." },
              { id: "e10-a33", question: "Why did he ______ the paper?", options: ["tore", "tears", "tearing", "tear"], correctAnswer: 3, explanation: "After 'did', use base form: 'tear'." },
              { id: "e10-a34", question: "I was sitting in the cafe when you ______ me.", options: ["call", "calls", "called", "calling"], correctAnswer: 2, explanation: "Past Indefinite in the 'when' clause: 'called'." },
              { id: "e10-a35", question: "I was reading a book when the bell ______.", options: ["Was ringing", "Rings", "Rung", "Rang"], correctAnswer: 3, explanation: "Past Indefinite: 'the bell rang'." },
              { id: "e10-a36", question: "Why did he ______ you?", options: ["insulted", "insult", "insults", "insulting"], correctAnswer: 1, explanation: "After 'did', use base form: 'insult'." },
              { id: "e10-a37", question: "She ______ to school an hour ago.", options: ["went", "go", "Goes", "Have gone"], correctAnswer: 0, explanation: "Past Indefinite: 'went' – 'an hour ago' indicates past." },
              { id: "e10-a38", question: "I was going to airport when I ______ her.", options: ["See", "Has seen", "Saw", "Would see"], correctAnswer: 2, explanation: "Past Indefinite in the 'when' clause: 'saw'." },
              { id: "e10-a39", question: "What were you doing when I ______ you last night?", options: ["call", "calling", "calls", "called"], correctAnswer: 3, explanation: "Past Indefinite: 'called' – completed action in the past." },
              { id: "e10-a40", question: "He said that he ______ in that building.", options: ["live", "lives", "will live", "lived"], correctAnswer: 3, explanation: "Past Indefinite in reported speech: 'lived'." },
              { id: "e10-a41", question: "It ______ to rain an hour ago.", options: ["Begin", "Beginning", "Has begun", "Began"], correctAnswer: 3, explanation: "Past Indefinite: 'began' – 'an hour ago'." },
              { id: "e10-a42", question: "The washerman had pressed the clothes before the customer ______.", options: ["comes", "came", "coming", "has came"], correctAnswer: 1, explanation: "Past Indefinite after 'before' with past perfect in main clause." },
              { id: "e10-a43", question: "I ______ a book when the bell rang.", options: ["Read", "Is reading", "was reading", "Am reading"], correctAnswer: 2, explanation: "Past Continuous: 'was reading' – ongoing action interrupted." },
              { id: "e10-a44", question: "They ______ to school when the storm broke.", options: ["were going", "Has broken", "Breaks", "Will break"], correctAnswer: 0, explanation: "Past Continuous: 'were going' – ongoing action interrupted." },
              { id: "e10-a45", question: "They took their breakfast after they ______ their hands.", options: ["Had washed", "Washing", "Have washed", "Washes"], correctAnswer: 0, explanation: "Past Perfect: 'had washed' – action completed before another past action." },
              { id: "e10-a46", question: "Samreen ______ stories for many days when she began to feel headache.", options: ["had been reading", "has been reading", "has read", "have read"], correctAnswer: 0, explanation: "Past Perfect Continuous: 'had been reading' – ongoing past action before another past event." },
              { id: "e10-a47", question: "I ______ for hours when my eyes began to hurt.", options: ["was reading", "am reading", "had been reading", "have been reading"], correctAnswer: 2, explanation: "Past Perfect Continuous: 'had been reading'." },
              { id: "e10-a48", question: "The court ______ its verdict on Thursday next.", options: ["Shall give", "Will give", "Have given", "Has given"], correctAnswer: 1, explanation: "Future Indefinite: 'will give'." },
              { id: "e10-a49", question: "They ______ for London tomorrow.", options: ["Leaves", "Leaving", "Left", "Will leave"], correctAnswer: 3, explanation: "Future Indefinite: 'will leave'." },
              { id: "e10-a50", question: "They ______ all night.", options: ["travel", "travels", "traveling", "will travel"], correctAnswer: 3, explanation: "Future Indefinite: 'will travel'." },
              { id: "e10-a51", question: "I ______ this exercise in an hour's time.", options: ["Will finish", "Finish", "Have finished", "Finishing"], correctAnswer: 0, explanation: "Future Indefinite: 'will finish'." },
              { id: "e10-a52", question: "What you ______ at four?", options: ["will do", "do", "doing", "being done"], correctAnswer: 0, explanation: "Future Indefinite: 'will do'." },
              { id: "e10-a53", question: "I ______ him next Monday.", options: ["see", "have seen", "saw", "shall see"], correctAnswer: 3, explanation: "Future Indefinite: 'shall see' with first person." },
              { id: "e10-a54", question: "I ______ for you at the usual time.", options: ["waiting", "waits", "wait", "shall be waiting"], correctAnswer: 3, explanation: "Future Continuous: 'shall be waiting'." },
              { id: "e10-a55", question: "These mangoes ______ the market by April.", options: ["reaches", "Would reached", "Will have reached", "Reaching"], correctAnswer: 2, explanation: "Future Perfect: 'will have reached' – completed by a future time." },
              { id: "e10-a56", question: "We shall ______ a rest.", options: ["has taken", "have took", "have taken", "taken"], correctAnswer: 2, explanation: "Future Perfect: 'shall have taken'." },
              { id: "e10-a57", question: "Hounds will ______ on the rabbit.", options: ["has fallen", "fallen", "have fallen", "falls"], correctAnswer: 2, explanation: "Future Perfect: 'will have fallen'." },
              { id: "e10-a58", question: "The servant will ______ the hens.", options: ["has shut", "have shut", "shuts", "have been shuts"], correctAnswer: 1, explanation: "Future Perfect: 'will have shut'." },
              { id: "e10-a59", question: "They will ______ the Namaz.", options: ["has offered", "offered", "offering", "have offered"], correctAnswer: 3, explanation: "Future Perfect: 'will have offered'." },
              { id: "e10-a60", question: "She ______ taking this medicine by March next.", options: ["Stop", "Stopped", "Have stopped", "Will have stopped"], correctAnswer: 3, explanation: "Future Perfect: 'will have stopped' – completed by a future time." },
              { id: "e10-a61", question: "She ______ her examination by the next fall.", options: ["take", "took", "will have taken", "takes"], correctAnswer: 2, explanation: "Future Perfect: 'will have taken'." },
              { id: "e10-a62", question: "The farmers ______ the harvest before the rains.", options: ["reap", "reaps", "will have reaped", "reaping"], correctAnswer: 2, explanation: "Future Perfect: 'will have reaped'." }
            ],
            notes: [
              "**Present Indefinite:** Keywords → always, everyday, usually, generally, daily. Use 1st form (+s/es for He/She/It). Example: The sun **rises** in the east.",
              "**Present Continuous:** Keywords → now, at present, at the moment, tomorrow (planned). Use is/am/are + V-ing. Example: She **is speaking** English now.",
              "**Present Perfect:** Keywords → already, yet, recently, just. Use has/have + 3rd form. Example: I have **already posted** the letter.",
              "**Perfect Continuous (Present/Past/Future):** Keywords → since, for. Use has been/have been/had been + V-ing. Example: She **has been sleeping** since morning.",
              "**Past Indefinite:** Keywords → yesterday, ago, last night, last year. Use 2nd form. Example: He **left** twenty minutes ago.",
              "**Past Continuous & Past Perfect:** Keywords → when, before, after. Example: I **was reading** a book when the bell rang. They took breakfast after they **had washed** their hands.",
              "**Future Indefinite:** Keywords → next week, tomorrow. Use will/shall + 1st form. Example: The court **will give** its verdict on Thursday.",
              "**Future Perfect:** Keywords → by April, by next year. Use will have + 3rd form. Example: These mangoes **will have reached** the market by April."
            ]
          },
          {
            id: "part-b",
            name: "Part B – Correct Spelling",
            mcqs: [
              { id: "e10-b1", question: "Choose the correct spelling:", options: ["Entercede", "Intersede", "Enterceed", "Intercede"], correctAnswer: 3, explanation: "The correct spelling is 'Intercede'." },
              { id: "e10-b2", question: "Choose the correct spelling:", options: ["Innavative", "Ennovative", "Innovitive", "Innovative"], correctAnswer: 3, explanation: "The correct spelling is 'Innovative'." },
              { id: "e10-b3", question: "Choose the correct spelling:", options: ["Luxery", "Loxoury", "Lucxry", "Luxury"], correctAnswer: 3, explanation: "The correct spelling is 'Luxury'." },
              { id: "e10-b4", question: "Choose the correct spelling:", options: ["Broodcast", "Brodcast", "Broadkast", "Broadcast"], correctAnswer: 3, explanation: "The correct spelling is 'Broadcast'." },
              { id: "e10-b5", question: "Choose the correct spelling:", options: ["Magnetude", "Magnytude", "Megnitude", "Magnitude"], correctAnswer: 3, explanation: "The correct spelling is 'Magnitude'." },
              { id: "e10-b6", question: "Choose the correct spelling:", options: ["Rekapture", "Recepture", "Recopture", "Recapture"], correctAnswer: 3, explanation: "The correct spelling is 'Recapture'." },
              { id: "e10-b7", question: "Choose the correct spelling:", options: ["Sumbolize", "Symbalize", "Symbolize", "Simbalise"], correctAnswer: 2, explanation: "The correct spelling is 'Symbolize'." },
              { id: "e10-b8", question: "Choose the correct spelling:", options: ["Perticipant", "Pearticipant", "Partecepent", "Participant"], correctAnswer: 3, explanation: "The correct spelling is 'Participant'." },
              { id: "e10-b9", question: "Choose the correct spelling:", options: ["Execusion", "Exacusion", "Excusion", "Execution"], correctAnswer: 3, explanation: "The correct spelling is 'Execution'." },
              { id: "e10-b10", question: "Choose the correct spelling:", options: ["Sercumstances", "Sarcumstances", "Circumistances", "Circumstances"], correctAnswer: 3, explanation: "The correct spelling is 'Circumstances'." },
              { id: "e10-b11", question: "Choose the correct spelling:", options: ["Ointement", "Oantment", "Oientment", "Ointment"], correctAnswer: 3, explanation: "The correct spelling is 'Ointment'." },
              { id: "e10-b12", question: "Choose the correct spelling:", options: ["Aspiretions", "Aspiritons", "Asperations", "Aspirations"], correctAnswer: 3, explanation: "The correct spelling is 'Aspirations'." },
              { id: "e10-b13", question: "Choose the correct spelling:", options: ["Chevalry", "Chavalry", "Cheavalry", "Chivalry"], correctAnswer: 3, explanation: "The correct spelling is 'Chivalry'." },
              { id: "e10-b14", question: "Choose the correct spelling:", options: ["Proficent", "Proficant", "Profeant", "Proficient"], correctAnswer: 3, explanation: "The correct spelling is 'Proficient'." },
              { id: "e10-b15", question: "Choose the correct spelling:", options: ["Prority", "Prioroto", "Priurity", "Priority"], correctAnswer: 3, explanation: "The correct spelling is 'Priority'." },
              { id: "e10-b16", question: "Choose the correct spelling:", options: ["Eqifers", "Aqifers", "Aquifars", "Aquifers"], correctAnswer: 3, explanation: "The correct spelling is 'Aquifers'." },
              { id: "e10-b17", question: "Choose the correct spelling:", options: ["Destetute", "Distitute", "Destitut", "Destitute"], correctAnswer: 3, explanation: "The correct spelling is 'Destitute'." },
              { id: "e10-b18", question: "Choose the correct spelling:", options: ["Attempte", "Uttempt", "Ettempt", "Attempt"], correctAnswer: 3, explanation: "The correct spelling is 'Attempt'." },
              { id: "e10-b19", question: "Choose the correct spelling:", options: ["Motevation", "Motevetion", "Motavation", "Motivation"], correctAnswer: 3, explanation: "The correct spelling is 'Motivation'." },
              { id: "e10-b20", question: "Choose the correct spelling:", options: ["Liesure", "Leisur", "Liasure", "Leisure"], correctAnswer: 3, explanation: "The correct spelling is 'Leisure'." },
              { id: "e10-b21", question: "Choose the correct spelling:", options: ["Carere", "Cereer", "Carrer", "Career"], correctAnswer: 3, explanation: "The correct spelling is 'Career'." },
              { id: "e10-b22", question: "Choose the correct spelling:", options: ["Acisible", "Accessibble", "Acceseble", "Accessible"], correctAnswer: 3, explanation: "The correct spelling is 'Accessible'." },
              { id: "e10-b23", question: "Choose the correct spelling:", options: ["Castamury", "Costomary", "Cestomary", "Customary"], correctAnswer: 3, explanation: "The correct spelling is 'Customary'." },
              { id: "e10-b24", question: "Choose the correct spelling:", options: ["Enfaction", "Infaction", "Enfection", "Infection"], correctAnswer: 3, explanation: "The correct spelling is 'Infection'." },
              { id: "e10-b25", question: "Choose the correct spelling:", options: ["Poroperty", "Praporty", "Proparty", "Property"], correctAnswer: 3, explanation: "The correct spelling is 'Property'." },
              { id: "e10-b26", question: "Choose the correct spelling:", options: ["Calender", "Calandar", "Calander", "Calendar"], correctAnswer: 3, explanation: "The correct spelling is 'Calendar'." },
              { id: "e10-b27", question: "Choose the correct spelling:", options: ["Beleive", "Beleve", "Bilieve", "Believe"], correctAnswer: 3, explanation: "The correct spelling is 'Believe'." },
              { id: "e10-b28", question: "Choose the correct spelling:", options: ["Fabruary", "Febbruary", "Februery", "February"], correctAnswer: 3, explanation: "The correct spelling is 'February'." },
              { id: "e10-b29", question: "Choose the correct spelling:", options: ["Occision", "Ocasion", "Occesion", "Occasion"], correctAnswer: 3, explanation: "The correct spelling is 'Occasion'." },
              { id: "e10-b30", question: "Choose the correct spelling:", options: ["Comming", "Comeing", "Comeinge", "Coming"], correctAnswer: 3, explanation: "The correct spelling is 'Coming'." },
              { id: "e10-b31", question: "Choose the correct spelling:", options: ["Encesstor", "Incestar", "Ansester", "Ancestor"], correctAnswer: 3, explanation: "The correct spelling is 'Ancestor'." },
              { id: "e10-b32", question: "Choose the correct spelling:", options: ["Popolation", "Pupulattion", "Popullation", "Population"], correctAnswer: 3, explanation: "The correct spelling is 'Population'." },
              { id: "e10-b33", question: "Choose the correct spelling:", options: ["Suces", "Sucesse", "Suceess", "Success"], correctAnswer: 3, explanation: "The correct spelling is 'Success'." },
              { id: "e10-b34", question: "Choose the correct spelling:", options: ["Begenning", "Begening", "Begining", "Beginning"], correctAnswer: 3, explanation: "The correct spelling is 'Beginning'." },
              { id: "e10-b35", question: "Choose the correct spelling:", options: ["Addres", "Eddress", "Adress", "Address"], correctAnswer: 3, explanation: "The correct spelling is 'Address'." },
              { id: "e10-b36", question: "Choose the correct spelling:", options: ["Truely", "Trully", "Truelly", "Truly"], correctAnswer: 3, explanation: "The correct spelling is 'Truly'." },
              { id: "e10-b37", question: "Choose the correct spelling:", options: ["Recieve", "Receve", "Reselve", "Receive"], correctAnswer: 3, explanation: "The correct spelling is 'Receive'." },
              { id: "e10-b38", question: "Choose the correct spelling:", options: ["Adhasive", "Adhasiv", "Adehesive", "Adhesive"], correctAnswer: 3, explanation: "The correct spelling is 'Adhesive'." },
              { id: "e10-b39", question: "Choose the correct spelling:", options: ["Throughly", "Thruoghly", "Thoroughy", "Thoroughly"], correctAnswer: 3, explanation: "The correct spelling is 'Thoroughly'." },
              { id: "e10-b40", question: "Choose the correct spelling:", options: ["Premarily", "Primerily", "Primerly", "Primarily"], correctAnswer: 3, explanation: "The correct spelling is 'Primarily'." },
              { id: "e10-b41", question: "Choose the correct spelling:", options: ["Pressever", "Persevare", "Perscever", "Persevere"], correctAnswer: 3, explanation: "The correct spelling is 'Persevere'." },
              { id: "e10-b42", question: "Choose the correct spelling:", options: ["Orphen", "Orfan", "Orphann", "Orphan"], correctAnswer: 3, explanation: "The correct spelling is 'Orphan'." },
              { id: "e10-b43", question: "Choose the correct spelling:", options: ["Revange", "Revenj", "Raveng", "Revenge"], correctAnswer: 3, explanation: "The correct spelling is 'Revenge'." },
              { id: "e10-b44", question: "Choose the correct spelling:", options: ["Reinvegorate", "Reenvigorate", "Reanvigorate", "Reinvigorate"], correctAnswer: 3, explanation: "The correct spelling is 'Reinvigorate'." },
              { id: "e10-b45", question: "Choose the correct spelling:", options: ["Vulnarable", "Volnerable", "Vulnereble", "Vulnerable"], correctAnswer: 3, explanation: "The correct spelling is 'Vulnerable'." },
              { id: "e10-b46", question: "Choose the correct spelling:", options: ["Iscalate", "Eskalate", "Escalete", "Escalate"], correctAnswer: 3, explanation: "The correct spelling is 'Escalate'." },
              { id: "e10-b47", question: "Choose the correct spelling:", options: ["Aplauded", "Appluded", "Applaudod", "Applauded"], correctAnswer: 3, explanation: "The correct spelling is 'Applauded'." },
              { id: "e10-b48", question: "Choose the correct spelling:", options: ["Luoth", "Luath", "Loothe", "Loathe"], correctAnswer: 3, explanation: "The correct spelling is 'Loathe'." },
              { id: "e10-b49", question: "Choose the correct spelling:", options: ["Ecedemic", "Acedemic", "Acidemic", "Academic"], correctAnswer: 3, explanation: "The correct spelling is 'Academic'." },
              { id: "e10-b50", question: "Choose the correct spelling:", options: ["Resum", "Rezume", "Rezum", "Resume"], correctAnswer: 3, explanation: "The correct spelling is 'Resume'." },
              { id: "e10-b51", question: "Choose the correct spelling:", options: ["Enstent", "Enstant", "Instent", "Instant"], correctAnswer: 3, explanation: "The correct spelling is 'Instant'." },
              { id: "e10-b52", question: "Choose the correct spelling:", options: ["Uptitude", "Eptitude", "Aptetude", "Aptitude"], correctAnswer: 3, explanation: "The correct spelling is 'Aptitude'." },
              { id: "e10-b53", question: "Choose the correct spelling:", options: ["Descipline", "Disciplin", "Discepline", "Discipline"], correctAnswer: 3, explanation: "The correct spelling is 'Discipline'." },
              { id: "e10-b54", question: "Choose the correct spelling:", options: ["Guaze", "Guaz", "Gauz", "Gauze"], correctAnswer: 3, explanation: "The correct spelling is 'Gauze'." },
              { id: "e10-b55", question: "Choose the correct spelling:", options: ["Demize", "Demeize", "Demisee", "Demise"], correctAnswer: 3, explanation: "The correct spelling is 'Demise'." },
              { id: "e10-b56", question: "Choose the correct spelling:", options: ["Equitabel", "Equitabble", "Equiteble", "Equitable"], correctAnswer: 3, explanation: "The correct spelling is 'Equitable'." },
              { id: "e10-b57", question: "Choose the correct spelling:", options: ["Critikle", "Critecal", "Cretical", "Critical"], correctAnswer: 3, explanation: "The correct spelling is 'Critical'." },
              { id: "e10-b58", question: "Choose the correct spelling:", options: ["Rewording", "Revarding", "Riwarding", "Rewarding"], correctAnswer: 3, explanation: "The correct spelling is 'Rewarding'." },
              { id: "e10-b59", question: "Choose the correct spelling:", options: ["Resipient", "Recepient", "Ricipient", "Recipient"], correctAnswer: 3, explanation: "The correct spelling is 'Recipient'." },
              { id: "e10-b60", question: "Choose the correct spelling:", options: ["Significanc", "Signifecence", "Signficance", "Significance"], correctAnswer: 3, explanation: "The correct spelling is 'Significance'." },
              { id: "e10-b61", question: "Choose the correct spelling:", options: ["Prevaile", "Prevele", "Preveil", "Prevail"], correctAnswer: 3, explanation: "The correct spelling is 'Prevail'." },
              { id: "e10-b62", question: "Choose the correct spelling:", options: ["Faithfulnes", "Faithfullness", "Faithfullnes", "Faithfulness"], correctAnswer: 3, explanation: "The correct spelling is 'Faithfulness'." },
              { id: "e10-b63", question: "Choose the correct spelling:", options: ["Celibrations", "Celebraitions", "Celibraitions", "Celebrations"], correctAnswer: 3, explanation: "The correct spelling is 'Celebrations'." },
              { id: "e10-b64", question: "Choose the correct spelling:", options: ["Integrety", "Integritty", "Intergity", "Integrity"], correctAnswer: 3, explanation: "The correct spelling is 'Integrity'." },
              { id: "e10-b65", question: "Choose the correct spelling:", options: ["Convickt", "Convicte", "Konvict", "Convict"], correctAnswer: 3, explanation: "The correct spelling is 'Convict'." },
              { id: "e10-b66", question: "Choose the correct spelling:", options: ["Dynamyc", "Dynammic", "Dynomic", "Dynamic"], correctAnswer: 3, explanation: "The correct spelling is 'Dynamic'." },
              { id: "e10-b67", question: "Choose the correct spelling:", options: ["Miner", "Minar", "Minir", "Minor"], correctAnswer: 3, explanation: "The correct spelling is 'Minor'." },
              { id: "e10-b68", question: "Choose the correct spelling:", options: ["Conquar", "Concuer", "Conqueer", "Conquer"], correctAnswer: 3, explanation: "The correct spelling is 'Conquer'." }
            ],
            notes: [
              "**A–C:** Accessible, Academic, Adhesive, Ancestor, Applauded, Aspirations, Attempt, Believe, Broadcast, Calendar, Career, Celebrations, Chivalry, Circumstances, Conquer, Convict, Critical, Customary.",
              "**D–I:** Demise, Destitute, Discipline, Dynamic, Equitable, Escalate, Execution, Faithfulness, February, Gauze, Infection, Innovative, Instant, Integrity, Intercede.",
              "**L–P:** Leisure, Loathe, Luxury, Magnitude, Minor, Motivation, Occasion, Ointment, Orphan, Participant, Persevere, Population, Prevail, Primarily, Priority, Proclaim, Proficient, Property.",
              "**R–V:** Recapture, Receive, Recipient, Reinvigorate, Resume, Revenge, Rewarding, Significance, Success, Symbolize, Thoroughly, Truly, Vulnerable."
            ]
          },
          {
            id: "part-c",
            name: "Part C – Synonyms, Antonyms & Vocabulary",
            mcqs: [
              { id: "e10-c1", question: "The synonym of 'Culprit' is:", options: ["Innocent", "Offender", "Honest", "Dishonest"], correctAnswer: 1, explanation: "'Culprit' means offender or a person guilty of a crime." },
              { id: "e10-c2", question: "'Defy' means:", options: ["Depute", "Disobey", "Offer", "Accept"], correctAnswer: 1, explanation: "'Defy' means to openly resist or refuse to obey." },
              { id: "e10-c3", question: "The antonym of 'Bright' is:", options: ["Dark", "Brilliant", "Clear", "Unaware"], correctAnswer: 0, explanation: "The antonym of 'Bright' is 'Dark'." },
              { id: "e10-c4", question: "'Excel' means:", options: ["Low", "High", "To do extremely well", "Exalted"], correctAnswer: 2, explanation: "'Excel' means to do extremely well or surpass others." },
              { id: "e10-c5", question: "'Firm' means:", options: ["Expensive", "Powerful", "Persistent", "Happy"], correctAnswer: 2, explanation: "'Firm' means persistent or resolute." },
              { id: "e10-c6", question: "The antonym of 'Fail' is:", options: ["Unsuccessful", "Succeed", "Flourish", "Fall"], correctAnswer: 1, explanation: "The antonym of 'Fail' is 'Succeed'." },
              { id: "e10-c7", question: "The antonym of 'Consume' is:", options: ["Utilize", "Save", "Use", "Expel"], correctAnswer: 1, explanation: "The antonym of 'Consume' (to use up) is 'Save'." },
              { id: "e10-c8", question: "The antonym of 'Suffering' is:", options: ["Distress", "Pleasure", "Anguish", "Frustration"], correctAnswer: 1, explanation: "The antonym of 'Suffering' is 'Pleasure'." },
              { id: "e10-c9", question: "The synonym of 'Current' is:", options: ["Dated", "Old", "Up-to-date", "Past"], correctAnswer: 2, explanation: "'Current' means up-to-date or happening now." },
              { id: "e10-c10", question: "The synonym of 'Ancestor' is:", options: ["Forefather", "Antecedent", "Predecessor", "Successor"], correctAnswer: 0, explanation: "'Ancestor' means forefather." },
              { id: "e10-c11", question: "The antonym of 'Abandon' is:", options: ["Support", "Discard", "Desert", "Oppose"], correctAnswer: 0, explanation: "The antonym of 'Abandon' is 'Support'." },
              { id: "e10-c12", question: "The antonym of 'Mighty' is:", options: ["Weak", "Grand", "Strong", "Pretty"], correctAnswer: 0, explanation: "The antonym of 'Mighty' is 'Weak'." },
              { id: "e10-c13", question: "The synonym of 'Solace' is:", options: ["Aggravation", "Frustration", "Comfort", "Effect"], correctAnswer: 2, explanation: "'Solace' means comfort in a time of distress." },
              { id: "e10-c14", question: "'Convicts' means:", options: ["Prisoners", "Delegation", "Troups", "Groups"], correctAnswer: 0, explanation: "'Convicts' means prisoners or those found guilty." },
              { id: "e10-c15", question: "'Victim' means:", options: ["Helper", "Attacker", "Sufferer", "Suppressor"], correctAnswer: 2, explanation: "'Victim' means a person who suffers harm." },
              { id: "e10-c16", question: "The synonym of 'Foe' is:", options: ["Enemy", "Relative", "Friend", "Companion"], correctAnswer: 0, explanation: "'Foe' means enemy." },
              { id: "e10-c17", question: "'Distinct' means:", options: ["Perplexing", "Minor", "Clear", "Difficult"], correctAnswer: 2, explanation: "'Distinct' means clear or easily distinguishable." },
              { id: "e10-c18", question: "The synonym of 'Lovely' is:", options: ["Unattractive", "Beautiful", "Ugly", "Dark"], correctAnswer: 1, explanation: "'Lovely' means beautiful." },
              { id: "e10-c19", question: "'A long bumpy ride' means:", options: ["Rough time", "Soft time", "Fine time", "Pretty time"], correctAnswer: 0, explanation: "'Bumpy' means rough or uneven; a bumpy ride is a rough/difficult time." },
              { id: "e10-c20", question: "The synonym of 'Motivation' is:", options: ["Determination", "Inspiration", "Stagnation", "Recitation"], correctAnswer: 1, explanation: "'Motivation' means inspiration or the reason to act." },
              { id: "e10-c21", question: "The synonym of 'Equitable' is:", options: ["Just", "Equal", "Unfair", "Handsome"], correctAnswer: 0, explanation: "'Equitable' means fair and just." },
              { id: "e10-c22", question: "Which word means 'to identify the nature of a problem, especially an illness'?", options: ["Infection", "Diagnose", "Symptom", "Create"], correctAnswer: 1, explanation: "'Diagnose' means to identify the nature of an illness or problem." },
              { id: "e10-c23", question: "The synonym of 'Persevere' is:", options: ["Give up", "Persist", "Discard", "Surrender"], correctAnswer: 1, explanation: "'Persevere' means to persist or continue despite difficulty." },
              { id: "e10-c24", question: "'Essential' means:", options: ["Unnecessary", "Crucial", "Needless", "Unimportant"], correctAnswer: 1, explanation: "'Essential' means crucial or absolutely necessary." },
              { id: "e10-c25", question: "The synonym of 'Scope' is:", options: ["Shortcoming", "Range of activities", "Weak feelings", "The way to treat"], correctAnswer: 1, explanation: "'Scope' means the range or extent of activities." },
              { id: "e10-c26", question: "'Contest' means:", options: ["Completion", "Competition", "Construction", "Application"], correctAnswer: 1, explanation: "'Contest' means competition." },
              { id: "e10-c27", question: "The antonym of 'Dynamic' is:", options: ["Active", "Static", "Energetic", "Powerful"], correctAnswer: 1, explanation: "The antonym of 'Dynamic' is 'Static'." },
              { id: "e10-c28", question: "The meaning of 'Resume' is:", options: ["Continue", "Discontinue", "Repeat", "Revise"], correctAnswer: 0, explanation: "'Resume' means to continue after a pause." },
              { id: "e10-c29", question: "The antonym of 'Smashing' is:", options: ["Constructing", "Spreading", "Breaking", "Destructing"], correctAnswer: 0, explanation: "The antonym of 'Smashing' (breaking) is 'Constructing'." },
              { id: "e10-c30", question: "The meaning of 'Devise' is:", options: ["Trace", "Break", "Make", "Relate"], correctAnswer: 2, explanation: "'Devise' means to make or plan something." },
              { id: "e10-c31", question: "The synonym of 'Luxury' is:", options: ["Poverty", "Simplicity", "Prosperity", "Destitute"], correctAnswer: 2, explanation: "'Luxury' relates to prosperity and lavishness." },
              { id: "e10-c32", question: "The antonym of 'Peace' is:", options: ["Calmness", "In order", "Harmony", "Destruction"], correctAnswer: 3, explanation: "The antonym of 'Peace' is 'Destruction'." },
              { id: "e10-c33", question: "'Applauded' means:", options: ["Criticized", "Condemned", "Praised", "Ignored"], correctAnswer: 2, explanation: "'Applauded' means praised or shown approval." },
              { id: "e10-c34", question: "'Partake' means:", options: ["Calculate", "Educate", "Participate", "Eradicate"], correctAnswer: 2, explanation: "'Partake' means to participate or take part." },
              { id: "e10-c35", question: "'Proclaim' means:", options: ["Hide", "Announce", "Whisper", "Conceal"], correctAnswer: 1, explanation: "'Proclaim' means to announce publicly." },
              { id: "e10-c36", question: "To 'board a ship' means: to get on for ___", options: ["Air travel", "Land travel", "Sea travel", "Space travel"], correctAnswer: 2, explanation: "To board a ship means to get on for sea travel." },
              { id: "e10-c37", question: "The synonym of 'Adhesive' is:", options: ["Soaking", "Bright", "Sticky", "Smelly"], correctAnswer: 2, explanation: "'Adhesive' means sticky." },
              { id: "e10-c38", question: "'Reeled' means:", options: ["Sealed", "Peeled", "Moved back quickly", "Stopped"], correctAnswer: 2, explanation: "'Reeled' means moved back quickly or staggered." },
              { id: "e10-c39", question: "The synonym of 'Depleted' is:", options: ["Reduced", "Amused", "Reused", "Bright"], correctAnswer: 0, explanation: "'Depleted' means reduced or used up." },
              { id: "e10-c40", question: "The antonym of 'Humanity' is:", options: ["Sympathy", "Alms", "Easy", "Inhumanity"], correctAnswer: 3, explanation: "The antonym of 'Humanity' is 'Inhumanity'." }
            ],
            notes: [
              "**Abandon** → Synonym: Desert, Leave. Antonym: Support, Accept.",
              "**Ancestor** → Synonym: Forefather, Predecessor. Antonym: Successor, Descendant.",
              "**Bright** → Synonym: Brilliant, Clear, Vivid. Antonym: Dark, Dull.",
              "**Consume** → Synonym: Use, Spend, Utilize. Antonym: Save, Hoard.",
              "**Convict** → Synonym: Prisoner, Offender. Antonym: Innocent.",
              "**Culprit** → Synonym: Offender, Criminal. Antonym: Innocent.",
              "**Current** → Synonym: Up-to-date, Present. Antonym: Dated, Old, Ancient.",
              "**Defy** → Synonym: Openly resist, Disobey. Antonym: Accept, Obey, Yield.",
              "**Distinct** → Synonym: Clear, Marked. Antonym: Perplexing, Unknown.",
              "**Equitable** → Synonym: Fair, Just. Antonym: Unfair, Privileged.",
              "**Excel** → Synonym: To do extremely well. Antonym: Fail.",
              "**Firm** → Synonym: Persistent, Resolute. Antonym: Weak, Yielding.",
              "**Foe** → Synonym: Enemy, Rival. Antonym: Friend, Companion.",
              "**Luxury** → Synonym: Prosperity, Comfort. Antonym: Poverty, Destitute.",
              "**Mighty** → Synonym: Strong, Powerful. Antonym: Weak.",
              "**Persevere** → Synonym: Persist, Continue. Antonym: Give up, Surrender.",
              "**Solace** → Synonym: Comfort, Relief. Antonym: Aggravation, Distress.",
              "**Suffering** → Synonym: Anguish, Distress. Antonym: Pleasure, Comfort."
            ]
          },
          {
            id: "part-d",
            name: "Part D – Grammar",
            mcqs: [
              { id: "e10-d1", question: "I saw myself in the mirror. The underlined word is a/an _______ pronoun.", options: ["Personal", "Interrogative", "Relative", "Reflexive"], correctAnswer: 3, explanation: "'Myself' is a reflexive pronoun." },
              { id: "e10-d2", question: "Our practice usually starts at six o'clock. The underlined word is an adverb of _______:", options: ["Frequency", "Time", "Manner", "Degree"], correctAnswer: 1, explanation: "'At six o'clock' indicates adverb of time." },
              { id: "e10-d3", question: "He did not take good care of his pet. The underlined word is a/an _______ noun.", options: ["Collective", "Abstract", "Proper", "Concrete"], correctAnswer: 1, explanation: "'Care' is an abstract noun." },
              { id: "e10-d4", question: "I am afraid I cannot afford to spend too much money. The underlined part is a/an _______:", options: ["Noun phrase", "Adjective phrase", "Infinitive phrase", "Gerund phrase"], correctAnswer: 2, explanation: "'To spend too much money' is an infinitive phrase." },
              { id: "e10-d5", question: "The room was full, so I had no place to sit. It is a/an _______ sentence.", options: ["Complex", "Compound", "Simple", "Dependent"], correctAnswer: 1, explanation: "Two independent clauses joined by 'so' make it a compound sentence." },
              { id: "e10-d6", question: "Who is there? The underlined word is a/an _______ pronoun:", options: ["Possessive", "Reflexive", "Demonstrative", "Interrogative"], correctAnswer: 3, explanation: "'Who' used in a question is an interrogative pronoun." },
              { id: "e10-d7", question: "Haris mowed the lawn and he earned hundred rupees. This is a/an _______ sentence:", options: ["Compound", "Complex", "Conditional", "Imperative"], correctAnswer: 0, explanation: "Two independent clauses joined by 'and' make it compound." },
              { id: "e10-d8", question: "If we wait here, we shall be late. This sentence is a _______ conditional:", options: ["Third", "First", "Fourth", "Second"], correctAnswer: 1, explanation: "'If + present simple, will/shall + base' = first conditional." },
              { id: "e10-d9", question: "They recommended him for his justice and truthfulness. The underlined word is a/an _______ noun:", options: ["Concrete", "Abstract", "Material", "Proper"], correctAnswer: 1, explanation: "'Truthfulness' is an abstract noun." },
              { id: "e10-d10", question: "Everybody enjoys a good movie. The underlined word is a/an _______ pronoun:", options: ["Relative", "Personal", "Interrogative", "Indefinite"], correctAnswer: 3, explanation: "'Everybody' is an indefinite pronoun." },
              { id: "e10-d11", question: "We postponed having the picnic. The underlined word is a/an _______:", options: ["Relative pronoun", "Personal pronoun", "Interrogative pronoun", "Indefinite pronoun"], correctAnswer: 1, explanation: "'We' is a personal pronoun." },
              { id: "e10-d12", question: "The man complained that there was no bread. The underlined part is a/an _______ clause:", options: ["Dependent", "Independent", "Simple", "Relative"], correctAnswer: 0, explanation: "'That there was no bread' is a dependent (noun) clause." },
              { id: "e10-d13", question: "Our job is to keep the audience happy. The underlined word is a/an _______ noun:", options: ["Collective", "Abstract", "Material", "Proper"], correctAnswer: 0, explanation: "'Audience' is a collective noun." },
              { id: "e10-d14", question: "Who is the man at the door? The underlined word is a/an _______ pronoun:", options: ["Relative", "Reflexive", "Interrogative", "Indefinite"], correctAnswer: 2, explanation: "'Who' in a question is an interrogative pronoun." },
              { id: "e10-d15", question: "Maria fell over the cat. The underlined phrase is a/an _______ phrase:", options: ["Gerund", "Prepositional", "Adjective", "Verb"], correctAnswer: 1, explanation: "'Over the cat' is a prepositional phrase." },
              { id: "e10-d16", question: "You may go home as soon as your work is done. The underlined conjunction is _______:", options: ["Coordinating", "Subordinating", "Co-relative", "Conjunctive Adverb"], correctAnswer: 1, explanation: "'As soon as' is a subordinating conjunction." },
              { id: "e10-d17", question: "This plant flowers once every year. The underlined part is a/an _______ phrase:", options: ["Noun", "Adverb", "Adjective", "Gerund"], correctAnswer: 1, explanation: "'Once every year' is an adverb phrase of frequency/time." },
              { id: "e10-d18", question: "A clever trick was played successfully by the cat. The underlined word is an adverb of _______:", options: ["Manner", "Place", "Time", "Concession"], correctAnswer: 0, explanation: "'Successfully' is an adverb of manner." },
              { id: "e10-d19", question: "Before putting too much effort into the project, you should get some guidance. The underlined is a/an _______ phrase:", options: ["Prepositional", "Adverbial", "Gerund", "Adjective"], correctAnswer: 2, explanation: "'Putting too much effort' is a gerund phrase." },
              { id: "e10-d20", question: "Pakistan is very dear _______ us:", options: ["To", "Of", "On", "From"], correctAnswer: 0, explanation: "The correct preposition is 'dear to'." },
              { id: "e10-d21", question: "The crew of Pakistan Air Force looked smart in their uniform. The underlined word is a/an _______:", options: ["Collective noun", "Abstract noun", "Material noun", "Proper noun"], correctAnswer: 0, explanation: "'Crew' is a collective noun." },
              { id: "e10-d22", question: "She replied that she would come. The underlined is a/an _______:", options: ["Gerund", "Noun clause", "Prepositional clause", "Adverb"], correctAnswer: 1, explanation: "'That she would come' is a noun clause." },
              { id: "e10-d23", question: "I did not go to the meeting because I was sick. It is a _______ sentence.", options: ["Compound", "Interrogative", "Complex", "Simple"], correctAnswer: 2, explanation: "'Because' introduces a dependent clause, making it complex." },
              { id: "e10-d24", question: "She was glad _______ her success. The correct preposition is:", options: ["On", "At", "In", "Of"], correctAnswer: 1, explanation: "'Glad at' is the correct preposition usage." },
              { id: "e10-d25", question: "He decided all his cases on merit. The underlined word is a/an _______ noun.", options: ["Concrete", "Abstract", "Collective", "Proper"], correctAnswer: 1, explanation: "'Merit' is an abstract noun." },
              { id: "e10-d26", question: "Is there anything that I can do? The underlined word is a/an _______ pronoun.", options: ["Indefinite", "Relative", "Reflexive", "Demonstrative"], correctAnswer: 0, explanation: "'Anything' is an indefinite pronoun." },
              { id: "e10-d27", question: "I expect to improve my English. The underlined word is a/an _______:", options: ["Gerund", "Infinitive", "Transitive verb", "Intransitive verb"], correctAnswer: 1, explanation: "'To improve' is an infinitive." },
              { id: "e10-d28", question: "As a young trader he earned reputation. The underlined phrase is a/an _______ phrase.", options: ["Noun", "Adverb", "Adjective", "Prepositional"], correctAnswer: 3, explanation: "'As a young trader' is a prepositional phrase." },
              { id: "e10-d29", question: "The umbrella, which has a broken handle, is mine. The underlined clause is a/an _______ clause.", options: ["Noun", "Adjective", "Adverb", "Independent"], correctAnswer: 1, explanation: "'Which has a broken handle' is an adjective clause modifying 'umbrella'." },
              { id: "e10-d30", question: "He himself will be our new friend. The underlined word is a/an _______ pronoun.", options: ["Demonstrative", "Reflexive", "Relative", "Infinitive"], correctAnswer: 1, explanation: "'Himself' is a reflexive/emphatic pronoun." },
              { id: "e10-d31", question: "'to spend' is _______:", options: ["Present participle", "Past participle", "Gerund", "Infinitive"], correctAnswer: 3, explanation: "'To spend' is an infinitive." },
              { id: "e10-d32", question: "I agree _______ you in this matter.", options: ["Of", "By", "With", "From"], correctAnswer: 2, explanation: "The correct preposition is 'agree with'." },
              { id: "e10-d33", question: "If he offers me a job I _______ it.", options: ["Would have accepted", "Could accept", "Will accept", "Accept"], correctAnswer: 2, explanation: "First conditional: 'If + present, will + base form'." },
              { id: "e10-d34", question: "'Flying above the lake at this time of night seems a little dangerous'. The underlined is a/an _______:", options: ["Infinitive phrase", "Prepositional phrase", "Adjective phrase", "Gerund phrase"], correctAnswer: 3, explanation: "'Flying above the lake...' is a gerund phrase acting as the subject." },
              { id: "e10-d35", question: "All students _______ for prizes.", options: ["compete", "competes", "competing", "competed"], correctAnswer: 0, explanation: "Plural subject 'students' takes base form: 'compete'." },
              { id: "e10-d36", question: "Keep the ball in the basket. The underlined word is a/an _______ noun.", options: ["Abstract", "Gerund", "Concrete", "Collective"], correctAnswer: 2, explanation: "'Ball' is a concrete noun – it can be seen and touched." },
              { id: "e10-d37", question: "If we had arrived earlier, we should have seen our aunt. The sentence is _______:", options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"], correctAnswer: 3, explanation: "'If + had + past participle, would/should have + past participle' = third conditional." },
              { id: "e10-d38", question: "I gave her two pencils. The underlined word is a/an _______:", options: ["Adverb", "Adjective", "Infinitive", "Frequency"], correctAnswer: 1, explanation: "'Two' is an adjective (numeral adjective) modifying 'pencils'." },
              { id: "e10-d39", question: "He is the most honest man in the family. The underlined word is a _______:", options: ["Positive degree", "Negative degree", "Comparative degree", "Superlative degree"], correctAnswer: 3, explanation: "'Most honest' is the superlative degree." },
              { id: "e10-d40", question: "The accident was due to his ruthlessness. The underlined word is a/an _______ noun.", options: ["Material", "Abstract", "Concrete", "Collective"], correctAnswer: 1, explanation: "'Ruthlessness' is an abstract noun." }
            ],
            notes: [
              "**Abstract Noun:** Feelings/ideas you can't touch → justice, truthfulness, ruthlessness, merit, care.",
              "**Collective Noun:** A group → audience, crew, crowd, class.",
              "**Concrete/Material Noun:** Physical objects → basket, pet, balls, water.",
              "**Reflexive Pronoun:** Ends in -self/-selves → myself, himself, themselves.",
              "**Interrogative Pronoun:** Used to ask questions → Who, What, Which.",
              "**Relative Pronoun:** Connects clauses → who, which, that, whose.",
              "**Indefinite Pronoun:** Non-specific → everybody, someone, anything.",
              "**Adverb of Frequency:** How often? → usually, always, often, never.",
              "**Adverb of Manner:** How? → successfully, fast, carefully.",
              "**Adverb of Time:** When? → last night, yesterday, tomorrow.",
              "**Infinitive:** 'To' + 1st form → to spend, to improve, to go.",
              "**Gerund:** V+ing as a noun → Swimming is fun. I enjoy reading.",
              "**Participle:** V+ing or V+ed as an adjective → amused, damaging, broken.",
              "**Zero Conditional:** If + Present, Present → If you heat ice, it melts.",
              "**First Conditional:** If + Present, Future → If we wait, we shall be late.",
              "**Second Conditional:** If + Past, Would + V → If he offered me a job, I would accept.",
              "**Third Conditional:** If + Past Perfect, Would have + PP → If we had arrived earlier, we would have seen our aunt.",
              "**Phrase:** Group of words without subject-verb → 'over the cat' (prepositional phrase).",
              "**Clause:** Group of words with subject + verb → 'that there was no bread' (dependent clause)."
            ]
          },
          // ── Most Repeated MCQs ──
          {
            id: "most-repeated",
            name: "🔴 Most Repeated MCQs (30 Past Paper Questions)",
            mcqs: e10MostRepeatedMCQs,
            notes: [
              "**These are the 30 most repeated MCQs** from Class 10 English past papers.",
              "**Frequency ranges from 3 to 9 times** – these questions appear again and again in board exams.",
              "**Covers all sections:** Verb Forms, Spellings, Vocabulary/Synonyms, and Grammar.",
              "**Tip:** Memorize these thoroughly – they have the highest probability of appearing in your exam!",
            ]
          }
        ]
      },
      {
        id: "pak-studies-10",
        name: "Pakistan Studies (معاشرتی علوم)",
        icon: "🇵🇰",
        chapters: [
          { id: "ch1", name: "باب 1: پاکستان کی نظریاتی اساس", mcqs: ps10Ch1MCQs, outsideExerciseMCQs: ps10Ch1OutsideMCQs },
          { id: "ch2", name: "باب 2: تحریک پاکستان اور پاکستان کا قیام", mcqs: ps10Ch2MCQs },
          { id: "ch3", name: "باب 3: تاریخ پاکستان (1971ء تا حال)", mcqs: ps10Ch3MCQs },
          { id: "ch4", name: "باب 4: پاکستان اور عالمی اُمور", mcqs: ps10Ch4MCQs, outsideExerciseMCQs: ps10Ch4OutsideMCQs },
          { id: "ch5", name: "باب 5: زمین اور ماحول", mcqs: ps10Ch5MCQs, outsideExerciseMCQs: ps10Ch5OutsideMCQs },
          { id: "ch6", name: "باب 6: آبادی، معاشرہ اور ثقافت", mcqs: ps10Ch6MCQs },
          { id: "ch7", name: "باب 7: پاکستان کی معاشی ترقی", mcqs: ps10Ch7MCQs },
          { id: "ch8", name: "باب 8: خواتین کو بااختیار بنانا", mcqs: ps10Ch8MCQs, outsideExerciseMCQs: ps10Ch8OutsideMCQs },
        ]
      },
      {
        id: "islamiat-10",
        name: "Islamiat",
        icon: "☪️",
        chapters: [
          { id: "ch4", name: "Islamic Jurisprudence" },
          { id: "ch5", name: "Social System of Islam" },
          { id: "ch6", name: "Islamic Economic System" }
        ]
      },
      {
        id: "cs-10",
        name: "Computer Science",
        icon: "💻",
        chapters: [
          { id: "unit1", name: "Unit 1: Introduction to Programming", mcqs: cs10Unit1MCQs, outsideExerciseMCQs: cs10Unit1OutsideMCQs },
          { id: "unit2", name: "Unit 2: User Interaction", mcqs: cs10Unit2MCQs, outsideExerciseMCQs: cs10Unit2OutsideMCQs },
          { id: "unit3", name: "Unit 3: Conditional Logic", mcqs: cs10Unit3MCQs, outsideExerciseMCQs: cs10Unit3OutsideMCQs },
          { id: "unit4", name: "Unit 4: Data and Repetition", mcqs: cs10Unit4MCQs, outsideExerciseMCQs: cs10Unit4OutsideMCQs },
          { id: "unit5", name: "Unit 5: Functions", mcqs: cs10Unit5MCQs, outsideExerciseMCQs: cs10Unit5OutsideMCQs },
        ]
      }
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
          { id: "ch11", name: "Thermodynamics" }
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
          { id: "ch11", name: "Reaction Kinetics" }
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
          { id: "ch14", name: "Solutions of Trigonometric Equations" }
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
          { id: "ch14", name: "Transport" }
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
          { id: "ch9", name: "The Necklace" }
        ]
      }
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
          { id: "ch12", name: "Ch 12 – Electrostatics", mcqs: physics12Ch12MCQs },
          { id: "ch13", name: "Ch 13 – Current Electricity", mcqs: physics12Ch13MCQs },
          { id: "ch14", name: "Ch 14 – Electromagnetism", mcqs: physics12Ch14MCQs },
          { id: "ch15", name: "Ch 15 – Electromagnetic Induction", mcqs: physics12Ch15MCQs },
          { id: "ch16", name: "Ch 16 – Alternating Current", mcqs: physics12Ch16MCQs },
          { id: "ch17", name: "Ch 17 – Physics of Solids", mcqs: physics12Ch17MCQs },
          { id: "ch18", name: "Ch 18 – Electronics", mcqs: physics12Ch18MCQs },
          { id: "ch19", name: "Ch 19 – Dawn of Modern Physics", mcqs: physics12Ch19MCQs },
          { id: "ch20", name: "Ch 20 – Atomic Spectra", mcqs: physics12Ch20MCQs },
          { id: "ch21", name: "Ch 21 – Nuclear Physics", mcqs: physics12Ch21MCQs },
          { id: "ch22", name: "🔴 Tricky MCQs – Info Boxes & Side Data", mcqs: physics12Ch22MCQs },
          { id: "ch23", name: "🔴 Tricky MCQs – Numerical & Conceptual", mcqs: physics12Ch23MCQs }
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
          { id: "ch15", name: "Environmental Chemistry" }
        ]
      },
      {
        id: "math-12",
        name: "Mathematics",
        icon: "📐",
        chapters: [
          { id: "ch1", name: "Ch 1 – Functions and Limits", mcqs: math12Ch1MCQs },
          { id: "ch2", name: "Ch 2 – Differentiation", mcqs: math12Ch2MCQs },
          { id: "ch3", name: "Ch 3 – Integration", mcqs: math12Ch3MCQs },
          { id: "ch4", name: "Ch 4 – Analytic Geometry", mcqs: math12Ch4MCQs },
          { id: "ch5", name: "Ch 5 – Linear Inequalities & Programming", mcqs: math12Ch5MCQs },
          { id: "ch6", name: "Ch 6 – Conic Sections", mcqs: math12Ch6MCQs },
          { id: "ch7", name: "Ch 7 – Vectors", mcqs: math12Ch7MCQs }
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
          { id: "ch27", name: "Biology and Human Welfare" }
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
          { id: "ch10", name: "A World Without Books" }
        ]
      }
    ]
  }
];
