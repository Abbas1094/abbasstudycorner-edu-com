import { MCQ } from "@/types";

// ========== CHAPTER 12: ELECTROSTATICS ==========
export const physics12Ch12MCQs: MCQ[] = [
  {
    id: "p12-ch12-1",
    question: "The formula for electric field as potential gradient is:",
    options: ["E = -Δv/Δr", "E = -Δv/Δt", "E = -ΔU/Δr", "E = -ΔU/Δt"],
    correctAnswer: 0,
    explanation: "Electric field intensity is the negative rate of change of potential with respect to distance: E = -Δv/Δr."
  },
  {
    id: "p12-ch12-2",
    question: "V/m (Volt per meter) is unit of:",
    options: ["Magnetic Field Intensity", "Electric Field Intensity", "Electric Force", "Gravitational Force"],
    correctAnswer: 1,
    explanation: "Volt per meter (V/m) is the SI unit of Electric Field Intensity."
  },
  {
    id: "p12-ch12-3",
    question: "Δv/Δr has the unit of:",
    options: ["Electric flux", "Magnetic flux", "Magnetic field", "Electric field"],
    correctAnswer: 3,
    explanation: "Δv/Δr represents the potential gradient which has units of electric field (V/m)."
  },
  {
    id: "p12-ch12-4",
    question: "A particle having a charge of 2e falls through a potential difference of 3.0 Volts. The change in its K.E. is equal to:",
    options: ["6.0 eV", "5.0 eV", "4.0 eV", "8.0 eV"],
    correctAnswer: 0,
    explanation: "ΔK.E = qΔV = (2e)(3.0V) = 6.0 eV."
  },
  {
    id: "p12-ch12-5",
    question: "The absolute potential at a point distant 20 cm from a charge of 2μC is:",
    options: ["9 × 10² V", "9 × 10³ V", "9 × 10⁴ V", "9 × 10⁵ V"],
    correctAnswer: 2,
    explanation: "Using V = kq/r = (9×10⁹)(2×10⁻⁶)/(0.2) = 9 × 10⁴ V."
  },
  {
    id: "p12-ch12-6",
    question: "If a +ve point charge q is moved away from a point, the absolute potential at that point:",
    options: ["Increases", "Remains same", "Decreases", "Becomes infinite"],
    correctAnswer: 2,
    explanation: "Potential is inversely proportional to distance r. Moving charge away decreases the potential at that point."
  },
  {
    id: "p12-ch12-7",
    question: "The SI unit of electric potential is:",
    options: ["Kg m² s⁻¹ C", "Kg m² s⁻² C", "Kg m² s⁻² C⁻¹", "Kg m⁻² s² C⁻¹"],
    correctAnswer: 2,
    explanation: "1 Volt = 1 Joule/Coulomb = Kg m² s⁻² C⁻¹."
  },
  {
    id: "p12-ch12-8",
    question: "When applied potential difference is increased; capacitance of parallel plate capacitor:",
    options: ["Increases", "Decreases", "Remains same", "Reduces to zero"],
    correctAnswer: 2,
    explanation: "Capacitance only depends on the geometry of plates and the medium between them, not the applied voltage."
  },
  {
    id: "p12-ch12-9",
    question: "When plates of an isolated charged capacitor are moved apart, energy stored:",
    options: ["Increases", "Decreases", "Remains same", "Reduces to zero"],
    correctAnswer: 0,
    explanation: "Moving plates apart decreases capacitance. For an isolated capacitor, charge is constant, so energy U = Q²/2C increases."
  },
  {
    id: "p12-ch12-10",
    question: "Coulomb per volt is called:",
    options: ["Farad", "Ampere", "Joule", "Henry"],
    correctAnswer: 0,
    explanation: "1 Farad = 1 Coulomb per Volt (C/V)."
  },
  {
    id: "p12-ch12-11",
    question: "Unit of relative permittivity is:",
    options: ["No unit", "NC²m⁻²", "Nm²C⁻²", "N⁻¹C⁻²m⁻²"],
    correctAnswer: 0,
    explanation: "Relative permittivity is a ratio of two capacitances, so it is dimensionless (no unit)."
  },
  {
    id: "p12-ch12-12",
    question: "The slope of graph between charge and time for capacitor charging is large initially when the product RC is:",
    options: ["Small", "Large", "Intermediate", "Infinite"],
    correctAnswer: 0,
    explanation: "A smaller time constant RC leads to a more rapid charge/discharge."
  },
  {
    id: "p12-ch12-13",
    question: "Gaussian surface should be:",
    options: ["Spherical", "Cubical", "Circular", "Close"],
    correctAnswer: 3,
    explanation: "A Gaussian surface must be a closed surface for Gauss's law to apply."
  },
  {
    id: "p12-ch12-14",
    question: "Inside a charged metallic box, electric field intensity is:",
    options: ["Zero", "Strong", "Weak", "Variable"],
    correctAnswer: 0,
    explanation: "Inside a closed metallic conductor, the electric field is always zero (Faraday cage effect)."
  },
  {
    id: "p12-ch12-15",
    question: "Electric flux through a closed surface depends upon:",
    options: ["Charge", "Medium", "Geometry", "Charge and medium"],
    correctAnswer: 3,
    explanation: "According to Gauss's Law, electric flux depends on the charge enclosed and the permittivity of the medium (ε₀)."
  },
  {
    id: "p12-ch12-16",
    question: "The force between two similar unit charges separated one meter apart in air is:",
    options: ["Zero", "One Newton", "9 × 10⁹ N", "9 × 10⁻⁹ N"],
    correctAnswer: 2,
    explanation: "F = kq₁q₂/r² = (9×10⁹)(1)(1)/1² = 9 × 10⁹ N."
  },
  {
    id: "p12-ch12-17",
    question: "For which material medium, force between two charged particles is maximum:",
    options: ["Ammonia", "Germanium", "Mica", "Teflon"],
    correctAnswer: 3,
    explanation: "Force is inversely proportional to relative permittivity. Teflon has the lowest value (2.1) among these options."
  },
  {
    id: "p12-ch12-18",
    question: "Force experienced per unit positive test charge at a point in an electric field is:",
    options: ["Electric potential", "Electric potential energy", "Electric field intensity", "Electric flux"],
    correctAnswer: 2,
    explanation: "Electric field intensity E = F/q₀ (force per unit positive test charge)."
  },
  {
    id: "p12-ch12-19",
    question: "Photocopier and Inkjet Printers are the applications of:",
    options: ["Electricity", "Magnetism", "Electrostatics", "Electromagnetism"],
    correctAnswer: 2,
    explanation: "Photocopiers and inkjet printers work on the principles of electrostatics."
  }
];

// ========== CHAPTER 13: CURRENT ELECTRICITY ==========
export const physics12Ch13MCQs: MCQ[] = [
  {
    id: "p12-ch13-1",
    question: "The heat produced by the passage of current through a resistor is:",
    options: ["I²Rt", "IR²t", "I²R", "IRt²"],
    correctAnswer: 0,
    explanation: "Joule's law: H = I²Rt (heat produced by current I in resistance R over time t)."
  },
  {
    id: "p12-ch13-2",
    question: "Kirchhoff's 2nd rule is based on:",
    options: ["Energy conservation", "Mass conservation", "Charge conservation", "Momentum conservation"],
    correctAnswer: 0,
    explanation: "Kirchhoff's voltage law (2nd rule) is based on conservation of energy in a closed loop."
  },
  {
    id: "p12-ch13-3",
    question: "The substance having negative temperature co-efficient of resistance:",
    options: ["Silver", "Gold", "Carbon", "Tungsten"],
    correctAnswer: 2,
    explanation: "Carbon, germanium, and silicon have negative temperature coefficients (resistance decreases with temperature)."
  },
  {
    id: "p12-ch13-4",
    question: "Three Resistors of Resistance 2Ω, 3Ω and 6Ω are connected in series. Their Equivalent Resistance is:",
    options: ["10 Ω", "11 Ω", "1/10 Ω", "1/11 Ω"],
    correctAnswer: 1,
    explanation: "In series: R_eq = R₁ + R₂ + R₃ = 2 + 3 + 6 = 11 Ω."
  },
  {
    id: "p12-ch13-5",
    question: "The current flowing through each resistor of equal resistances in parallel combination is:",
    options: ["Different", "Zero", "Same", "Infinite"],
    correctAnswer: 2,
    explanation: "In parallel, potential difference is same. Equal resistances mean equal currents (I = V/R)."
  },
  {
    id: "p12-ch13-6",
    question: "In colour code for carbon resistor, if there is no fourth band, then tolerance is:",
    options: ["±20%", "±10%", "±5%", "±4%"],
    correctAnswer: 0,
    explanation: "No fourth band = ±20% tolerance. Silver = ±10%, Gold = ±5%."
  },
  {
    id: "p12-ch13-7",
    question: "Energy consumed by 60 watts bulb in 2 minutes is equal to:",
    options: ["720 Joule", "7.2 kilo Joule", "120 Joule", "7600 Joule"],
    correctAnswer: 1,
    explanation: "Energy = Power × Time = 60W × 120s = 7200 J = 7.2 kJ."
  },
  {
    id: "p12-ch13-8",
    question: "Velocity of free electrons in metals at room temperature is of the order of:",
    options: ["10⁵ m/s", "10⁸ m/s", "10³ m/s", "10⁻³ m/s"],
    correctAnswer: 0,
    explanation: "Free electrons at room temperature have random thermal velocities of the order of 10⁵ m/s."
  },
  {
    id: "p12-ch13-9",
    question: "The fractional change in resistance is minimum for ___ if temperature change is same for all:",
    options: ["Platinum", "Nichrome", "Copper", "Constantan"],
    correctAnswer: 3,
    explanation: "Constantan has a very low temperature coefficient (0.00001 K⁻¹), so its resistance changes the least."
  },
  {
    id: "p12-ch13-10",
    question: "Which is a unipolar medium?",
    options: ["Extrinsic semi-conductor", "Ionized gases", "Electrolyte", "Metals"],
    correctAnswer: 3,
    explanation: "In metals, charge carriers are exclusively free electrons (one type). Electrolytes have both positive and negative ions."
  }
];

