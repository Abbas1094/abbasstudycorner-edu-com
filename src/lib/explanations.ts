// Smart explanation generator for MCQs
// Provides specific, accurate explanations based on question content

export const generateSmartExplanation = (question: string, correctOption: string, options: string[]): string => {
  const q = question.toLowerCase();
  const answer = correctOption;

  // PHYSICS EXPLANATIONS
  if (q.includes('unit vector') || q.includes('i × j') || q.includes('cross product')) {
    return `Using right-hand rule for cross product: i × j = k. Point fingers in direction of first vector (i), curl towards second vector (j), thumb points to result (k).`;
  }
  if (q.includes('centripetal force')) {
    return `Centripetal Force F = mv²/r. This force is needed to keep an object moving in a circular path, directed toward the center.`;
  }
  if (q.includes('work done by centripetal')) {
    return `Work = Force × displacement × cos(θ). Centripetal force is perpendicular to velocity (θ = 90°), so cos(90°) = 0. Hence work done is ZERO.`;
  }
  if (q.includes('rocket') && q.includes('law')) {
    return `Rocket propulsion works on Newton's Third Law: Hot gases expelled downward (action), rocket moves upward (equal and opposite reaction).`;
  }
  if (q.includes('linear') && q.includes('angular') && q.includes('acceleration')) {
    return `Linear acceleration a = rα, where r = radius, α = angular acceleration. Linear acceleration is tangential component in circular motion.`;
  }
  if (q.includes('dimension') && (q.includes('force') || q.includes('newton'))) {
    return `Force = mass × acceleration. Dimension: [M][LT⁻²] = [MLT⁻²]. This comes from F = ma.`;
  }
  if (q.includes('dimension') && q.includes('velocity')) {
    return `Velocity = displacement/time. Dimension: [L]/[T] = [LT⁻¹].`;
  }
  if (q.includes('dimension') && q.includes('acceleration')) {
    return `Acceleration = velocity/time. Dimension: [LT⁻¹]/[T] = [LT⁻²].`;
  }
  if (q.includes('speed') && q.includes('formula')) {
    return `Speed = Distance / Time. It's a scalar quantity (magnitude only, no direction).`;
  }
  if (q.includes('velocity') && q.includes('formula')) {
    return `Velocity = Displacement / Time. It's a vector quantity (has both magnitude and direction).`;
  }
  if (q.includes('ohm') || q.includes('v = ir')) {
    return `Ohm's Law: V = IR. Voltage equals Current times Resistance. It describes the linear relationship in conductors.`;
  }
  if (q.includes('inertia')) {
    return `Newton's First Law (Law of Inertia): An object at rest stays at rest, and an object in motion stays in motion with same velocity, unless acted upon by an external force.`;
  }
  if (q.includes('nanometer')) {
    return `1 Nanometer = 10⁻⁹ meters. Prefix 'nano' means billionth (10⁻⁹).`;
  }
  if (q.includes('rheostat') || q.includes('potential divider')) {
    return `A rheostat/potential divider is a variable resistor used to control current or divide voltage in a circuit by varying resistance.`;
  }
  if (q.includes('calorimeter')) {
    return `A calorimeter measures heat energy in chemical reactions or physical changes. It uses Q = mcΔT principle.`;
  }
  if (q.includes('freezing point') && q.includes('kelvin')) {
    return `Freezing point of water = 0°C = 273K. Converting: K = °C + 273.`;
  }
  if (q.includes('boiling point') && q.includes('kelvin')) {
    return `Boiling point of water = 100°C = 373K. Converting: K = °C + 273 = 100 + 273 = 373K.`;
  }
  if (q.includes('moment of inertia')) {
    return `Moment of inertia depends on mass AND distribution of mass from axis of rotation. I = Σmr². Shape matters because it affects how mass is distributed.`;
  }
  if (q.includes('concave lens') || q.includes('diverging lens')) {
    return `Concave lens is thinner in middle, spreads light rays apart (diverges them). Used to correct nearsightedness (myopia).`;
  }
  if (q.includes('diopter') || q.includes('power of lens')) {
    return `Power of lens (P) = 1/focal length (in meters). Unit is Diopter (D). A 1D lens has focal length of 1m.`;
  }
  if (q.includes('kinetic energy') && q.includes('unit')) {
    return `Kinetic Energy = ½mv². Unit is Joule (J) = kg·m²/s². Energy is always measured in Joules.`;
  }
  if (q.includes('weight') && q.includes('unit')) {
    return `Weight = mg (mass × gravitational acceleration). Since it's a force, unit is Newton (N), not kg.`;
  }
  if (q.includes('resistance') && q.includes('unit')) {
    return `Resistance unit is Ohm (Ω). From Ohm's law: R = V/I. 1 Ohm = 1 Volt per Ampere.`;
  }
  if (q.includes('sublimation')) {
    return `Sublimation is direct conversion from solid to gas without passing through liquid state. Example: dry ice (solid CO₂), camphor, naphthalene.`;
  }
  if (q.includes('liter') && q.includes('cubic')) {
    return `1 Liter = 1000 cm³ = 1000 mL. Also, 1 Liter = 1 dm³ (cubic decimeter).`;
  }
  if (q.includes('mercury') && q.includes('thermometer')) {
    return `Mercury has uniform thermal expansion - expands equally for equal temperature changes. Also visible (silver), doesn't stick to glass, and has wide liquid range.`;
  }
  if (q.includes('capacitor') && q.includes('energy')) {
    return `A capacitor stores energy in its electric field. Energy = ½CV². Used in flash cameras, power supplies, etc.`;
  }
  if (q.includes('derived quantity')) {
    return `Derived quantities are obtained by combining base quantities. Plane angle (radian) is derived from length/length = dimensionless.`;
  }
  if (q.includes('kerosene') || q.includes('jet fuel') || q.includes('aeroplane')) {
    return `Aeroplanes use Aviation Turbine Fuel (ATF) which is a type of kerosene. It has high energy density and low freezing point for high altitudes.`;
  }

  // CHEMISTRY EXPLANATIONS
  if (q.includes('sand') || q.includes('silica')) {
    return `Sand (silica) = SiO₂. Silicon is bonded to 2 oxygen atoms. It's the main component of glass and quartz.`;
  }
  if (q.includes('rust')) {
    return `Rust = Fe₂O₃·nH₂O (hydrated iron oxide). The 'n' indicates variable water content. Forms when iron reacts with oxygen and water.`;
  }
  if (q.includes('heavy water')) {
    return `Heavy water = D₂O where D = Deuterium (hydrogen isotope with 1 neutron). Used in nuclear reactors as moderator.`;
  }
  if (q.includes('lightest metal')) {
    return `Lithium (Li) is the lightest metal with atomic number 3. Density = 0.534 g/cm³. It even floats on water!`;
  }
  if (q.includes('liquid metal') && q.includes('room temperature')) {
    return `Mercury (Hg) is the only metal liquid at room temperature (melting point -39°C). Bromine is liquid but it's a non-metal.`;
  }
  if (q.includes('best conductor') && q.includes('electricity')) {
    return `Silver is the best electrical conductor (conductivity 6.3×10⁷ S/m), followed by copper, then gold. Silver is used in high-end electronics.`;
  }
  if (q.includes('hardest') && q.includes('diamond')) {
    return `Diamond is the hardest natural substance (10 on Mohs scale). Each carbon atom is bonded to 4 others in a tetrahedral structure.`;
  }
  if (q.includes('isotopes')) {
    return `Isotopes have same ATOMIC NUMBER (same protons) but different mass numbers (different neutrons). Example: C-12 and C-14.`;
  }
  if (q.includes('carbon-14') || q.includes('carbon dating')) {
    return `Carbon-14 is used for dating organic materials up to 50,000 years old. It decays at a known rate (half-life = 5,730 years).`;
  }
  if (q.includes('iodine-131') || q.includes('goiter')) {
    return `Iodine-131 is used to treat thyroid disorders including goiter. The thyroid absorbs iodine, so radioactive I-131 targets thyroid cells.`;
  }
  if (q.includes('chalcopyrite')) {
    return `Chalcopyrite = CuFeS₂. It's the most important copper ore (copper iron sulfide). Also called "copper pyrite".`;
  }
  if (q.includes('copper glance')) {
    return `Copper glance = Cu₂S (cuprous sulfide). It's a copper ore with higher copper content than chalcopyrite.`;
  }
  if (q.includes('gypsum')) {
    return `Gypsum = CaSO₄·2H₂O (calcium sulfate dihydrate). Used in making plaster of Paris, cement, and drywall.`;
  }
  if (q.includes('plaster of paris')) {
    return `Plaster of Paris = CaSO₄·½H₂O (calcium sulfate hemihydrate). Made by heating gypsum. Used for casts and molds.`;
  }
  if (q.includes('densest metal')) {
    return `Osmium is the densest metal (22.59 g/cm³), followed by Iridium. Both are platinum group metals.`;
  }
  if (q.includes('co and co2') && q.includes('oxygen')) {
    return `CO has 1 oxygen, CO₂ has 2 oxygens. Ratio of oxygen = 1:2. This demonstrates law of multiple proportions.`;
  }
  if (q.includes('fossil fuel')) {
    return `Fossil fuels (coal, oil, gas) mainly contain carbon. They're formed from ancient organic matter over millions of years.`;
  }
  if (q.includes('atomic number') && q.includes('oxygen')) {
    return `Oxygen has atomic number 8 (8 protons). Electronic configuration: 2, 6. It's the 3rd most abundant element in universe.`;
  }
  if (q.includes('solution') && q.includes('solute') && q.includes('solvent')) {
    return `A solution is a homogeneous mixture of solute (dissolved substance) and solvent (dissolving medium). Example: salt (solute) in water (solvent).`;
  }
  if (q.includes('acid') && q.includes('base') && q.includes('salt')) {
    return `Neutralization: Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. This is double displacement reaction.`;
  }
  if (q.includes('proton') && q.includes('discovered')) {
    return `Proton was discovered by Ernest Rutherford in 1919 using nitrogen bombardment experiment. Goldstein discovered canal rays (protons) earlier.`;
  }
  if (q.includes('neutron') && q.includes('discovered')) {
    return `Neutron was discovered by James Chadwick in 1932. He bombarded beryllium with alpha particles and detected neutral particles.`;
  }
  if (q.includes('electron') && q.includes('discovered')) {
    return `Electron was discovered by J.J. Thomson in 1897 using cathode ray tube experiment. He measured charge-to-mass ratio.`;
  }
  if (q.includes('cell wall')) {
    return `Cell wall is present in plants, bacteria, and fungi - NOT in animal cells. Made of cellulose (plants) or peptidoglycan (bacteria).`;
  }
  if (q.includes('photosynthesis')) {
    return `Photosynthesis: 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂. Plants convert carbon dioxide and water to glucose using sunlight.`;
  }
  if (q.includes('chloroplast')) {
    return `Chloroplast contains chlorophyll which captures light energy for photosynthesis. Food (glucose) is made here in plants.`;
  }
  if (q.includes('prokaryote') || q.includes('bacteria')) {
    return `Prokaryotes (like bacteria) lack membrane-bound nucleus and organelles. DNA is in nucleoid region. Simpler than eukaryotes.`;
  }
  if (q.includes('sulfuric acid') || q.includes('h₂so₄') || q.includes('king of chemicals')) {
    return `Sulfuric acid (H₂SO₄) is called "King of Chemicals" because it's used in more industrial processes than any other chemical.`;
  }
  if (q.includes('m shell') && q.includes('subshell')) {
    return `M shell (n=3) has 3 subshells: 3s, 3p, and 3d. Number of subshells = shell number (n).`;
  }
  if (q.includes('magnesium') && (q.includes('alkaline') || q.includes('earth'))) {
    return `Magnesium (Mg) is in Group 2 - Alkaline Earth Metals. These have 2 valence electrons and form +2 ions.`;
  }
  if (q.includes('18g') && q.includes('water') && q.includes('mole')) {
    return `Molar mass of water = 18 g/mol. So 18g water = 18/18 = 1 mole. Using formula: moles = mass/molar mass.`;
  }
  if (q.includes('hess') && q.includes('law')) {
    return `Hess's Law: Total enthalpy change is same regardless of reaction path. Based on conservation of energy - enthalpy is a state function.`;
  }
  if (q.includes('equilibrium') && (q.includes('forward') || q.includes('reverse'))) {
    return `Chemical equilibrium: Forward rate = Reverse rate. Concentrations remain constant but reactions continue (dynamic equilibrium).`;
  }
  if (q.includes('2 mole') && q.includes('atoms')) {
    return `1 mole = 6.02×10²³ particles. So 2 moles = 2 × 6.02×10²³ = 12.04×10²³ atoms.`;
  }
  if (q.includes('alkene') && q.includes('formula')) {
    return `Alkenes general formula: CₙH₂ₙ. They have C=C double bond. Example: Ethene C₂H₄.`;
  }
  if (q.includes('alkene') && q.includes('bond')) {
    return `Alkenes have C=C double bond (1 sigma + 1 pi bond). This makes them unsaturated hydrocarbons.`;
  }
  if (q.includes('hemoglobin') || (q.includes('blood') && q.includes('red'))) {
    return `Blood is red due to hemoglobin, an iron-containing protein in RBCs. Iron binds oxygen and gives red color.`;
  }
  if (q.includes('cerebrum') || (q.includes('brain') && q.includes('largest'))) {
    return `Cerebrum is the largest part of brain (85% of brain mass). Controls thinking, reasoning, memory, emotions, and voluntary movements.`;
  }
  if (q.includes('gene') || q.includes('heredity')) {
    return `Gene is the unit of heredity - a segment of DNA that codes for a specific protein/trait. Genes are passed from parents to offspring.`;
  }
  if (q.includes('oxygen') && q.includes('atmosphere') && q.includes('%')) {
    return `Earth's atmosphere: ~78% Nitrogen, ~21% Oxygen, ~1% other gases (Argon, CO₂, etc.). Oxygen is essential for respiration.`;
  }

  // MATH EXPLANATIONS
  if (q.includes('a = 2') && q.includes('b = 3') && q.includes('2a + b')) {
    return `Substitute values: 2a + b = 2(2) + 3 = 4 + 3 = 7. Simple algebraic substitution.`;
  }
  if (q.includes('table of 19') || (q.includes('19') && q.includes('38') && q.includes('57'))) {
    return `Pattern: 19, 38, 57 (adding 19 each time). Next: 57 + 19 = 76. This is 19 × 4 = 76.`;
  }
  if (q.includes('a ∩ b') || q.includes('intersection')) {
    return `A ∩ B (intersection) = elements common to BOTH sets A and B. Only elements appearing in both sets.`;
  }
  if (q.includes('a ∪ b') || q.includes('union')) {
    return `A ∪ B (union) = ALL elements from both A and B (without repetition). Combines both sets.`;
  }
  if (q.includes('subset')) {
    return `Every set is a subset of itself. Also, empty set is subset of every set. A ⊆ A is always true.`;
  }
  if (q.includes('equilateral')) {
    return `Equilateral triangle has all 3 sides equal and all angles = 60°. Isosceles has 2 equal sides, Scalene has no equal sides.`;
  }
  if (q.includes('90°') && q.includes('angle')) {
    return `90° angle is called Right angle. Acute < 90°, Obtuse > 90° but < 180°, Reflex > 180°.`;
  }
  if (q.includes('hypotenuse') && q.includes('10') && q.includes('6')) {
    return `Pythagorean theorem: a² + b² = c². So 6² + b² = 10². 36 + b² = 100. b² = 64. b = 8.`;
  }
  if (q.includes('pythagorean triple') && q.includes('3') && q.includes('4')) {
    return `3, 4, 5 is a Pythagorean triple: 3² + 4² = 9 + 16 = 25 = 5². These form a right triangle.`;
  }
  if (q.includes('two points') && q.includes('line')) {
    return `Axiom: Through any two distinct points, exactly ONE line can be drawn. This is a fundamental principle of Euclidean geometry.`;
  }
  if (q.includes('determinant') && q.includes('non-singular')) {
    return `A matrix with determinant ≠ 0 is non-singular (invertible). It has a unique inverse. |A| = 0 means singular (no inverse).`;
  }
  if (q.includes('a²') && q.includes('b²') && (q.includes('a=4') || q.includes('a = 4'))) {
    return `A² + B² = 4² + 3² = 16 + 9 = 25. This is sum of squares, NOT (A+B)².`;
  }
  if (q.includes('log₁₀') || q.includes('log 10')) {
    return `log₁₀(10) = 1 because 10¹ = 10. The log of a base to itself is always 1.`;
  }
  if (q.includes('supplementary')) {
    return `Supplementary angles add up to 180°. Complementary angles add up to 90°.`;
  }
  if (q.includes('sum of angles') && q.includes('triangle')) {
    return `Sum of interior angles of a triangle = 180°. This is a fundamental property of Euclidean geometry.`;
  }
  if (q.includes('1369') && q.includes('1369')) {
    return `1369 × 1369 = 1369² = 1874161. You can verify: 1369 = 37², so 1369² = 37⁴ = 1874161.`;
  }

  // INTELLIGENCE EXPLANATIONS
  if (q.includes('present') && q.includes('percentage') && q.includes('student')) {
    return `Percentage = (Part/Whole) × 100. Present % = (Present students/Total students) × 100.`;
  }
  if (q.includes('profit') && q.includes('percentage')) {
    return `Profit % = (Profit/Cost Price) × 100. Profit = Selling Price - Cost Price.`;
  }
  if (q.includes('direction') || q.includes('north') || q.includes('south') || q.includes('east') || q.includes('west')) {
    return `Track direction step by step: Right turn = 90° clockwise, Left turn = 90° anticlockwise. Draw a diagram to visualize.`;
  }
  if (q.includes('blood relation') || q.includes('mother') || q.includes('father') || q.includes('sister') || q.includes('brother')) {
    return `Draw family tree diagram. Identify each relationship one step at a time from the starting person.`;
  }
  if (q.includes('odd one') || q.includes('odd out')) {
    return `Find the category: 3 items belong to same group, 1 is different. Look for common property like category, type, or pattern.`;
  }
  if (q.includes('series') || q.includes('pattern') || q.includes('?')) {
    if (q.includes('1, 3, 7, 13')) {
      return `Pattern: +2, +4, +6, +8... (adding increasing even numbers). 13 + 8 = 21.`;
    }
    if (q.includes('2, 5, 11, 23')) {
      return `Pattern: Each term × 2 + 1. So 23 × 2 + 1 = 47.`;
    }
    if (q.includes('43, 53, 63')) {
      return `Pattern: +10 each time. 63 + 10 = 73.`;
    }
    return `Find the pattern: Look for addition, multiplication, squares, or combination. Calculate difference between consecutive terms.`;
  }
  if (q.includes('analogy') || (q.includes('is to') && q.includes('as'))) {
    return `Find relationship: First pair shows a pattern (opposite, part-whole, male-female, etc.). Apply same relationship to second pair.`;
  }
  if (q.includes('triple') && q.includes('profit')) {
    return `If SP = 3 × CP, Profit = SP - CP = 3CP - CP = 2CP. Profit % = (2CP/CP) × 100 = 200%.`;
  }
  if (q.includes('dozen') && q.includes('egg')) {
    return `3 dozen = 36 eggs. Profit = 360 - 288 = 72. Profit % = (72/288) × 100 = 25%.`;
  }
  if (q.includes('speed') && q.includes('km/h') && q.includes('m')) {
    return `Speed = Distance/Time. Convert: 600m in 5min = 600m in (5/60)hr = 600/(5000/60) = 7.2 km/h. Or: (600/5) × (60/1000) = 7.2.`;
  }
  if (q.includes('deviation') && q.includes('mean')) {
    return `Sum of deviations from mean is always ZERO. Σ(xᵢ - x̄) = 0. This is a mathematical property of the mean.`;
  }
  if (q.includes('perfect square') && q.includes('100') && q.includes('64')) {
    return `Pattern: 10², 8², 6², 4², 2². Decreasing even numbers squared. Next: 2² = 4.`;
  }

  // GK EXPLANATIONS  
  if (q.includes('indus water treaty')) {
    return `Indus Water Treaty (1960) was signed by President Ayub Khan for Pakistan and PM Nehru for India. It divides river waters between the two countries.`;
  }
  if (q.includes('indian national congress') && q.includes('president')) {
    return `Womesh Chandra Bonnerjee was the first President of Indian National Congress (founded 1885). He presided over the first session in Bombay.`;
  }
  if (q.includes('urdu-hindi controversy')) {
    return `Urdu-Hindi controversy occurred in 1867 in Banaras. Hindus demanded Hindi in Devanagari script replace Urdu. This divided Hindu-Muslim communities.`;
  }
  if (q.includes('national anthem') && q.includes('composed')) {
    return `Pakistan's National Anthem: Lyrics by Hafeez Jalandhari, Music composed by Ahmed G. Chagla. Adopted in 1954.`;
  }
  if (q.includes('siachen') || q.includes('longest glacier')) {
    return `Siachen Glacier (76 km) is the longest glacier in Pakistan and 2nd longest non-polar glacier in the world.`;
  }
  if (q.includes('durand line')) {
    return `Durand Line is the 2,670 km border between Pakistan and Afghanistan, established in 1893 by Sir Mortimer Durand.`;
  }
  if (q.includes('radcliffe line')) {
    return `Radcliffe Line is the border between India and Pakistan, drawn by Sir Cyril Radcliffe in 1947 during partition.`;
  }
  if (q.includes('three gorges')) {
    return `Three Gorges Dam (China) is the world's largest dam by installed capacity (22,500 MW). Built on Yangtze River.`;
  }
  if (q.includes('sunlight') && q.includes('reach') && q.includes('earth')) {
    return `Light travels at 3×10⁸ m/s. Distance Sun-Earth ≈ 150 million km. Time = Distance/Speed ≈ 8 minutes 20 seconds.`;
  }
  if (q.includes('nishan-e-haider') && q.includes('first')) {
    return `Captain Muhammad Sarwar Shaheed was the first recipient of Nishan-e-Haider (1948). He died in Kashmir operations.`;
  }
  if (q.includes('synonym') || q.includes('opposite') || q.includes('antonym')) {
    const words: Record<string, string> = {
      'distract': 'Distract means to divert attention. Synonym: Divert.',
      'large': 'Large means big in size. Opposite: Small.',
      'front': 'Front means the forward part. Opposite: Back.',
      'honest': 'Honest means truthful. Opposite: Dishonest.',
      'harsh': 'Harsh means severe/rough. Opposite: Gentle/Mild.',
      'accept': 'Accept means to receive/agree. Opposite: Reject.',
      'slow': 'Slow means not fast. Opposite: Fast/Quick.',
      'artificial': 'Artificial means man-made. Opposite: Natural.',
      'generous': 'Generous means giving freely. Opposite: Selfish/Stingy.',
    };
    for (const [word, explanation] of Object.entries(words)) {
      if (q.includes(word)) return explanation;
    }
  }

  // ISLAMIC STUDIES
  if (q.includes('surah') && q.includes('total')) {
    return `Holy Quran has 114 Surahs. First: Al-Fatiha (The Opening). Last: Al-Nas (Mankind).`;
  }
  if (q.includes('bismillah') && q.includes('quran')) {
    return `Bismillah appears 114 times in Quran: Once at start of each Surah except At-Tawba (9th), but twice in Surah An-Naml (27th).`;
  }
  if (q.includes('longest surah')) {
    return `Al-Baqarah (The Cow) is the longest Surah with 286 verses. Al-Kausar is the shortest with 3 verses.`;
  }

  // Default fallback with more specific info
  return `${answer} is correct. This is a key concept/fact commonly tested in Navy exams. Review this topic thoroughly.`;
};
