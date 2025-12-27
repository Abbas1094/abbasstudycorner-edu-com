// Smart explanation generator for MCQs
// Provides specific, accurate explanations based on question content

export const generateSmartExplanation = (question: string, correctOption: string, options: string[]): string => {
  const q = question.toLowerCase();
  const answer = correctOption;

  // PHYSICS EXPLANATIONS
  if (q.includes('unit vector') || q.includes('i × j') || q.includes('cross product')) {
    return `📐 **Cross Product Rule:**\nUsing right-hand rule:\n• Point fingers in direction of i (x-axis)\n• Curl towards j (y-axis)\n• Thumb points to result: k (z-axis)\n\n**Formula:** i × j = k, j × k = i, k × i = j`;
  }
  if (q.includes('centripetal force') && q.includes('formula')) {
    return `🔄 **Centripetal Force:**\n**Formula:** F = mv²/r\n\nWhere:\n• m = mass of object\n• v = velocity (speed)\n• r = radius of circular path\n\nThis force keeps object moving in circle, always pointing toward center.`;
  }
  if (q.includes('work done by centripetal') || (q.includes('centripetal') && q.includes('work'))) {
    return `⚡ **Work by Centripetal Force = ZERO**\n\n**Why?**\nWork = Force × displacement × cos(θ)\n\n• Centripetal force is perpendicular to velocity (θ = 90°)\n• cos(90°) = 0\n• Therefore: Work = F × d × 0 = 0\n\n**Key Point:** Force perpendicular to motion does no work.`;
  }
  if (q.includes('rocket') && q.includes('law')) {
    return `🚀 **Rocket Propulsion - Newton's 3rd Law:**\n\n**Action:** Hot gases expelled downward at high speed\n**Reaction:** Rocket moves upward (equal and opposite)\n\n**Principle:** For every action, there is an equal and opposite reaction.`;
  }
  if (q.includes('linear') && q.includes('angular') && q.includes('acceleration')) {
    return `🔄 **Linear & Angular Acceleration:**\n\n**Formula:** a = rα\n\nWhere:\n• a = linear (tangential) acceleration\n• r = radius of circular path\n• α = angular acceleration (rad/s²)\n\n**Derivation:** v = rω, differentiating both sides: dv/dt = r(dω/dt), so a = rα`;
  }
  if (q.includes('dimension') && (q.includes('force') || q.includes('newton'))) {
    return `📏 **Dimension of Force:**\n\n**From:** F = ma\n• Mass [M]\n• Acceleration [LT⁻²]\n\n**Dimension:** [M] × [LT⁻²] = [MLT⁻²]\n\n**SI Unit:** Newton (N) = kg·m/s²`;
  }
  if (q.includes('dimension') && q.includes('velocity')) {
    return `📏 **Dimension of Velocity:**\n\n**From:** Velocity = Displacement/Time\n• Displacement [L]\n• Time [T]\n\n**Dimension:** [L]/[T] = [LT⁻¹]\n\n**SI Unit:** m/s`;
  }
  if (q.includes('dimension') && q.includes('acceleration')) {
    return `📏 **Dimension of Acceleration:**\n\n**From:** Acceleration = Velocity/Time\n• Velocity [LT⁻¹]\n• Time [T]\n\n**Dimension:** [LT⁻¹]/[T] = [LT⁻²]\n\n**SI Unit:** m/s²`;
  }
  if (q.includes('speed') && q.includes('formula')) {
    return `🏃 **Speed Formula:**\n\n**Speed = Distance / Time**\n\n• Speed is a SCALAR quantity (magnitude only)\n• No direction involved\n• Always positive\n\n**Units:** m/s, km/h`;
  }
  if (q.includes('velocity') && q.includes('formula')) {
    return `🎯 **Velocity Formula:**\n\n**Velocity = Displacement / Time**\n\n• Velocity is a VECTOR quantity\n• Has both magnitude AND direction\n• Can be positive, negative, or zero\n\n**Units:** m/s, km/h (with direction)`;
  }
  if (q.includes('ohm') || q.includes('v = ir') || q.includes('v=ir')) {
    return `⚡ **Ohm's Law:**\n\n**V = IR**\n\nWhere:\n• V = Voltage (Volts)\n• I = Current (Amperes)\n• R = Resistance (Ohms)\n\n**Also:** R = V/I, I = V/R\n\n**Key Point:** Valid for ohmic conductors at constant temperature.`;
  }
  if (q.includes('inertia') && !q.includes('moment')) {
    return `🛑 **Newton's First Law (Law of Inertia):**\n\nAn object at rest stays at rest, and an object in motion stays in motion with SAME VELOCITY, unless acted upon by an external force.\n\n**Examples:**\n• Passengers jerk forward when bus stops suddenly\n• Dust flies off carpet when beaten`;
  }
  if (q.includes('nanometer') || q.includes('nano')) {
    return `📏 **Nanometer:**\n\n**1 Nanometer = 10⁻⁹ meters**\n\n• Prefix 'nano' means billionth (10⁻⁹)\n• 1 nm = 0.000000001 m\n• Used to measure atoms, molecules, wavelengths\n\n**Scale:** Human hair ≈ 80,000 nm thick`;
  }
  if (q.includes('rheostat') || q.includes('potential divider')) {
    return `🔌 **Rheostat/Potential Divider:**\n\nA variable resistor used to:\n• Control current in circuit\n• Divide voltage (potential divider)\n\n**Working:** Moving slider changes resistance length, thus changing current/voltage.\n\n**Uses:** Dimmer switches, volume controls, lab experiments.`;
  }
  if (q.includes('calorimeter')) {
    return `🌡️ **Calorimeter:**\n\nDevice to measure HEAT energy.\n\n**Principle:** Q = mcΔT\n\nWhere:\n• Q = Heat energy (Joules)\n• m = mass (kg)\n• c = specific heat capacity\n• ΔT = temperature change\n\n**Uses:** Finding specific heat, heat of reaction.`;
  }
  if (q.includes('freezing point') && q.includes('kelvin')) {
    return `🧊 **Freezing Point of Water:**\n\n**0°C = 273 K**\n\n**Conversion:** K = °C + 273\n\n**Steps:**\n• Freezing point = 0°C\n• In Kelvin = 0 + 273 = 273 K\n\n**Note:** Kelvin scale starts at absolute zero (-273°C).`;
  }
  if (q.includes('boiling point') && q.includes('kelvin')) {
    return `🔥 **Boiling Point of Water:**\n\n**100°C = 373 K**\n\n**Conversion:** K = °C + 273\n\n**Steps:**\n• Boiling point = 100°C\n• In Kelvin = 100 + 273 = 373 K`;
  }
  if (q.includes('moment of inertia')) {
    return `🔄 **Moment of Inertia:**\n\n**Formula:** I = Σmr²\n\nDepends on:\n• Mass of object\n• Distribution of mass from axis\n\n**Key Point:** Same mass, different shapes = different moment of inertia.\n\n**Example:** Ring has larger I than solid disc (mass distributed farther from center).`;
  }
  if (q.includes('concave lens') || q.includes('diverging lens')) {
    return `🔍 **Concave/Diverging Lens:**\n\n• Thinner in middle, thicker at edges\n• Spreads light rays apart (diverges)\n• Forms virtual, erect, diminished image\n\n**Uses:** Corrects nearsightedness (myopia)\n\n**Formula:** 1/f = 1/v - 1/u (f is negative)`;
  }
  if (q.includes('diopter') || q.includes('power of lens')) {
    return `👓 **Power of Lens:**\n\n**Formula:** P = 1/f\n\nWhere:\n• P = Power (Diopters, D)\n• f = Focal length (meters)\n\n**Example:** f = 0.5m → P = 1/0.5 = 2D\n\n**Note:** Convex lens = +ve power, Concave lens = -ve power`;
  }
  if ((q.includes('kinetic energy') || q.includes('ke')) && q.includes('unit')) {
    return `⚡ **Kinetic Energy Unit:**\n\n**Formula:** KE = ½mv²\n\n**Unit:** Joule (J) = kg·m²/s²\n\n**Derivation:**\n• Mass [kg] × velocity² [m²/s²]\n• = kg·m²/s² = Joule`;
  }
  if (q.includes('weight') && q.includes('unit')) {
    return `⚖️ **Weight Unit:**\n\n**Formula:** W = mg\n\n• Weight is a FORCE (not mass)\n• **Unit: Newton (N)**\n\n**Common mistake:** Weight ≠ kg\nkg is mass, Newton is weight.\n\n**On Earth:** 1 kg mass has weight ≈ 9.8 N`;
  }
  if (q.includes('resistance') && q.includes('unit')) {
    return `🔌 **Resistance Unit:**\n\n**Unit: Ohm (Ω)**\n\n**From Ohm's Law:** R = V/I\n\n**1 Ohm = 1 Volt / 1 Ampere**\n\nResistance opposes current flow in a circuit.`;
  }
  if (q.includes('sublimation')) {
    return `❄️➡️💨 **Sublimation:**\n\nDirect conversion: SOLID → GAS\n(Skips liquid state)\n\n**Examples:**\n• Dry ice (solid CO₂) → CO₂ gas\n• Camphor → vapour\n• Naphthalene balls → vapour\n• Ice in freezer slowly reduces\n\n**Reverse:** Deposition (gas → solid)`;
  }
  if (q.includes('liter') && q.includes('cubic')) {
    return `📏 **Volume Conversion:**\n\n**1 Liter = 1000 cm³ = 1000 mL**\n\nAlso:\n• 1 L = 1 dm³ (cubic decimeter)\n• 1 mL = 1 cm³\n• 1000 L = 1 m³`;
  }
  if (q.includes('mercury') && q.includes('thermometer')) {
    return `🌡️ **Mercury in Thermometer:**\n\n**Why mercury?**\n\n1. **Uniform thermal expansion** - expands equally for equal temp changes\n2. Visible (silver color)\n3. Doesn't stick to glass\n4. Wide liquid range (-39°C to 357°C)\n5. Good conductor of heat\n6. High boiling point`;
  }
  if (q.includes('capacitor') && q.includes('energy')) {
    return `⚡ **Capacitor Energy Storage:**\n\n**Formula:** E = ½CV²\n\nWhere:\n• E = Energy (Joules)\n• C = Capacitance (Farads)\n• V = Voltage (Volts)\n\nCapacitor stores energy in its ELECTRIC FIELD.\n\n**Uses:** Flash cameras, power supplies, backup power.`;
  }
  if (q.includes('derived quantity') || q.includes('plane angle')) {
    return `📐 **Derived Quantities:**\n\nObtained by combining base quantities.\n\n**Plane angle (radian):**\n• Arc length / Radius = L/L = dimensionless\n• Derived from length/length\n\n**Other examples:** Area, Volume, Velocity, Force, Energy`;
  }
  if (q.includes('kerosene') || q.includes('jet fuel') || q.includes('aeroplane') || q.includes('airplane')) {
    return `✈️ **Aeroplane Fuel:**\n\n**Aviation Turbine Fuel (ATF) / Jet Fuel**\n• A type of KEROSENE\n\n**Why kerosene?**\n• High energy density\n• Low freezing point (important at high altitudes)\n• Safe handling\n• Clean burning`;
  }

  // CHEMISTRY EXPLANATIONS
  if (q.includes('sand') || q.includes('silica')) {
    return `🏖️ **Sand (Silica):**\n\n**Formula:** SiO₂\n\nSilicon bonded to 2 oxygen atoms.\n\n**Properties:**\n• Hard, crystalline solid\n• High melting point (1710°C)\n• Main component of glass and quartz\n\n**Structure:** Tetrahedral network (giant covalent)`;
  }
  if (q.includes('rust')) {
    return `🔴 **Rust:**\n\n**Formula:** Fe₂O₃·nH₂O\n(Hydrated iron(III) oxide)\n\n**Formation:** Iron + Oxygen + Water → Rust\n\nThe 'n' indicates variable water content.\n\n**Prevention:** Painting, galvanizing, oiling, electroplating`;
  }
  if (q.includes('heavy water')) {
    return `💧 **Heavy Water:**\n\n**Formula:** D₂O\n\nWhere D = Deuterium (hydrogen with 1 neutron)\n\n**Properties:**\n• Slightly denser than normal water\n• Boiling point: 101.4°C\n• Freezing point: 3.8°C\n\n**Use:** Nuclear reactor moderator`;
  }
  if (q.includes('lightest metal')) {
    return `🪶 **Lightest Metal:**\n\n**Lithium (Li)**\n• Atomic number: 3\n• Density: 0.534 g/cm³\n• So light it floats on water!\n\n**Position:** Group 1, Period 2\n\n**Note:** Lithium is lightest metal, but Hydrogen is lightest element.`;
  }
  if (q.includes('liquid metal') && q.includes('room temperature')) {
    return `💧 **Liquid Metal at Room Temperature:**\n\n**Mercury (Hg)**\n• Melting point: -39°C\n• Only metal liquid at room temp\n\n**Note:** Bromine is also liquid at room temp but it's a NON-METAL.\n\n**Uses:** Thermometers, barometers, electrical switches`;
  }
  if (q.includes('best conductor') && q.includes('electricity')) {
    return `⚡ **Best Electrical Conductor:**\n\n**Silver (Ag)** - Conductivity: 6.3×10⁷ S/m\n\n**Order:** Silver > Copper > Gold > Aluminum\n\n**Why Silver?** Has most free electrons per unit volume.\n\n**Practical use:** Copper (cheaper, almost as good)`;
  }
  if (q.includes('hardest') && (q.includes('diamond') || q.includes('substance') || q.includes('natural'))) {
    return `💎 **Hardest Natural Substance:**\n\n**Diamond** - 10 on Mohs scale\n\n**Structure:** Each carbon atom bonded to 4 others in 3D tetrahedral structure.\n\n**Why so hard?**\n• Strong C-C covalent bonds\n• Giant covalent structure\n• No weak points`;
  }
  if (q.includes('isotopes')) {
    return `⚛️ **Isotopes:**\n\nAtoms with:\n• SAME atomic number (same protons)\n• DIFFERENT mass number (different neutrons)\n\n**Example:**\n• C-12: 6 protons, 6 neutrons\n• C-14: 6 protons, 8 neutrons\n\n**Key:** Same element, different masses`;
  }
  if (q.includes('carbon-14') || q.includes('carbon dating')) {
    return `📅 **Carbon-14 Dating:**\n\nUsed to date organic materials up to 50,000 years old.\n\n**Principle:**\n• Living things absorb C-14 from atmosphere\n• After death, C-14 decays (half-life = 5,730 years)\n• Measuring remaining C-14 gives age\n\n**Formula:** N = N₀(½)^(t/t½)`;
  }
  if (q.includes('iodine-131') || q.includes('goiter')) {
    return `💊 **Iodine-131 in Medicine:**\n\nUsed to treat THYROID disorders (including goiter)\n\n**Why it works:**\n• Thyroid naturally absorbs iodine\n• Radioactive I-131 targets thyroid cells\n• Destroys overactive/cancerous tissue\n\n**Half-life:** 8 days`;
  }
  if (q.includes('chalcopyrite')) {
    return `⛏️ **Chalcopyrite:**\n\n**Formula:** CuFeS₂ (Copper Iron Sulfide)\n\nMost important copper ore.\n\n**Copper content:** ~34%\n\nAlso called "Copper Pyrite" or "Yellow Copper Ore"\n\n**Extraction:** Roasting + Smelting`;
  }
  if (q.includes('copper glance')) {
    return `⛏️ **Copper Glance:**\n\n**Formula:** Cu₂S (Cuprous Sulfide)\n\nRich copper ore with ~80% copper content.\n\nHigher copper content than chalcopyrite.\n\nAlso called "Chalcocite"`;
  }
  if (q.includes('gypsum')) {
    return `🧱 **Gypsum:**\n\n**Formula:** CaSO₄·2H₂O\n(Calcium Sulfate Dihydrate)\n\n**Uses:**\n• Making Plaster of Paris\n• Cement production\n• Drywall/Gypsum boards\n• Fertilizer (adds calcium & sulfur)`;
  }
  if (q.includes('plaster of paris')) {
    return `🏥 **Plaster of Paris:**\n\n**Formula:** CaSO₄·½H₂O\n(Calcium Sulfate Hemihydrate)\n\n**Made by:** Heating gypsum at 120°C\nCaSO₄·2H₂O → CaSO₄·½H₂O + 1½H₂O\n\n**Uses:** Casts, molds, sculptures, construction`;
  }
  if (q.includes('densest metal')) {
    return `⚖️ **Densest Metal:**\n\n**Osmium (Os)** - 22.59 g/cm³\n\nFollowed by Iridium - 22.56 g/cm³\n\nBoth are platinum group metals.\n\n**Comparison:** Water = 1 g/cm³, Iron = 7.87 g/cm³`;
  }
  if (q.includes('co and co2') && q.includes('oxygen')) {
    return `⚗️ **CO vs CO₂ Oxygen Ratio:**\n\n• CO has 1 oxygen\n• CO₂ has 2 oxygens\n\n**Ratio = 1:2**\n\nThis demonstrates the Law of Multiple Proportions:\nSame elements combine in simple whole number ratios.`;
  }
  if (q.includes('fossil fuel')) {
    return `⛽ **Fossil Fuels:**\n\nMainly contain CARBON.\n\n**Types:** Coal, Oil (Petroleum), Natural Gas\n\n**Formation:** Ancient organic matter → millions of years of heat & pressure → fossil fuels\n\n**Combustion:** C + O₂ → CO₂ + Energy`;
  }
  if (q.includes('atomic number') && q.includes('oxygen')) {
    return `⚛️ **Oxygen:**\n\n**Atomic Number: 8**\n\n• 8 protons, 8 electrons\n• Electronic configuration: 2, 6\n• Group 16, Period 2\n• 3rd most abundant element in universe\n\n**Symbol:** O`;
  }
  if (q.includes('solution') && q.includes('solute') && q.includes('solvent')) {
    return `🧪 **Solutions:**\n\n**Solution = Solute + Solvent**\n\n• **Solute:** Substance being dissolved (smaller amount)\n• **Solvent:** Substance doing the dissolving (larger amount)\n\n**Example:** Salt (solute) in Water (solvent) = Salt solution\n\nSolutions are homogeneous mixtures.`;
  }
  if (q.includes('acid') && q.includes('base') && q.includes('salt')) {
    return `⚗️ **Neutralization Reaction:**\n\n**Acid + Base → Salt + Water**\n\n**Example:**\nHCl + NaOH → NaCl + H₂O\n\n**Type:** Double displacement reaction\n\n**Products:** Salt (ionic compound) + Water`;
  }
  if (q.includes('proton') && q.includes('discovered')) {
    return `⚛️ **Discovery of Proton:**\n\n**Discovered by:** Ernest Rutherford (1919)\n\nUsing nitrogen bombardment experiment.\n\n**Earlier:** Goldstein discovered canal rays (1886) which were later identified as protons.\n\n**Properties:** +1 charge, mass ≈ 1 amu`;
  }
  if (q.includes('neutron') && q.includes('discovered')) {
    return `⚛️ **Discovery of Neutron:**\n\n**Discovered by:** James Chadwick (1932)\n\n**Experiment:** Bombarded beryllium with alpha particles, detected neutral particles.\n\n**Properties:**\n• No charge (neutral)\n• Mass ≈ 1 amu\n• Found in nucleus`;
  }
  if (q.includes('electron') && q.includes('discovered')) {
    return `⚛️ **Discovery of Electron:**\n\n**Discovered by:** J.J. Thomson (1897)\n\n**Experiment:** Cathode ray tube experiment\n\nMeasured charge-to-mass ratio.\n\n**Properties:**\n• Charge: -1.6×10⁻¹⁹ C\n• Mass: 9.11×10⁻³¹ kg`;
  }
  if (q.includes('cell wall')) {
    return `🧫 **Cell Wall:**\n\nPresent in:\n✓ Plants (cellulose)\n✓ Bacteria (peptidoglycan)\n✓ Fungi (chitin)\n\n❌ NOT in animal cells\n\n**Function:** Provides structure, support, protection\n\n**Key difference:** Plants have cell wall + cell membrane; Animals only have cell membrane.`;
  }
  if (q.includes('photosynthesis')) {
    return `🌿 **Photosynthesis:**\n\n**Equation:**\n6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂\n\n**In words:** Carbon dioxide + Water + Sunlight → Glucose + Oxygen\n\n**Location:** Chloroplast (in green plants)\n\n**Pigment:** Chlorophyll (absorbs light)`;
  }
  if (q.includes('chloroplast')) {
    return `🌿 **Chloroplast:**\n\n**Function:** Site of PHOTOSYNTHESIS\n\nContains chlorophyll (green pigment) that:\n• Captures light energy\n• Converts CO₂ + H₂O → Glucose + O₂\n\n**Found in:** Plant cells, some protists\n\n**"Kitchen of the cell"** - where food is made`;
  }
  if (q.includes('prokaryote') || (q.includes('bacteria') && !q.includes('cell wall'))) {
    return `🦠 **Prokaryotes:**\n\n**Examples:** Bacteria, Archaea\n\n**Characteristics:**\n• NO membrane-bound nucleus\n• NO membrane-bound organelles\n• DNA in nucleoid region\n• Smaller and simpler than eukaryotes\n• Cell wall usually present`;
  }
  if (q.includes('sulfuric acid') || q.includes('h₂so₄') || q.includes('king of chemicals')) {
    return `👑 **Sulfuric Acid (H₂SO₄):**\n\n**"King of Chemicals"**\n\n**Why?** Used in more industrial processes than any other chemical.\n\n**Uses:**\n• Fertilizers\n• Car batteries\n• Metal processing\n• Petroleum refining\n• Detergents`;
  }
  if (q.includes('m shell') && q.includes('subshell')) {
    return `⚛️ **M Shell Subshells:**\n\n**M shell (n=3) has 3 subshells:**\n• 3s (2 electrons)\n• 3p (6 electrons)\n• 3d (10 electrons)\n\n**Total capacity:** 18 electrons\n\n**Rule:** Number of subshells = shell number (n)`;
  }
  if (q.includes('magnesium') && (q.includes('alkaline') || q.includes('earth'))) {
    return `⚛️ **Magnesium (Mg):**\n\n**Group:** 2 - Alkaline Earth Metals\n\n**Properties:**\n• Atomic number: 12\n• 2 valence electrons\n• Forms Mg²⁺ ions\n• Silvery-white metal\n\n**Uses:** Alloys, fireworks, flashbulbs`;
  }
  if (q.includes('18g') && q.includes('water') && q.includes('mole')) {
    return `🧪 **Moles of Water:**\n\n**Given:** 18g of water\n**Molar mass of H₂O:** 2(1) + 16 = 18 g/mol\n\n**Calculation:**\nMoles = Mass / Molar mass\nMoles = 18g / 18 g/mol = **1 mole**\n\n**This contains:** 6.02×10²³ water molecules`;
  }
  if (q.includes('hess') && q.includes('law')) {
    return `🔥 **Hess's Law:**\n\nTotal enthalpy change is SAME regardless of reaction path.\n\n**Based on:** Conservation of Energy\n\n**Why?** Enthalpy is a STATE FUNCTION (depends only on initial and final states, not path).\n\n**Use:** Calculate ΔH for reactions that can't be measured directly.`;
  }
  if (q.includes('equilibrium') && (q.includes('forward') || q.includes('reverse'))) {
    return `⚖️ **Chemical Equilibrium:**\n\n**Definition:** Forward rate = Reverse rate\n\n**At equilibrium:**\n• Concentrations remain CONSTANT\n• Both reactions CONTINUE (dynamic)\n• No NET change in composition\n\n**Equilibrium constant:** K = [Products]/[Reactants]`;
  }
  if (q.includes('2 mole') && q.includes('atom')) {
    return `🧮 **Atoms in 2 Moles:**\n\n**Avogadro's Number:** 1 mole = 6.02×10²³ particles\n\n**Calculation:**\n2 moles = 2 × 6.02×10²³\n= **12.04×10²³ atoms**\n\nOr written as: 1.204×10²⁴ atoms`;
  }
  if (q.includes('alkene') && q.includes('formula')) {
    return `🧪 **Alkenes General Formula:**\n\n**CₙH₂ₙ**\n\n**Examples:**\n• Ethene: C₂H₄ (n=2)\n• Propene: C₃H₆ (n=3)\n• Butene: C₄H₈ (n=4)\n\n**Feature:** Contains C=C double bond\n**Type:** Unsaturated hydrocarbons`;
  }
  if (q.includes('alkene') && q.includes('bond')) {
    return `🔗 **Bond in Alkenes:**\n\n**Double Bond (C=C)**\n\nConsists of:\n• 1 sigma (σ) bond\n• 1 pi (π) bond\n\n**Properties:**\n• Makes alkenes unsaturated\n• More reactive than alkanes\n• Can undergo addition reactions`;
  }
  if (q.includes('hemoglobin') || (q.includes('blood') && q.includes('red'))) {
    return `🩸 **Why Blood is Red:**\n\n**Hemoglobin** - iron-containing protein in RBCs\n\n**Mechanism:**\n• Iron in hemoglobin binds oxygen\n• Oxygenated blood = bright red\n• Deoxygenated blood = dark red\n\n**Function:** Transports oxygen throughout body`;
  }
  if (q.includes('cerebrum') || (q.includes('brain') && q.includes('largest'))) {
    return `🧠 **Cerebrum:**\n\n**Largest part of brain** (~85% of brain mass)\n\n**Controls:**\n• Thinking & reasoning\n• Memory & learning\n• Emotions & personality\n• Voluntary movements\n• Speech & language\n• Sensory processing`;
  }
  if (q.includes('gene') || q.includes('heredity')) {
    return `🧬 **Gene - Unit of Heredity:**\n\n**Definition:** Segment of DNA that codes for a specific protein/trait.\n\n**Location:** Chromosomes (in nucleus)\n\n**Function:**\n• Carries genetic information\n• Passed from parents to offspring\n• Determines inherited traits`;
  }
  if (q.includes('oxygen') && q.includes('atmosphere') && q.includes('%')) {
    return `🌍 **Atmospheric Composition:**\n\n• Nitrogen: ~78%\n• **Oxygen: ~21%**\n• Argon: ~0.9%\n• CO₂: ~0.04%\n• Other gases: trace amounts\n\n**Note:** These are approximate values for dry air at sea level.`;
  }

  // MATH EXPLANATIONS
  if ((q.includes('a = 2') || q.includes('a=2')) && (q.includes('b = 3') || q.includes('b=3'))) {
    return `🧮 **Algebraic Substitution:**\n\n**Given:** a = 2, b = 3\n\n**Calculate 2a + b:**\n= 2(2) + 3\n= 4 + 3\n= **7**\n\n**Method:** Replace variables with given values, then calculate.`;
  }
  if (q.includes('table of 19') || (q.includes('19') && q.includes('38') && q.includes('57'))) {
    return `🔢 **Pattern Recognition:**\n\n**Sequence:** 19, 38, 57, ?\n\n**Pattern:** Adding 19 each time (multiples of 19)\n19 × 1 = 19\n19 × 2 = 38\n19 × 3 = 57\n19 × 4 = **76**\n\n**Answer: 76**`;
  }
  if (q.includes('a ∩ b') || q.includes('intersection')) {
    return `∩ **Set Intersection:**\n\n**A ∩ B** = Elements in BOTH A and B\n\n**Example:**\nA = {1, 2, 3, 4}\nB = {3, 4, 5, 6}\nA ∩ B = {3, 4}\n\n**Remember:** ∩ looks like "n" for "aNd" (common elements)`;
  }
  if (q.includes('a ∪ b') || q.includes('union')) {
    return `∪ **Set Union:**\n\n**A ∪ B** = ALL elements from A and B (no repetition)\n\n**Example:**\nA = {1, 2, 3}\nB = {3, 4, 5}\nA ∪ B = {1, 2, 3, 4, 5}\n\n**Remember:** ∪ looks like "u" for "Union"`;
  }
  if (q.includes('subset')) {
    return `⊆ **Subset Properties:**\n\n**Key Facts:**\n• Every set is a subset of itself (A ⊆ A)\n• Empty set is subset of every set (∅ ⊆ A)\n• If A ⊆ B and B ⊆ A, then A = B\n\n**Definition:** A ⊆ B if every element of A is also in B.`;
  }
  if (q.includes('equilateral')) {
    return `△ **Equilateral Triangle:**\n\n**Properties:**\n• All 3 sides are EQUAL\n• All 3 angles = 60°\n• Total angles = 180°\n\n**Comparison:**\n• Isosceles: 2 equal sides\n• Scalene: No equal sides`;
  }
  if (q.includes('90°') && q.includes('angle')) {
    return `📐 **Types of Angles:**\n\n**90° = Right Angle**\n\n**Reference:**\n• Acute: < 90°\n• Right: = 90°\n• Obtuse: 90° to 180°\n• Straight: = 180°\n• Reflex: 180° to 360°`;
  }
  if (q.includes('hypotenuse') && (q.includes('10') || q.includes('6'))) {
    return `📐 **Pythagorean Theorem:**\n\na² + b² = c²\n\n**Given:** Hypotenuse c = 10, one side a = 6\n\n**Solution:**\n6² + b² = 10²\n36 + b² = 100\nb² = 64\nb = **8**\n\n**Common triple:** 6, 8, 10 (or 3, 4, 5 × 2)`;
  }
  if (q.includes('pythagorean triple') && q.includes('3') && q.includes('4')) {
    return `📐 **Pythagorean Triple:**\n\n**3, 4, 5 is a Pythagorean triple**\n\n**Verification:**\n3² + 4² = 9 + 16 = 25 = 5²\n\n**These form a right triangle.**\n\n**Other triples:** (5,12,13), (8,15,17), (7,24,25)`;
  }
  if (q.includes('two points') && q.includes('line')) {
    return `📏 **Euclid's Axiom:**\n\n**Through any two distinct points, exactly ONE line can be drawn.**\n\nThis is a fundamental principle of Euclidean geometry.\n\n**Corollary:** Two lines intersect at most at one point.`;
  }
  if (q.includes('determinant') && q.includes('non-singular')) {
    return `📊 **Non-Singular Matrix:**\n\n**Definition:** Matrix with determinant ≠ 0\n\n**Properties:**\n• Has a unique inverse\n• Equations have unique solution\n• Full rank\n\n**Singular matrix:** |A| = 0 (no inverse exists)`;
  }
  if (q.includes('a²') && q.includes('b²') && (q.includes('a=4') || q.includes('a = 4'))) {
    return `🧮 **Sum of Squares:**\n\n**Given:** A = 4, B = 3\n\n**Calculate A² + B²:**\n= 4² + 3²\n= 16 + 9\n= **25**\n\n**Note:** A² + B² ≠ (A+B)²\n(A+B)² = A² + 2AB + B² = 49`;
  }
  if (q.includes('log₁₀') || q.includes('log 10') || q.includes('log(10)')) {
    return `📊 **Logarithm Property:**\n\n**log₁₀(10) = 1**\n\n**Why?** Because 10¹ = 10\n\n**General rule:** logₐ(a) = 1\nThe log of any base to itself equals 1.\n\n**Other examples:** log₂(2) = 1, ln(e) = 1`;
  }
  if (q.includes('supplementary')) {
    return `📐 **Supplementary Angles:**\n\n**Two angles that add up to 180°**\n\n**Example:** 120° and 60° are supplementary\n\n**Complementary angles:** Add up to 90°\n\n**Memory tip:** "S" in Supplementary → "Straight" line (180°)`;
  }
  if (q.includes('sum of angles') && q.includes('triangle')) {
    return `△ **Triangle Angle Sum:**\n\n**Sum of interior angles = 180°**\n\n**Proof concept:** Draw a line parallel to base through apex; alternate angles are equal.\n\n**This is a fundamental property of Euclidean geometry.**`;
  }
  if (q.includes('1369')) {
    return `🧮 **Square of 1369:**\n\n**1369 × 1369 = 1369²**\n\n**Note:** 1369 = 37²\n\nSo 1369² = (37²)² = 37⁴ = **1,874,161**\n\n**Or calculate:** 1369 × 1369 = 1,874,161`;
  }

  // INTELLIGENCE EXPLANATIONS
  if (q.includes('present') && q.includes('percentage') && q.includes('student')) {
    return `📊 **Attendance Percentage:**\n\n**Formula:** (Present/Total) × 100\n\n**Example:** 1200 present out of 1500\n\n**Calculation:**\n(1200/1500) × 100\n= 0.8 × 100\n= **80%**`;
  }
  if (q.includes('profit') && q.includes('percentage')) {
    return `💰 **Profit Percentage:**\n\n**Formula:** (Profit/Cost Price) × 100\n\n**Where:** Profit = Selling Price - Cost Price\n\n**Example:** Buy ₹30, Sell ₹40\nProfit = 40 - 30 = ₹10\nProfit % = (10/30) × 100 = **33.33%**`;
  }
  if (q.includes('direction') || q.includes('north') || q.includes('south') || q.includes('east') || q.includes('west')) {
    return `🧭 **Direction Problems:**\n\n**Tips:**\n1. Draw a diagram with N, S, E, W\n2. Track each movement step by step\n3. Right turn = 90° clockwise\n4. Left turn = 90° anticlockwise\n\n**Remember:** \n• Face North + Right = East\n• Face North + Left = West`;
  }
  if (q.includes('blood relation') || (q.includes('mother') && q.includes('father')) || q.includes('sister') && q.includes('brother')) {
    return `👨‍👩‍👧‍👦 **Blood Relation Problems:**\n\n**Tips:**\n1. Draw a family tree diagram\n2. Start from the given person\n3. Work through relationships one by one\n4. Use symbols: □ male, ○ female\n\n**Common relations:**\n• Parent's sibling = Uncle/Aunt\n• Sibling's child = Nephew/Niece`;
  }
  if (q.includes('odd one') || q.includes('odd out')) {
    return `🔍 **Odd One Out:**\n\n**Strategy:**\n1. Find what 3 items have in common\n2. The 4th item that doesn't fit = odd one\n\n**Common categories:**\n• Living vs Non-living\n• Fruits vs Vegetables\n• Mammals vs Birds\n• 2D vs 3D shapes`;
  }
  if (q.includes('series') || q.includes('pattern') || q.includes('?')) {
    if (q.includes('1, 3, 7, 13') || q.includes('1,3,7,13')) {
      return `🔢 **Series: 1, 3, 7, 13, ?**\n\n**Find differences:**\n3-1=2, 7-3=4, 13-7=6\n\n**Pattern:** +2, +4, +6, +8...\n(Adding increasing even numbers)\n\n**Next:** 13 + 8 = **21**`;
    }
    if (q.includes('2, 5, 11, 23') || q.includes('2,5,11,23')) {
      return `🔢 **Series: 2, 5, 11, 23, ?**\n\n**Pattern:** Each term × 2 + 1\n\n2 × 2 + 1 = 5\n5 × 2 + 1 = 11\n11 × 2 + 1 = 23\n23 × 2 + 1 = **47**`;
    }
    if (q.includes('43, 53, 63') || q.includes('43,53,63')) {
      return `🔢 **Series: 43, 53, 63, ?**\n\n**Pattern:** +10 each time\n\n43 + 10 = 53\n53 + 10 = 63\n63 + 10 = **73**`;
    }
    return `🔢 **Number Series Tips:**\n\n**Common patterns:**\n• Arithmetic: constant difference\n• Geometric: constant ratio\n• Squares: 1, 4, 9, 16...\n• Cubes: 1, 8, 27, 64...\n• Fibonacci: each = sum of previous two\n\n**Strategy:** Find difference/ratio between consecutive terms.`;
  }
  if (q.includes('analogy') || (q.includes('is to') && q.includes('as'))) {
    return `🔗 **Analogy Problems:**\n\n**Format:** A : B :: C : ?\n\n**Strategy:**\n1. Find relationship between A and B\n2. Apply SAME relationship to C and ?\n\n**Common relationships:**\n• Opposites (Hot:Cold)\n• Part:Whole (Petal:Flower)\n• Male:Female (Bull:Cow)\n• Tool:User (Brush:Painter)`;
  }
  if (q.includes('triple') && q.includes('profit')) {
    return `💰 **Triple Price Profit:**\n\n**If SP = 3 × CP:**\n\nProfit = SP - CP = 3CP - CP = 2CP\n\n**Profit % = (Profit/CP) × 100**\n= (2CP/CP) × 100\n= **200%**`;
  }
  if (q.includes('dozen') && q.includes('egg')) {
    return `🥚 **Egg Problem:**\n\n**Given:** 3 dozen = 36 eggs\nCost = ₹288, Sold = ₹360\n\n**Profit = 360 - 288 = ₹72**\n\n**Profit % = (72/288) × 100**\n= 0.25 × 100\n= **25%**`;
  }
  if (q.includes('speed') && (q.includes('km/h') || q.includes('km/hr')) && (q.includes('m') || q.includes('meter'))) {
    return `🏃 **Speed Conversion:**\n\n**600m in 5 min to km/h:**\n\n**Method 1:**\n600m = 0.6 km\n5 min = 5/60 hr = 1/12 hr\nSpeed = 0.6 ÷ (1/12) = 0.6 × 12 = **7.2 km/h**\n\n**Shortcut:** m/s × (18/5) = km/h`;
  }
  if (q.includes('deviation') && q.includes('mean')) {
    return `📊 **Deviation from Mean:**\n\n**Sum of deviations from mean = ZERO**\n\n**Formula:** Σ(xᵢ - x̄) = 0\n\n**Why?**\nThe mean is the "balance point" of data.\nPositive and negative deviations cancel out.\n\nThis is a mathematical property of the arithmetic mean.`;
  }
  if (q.includes('perfect square') && (q.includes('100') || q.includes('64'))) {
    return `🔢 **Perfect Squares Pattern:**\n\n**100, 64, 36, 16, ?**\n\nThese are: 10², 8², 6², 4², ?\n\n**Pattern:** Decreasing even numbers squared\n\nNext: 2² = **4**`;
  }

  // GK EXPLANATIONS  
  if (q.includes('indus water treaty')) {
    return `📜 **Indus Water Treaty (1960):**\n\n**Signatories:**\n• Pakistan: President Ayub Khan\n• India: PM Jawaharlal Nehru\n\n**Terms:**\n• Eastern rivers (Ravi, Beas, Sutlej) → India\n• Western rivers (Indus, Jhelum, Chenab) → Pakistan\n\n**Mediated by:** World Bank`;
  }
  if (q.includes('indian national congress') && q.includes('president')) {
    return `🏛️ **First INC President:**\n\n**Womesh Chandra Bonnerjee** (1885)\n\n• Presided over first session in Bombay\n• Was a noted lawyer\n• INC founded in 1885 by A.O. Hume`;
  }
  if (q.includes('urdu-hindi controversy')) {
    return `📜 **Urdu-Hindi Controversy (1867):**\n\n**Location:** Banaras (Varanasi)\n\n**Issue:** Hindus demanded Hindi in Devanagari script replace Urdu in courts/offices.\n\n**Result:** Major factor in Hindu-Muslim divide, contributed to Two-Nation Theory.`;
  }
  if (q.includes('national anthem') && q.includes('composed')) {
    return `🎵 **Pakistan National Anthem:**\n\n**Lyrics:** Hafeez Jalandhari\n**Music:** Ahmed G. Chagla\n\n**Adopted:** August 1954\n\n**Duration:** 1 minute 20 seconds (short version: 20 seconds)`;
  }
  if (q.includes('siachen') || q.includes('longest glacier')) {
    return `🏔️ **Siachen Glacier:**\n\n**Length:** 76 km\n• Longest glacier in Pakistan\n• 2nd longest non-polar glacier in world\n\n**Location:** Karakoram range\n\n**Elevation:** 5,753m (highest battlefield)`;
  }
  if (q.includes('durand line')) {
    return `🗺️ **Durand Line:**\n\n**Length:** 2,670 km\n**Between:** Pakistan and Afghanistan\n**Established:** 1893\n**Named after:** Sir Mortimer Durand\n\nBritish-era border still disputed by some.`;
  }
  if (q.includes('radcliffe line')) {
    return `🗺️ **Radcliffe Line:**\n\n**Between:** India and Pakistan\n**Drawn by:** Sir Cyril Radcliffe (1947)\n**Purpose:** Partition of British India\n\n**Length:** ~3,323 km (India-Pakistan border)`;
  }
  if (q.includes('three gorges')) {
    return `🏗️ **Three Gorges Dam:**\n\n**Location:** China (Yangtze River)\n**Capacity:** 22,500 MW\n\nWorld's largest dam by installed capacity.\n\n**Completed:** 2006\n**Length:** 2,335 m`;
  }
  if (q.includes('sunlight') && q.includes('reach') && q.includes('earth')) {
    return `☀️ **Sunlight Travel Time:**\n\n**Time:** ~8 minutes 20 seconds\n\n**Calculation:**\n• Distance: ~150 million km\n• Speed of light: 3×10⁸ m/s\n• Time = Distance/Speed ≈ 500 seconds ≈ 8 min 20 sec`;
  }
  if (q.includes('nishan-e-haider') && q.includes('first')) {
    return `🎖️ **First Nishan-e-Haider:**\n\n**Captain Muhammad Sarwar Shaheed** (1948)\n\nDied during Kashmir operations in 1948.\n\nNishan-e-Haider is Pakistan's highest military award (equivalent to Victoria Cross).`;
  }
  if (q.includes('synonym') || q.includes('opposite') || q.includes('antonym')) {
    const words: Record<string, string> = {
      'distract': '📝 **Distract:**\nMeaning: To divert attention\n**Synonym:** Divert, Sidetrack\n**Antonym:** Focus, Concentrate',
      'large': '📝 **Large:**\nMeaning: Big in size\n**Synonyms:** Big, Huge, Enormous\n**Antonyms:** Small, Tiny, Little',
      'front': '📝 **Front:**\nMeaning: Forward part\n**Synonyms:** Fore, Forward\n**Antonyms:** Back, Rear, Behind',
      'honest': '📝 **Honest:**\nMeaning: Truthful, sincere\n**Synonyms:** Truthful, Sincere\n**Antonyms:** Dishonest, Deceitful',
      'harsh': '📝 **Harsh:**\nMeaning: Severe, rough\n**Synonyms:** Severe, Rough, Stern\n**Antonyms:** Gentle, Mild, Soft',
      'accept': '📝 **Accept:**\nMeaning: To receive, agree to\n**Synonyms:** Receive, Agree, Approve\n**Antonyms:** Reject, Refuse, Decline',
      'slow': '📝 **Slow:**\nMeaning: Not fast\n**Synonyms:** Unhurried, Sluggish\n**Antonyms:** Fast, Quick, Rapid',
      'artificial': '📝 **Artificial:**\nMeaning: Man-made\n**Synonyms:** Synthetic, Fake\n**Antonyms:** Natural, Genuine, Real',
      'generous': '📝 **Generous:**\nMeaning: Giving freely\n**Synonyms:** Liberal, Giving, Kind\n**Antonyms:** Selfish, Stingy, Miserly',
    };
    for (const [word, explanation] of Object.entries(words)) {
      if (q.includes(word)) return explanation;
    }
  }

  // ISLAMIC STUDIES
  if (q.includes('surah') && q.includes('total')) {
    return `📖 **Surahs in Quran:**\n\n**Total: 114 Surahs**\n\n• First: Al-Fatiha (The Opening)\n• Last: Al-Nas (Mankind)\n• Longest: Al-Baqarah (286 verses)\n• Shortest: Al-Kausar (3 verses)`;
  }
  if (q.includes('bismillah') && q.includes('quran')) {
    return `📿 **Bismillah in Quran:**\n\n**Total: 114 times**\n\n• Once at start of each Surah EXCEPT Surah At-Tawba (9th)\n• TWICE in Surah An-Naml (27th) - once at start, once in verse 30\n\nSo: 113 + 0 + 1 = 114`;
  }
  if (q.includes('longest surah')) {
    return `📖 **Longest & Shortest Surahs:**\n\n**Longest:** Al-Baqarah (The Cow)\n• 286 verses\n• Surah #2\n\n**Shortest:** Al-Kausar (Abundance)\n• 3 verses\n• Surah #108`;
  }

  // Default fallback with more specific info
  return `✅ **${answer}** is the correct answer.\n\nThis is a key concept commonly tested in competitive exams.\n\n**Tip:** Review this topic thoroughly and understand the underlying concept for similar questions.`;
};