// ========== CHAPTER 14: ELECTROMAGNETISM ==========
export const physics12Ch14MCQs: MCQ[] = [
  {
    id: "p12-ch14-1",
    question: "A voltmeter is always connected in:",
    options: ["Series", "Parallel", "Place of Battery", "All these"],
    correctAnswer: 1,
    explanation: "A voltmeter is always connected in parallel to measure potential difference across a component."
  },
  {
    id: "p12-ch14-2",
    question: "To convert a Galvanometer into a Voltmeter, a high resistance connected in series with Galvanometer is given by:",
    options: ["Rh = V/Ig - Rg", "V/Rg + Ig = Rh", "Rh = V/Ig + Rg", "V/Ig + Rg = Rh"],
    correctAnswer: 0,
    explanation: "From Ohm's law V = Ig(Rg + Rh), so Rh = V/Ig - Rg."
  },
  {
    id: "p12-ch14-3",
    question: "Which of the following Apparatus is used to measure Current, Voltage and Resistance:",
    options: ["Ammeter", "Voltmeter", "Avometer", "Galvanometer"],
    correctAnswer: 2,
    explanation: "An AVO meter (Avometer) measures Amperes, Volts, and Ohms."
  },
  {
    id: "p12-ch14-4",
    question: "Which one has least resistance:",
    options: ["Galvanometer", "Ammeter", "Voltmeter", "Ohm-meter"],
    correctAnswer: 1,
    explanation: "An ammeter must have very low resistance so it doesn't disturb the circuit (connected in series)."
  },
  {
    id: "p12-ch14-5",
    question: "When ohmmeter gives full scale deflection, it indicates:",
    options: ["Zero resistance", "Infinite resistance", "Small resistance", "Very high resistance"],
    correctAnswer: 0,
    explanation: "Full scale deflection in an ohmmeter corresponds to zero resistance (maximum current)."
  },
  {
    id: "p12-ch14-6",
    question: "In a galvanometer, radial magnetic field ensures that iron cylinder and field lines are always:",
    options: ["Parallel", "Perpendicular", "Anti-parallel", "Oblique"],
    correctAnswer: 1,
    explanation: "A soft iron cylinder makes the field radial, ensuring the plane of coil is always parallel to field (normal is perpendicular)."
  },
  {
    id: "p12-ch14-7",
    question: "A galvanometer coil of resistance Rg gives full scale deflection with current Ig. What is required shunt resistance Rs if range of ammeter is I = 2Ig:",
    options: ["Rg", "2Rg", "Rg/2", "4Rg"],
    correctAnswer: 0,
    explanation: "Rs = (Ig/(I - Ig)) × Rg. Substituting I = 2Ig: Rs = (Ig/Ig) × Rg = Rg."
  },
  {
    id: "p12-ch14-8",
    question: "In Cathode Ray Oscilloscope, the brightness of spot on the screen is controlled by:",
    options: ["Temperature of Filament", "Charge of Electrons", "Number of Electrons / Grid", "Energy of Electrons"],
    correctAnswer: 2,
    explanation: "The grid controls the number of electrons accelerated by anodes, thus controlling brightness."
  },
  {
    id: "p12-ch14-9",
    question: "The potential of ___ is least in CRO:",
    options: ["Anode", "Screen", "Cathode", "Grid"],
    correctAnswer: 3,
    explanation: "The grid is kept at a negative potential with respect to the cathode."
  },
  {
    id: "p12-ch14-10",
    question: "Work done by magnetic force is:",
    options: ["FdCosθ", "Positive", "Negative", "Zero"],
    correctAnswer: 3,
    explanation: "Magnetic force acts perpendicular to velocity, so it does no work (deflecting force only)."
  },
  {
    id: "p12-ch14-11",
    question: "If a charge is at rest in a magnetic field then the force on charge is:",
    options: ["q(v × B)", "qvBsinθ", "qvB", "Zero"],
    correctAnswer: 3,
    explanation: "F = qvBsinθ. If charge is at rest (v = 0), the force is zero."
  },
  {
    id: "p12-ch14-12",
    question: "When plane of coil is placed parallel to magnetic field, torque on it is:",
    options: ["Zero", "Maximum", "Intermediate", "Infinite"],
    correctAnswer: 1,
    explanation: "Torque τ = IABcosα. When coil plane is parallel to field, α = 0°, cos(0°) = 1, so torque is maximum."
  },
  {
    id: "p12-ch14-13",
    question: "The relation Σ(B.ΔL) = μ₀I is called as:",
    options: ["Faraday's law", "Lenz's law", "Ampere's law", "Gauss's law"],
    correctAnswer: 2,
    explanation: "This is Ampere's circuital law relating magnetic field around a closed loop to current enclosed."
  },
  {
    id: "p12-ch14-14",
    question: "Magnetic field due to a long conductor carrying current I at distance r is proportional to:",
    options: ["1", "1/r", "1/r²", "I²/r"],
    correctAnswer: 1,
    explanation: "B = μ₀I/(2πr), so B is proportional to 1/r."
  },
  {
    id: "p12-ch14-15",
    question: "By increasing the length of current carrying solenoid, the magnetic field will:",
    options: ["Increase", "Decrease", "Not change", "Be uniform"],
    correctAnswer: 1,
    explanation: "B = μ₀nI where n = N/L. Increasing L (with N constant) decreases n, thus decreasing B."
  },
  {
    id: "p12-ch14-16",
    question: "The SI unit of magnetic induction is:",
    options: ["Weber", "Henry", "Tesla", "Gauss"],
    correctAnswer: 2,
    explanation: "Tesla (T) is the SI unit of magnetic flux density (magnetic induction)."
  },
  {
    id: "p12-ch14-17",
    question: "One Tesla is equal to:",
    options: ["1 N⁻¹ Am", "1 N Am", "1 N A⁻¹ m²", "1 N A⁻¹ m⁻¹"],
    correctAnswer: 3,
    explanation: "From F = ILB: 1 Tesla = 1 N A⁻¹ m⁻¹."
  },
  {
    id: "p12-ch14-18",
    question: "SI unit of magnetic permeability (μ₀) is:",
    options: ["Wb A⁻¹ m⁻¹", "Wb m⁻²", "Wb m A⁻¹", "Wb A m⁻¹"],
    correctAnswer: 0,
    explanation: "The SI unit of magnetic permeability is Weber per Ampere per meter (Wb A⁻¹ m⁻¹)."
  }
];

