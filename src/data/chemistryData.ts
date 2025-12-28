export interface MCQ {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  isExperienceBased?: boolean;
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  mcqs: MCQ[];
  icon: string;
}

// Regular chapters (without tough section)
export const chemistryChapters: Chapter[] = [
  {
    id: "chem-1",
    name: "Fundamentals of Chemistry",
    description: "Mole concept, Avogadro's number, matter basics",
    icon: "⚗️",
    mcqs: [
      { id: 1, question: "The simplest form of matter is:", options: ["Molecule", "Compound", "Atom", "Mixture"], correctAnswer: 2 },
      { id: 2, question: "One mole contains how many particles?", options: ["3.01×10²³", "6.02×10²³", "9.11×10⁻³¹", "1.6×10⁻¹⁹"], correctAnswer: 1 },
      { id: 3, question: "Mass of 1 mole of water is:", options: ["16 g", "17 g", "18 g", "20 g"], correctAnswer: 2 },
      { id: 4, question: "Percentage of oxygen in human body is approximately:", options: ["45%", "55%", "65%", "75%"], correctAnswer: 2 },
      { id: 5, question: "Avogadro's number is:", options: ["6.02×10²¹", "6.02×10²²", "6.02×10²³", "6.02×10²⁴"], correctAnswer: 2 },
      { id: 6, question: "1 amu is defined as:", options: ["Mass of hydrogen atom", "1/12th mass of C-12", "Mass of oxygen atom", "Mass of neutron"], correctAnswer: 1 },
      { id: 7, question: "Molar volume of gas at STP is:", options: ["11.2 dm³", "22.4 dm³", "44.8 dm³", "33.6 dm³"], correctAnswer: 1 },
      { id: 8, question: "Percentage of carbon in human body is:", options: ["10%", "18%", "25%", "30%"], correctAnswer: 1 },
      { id: 9, question: "Most abundant element in ocean is:", options: ["Hydrogen", "Oxygen", "Sodium", "Chlorine"], correctAnswer: 1 },
      { id: 10, question: "Formula mass of Na₂SO₄ is:", options: ["120 amu", "130 amu", "142 amu", "150 amu"], correctAnswer: 2 },
      { id: 11, question: "1 mole of NaCl has mass:", options: ["55.5 g", "58.5 g", "60.5 g", "62.5 g"], correctAnswer: 1 },
      { id: 12, question: "1 mole of H₂SO₄ has mass:", options: ["88 g", "94 g", "98 g", "102 g"], correctAnswer: 2 },
      { id: 13, question: "Matter is anything that has:", options: ["Mass only", "Volume only", "Mass and occupies space", "Energy"], correctAnswer: 2 },
      { id: 14, question: "Element contains:", options: ["Different atoms", "Same type of atoms", "Molecules", "Ions"], correctAnswer: 1 },
      { id: 15, question: "Compound is formed by:", options: ["Physical combination", "Chemical combination", "Mixing", "Heating"], correctAnswer: 1 },
      { id: 16, question: "Mixture is formed by:", options: ["Chemical combination", "Physical combination", "Bonding", "Reaction"], correctAnswer: 1 },
      { id: 17, question: "Mole is defined as amount containing:", options: ["6.02×10²³ particles", "Gram of substance", "Liter of gas", "Unit mass"], correctAnswer: 0 },
      { id: 18, question: "Empirical formula of benzene is:", options: ["C₆H₆", "CH", "C₂H₂", "C₃H₃"], correctAnswer: 1 },
      { id: 19, question: "Molecular formula of benzene is:", options: ["CH", "C₂H₂", "C₆H₆", "C₃H₆"], correctAnswer: 2 },
      { id: 20, question: "Formula mass is expressed in:", options: ["grams", "kg", "amu", "moles"], correctAnswer: 2 },
      { id: 21, question: "Study of composition and properties of matter is:", options: ["Physics", "Chemistry", "Biology", "Geology"], correctAnswer: 1 },
      { id: 22, question: "Mole formula is:", options: ["n = mass × molar mass", "n = mass / molar mass", "n = molar mass / mass", "n = mass + molar mass"], correctAnswer: 1 },
      { id: 23, question: "Number of atoms in 1 mole of any element:", options: ["6.02×10²²", "6.02×10²³", "6.02×10²⁴", "6.02×10²⁵"], correctAnswer: 1 },
      { id: 24, question: "Molar mass of CO₂ is:", options: ["28 g/mol", "32 g/mol", "44 g/mol", "48 g/mol"], correctAnswer: 2 },
      { id: 25, question: "Smallest particle of element retaining properties is:", options: ["Molecule", "Atom", "Ion", "Electron"], correctAnswer: 1 }
    ]
  },
  {
    id: "chem-2",
    name: "Atomic Structure",
    description: "Electrons, protons, neutrons, atomic models",
    icon: "⚛️",
    mcqs: [
      { id: 1, question: "Electron was discovered by:", options: ["Rutherford", "Chadwick", "Goldstein", "J.J. Thomson"], correctAnswer: 3 },
      { id: 2, question: "Neutron was discovered in:", options: ["1900", "1911", "1932", "1945"], correctAnswer: 2 },
      { id: 3, question: "Heaviest subatomic particle is:", options: ["Electron", "Proton", "Neutron", "Positron"], correctAnswer: 2 },
      { id: 4, question: "Canal rays consist of:", options: ["Electrons", "Neutrons", "Protons", "Photons"], correctAnswer: 2 },
      { id: 5, question: "Proton was discovered by:", options: ["Thomson", "Goldstein", "Chadwick", "Bohr"], correctAnswer: 1 },
      { id: 6, question: "Nucleus was discovered by:", options: ["Thomson", "Goldstein", "Rutherford", "Bohr"], correctAnswer: 2 },
      { id: 7, question: "Mass of electron is:", options: ["9.11×10⁻³¹ kg", "1.67×10⁻²⁷ kg", "1.00 amu", "0.00 kg"], correctAnswer: 0 },
      { id: 8, question: "Mass of proton is:", options: ["9.11×10⁻³¹ kg", "1.0073 amu", "0 amu", "2 amu"], correctAnswer: 1 },
      { id: 9, question: "Plum pudding model was proposed by:", options: ["Rutherford", "Bohr", "J.J. Thomson", "Dalton"], correctAnswer: 2 },
      { id: 10, question: "Charge on proton is:", options: ["-1.6×10⁻¹⁹ C", "+1.6×10⁻¹⁹ C", "0", "+1"], correctAnswer: 1 },
      { id: 11, question: "Charge on electron is:", options: ["-1.6×10⁻¹⁹ C", "+1.6×10⁻¹⁹ C", "0", "-1"], correctAnswer: 0 },
      { id: 12, question: "Neutron has charge:", options: ["Positive", "Negative", "Neutral", "Variable"], correctAnswer: 2 },
      { id: 13, question: "Atomic number equals:", options: ["Number of neutrons", "Number of protons", "Mass number", "Number of electrons only"], correctAnswer: 1 },
      { id: 14, question: "Mass number equals:", options: ["Protons only", "Neutrons only", "Protons + Neutrons", "Electrons"], correctAnswer: 2 },
      { id: 15, question: "Bohr's model states electrons move in:", options: ["Random paths", "Fixed energy levels", "Nucleus", "Waves"], correctAnswer: 1 },
      { id: 16, question: "Maximum electrons in K shell:", options: ["2", "8", "18", "32"], correctAnswer: 0 },
      { id: 17, question: "Maximum electrons in L shell:", options: ["2", "8", "18", "32"], correctAnswer: 1 },
      { id: 18, question: "Maximum electrons in M shell:", options: ["2", "8", "18", "32"], correctAnswer: 2 },
      { id: 19, question: "Formula for max electrons in shell is:", options: ["n²", "2n²", "n³", "2n"], correctAnswer: 1 },
      { id: 20, question: "Radioactivity was discovered by:", options: ["Marie Curie", "Becquerel", "Rutherford", "Thomson"], correctAnswer: 1 },
      { id: 21, question: "Atomic theory was proposed by:", options: ["Dalton", "Bohr", "Thomson", "Rutherford"], correctAnswer: 0 },
      { id: 22, question: "Year of atomic theory:", options: ["1803", "1897", "1911", "1913"], correctAnswer: 0 },
      { id: 23, question: "Nucleus is:", options: ["Negative", "Positive", "Neutral", "Empty"], correctAnswer: 1 },
      { id: 24, question: "Electron revolves around:", options: ["Proton", "Neutron", "Nucleus", "Shell"], correctAnswer: 2 },
      { id: 25, question: "Isotopes have same:", options: ["Mass number", "Neutrons", "Atomic number", "Atomic mass"], correctAnswer: 2 }
    ]
  },
  {
    id: "chem-3",
    name: "Periodic Table",
    description: "Groups, periods, trends, electronegativity",
    icon: "📊",
    mcqs: [
      { id: 1, question: "Most electronegative element is:", options: ["Oxygen", "Nitrogen", "Chlorine", "Fluorine"], correctAnswer: 3 },
      { id: 2, question: "Noble gases belong to group:", options: ["1", "16", "17", "18"], correctAnswer: 3 },
      { id: 3, question: "Longest period in periodic table is:", options: ["4th", "5th", "6th", "7th"], correctAnswer: 2 },
      { id: 4, question: "Transition elements lie in groups:", options: ["1–2", "13–18", "3–12", "16–18"], correctAnswer: 2 },
      { id: 5, question: "Alkali metals belong to group:", options: ["1", "2", "17", "18"], correctAnswer: 0 },
      { id: 6, question: "Halogens belong to group:", options: ["1", "2", "17", "18"], correctAnswer: 2 },
      { id: 7, question: "Number of groups in periodic table:", options: ["7", "8", "18", "32"], correctAnswer: 2 },
      { id: 8, question: "Number of periods in periodic table:", options: ["7", "8", "18", "32"], correctAnswer: 0 },
      { id: 9, question: "Shortest period is:", options: ["1st", "2nd", "3rd", "4th"], correctAnswer: 0 },
      { id: 10, question: "1st period has elements:", options: ["2", "8", "18", "32"], correctAnswer: 0 },
      { id: 11, question: "6th period has elements:", options: ["8", "18", "32", "50"], correctAnswer: 2 },
      { id: 12, question: "Electronegativity of F is:", options: ["2.0", "3.0", "3.5", "4.0"], correctAnswer: 3 },
      { id: 13, question: "Electronegativity of Cl is:", options: ["2.5", "3.0", "3.2", "3.5"], correctAnswer: 2 },
      { id: 14, question: "Electronegativity of N is:", options: ["2.5", "3.0", "3.5", "4.0"], correctAnswer: 1 },
      { id: 15, question: "Least electronegative element is:", options: ["Na", "K", "Cs", "Fr"], correctAnswer: 2 },
      { id: 16, question: "Groups are:", options: ["Horizontal rows", "Vertical columns", "Diagonal", "Random"], correctAnswer: 1 },
      { id: 17, question: "Periods are:", options: ["Horizontal rows", "Vertical columns", "Diagonal", "Random"], correctAnswer: 0 },
      { id: 18, question: "Atomic size increases:", options: ["Left to right", "Top to bottom", "Diagonally", "Remains same"], correctAnswer: 1 },
      { id: 19, question: "Ionization energy increases:", options: ["Top to bottom", "Left to right", "Diagonally down", "Remains same"], correctAnswer: 1 },
      { id: 20, question: "Shielding effect is due to:", options: ["Nucleus", "Inner electrons", "Outer electrons", "Neutrons"], correctAnswer: 1 },
      { id: 21, question: "Lanthanides are in period:", options: ["5th", "6th", "7th", "4th"], correctAnswer: 1 },
      { id: 22, question: "Actinides are in period:", options: ["5th", "6th", "7th", "4th"], correctAnswer: 2 },
      { id: 23, question: "Group 1 elements are called:", options: ["Alkaline earth", "Alkali metals", "Halogens", "Noble gases"], correctAnswer: 1 },
      { id: 24, question: "Group 2 elements are called:", options: ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"], correctAnswer: 1 },
      { id: 25, question: "Atomic radius decreases:", options: ["Top to bottom", "Left to right", "Diagonally", "Remains same"], correctAnswer: 1 }
    ]
  },
  {
    id: "chem-4",
    name: "Chemical Bonding",
    description: "Ionic, covalent, coordinate bonds",
    icon: "🔗",
    mcqs: [
      { id: 1, question: "Bond present in NaCl is:", options: ["Covalent", "Ionic", "Hydrogen", "Metallic"], correctAnswer: 1 },
      { id: 2, question: "Bond in nitrogen molecule (N₂) is:", options: ["Single covalent", "Double covalent", "Triple covalent", "Ionic"], correctAnswer: 2 },
      { id: 3, question: "Ice floats on water because:", options: ["Ice is denser", "Water is denser", "Ice has higher mass", "Water freezes faster"], correctAnswer: 1 },
      { id: 4, question: "Octet rule means attaining:", options: ["2 electrons", "6 electrons", "8 electrons", "10 electrons"], correctAnswer: 2 },
      { id: 5, question: "Ionic bond is formed by:", options: ["Electron sharing", "Electron transfer", "Electron loss", "No electrons"], correctAnswer: 1 },
      { id: 6, question: "Covalent bond is formed by:", options: ["Electron transfer", "Electron sharing", "Proton sharing", "Neutron sharing"], correctAnswer: 1 },
      { id: 7, question: "Bond in O₂ molecule is:", options: ["Single", "Double", "Triple", "Ionic"], correctAnswer: 1 },
      { id: 8, question: "Coordinate bond example is:", options: ["NaCl", "H₂O", "NH₄⁺", "O₂"], correctAnswer: 2 },
      { id: 9, question: "Hydrogen bonding is present in:", options: ["NaCl", "H₂O", "N₂", "CO₂"], correctAnswer: 1 },
      { id: 10, question: "Duplet rule means:", options: ["2 electrons", "8 electrons", "18 electrons", "32 electrons"], correctAnswer: 0 },
      { id: 11, question: "Metallic bond is found in:", options: ["NaCl", "H₂O", "Na metal", "CO₂"], correctAnswer: 2 },
      { id: 12, question: "Ionic compounds have:", options: ["Low melting point", "High melting point", "No melting point", "Variable"], correctAnswer: 1 },
      { id: 13, question: "Covalent compounds are usually:", options: ["Good conductors", "Poor conductors", "Semiconductors", "Superconductors"], correctAnswer: 1 },
      { id: 14, question: "Bond in HCl is:", options: ["Ionic", "Covalent", "Metallic", "Coordinate"], correctAnswer: 1 },
      { id: 15, question: "Number of covalent bonds in H₂O:", options: ["1", "2", "3", "4"], correctAnswer: 1 },
      { id: 16, question: "Chemical bond is:", options: ["Force between atoms", "Distance between atoms", "Mass of atoms", "Size of atoms"], correctAnswer: 0 },
      { id: 17, question: "Polar covalent bond has:", options: ["Equal sharing", "Unequal sharing", "Transfer of electrons", "No sharing"], correctAnswer: 1 },
      { id: 18, question: "Nonpolar covalent bond has:", options: ["Unequal sharing", "Equal sharing", "Electron transfer", "Ionic character"], correctAnswer: 1 },
      { id: 19, question: "Bond in diamond is:", options: ["Ionic", "Covalent", "Metallic", "Van der Waals"], correctAnswer: 1 },
      { id: 20, question: "Electrovalent bond is same as:", options: ["Covalent", "Ionic", "Metallic", "Hydrogen"], correctAnswer: 1 },
      { id: 21, question: "Bond angle in H₂O is:", options: ["90°", "104.5°", "109.5°", "180°"], correctAnswer: 1 },
      { id: 22, question: "Bond angle in CH₄ is:", options: ["90°", "104.5°", "109.5°", "180°"], correctAnswer: 2 },
      { id: 23, question: "Pi bond is formed by:", options: ["Head-on overlap", "Sideways overlap", "No overlap", "s-orbital overlap"], correctAnswer: 1 },
      { id: 24, question: "Sigma bond is formed by:", options: ["Sideways overlap", "Head-on overlap", "No overlap", "p-orbital overlap"], correctAnswer: 1 },
      { id: 25, question: "Triple bond consists of:", options: ["3 sigma bonds", "3 pi bonds", "1 sigma + 2 pi", "2 sigma + 1 pi"], correctAnswer: 2 }
    ]
  },
  {
    id: "chem-5",
    name: "States of Matter",
    description: "Boyle's law, Charles's law, gases",
    icon: "🌡️",
    mcqs: [
      { id: 1, question: "Absolute zero temperature is:", options: ["-100°C", "-200°C", "-273°C", "0°C"], correctAnswer: 2 },
      { id: 2, question: "Fourth state of matter is:", options: ["Gas", "Liquid", "Solid", "Plasma"], correctAnswer: 3 },
      { id: 3, question: "Maximum density of water occurs at:", options: ["0°C", "2°C", "4°C", "10°C"], correctAnswer: 2 },
      { id: 4, question: "Boyle's law states P is:", options: ["Directly proportional to V", "Inversely proportional to V", "Equal to V", "Independent of V"], correctAnswer: 1 },
      { id: 5, question: "Charles's law states V is:", options: ["Inversely proportional to T", "Directly proportional to T", "Equal to T", "Independent of T"], correctAnswer: 1 },
      { id: 6, question: "1 atm equals:", options: ["101325 Pa", "100000 Pa", "1000 Pa", "10 Pa"], correctAnswer: 0 },
      { id: 7, question: "Boiling point of water is:", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: 1 },
      { id: 8, question: "Boiling point of alcohol is:", options: ["68°C", "78°C", "88°C", "98°C"], correctAnswer: 1 },
      { id: 9, question: "Solid has:", options: ["Fixed shape only", "Fixed volume only", "Fixed shape and volume", "No fixed shape"], correctAnswer: 2 },
      { id: 10, question: "Liquid has:", options: ["Fixed shape and volume", "Fixed volume only", "Fixed shape only", "No fixed properties"], correctAnswer: 1 },
      { id: 11, question: "Gas has:", options: ["Fixed shape", "Fixed volume", "Neither fixed", "Both fixed"], correctAnswer: 2 },
      { id: 12, question: "Absolute zero in Kelvin is:", options: ["0 K", "273 K", "-273 K", "100 K"], correctAnswer: 0 },
      { id: 13, question: "Boyle's law formula is:", options: ["P₁V₁=P₂V₂", "P₁/V₁=P₂/V₂", "P₁+V₁=P₂+V₂", "P₁-V₁=P₂-V₂"], correctAnswer: 0 },
      { id: 14, question: "Charles's law formula is:", options: ["V₁T₁=V₂T₂", "V₁/T₁=V₂/T₂", "V₁+T₁=V₂+T₂", "V₁-T₁=V₂-T₂"], correctAnswer: 1 },
      { id: 15, question: "Pressure is measured in:", options: ["Joules", "Pascal", "Newton", "Meter"], correctAnswer: 1 },
      { id: 16, question: "Temperature is measured in:", options: ["Pascal", "Kelvin", "Newton", "Joule"], correctAnswer: 1 },
      { id: 17, question: "Evaporation causes:", options: ["Heating", "Cooling", "No effect", "Condensation"], correctAnswer: 1 },
      { id: 18, question: "Sublimation is conversion from:", options: ["Solid to liquid", "Liquid to gas", "Solid to gas", "Gas to liquid"], correctAnswer: 2 },
      { id: 19, question: "Example of sublimation:", options: ["Ice melting", "Water boiling", "Dry ice", "Rain"], correctAnswer: 2 },
      { id: 20, question: "Condensation is:", options: ["Gas to liquid", "Liquid to gas", "Solid to liquid", "Liquid to solid"], correctAnswer: 0 },
      { id: 21, question: "Freezing point of water is:", options: ["-10°C", "0°C", "10°C", "100°C"], correctAnswer: 1 },
      { id: 22, question: "Triple point of water is:", options: ["0°C", "0.01°C", "100°C", "273°C"], correctAnswer: 1 },
      { id: 23, question: "Diffusion is fastest in:", options: ["Solids", "Liquids", "Gases", "Plasma"], correctAnswer: 2 },
      { id: 24, question: "Brownian motion is observed in:", options: ["Solids", "Gases and liquids", "Only gases", "Only liquids"], correctAnswer: 1 },
      { id: 25, question: "Real gases deviate from ideal at:", options: ["High T, low P", "Low T, high P", "Any condition", "Never"], correctAnswer: 1 }
    ]
  },
  {
    id: "chem-6",
    name: "Solutions",
    description: "Types of solutions, molarity, concentration",
    icon: "🧪",
    mcqs: [
      { id: 1, question: "Brass is an example of:", options: ["Liquid in liquid", "Solid in liquid", "Solid in solid", "Gas in solid"], correctAnswer: 2 },
      { id: 2, question: "Smoke is:", options: ["Gas in liquid", "Solid in gas", "Liquid in gas", "Gas in solid"], correctAnswer: 1 },
      { id: 3, question: "Tyndall effect is shown by:", options: ["True solution", "Suspension", "Colloid", "Compound"], correctAnswer: 2 },
      { id: 4, question: "Brownian movement is seen in:", options: ["True solution", "Colloid", "Suspension", "Pure substance"], correctAnswer: 1 },
      { id: 5, question: "Example of true solution:", options: ["Milk", "Blood", "Sugar in water", "Fog"], correctAnswer: 2 },
      { id: 6, question: "Particle size in colloid is:", options: ["< 1 nm", "1-100 nm", "100-1000 nm", "> 1000 nm"], correctAnswer: 1 },
      { id: 7, question: "Molarity formula is:", options: ["Moles/Volume(L)", "Moles×Volume", "Mass/Volume", "Mass×Volume"], correctAnswer: 0 },
      { id: 8, question: "1 M solution means:", options: ["1 mole per liter", "1 gram per liter", "1 mole per mL", "1 mg per L"], correctAnswer: 0 },
      { id: 9, question: "Universal solvent is:", options: ["Alcohol", "Benzene", "Water", "Kerosene"], correctAnswer: 2 },
      { id: 10, question: "Saturated solution contains:", options: ["Minimum solute", "Maximum solute at given temp", "No solute", "Infinite solute"], correctAnswer: 1 },
      { id: 11, question: "Fog is example of:", options: ["Gas in gas", "Liquid in gas", "Solid in gas", "Gas in liquid"], correctAnswer: 1 },
      { id: 12, question: "Alloy is:", options: ["Liquid solution", "Gaseous solution", "Solid solution", "Colloidal solution"], correctAnswer: 2 },
      { id: 13, question: "Air is:", options: ["Liquid in gas", "Gas in gas", "Solid in gas", "Suspension"], correctAnswer: 1 },
      { id: 14, question: "Concentration increases when:", options: ["Solute decreases", "Solvent increases", "Solute increases", "Both increase equally"], correctAnswer: 2 },
      { id: 15, question: "Dilution means:", options: ["Adding solute", "Adding solvent", "Removing solvent", "Heating"], correctAnswer: 1 },
      { id: 16, question: "Supersaturated solution is:", options: ["Less than saturated", "More than saturated", "Equal to saturated", "Unstable"], correctAnswer: 1 },
      { id: 17, question: "Blood is example of:", options: ["True solution", "Suspension", "Colloid", "Pure substance"], correctAnswer: 2 },
      { id: 18, question: "Milk is:", options: ["True solution", "Colloid", "Suspension", "Element"], correctAnswer: 1 },
      { id: 19, question: "Emulsion is:", options: ["Liquid in liquid", "Solid in liquid", "Gas in liquid", "Solid in solid"], correctAnswer: 0 },
      { id: 20, question: "Gel is:", options: ["Liquid in solid", "Solid in liquid", "Gas in solid", "Liquid in liquid"], correctAnswer: 0 },
      { id: 21, question: "Aerosol is:", options: ["Solid in gas", "Liquid in gas", "Either A or B", "None"], correctAnswer: 2 },
      { id: 22, question: "Solubility depends on:", options: ["Temperature only", "Nature of solute only", "Both A and B", "Neither"], correctAnswer: 2 },
      { id: 23, question: "ppm stands for:", options: ["Parts per million", "Percentage per mole", "Pressure per mole", "None"], correctAnswer: 0 },
      { id: 24, question: "Normality is related to:", options: ["Gram equivalents", "Moles", "Mass", "Volume only"], correctAnswer: 0 },
      { id: 25, question: "Mole fraction has unit:", options: ["mol/L", "g/L", "No unit", "mol"], correctAnswer: 2 }
    ]
  },
  {
    id: "chem-7",
    name: "Acids, Bases & Salts",
    description: "pH scale, indicators, neutralization",
    icon: "🧫",
    mcqs: [
      { id: 1, question: "pH of neutral solution is:", options: ["0", "7", "14", "1"], correctAnswer: 1 },
      { id: 2, question: "pH of acidic solution is:", options: ["> 7", "< 7", "= 7", "= 14"], correctAnswer: 1 },
      { id: 3, question: "pH of basic solution is:", options: ["> 7", "< 7", "= 7", "= 0"], correctAnswer: 0 },
      { id: 4, question: "Litmus paper turns red in:", options: ["Base", "Acid", "Neutral", "Salt"], correctAnswer: 1 },
      { id: 5, question: "Litmus paper turns blue in:", options: ["Acid", "Base", "Neutral", "Salt"], correctAnswer: 1 },
      { id: 6, question: "Acid + Base gives:", options: ["Acid", "Base", "Salt + Water", "Only salt"], correctAnswer: 2 },
      { id: 7, question: "Strong acid example:", options: ["CH₃COOH", "H₂CO₃", "HCl", "H₂S"], correctAnswer: 2 },
      { id: 8, question: "Strong base example:", options: ["NH₄OH", "NaOH", "Al(OH)₃", "Mg(OH)₂"], correctAnswer: 1 },
      { id: 9, question: "Weak acid example:", options: ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"], correctAnswer: 3 },
      { id: 10, question: "Phenolphthalein is colorless in:", options: ["Base", "Acid", "Salt solution", "Sugar solution"], correctAnswer: 1 },
      { id: 11, question: "Phenolphthalein is pink in:", options: ["Acid", "Base", "Neutral", "All"], correctAnswer: 1 },
      { id: 12, question: "Arrhenius acid gives:", options: ["OH⁻", "H⁺", "CO₂", "O₂"], correctAnswer: 1 },
      { id: 13, question: "Arrhenius base gives:", options: ["H⁺", "OH⁻", "H₂", "O₂"], correctAnswer: 1 },
      { id: 14, question: "pH range is:", options: ["0-7", "7-14", "0-14", "1-13"], correctAnswer: 2 },
      { id: 15, question: "Antacid is used for:", options: ["Headache", "Acidity", "Fever", "Cold"], correctAnswer: 1 },
      { id: 16, question: "Acids taste:", options: ["Sweet", "Bitter", "Sour", "Salty"], correctAnswer: 2 },
      { id: 17, question: "Bases taste:", options: ["Sour", "Bitter", "Sweet", "Salty"], correctAnswer: 1 },
      { id: 18, question: "Acid rain pH is:", options: ["> 7", "= 7", "< 5.6", "> 10"], correctAnswer: 2 },
      { id: 19, question: "Normal rain pH is:", options: ["7", "5.6", "8", "4"], correctAnswer: 1 },
      { id: 20, question: "Buffer solution maintains:", options: ["Temperature", "pH", "Pressure", "Volume"], correctAnswer: 1 },
      { id: 21, question: "Blood pH is:", options: ["6.4", "7.4", "8.4", "9.4"], correctAnswer: 1 },
      { id: 22, question: "Gastric juice contains:", options: ["NaOH", "HCl", "H₂SO₄", "HNO₃"], correctAnswer: 1 },
      { id: 23, question: "Bee sting contains:", options: ["Acid", "Base", "Neutral", "Salt"], correctAnswer: 0 },
      { id: 24, question: "Wasp sting contains:", options: ["Acid", "Base", "Neutral", "Salt"], correctAnswer: 1 },
      { id: 25, question: "Sodium bicarbonate is:", options: ["Acidic salt", "Basic salt", "Neutral salt", "Double salt"], correctAnswer: 1 }
    ]
  },
  {
    id: "chem-8",
    name: "Electrochemistry",
    description: "Electrolysis, electrodes, cells",
    icon: "🔋",
    mcqs: [
      { id: 1, question: "Anode is:", options: ["Negative electrode", "Positive electrode", "Neutral", "Variable"], correctAnswer: 1 },
      { id: 2, question: "Cathode is:", options: ["Positive electrode", "Negative electrode", "Neutral", "Variable"], correctAnswer: 1 },
      { id: 3, question: "Oxidation occurs at:", options: ["Cathode", "Anode", "Both", "Neither"], correctAnswer: 1 },
      { id: 4, question: "Reduction occurs at:", options: ["Anode", "Cathode", "Both", "Neither"], correctAnswer: 1 },
      { id: 5, question: "In electrolysis, cations move to:", options: ["Anode", "Cathode", "Both", "Neither"], correctAnswer: 1 },
      { id: 6, question: "In electrolysis, anions move to:", options: ["Cathode", "Anode", "Both", "Neither"], correctAnswer: 1 },
      { id: 7, question: "Electroplating uses:", options: ["Chemical reaction", "Electrolysis", "Heat", "Pressure"], correctAnswer: 1 },
      { id: 8, question: "In battery, chemical energy converts to:", options: ["Light", "Heat", "Electrical", "Sound"], correctAnswer: 2 },
      { id: 9, question: "Primary cell is:", options: ["Rechargeable", "Non-rechargeable", "Fuel cell", "Solar cell"], correctAnswer: 1 },
      { id: 10, question: "Secondary cell is:", options: ["Non-rechargeable", "Rechargeable", "Disposable", "Fuel cell"], correctAnswer: 1 },
      { id: 11, question: "Example of primary cell:", options: ["Lead acid battery", "Dry cell", "Nickel-cadmium", "Lithium-ion"], correctAnswer: 1 },
      { id: 12, question: "Example of secondary cell:", options: ["Dry cell", "Lead acid battery", "Zinc-carbon", "Alkaline cell"], correctAnswer: 1 },
      { id: 13, question: "Car battery is:", options: ["Primary cell", "Secondary cell", "Fuel cell", "Solar cell"], correctAnswer: 1 },
      { id: 14, question: "Faraday's law is about:", options: ["Magnetism", "Electrolysis", "Light", "Sound"], correctAnswer: 1 },
      { id: 15, question: "Electrolyte is:", options: ["Non-conductor", "Conductor in solid", "Conductor in solution", "Insulator"], correctAnswer: 2 },
      { id: 16, question: "Strong electrolyte example:", options: ["Sugar solution", "NaCl solution", "Alcohol", "Pure water"], correctAnswer: 1 },
      { id: 17, question: "Weak electrolyte example:", options: ["HCl", "H₂SO₄", "CH₃COOH", "NaOH"], correctAnswer: 2 },
      { id: 18, question: "Corrosion is:", options: ["Oxidation", "Reduction", "Both", "Neither"], correctAnswer: 0 },
      { id: 19, question: "Galvanic cell converts:", options: ["Electrical to chemical", "Chemical to electrical", "Heat to electrical", "Light to electrical"], correctAnswer: 1 },
      { id: 20, question: "Electrolytic cell converts:", options: ["Chemical to electrical", "Electrical to chemical", "Heat to light", "Sound to electrical"], correctAnswer: 1 },
      { id: 21, question: "Standard hydrogen electrode potential is:", options: ["1 V", "0 V", "-1 V", "0.5 V"], correctAnswer: 1 },
      { id: 22, question: "Rusting needs:", options: ["Only oxygen", "Only water", "Oxygen and water", "Neither"], correctAnswer: 2 },
      { id: 23, question: "Prevention of rusting:", options: ["Painting", "Galvanizing", "Electroplating", "All of these"], correctAnswer: 3 },
      { id: 24, question: "Galvanizing uses:", options: ["Copper coating", "Zinc coating", "Silver coating", "Gold coating"], correctAnswer: 1 },
      { id: 25, question: "In electrolysis of water, H₂ is produced at:", options: ["Anode", "Cathode", "Both", "Neither"], correctAnswer: 1 }
    ]
  },
  {
    id: "chem-9",
    name: "Organic Chemistry",
    description: "Hydrocarbons, functional groups",
    icon: "🛢️",
    mcqs: [
      { id: 1, question: "Simplest alkane is:", options: ["Ethane", "Propane", "Methane", "Butane"], correctAnswer: 2 },
      { id: 2, question: "General formula of alkanes:", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: 1 },
      { id: 3, question: "General formula of alkenes:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: 1 },
      { id: 4, question: "General formula of alkynes:", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: 2 },
      { id: 5, question: "Alkanes are:", options: ["Unsaturated", "Saturated", "Aromatic", "Cyclic only"], correctAnswer: 1 },
      { id: 6, question: "Alkenes are:", options: ["Saturated", "Unsaturated", "Aromatic", "Ionic"], correctAnswer: 1 },
      { id: 7, question: "Functional group of alcohols:", options: ["-CHO", "-COOH", "-OH", "-CO-"], correctAnswer: 2 },
      { id: 8, question: "Functional group of aldehydes:", options: ["-OH", "-CHO", "-COOH", "-CO-"], correctAnswer: 1 },
      { id: 9, question: "Functional group of ketones:", options: ["-CHO", "-OH", "-CO-", "-COOH"], correctAnswer: 2 },
      { id: 10, question: "Functional group of carboxylic acids:", options: ["-OH", "-CHO", "-CO-", "-COOH"], correctAnswer: 3 },
      { id: 11, question: "Homologous series differs by:", options: ["CH₂", "CH₃", "CH", "C₂H₂"], correctAnswer: 0 },
      { id: 12, question: "Isomers have same:", options: ["Structure", "Molecular formula", "Properties", "Boiling point"], correctAnswer: 1 },
      { id: 13, question: "IUPAC name of CH₄:", options: ["Ethane", "Methane", "Propane", "Butane"], correctAnswer: 1 },
      { id: 14, question: "IUPAC name of C₂H₆:", options: ["Methane", "Ethane", "Propane", "Butane"], correctAnswer: 1 },
      { id: 15, question: "Combustion of hydrocarbons produces:", options: ["O₂ + H₂", "CO₂ + H₂O", "CO + H₂", "CH₄ + O₂"], correctAnswer: 1 },
      { id: 16, question: "Natural gas mainly contains:", options: ["Ethane", "Propane", "Methane", "Butane"], correctAnswer: 2 },
      { id: 17, question: "LPG mainly contains:", options: ["Methane", "Propane + Butane", "Ethane", "Pentane"], correctAnswer: 1 },
      { id: 18, question: "Benzene formula is:", options: ["C₆H₆", "C₆H₁₂", "C₆H₁₄", "C₆H₁₀"], correctAnswer: 0 },
      { id: 19, question: "Benzene is:", options: ["Aliphatic", "Aromatic", "Alicyclic", "None"], correctAnswer: 1 },
      { id: 20, question: "Catenation is property of:", options: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"], correctAnswer: 1 },
      { id: 21, question: "Tetravalency of carbon means:", options: ["4 bonds", "2 bonds", "3 bonds", "1 bond"], correctAnswer: 0 },
      { id: 22, question: "Ethanol formula:", options: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"], correctAnswer: 1 },
      { id: 23, question: "Methanol is:", options: ["Drinking alcohol", "Poisonous", "Gaseous", "None"], correctAnswer: 1 },
      { id: 24, question: "Vinegar contains:", options: ["Citric acid", "Acetic acid", "Formic acid", "Oxalic acid"], correctAnswer: 1 },
      { id: 25, question: "Acetic acid formula:", options: ["HCOOH", "CH₃COOH", "C₂H₅COOH", "HCHO"], correctAnswer: 1 }
    ]
  },
  {
    id: "chem-10",
    name: "Environmental Chemistry",
    description: "Pollution, greenhouse effect, ozone",
    icon: "🌍",
    mcqs: [
      { id: 1, question: "Most abundant gas in atmosphere:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], correctAnswer: 1 },
      { id: 2, question: "Percentage of oxygen in atmosphere:", options: ["78%", "21%", "1%", "0.03%"], correctAnswer: 1 },
      { id: 3, question: "Percentage of nitrogen in atmosphere:", options: ["21%", "78%", "1%", "0.03%"], correctAnswer: 1 },
      { id: 4, question: "Percentage of CO₂ in atmosphere:", options: ["78%", "21%", "1%", "0.04%"], correctAnswer: 3 },
      { id: 5, question: "Ozone layer is in:", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correctAnswer: 1 },
      { id: 6, question: "CFC damages:", options: ["Ozone layer", "Water", "Soil", "Plants"], correctAnswer: 0 },
      { id: 7, question: "Global warming is due to:", options: ["O₂", "N₂", "CO₂", "H₂"], correctAnswer: 2 },
      { id: 8, question: "Acid rain is caused by:", options: ["O₂ and N₂", "SO₂ and NOₓ", "CO₂ and H₂O", "CH₄ and CO"], correctAnswer: 1 },
      { id: 9, question: "Main greenhouse gas is:", options: ["O₂", "N₂", "CO₂", "Ar"], correctAnswer: 2 },
      { id: 10, question: "Acid rain pH is:", options: ["> 7", "= 7", "< 5.6", "< 3"], correctAnswer: 2 },
      { id: 11, question: "Acid rain is caused by:", options: ["O₂ and N₂", "SO₂ and NOₓ", "CO₂ and H₂O", "CH₄ and CO"], correctAnswer: 1 },
      { id: 12, question: "Ozone formula is:", options: ["O₂", "O₃", "O", "O₄"], correctAnswer: 1 },
      { id: 13, question: "Global warming is due to:", options: ["Ozone", "Greenhouse gases", "Nitrogen", "Oxygen"], correctAnswer: 1 },
      { id: 14, question: "Gas used in chip packets:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], correctAnswer: 1 },
      { id: 15, question: "Gas used in balloons:", options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"], correctAnswer: 2 },
      { id: 16, question: "Laughing gas is:", options: ["NO", "NO₂", "N₂O", "N₂O₄"], correctAnswer: 2 },
      { id: 17, question: "Dry ice is solid:", options: ["H₂O", "CO₂", "N₂", "O₂"], correctAnswer: 1 },
      { id: 18, question: "CFC stands for:", options: ["Carbon fluoride compound", "Chlorofluorocarbon", "Calcium fluoride carbon", "None"], correctAnswer: 1 },
      { id: 19, question: "Ozone protects from:", options: ["Infrared rays", "UV rays", "X-rays", "Gamma rays"], correctAnswer: 1 },
      { id: 20, question: "Smog is mixture of:", options: ["Smoke + Fog", "Steam + Fog", "Snow + Fog", "Sun + Fog"], correctAnswer: 0 },
      { id: 21, question: "Air pollution causes:", options: ["Better health", "Respiratory diseases", "Stronger immunity", "None"], correctAnswer: 1 },
      { id: 22, question: "Water vapor in atmosphere causes:", options: ["Smog", "Humidity", "Acid rain", "Ozone hole"], correctAnswer: 1 },
      { id: 23, question: "Carbon monoxide is:", options: ["Colorless", "Yellow", "Green", "Blue"], correctAnswer: 0 },
      { id: 24, question: "Carbon monoxide is:", options: ["Non-toxic", "Toxic", "Beneficial", "Nutritious"], correctAnswer: 1 },
      { id: 25, question: "Incomplete combustion produces:", options: ["CO₂", "CO", "H₂O", "O₂"], correctAnswer: 1 }
    ]
  }
];

// Tough Section MCQs - Separate from regular chapters
export const chemistryToughMCQs: MCQ[] = [
  { 
    id: 1, 
    question: "A chemical reaction involves:", 
    options: ["Only breaking of bonds", "Only formation of bonds", "Both breaking and formation of bonds", "No change in bonds"], 
    correctAnswer: 2,
    explanation: "Chemical reactions require energy to break existing bonds in reactants and release energy when new bonds form in products. This dual process is fundamental to all chemical transformations."
  },
  { 
    id: 2, 
    question: "A balanced chemical equation always obeys:", 
    options: ["Law of conservation of mass", "Law of thermodynamics", "Law of definite proportions", "Avogadro's law"], 
    correctAnswer: 0,
    explanation: "Matter cannot be created or destroyed in a chemical reaction. The mass of reactants must equal the mass of products, which is why we balance equations."
  },
  { 
    id: 3, 
    question: "Single displacement reaction involves:", 
    options: ["Oxidation only", "Reduction only", "Redox", "Decomposition"], 
    correctAnswer: 2,
    explanation: "Single displacement is inherently a redox process where a more active element displaces a less active one, involving electron transfer. Example: Zn + CuSO₄ → ZnSO₄ + Cu"
  },
  { 
    id: 4, 
    question: "Sting of ants and bees contains:", 
    options: ["Formic acid", "Acetic acid", "Citric acid", "Oxalic acid"], 
    correctAnswer: 0,
    explanation: "Formic acid (HCOOH/Methanoic acid) is the irritant found in ant and bee stings. The name 'formic' comes from Latin 'formica' meaning ant."
  },
  { 
    id: 5, 
    question: "Some stale food gives a bad taste and smell because of:", 
    options: ["Corrosion", "Combustion", "Fermentation", "Rancidity"], 
    correctAnswer: 3,
    explanation: "Rancidity is the aerial oxidation of fats and oils in food, causing foul smell and taste. This is why antioxidants are added to food to prevent rancidity."
  },
  { 
    id: 6, 
    question: "A red brown gas is released on heating lead nitrate. It is an example of:", 
    options: ["Combination reaction", "Displacement reaction", "Decomposition reaction", "Double displacement"], 
    correctAnswer: 2,
    explanation: "Lead nitrate breaks down upon heating: 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂. The brown gas is nitrogen dioxide (NO₂). This is a decomposition reaction."
  },
  { 
    id: 7, 
    question: "The sign (↓) indicates:", 
    options: ["Release of gas", "Absorption of heat", "Formation of a precipitate", "Dissolution"], 
    correctAnswer: 2,
    explanation: "In chemical equations, a downward arrow (↓) indicates a solid precipitate settling out of a solution. An upward arrow (↑) indicates gas evolution."
  },
  { 
    id: 8, 
    question: "What are the coefficients of the correctly balanced equation? Fe₂O₃ + CO → Fe + CO₂", 
    options: ["1, 2, 2, 2", "1, 3, 2, 3", "2, 3, 4, 3", "2, 6, 4, 6"], 
    correctAnswer: 1,
    explanation: "Balanced equation: 1Fe₂O₃ + 3CO → 2Fe + 3CO₂. Count atoms: Fe: 2=2 ✓, O: 3+3=6 and 6 ✓, C: 3=3 ✓"
  },
  { 
    id: 9, 
    question: "Liquids have:", 
    options: ["Definite shape and volume", "Definite shape but no definite volume", "No definite shape but definite volume", "No definite volume no definite shape"], 
    correctAnswer: 2,
    explanation: "Liquids have definite volume but take the shape of their container. Their particles are close but can move past each other."
  },
  { 
    id: 10, 
    question: "Gases have:", 
    options: ["Definite shape and volume", "Definite shape but no definite volume", "No definite shape but definite volume", "No definite volume no definite shape"], 
    correctAnswer: 3,
    explanation: "Gases expand to fill any container completely. Their particles have high kinetic energy and move freely with large spaces between them."
  },
  { 
    id: 11, 
    question: "During summer, water kept in an earthen pot becomes cool because of the phenomenon of:", 
    options: ["Condensation", "Diffusion", "Osmosis", "Evaporation"], 
    correctAnswer: 3,
    explanation: "Water seeps through the pores of the earthen pot and evaporates from the outer surface. Evaporation absorbs latent heat from the remaining water, cooling it down."
  },
  { 
    id: 12, 
    question: "Evaporation causes:", 
    options: ["Heating up", "No temperature change", "Cooling down", "Melting"], 
    correctAnswer: 2,
    explanation: "High-energy molecules escape during evaporation, lowering the average kinetic energy (temperature) of the remaining liquid. This is why sweating cools our body."
  },
  { 
    id: 13, 
    question: "A change of state directly from solid to gas without passing through liquid state is called:", 
    options: ["Evaporation", "Sublimation", "Condensation", "Fusion"], 
    correctAnswer: 1,
    explanation: "Sublimation is the direct conversion of solid to gas. Examples: dry ice (solid CO₂), naphthalene balls, iodine crystals, camphor."
  },
  { 
    id: 14, 
    question: "Proton was discovered by:", 
    options: ["J.J. Thomson", "Goldstein", "Rutherford", "Chadwick"], 
    correctAnswer: 1,
    explanation: "Eugen Goldstein discovered canal rays (positive rays) in 1886 which led to the discovery of protons. Rutherford later named them protons in 1920."
  },
  { 
    id: 15, 
    question: "Canal rays are:", 
    options: ["Negatively charged particles", "Positively charged particles", "Neutral particles", "Electromagnetic waves"], 
    correctAnswer: 1,
    explanation: "Canal rays are streams of positive ions. They were discovered by Goldstein in a modified cathode ray tube and travel in the opposite direction to cathode rays."
  },
  { 
    id: 16, 
    question: "An α-particle is:", 
    options: ["An electron", "A helium nucleus", "A proton", "A neutron"], 
    correctAnswer: 1,
    explanation: "An alpha particle (α) consists of 2 protons and 2 neutrons, making it a helium nucleus (He²⁺). It has a mass of 4 amu and charge of +2."
  },
  { 
    id: 17, 
    question: "Rutherford's gold foil experiment indicates that:", 
    options: ["The nucleus is concentrated at the centre", "Electrons are in the nucleus", "Atoms are solid spheres", "Mass is uniformly distributed"], 
    correctAnswer: 0,
    explanation: "Most α-particles passed through (proving atoms are mostly empty space), but some deflected at large angles, proving the existence of a small, dense, positive nucleus at the center."
  },
  { 
    id: 18, 
    question: "Elements X (atomic number 20) and Y (atomic number 21) have same atomic mass. They are:", 
    options: ["Isobars", "Isotopes", "Isotones", "Isomers"], 
    correctAnswer: 0,
    explanation: "Isobars have the same mass number but different atomic numbers (protons). Example: ⁴⁰₁₈Ar and ⁴⁰₂₀Ca are isobars."
  },
  { 
    id: 19, 
    question: "Protium, Deuterium and Tritium are isotopes of:", 
    options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"], 
    correctAnswer: 2,
    explanation: "These are the three isotopes of Hydrogen: Protium (¹H, no neutrons), Deuterium (²H, 1 neutron), and Tritium (³H, 2 neutrons). They have same atomic number but different mass numbers."
  },
  { 
    id: 20, 
    question: "An element has electronic configuration 2,8,3. How many valence electrons does it have?", 
    options: ["2", "8", "3", "13"], 
    correctAnswer: 2,
    explanation: "The last number in the electronic configuration represents electrons in the outermost (valence) shell. Here, 3 electrons are in the valence shell. This is Aluminium (Al)."
  },
  { 
    id: 21, 
    question: "Which particle has the maximum charge to mass ratio?", 
    options: ["Electron", "Proton", "Neutron", "Alpha particle"], 
    correctAnswer: 0,
    explanation: "Electron has the highest e/m ratio (1.76 × 10¹¹ C/kg) because it has the smallest mass (9.11 × 10⁻³¹ kg) with unit charge. e/m ratio = charge/mass."
  },
  { 
    id: 22, 
    question: "Which is a Döbereiner's triad?", 
    options: ["H, O, N", "Fe, Cu, Zn", "Li, Na, K", "C, N, O"], 
    correctAnswer: 2,
    explanation: "Li, Na, K form a Döbereiner's triad. Atomic mass of Na (23) ≈ average of Li (7) and K (39): (7+39)/2 = 23. They also have similar chemical properties."
  },
  { 
    id: 23, 
    question: "Which element still has a dicey position in modern periodic table?", 
    options: ["Helium", "Carbon", "Oxygen", "Hydrogen"], 
    correctAnswer: 3,
    explanation: "Hydrogen can be placed in Group 1 (like alkali metals, loses 1 electron) or Group 17 (like halogens, gains 1 electron). It has unique properties of both groups."
  },
  { 
    id: 24, 
    question: "Coefficients for: BaCl₂ + Al₂(SO₄)₃ → BaSO₄ + AlCl₃", 
    options: ["1, 1, 1, 1", "2, 1, 2, 2", "3, 1, 3, 2", "3, 2, 3, 4"], 
    correctAnswer: 2,
    explanation: "Balanced equation: 3BaCl₂ + 1Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃. Check: Ba: 3=3 ✓, Cl: 6=6 ✓, Al: 2=2 ✓, S: 3=3 ✓, O: 12=12 ✓"
  }
];

// 2025 Test Center Experience Based Chemistry Questions
export const chemistryExperienceMCQs: MCQ[] = [
  { id: 1, question: "Chemical formula of sand (silica) is:", options: ["SiO", "SiO₂", "SO₂", "Si₂O"], correctAnswer: 1, isExperienceBased: true },
  { id: 2, question: "Formula of rust is:", options: ["FeO", "Fe₂O₃", "Fe₂O₃·nH₂O", "Fe₃O₄"], correctAnswer: 2, isExperienceBased: true },
  { id: 3, question: "Heavy water is represented by:", options: ["H₂O", "D₂O", "HDO", "T₂O"], correctAnswer: 1, isExperienceBased: true },
  { id: 4, question: "Lightest metal is:", options: ["Sodium", "Lithium", "Potassium", "Magnesium"], correctAnswer: 1, isExperienceBased: true },
  { id: 5, question: "Liquid metal at room temperature is:", options: ["Iron", "Bromine", "Mercury", "Silver"], correctAnswer: 2, isExperienceBased: true },
  { id: 6, question: "Best conductor of electricity is:", options: ["Copper", "Gold", "Silver", "Aluminum"], correctAnswer: 2, isExperienceBased: true },
  { id: 7, question: "Hardest natural substance is:", options: ["Graphite", "Quartz", "Diamond", "Steel"], correctAnswer: 2, isExperienceBased: true },
  { id: 8, question: "Isotopes have same:", options: ["Mass number", "Neutrons", "Atomic number", "Atomic mass"], correctAnswer: 2, isExperienceBased: true },
  { id: 9, question: "Carbon-14 is used for:", options: ["Cancer treatment", "Power generation", "Carbon dating", "Fertilizers"], correctAnswer: 2, isExperienceBased: true },
  { id: 10, question: "Iodine-131 is used in treatment of:", options: ["Cancer", "Goiter", "Anemia", "Diabetes"], correctAnswer: 1, isExperienceBased: true },
  { id: 11, question: "Chalcopyrite formula is:", options: ["Cu₂S", "CuS", "CuFeS₂", "FeS₂"], correctAnswer: 2, isExperienceBased: true },
  { id: 12, question: "Copper glance formula is:", options: ["CuS", "Cu₂S", "CuFeS₂", "CuO"], correctAnswer: 1, isExperienceBased: true },
  { id: 13, question: "Gypsum formula is:", options: ["CaSO₄", "CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃"], correctAnswer: 1, isExperienceBased: true },
  { id: 14, question: "Plaster of Paris formula is:", options: ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaSO₄", "CaCO₃"], correctAnswer: 1, isExperienceBased: true },
  { id: 15, question: "Densest metal is:", options: ["Gold", "Lead", "Osmium", "Platinum"], correctAnswer: 2, isExperienceBased: true },
  { id: 16, question: "CO and CO2 oxygen ratio?", options: ["1:1", "1:2", "2:1", "2:3"], correctAnswer: 1, isExperienceBased: true },
  { id: 17, question: "Fossil fuels contain?", options: ["Nitrogen", "Carbon", "Oxygen", "Hydrogen"], correctAnswer: 1, isExperienceBased: true },
  { id: 18, question: "Atomic number of Oxygen?", options: ["6", "7", "8", "9"], correctAnswer: 2, isExperienceBased: true },
  { id: 19, question: "Mixture of solute and solvent is called?", options: ["Compound", "Element", "Solution", "Mixture"], correctAnswer: 2, isExperienceBased: true },
  { id: 20, question: "Acids and Bases react to form?", options: ["Water", "Salt", "Salt and Water", "Gas"], correctAnswer: 2, isExperienceBased: true },
  { id: 21, question: "Proton was discovered by?", options: ["Chadwick", "Rutherford", "Thomson", "Bohr"], correctAnswer: 1, isExperienceBased: true },
  { id: 22, question: "Neutron was discovered by?", options: ["Rutherford", "Thomson", "Chadwick", "Bohr"], correctAnswer: 2, isExperienceBased: true },
  { id: 23, question: "Cell wall is present in?", options: ["Animals only", "Plants only", "Plants and Bacteria", "All cells"], correctAnswer: 2, isExperienceBased: true },
  { id: 24, question: "Plants make their food by process of?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correctAnswer: 1, isExperienceBased: true },
  { id: 25, question: "Plants make their food in?", options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"], correctAnswer: 2, isExperienceBased: true },
  { id: 26, question: "Prokaryotes are examples of?", options: ["Viruses", "Bacteria", "Fungi", "Plants"], correctAnswer: 1, isExperienceBased: true },
  { id: 27, question: "Formula of Sulfuric Acid?", options: ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"], correctAnswer: 2, isExperienceBased: true },
  { id: 28, question: "King of chemicals is?", options: ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"], correctAnswer: 2, isExperienceBased: true },
  { id: 29, question: "Chemical formula of water?", options: ["H2O", "CO2", "O2", "H2O2"], correctAnswer: 0, isExperienceBased: true },
  { id: 30, question: "Boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: 1, isExperienceBased: true },
  { id: 31, question: "M shell has how many subshells?", options: ["1", "2", "3", "4"], correctAnswer: 2, isExperienceBased: true },
  { id: 32, question: "Magnesium is an example of?", options: ["Alkali metal", "Alkaline earth metal", "Transition metal", "Halogen"], correctAnswer: 1, isExperienceBased: true },
  { id: 33, question: "18g of water contains how many moles?", options: ["0.5 mole", "1 mole", "2 moles", "18 moles"], correctAnswer: 1, isExperienceBased: true },
  { id: 34, question: "Hess's Law is based on?", options: ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of charge"], correctAnswer: 1, isExperienceBased: true },
  { id: 35, question: "When forward and reverse rates are equal, it is called?", options: ["Complete reaction", "Chemical equilibrium", "Reversible reaction", "Irreversible reaction"], correctAnswer: 1, isExperienceBased: true },
  { id: 36, question: "Atoms in 2 moles of Ca?", options: ["6.02×10²³", "12.04×10²³", "3.01×10²³", "18.06×10²³"], correctAnswer: 1, isExperienceBased: true },
  { id: 37, question: "General formula of Alkenes?", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: 1, isExperienceBased: true },
  { id: 38, question: "Type of bond in Alkene?", options: ["Single bond", "Double bond", "Triple bond", "Ionic bond"], correctAnswer: 1, isExperienceBased: true },
  { id: 39, question: "Blood is red due to?", options: ["Plasma", "Hemoglobin", "White blood cells", "Platelets"], correctAnswer: 1, isExperienceBased: true },
  { id: 40, question: "Largest part of brain?", options: ["Cerebellum", "Medulla", "Cerebrum", "Pons"], correctAnswer: 2, isExperienceBased: true },
  { id: 41, question: "Unit of heredity is?", options: ["Cell", "Chromosome", "Gene", "DNA"], correctAnswer: 2, isExperienceBased: true },
  { id: 42, question: "Electron was discovered by?", options: ["Rutherford", "Chadwick", "Goldstein", "J.J. Thomson"], correctAnswer: 3, isExperienceBased: true },
  { id: 43, question: "Oxygen in atmosphere is approximately?", options: ["15%", "21%", "30%", "78%"], correctAnswer: 1, isExperienceBased: true }
];
