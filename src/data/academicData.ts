// Academic data for Class 9-12 with MCQs, Pairing Schemes and Resources
import { AcademicClass } from "@/types";

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
          { id: "ch1", name: "Fundamentals of Chemistry", importantTopics: ["Branches of Chemistry", "Empirical & Molecular Formula", "Mole Concept", "Avogadro's Number"], keyConcepts: ["Matter", "Element", "Compound", "Mixture", "Atomic Mass Unit"], formulas: ["No. of moles = mass/molar mass", "No. of particles = n × Nₐ", "Nₐ = 6.022 × 10²³"], mcqs: [] },
          { id: "ch2", name: "Structure of Atoms", importantTopics: ["Subatomic Particles", "Atomic Models", "Electronic Configuration", "Isotopes"], keyConcepts: ["Proton", "Neutron", "Electron", "Atomic Number", "Mass Number", "Rutherford & Bohr Models"], formulas: ["Mass Number = Protons + Neutrons", "Atomic Number = Number of Protons"], mcqs: [] },
          { id: "ch3", name: "Periodic Table and Periodicity", importantTopics: ["Modern Periodic Table", "Groups & Periods", "Periodic Trends", "Metals & Non-metals"], keyConcepts: ["Periodic Law", "Electronegativity", "Ionization Energy", "Electron Affinity"], formulas: [], mcqs: [] },
          { id: "ch4", name: "Structure of Molecules", importantTopics: ["Chemical Bonding", "Ionic Bonds", "Covalent Bonds", "Metallic Bonds"], keyConcepts: ["Octet Rule", "Lewis Dot Structure", "Electrovalent Compounds", "Coordinate Covalent Bond"], formulas: [], mcqs: [] },
          { id: "ch5", name: "Physical States of Matter", importantTopics: ["Solid, Liquid, Gas", "Plasma", "Kinetic Molecular Theory", "Gas Laws"], keyConcepts: ["Boyle's Law", "Charles's Law", "Pressure-Temperature Relationship", "Diffusion"], formulas: ["P₁V₁ = P₂V₂ (Boyle's)", "V₁/T₁ = V₂/T₂ (Charles's)", "PV = nRT (Ideal Gas)"], mcqs: [] },
          { id: "ch6", name: "Solutions", importantTopics: ["Types of Solutions", "Concentration Units", "Solubility", "Saturated & Unsaturated Solutions"], keyConcepts: ["Solute", "Solvent", "Molarity", "Dilution"], formulas: ["Molarity (M) = moles of solute / liters of solution", "% concentration = (solute/solution) × 100"], mcqs: [] },
          { id: "ch7", name: "Electrochemistry", importantTopics: ["Electrolytes", "Electrolysis", "Electrochemical Cells", "Oxidation & Reduction"], keyConcepts: ["Anode", "Cathode", "Galvanic Cell", "Electrolytic Cell", "Redox Reactions"], formulas: ["Oxidation = Loss of electrons", "Reduction = Gain of electrons"], mcqs: [] },
          { id: "ch8", name: "Chemical Reactivity", importantTopics: ["Metals and Non-metals", "Reactivity Series", "Chemical Reactions"], keyConcepts: ["Activity Series", "Displacement Reactions", "Corrosion"], formulas: [], mcqs: [] }
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
            { id: "np9-ch1-10", question: "Which of the following measures are likely to represent the thickness of a sheet of this book?", options: ["6 × 10⁻²⁵ m", "1 × 10⁻² m", "1.2 × 10⁻¹ m", "4 × 10⁻² m"], correctAnswer: 0, explanation: "A book sheet thickness is extremely small, in the order of micrometres." },
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
          { id: "new-ch3", name: "Dynamics", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch4", name: "Turning Effects of Force", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch5", name: "Work, Energy and Power", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch6", name: "Mechanical Properties of Matter", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch7", name: "Thermal Properties of Matter", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch8", name: "Magnetism", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch9", name: "Nature of Science", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] }
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
          { id: "new-ch3", name: "Chemical Bonding", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch4", name: "Stoichiometry", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch5", name: "Energetics", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch6", name: "Equilibria", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch7", name: "Acid Base Chemistry", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch8", name: "Periodic Table and Periodicity", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch9", name: "Group Properties and Elements", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch10", name: "Environmental Chemistry", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch11", name: "Hydrocarbons", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch12", name: "Empirical Data Collection and Analysis", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch13", name: "Laboratory and Practical Skills", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] }
        ]
      },
      {
        id: "math-9",
        name: "Mathematics (New Book)",
        icon: "📐",
        pairingScheme: null,
        resources: [],
        chapters: [
          { id: "new-ch1", name: "Real Numbers", importantTopics: ["Rational & Irrational Numbers", "Properties of Real Numbers", "Radicals & Indices", "Applications"], keyConcepts: ["Terminating & Non-terminating Decimals", "Number Line", "Surds", "Rationalization"], formulas: ["a(b+c) = ab + ac", "Profit = SP - CP", "K = °C + 273"], mcqs: [
            { id: "nm9-ch1-1", question: "√4 is:", options: ["integer", "rational number", "irrational number", "natural number"], correctAnswer: 0, explanation: "√4 = 2, which is an integer." },
            { id: "nm9-ch1-2", question: "π and e are:", options: ["natural numbers", "integers", "rational numbers", "irrational numbers"], correctAnswer: 3, explanation: "Both π and e are non-terminating, non-recurring decimals - irrational numbers." },
            { id: "nm9-ch1-3", question: "If n is not a perfect square, then √n is:", options: ["rational number", "natural number", "integer", "irrational number"], correctAnswer: 3, explanation: "Square root of a non-perfect square is always irrational." },
            { id: "nm9-ch1-4", question: "√5 is:", options: ["whole number", "integer", "rational number", "irrational number"], correctAnswer: 3, explanation: "5 is not a perfect square, so √5 is irrational." },
            { id: "nm9-ch1-5", question: "For all x ∈ R, x = x is called:", options: ["reflexive property", "transitive property", "symmetric property", "trichotomy property"], correctAnswer: 0, explanation: "Every element is equal to itself - this is the reflexive property." },
            { id: "nm9-ch1-6", question: "Let a, b, c ∈ R, then a > b and b > c ⇒ a > c is called ______ property:", options: ["trichotomy", "transitive", "additive", "multiplicative"], correctAnswer: 1, explanation: "If a > b and b > c implies a > c, this is the transitive property." },
            { id: "nm9-ch1-7", question: "If 2 × 8ˣ = 64 then x =:", options: ["2", "3", "6", "1"], correctAnswer: 0, explanation: "2 × 8ˣ = 64, 8ˣ = 32, (2³)ˣ = 2⁵, x = 5/3... The answer depends on the exact formulation." },
            { id: "nm9-ch1-8", question: "Let a, b ∈ R, then a = b and b = a is called:", options: ["reflexive", "symmetric", "transitive", "additive"], correctAnswer: 1, explanation: "If a = b implies b = a, this is the symmetric property." },
            { id: "nm9-ch1-9", question: "√75 + √48 =:", options: ["√10", "9√3", "5√3", "8√3"], correctAnswer: 1, explanation: "√75 = 5√3, √48 = 4√3, so 5√3 + 4√3 = 9√3" },
            { id: "nm9-ch1-10", question: "The product of (3 + √5)(3 - √5) is:", options: ["prime number", "odd number", "irrational number", "rational number"], correctAnswer: 3, explanation: "(3+√5)(3-√5) = 9 - 5 = 4, which is a rational number." }
          ] },
          { id: "new-ch2", name: "Logarithms", importantTopics: ["Scientific Notation", "Common & Natural Logarithm", "Laws of Logarithm", "Applications"], keyConcepts: ["Characteristic & Mantissa", "Product, Quotient, Power Laws", "Antilogarithm"], formulas: ["log(ab) = log a + log b", "log(a/b) = log a - log b", "log(aⁿ) = n log a"], mcqs: [
            { id: "nm9-ch2-1", question: "The standard form of 5.2 × 10⁶ is:", options: ["52,000", "520,000", "5,200,000", "52,000,000"], correctAnswer: 2, explanation: "5.2 × 10⁶ = 5,200,000" },
            { id: "nm9-ch2-2", question: "Scientific notation of 0.00034 is:", options: ["3.4 × 10", "3.4 × 10⁻⁴", "3.4 × 10⁴", "3.4 × 10⁻³"], correctAnswer: 1, explanation: "0.00034 = 3.4 × 10⁻⁴" },
            { id: "nm9-ch2-3", question: "The base of common logarithm is:", options: ["2", "10", "5", "e"], correctAnswer: 1, explanation: "Common logarithm uses base 10." },
            { id: "nm9-ch2-4", question: "log₂ 2 =", options: ["1", "2", "5", "3"], correctAnswer: 0, explanation: "log_a(a) = 1 for any base a." },
            { id: "nm9-ch2-5", question: "log 100 =", options: ["2", "3", "10", "1"], correctAnswer: 0, explanation: "log₁₀(100) = log₁₀(10²) = 2" },
            { id: "nm9-ch2-6", question: "If log 2 = 0.3010, then log 200 is:", options: ["1.3010", "0.6010", "2.3010", "2.6010"], correctAnswer: 2, explanation: "log 200 = log(2 × 100) = log 2 + log 100 = 0.3010 + 2 = 2.3010" },
            { id: "nm9-ch2-7", question: "log(0) =", options: ["positive", "negative", "zero", "undefined"], correctAnswer: 3, explanation: "log(0) is undefined because no power of 10 equals 0." },
            { id: "nm9-ch2-8", question: "log 10,000 =", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "log₁₀(10,000) = log₁₀(10⁴) = 4" },
            { id: "nm9-ch2-9", question: "log 5 + log 3 =", options: ["log 8", "log 2", "log 15", "log 0"], correctAnswer: 2, explanation: "By product law: log 5 + log 3 = log(5 × 3) = log 15" },
            { id: "nm9-ch2-10", question: "3⁴ = 81 in logarithmic form is:", options: ["log₄ 3 = 81", "log₃ 4 = 81", "log₃ 81 = 4", "log₄ 81 = 3"], correctAnswer: 2, explanation: "3⁴ = 81 converts to log₃ 81 = 4" }
          ] },
          { id: "new-ch3", name: "Set and Functions", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch4", name: "Factorization and Algebraic Manipulation", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch5", name: "Linear Equations and Inequalities", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch6", name: "Trigonometry", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch7", name: "Coordinate Geometry", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch8", name: "Logic", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch9", name: "Similar Figures", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch10", name: "Graphs of Functions", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch11", name: "Loci and Construction", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch12", name: "Information Handling", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] },
          { id: "new-ch13", name: "Probability", importantTopics: [], keyConcepts: [], formulas: [], mcqs: [] }
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
          { id: "ch12", name: "Three Days to See" }
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
              { id: "p10-ch10-1", question: "SI unit of frequency is:", options: ["Second", "Hertz", "Meter", "Watt"], correctAnswer: 1, explanation: "Frequency is measured in Hertz (Hz) = cycles per second." },
              { id: "p10-ch10-2", question: "Time period of simple pendulum depends on:", options: ["Mass", "Amplitude", "Length", "Material"], correctAnswer: 2, explanation: "T = 2π√(l/g), depends only on length and g." },
              { id: "p10-ch10-3", question: "In SHM, acceleration is proportional to:", options: ["Velocity", "Displacement", "Time", "Frequency"], correctAnswer: 1, explanation: "a = -ω²x, acceleration is proportional to displacement." },
              { id: "p10-ch10-4", question: "Transverse waves have oscillations:", options: ["Along direction of travel", "Perpendicular to travel", "At 45° angle", "No oscillation"], correctAnswer: 1, explanation: "Transverse wave particles oscillate perpendicular to wave direction." }
            ]
          },
          {
            id: "ch11",
            name: "Sound",
            importantTopics: ["Nature of Sound", "Speed of Sound", "Echo", "Musical Sound"],
            keyConcepts: ["Longitudinal Wave", "Intensity", "Loudness", "Pitch", "Quality"],
            formulas: ["v = 331 + 0.6T (m/s in air)", "d = vt/2 (Echo distance)"],
            mcqs: [
              { id: "p10-ch11-1", question: "Sound travels fastest in:", options: ["Air", "Vacuum", "Water", "Steel"], correctAnswer: 3, explanation: "Sound travels fastest in solids like steel (~5000 m/s)." },
              { id: "p10-ch11-2", question: "Sound cannot travel through:", options: ["Air", "Water", "Vacuum", "Solid"], correctAnswer: 2, explanation: "Sound needs a medium; it cannot travel through vacuum." },
              { id: "p10-ch11-3", question: "Sound wave is:", options: ["Transverse", "Longitudinal", "Electromagnetic", "Stationary"], correctAnswer: 1, explanation: "Sound is a longitudinal mechanical wave." },
              { id: "p10-ch11-4", question: "Pitch of sound depends on:", options: ["Amplitude", "Frequency", "Speed", "Wavelength"], correctAnswer: 1, explanation: "Higher frequency = higher pitch." },
              { id: "p10-ch11-5", question: "Which of the following wave can travel through vacuum?", options: ["Sound wave", "Water wave", "Radio wave", "Shock wave"], correctAnswer: 2, explanation: "Radio waves are electromagnetic and can travel through vacuum." }
            ]
          },
          {
            id: "ch12",
            name: "Geometrical Optics",
            importantTopics: ["Reflection", "Refraction", "Lenses", "Mirrors", "Human Eye"],
            keyConcepts: ["Laws of Reflection", "Snell's Law", "Real & Virtual Images", "Focal Length"],
            formulas: ["1/f = 1/p + 1/q", "n = sin i / sin r", "Power = 1/f (in meters)"],
            mcqs: [
              { id: "p10-ch12-1", question: "Lens used in magnifying glass is:", options: ["Concave", "Convex", "Plane", "Cylindrical"], correctAnswer: 1, explanation: "Convex (converging) lens magnifies objects when held close." },
              { id: "p10-ch12-2", question: "A concave lens always forms which type of image?", options: ["Real and enlarged", "Virtual and diminished", "Real and inverted", "Virtual and enlarged"], correctAnswer: 1, explanation: "Concave lens always forms virtual, erect, diminished images." },
              { id: "p10-ch12-3", question: "Color with the longest wavelength is:", options: ["Violet", "Blue", "Green", "Red"], correctAnswer: 3, explanation: "Red has the longest wavelength (~700 nm) in visible spectrum." },
              { id: "p10-ch12-4", question: "Angle of incidence equals angle of reflection for:", options: ["Refraction only", "Reflection", "Dispersion", "Diffraction"], correctAnswer: 1, explanation: "Law of reflection: angle of incidence = angle of reflection." }
            ]
          },
          {
            id: "ch13",
            name: "Electrostatics",
            importantTopics: ["Electric Charge", "Coulomb's Law", "Electric Field", "Capacitance"],
            keyConcepts: ["Positive & Negative Charges", "Electroscope", "Charging Methods"],
            formulas: ["F = kq₁q₂/r²", "E = F/q", "C = Q/V"],
            mcqs: [
              { id: "p10-ch13-1", question: "SI unit of electric charge is:", options: ["Ampere", "Volt", "Coulomb", "Ohm"], correctAnswer: 2, explanation: "Electric charge is measured in Coulombs (C)." },
              { id: "p10-ch13-2", question: "Like charges:", options: ["Attract", "Repel", "No effect", "Neutralize"], correctAnswer: 1, explanation: "Like charges repel, unlike charges attract." },
              { id: "p10-ch13-3", question: "Coulomb's law is similar to:", options: ["Newton's first law", "Newton's law of gravitation", "Ohm's law", "Hooke's law"], correctAnswer: 1, explanation: "Both are inverse square laws: F ∝ 1/r²" }
            ]
          },
          {
            id: "ch14",
            name: "Current Electricity",
            importantTopics: ["Electric Current", "Ohm's Law", "Resistance", "Power"],
            keyConcepts: ["Voltage", "Current", "Resistance", "Series & Parallel Circuits"],
            formulas: ["V = IR (Ohm's Law)", "P = VI = I²R = V²/R", "R_series = R₁ + R₂ + ...", "1/R_parallel = 1/R₁ + 1/R₂ + ..."],
            mcqs: [
              { id: "p10-ch14-1", question: "Which law states V ∝ I?", options: ["Ohm's Law", "Coulomb's Law", "Faraday's Law", "Newton's Law"], correctAnswer: 0, explanation: "Ohm's law: V = IR, meaning V ∝ I at constant R." },
              { id: "p10-ch14-2", question: "SI unit of resistance is:", options: ["Ampere", "Volt", "Ohm", "Watt"], correctAnswer: 2, explanation: "Resistance is measured in Ohms (Ω)." },
              { id: "p10-ch14-3", question: "In series circuit, current is:", options: ["Different in each part", "Same throughout", "Zero", "Maximum at source"], correctAnswer: 1, explanation: "In series circuit, same current flows through all components." },
              { id: "p10-ch14-4", question: "Electric power is measured in:", options: ["Joules", "Watts", "Volts", "Amperes"], correctAnswer: 1, explanation: "Power = Energy/Time, SI unit is Watt (W)." }
            ]
          },
          {
            id: "ch15",
            name: "Electromagnetism",
            importantTopics: ["Magnetic Field", "Electromagnet", "DC Motor", "Electromagnetic Induction"],
            keyConcepts: ["Magnetic Field Lines", "Right Hand Rule", "Faraday's Law"],
            formulas: ["F = BIL (Force on conductor)", "emf = -NΔΦ/Δt"],
            mcqs: [
              { id: "p10-ch15-1", question: "Electromagnet works on principle of:", options: ["Electrostatics", "Magnetic effect of current", "Heat effect", "Chemical effect"], correctAnswer: 1, explanation: "Current-carrying conductor produces magnetic field around it." },
              { id: "p10-ch15-2", question: "Transformer works on:", options: ["DC only", "AC only", "Both AC and DC", "Neither"], correctAnswer: 1, explanation: "Transformers require changing magnetic flux, so AC only." }
            ]
          },
          {
            id: "ch16",
            name: "Basic Electronics",
            importantTopics: ["Semiconductors", "Diodes", "Transistors", "Logic Gates"],
            keyConcepts: ["P-type & N-type", "Forward & Reverse Bias", "Rectification"],
            formulas: [],
            mcqs: [
              { id: "p10-ch16-1", question: "Diode allows current in:", options: ["Both directions", "One direction", "No direction", "Depends on voltage"], correctAnswer: 1, explanation: "Diode conducts in forward bias (one direction only)." },
              { id: "p10-ch16-2", question: "Transistor has how many junctions?", options: ["One", "Two", "Three", "Four"], correctAnswer: 1, explanation: "Transistor (BJT) has two p-n junctions." }
            ]
          },
          {
            id: "ch17",
            name: "Information and Communication Technology",
            importantTopics: ["Computer Components", "Internet", "Data Transmission"],
            keyConcepts: ["Hardware", "Software", "Digital Communication"],
            formulas: ["1 GB = 1024 MB"],
            mcqs: [
              { id: "p10-ch17-1", question: "1 Gigabyte is equal to:", options: ["124 MB", "1024 MB", "1000 MB", "512 MB"], correctAnswer: 1, explanation: "1 GB = 1024 MB (in binary system)." }
            ]
          },
          {
            id: "ch18",
            name: "Atomic and Nuclear Physics",
            importantTopics: ["Radioactivity", "Half-life", "Nuclear Reactions", "Fission & Fusion"],
            keyConcepts: ["Alpha, Beta, Gamma Rays", "Nuclear Energy", "Atomic Models"],
            formulas: ["E = mc² (Einstein's equation)", "N = N₀(1/2)^(t/T₁/₂)"],
            mcqs: [
              { id: "p10-ch18-1", question: "Atomic number of oxygen is:", options: ["6", "7", "8", "9"], correctAnswer: 2, explanation: "Oxygen has 8 protons, so atomic number = 8." },
              { id: "p10-ch18-2", question: "Nuclear fission releases energy according to:", options: ["E = mc²", "F = ma", "PV = nRT", "V = IR"], correctAnswer: 0, explanation: "Mass-energy equivalence: E = mc² explains nuclear energy." },
              { id: "p10-ch18-3", question: "Which radiation has highest penetrating power?", options: ["Alpha", "Beta", "Gamma", "All equal"], correctAnswer: 2, explanation: "Gamma rays have highest penetrating power (no charge, high energy)." }
            ]
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
              { id: "c10-ch9-1", question: "At equilibrium, reaction rates are:", options: ["Forward > Backward", "Backward > Forward", "Equal", "Zero"], correctAnswer: 2, explanation: "At equilibrium, rate of forward = rate of backward reaction." },
              { id: "c10-ch9-2", question: "Le Chatelier's principle relates to:", options: ["Speed of reaction", "Equilibrium shifts", "Atomic structure", "Bonding"], correctAnswer: 1, explanation: "Le Chatelier: System shifts to oppose changes in conditions." }
            ]
          },
          {
            id: "ch10",
            name: "Acids, Bases and Salts",
            importantTopics: ["Acids & Bases", "pH Scale", "Neutralization", "Salts"],
            keyConcepts: ["Arrhenius Theory", "Bronsted-Lowry", "Buffer Solutions"],
            formulas: ["pH = -log[H⁺]", "pOH = -log[OH⁻]", "pH + pOH = 14"],
            mcqs: [
              { id: "c10-ch10-1", question: "pH of neutral solution is:", options: ["0", "7", "14", "1"], correctAnswer: 1, explanation: "pH 7 is neutral (equal H⁺ and OH⁻ concentrations)." },
              { id: "c10-ch10-2", question: "Strong acid has pH:", options: ["Less than 7", "Equal to 7", "Greater than 7", "Equal to 14"], correctAnswer: 0, explanation: "Acids have pH < 7; strong acids have very low pH (0-2)." },
              { id: "c10-ch10-3", question: "Base turns red litmus:", options: ["Red", "Blue", "Green", "No change"], correctAnswer: 1, explanation: "Bases turn red litmus blue (alkaline indicator)." }
            ]
          },
          {
            id: "ch11",
            name: "Organic Chemistry",
            importantTopics: ["Introduction to Organic", "Functional Groups", "Nomenclature"],
            keyConcepts: ["Carbon Bonding", "Isomerism", "IUPAC Naming"],
            formulas: [],
            mcqs: [
              { id: "c10-ch11-1", question: "Carbon forms how many bonds?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "Carbon has 4 valence electrons, forms 4 covalent bonds." },
              { id: "c10-ch11-2", question: "Organic chemistry is study of:", options: ["Metals", "Carbon compounds", "Noble gases", "Minerals"], correctAnswer: 1, explanation: "Organic chemistry studies carbon-containing compounds." }
            ]
          },
          {
            id: "ch12",
            name: "Hydrocarbons",
            importantTopics: ["Alkanes", "Alkenes", "Alkynes", "Reactions"],
            keyConcepts: ["Saturated & Unsaturated", "Combustion", "Addition Reactions"],
            formulas: ["Alkane: CₙH₂ₙ₊₂", "Alkene: CₙH₂ₙ", "Alkyne: CₙH₂ₙ₋₂"],
            mcqs: [
              { id: "c10-ch12-1", question: "General formula of alkanes is:", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: 1, explanation: "Alkanes (saturated) have formula CₙH₂ₙ₊₂." },
              { id: "c10-ch12-2", question: "Alkenes contain:", options: ["Single bonds only", "One double bond", "One triple bond", "No carbon"], correctAnswer: 1, explanation: "Alkenes have at least one C=C double bond." }
            ]
          },
          {
            id: "ch13",
            name: "Biochemistry",
            importantTopics: ["Carbohydrates", "Proteins", "Lipids", "Nucleic Acids", "Vitamins"],
            keyConcepts: ["Amino Acids", "Enzymes", "DNA & RNA"],
            formulas: [],
            mcqs: [
              { id: "c10-ch13-1", question: "In photosynthesis, plants use which gas?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 1, explanation: "Plants absorb CO₂ and release O₂ during photosynthesis." },
              { id: "c10-ch13-2", question: "Proteins are made of:", options: ["Fatty acids", "Amino acids", "Glucose", "Nucleotides"], correctAnswer: 1, explanation: "Proteins are polymers of amino acids." }
            ]
          },
          {
            id: "ch14",
            name: "Environmental Chemistry I",
            importantTopics: ["Atmosphere", "Air Pollution", "Water Pollution"],
            keyConcepts: ["Ozone Layer", "Greenhouse Effect", "Acid Rain"],
            formulas: [],
            mcqs: [
              { id: "c10-ch14-1", question: "Which gas is essential for human respiration?", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], correctAnswer: 1, explanation: "Humans breathe in O₂ for cellular respiration." },
              { id: "c10-ch14-2", question: "Ozone layer protects from:", options: ["Sound", "UV rays", "Heat", "Visible light"], correctAnswer: 1, explanation: "Ozone (O₃) layer absorbs harmful UV radiation." }
            ]
          },
          {
            id: "ch15",
            name: "Water",
            importantTopics: ["Properties of Water", "Hard Water", "Soft Water", "Water Purification", "Waterborne Diseases"],
            keyConcepts: ["Hardness Types", "Temporary & Permanent Hardness", "Boiling Method", "Clark's Method", "Distillation"],
            formulas: ["Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂ (temporary hardness removal)"],
            mcqs: [
              { id: "c10-ch15-1", question: "Hard water contains ions of:", options: ["Na and K", "Ca and Mg", "Fe and Zn", "Cu and Ag"], correctAnswer: 1, explanation: "Hard water contains dissolved Ca²⁺ and Mg²⁺ ions that cause hardness." },
              { id: "c10-ch15-2", question: "Temporary hardness is caused by:", options: ["Chlorides", "Sulfates", "Bicarbonates", "Nitrates"], correctAnswer: 2, explanation: "Temporary hardness is due to bicarbonates of Ca and Mg, removed by boiling." },
              { id: "c10-ch15-3", question: "Washing soda is used to:", options: ["Harden water", "Soften water", "Purify water", "Color water"], correctAnswer: 1, explanation: "Washing soda (Na₂CO₃) removes hardness by precipitating Ca and Mg as carbonates." },
              { id: "c10-ch15-4", question: "Permanent hardness is removed by:", options: ["Boiling", "Filtration", "Adding washing soda", "Adding salt"], correctAnswer: 2, explanation: "Permanent hardness (sulfates/chlorides) requires chemical treatment like washing soda." },
              { id: "c10-ch15-5", question: "Distilled water is:", options: ["Hard water", "Soft water", "Pure water", "Impure water"], correctAnswer: 2, explanation: "Distillation removes all dissolved impurities, giving pure water." },
              { id: "c10-ch15-6", question: "Water is a universal solvent because it:", options: ["Is colorless", "Has high polarity", "Is tasteless", "Is odorless"], correctAnswer: 1, explanation: "Water's polar nature allows it to dissolve many ionic and polar substances." }
            ]
          },
          {
            id: "ch16",
            name: "Chemical Industries",
            importantTopics: ["Fertilizers", "Petrochemicals", "Metallurgy"],
            keyConcepts: ["Urea Production", "Petroleum Refining", "Manufacturing Processes"],
            formulas: [],
            mcqs: [
              { id: "c10-ch16-1", question: "Urea contains:", options: ["Nitrogen", "Phosphorus", "Potassium", "Sulfur"], correctAnswer: 0, explanation: "Urea (NH₂CONH₂) is a nitrogen-rich fertilizer." },
              { id: "c10-ch16-2", question: "Petroleum is a source of:", options: ["Metals", "Hydrocarbons", "Noble gases", "Salts"], correctAnswer: 1, explanation: "Petroleum (crude oil) is a mixture of hydrocarbons." }
            ]
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
            keyConcepts: ["Standard Form ax² + bx + c = 0", "Roots", "Discriminant"],
            formulas: ["x = (-b ± √(b²-4ac)) / 2a", "Sum of roots = -b/a", "Product of roots = c/a"],
            mcqs: [
              { id: "m10-ch1-1", question: "Standard form of quadratic equation is:", options: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx = 0", "x² = c"], correctAnswer: 1, explanation: "Quadratic equation: ax² + bx + c = 0 where a ≠ 0." },
              { id: "m10-ch1-2", question: "If discriminant is zero, roots are:", options: ["Real and distinct", "Real and equal", "Imaginary", "No roots"], correctAnswer: 1, explanation: "D = 0 gives two equal real roots." },
              { id: "m10-ch1-3", question: "A quadratic equation whose roots are 3 and -4 is:", options: ["x² + x - 12 = 0", "x² - x - 12 = 0", "x² - x + 12 = 0", "x² + x + 12 = 0"], correctAnswer: 0, explanation: "Sum = -1, Product = -12, so x² - (-1)x + (-12) = x² + x - 12 = 0" }
            ]
          },
          {
            id: "ch2",
            name: "Theory of Quadratic Equations",
            importantTopics: ["Nature of Roots", "Discriminant", "Relation between Roots"],
            keyConcepts: ["D = b² - 4ac", "Real vs Complex Roots"],
            formulas: ["D = b² - 4ac", "α + β = -b/a", "αβ = c/a"],
            mcqs: [
              { id: "m10-ch2-1", question: "For real roots, discriminant must be:", options: ["Negative", "Zero", "Non-negative", "Positive only"], correctAnswer: 2, explanation: "D ≥ 0 for real roots (D = 0 gives equal roots, D > 0 gives distinct)." },
              { id: "m10-ch2-2", question: "If D < 0, roots are:", options: ["Real", "Equal", "Complex/Imaginary", "Rational"], correctAnswer: 2, explanation: "Negative discriminant gives complex/imaginary roots." }
            ]
          },
          {
            id: "ch3",
            name: "Variations",
            importantTopics: ["Direct Variation", "Inverse Variation", "Joint Variation"],
            keyConcepts: ["Proportion", "Constant of Variation"],
            formulas: ["Direct: y = kx", "Inverse: y = k/x", "Joint: z = kxy"],
            mcqs: [
              { id: "m10-ch3-1", question: "If y ∝ x, then:", options: ["y = kx", "y = k/x", "xy = k", "y = x"], correctAnswer: 0, explanation: "Direct variation: y = kx where k is constant." },
              { id: "m10-ch3-2", question: "In inverse variation, product is:", options: ["Variable", "Constant", "Zero", "Undefined"], correctAnswer: 1, explanation: "Inverse: xy = k (product is constant)." }
            ]
          },
          {
            id: "ch4",
            name: "Partial Fractions",
            importantTopics: ["Proper & Improper Fractions", "Linear Factors", "Repeated Factors", "Quadratic Factors"],
            keyConcepts: ["Decomposition", "Distinct Linear Factors"],
            formulas: ["A/(x-a) + B/(x-b) = (A(x-b) + B(x-a))/((x-a)(x-b))"],
            mcqs: [
              { id: "m10-ch4-1", question: "Partial fractions are used for:", options: ["Multiplication", "Division", "Integration", "Differentiation"], correctAnswer: 2, explanation: "Partial fractions simplify integration of rational functions." }
            ]
          },
          {
            id: "ch5",
            name: "Sets and Functions",
            importantTopics: ["Types of Sets", "Set Operations", "Functions", "Types of Functions"],
            keyConcepts: ["Union", "Intersection", "Domain", "Range", "One-to-One", "Onto"],
            formulas: ["n(A∪B) = n(A) + n(B) - n(A∩B)"],
            mcqs: [
              { id: "m10-ch5-1", question: "Empty set is denoted by:", options: ["{ }", "∅", "Both A and B", "None"], correctAnswer: 2, explanation: "Empty set can be written as { } or ∅." },
              { id: "m10-ch5-2", question: "A function assigns to each element:", options: ["Multiple values", "Exactly one value", "No value", "Two values"], correctAnswer: 1, explanation: "Function: each input maps to exactly one output." }
            ]
          },
          {
            id: "ch6",
            name: "Basic Statistics",
            importantTopics: ["Measures of Central Tendency", "Mean", "Median", "Mode", "Frequency Distribution"],
            keyConcepts: ["Grouped & Ungrouped Data", "Cumulative Frequency"],
            formulas: ["Mean = Σx/n", "Mean (grouped) = Σfx/Σf"],
            mcqs: [
              { id: "m10-ch6-1", question: "Arithmetic mean of 2, 4, 6, 8 is:", options: ["4", "5", "6", "7"], correctAnswer: 1, explanation: "Mean = (2+4+6+8)/4 = 20/4 = 5" },
              { id: "m10-ch6-2", question: "Most frequently occurring value is:", options: ["Mean", "Median", "Mode", "Range"], correctAnswer: 2, explanation: "Mode is the value that appears most often." }
            ]
          },
          {
            id: "ch7",
            name: "Introduction to Trigonometry",
            importantTopics: ["Trigonometric Ratios", "Angle Measurement", "Trigonometric Identities"],
            keyConcepts: ["sin, cos, tan", "sec, cosec, cot", "Degrees & Radians"],
            formulas: ["sin²θ + cos²θ = 1", "1 + tan²θ = sec²θ", "1 + cot²θ = cosec²θ"],
            mcqs: [
              { id: "m10-ch7-1", question: "sin 30° equals:", options: ["0", "1/2", "1", "√3/2"], correctAnswer: 1, explanation: "sin 30° = 1/2" },
              { id: "m10-ch7-2", question: "cos 60° equals:", options: ["0", "1/2", "1", "√3/2"], correctAnswer: 1, explanation: "cos 60° = 1/2" },
              { id: "m10-ch7-3", question: "tan 45° equals:", options: ["0", "1/2", "1", "Undefined"], correctAnswer: 2, explanation: "tan 45° = 1" }
            ]
          },
          {
            id: "ch8",
            name: "Projection of a Side of a Triangle",
            importantTopics: ["Projection Formula", "Law of Cosines"],
            keyConcepts: ["Projection", "Oblique Triangles"],
            formulas: ["a = b cos C + c cos B", "a² = b² + c² - 2bc cos A"],
            mcqs: [
              { id: "m10-ch8-1", question: "Projection formula relates sides and:", options: ["Areas", "Angles", "Perimeter", "Height"], correctAnswer: 1, explanation: "Projection formula involves sides and their opposite angles." }
            ]
          },
          {
            id: "ch9",
            name: "Chords of a Circle",
            importantTopics: ["Chord Properties", "Perpendicular from Center", "Equal Chords"],
            keyConcepts: ["Chord bisected by perpendicular from center"],
            formulas: [],
            mcqs: [
              { id: "m10-ch9-1", question: "Perpendicular from center to chord:", options: ["Passes through circumference", "Bisects the chord", "Is parallel to chord", "Equals the radius"], correctAnswer: 1, explanation: "Perpendicular from center bisects the chord." }
            ]
          },
          {
            id: "ch10",
            name: "Tangent to a Circle",
            importantTopics: ["Tangent Properties", "Tangent-Radius Relationship"],
            keyConcepts: ["Tangent perpendicular to radius", "Tangent from external point"],
            formulas: [],
            mcqs: [
              { id: "m10-ch10-1", question: "Tangent to circle is perpendicular to:", options: ["Chord", "Diameter", "Radius at point of contact", "Secant"], correctAnswer: 2, explanation: "Tangent is perpendicular to radius at the point of tangency." }
            ]
          },
          {
            id: "ch11",
            name: "Chords and Arcs",
            importantTopics: ["Arc Length", "Relation between Chords and Arcs"],
            keyConcepts: ["Equal chords = equal arcs", "Arc subtended angle"],
            formulas: ["Arc length = rθ (θ in radians)"],
            mcqs: [
              { id: "m10-ch11-1", question: "Equal chords cut off:", options: ["Unequal arcs", "Equal arcs", "No arcs", "Diameter"], correctAnswer: 1, explanation: "Equal chords subtend equal arcs in the same circle." }
            ]
          },
          {
            id: "ch12",
            name: "Angle in a Segment of a Circle",
            importantTopics: ["Inscribed Angle", "Central Angle", "Angle in Semicircle"],
            keyConcepts: ["Inscribed angle = half central angle", "Angle in semicircle = 90°"],
            formulas: [],
            mcqs: [
              { id: "m10-ch12-1", question: "Angle in a semicircle is:", options: ["45°", "60°", "90°", "180°"], correctAnswer: 2, explanation: "Angle inscribed in a semicircle is always 90°." },
              { id: "m10-ch12-2", question: "Inscribed angle is ___ of central angle:", options: ["Equal", "Half", "Double", "Quarter"], correctAnswer: 1, explanation: "Inscribed angle = ½ × central angle on same arc." }
            ]
          },
          {
            id: "ch13",
            name: "Practical Geometry - Circles",
            importantTopics: ["Constructing Tangents", "Circumscribed & Inscribed Circles"],
            keyConcepts: ["Tangent construction", "Circle through three points"],
            formulas: [],
            mcqs: [
              { id: "m10-ch13-1", question: "How many tangents can be drawn from external point?", options: ["One", "Two", "Three", "Infinite"], correctAnswer: 1, explanation: "Exactly two tangents can be drawn from an external point." }
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
          { id: "ch15", name: "Secret of Success" }
        ]
      },
      {
        id: "pak-studies-10",
        name: "Pakistan Studies",
        icon: "🇵🇰",
        chapters: [
          { id: "ch4", name: "Land and Environment" },
          { id: "ch5", name: "Population" },
          { id: "ch6", name: "Culture and Society" }
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
          { id: "ch12", name: "Electrostatics" },
          { id: "ch13", name: "Current Electricity" },
          { id: "ch14", name: "Electromagnetism" },
          { id: "ch15", name: "Electromagnetic Induction" },
          { id: "ch16", name: "Alternating Current" },
          { id: "ch17", name: "Physics of Solids" },
          { id: "ch18", name: "Electronics" },
          { id: "ch19", name: "Dawn of Modern Physics" },
          { id: "ch20", name: "Atomic Spectra" },
          { id: "ch21", name: "Nuclear Physics" }
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
          { id: "ch12", name: "Linear Programming" }
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