// ========== CHAPTER 15: ELECTROMAGNETIC INDUCTION ==========
export const physics12Ch15MCQs: MCQ[] = [
  {
    id: "p12-ch15-1",
    question: "Mutual induction has a practical role in the performance of the:",
    options: ["Motor", "Generator", "Choke", "Transformer"],
    correctAnswer: 3,
    explanation: "Mutual induction is the operating principle behind transformers."
  },
  {
    id: "p12-ch15-2",
    question: "Transformer is a device which step up or step down the input:",
    options: ["Current", "Voltage", "Energy", "Power"],
    correctAnswer: 1,
    explanation: "A transformer steps up or steps down the input AC voltage."
  },
  {
    id: "p12-ch15-3",
    question: "Which is not true for ideal step up transformer:",
    options: ["Is < Ip", "Pout = Pin", "Vs > Vp", "Ns = Np"],
    correctAnswer: 3,
    explanation: "In a step-up transformer, Ns > Np (secondary turns must be greater than primary turns)."
  },
  {
    id: "p12-ch15-4",
    question: "___ uses a transformer with many secondary coils:",
    options: ["TV receiver", "Door bell", "Transistor radio", "AC generator"],
    correctAnswer: 0,
    explanation: "A TV receiver uses a transformer with multiple secondary coils for different voltage requirements."
  },
  {
    id: "p12-ch15-5",
    question: "The expression for energy stored in an inductor is:",
    options: ["½L²I", "L²I", "½LI²", "LI²"],
    correctAnswer: 2,
    explanation: "Energy stored in an inductor: U = ½LI²."
  },
  {
    id: "p12-ch15-6",
    question: "When current flowing through an inductor is doubled, then energy stored in it becomes:",
    options: ["Half", "Four times", "One fourth", "Double"],
    correctAnswer: 1,
    explanation: "U = ½LI². Doubling I: U' = ½L(2I)² = 4 × ½LI² = 4 times."
  },
  {
    id: "p12-ch15-7",
    question: "The relation for self-inductance of the solenoid is:",
    options: ["L = μ₀nAl", "L = μ₀NAl", "L = μ₀n²Al", "L = μ₀N²Al"],
    correctAnswer: 2,
    explanation: "Self-inductance of a solenoid: L = μ₀n²Al where n = N/L (turns per unit length)."
  },
  {
    id: "p12-ch15-8",
    question: "The self-induced emf is sometimes called ___ emf:",
    options: ["Motional", "Constant", "Back", "Variable"],
    correctAnswer: 2,
    explanation: "Self-induced emf opposes the change in current, so it's called back emf."
  },
  {
    id: "p12-ch15-9",
    question: "Unit of self induction is not equivalent to:",
    options: ["VsA⁻¹", "WbA⁻¹", "JA⁻²", "Vs⁻¹A"],
    correctAnswer: 3,
    explanation: "Henry = VsA⁻¹ = WbA⁻¹ = JA⁻². But Vs⁻¹A is not equivalent to Henry."
  },
  {
    id: "p12-ch15-10",
    question: "The direction of the Induced Current is always so as to oppose the change which causes the current:",
    options: ["Faraday's Law", "Lenz's Law", "Ohm's Law", "Kirchhoff's 1st Rule"],
    correctAnswer: 1,
    explanation: "Lenz's Law states that induced current always opposes the change causing it."
  },
  {
    id: "p12-ch15-11",
    question: "Lenz's law deals with the:",
    options: ["Magnitude of induced current", "Direction of induced emf", "Direction of induced current", "Magnitude of induced emf"],
    correctAnswer: 2,
    explanation: "Lenz's law determines the direction of induced current."
  },
  {
    id: "p12-ch15-12",
    question: "Emf is induced due to change in:",
    options: ["Electric flux", "Magnetic flux", "Electric potential", "Electric current"],
    correctAnswer: 1,
    explanation: "According to Faraday's law, emf is induced by a change in magnetic flux."
  },
  {
    id: "p12-ch15-13",
    question: "When flux through a coil remains unchanged, induced emf is:",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    correctAnswer: 2,
    explanation: "If flux doesn't change, dΦ/dt = 0, so induced emf is zero."
  },
  {
    id: "p12-ch15-14",
    question: "If we make magnetic field stronger the value of induced current is:",
    options: ["Decreased", "Increased", "Vanishes", "Constant"],
    correctAnswer: 1,
    explanation: "Stronger magnetic field means greater rate of change of flux, hence larger induced current."
  },
  {
    id: "p12-ch15-15",
    question: "In D.C. Generator, Split Rings act as:",
    options: ["Capacitor", "Commutator", "Inductor", "Resistor"],
    correctAnswer: 1,
    explanation: "Split rings in a DC generator act as a commutator to convert AC to DC."
  },
  {
    id: "p12-ch15-16",
    question: "The winding of the electromagnet in motor/generator are usually called:",
    options: ["Primary coils", "Field coils", "Secondary coils", "Inductors"],
    correctAnswer: 1,
    explanation: "The electromagnetic windings in motors and generators are called field coils."
  },
  {
    id: "p12-ch15-17",
    question: "A device which converts Electrical Energy into Mechanical Energy is:",
    options: ["Transformer", "D.C. Motor", "A.C. Generator", "D.C. Generator"],
    correctAnswer: 1,
    explanation: "A DC motor converts electrical energy into mechanical energy."
  },
  {
    id: "p12-ch15-18",
    question: "A device which converts mechanical energy into electrical energy is called:",
    options: ["D.C. generator", "D.C. motor", "A.C. generator", "Transformer"],
    correctAnswer: 0,
    explanation: "A generator (DC or AC) converts mechanical energy into electrical energy."
  },
  {
    id: "p12-ch15-19",
    question: "The device which consumes electrical energy is called:",
    options: ["Generator", "Motor", "Load", "Dissipater"],
    correctAnswer: 2,
    explanation: "A load is any device that consumes electrical energy in a circuit."
  }
];

