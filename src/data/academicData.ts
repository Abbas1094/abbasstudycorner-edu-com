// Academic data for Class 9-12 with MCQs, Pairing Schemes and Resources
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
          {
            id: "ch1",
            name: "Physical Quantities and Measurement",
            importantTopics: ["Base & Derived Units", "Prefixes", "Significant Figures", "Scientific Notation", "Measuring Instruments"],
            keyConcepts: ["SI Units", "Physical Quantities", "Vernier Caliper", "Screw Gauge"],
            formulas: ["Least Count = Smallest Division", "Vernier Scale Reading = Main Scale + (Vernier Coincidence × LC)"],
            mcqs: [
              { id: "p9-ch1-1", question: "The SI unit of length is:", options: ["Meter", "Centimeter", "Kilometer", "Foot"], correctAnswer: 0, explanation: "Meter (m) is the SI base unit for length." },
              { id: "p9-ch1-2", question: "Which is a derived quantity?", options: ["Length", "Mass", "Speed", "Time"], correctAnswer: 2, explanation: "Speed = Distance/Time, derived from base quantities." },
              { id: "p9-ch1-3", question: "Least count of vernier caliper is:", options: ["0.01 mm", "0.1 mm", "1 mm", "0.01 cm"], correctAnswer: 1, explanation: "Standard vernier caliper has least count of 0.1 mm or 0.01 cm." },
              { id: "p9-ch1-4", question: "Prefix 'kilo' means:", options: ["10³", "10⁶", "10⁻³", "10²"], correctAnswer: 0, explanation: "Kilo = 1000 = 10³" },
              { id: "p9-ch1-5", question: "Which instrument measures small lengths accurately?", options: ["Meter rod", "Vernier caliper", "Tape measure", "Ruler"], correctAnswer: 1, explanation: "Vernier caliper provides precise measurements up to 0.01 cm." },
              { id: "p9-ch1-6", question: "Scientific notation of 0.00035 is:", options: ["3.5 × 10⁻⁴", "35 × 10⁻⁵", "3.5 × 10⁴", "0.35 × 10⁻³"], correctAnswer: 0, explanation: "Move decimal 4 places right: 3.5 × 10⁻⁴" },
              { id: "p9-ch1-7", question: "Screw gauge is used to measure:", options: ["Large distances", "Diameter of wire", "Volume", "Time"], correctAnswer: 1, explanation: "Screw gauge measures small diameters with high precision." },
              { id: "p9-ch1-8", question: "Base quantity among these is:", options: ["Area", "Volume", "Current", "Velocity"], correctAnswer: 2, explanation: "Electric current (Ampere) is one of the 7 SI base quantities." }
            ]
          },
          {
            id: "ch2",
            name: "Kinematics",
            importantTopics: ["Types of Motion", "Speed & Velocity", "Acceleration", "Equations of Motion", "Graphical Analysis"],
            keyConcepts: ["Scalar vs Vector", "Uniform & Non-uniform Motion", "Distance vs Displacement"],
            formulas: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = (v+u)/2 × t"],
            mcqs: [
              { id: "p9-ch2-1", question: "A quantity with magnitude only is called:", options: ["Vector", "Scalar", "Unit", "Dimension"], correctAnswer: 1, explanation: "Scalar quantities have only magnitude (e.g., speed, mass)." },
              { id: "p9-ch2-2", question: "SI unit of velocity is:", options: ["m/s", "km/h", "m/s²", "cm/s"], correctAnswer: 0, explanation: "Velocity = Displacement/Time, SI unit is m/s." },
              { id: "p9-ch2-3", question: "Rate of change of velocity is:", options: ["Speed", "Acceleration", "Distance", "Displacement"], correctAnswer: 1, explanation: "Acceleration = Change in velocity / Time." },
              { id: "p9-ch2-4", question: "What are the dimensions of velocity?", options: ["LT⁻¹", "L²T⁻¹", "MLT⁻¹", "ML²T⁻²"], correctAnswer: 0, explanation: "Velocity = Length/Time = LT⁻¹" },
              { id: "p9-ch2-5", question: "Acceleration due to gravity is:", options: ["9.8 m/s", "9.8 m/s²", "10 m/s", "10 m/s²"], correctAnswer: 1, explanation: "g = 9.8 m/s² (standard value on Earth's surface)." },
              { id: "p9-ch2-6", question: "Slope of distance-time graph gives:", options: ["Acceleration", "Speed", "Force", "Momentum"], correctAnswer: 1, explanation: "Slope = Δdistance/Δtime = speed." },
              { id: "p9-ch2-7", question: "Which equation has no time 't'?", options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = vt"], correctAnswer: 2, explanation: "v² = u² + 2as eliminates time variable." },
              { id: "p9-ch2-8", question: "Uniform motion means:", options: ["Variable speed", "Constant velocity", "Zero velocity", "Increasing velocity"], correctAnswer: 1, explanation: "Uniform motion = constant velocity (same speed in same direction)." }
            ]
          },
          {
            id: "ch3",
            name: "Dynamics",
            importantTopics: ["Newton's Laws of Motion", "Momentum", "Force", "Friction", "Circular Motion"],
            keyConcepts: ["Inertia", "Action-Reaction", "Law of Conservation of Momentum"],
            formulas: ["F = ma", "p = mv", "W = mg", "Impulse = FΔt = Δp"],
            mcqs: [
              { id: "p9-ch3-1", question: "SI unit of force is:", options: ["kg", "Newton", "Joule", "Watt"], correctAnswer: 1, explanation: "Force SI unit is Newton (N) = kg⋅m/s²." },
              { id: "p9-ch3-2", question: "Inertia depends on:", options: ["Velocity", "Mass", "Acceleration", "Force"], correctAnswer: 1, explanation: "Inertia is directly proportional to mass." },
              { id: "p9-ch3-3", question: "Law of inertia is Newton's:", options: ["First law", "Second law", "Third law", "Law of gravitation"], correctAnswer: 0, explanation: "Newton's 1st law is also called law of inertia." },
              { id: "p9-ch3-4", question: "Momentum is a:", options: ["Scalar", "Vector", "Unit", "Constant"], correctAnswer: 1, explanation: "Momentum has both magnitude and direction (p = mv)." },
              { id: "p9-ch3-5", question: "Which law explains rocket motion?", options: ["First law", "Second law", "Third law", "None"], correctAnswer: 2, explanation: "Rocket propulsion is based on action-reaction principle." },
              { id: "p9-ch3-6", question: "F = ma is Newton's:", options: ["First law", "Second law", "Third law", "Universal law"], correctAnswer: 1, explanation: "Newton's 2nd law: Force = mass × acceleration." },
              { id: "p9-ch3-7", question: "Friction always acts:", options: ["In direction of motion", "Opposite to motion", "Perpendicular to motion", "At any angle"], correctAnswer: 1, explanation: "Friction opposes relative motion between surfaces." },
              { id: "p9-ch3-8", question: "When net force is zero, body is in:", options: ["Motion", "Rest", "Equilibrium", "Acceleration"], correctAnswer: 2, explanation: "Zero net force means body is in equilibrium (may be moving at constant velocity or at rest)." }
            ]
          },
          {
            id: "ch4",
            name: "Turning Effect of Forces",
            importantTopics: ["Torque", "Centre of Mass", "Centre of Gravity", "Equilibrium", "Couple"],
            keyConcepts: ["Moment of Force", "Principle of Moments", "Stability"],
            formulas: ["Torque τ = F × d", "Principle of Moments: Σ clockwise = Σ anticlockwise"],
            mcqs: [
              { id: "p9-ch4-1", question: "SI unit of torque is:", options: ["Newton", "N⋅m", "Joule", "kg⋅m"], correctAnswer: 1, explanation: "Torque = Force × distance, unit is Newton-meter (N⋅m)." },
              { id: "p9-ch4-2", question: "Torque produces:", options: ["Linear motion", "Rotational motion", "Uniform velocity", "Deceleration"], correctAnswer: 1, explanation: "Torque causes rotation (turning effect)." },
              { id: "p9-ch4-3", question: "Two equal and opposite parallel forces form a:", options: ["Moment", "Torque", "Couple", "Resultant"], correctAnswer: 2, explanation: "Couple = two equal, opposite, parallel forces separated by distance." },
              { id: "p9-ch4-4", question: "For equilibrium, sum of torques is:", options: ["Maximum", "Minimum", "Zero", "Infinite"], correctAnswer: 2, explanation: "Equilibrium requires Σ clockwise torques = Σ anticlockwise torques (net = 0)." },
              { id: "p9-ch4-5", question: "Centre of gravity of uniform rod is at:", options: ["One end", "Middle", "Both ends", "Outside the rod"], correctAnswer: 1, explanation: "For uniform objects, centre of gravity is at geometric center." },
              { id: "p9-ch4-6", question: "Moment arm is:", options: ["Force", "Perpendicular distance from axis", "Parallel distance", "Weight"], correctAnswer: 1, explanation: "Moment arm is the perpendicular distance from force line to pivot." }
            ]
          },
          {
            id: "ch5",
            name: "Gravitation",
            importantTopics: ["Law of Gravitation", "Mass vs Weight", "Gravitational Field", "Satellites"],
            keyConcepts: ["Universal Gravitational Constant", "g variation", "Orbital velocity"],
            formulas: ["F = Gm₁m₂/r²", "g = GM/R²", "W = mg", "v = √(gR)"],
            mcqs: [
              { id: "p9-ch5-1", question: "Value of G is:", options: ["6.67 × 10⁻¹¹ N⋅m²/kg²", "9.8 m/s²", "6.67 × 10¹¹ N⋅m²/kg²", "9.8 N/kg"], correctAnswer: 0, explanation: "G = 6.67 × 10⁻¹¹ N⋅m²/kg² is the universal gravitational constant." },
              { id: "p9-ch5-2", question: "Weight of a body on moon is:", options: ["Same as Earth", "1/6 of Earth", "6 times Earth", "Zero"], correctAnswer: 1, explanation: "Moon's gravity is about 1/6th of Earth's gravity." },
              { id: "p9-ch5-3", question: "Mass is a measure of:", options: ["Volume", "Inertia", "Weight", "Density"], correctAnswer: 1, explanation: "Mass measures the amount of matter (inertia) in a body." },
              { id: "p9-ch5-4", question: "At the centre of Earth, g is:", options: ["Maximum", "Minimum", "9.8 m/s²", "Zero"], correctAnswer: 3, explanation: "At Earth's center, gravitational forces cancel out, g = 0." },
              { id: "p9-ch5-5", question: "Artificial satellites use which law?", options: ["First law of motion", "Law of gravitation", "Law of conservation", "Ohm's law"], correctAnswer: 1, explanation: "Satellites orbit due to gravitational attraction toward Earth." }
            ]
          },
          {
            id: "ch6",
            name: "Work and Energy",
            importantTopics: ["Work", "Energy Types", "Power", "Efficiency", "Energy Conservation"],
            keyConcepts: ["Kinetic Energy", "Potential Energy", "Work-Energy Theorem"],
            formulas: ["W = F⋅s⋅cosθ", "KE = ½mv²", "PE = mgh", "P = W/t", "Efficiency = (Output/Input) × 100%"],
            mcqs: [
              { id: "p9-ch6-1", question: "SI unit of work is:", options: ["Newton", "Watt", "Joule", "Pascal"], correctAnswer: 2, explanation: "Work = Force × Distance, SI unit is Joule (J)." },
              { id: "p9-ch6-2", question: "SI unit of power is:", options: ["Joule", "Newton", "Watt", "Ampere"], correctAnswer: 2, explanation: "Power = Work/Time, SI unit is Watt (W)." },
              { id: "p9-ch6-3", question: "Energy stored in stretched spring is:", options: ["Kinetic", "Potential", "Elastic potential", "Chemical"], correctAnswer: 2, explanation: "Stretched/compressed springs store elastic potential energy." },
              { id: "p9-ch6-4", question: "Power if 100J work is done in 20s is:", options: ["10W", "5W", "20W", "2W"], correctAnswer: 1, explanation: "P = W/t = 100/20 = 5 Watt." },
              { id: "p9-ch6-5", question: "Kinetic energy depends on:", options: ["Mass only", "Velocity only", "Both mass and velocity", "Height"], correctAnswer: 2, explanation: "KE = ½mv², depends on both mass and velocity." },
              { id: "p9-ch6-6", question: "When work is done against gravity:", options: ["KE increases", "PE increases", "Both increase", "Energy is lost"], correctAnswer: 1, explanation: "Work against gravity increases gravitational potential energy." }
            ]
          },
          {
            id: "ch7",
            name: "Properties of Matter",
            importantTopics: ["Density", "Pressure", "Atmospheric Pressure", "Pascal's Law", "Archimedes Principle"],
            keyConcepts: ["States of Matter", "Hooke's Law", "Elasticity"],
            formulas: ["Density = m/V", "P = F/A", "P = ρgh", "F = kx (Hooke's Law)"],
            mcqs: [
              { id: "p9-ch7-1", question: "SI unit of pressure is:", options: ["Newton", "Pascal", "Joule", "Watt"], correctAnswer: 1, explanation: "Pressure = Force/Area, SI unit is Pascal (Pa) = N/m²." },
              { id: "p9-ch7-2", question: "Atmospheric pressure at sea level is:", options: ["101325 Pa", "100 Pa", "1000 Pa", "10 Pa"], correctAnswer: 0, explanation: "Standard atmospheric pressure = 101325 Pa or about 101.3 kPa." },
              { id: "p9-ch7-3", question: "Hooke's law relates stress and:", options: ["Force", "Strain", "Pressure", "Volume"], correctAnswer: 1, explanation: "Hooke's law: Stress ∝ Strain (within elastic limit)." },
              { id: "p9-ch7-4", question: "What is the mathematical expression of Hooke's Law?", options: ["F = kx", "F = ma", "P = mv", "E = mc²"], correctAnswer: 0, explanation: "F = kx where F is force, k is spring constant, x is extension." },
              { id: "p9-ch7-5", question: "Hydraulic press works on:", options: ["Newton's law", "Pascal's law", "Archimedes principle", "Bernoulli's theorem"], correctAnswer: 1, explanation: "Pascal's law: Pressure applied to enclosed fluid transmits equally." }
            ]
          },
          {
            id: "ch8",
            name: "Thermal Properties of Matter",
            importantTopics: ["Temperature", "Thermometers", "Thermal Expansion", "Heat Capacity", "Latent Heat"],
            keyConcepts: ["Celsius & Kelvin Scale", "Specific Heat", "Change of State"],
            formulas: ["K = °C + 273", "Q = mcΔT", "Q = mL", "Linear expansion: ΔL = αLΔT"],
            mcqs: [
              { id: "p9-ch8-1", question: "SI unit of temperature is:", options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"], correctAnswer: 2, explanation: "Kelvin (K) is the SI base unit for temperature." },
              { id: "p9-ch8-2", question: "Which device is used to measure temperature?", options: ["Barometer", "Thermometer", "Ammeter", "Hygrometer"], correctAnswer: 1, explanation: "Thermometer measures temperature." },
              { id: "p9-ch8-3", question: "Water freezing point in Fahrenheit is:", options: ["0°F", "32°F", "100°F", "212°F"], correctAnswer: 1, explanation: "Water freezes at 32°F = 0°C." },
              { id: "p9-ch8-4", question: "The boiling point of water at 1 atm is:", options: ["50°C", "273°C", "100°C", "212°C"], correctAnswer: 2, explanation: "Water boils at 100°C at standard atmospheric pressure." },
              { id: "p9-ch8-5", question: "Specific heat of water is:", options: ["4180 J/kg⋅K", "4.18 J/kg⋅K", "418 J/kg⋅K", "41.8 J/kg⋅K"], correctAnswer: 0, explanation: "Specific heat of water = 4180 J/kg⋅K (or 4.18 kJ/kg⋅K)." },
              { id: "p9-ch8-6", question: "Temperature where solid melts is called:", options: ["Boiling point", "Melting point", "Freezing point", "Condensation point"], correctAnswer: 1, explanation: "Melting point is the temperature at which solid changes to liquid." }
            ]
          },
          {
            id: "ch9",
            name: "Transfer of Heat",
            importantTopics: ["Conduction", "Convection", "Radiation", "Greenhouse Effect"],
            keyConcepts: ["Conductors & Insulators", "Heat Transfer Methods"],
            formulas: ["Q/t = kA(T₁-T₂)/L (Conduction)"],
            mcqs: [
              { id: "p9-ch9-1", question: "Heat transfer through vacuum occurs by:", options: ["Conduction", "Convection", "Radiation", "All methods"], correctAnswer: 2, explanation: "Only radiation can transfer heat through vacuum (no medium needed)." },
              { id: "p9-ch9-2", question: "Best conductor of heat is:", options: ["Wood", "Silver", "Glass", "Rubber"], correctAnswer: 1, explanation: "Silver has the highest thermal conductivity among common materials." },
              { id: "p9-ch9-3", question: "Convection occurs in:", options: ["Solids only", "Fluids only", "Vacuum", "All states"], correctAnswer: 1, explanation: "Convection requires fluid (liquid or gas) movement." },
              { id: "p9-ch9-4", question: "Black surfaces are good:", options: ["Reflectors", "Absorbers of heat", "Insulators", "Conductors"], correctAnswer: 1, explanation: "Black surfaces absorb and emit radiation efficiently." }
            ]
          }
        ]
      },
      {
        id: "chemistry-9",
        name: "Chemistry",
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
          {
            id: "ch1",
            name: "Fundamentals of Chemistry",
            importantTopics: ["Branches of Chemistry", "Empirical & Molecular Formula", "Mole Concept", "Avogadro's Number"],
            keyConcepts: ["Matter", "Element", "Compound", "Mixture", "Atomic Mass Unit"],
            formulas: ["No. of moles = mass/molar mass", "No. of particles = n × Nₐ", "Nₐ = 6.022 × 10²³"],
            mcqs: [
              { id: "c9-ch1-1", question: "The smallest particle of an element is:", options: ["Atom", "Molecule", "Ion", "Compound"], correctAnswer: 0, explanation: "An atom is the smallest particle of an element that retains its properties." },
              { id: "c9-ch1-2", question: "Matter is made up of:", options: ["Light & Sound", "Water & Air", "Atoms & Molecules", "Cells & Tissues"], correctAnswer: 2, explanation: "All matter consists of atoms and molecules." },
              { id: "c9-ch1-3", question: "Two moles of calcium contain how many atoms?", options: ["6.022 × 10²³", "12.044 × 10²³", "3.011 × 10²³", "18.066 × 10²³"], correctAnswer: 1, explanation: "2 moles = 2 × Nₐ = 2 × 6.022 × 10²³ = 12.044 × 10²³ atoms." },
              { id: "c9-ch1-4", question: "Avogadro's number is:", options: ["6.022 × 10²³", "6.022 × 10⁻²³", "6.022 × 10²²", "6.022 × 10²⁴"], correctAnswer: 0, explanation: "Nₐ = 6.022 × 10²³ particles per mole." },
              { id: "c9-ch1-5", question: "Which is NOT a branch of chemistry?", options: ["Organic", "Inorganic", "Botany", "Physical"], correctAnswer: 2, explanation: "Botany is a branch of biology, not chemistry." },
              { id: "c9-ch1-6", question: "Chemical formula of Sodium Chloride is:", options: ["NaCl", "KCl", "Na₂Cl", "ClNa₂"], correctAnswer: 0, explanation: "NaCl is the correct formula for sodium chloride (table salt)." }
            ]
          },
          {
            id: "ch2",
            name: "Structure of Atoms",
            importantTopics: ["Subatomic Particles", "Atomic Models", "Electronic Configuration", "Isotopes"],
            keyConcepts: ["Proton", "Neutron", "Electron", "Atomic Number", "Mass Number", "Rutherford & Bohr Models"],
            formulas: ["Mass Number = Protons + Neutrons", "Atomic Number = Number of Protons"],
            mcqs: [
              { id: "c9-ch2-1", question: "The atomic number of oxygen is:", options: ["6", "10", "8", "7"], correctAnswer: 2, explanation: "Oxygen has 8 protons, so atomic number = 8." },
              { id: "c9-ch2-2", question: "Which particle has no charge?", options: ["Proton", "Neutron", "Electron", "Ion"], correctAnswer: 1, explanation: "Neutron is electrically neutral (no charge)." },
              { id: "c9-ch2-3", question: "Ion having +2 charge is:", options: ["Na⁺", "Mg²⁺", "Al³⁺", "K⁺"], correctAnswer: 1, explanation: "Mg²⁺ (Magnesium ion) has a +2 charge." },
              { id: "c9-ch2-4", question: "Neil Bohr gave Atomic:", options: ["Number", "Model", "Value", "All of these"], correctAnswer: 1, explanation: "Niels Bohr proposed the atomic model with electron orbits." },
              { id: "c9-ch2-5", question: "Who discovered the neutron?", options: ["Albert Einstein", "Niels Bohr", "James Chadwick", "Ernest Rutherford"], correctAnswer: 2, explanation: "James Chadwick discovered the neutron in 1932." },
              { id: "c9-ch2-6", question: "Electron was discovered in which year?", options: ["1850", "1876", "1897", "1926"], correctAnswer: 2, explanation: "J.J. Thomson discovered the electron in 1897." },
              { id: "c9-ch2-7", question: "Nucleus contains:", options: ["Protons only", "Neutrons only", "Protons and Neutrons", "Electrons"], correctAnswer: 2, explanation: "Nucleus contains protons (positive) and neutrons (neutral)." }
            ]
          },
          {
            id: "ch3",
            name: "Periodic Table and Periodicity",
            importantTopics: ["Modern Periodic Table", "Groups & Periods", "Periodic Trends", "Metals & Non-metals"],
            keyConcepts: ["Periodic Law", "Electronegativity", "Ionization Energy", "Electron Affinity"],
            formulas: [],
            mcqs: [
              { id: "c9-ch3-1", question: "Total number of groups in periodic table:", options: ["7", "8", "18", "16"], correctAnswer: 2, explanation: "Modern periodic table has 18 vertical groups." },
              { id: "c9-ch3-2", question: "Which metal is liquid at room temperature?", options: ["Mercury", "Iron", "Aluminum", "Sodium"], correctAnswer: 0, explanation: "Mercury (Hg) is the only metal liquid at room temperature." },
              { id: "c9-ch3-3", question: "Alkali metals belong to group:", options: ["1", "2", "17", "18"], correctAnswer: 0, explanation: "Alkali metals (Li, Na, K, etc.) are in Group 1." },
              { id: "c9-ch3-4", question: "Noble gases are in group:", options: ["1", "2", "17", "18"], correctAnswer: 3, explanation: "Noble gases (He, Ne, Ar, etc.) are in Group 18." },
              { id: "c9-ch3-5", question: "Electronegativity increases across a period from:", options: ["Right to left", "Left to right", "Stays same", "Decreases"], correctAnswer: 1, explanation: "Electronegativity increases left to right across a period." }
            ]
          },
          {
            id: "ch4",
            name: "Structure of Molecules",
            importantTopics: ["Chemical Bonding", "Ionic Bonds", "Covalent Bonds", "Metallic Bonds"],
            keyConcepts: ["Octet Rule", "Lewis Dot Structure", "Electrovalent Compounds", "Coordinate Covalent Bond"],
            formulas: [],
            mcqs: [
              { id: "c9-ch4-1", question: "Ionic bond is formed between:", options: ["Two metals", "Two non-metals", "Metal and non-metal", "Noble gases"], correctAnswer: 2, explanation: "Ionic bond forms when a metal transfers electrons to a non-metal." },
              { id: "c9-ch4-2", question: "Covalent bond involves:", options: ["Transfer of electrons", "Sharing of electrons", "Free electrons", "No electrons"], correctAnswer: 1, explanation: "Covalent bond = sharing of electron pairs between atoms." },
              { id: "c9-ch4-3", question: "NaCl is an example of:", options: ["Covalent compound", "Ionic compound", "Metallic bond", "Hydrogen bond"], correctAnswer: 1, explanation: "NaCl (sodium chloride) is a classic ionic compound." },
              { id: "c9-ch4-4", question: "Metallic bonds exist in:", options: ["NaCl", "H₂O", "Copper", "CO₂"], correctAnswer: 2, explanation: "Copper and other metals have metallic bonding." }
            ]
          },
          {
            id: "ch5",
            name: "Physical States of Matter",
            importantTopics: ["Solid, Liquid, Gas", "Plasma", "Kinetic Molecular Theory", "Gas Laws"],
            keyConcepts: ["Boyle's Law", "Charles's Law", "Pressure-Temperature Relationship", "Diffusion"],
            formulas: ["P₁V₁ = P₂V₂ (Boyle's)", "V₁/T₁ = V₂/T₂ (Charles's)", "PV = nRT (Ideal Gas)"],
            mcqs: [
              { id: "c9-ch5-1", question: "In gases, molecules are:", options: ["Close together", "Far apart", "Fixed position", "No movement"], correctAnswer: 1, explanation: "Gas molecules are far apart with weak intermolecular forces." },
              { id: "c9-ch5-2", question: "Boyle's law relates P and V at constant:", options: ["Temperature", "Pressure", "Volume", "Mass"], correctAnswer: 0, explanation: "Boyle's law: P ∝ 1/V at constant temperature." },
              { id: "c9-ch5-3", question: "Fourth state of matter is:", options: ["Solid", "Liquid", "Gas", "Plasma"], correctAnswer: 3, explanation: "Plasma is the fourth state of matter (ionized gas)." },
              { id: "c9-ch5-4", question: "Diffusion is fastest in:", options: ["Solids", "Liquids", "Gases", "Same in all"], correctAnswer: 2, explanation: "Gases have highest kinetic energy and fastest diffusion." }
            ]
          },
          {
            id: "ch6",
            name: "Solutions",
            importantTopics: ["Types of Solutions", "Concentration Units", "Solubility", "Saturated & Unsaturated Solutions"],
            keyConcepts: ["Solute", "Solvent", "Molarity", "Dilution"],
            formulas: ["Molarity (M) = moles of solute / liters of solution", "% concentration = (solute/solution) × 100"],
            mcqs: [
              { id: "c9-ch6-1", question: "A solution that cannot dissolve more solute is:", options: ["Dilute", "Concentrated", "Saturated", "Unsaturated"], correctAnswer: 2, explanation: "Saturated solution has maximum dissolved solute at given temperature." },
              { id: "c9-ch6-2", question: "Substance that turns red litmus blue:", options: ["Acid", "Base", "Salt", "Water"], correctAnswer: 1, explanation: "Bases turn red litmus paper blue (basic/alkaline)." },
              { id: "c9-ch6-3", question: "Universal solvent is:", options: ["Alcohol", "Water", "Acid", "Oil"], correctAnswer: 1, explanation: "Water dissolves many substances, hence 'universal solvent'." },
              { id: "c9-ch6-4", question: "Chemical used to soften hard water:", options: ["Bleaching powder", "Washing soda", "Vinegar", "Salt"], correctAnswer: 1, explanation: "Washing soda (Na₂CO₃) removes Ca²⁺ and Mg²⁺ ions from hard water." }
            ]
          },
          {
            id: "ch7",
            name: "Electrochemistry",
            importantTopics: ["Electrolytes", "Electrolysis", "Electrochemical Cells", "Oxidation & Reduction"],
            keyConcepts: ["Anode", "Cathode", "Galvanic Cell", "Electrolytic Cell", "Redox Reactions"],
            formulas: ["Oxidation = Loss of electrons", "Reduction = Gain of electrons"],
            mcqs: [
              { id: "c9-ch7-1", question: "At cathode, process occurs:", options: ["Oxidation", "Reduction", "No reaction", "Both"], correctAnswer: 1, explanation: "Cathode is where reduction (gain of electrons) occurs." },
              { id: "c9-ch7-2", question: "Electrolytes conduct electricity due to:", options: ["Free electrons", "Ions in solution", "Neutral atoms", "Protons"], correctAnswer: 1, explanation: "Electrolytes conduct electricity through movement of ions." },
              { id: "c9-ch7-3", question: "In electrolysis, positive electrode is:", options: ["Cathode", "Anode", "Salt bridge", "Electrolyte"], correctAnswer: 1, explanation: "Anode is the positive electrode where oxidation occurs." }
            ]
          },
          {
            id: "ch8",
            name: "Chemical Reactivity",
            importantTopics: ["Metals and Non-metals", "Reactivity Series", "Chemical Reactions"],
            keyConcepts: ["Activity Series", "Displacement Reactions", "Corrosion"],
            formulas: [],
            mcqs: [
              { id: "c9-ch8-1", question: "Most reactive metal is:", options: ["Gold", "Potassium", "Iron", "Copper"], correctAnswer: 1, explanation: "Potassium is highly reactive; reacts violently with water." },
              { id: "c9-ch8-2", question: "Element that forms acidic oxides:", options: ["Sodium", "Magnesium", "Calcium", "Sulfur"], correctAnswer: 3, explanation: "Non-metals like sulfur form acidic oxides (SO₂, SO₃)." },
              { id: "c9-ch8-3", question: "Rusting of iron requires:", options: ["Only air", "Only water", "Air and water", "Neither"], correctAnswer: 2, explanation: "Rusting needs both oxygen (air) and moisture (water)." },
              { id: "c9-ch8-4", question: "The hardest natural substance is:", options: ["Gold", "Diamond", "Iron", "Silver"], correctAnswer: 1, explanation: "Diamond (pure carbon) is the hardest natural substance." },
              { id: "c9-ch8-5", question: "Stainless steel is an alloy of:", options: ["Iron & Carbon", "Iron, Chromium, Nickel", "Aluminium & Copper", "Zinc & Lead"], correctAnswer: 1, explanation: "Stainless steel contains iron, chromium, and nickel." }
            ]
          }
        ]
      },
      {
        id: "math-9",
        name: "Mathematics",
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