// ========== CHAPTER 16: ALTERNATING CURRENT ==========
export const physics12Ch16MCQs: MCQ[] = [
  {
    id: "p12-ch16-1",
    question: "Root Mean Square Value of Alternating Voltage with V₀ = 100 V, is equal to:",
    options: ["0.7 V", "7 V", "700 V", "70 V"],
    correctAnswer: 3,
    explanation: "Vrms = V₀/√2 ≈ 0.7 × V₀ = 0.7 × 100 = 70 V."
  },
  {
    id: "p12-ch16-2",
    question: "If V₀ is peak value of A.C. voltage then mean square value of voltage is:",
    options: ["V₀/√2", "V₀²", "½V₀²", "V₀"],
    correctAnswer: 2,
    explanation: "Mean square value = (Vrms)² = (V₀/√2)² = ½V₀²."
  },
  {
    id: "p12-ch16-3",
    question: "The mean value of A.C. in one complete cycle is:",
    options: ["1", "Zero", "I₀", "I₀/√2"],
    correctAnswer: 1,
    explanation: "AC spends half its cycle positive and half negative, so the average over a full cycle is zero."
  },
  {
    id: "p12-ch16-4",
    question: "The points where AC crosses the time axis corresponds to phase:",
    options: ["π/2 or 3π/2", "0 or π", "π/4 or 3π/4", "0 or π/2"],
    correctAnswer: 1,
    explanation: "In V = V₀sinθ, voltage is zero when θ = 0, π, or 2π."
  },
  {
    id: "p12-ch16-5",
    question: "If V = 630cos(100πt + 60°) V; the frequency of rotation of generator coil is:",
    options: ["100 Hz", "314 Hz", "50 Hz", "200 Hz"],
    correctAnswer: 2,
    explanation: "ω = 100π, and ω = 2πf, so f = 100π/(2π) = 50 Hz."
  },
  {
    id: "p12-ch16-6",
    question: "If the frequency of A.C is 40 Hz then current passing through filament bulb gets brilliance:",
    options: ["100 times", "80 times", "40 times", "50 times"],
    correctAnswer: 1,
    explanation: "A bulb reaches maximum brilliance twice per cycle (positive and negative peaks): 40 × 2 = 80 times."
  },
  {
    id: "p12-ch16-7",
    question: "The most common source of alternating voltage is:",
    options: ["Motor", "Cell", "Generator", "Thermocouple"],
    correctAnswer: 2,
    explanation: "The AC generator is the most common source of alternating voltage."
  },
  {
    id: "p12-ch16-8",
    question: "In a capacitor, voltage ___ current by ___:",
    options: ["Lags, π", "Leads, π/2", "Lags, π/2", "Leads, π"],
    correctAnswer: 2,
    explanation: "In a purely capacitive circuit, voltage lags current by π/2 (90°)."
  },
  {
    id: "p12-ch16-9",
    question: "A.C. through inductor, the applied voltage:",
    options: ["Leads the current by π/2", "Lags the current by π/2", "Is in phase", "Out of phase 180°"],
    correctAnswer: 0,
    explanation: "In a purely inductive circuit, voltage leads current by π/2."
  },
  {
    id: "p12-ch16-10",
    question: "Power dissipated in a pure inductor is:",
    options: ["Large", "Small", "Infinite", "Zero"],
    correctAnswer: 3,
    explanation: "Power factor cos(90°) = 0, so P = VrmsIrmscos(90°) = 0."
  },
  {
    id: "p12-ch16-11",
    question: "At high frequency, the current in pure inductor is:",
    options: ["Low", "High", "Moderate", "Zero"],
    correctAnswer: 0,
    explanation: "XL = 2πfL. High frequency means high opposition (XL), so current is low."
  },
  {
    id: "p12-ch16-12",
    question: "At high frequency the current through a capacitor of A.C. circuit will be:",
    options: ["Small", "Infinite", "Zero", "Large"],
    correctAnswer: 3,
    explanation: "XC = 1/(2πfC). High frequency makes XC small, allowing large current."
  },
  {
    id: "p12-ch16-13",
    question: "If the frequency of A.C. is doubled then capacitive reactance will be:",
    options: ["Half", "Two times", "Four times", "One fourth"],
    correctAnswer: 0,
    explanation: "XC = 1/(2πfC). Doubling f halves XC."
  },
  {
    id: "p12-ch16-14",
    question: "The reactance of an inductor at 50 Hz is 10 Ω, its reactance at 100 Hz becomes:",
    options: ["20 Ω", "5 Ω", "2.5 Ω", "3 Ω"],
    correctAnswer: 0,
    explanation: "XL is directly proportional to frequency. Doubling frequency doubles reactance: 10 → 20 Ω."
  },
  {
    id: "p12-ch16-15",
    question: "The basic circuit element in a D.C. Circuit which controlled the current and voltage is:",
    options: ["Transformer", "Resistor", "Inductor", "Transistor"],
    correctAnswer: 1,
    explanation: "In DC circuits, the resistor is the basic element that controls current and voltage."
  },
  {
    id: "p12-ch16-16",
    question: "The device which allows only the flow of D.C. is:",
    options: ["Generator", "Transformer", "Inductor", "Capacitor"],
    correctAnswer: 2,
    explanation: "An inductor has zero reactance for steady DC (f=0) but opposes AC."
  },
  {
    id: "p12-ch16-17",
    question: "Ohm is not a unit for:",
    options: ["Reactance", "Resistance", "Inductance", "Impedance"],
    correctAnswer: 2,
    explanation: "Inductance is measured in Henrys. Resistance, reactance, and impedance are all measured in Ohms."
  },
  {
    id: "p12-ch16-18",
    question: "In alternating current, ___ behave like resistors:",
    options: ["Inductors", "Capacitors", "Transformers", "Generators"],
    correctAnswer: 0,
    explanation: "Inductors provide constant opposition (XL) to a steady alternating current, behaving like resistors."
  },
  {
    id: "p12-ch16-19",
    question: "In R-L series circuit, phase angle is given by:",
    options: ["θ = tan⁻¹(ωRL)", "θ = tan⁻¹(R/ωL)", "θ = tan⁻¹(ωL/R)", "θ = tan⁻¹(1/ωRL)"],
    correctAnswer: 2,
    explanation: "Phase angle θ = tan⁻¹(XL/R) where XL = ωL."
  },
  {
    id: "p12-ch16-20",
    question: "In a series RC circuit, if R = 1/ωC, the power factor is:",
    options: ["√3/2", "1", "1/√2", "1/2"],
    correctAnswer: 2,
    explanation: "R = XC means Z = R√2. Power factor = R/Z = R/(R√2) = 1/√2."
  },
  {
    id: "p12-ch16-21",
    question: "Average output power of an AC generator for resistive load is ___ if peak current and voltage are I₀ & V₀ respectively:",
    options: ["V₀I₀", "V₀I₀/2", "Zero", "2V₀I₀"],
    correctAnswer: 1,
    explanation: "P = VrmsIrms = (V₀/√2)(I₀/√2) = V₀I₀/2."
  },
  {
    id: "p12-ch16-22",
    question: "In RLC Series Circuit, the condition for resonance is:",
    options: ["XL = XC", "XL > XC", "XL < XC", "XL = XC + R"],
    correctAnswer: 0,
    explanation: "At resonance, inductive reactance equals capacitive reactance: XL = XC."
  },
  {
    id: "p12-ch16-23",
    question: "At resonance frequency the impedance of RLC parallel circuit is:",
    options: ["Zero", "Infinite", "Minimum", "Maximum"],
    correctAnswer: 3,
    explanation: "In parallel RLC at resonance, branch currents cancel, impedance is maximum."
  },
  {
    id: "p12-ch16-24",
    question: "The capacitance required to construct a resonance circuit of frequency 1000 kHz with an inductor of 5 mH is:",
    options: ["5.09 pF", "5.09 μF", "5.09 mF", "5.09 KF"],
    correctAnswer: 0,
    explanation: "Using C = 1/(4π²fr²L) yields 5.09 pF."
  },
  {
    id: "p12-ch16-25",
    question: "The ___ work on the principle of beats:",
    options: ["DC motors", "Metal detectors", "Choke coils", "AC generators"],
    correctAnswer: 1,
    explanation: "Metal detectors use two LC oscillator circuits; a metal object changes inductance, creating a beat frequency."
  },
  {
    id: "p12-ch16-26",
    question: "___ charges produce electromagnetic waves:",
    options: ["Static", "Steadily moving", "Heavy", "Oscillating"],
    correctAnswer: 3,
    explanation: "Accelerating (oscillating) charges produce changing electric and magnetic fields, generating electromagnetic waves."
  }
];

// ========== CHAPTER 17: PHYSICS OF SOLIDS ==========
export const physics12Ch17MCQs: MCQ[] = [
  {
    id: "p12-ch17-1",
    question: "Addition of impurity of 3rd group in the semiconductor causes the production of:",
    options: ["Holes", "Protons", "Electrons", "Positron"],
    correctAnswer: 0,
    explanation: "A trivalent (3rd group) impurity creates a deficiency of one electron, producing a hole."
  },
  {
    id: "p12-ch17-2",
    question: "When silicon crystal is doped with a pentavalent impurity, the doped semi-conductor is:",
    options: ["n-type", "p-type", "Intrinsic", "Insulator"],
    correctAnswer: 0,
    explanation: "Pentavalent (5th group) impurity provides extra electrons, making it n-type semiconductor."
  },
  {
    id: "p12-ch17-3",
    question: "A Semi Conductor will behave as an Insulator at temperature:",
    options: ["0 K", "0°C", "10 K", "10°C"],
    correctAnswer: 0,
    explanation: "At absolute zero (0 K), all electrons are tightly bound and semiconductor acts as a perfect insulator."
  },
  {
    id: "p12-ch17-4",
    question: "In P-type substances, the minority charge carriers are:",
    options: ["Holes", "Protons", "Electrons", "Neutrons"],
    correctAnswer: 2,
    explanation: "In p-type, holes are majority carriers, making electrons the minority carriers."
  },
  {
    id: "p12-ch17-5",
    question: "In extrinsic semi-conductors, doping is of the order of:",
    options: ["1 atom to 10⁴", "1 atom to 10⁸", "1 atom to 10¹⁶", "1 atom to 10⁶"],
    correctAnswer: 3,
    explanation: "Doping is typically 1 impurity atom per million (10⁶) host atoms."
  },
  {
    id: "p12-ch17-6",
    question: "A moving hole is equivalent to a moving:",
    options: ["Proton", "Positive ion", "Positron", "Electron"],
    correctAnswer: 2,
    explanation: "A moving hole is equivalent to a moving positive charge (positron)."
  },
  {
    id: "p12-ch17-7",
    question: "The number of crystal systems are:",
    options: ["Three", "Five", "Fourteen", "Seven"],
    correctAnswer: 3,
    explanation: "There are seven crystal systems: Cubic, Tetragonal, Orthorhombic, Trigonal, Hexagonal, Monoclinic, Triclinic."
  },
  {
    id: "p12-ch17-8",
    question: "The crystalline structure of NaCl is:",
    options: ["Trigonal", "Cubical", "Tetragonal", "Hexagonal"],
    correctAnswer: 1,
    explanation: "NaCl has a cubic crystal structure."
  },
  {
    id: "p12-ch17-9",
    question: "In a cubical crystal, all the sides meet at:",
    options: ["Acute angle", "Obtuse angle", "Right angle", "45°"],
    correctAnswer: 2,
    explanation: "In a cubic crystal, all sides meet at right angles (90°)."
  },
  {
    id: "p12-ch17-10",
    question: "Which one of the following is a polymeric solid:",
    options: ["Glass", "Nylon", "Copper", "Zinc"],
    correctAnswer: 1,
    explanation: "Nylon is a polymer. Polythene, polystyrene, and nylon are examples of polymers."
  },
  {
    id: "p12-ch17-11",
    question: "Substances which break just after the elastic limit is reached are called ___ substances:",
    options: ["Brittle", "Non-magnetic", "Magnetic", "Ductile"],
    correctAnswer: 0,
    explanation: "Glass and high-carbon steel break just after the elastic limit—they are brittle substances."
  },
  {
    id: "p12-ch17-12",
    question: "Example of a Ductile Material is:",
    options: ["Glass", "Wood", "Lead", "Diamond"],
    correctAnswer: 2,
    explanation: "Lead, copper, and wrought iron undergo plastic deformation—they are ductile materials."
  },
  {
    id: "p12-ch17-13",
    question: "A ductile wire is stretched to double of its original length, percentage elongation is:",
    options: ["200%", "50%", "100%", "400%"],
    correctAnswer: 2,
    explanation: "If length becomes 2L, change = L. Percentage = (ΔL/L) × 100% = 100%."
  },
  {
    id: "p12-ch17-14",
    question: "Above the curie temperature iron is:",
    options: ["Paramagnetic", "Diamagnetic", "Ferromagnetic", "Remains same"],
    correctAnswer: 0,
    explanation: "Above Curie temperature (750°C for iron), thermal vibrations destroy domain ordering, making it paramagnetic."
  },
  {
    id: "p12-ch17-15",
    question: "Highest occupied band in solids is ___ band:",
    options: ["Conduction", "Forbidden", "Core", "Valence"],
    correctAnswer: 3,
    explanation: "The valence band is the highest energy band normally occupied by electrons at absolute zero."
  }
];

// ========== CHAPTER 18: ELECTRONICS ==========
export const physics12Ch18MCQs: MCQ[] = [
  {
    id: "p12-ch18-1",
    question: "In case of Silicon, the value of Potential Barrier is:",
    options: ["0.6 V", "0.7 V", "0.1 V", "0.3 V"],
    correctAnswer: 1,
    explanation: "Potential barrier is 0.7 V for silicon and 0.3 V for germanium."
  },
  {
    id: "p12-ch18-2",
    question: "When PN junction is conducting (forward biased), then its resistance is of the order of:",
    options: ["Mega Ohm", "Kilo Ohm", "100 Ohm", "Few Ohms"],
    correctAnswer: 3,
    explanation: "Forward resistance is only a few ohms when the PN junction is conducting."
  },
  {
    id: "p12-ch18-3",
    question: "In reverse biased PN junction, its resistance is:",
    options: ["Several mega ohms", "Zero", "Infinite", "Few ohms"],
    correctAnswer: 0,
    explanation: "When reverse biased, the junction offers very high resistance (several mega ohms)."
  },
  {
    id: "p12-ch18-4",
    question: "Semiconductor diode is an example of:",
    options: ["Super conductor", "Ohmic device", "Non ohmic device", "Ferromagnetic"],
    correctAnswer: 2,
    explanation: "A diode's V-I graph is not a straight line, so it doesn't obey Ohm's law (non-ohmic device)."
  },
  {
    id: "p12-ch18-5",
    question: "A P-N junction cannot be used as:",
    options: ["Amplifier", "Rectifier", "Detector", "LED"],
    correctAnswer: 0,
    explanation: "A single PN junction (diode) cannot amplify. Amplification requires a transistor (two junctions)."
  },
  {
    id: "p12-ch18-6",
    question: "In Full Wave Rectification, number of Diodes required are:",
    options: ["3", "5", "1", "4"],
    correctAnswer: 3,
    explanation: "Full-wave rectification uses a bridge arrangement of four diodes."
  },
  {
    id: "p12-ch18-7",
    question: "The circuit used for smoothing the pulsating voltage is called:",
    options: ["Resistor", "Filter", "Rectifier", "Grid"],
    correctAnswer: 1,
    explanation: "A filter circuit smooths the pulsating DC output of a rectifier."
  },
  {
    id: "p12-ch18-8",
    question: "The diode in a half wave rectifier conducts for ___ during a complete AC cycle:",
    options: ["90°", "180°", "360°", "45°"],
    correctAnswer: 1,
    explanation: "In half-wave rectification, the diode conducts only during positive half cycle (180°)."
  },
  {
    id: "p12-ch18-9",
    question: "A diode can be used as:",
    options: ["Amplifier", "Rectifier", "Oscillator", "Transistor"],
    correctAnswer: 1,
    explanation: "Semiconductor diodes are extensively used for rectification (AC to DC conversion)."
  },
  {
    id: "p12-ch18-10",
    question: "Switching time of a photo diode is in:",
    options: ["10⁻⁹ s", "10⁻⁴ s", "10⁻⁶ s", "10⁻¹⁵ s"],
    correctAnswer: 0,
    explanation: "A photo diode can switch ON and OFF in nanoseconds (10⁻⁹ s)."
  },
  {
    id: "p12-ch18-11",
    question: "Which Diode works at Reverse Biasing:",
    options: ["LED", "Photo-Voltaic Cell", "Photodiode", "Silicon Diode"],
    correctAnswer: 2,
    explanation: "A photo diode operates in reverse biased condition for light detection."
  },
  {
    id: "p12-ch18-12",
    question: "Light emitting diodes (LEDs) are made from semiconductors:",
    options: ["Silicon", "Germanium", "Gallium arsenide", "Carbon"],
    correctAnswer: 2,
    explanation: "LEDs are made from gallium arsenide and gallium arsenide phosphide."
  },
  {
    id: "p12-ch18-13",
    question: "In photo voltaic cell current is directly proportional to:",
    options: ["Wavelength of light", "Energy", "Frequency of light", "Intensity of light"],
    correctAnswer: 3,
    explanation: "In a photovoltaic cell, current is proportional to the intensity of light."
  },
  {
    id: "p12-ch18-14",
    question: "A combination of two back to back PN junctions is:",
    options: ["Operational amplifier", "Digital gate", "Transistor", "Photo diode"],
    correctAnswer: 2,
    explanation: "A transistor consists of two back-to-back PN junctions (emitter-base and collector-base)."
  },
  {
    id: "p12-ch18-15",
    question: "The width of central region (base) of a transistor is:",
    options: ["10⁻⁴ m", "10⁻⁶ m", "10⁻³ m", "10⁻⁹ m"],
    correctAnswer: 1,
    explanation: "The base is very thin, of the order of 10⁻⁶ m."
  },
  {
    id: "p12-ch18-16",
    question: "The value of voltage gain of a transistor amplifier (common emitter) is of the order of:",
    options: ["Thousands", "Millions", "Fraction", "Hundreds"],
    correctAnswer: 3,
    explanation: "Voltage gain (Av = β × Rc/rie) typically lies in the hundreds."
  },
  {
    id: "p12-ch18-17",
    question: "The relation for the gain of an inverting amplifier is:",
    options: ["G = R₁/R₂", "G = R₂/R₁", "G = -R₂/R₁", "G = -R₁/R₂"],
    correctAnswer: 2,
    explanation: "Inverting amplifier gain G = -R₂/R₁. The negative sign indicates 180° phase shift."
  },
  {
    id: "p12-ch18-18",
    question: "Due to high open loop gain, a small potential difference at input ___ output voltage of operational amplifier:",
    options: ["Diminishes", "Fluctuates", "Saturates", "Oscillates"],
    correctAnswer: 2,
    explanation: "Very high open loop gain (10⁵) means even tiny input saturates the output to ±Vcc."
  },
  {
    id: "p12-ch18-19",
    question: "The output resistance of an operational amplifier is:",
    options: ["High", "Low", "Zero", "Equal to input resistance"],
    correctAnswer: 1,
    explanation: "An op-amp has very high input resistance and very low output resistance."
  },
  {
    id: "p12-ch18-20",
    question: "The Voltage Gain of an Amplifier having rie = 1Ω, β = 100, Rc = 20Ω is:",
    options: ["1000", "2000", "500", "5000"],
    correctAnswer: 1,
    explanation: "Av = β × Rc/rie = 100 × 20/1 = 2000."
  },
  {
    id: "p12-ch18-21",
    question: "The Boolean expression of NAND gate is:",
    options: ["X = A.B", "X = Ā", "X = A̅.̅B̅", "X = A+B"],
    correctAnswer: 2,
    explanation: "NAND gate is an AND gate followed by NOT: output = NOT(A.B)."
  },
  {
    id: "p12-ch18-22",
    question: "The output of a two inputs OR gate is 0 only when its:",
    options: ["Both inputs are 0", "Either input is 1", "Both inputs are 1", "One input is 0"],
    correctAnswer: 0,
    explanation: "OR gate outputs 1 if any input is 1. Output is 0 only when both inputs are 0."
  },
  {
    id: "p12-ch18-23",
    question: "The Boolean equation for exclusive NOR (XNOR) gate is:",
    options: ["X = A.B + B̄.Ā", "X = A.B + Ā.B̄", "X = A+B", "X = Ā.B̄"],
    correctAnswer: 1,
    explanation: "XNOR gives HIGH when both inputs are identical: X = A.B + Ā.B̄."
  }
];

// ========== CHAPTER 19: DAWN OF MODERN PHYSICS ==========
export const physics12Ch19MCQs: MCQ[] = [
  {
    id: "p12-ch19-1",
    question: "A black body is both an ideal absorber and an ideal:",
    options: ["Reflector", "Radiator", "Conductor", "Insulator"],
    correctAnswer: 1,
    explanation: "A black body absorbs all radiation and is also an ideal radiator of energy."
  },
  {
    id: "p12-ch19-2",
    question: "Mathematical form of Stefan-Boltzmann law is:",
    options: ["E = hf", "E = mc²", "E = σT⁴", "E = σT⁶"],
    correctAnswer: 2,
    explanation: "Stefan-Boltzmann law: total energy radiated is proportional to the fourth power of temperature."
  },
  {
    id: "p12-ch19-3",
    question: "Planck's constant has the unit of:",
    options: ["Linear momentum", "Angular momentum", "Torque", "Force"],
    correctAnswer: 1,
    explanation: "Planck's constant h has unit J·s, which is dimensionally equivalent to angular momentum (kg·m²/s)."
  },
  {
    id: "p12-ch19-4",
    question: "The value of Planck's constant h is:",
    options: ["6.63 × 10⁻³⁴ Js", "6.63 × 10⁻³⁴ Js⁻¹", "6.63 × 10⁻³⁴ Js²", "6.63 × 10⁻³⁴ Js⁻²"],
    correctAnswer: 0,
    explanation: "Planck's constant h = 6.63 × 10⁻³⁴ Joule-seconds."
  },
  {
    id: "p12-ch19-5",
    question: "Wavelength of radiations emitted from a thermal object depends only on:",
    options: ["Temperature", "Colour of surface", "Size of surface", "Nature of surface"],
    correctAnswer: 0,
    explanation: "The wavelength distribution of radiation from a thermal object depends only on its temperature."
  },
  {
    id: "p12-ch19-6",
    question: "The materialization of energy takes place in the process of:",
    options: ["Photoelectric effect", "Compton's effect", "Pair production", "Pair annihilation"],
    correctAnswer: 2,
    explanation: "Pair production converts a high-energy photon into an electron-positron pair (energy → mass)."
  },
  {
    id: "p12-ch19-7",
    question: "The energy required for pair production is:",
    options: ["0.51 MeV", "1.02 MeV", "2.04 MeV", "3.06 MeV"],
    correctAnswer: 1,
    explanation: "Minimum energy = rest mass of electron + positron = 0.51 + 0.51 = 1.02 MeV."
  },
  {
    id: "p12-ch19-8",
    question: "Compton effect is associated with:",
    options: ["Gamma rays", "Beta rays", "X-rays", "Positive rays"],
    correctAnswer: 2,
    explanation: "Arthur Compton studied the scattering of X-rays by loosely bound electrons."
  },
  {
    id: "p12-ch19-9",
    question: "Compton wavelength is:",
    options: ["h/m₀c²", "hc/m₀", "h/m₀c", "hc²/m₀"],
    correctAnswer: 2,
    explanation: "Compton wavelength = h/(m₀c), where m₀ is electron rest mass."
  },
  {
    id: "p12-ch19-10",
    question: "The factor h/m₀c has the unit of:",
    options: ["Kilogram", "Second", "Meter", "Joule"],
    correctAnswer: 2,
    explanation: "h/(m₀c) is the Compton wavelength, so its unit is meter."
  },
  {
    id: "p12-ch19-11",
    question: "The factor h/m₀c² has the unit of:",
    options: ["Second square", "Second", "J.S.", "JS⁻¹"],
    correctAnswer: 1,
    explanation: "m₀c² is energy (E), so h/E = h/(hf) = 1/f = time. Unit is seconds."
  },
  {
    id: "p12-ch19-12",
    question: "The observations on objects moving very fast, approaching the speed of light, are well explained by:",
    options: ["Quantum theory", "Newton's law", "Special theory of relativity", "Kepler's law"],
    correctAnswer: 2,
    explanation: "Special theory of relativity explains phenomena at speeds approaching the speed of light."
  },
  {
    id: "p12-ch19-13",
    question: "No inertial frame of reference is preferred over another inertial frame:",
    options: ["False", "True", "True for static frames", "True for dynamic frames"],
    correctAnswer: 1,
    explanation: "First postulate of Special Relativity: laws of physics are the same in all inertial frames."
  },
  {
    id: "p12-ch19-14",
    question: "The velocity at which relativistic length of a body reduces to half of its original length is:",
    options: ["½c", "(√3/2)c", "¾c", "(1/√2)c"],
    correctAnswer: 1,
    explanation: "L = L₀√(1-v²/c²). If L = ½L₀, then ¼ = 1 - v²/c², so v = (√3/2)c."
  },
  {
    id: "p12-ch19-15",
    question: "A rod of length l₀ in a stationary frame is accelerated at speed of light. Its length measured perpendicular to its direction of motion is:",
    options: ["l₀/2", "Zero", "l₀", "2l₀"],
    correctAnswer: 2,
    explanation: "Length contraction occurs only along the direction of motion. Perpendicular dimensions remain unchanged."
  },
  {
    id: "p12-ch19-16",
    question: "Using relativistic effects, the location of an aircraft after an hour flight can be predicted about:",
    options: ["20 m", "760 m", "50 m", "780 m"],
    correctAnswer: 2,
    explanation: "NAVSTAR system with relativistic corrections allows prediction to about 50 meters."
  },
  {
    id: "p12-ch19-17",
    question: "Wave behaviour of matter is prominent at ___ level:",
    options: ["Macroscopic", "Mega structure", "Microscopic", "Any object size"],
    correctAnswer: 2,
    explanation: "Wave properties are only observable for micro-particles like electrons, protons, and photons."
  }
];

// ========== CHAPTER 20: ATOMIC SPECTRA ==========
export const physics12Ch20MCQs: MCQ[] = [
  {
    id: "p12-ch20-1",
    question: "Photons emitted in the inner shell transition are:",
    options: ["Continuous X-rays", "Gamma Rays", "Characteristic X-rays", "Energetic X-rays"],
    correctAnswer: 2,
    explanation: "Inner shell transitions produce characteristic X-rays with specific energies."
  },
  {
    id: "p12-ch20-2",
    question: "The orbital electron has:",
    options: ["Fixed energy", "3.4 eV energy", "Any amount of energy", "Infinite energy"],
    correctAnswer: 0,
    explanation: "According to Bohr's model, electrons in orbits have specific, fixed energy values."
  },
  {
    id: "p12-ch20-3",
    question: "The energy of ___ electrons is specific:",
    options: ["Free", "Orbital", "Oscillating", "Accelerated"],
    correctAnswer: 1,
    explanation: "Bound (orbital) electrons exist in quantized energy states with specific energies."
  },
  {
    id: "p12-ch20-4",
    question: "Energy of electron in the infinite orbit of hydrogen atom is:",
    options: ["13.6 eV", "-13.6 eV", "3.4 eV", "Zero"],
    correctAnswer: 3,
    explanation: "As n → ∞, En = -13.6/n² → 0. This represents a completely free electron."
  },
  {
    id: "p12-ch20-5",
    question: "If ionization energy of hydrogen atom is E₀, the energy required to remove electron from hydrogen in state n = 4 is:",
    options: ["E₀/4", "4E₀", "E₀/16", "Zero"],
    correctAnswer: 2,
    explanation: "En = -E₀/n². For n = 4: binding energy = E₀/16."
  },
  {
    id: "p12-ch20-6",
    question: "Balmer series lies in the region of electromagnetic spectrum:",
    options: ["Infra-red", "Visible", "Ultraviolet", "Far infrared"],
    correctAnswer: 1,
    explanation: "Balmer series (transitions to n=2) emits photons in the visible light spectrum."
  },
  {
    id: "p12-ch20-7",
    question: "For Lyman series, longest wavelength is emitted when n =:",
    options: ["1", "2", "∞", "5"],
    correctAnswer: 1,
    explanation: "Longest wavelength = lowest energy transition. For Lyman (to n=1), smallest gap is from n=2."
  },
  {
    id: "p12-ch20-8",
    question: "An electron in H-atom is excited from ground state to n = 4, how many spectral lines are possible:",
    options: ["3", "4", "5", "6"],
    correctAnswer: 3,
    explanation: "Possible transitions: (4→3), (4→2), (4→1), (3→2), (3→1), (2→1) = 6 lines."
  },
  {
    id: "p12-ch20-9",
    question: "In electronic transition, atom cannot emit:",
    options: ["Infrared radiations", "Visible radiations", "Gamma radiations", "Ultraviolet radiations"],
    correctAnswer: 2,
    explanation: "Gamma radiations are emitted from the nucleus, not from electron transitions."
  },
  {
    id: "p12-ch20-10",
    question: "Normally an electron can reside in a metastable state for about:",
    options: ["10⁻⁸ s", "10⁻⁶ s", "10⁻⁴ s", "10⁻³ s"],
    correctAnswer: 3,
    explanation: "Metastable states last about 10⁻³ seconds, essential for population inversion in lasers."
  },
  {
    id: "p12-ch20-11",
    question: "Metastable state is ___ than normal excited state:",
    options: ["10⁵ times larger (longer)", "10⁸ times smaller", "10³ times smaller", "10⁵ times larger"],
    correctAnswer: 0,
    explanation: "Normal excited state: 10⁻⁸ s. Metastable: 10⁻³ s. Ratio = 10⁵ times longer."
  },
  {
    id: "p12-ch20-12",
    question: "Helium-Neon laser discharge tube contains Helium:",
    options: ["10%", "15%", "25%", "85%"],
    correctAnswer: 3,
    explanation: "He-Ne laser mixture is approximately 85% Helium and 15% Neon."
  },
  {
    id: "p12-ch20-13",
    question: "Helium-Neon Laser discharge tube contains Neon:",
    options: ["85%", "80%", "30%", "15%"],
    correctAnswer: 3,
    explanation: "The gas mixture is 15% Neon and 85% Helium."
  }
];

// ========== CHAPTER 21: NUCLEAR PHYSICS ==========
export const physics12Ch21MCQs: MCQ[] = [
  {
    id: "p12-ch21-1",
    question: "A pair of quark and antiquark makes a:",
    options: ["Meson", "Hadron", "Lepton", "Baryon"],
    correctAnswer: 0,
    explanation: "A meson is composed of a quark-antiquark pair."
  },
  {
    id: "p12-ch21-2",
    question: "Electrons are:",
    options: ["Hadrons", "Leptons", "Quarks", "Baryons"],
    correctAnswer: 1,
    explanation: "Electrons belong to the lepton family of elementary particles."
  },
  {
    id: "p12-ch21-3",
    question: "Which group belongs to Hadrons?",
    options: ["Protons and neutrons", "Mesons and neutrinos", "Photons and electrons", "Positrons and electrons"],
    correctAnswer: 0,
    explanation: "Protons and neutrons are hadrons (composed of quarks)."
  },
  {
    id: "p12-ch21-4",
    question: "A proton consists of quarks which are:",
    options: ["All up", "One up, two down", "Two up, one down", "All down"],
    correctAnswer: 2,
    explanation: "A proton is made of two up quarks and one down quark (uud)."
  },
  {
    id: "p12-ch21-5",
    question: "Positron was first discovered in:",
    options: ["Cosmic rays", "Magnetosphere", "Gamma ray bursts", "Earth's crust"],
    correctAnswer: 0,
    explanation: "The positron was first discovered in cosmic rays."
  },
  {
    id: "p12-ch21-6",
    question: "The amount of energy released by conversion of 1 amu of mass is:",
    options: ["1.6 × 10⁻¹⁹ eV", "9.315 MeV", "931.5 MeV", "211.5 MeV"],
    correctAnswer: 2,
    explanation: "1 amu = 931.5 MeV (using E = mc²)."
  },
  {
    id: "p12-ch21-7",
    question: "0.1 Kg mass will be equivalent to the energy:",
    options: ["5 × 10⁸ J", "6 × 10¹⁹ J", "9 × 10¹⁵ J", "9 × 10¹⁹ J"],
    correctAnswer: 2,
    explanation: "E = mc² = 0.1 × (3 × 10⁸)² = 9 × 10¹⁵ J."
  },
  {
    id: "p12-ch21-8",
    question: "Binding Energy for deuteron nucleus is given by:",
    options: ["2.8 MeV", "2.23 MeV", "2.28 MeV", "2.25 MeV"],
    correctAnswer: 1,
    explanation: "The binding energy of deuteron is 2.23 MeV."
  },
  {
    id: "p12-ch21-9",
    question: "The binding energy per nucleon is maximum for:",
    options: ["Uranium", "Platinum", "Hydrogen", "Iron"],
    correctAnswer: 3,
    explanation: "Iron has the highest binding energy per nucleon, making it the most stable nucleus."
  },
  {
    id: "p12-ch21-10",
    question: "Energy required to remove all nucleons from nuclide of ___ is maximum:",
    options: ["Fe-58", "U-235", "Ba-141", "H-2"],
    correctAnswer: 1,
    explanation: "Uranium has the highest total binding energy due to its large number of nucleons."
  },
  {
    id: "p12-ch21-11",
    question: "One twelfth of mass of ¹²₆C isotope is equal to:",
    options: ["0.0055 u", "1 u", "1.008665 u", "3.016 u"],
    correctAnswer: 1,
    explanation: "By definition, 1 atomic mass unit (u) = 1/12 the mass of Carbon-12."
  },
  {
    id: "p12-ch21-12",
    question: "The S.I unit of radiation dose is:",
    options: ["Roentgen", "Curie", "Grey", "Rem"],
    correctAnswer: 2,
    explanation: "Grey (Gy) is the SI unit of absorbed radiation dose."
  },
  {
    id: "p12-ch21-13",
    question: "The quantity called the absorbed dose 'D' is:",
    options: ["M × E", "E/m", "m/E", "E/C"],
    correctAnswer: 1,
    explanation: "Absorbed dose D = Energy absorbed per unit mass (E/m)."
  },
  {
    id: "p12-ch21-14",
    question: "Most penetrating among the followings are:",
    options: ["Alpha rays", "Beta rays", "Neutrons", "Gamma rays"],
    correctAnswer: 3,
    explanation: "Gamma rays are the most penetrating and are not deflected by magnetic fields."
  },
  {
    id: "p12-ch21-15",
    question: "Alpha particle carries a charge of:",
    options: ["+2e", "-2e", "+e", "Zero"],
    correctAnswer: 0,
    explanation: "Alpha particle (helium nucleus) has 2 protons, so charge = +2e."
  },
  {
    id: "p12-ch21-16",
    question: "The ratio of decayed fraction to undecayed fraction after 3 half-lives is:",
    options: ["1/8", "7/8", "7/1", "1/1"],
    correctAnswer: 2,
    explanation: "After 3 half-lives: 1/8 remains, 7/8 decayed. Ratio = (7/8)/(1/8) = 7/1."
  },
  {
    id: "p12-ch21-17",
    question: "Half life of iodine-131 is 8 days and it weighs 20 mg. After 4 half lives, the amount left behind will be:",
    options: ["2.5 mg", "1.25 mg", "0.625 mg", "0.312 mg"],
    correctAnswer: 1,
    explanation: "20 × (1/2)⁴ = 20/16 = 1.25 mg."
  },
  {
    id: "p12-ch21-18",
    question: "Cobalt-60 is the source for:",
    options: ["α-rays", "γ-rays", "β-rays", "Neutron"],
    correctAnswer: 1,
    explanation: "Cobalt-60 is a common source of gamma radiation."
  },
  {
    id: "p12-ch21-19",
    question: "The force which is responsible for the breaking up of the radioactive elements is:",
    options: ["Strong nuclear force", "Gravitational force", "Electromagnetic force", "Weak nuclear force"],
    correctAnswer: 3,
    explanation: "Weak nuclear force is responsible for radioactive decay (beta decay)."
  },
  {
    id: "p12-ch21-20",
    question: "Slow Neutrons can cause Fission in:",
    options: ["Uranium-235", "Uranium-238", "Plutonium-239", "Thorium-234"],
    correctAnswer: 0,
    explanation: "Uranium-235 is fissile and can undergo fission with slow (thermal) neutrons."
  },
  {
    id: "p12-ch21-21",
    question: "Energy given out per nucleon per fission of heavy element like uranium is:",
    options: ["200 MeV", "208 MeV", "5 MeV", "0.9 MeV"],
    correctAnswer: 3,
    explanation: "Total energy ~200 MeV divided by 235 nucleons ≈ 0.9 MeV per nucleon."
  },
  {
    id: "p12-ch21-22",
    question: "In reaction ²₁H + ³₁H → ⁴₂He + X + 17.6 MeV, X will be:",
    options: ["Proton", "Electron", "Neutron", "α particle"],
    correctAnswer: 2,
    explanation: "By conservation of mass and charge: X must be a neutron (¹₀n)."
  },
  {
    id: "p12-ch21-23",
    question: "The bombardment of nitrogen with α-particle will produce:",
    options: ["Neutron", "Proton", "Electron", "Positron"],
    correctAnswer: 1,
    explanation: "Rutherford's experiment: ¹⁴N + ⁴He → ¹⁷O + ¹H (proton)."
  },
  {
    id: "p12-ch21-24",
    question: "A device that shows the visible path of ionizing particle is called:",
    options: ["G.M. counter", "Solid detector", "Scalar", "Wilson Cloud Chamber"],
    correctAnswer: 3,
    explanation: "Wilson Cloud Chamber shows visible tracks/paths of ionizing particles."
  },
  {
    id: "p12-ch21-25",
    question: "The dead time for Geiger-Muller counter is:",
    options: ["10⁻⁴ s", "10 s", "10⁻² s", "10⁻³ s"],
    correctAnswer: 0,
    explanation: "The dead time of a GM counter is approximately 10⁻⁴ seconds."
  },
  {
    id: "p12-ch21-26",
    question: "What is difference in isotopes:",
    options: ["Number of electron", "Number of proton", "Charge number", "Number of neutron"],
    correctAnswer: 3,
    explanation: "Isotopes have the same number of protons but different number of neutrons."
  },
  {
    id: "p12-ch21-27",
    question: "Most stable isotope among the followings is:",
    options: ["Fe-58", "U-235", "Pu-239", "Pb-82"],
    correctAnswer: 0,
    explanation: "Iron isotopes are the most stable due to highest binding energy per nucleon."
  }
];

// ========== CHAPTER 22: TRICKY MCQs – INFO BOXES & SIDE DATA ==========
export const physics12Ch22MCQs: MCQ[] = [
  {
    id: "p12-ch22-1",
    question: "During danger the 'eel' turns itself into a living battery. The potential difference between its head and tail can be up to:",
    options: ["600 V", "440 V", "220 V", "160 V"],
    correctAnswer: 0,
    explanation: "From Chapter 12 'Do You Know?' side-box: an electric eel can produce up to 600 V."
  },
  {
    id: "p12-ch22-2",
    question: "A device used to detect very weak magnetic fields produced by brain is named as:",
    options: ["MRI", "CAT Scans", "SQUIDs", "C.R.O"],
    correctAnswer: 2,
    explanation: "SQUIDs (Superconducting Quantum Interference Devices) detect extremely weak magnetic fields, including those from brain activity."
  },
  {
    id: "p12-ch22-3",
    question: "High temperature superconductors have a critical temperature greater than:",
    options: ["52 K", "77 K", "125 K", "163 K"],
    correctAnswer: 1,
    explanation: "High-temperature superconductors are defined as having a critical temperature above 77 K (the boiling point of liquid nitrogen)."
  },
  {
    id: "p12-ch22-4",
    question: "Size of quark is of the order of:",
    options: ["Less than 10⁻¹⁵ m", "Less than 10⁻¹⁰ m", "Less than 10⁻⁹ m", "Less than 10⁻¹⁸ m"],
    correctAnswer: 3,
    explanation: "Quarks are point-like particles with an upper size limit of about 10⁻¹⁸ m."
  },
  {
    id: "p12-ch22-5",
    question: "The relation between Tesla and smaller unit Gauss of Magnetic Induction is:",
    options: ["1 T = 10³ G", "1 T = 10⁶ G", "1 T = 10² G", "1 T = 10⁴ G"],
    correctAnswer: 3,
    explanation: "1 Tesla = 10⁴ Gauss. This conversion factor is from the 'For Your Information' box."
  },
  {
    id: "p12-ch22-6",
    question: "If there is a single black colour band around the body of a resistor, then the value of its resistance will be:",
    options: ["Zero ohm", "10 ohm", "100 ohm", "Infinity"],
    correctAnswer: 0,
    explanation: "A single black band indicates a zero-ohm resistor (jumper wire). Black = 0 in the colour code."
  },
  {
    id: "p12-ch22-7",
    question: "Baryon with combination of up, up and up quark has charge:",
    options: ["1 e", "2 e", "−1 e", "−2 e"],
    correctAnswer: 1,
    explanation: "Each up quark has charge +2/3 e. Three up quarks: 3 × (2/3) = +2e."
  },
  {
    id: "p12-ch22-8",
    question: "'Eddy currents' are set up in a direction:",
    options: ["Parallel to flux", "Anti-parallel to flux", "At 45° to flux", "Perpendicular to the flux"],
    correctAnswer: 3,
    explanation: "Eddy currents flow in closed loops perpendicular to the magnetic flux passing through the conductor."
  }
];

// ========== CHAPTER 23: TRICKY MCQs – NUMERICAL & CONCEPTUAL ==========
export const physics12Ch23MCQs: MCQ[] = [
  {
    id: "p12-ch23-1",
    question: "A one coulomb charge of mass one gram is in electric field of 1 NC⁻¹. The acceleration will be:",
    options: ["100 ms⁻²", "1000 ms⁻²", "1 ms⁻²", "10 ms⁻²"],
    correctAnswer: 1,
    explanation: "a = qE/m = (1)(1)/(10⁻³) = 1000 ms⁻². Remember to convert 1 gram = 10⁻³ kg."
  },
  {
    id: "p12-ch23-2",
    question: "A wire of length l and resistance R is cut into three equal pieces and twisted together. Equivalent resistance will be:",
    options: ["R", "R/3", "R/9", "R/4"],
    correctAnswer: 2,
    explanation: "Each piece has resistance R/3. Three pieces in parallel: 1/Req = 3/(R/3) = 9/R, so Req = R/9."
  },
  {
    id: "p12-ch23-3",
    question: "A 3 kΩ resistor is connected in series with a capacitor of capacitance 2 mF. The time constant is:",
    options: ["1 sec", "5 sec", "6 sec", "1.33 sec"],
    correctAnswer: 2,
    explanation: "τ = RC = 3000 × 2 × 10⁻³ = 6 seconds."
  },
  {
    id: "p12-ch23-4",
    question: "Heat generated by a 50 watt bulb in one hour is:",
    options: ["36000 J", "48000 J", "18000 J", "180000 J"],
    correctAnswer: 3,
    explanation: "E = P × t = 50 × 3600 = 180,000 J."
  },
  {
    id: "p12-ch23-5",
    question: "A rod of unit length moves at 30° through a magnetic field of 1 T. If velocity is 1 m/s, the induced emf is:",
    options: ["1 V", "0.25 V", "0.5 V", "0.6 V"],
    correctAnswer: 2,
    explanation: "ε = vBL sin θ = (1)(1)(1) sin 30° = 0.5 V."
  },
  {
    id: "p12-ch23-6",
    question: "If 300 turns of wire are wound on 30 cm length, then number of turns per unit length is:",
    options: ["10", "20", "100", "1000"],
    correctAnswer: 3,
    explanation: "n = N/L = 300/0.3 = 1000 turns per meter."
  },
  {
    id: "p12-ch23-7",
    question: "A charge of 4 C is in the field of intensity 4 N/C. The force on charge is:",
    options: ["1 N", "4 N", "8 N", "16 N"],
    correctAnswer: 3,
    explanation: "F = qE = 4 × 4 = 16 N."
  },
  {
    id: "p12-ch23-8",
    question: "If the distance between two point charges is halved, the Electric Intensity becomes:",
    options: ["Half", "1/4 Times", "4 Times", "Double"],
    correctAnswer: 2,
    explanation: "E ∝ 1/r². If r becomes r/2, then E becomes 4 times larger (inverse square law)."
  }
];

