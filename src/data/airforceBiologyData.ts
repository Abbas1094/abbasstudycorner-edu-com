// Pakistan Air Force Biology Test Preparation Data
// 8 Chapters with Notes and 200 MCQs (25 per chapter)

import { ChapterWithNotes } from "@/data/airforcePhysicsData";
import { MCQ } from "@/data/chemistryData";

// Chapter 1: Introduction to Biology
const chapter1MCQs: MCQ[] = [
  { id: 1, question: "The word 'Biology' is derived from which language?", options: ["Latin", "Greek", "French", "Arabic"], correctAnswer: 1, explanation: "Biology comes from Greek words 'Bios' (Life) and 'Logos' (Study/Reasoning)." },
  { id: 2, question: "The microscopic study of tissues is called:", options: ["Morphology", "Anatomy", "Histology", "Cell Biology"], correctAnswer: 2, explanation: "Histology is the study of tissues under a microscope." },
  { id: 3, question: "The author of the famous book 'Al-Qanun fi al-Tib' is:", options: ["Jabir Bin Hayan", "Bu Ali Sina", "Abdul Malik Asmai", "Al-Razi"], correctAnswer: 1, explanation: "Bu Ali Sina (Avicenna) wrote the Canon of Medicine." },
  { id: 4, question: "A tentative explanation of observations is called:", options: ["Deduction", "Theory", "Law", "Hypothesis"], correctAnswer: 3, explanation: "A hypothesis is a proposed explanation that can be tested." },
  { id: 5, question: "Deductions always involve the use of logic:", options: ["'Why... Because'", "'If... Then'", "'How... When'", "None of these"], correctAnswer: 1, explanation: "Deductions use 'If... Then' conditional logic." },
  { id: 6, question: "The percentage of insects among the total known species of organisms is:", options: ["19.9%", "17.6%", "53.1%", "25.5%"], correctAnswer: 2, explanation: "Insects make up over half of all known species." },
  { id: 7, question: "Who introduced the technique of Vaccination in 1795/1796?", options: ["Louis Pasteur", "Robert Koch", "Edward Jenner", "Robert Hooke"], correctAnswer: 2, explanation: "Edward Jenner developed the first vaccine for smallpox." },
  { id: 8, question: "The study of fossils is known as:", options: ["Paleontology", "Pharmacology", "Immunology", "Entomology"], correctAnswer: 0, explanation: "Paleontology studies extinct organisms through fossils." },
  { id: 9, question: "Which one is an irrefutable (undeniable) biological fact?", options: ["Hypothesis", "Theory", "Law", "Deduction"], correctAnswer: 2, explanation: "A scientific law is an established fact supported by extensive evidence." },
  { id: 10, question: "Approximately how many kinds of species are known to science?", options: ["1.5 Million", "2.5 Million", "3.5 Million", "4.5 Million"], correctAnswer: 1, explanation: "About 2.5 million species have been identified." },
  { id: 11, question: "The study of the functions of different parts of living organisms is called:", options: ["Anatomy", "Morphology", "Physiology", "Genetics"], correctAnswer: 2, explanation: "Physiology studies how organisms function." },
  { id: 12, question: "In 1997, scientists in Scotland succeeded in cloning a:", options: ["Cow", "Goat", "Sheep", "Cat"], correctAnswer: 2, explanation: "Dolly the sheep was the first mammal cloned from an adult cell." },
  { id: 13, question: "Scientific knowledge is based on:", options: ["Beliefs", "Experimental Inquiry", "Philosophy", "History"], correctAnswer: 1, explanation: "Science relies on experiments and evidence." },
  { id: 14, question: "Which bio-element is the most abundant in the human body?", options: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"], correctAnswer: 2, explanation: "Oxygen makes up about 65% of body mass." },
  { id: 15, question: "Members of the same species living in the same place at the same time form a:", options: ["Habitat", "Biosphere", "Community", "Population"], correctAnswer: 3, explanation: "A population is a group of same-species organisms in one area." },
  { id: 16, question: "Which scientist is famous for his work on animals (Horses, Camels, etc.)?", options: ["Bu Ali Sina", "Abdul Malik Asmai", "Jabir Bin Hayan", "Ibn-Nafees"], correctAnswer: 1, explanation: "Abdul Malik Asmai wrote extensively about animals." },
  { id: 17, question: "The study of parasites and their relationship with hosts is called:", options: ["Entomology", "Parasitology", "Microbiology", "Social Biology"], correctAnswer: 1, explanation: "Parasitology studies parasites and host-parasite relationships." },
  { id: 18, question: "Quantitative observations are considered better than qualitative ones because they are:", options: ["Variable", "Measurable and Invariable", "Based on feelings", "Less accurate"], correctAnswer: 1, explanation: "Quantitative data can be measured precisely and compared." },
  { id: 19, question: "Bio-remediation (removing pollutants) is often done using:", options: ["Algae / Bacteria", "Viruses", "Insects", "Birds"], correctAnswer: 0, explanation: "Microorganisms like algae and bacteria can break down pollutants." },
  { id: 20, question: "The basic unit of classification in biology is:", options: ["Family", "Genus", "Order", "Species"], correctAnswer: 3, explanation: "Species is the fundamental unit of biological classification." },
  { id: 21, question: "'The basic unit of life' refers to:", options: ["Tissue", "Organ", "Cell", "Atom"], correctAnswer: 2, explanation: "The cell is the smallest unit of life." },
  { id: 22, question: "Which career deals with the diagnosis and treatment of diseases in humans?", options: ["Agriculture", "Horticulture", "Medicine/Surgery", "Forestry"], correctAnswer: 2, explanation: "Medicine and surgery focus on human health and treatment." },
  { id: 23, question: "A hypothesis that stands the test of time and is supported by evidence becomes a:", options: ["Law", "Theory", "Deduction", "Observation"], correctAnswer: 1, explanation: "A well-supported hypothesis becomes a theory." },
  { id: 24, question: "The study of viruses (like Polio, Corona) comes under:", options: ["Bacteriology", "Virology (Microbiology)", "Mycology", "Anatomy"], correctAnswer: 1, explanation: "Virology is the study of viruses." },
  { id: 25, question: "Which element is found in all organic compounds?", options: ["Iron", "Calcium", "Carbon", "Sodium"], correctAnswer: 2, explanation: "Carbon is the backbone of all organic molecules." }
];

const chapter1Notes = [
  "**Biology** = Greek: Bios (Life) + Logos (Study)",
  "**Three Major Divisions**: Zoology (Animals), Botany (Plants), Microbiology (Microorganisms)",
  "**Histology** = Microscopic study of tissues (Most Repeated!)",
  "**Scientific Method**: Observation → Hypothesis → Deduction → Experiment → Theory → Law",
  "**Hypothesis** = Tentative explanation; **Theory** = Well-tested hypothesis; **Law** = Irrefutable fact",
  "**Bu Ali Sina** wrote 'Al-Qanun fi al-Tib' (Canon of Medicine)",
  "**Edward Jenner** developed Vaccination (1795/1796)",
  "**Ian Wilmut** cloned sheep Dolly (1997, Scotland)",
  "**Total known species**: 2.5 Million; **Insects**: 53.1%",
  "**Oxygen** is most abundant element in human body (65%)"
];

// Chapter 2: Cell Biology
const chapter2MCQs: MCQ[] = [
  { id: 26, question: "The 'Powerhouse of the Cell' is called:", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"], correctAnswer: 1, explanation: "Mitochondria produce ATP, the energy currency of cells." },
  { id: 27, question: "Cell was discovered by:", options: ["Robert Brown", "Robert Hooke", "Schwann", "Darwin"], correctAnswer: 1, explanation: "Robert Hooke discovered cells in cork in 1665." },
  { id: 28, question: "The cell theory was presented by:", options: ["Watson & Crick", "Schleiden & Schwann", "Hooke & Brown", "Mendel"], correctAnswer: 1, explanation: "Schleiden and Schwann proposed the cell theory." },
  { id: 29, question: "The cell wall of Fungi is made up of:", options: ["Cellulose", "Peptidoglycan", "Chitin", "Lignin"], correctAnswer: 2, explanation: "Fungal cell walls contain chitin, not cellulose." },
  { id: 30, question: "Glycolysis (breakdown of glucose) occurs in which part of the cell?", options: ["Mitochondria", "Cytosol (Cytoplasm)", "Nucleus", "Ribosome"], correctAnswer: 1, explanation: "Glycolysis happens in the cytosol, not mitochondria." },
  { id: 31, question: "According to the Fluid Mosaic Model, the percentage of proteins in the cell membrane is:", options: ["20-40%", "40-50%", "60-80%", "90%"], correctAnswer: 2, explanation: "Cell membranes are 60-80% proteins, 20-40% lipids." },
  { id: 32, question: "Ribosomes are assembled in the:", options: ["Cytoplasm", "Nucleolus", "Golgi body", "ER"], correctAnswer: 1, explanation: "The nucleolus is the site of ribosome assembly." },
  { id: 33, question: "Which organelle is responsible for Protein Synthesis?", options: ["Lysosome", "Mitochondria", "Ribosome", "Vacuole"], correctAnswer: 2, explanation: "Ribosomes are the protein factories of the cell." },
  { id: 34, question: "Prokaryotic cells (like bacteria) divide by:", options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"], correctAnswer: 2, explanation: "Bacteria reproduce through binary fission." },
  { id: 35, question: "The basic unit of structure and function of life is:", options: ["Tissue", "Organ", "Cell", "Muscle"], correctAnswer: 2, explanation: "The cell is the fundamental unit of life." },
  { id: 36, question: "Which of the following is NOT present in an animal cell?", options: ["Cell Membrane", "Cell Wall", "Mitochondria", "Nucleus"], correctAnswer: 1, explanation: "Animal cells lack cell walls, which plants have." },
  { id: 37, question: "The 'Brain' or 'Controller' of the cell is:", options: ["Mitochondria", "Nucleus", "DNA", "Cytoplasm"], correctAnswer: 1, explanation: "The nucleus controls cell activities." },
  { id: 38, question: "Root hairs absorb water from the soil through a process called:", options: ["Diffusion", "Active Transport", "Osmosis", "Transpiration"], correctAnswer: 2, explanation: "Osmosis is the movement of water across a membrane." },
  { id: 39, question: "What is the main function of the Cell Membrane?", options: ["Making food", "Controlling movement of substances in/out", "Making energy", "Genetic information"], correctAnswer: 1, explanation: "The cell membrane regulates what enters and exits the cell." },
  { id: 40, question: "Lysosomes are often called:", options: ["Power plants", "Suicide bags", "Protein factories", "Post offices"], correctAnswer: 1, explanation: "Lysosomes contain digestive enzymes that can destroy the cell." },
  { id: 41, question: "Crossing over occurs during which phase of cell division?", options: ["Prophase I", "Metaphase", "Anaphase", "Telophase"], correctAnswer: 0, explanation: "Crossing over happens in Prophase I of meiosis." },
  { id: 42, question: "Which organelle modifies and packages molecules (Secretions)?", options: ["Ribosome", "Golgi Apparatus", "Mitochondria", "Vacuole"], correctAnswer: 1, explanation: "Golgi apparatus packages proteins for secretion." },
  { id: 43, question: "Granular structures found suspended in the cytoplasm or attached to RER are:", options: ["Lysosomes", "Ribosomes", "Plastids", "Centrioles"], correctAnswer: 1, explanation: "Ribosomes are found free or attached to rough ER." },
  { id: 44, question: "The First layer of the plant cell wall to be formed is:", options: ["Secondary wall", "Middle Lamella", "Primary Wall", "Tertiary wall"], correctAnswer: 2, explanation: "The primary wall forms first, then secondary layers." },
  { id: 45, question: "Information for the structure and function of cells is stored in:", options: ["ATP", "DNA / Genes", "Enzymes", "Lipids"], correctAnswer: 1, explanation: "DNA contains genetic information." },
  { id: 46, question: "The fluid inside the Nucleus is called:", options: ["Cytoplasm", "Nucleoplasm", "Stroma", "Matrix"], correctAnswer: 1, explanation: "Nucleoplasm is the fluid within the nucleus." },
  { id: 47, question: "Which prevents food from entering the windpipe (Trachea)?", options: ["Tongue", "Epiglottis", "Esophagus", "Larynx"], correctAnswer: 1, explanation: "The epiglottis covers the trachea during swallowing." },
  { id: 48, question: "Plant cell walls are primarily made of:", options: ["Chitin", "Cellulose", "Protein", "Lipid"], correctAnswer: 1, explanation: "Cellulose is the main component of plant cell walls." },
  { id: 49, question: "Which structure is present in plant cells but absent in animal cells?", options: ["Chloroplast", "Ribosome", "Nucleus", "Cell Membrane"], correctAnswer: 0, explanation: "Chloroplasts for photosynthesis are only in plant cells." },
  { id: 50, question: "ATP stands for:", options: ["Adenosine Tri-phosphate", "Adenine Tri-phosphate", "Adenosine Di-phosphate", "Amino Tri-phosphate"], correctAnswer: 0, explanation: "ATP = Adenosine Triphosphate, the energy currency." }
];

const chapter2Notes = [
  "**Mitochondria** = Powerhouse of the Cell (produces ATP)",
  "**Robert Hooke** discovered cells in cork (1665)",
  "**Cell Theory**: Schleiden & Schwann",
  "**Nucleus** = Brain/Controller of the cell",
  "**Ribosomes** = Protein factories",
  "**Lysosomes** = Suicide bags (digestive enzymes)",
  "**Cell Wall**: Plants = Cellulose, Fungi = **Chitin**, Bacteria = Peptidoglycan",
  "**Fluid Mosaic Model**: 60-80% Proteins, 20-40% Lipids",
  "**Glycolysis** occurs in **Cytosol** (not mitochondria!)",
  "**Prokaryotes** (bacteria) divide by **Binary Fission**",
  "**Ribosomes** are assembled in the **Nucleolus**"
];

// Chapter 3: Biological Molecules
const chapter3MCQs: MCQ[] = [
  { id: 51, question: "The most abundant organic compound in the mammalian cell is:", options: ["Water", "Carbohydrates", "Proteins", "Lipids"], correctAnswer: 2, explanation: "Proteins make up 50% of dry cell weight. Water is inorganic." },
  { id: 52, question: "Enzymes are mainly composed of:", options: ["Carbohydrates", "Proteins", "Lipids", "DNA"], correctAnswer: 1, explanation: "Almost all enzymes are proteins." },
  { id: 53, question: "The percentage of water in the human brain cells is approximately:", options: ["20%", "65%", "85%", "90%"], correctAnswer: 2, explanation: "Brain cells contain about 85% water." },
  { id: 54, question: "Amino acids are the building blocks of:", options: ["Fats", "Starch", "Proteins", "Vitamins"], correctAnswer: 2, explanation: "Proteins are polymers of amino acids." },
  { id: 55, question: "Pepsin is an enzyme that digests:", options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"], correctAnswer: 1, explanation: "Pepsin breaks down proteins in the stomach." },
  { id: 56, question: "Which of the following is an example of a Nucleotide?", options: ["Glucose", "ATP", "Fatty Acid", "Glycerol"], correctAnswer: 1, explanation: "ATP is a nucleotide (Adenosine + 3 phosphates)." },
  { id: 57, question: "The 'Lock and Key' model of enzyme action was proposed by:", options: ["Koshland", "Emil Fischer", "Watson & Crick", "Darwin"], correctAnswer: 1, explanation: "Emil Fischer proposed the Lock and Key model in 1894." },
  { id: 58, question: "The enzyme found in saliva is:", options: ["Pepsin", "Trypsin", "Amylase (Ptyalin)", "Lipase"], correctAnswer: 2, explanation: "Salivary amylase digests starch in the mouth." },
  { id: 59, question: "Carbon is considered the backbone of:", options: ["Inorganic compounds", "Organic compounds", "Ionic compounds", "Water"], correctAnswer: 1, explanation: "All organic molecules are carbon-based." },
  { id: 60, question: "Lipids store how much energy compared to carbohydrates?", options: ["Half", "Equal", "Double", "Triple"], correctAnswer: 2, explanation: "Fats store twice as much energy as carbohydrates." },
  { id: 61, question: "DNA structure (Double Helix) was discovered by:", options: ["Hooke & Brown", "Watson & Crick", "Schleiden & Schwann", "Mendel"], correctAnswer: 1, explanation: "Watson and Crick discovered DNA's double helix structure." },
  { id: 62, question: "Fungal cell walls are made of:", options: ["Cellulose", "Chitin", "Lignin", "Peptidoglycan"], correctAnswer: 1, explanation: "Chitin is the main component of fungal cell walls." },
  { id: 63, question: "Which bonds are responsible for the unique properties of water?", options: ["Covalent bonds", "Hydrogen bonds", "Ionic bonds", "Peptide bonds"], correctAnswer: 1, explanation: "Hydrogen bonds give water its special properties." },
  { id: 64, question: "In DNA, Adenine always pairs with:", options: ["Cytosine", "Guanine", "Thymine", "Uracil"], correctAnswer: 2, explanation: "A-T and G-C are the base pairing rules." },
  { id: 65, question: "Cotton is a pure form of:", options: ["Starch", "Glycogen", "Cellulose", "Chitin"], correctAnswer: 2, explanation: "Cotton is nearly pure cellulose fiber." },
  { id: 66, question: "The graph showing the effect of temperature on enzyme activity is:", options: ["Linear", "Bell-shaped", "Hyperbolic", "Zig-zag"], correctAnswer: 1, explanation: "Enzyme activity peaks at optimal temperature, then declines." },
  { id: 67, question: "Which of the following is a monosaccharide (Simple Sugar)?", options: ["Sucrose", "Maltose", "Glucose", "Starch"], correctAnswer: 2, explanation: "Glucose is a simple sugar; sucrose and maltose are disaccharides." },
  { id: 68, question: "Hemoglobin is a protein that transports:", options: ["CO₂", "Oxygen", "Water", "Nitrogen"], correctAnswer: 1, explanation: "Hemoglobin carries oxygen in red blood cells." },
  { id: 69, question: "Specific heat capacity of water is responsible for:", options: ["Dissolving salts", "Lubrication", "Stabilizing temperature", "Surface tension"], correctAnswer: 2, explanation: "High heat capacity helps maintain stable body temperature." },
  { id: 70, question: "Optimum pH for the enzyme Pepsin is:", options: ["2.0 (Acidic)", "7.0 (Neutral)", "9.0 (Alkaline)", "11.0"], correctAnswer: 0, explanation: "Pepsin works best in the acidic stomach environment." },
  { id: 71, question: "'ATP' stands for:", options: ["Adenosine Tri-phosphate", "Amino Tri-phosphate", "Adenine Tri-phosphate", "All of these"], correctAnswer: 0, explanation: "ATP = Adenosine Triphosphate." },
  { id: 72, question: "Fats are solid at room temperature, while oils are:", options: ["Liquid", "Gas", "Semi-solid", "Frozen"], correctAnswer: 0, explanation: "Oils are liquid fats at room temperature." },
  { id: 73, question: "Which element is essential for the synthesis of Chlorophyll?", options: ["Iron (Fe)", "Magnesium (Mg)", "Calcium (Ca)", "Sodium (Na)"], correctAnswer: 1, explanation: "Magnesium is at the center of the chlorophyll molecule." },
  { id: 74, question: "The bond formed between two amino acids is called:", options: ["Glycosidic bond", "Peptide bond", "Ester bond", "Ionic bond"], correctAnswer: 1, explanation: "Amino acids join via peptide bonds." },
  { id: 75, question: "Which vitamin is produced by the human body in sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correctAnswer: 2, explanation: "Vitamin D is synthesized in skin exposed to sunlight." }
];

const chapter3Notes = [
  "**Proteins** = Most abundant organic compound (50% dry weight)",
  "**Enzymes** are made of **Proteins**",
  "**Water** in brain cells: ~85%",
  "**Carbohydrates**: C:H:O ratio = 1:2:1; Main energy source",
  "**Lipids**: Store **double** the energy of carbohydrates",
  "**Lock and Key Model**: Emil Fischer (1894)",
  "**Salivary Amylase** digests starch in mouth",
  "**Pepsin**: Works at pH 2.0 (acidic - stomach)",
  "**DNA Double Helix**: Watson & Crick",
  "**Base Pairing**: A-T, G-C (Adenine-Thymine, Guanine-Cytosine)",
  "**Magnesium (Mg)** is essential for Chlorophyll"
];

// Chapter 4: Bioenergetics
const chapter4MCQs: MCQ[] = [
  { id: 76, question: "Photosynthesis occurs in which part of the plant?", options: ["Roots", "Stem", "Leaves (Chloroplasts)", "Flowers"], correctAnswer: 2, explanation: "Chloroplasts in leaves are the site of photosynthesis." },
  { id: 77, question: "Glycolysis (breakdown of glucose) occurs in:", options: ["Mitochondria", "Cytosol (Cytoplasm)", "Nucleus", "Ribosome"], correctAnswer: 1, explanation: "Glycolysis happens in the cytosol." },
  { id: 78, question: "The main source of energy for all living organisms is:", options: ["Moon", "Stars", "Sun", "Fire"], correctAnswer: 2, explanation: "The Sun is the ultimate energy source for life on Earth." },
  { id: 79, question: "Which metal ion is the central part of the Chlorophyll molecule?", options: ["Iron (Fe)", "Magnesium (Mg)", "Calcium (Ca)", "Sodium (Na)"], correctAnswer: 1, explanation: "Magnesium is at the center of chlorophyll." },
  { id: 80, question: "Photosynthesis mainly occurs during:", options: ["Night time", "Day time", "Both Day and Night", "Rainy season"], correctAnswer: 1, explanation: "Photosynthesis requires light, so it occurs during the day." },
  { id: 81, question: "The 'Energy Currency' of the cell is:", options: ["DNA", "RNA", "ATP", "Glucose"], correctAnswer: 2, explanation: "ATP is the universal energy carrier in cells." },
  { id: 82, question: "Chlorophyll reflects which color of light?", options: ["Blue", "Red", "Green", "Yellow"], correctAnswer: 2, explanation: "Chlorophyll reflects green light, making plants appear green." },
  { id: 83, question: "Oxygen produced during photosynthesis comes from:", options: ["CO₂", "Water (H₂O)", "Glucose", "Ozone"], correctAnswer: 1, explanation: "Oxygen is released from splitting water molecules." },
  { id: 84, question: "Aerobic respiration takes place in the presence of:", options: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon dioxide"], correctAnswer: 2, explanation: "Aerobic respiration requires oxygen." },
  { id: 85, question: "The first stage of respiration (Glycolysis) is common to both:", options: ["Plants and Animals", "Aerobic and Anaerobic respiration", "Day and Night", "Roots and Shoots"], correctAnswer: 1, explanation: "Glycolysis occurs in both aerobic and anaerobic pathways." },
  { id: 86, question: "The final product of Anaerobic respiration in human muscles is:", options: ["Alcohol", "Lactic Acid", "Citric Acid", "Water"], correctAnswer: 1, explanation: "Lactic acid causes muscle fatigue during intense exercise." },
  { id: 87, question: "Transpiration is regulated by the movement of:", options: ["Mesophyll cells", "Guard Cells", "Xylem", "Phloem"], correctAnswer: 1, explanation: "Guard cells open and close stomata to control water loss." },
  { id: 88, question: "Dark Reaction (Calvin Cycle) takes place in the:", options: ["Grana", "Thylakoid", "Stroma", "Cytoplasm"], correctAnswer: 2, explanation: "The Calvin Cycle occurs in the stroma of chloroplasts." },
  { id: 89, question: "Light Reaction takes place in the:", options: ["Stroma", "Thylakoid membranes (Grana)", "Mitochondria", "Nucleus"], correctAnswer: 1, explanation: "Light reactions occur in the thylakoid membranes." },
  { id: 90, question: "How many ATP molecules are produced from one molecule of glucose in Aerobic respiration?", options: ["2", "4", "36-38", "100"], correctAnswer: 2, explanation: "Complete aerobic respiration yields 36-38 ATP per glucose." },
  { id: 91, question: "The graph showing the rate of photosynthesis at different wavelengths of light is called:", options: ["Absorption Spectrum", "Action Spectrum", "Reflection Spectrum", "Emission Spectrum"], correctAnswer: 1, explanation: "Action spectrum shows photosynthesis rate vs wavelength." },
  { id: 92, question: "Which gas is released during Respiration?", options: ["Oxygen (O₂)", "Carbon Dioxide (CO₂)", "Nitrogen (N₂)", "Hydrogen (H₂)"], correctAnswer: 1, explanation: "CO₂ is produced when glucose is broken down." },
  { id: 93, question: "Which gas is absorbed during Photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 1, explanation: "Plants absorb CO₂ for photosynthesis." },
  { id: 94, question: "Alcoholic fermentation occurs in:", options: ["Humans", "Bacteria", "Yeast", "Viruses"], correctAnswer: 2, explanation: "Yeast produces alcohol through fermentation." },
  { id: 95, question: "The raw materials for photosynthesis are:", options: ["Glucose and Oxygen", "CO₂ and Water", "Nitrogen and Water", "Starch and CO₂"], correctAnswer: 1, explanation: "Photosynthesis uses CO₂ and H₂O to make glucose." },
  { id: 96, question: "Net gain of ATP in Glycolysis is:", options: ["2 ATP", "4 ATP", "8 ATP", "36 ATP"], correctAnswer: 0, explanation: "Glycolysis produces a net gain of 2 ATP." },
  { id: 97, question: "The process of breaking down water molecules by light is called:", options: ["Hydrolysis", "Photolysis", "Glycolysis", "Electrolysis"], correctAnswer: 1, explanation: "Photolysis = light-driven splitting of water." },
  { id: 98, question: "Respiration is a:", options: ["Anabolic process (Building up)", "Catabolic process (Breaking down)", "Physical process", "Mechanical process"], correctAnswer: 1, explanation: "Respiration breaks down molecules to release energy." },
  { id: 99, question: "Stomata are found primarily on the:", options: ["Upper surface of leaf", "Lower surface of leaf", "Stem", "Roots"], correctAnswer: 1, explanation: "Most stomata are on the lower leaf surface." },
  { id: 100, question: "ATP releases energy when:", options: ["A phosphate group is added", "A phosphate bond is broken", "Adenine is removed", "Sugar is removed"], correctAnswer: 1, explanation: "Energy is released when ATP loses a phosphate group." }
];

const chapter4Notes = [
  "**Sun** = Ultimate source of energy for all life",
  "**ATP** = Energy Currency of the cell (7.3 kcal/mole when broken)",
  "**Photosynthesis**: 6CO₂ + 6H₂O + Light → Glucose + O₂",
  "**Location**: Chloroplasts in **Leaves**; occurs during **Day time only**",
  "**Chlorophyll**: Central atom = **Magnesium**; Absorbs Blue/Red; Reflects **Green**",
  "**Light Reaction** = Thylakoids; **Dark Reaction (Calvin Cycle)** = Stroma",
  "**Glycolysis** occurs in **Cytosol** (common to aerobic & anaerobic)",
  "**Aerobic respiration**: 36-38 ATP per glucose",
  "**Anaerobic** in muscles → Lactic Acid; in yeast → Alcohol",
  "**Guard Cells** control stomata opening/closing"
];

// Chapter 5: Biodiversity & Acellular Life
const chapter5MCQs: MCQ[] = [
  { id: 101, question: "The study of viruses is called:", options: ["Mycology", "Virology", "Bacteriology", "Phycology"], correctAnswer: 1, explanation: "Virology is the scientific study of viruses." },
  { id: 102, question: "The shape of the Polio virus is:", options: ["Rod-shaped", "Tadpole", "Spherical", "Spiral"], correctAnswer: 2, explanation: "Polio virus has a spherical shape." },
  { id: 103, question: "Which disease is NOT caused by poor diet (it is viral)?", options: ["Scurvy", "Rickets", "Mumps", "Beri-Beri"], correctAnswer: 2, explanation: "Mumps is a viral infection, not a nutritional deficiency." },
  { id: 104, question: "Who developed the technique of Vaccination for the first time?", options: ["Louis Pasteur", "Edward Jenner", "Robert Koch", "Alexander Fleming"], correctAnswer: 1, explanation: "Edward Jenner developed the first vaccine." },
  { id: 105, question: "According to the test papers, in which year did Edward Jenner develop vaccination?", options: ["1775", "1795", "1895", "1995"], correctAnswer: 1, explanation: "Jenner developed vaccination in 1795/1796." },
  { id: 106, question: "The cell wall of Fungi is made of:", options: ["Cellulose", "Chitin", "Lignin", "Silica"], correctAnswer: 1, explanation: "Fungal cell walls contain chitin." },
  { id: 107, question: "Which of the following is an example of a Decomposer?", options: ["Algae", "Virus", "Fungi", "Plants"], correctAnswer: 2, explanation: "Fungi break down dead organic matter." },
  { id: 108, question: "The basic unit of classification is:", options: ["Order", "Family", "Genus", "Species"], correctAnswer: 3, explanation: "Species is the fundamental unit of classification." },
  { id: 109, question: "In 1997, scientists in Scotland succeeded in cloning which animal?", options: ["Cow", "Sheep", "Dog", "Monkey"], correctAnswer: 1, explanation: "Dolly the sheep was cloned in 1997." },
  { id: 110, question: "Kingdom Animalia includes organisms which are:", options: ["Eukaryotic", "Multicellular", "Diploid", "All of these"], correctAnswer: 3, explanation: "Animals are eukaryotic, multicellular, and diploid." },
  { id: 111, question: "Algae help in reducing heavy metal pollution by:", options: ["Bio-magnification", "Bio-absorption", "Bio-degradation", "Bio-remediation"], correctAnswer: 1, explanation: "Algae absorb heavy metals from the environment." },
  { id: 112, question: "Prokaryotic cells (Bacteria) divide mainly by:", options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"], correctAnswer: 2, explanation: "Bacteria reproduce through binary fission." },
  { id: 113, question: "Which Kingdom includes simple eukaryotic organisms like Algae and Protozoa?", options: ["Monera", "Protista", "Fungi", "Plantae"], correctAnswer: 1, explanation: "Protista includes algae, protozoa, and slime molds." },
  { id: 114, question: "Fungi are distinct from plants because they:", options: ["Have no cell wall", "Are Heterotrophs (Cannot make food)", "Have Chlorophyll", "Are Prokaryotes"], correctAnswer: 1, explanation: "Fungi cannot photosynthesize; they are heterotrophs." },
  { id: 115, question: "Viruses are considered:", options: ["Living", "Non-living", "Borderline between living and non-living", "Plants"], correctAnswer: 2, explanation: "Viruses show characteristics of both living and non-living." },
  { id: 116, question: "Binomial Nomenclature (Scientific Naming) was introduced by:", options: ["Darwin", "Lamarck", "Carolus Linnaeus", "Aristotle"], correctAnswer: 2, explanation: "Linnaeus created the binomial naming system." },
  { id: 117, question: "The scientific name of humans is:", options: ["Homo erectus", "Homo habilis", "Homo sapiens", "Rana tigrina"], correctAnswer: 2, explanation: "Homo sapiens is the scientific name for modern humans." },
  { id: 118, question: "Prions are infectious particles made only of:", options: ["DNA", "RNA", "Proteins", "Lipids"], correctAnswer: 2, explanation: "Prions are misfolded proteins that cause disease." },
  { id: 119, question: "Which of the following is a viral disease?", options: ["Cholera", "Tetanus", "Influenza/Polio", "Typhoid"], correctAnswer: 2, explanation: "Influenza and Polio are caused by viruses." },
  { id: 120, question: "Bacteriophages are viruses that infect:", options: ["Humans", "Plants", "Bacteria", "Animals"], correctAnswer: 2, explanation: "Bacteriophages specifically attack bacteria." },
  { id: 121, question: "HIV causes which disease?", options: ["Hepatitis", "AIDS", "Cancer", "TB"], correctAnswer: 1, explanation: "HIV causes AIDS (Acquired Immunodeficiency Syndrome)." },
  { id: 122, question: "Hepatitis is an inflammation of the:", options: ["Kidney", "Lungs", "Liver", "Heart"], correctAnswer: 2, explanation: "Hepatitis means inflammation of the liver." },
  { id: 123, question: "Which statement is true about viruses?", options: ["They have a nucleus", "They respire", "They can only reproduce inside a host", "They are made of cells"], correctAnswer: 2, explanation: "Viruses need a host cell to replicate." },
  { id: 124, question: "Kingdom Monera consists of:", options: ["Eukaryotes", "Prokaryotes", "Viruses", "Fungi"], correctAnswer: 1, explanation: "Monera includes all prokaryotes (bacteria)." },
  { id: 125, question: "A group of related genera (Genus) is called:", options: ["Family", "Order", "Class", "Phylum"], correctAnswer: 0, explanation: "Related genera are grouped into a Family." }
];

const chapter5Notes = [
  "**Virology** = Study of viruses",
  "**Polio virus** shape = **Spherical**",
  "**Mumps** = Viral disease (NOT nutritional deficiency)",
  "**Edward Jenner** developed Vaccination (1795)",
  "**Fungi**: Cell wall = **Chitin**; Role = **Decomposers**",
  "**Species** = Basic unit of classification",
  "**Dolly the Sheep** = First cloned mammal (1997, Scotland)",
  "**Five Kingdoms**: Monera, Protista, Fungi, Plantae, Animalia",
  "**Viruses** = Borderline between living and non-living",
  "**Binomial Nomenclature**: Carolus Linnaeus"
];

// Chapter 6: Kingdom Animalia & Plantae
const chapter6MCQs: MCQ[] = [
  { id: 126, question: "The Class of Man (Humans) is:", options: ["Aves", "Mammalia", "Reptilia", "Amphibia"], correctAnswer: 1, explanation: "Humans belong to Class Mammalia." },
  { id: 127, question: "Reptiles and Birds excrete nitrogenous waste in the form of:", options: ["Urea", "Ammonia", "Uric Acid", "Sweat"], correctAnswer: 2, explanation: "Uric acid conserves water in reptiles and birds." },
  { id: 128, question: "Plants obtain Nitrogen from the soil in the form of:", options: ["Nitrites", "Nitrates (NO₃)", "Nitrogen gas (N₂)", "Ammonia"], correctAnswer: 1, explanation: "Plants absorb nitrogen as nitrates from soil." },
  { id: 129, question: "Which structure imparts red color to rose petals?", options: ["Chloroplasts", "Chromoplasts", "Leucoplasts", "Vacuoles"], correctAnswer: 1, explanation: "Chromoplasts contain red, yellow, and orange pigments." },
  { id: 130, question: "Reproduction in Sponges (Porifera) occurs by:", options: ["Binary Fission", "Budding", "Spores", "Seeds"], correctAnswer: 1, explanation: "Sponges reproduce asexually by budding." },
  { id: 131, question: "Transpiration in plants is regulated by the movement of:", options: ["Epidermis", "Guard Cells", "Xylem", "Roots"], correctAnswer: 1, explanation: "Guard cells control stomata opening." },
  { id: 132, question: "Kingdom Animalia includes organisms which are:", options: ["Diploid", "Multicellular", "Eukaryotic", "All of these"], correctAnswer: 3, explanation: "All animals are eukaryotic, multicellular, and diploid." },
  { id: 133, question: "A group of organisms of the same species living in the same place at the same time is called:", options: ["Ecosystem", "Community", "Population", "Biosphere"], correctAnswer: 2, explanation: "Population = same species in same place and time." },
  { id: 134, question: "Aristotle is known for classifying:", options: ["Plants", "Animals", "Viruses", "Bacteria"], correctAnswer: 1, explanation: "Aristotle was the first to classify animals." },
  { id: 135, question: "Environmental pollution in Pakistan is a:", options: ["Local problem", "National problem", "Personal problem", "No problem"], correctAnswer: 1, explanation: "Pollution is a national concern in Pakistan." },
  { id: 136, question: "Which of the following is an example of a 'Sink' in plants?", options: ["Leaves (Mature)", "Roots / Fruits", "Sun", "Air"], correctAnswer: 1, explanation: "Sinks are storage organs that receive nutrients." },
  { id: 137, question: "Which statement is TRUE about animals?", options: ["They have a cell wall", "They make their own food (Autotrophs)", "They are Heterotrophs", "They are unicellular"], correctAnswer: 2, explanation: "Animals cannot make food; they are heterotrophs." },
  { id: 138, question: "In humans, nitrogenous waste is excreted mainly as:", options: ["Uric Acid", "Urea", "Ammonia", "Crystals"], correctAnswer: 1, explanation: "Humans excrete urea, which is less toxic than ammonia." },
  { id: 139, question: "Which bio-remediation agent reduces heavy metal pollution?", options: ["Algae", "Virus", "Fish", "Birds"], correctAnswer: 0, explanation: "Algae can absorb heavy metals from water." },
  { id: 140, question: "The basic unit of classification is:", options: ["Kingdom", "Family", "Species", "Genus"], correctAnswer: 2, explanation: "Species is the fundamental classification unit." },
  { id: 141, question: "The major unit of Ecology is:", options: ["Population", "Ecosystem", "Biosphere", "Community"], correctAnswer: 1, explanation: "Ecosystem includes both living and non-living components." },
  { id: 142, question: "Fish excrete waste in the form of:", options: ["Urea", "Uric Acid", "Ammonia", "Salt"], correctAnswer: 2, explanation: "Fish excrete ammonia directly into water." },
  { id: 143, question: "The 'First layer' of the plant cell wall is called:", options: ["Primary Wall", "Secondary Wall", "Middle Lamella", "Plasma Membrane"], correctAnswer: 0, explanation: "Primary wall forms first during cell growth." },
  { id: 144, question: "Which of the following is NOT a characteristic of Mammals?", options: ["Hair/Fur", "Mammary Glands", "Feathers", "Warm-blooded"], correctAnswer: 2, explanation: "Feathers are characteristic of birds, not mammals." },
  { id: 145, question: "Plants use evaporation (transpiration) mainly for:", options: ["Heating", "Cooling", "Reproduction", "Growth"], correctAnswer: 1, explanation: "Transpiration helps cool plants through evaporation." },
  { id: 146, question: "The green pigment in plants is:", options: ["Hemoglobin", "Chlorophyll", "Xanthophyll", "Carotene"], correctAnswer: 1, explanation: "Chlorophyll is the green photosynthetic pigment." },
  { id: 147, question: "In the 'Binomial Nomenclature' system, the first name refers to the:", options: ["Species", "Genus", "Family", "Order"], correctAnswer: 1, explanation: "The first name is the genus (capitalized)." },
  { id: 148, question: "Multicellular animals are broadly referred to as:", options: ["Protozoa", "Metazoa", "Parazoa", "Eumetazoa"], correctAnswer: 1, explanation: "Metazoa = multicellular animals." },
  { id: 149, question: "Which part of the plant absorbs water and minerals?", options: ["Leaves", "Root Hairs", "Flowers", "Stem"], correctAnswer: 1, explanation: "Root hairs increase surface area for absorption." },
  { id: 150, question: "'Cold-blooded' animals (like reptiles) are also known as:", options: ["Homeotherms", "Poikilotherms (Ectotherms)", "Endotherms", "Mammals"], correctAnswer: 1, explanation: "Poikilotherms cannot regulate body temperature internally." }
];

const chapter6Notes = [
  "**Class Mammalia** = Humans, characterized by hair/fur and mammary glands",
  "**Excretion**: Birds/Reptiles = **Uric Acid**; Mammals = Urea; Fish = Ammonia",
  "**Plants absorb Nitrogen** as **Nitrates (NO₃)** from soil",
  "**Chromoplasts** = Red, Yellow, Orange colors (attract pollinators)",
  "**Sponges (Porifera)** reproduce by **Budding**",
  "**Guard Cells** regulate transpiration (stomata opening/closing)",
  "**Population** = Same species, same place, same time",
  "**Aristotle** = First to classify animals",
  "**Pollution** in Pakistan = National Problem",
  "**Binomial Nomenclature**: Genus (capitalized) + species (lowercase)"
];

// Chapter 7: Human Physiology
const chapter7MCQs: MCQ[] = [
  { id: 151, question: "The Human Heart has how many chambers?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "The heart has 4 chambers: 2 atria and 2 ventricles." },
  { id: 152, question: "Red Blood Cells (RBCs) are formed in the:", options: ["Liver", "Heart", "Bone Marrow", "Kidney"], correctAnswer: 2, explanation: "RBCs are produced in bone marrow." },
  { id: 153, question: "The Universal Blood Donor group is:", options: ["A Positive", "B Positive", "O Negative", "AB Positive"], correctAnswer: 2, explanation: "O Negative can be given to anyone." },
  { id: 154, question: "The largest gland in the human body is:", options: ["Pancreas", "Liver", "Thyroid", "Pituitary"], correctAnswer: 1, explanation: "The liver is the largest gland." },
  { id: 155, question: "Insulin is secreted by which organ?", options: ["Kidney", "Liver", "Pancreas", "Stomach"], correctAnswer: 2, explanation: "Pancreas secretes insulin to regulate blood sugar." },
  { id: 156, question: "Which part of the brain controls breathing?", options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Thalamus"], correctAnswer: 2, explanation: "Medulla oblongata controls involuntary functions like breathing." },
  { id: 157, question: "The smallest bone in the human body is:", options: ["Femur", "Radius", "Stapes", "Ulna"], correctAnswer: 2, explanation: "Stapes in the ear is the smallest bone." },
  { id: 158, question: "Which organ purifies blood in the human body?", options: ["Heart", "Lungs", "Kidney", "Stomach"], correctAnswer: 2, explanation: "Kidneys filter waste from blood." },
  { id: 159, question: "The functional unit of the Kidney is called:", options: ["Neuron", "Nephron", "Alveoli", "Villus"], correctAnswer: 1, explanation: "Nephrons are the filtering units of kidneys." },
  { id: 160, question: "How many pairs of ribs do humans have?", options: ["10", "12", "14", "16"], correctAnswer: 1, explanation: "Humans have 12 pairs of ribs." },
  { id: 161, question: "Which structure prevents food from entering the windpipe?", options: ["Tongue", "Epiglottis", "Esophagus", "Larynx"], correctAnswer: 1, explanation: "Epiglottis covers trachea during swallowing." },
  { id: 162, question: "The enzyme present in Saliva is:", options: ["Pepsin", "Trypsin", "Amylase (Ptyalin)", "Lipase"], correctAnswer: 2, explanation: "Salivary amylase begins starch digestion." },
  { id: 163, question: "Hemoglobin is found in:", options: ["White Blood Cells", "Platelets", "Red Blood Cells", "Plasma"], correctAnswer: 2, explanation: "RBCs contain hemoglobin for oxygen transport." },
  { id: 164, question: "Total number of bones in an adult human body is:", options: ["200", "206", "300", "306"], correctAnswer: 1, explanation: "Adults have 206 bones." },
  { id: 165, question: "Pepsin digests which nutrient?", options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"], correctAnswer: 1, explanation: "Pepsin breaks down proteins in the stomach." },
  { id: 166, question: "Which mineral is necessary for the formation of Hemoglobin?", options: ["Calcium", "Iron", "Sodium", "Magnesium"], correctAnswer: 1, explanation: "Iron is essential for hemoglobin production." },
  { id: 167, question: "The system responsible for transport in the human body is:", options: ["Digestive System", "Respiratory System", "Circulatory System", "Nervous System"], correctAnswer: 2, explanation: "Circulatory system transports blood and nutrients." },
  { id: 168, question: "The normal human body temperature is:", options: ["37°C (98.6°F)", "40°C", "35°C", "100°C"], correctAnswer: 0, explanation: "Normal body temperature is about 37°C." },
  { id: 169, question: "Which vitamin is produced by the human body in sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correctAnswer: 2, explanation: "Vitamin D is synthesized in skin exposed to sunlight." },
  { id: 170, question: "'Universal Recipient' blood group is:", options: ["A", "B", "AB Positive", "O"], correctAnswer: 2, explanation: "AB+ can receive blood from any group." },
  { id: 171, question: "Organ that controls all body activities:", options: ["Heart", "Brain", "Liver", "Spinal Cord"], correctAnswer: 1, explanation: "The brain is the control center of the body." },
  { id: 172, question: "Blood is a type of:", options: ["Epithelial Tissue", "Connective Tissue", "Muscle Tissue", "Nervous Tissue"], correctAnswer: 1, explanation: "Blood is classified as connective tissue." },
  { id: 173, question: "Which gas is released during respiration?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2, explanation: "CO₂ is released as a waste product of respiration." },
  { id: 174, question: "Nerve tissues are involved in:", options: ["Muscle contraction", "Transporting impulses", "Digestion", "Excretion"], correctAnswer: 1, explanation: "Neurons transmit electrical impulses." },
  { id: 175, question: "To maintain internal temperature due to external change is called:", options: ["Osmoregulation", "Thermoregulation", "Excretion", "Reproduction"], correctAnswer: 1, explanation: "Thermoregulation maintains body temperature." }
];

const chapter7Notes = [
  "**Heart**: 4 chambers (2 Atria, 2 Ventricles)",
  "**RBCs** formed in **Bone Marrow**; contain **Hemoglobin** (needs **Iron**)",
  "**Universal Donor**: O Negative; **Universal Recipient**: AB Positive",
  "**Liver** = Largest gland",
  "**Pancreas** secretes **Insulin**",
  "**Medulla Oblongata** controls breathing",
  "**Stapes** = Smallest bone (in ear)",
  "**Kidney**: Purifies blood; Functional unit = **Nephron**",
  "**206 bones** in adult; **12 pairs of ribs**",
  "**Epiglottis** prevents food from entering windpipe",
  "**Normal body temperature**: 37°C (98.6°F)"
];

// Chapter 8: Ecology & Environment
const chapter8MCQs: MCQ[] = [
  { id: 176, question: "The major unit of Ecology is:", options: ["Biosphere", "Ecosystem", "Population", "Community"], correctAnswer: 1, explanation: "Ecosystem is the major functional unit of ecology." },
  { id: 177, question: "Environmental pollution in Pakistan is a:", options: ["Commercial problem", "Ecological problem", "National problem", "Natural problem"], correctAnswer: 2, explanation: "Pollution is a national concern in Pakistan." },
  { id: 178, question: "Conservation of energy means:", options: ["To waste energy", "To save energy", "To produce energy", "To destroy energy"], correctAnswer: 1, explanation: "Conservation means saving or preserving resources." },
  { id: 179, question: "Which is the best source of Renewable Energy?", options: ["Coal", "Petroleum", "Trees / Biomass", "Natural Gas"], correctAnswer: 2, explanation: "Trees and biomass are renewable energy sources." },
  { id: 180, question: "Algae have been found to reduce heavy metal pollution by:", options: ["Bio-magnification", "Bio-absorption", "Bio-degradation", "Bio-remediation"], correctAnswer: 1, explanation: "Algae absorb heavy metals through bio-absorption." },
  { id: 181, question: "The ultimate source of energy for an ecosystem is:", options: ["ATP", "Glucose", "Sun", "Water"], correctAnswer: 2, explanation: "The Sun provides energy for all ecosystems." },
  { id: 182, question: "An example of a Decomposer is:", options: ["Virus", "Algae", "Fungi", "Plants"], correctAnswer: 2, explanation: "Fungi break down dead organic matter." },
  { id: 183, question: "Homeostasis is the central requirement in the maintenance of:", options: ["Organism", "Species", "Ecosystem", "Population"], correctAnswer: 0, explanation: "Homeostasis maintains internal balance in organisms." },
  { id: 184, question: "Which gas is responsible for the Greenhouse Effect?", options: ["Oxygen", "Carbon Dioxide (CO₂)", "Nitrogen", "Helium"], correctAnswer: 1, explanation: "CO₂ traps heat and causes global warming." },
  { id: 185, question: "The study of the relationship between organisms and their environment is:", options: ["Genetics", "Ecology", "Embryology", "Physiology"], correctAnswer: 1, explanation: "Ecology studies organism-environment interactions." },
  { id: 186, question: "A group of different populations living in the same area is called:", options: ["Species", "Community", "Ecosystem", "Biosphere"], correctAnswer: 1, explanation: "Community = different populations in same area." },
  { id: 187, question: "Abiotic components of an ecosystem include:", options: ["Plants", "Animals", "Water, Air, Soil", "Bacteria"], correctAnswer: 2, explanation: "Abiotic = non-living components like water, air, soil." },
  { id: 188, question: "Organisms that make their own food are called:", options: ["Consumers", "Producers (Autotrophs)", "Decomposers", "Parasites"], correctAnswer: 1, explanation: "Producers like plants make food through photosynthesis." },
  { id: 189, question: "The flow of energy in an ecosystem is:", options: ["Cyclic", "Unidirectional (One way)", "Reversible", "Multidirectional"], correctAnswer: 1, explanation: "Energy flows one way: Sun → Producers → Consumers." },
  { id: 190, question: "Which of the following is a Non-Renewable resource?", options: ["Sun", "Wind", "Coal/Oil", "Water"], correctAnswer: 2, explanation: "Fossil fuels like coal and oil cannot be renewed." },
  { id: 191, question: "Deforestation leads to:", options: ["More rain", "Soil Erosion & Global Warming", "Lower temperature", "More Oxygen"], correctAnswer: 1, explanation: "Cutting trees causes erosion and increases CO₂." },
  { id: 192, question: "The percentage of energy transferred from one trophic level to the next is:", options: ["10%", "50%", "90%", "100%"], correctAnswer: 0, explanation: "Only 10% of energy passes to the next level." },
  { id: 193, question: "Acid rain is caused by oxides of:", options: ["Carbon", "Sulfur and Nitrogen", "Hydrogen", "Helium"], correctAnswer: 1, explanation: "SO₂ and NOₓ form acids in rainwater." },
  { id: 194, question: "Organisms that feed on dead organic matter are called:", options: ["Herbivores", "Carnivores", "Saprophytes / Decomposers", "Omnivores"], correctAnswer: 2, explanation: "Saprophytes break down dead material." },
  { id: 195, question: "Biodiversity refers to:", options: ["Variety of life on Earth", "Number of plants only", "Number of animals only", "Non-living things"], correctAnswer: 0, explanation: "Biodiversity = variety of all living organisms." },
  { id: 196, question: "The 'Greenhouse Effect' results in:", options: ["Cooling of Earth", "Global Warming", "More rain", "Better plant growth"], correctAnswer: 1, explanation: "Greenhouse effect traps heat, causing warming." },
  { id: 197, question: "Bacteria and Fungi act as:", options: ["Primary Consumers", "Secondary Consumers", "Decomposers (Reducers)", "Producers"], correctAnswer: 2, explanation: "They decompose dead organisms and recycle nutrients." },
  { id: 198, question: "Which is a biotic factor?", options: ["Temperature", "Soil", "Predation (Animals)", "Light"], correctAnswer: 2, explanation: "Biotic factors are living components." },
  { id: 199, question: "Water pollution can be caused by:", options: ["Fertilizer runoff", "Industrial waste", "Sewage", "All of these"], correctAnswer: 3, explanation: "All listed sources contribute to water pollution." },
  { id: 200, question: "The layer of the atmosphere that protects us from UV rays is:", options: ["Troposphere", "Ozone Layer", "Mesosphere", "Thermosphere"], correctAnswer: 1, explanation: "Ozone layer absorbs harmful UV radiation." }
];

const chapter8Notes = [
  "**Ecosystem** = Major unit of Ecology (biotic + abiotic)",
  "**Sun** = Ultimate source of energy for all ecosystems",
  "**Pollution** in Pakistan = **National Problem**",
  "**Renewable energy**: Trees/Biomass; **Non-renewable**: Coal, Oil, Gas",
  "**Algae** reduce heavy metal pollution via **Bio-absorption**",
  "**10% Rule**: Only 10% energy transfers to next trophic level",
  "**Decomposers**: Fungi, Bacteria (break down dead matter)",
  "**Greenhouse Effect**: CO₂ traps heat → Global Warming",
  "**Deforestation** → Soil erosion + Global warming",
  "**Ozone Layer** protects from UV rays"
];

// Export all chapters with notes
export const airforceBiologyChapters: ChapterWithNotes[] = [
  {
    id: "af-bio-1",
    name: "Introduction to Biology",
    description: "Definitions, branches, scientific method & history",
    icon: "🔬",
    mcqs: chapter1MCQs,
    notes: chapter1Notes
  },
  {
    id: "af-bio-2",
    name: "Cell Biology",
    description: "Cell structure, organelles & functions",
    icon: "🧫",
    mcqs: chapter2MCQs,
    notes: chapter2Notes
  },
  {
    id: "af-bio-3",
    name: "Biological Molecules",
    description: "Carbohydrates, proteins, lipids & enzymes",
    icon: "🧬",
    mcqs: chapter3MCQs,
    notes: chapter3Notes
  },
  {
    id: "af-bio-4",
    name: "Bioenergetics",
    description: "Photosynthesis & respiration",
    icon: "⚡",
    mcqs: chapter4MCQs,
    notes: chapter4Notes
  },
  {
    id: "af-bio-5",
    name: "Biodiversity & Acellular Life",
    description: "Viruses, classification & kingdoms",
    icon: "🦠",
    mcqs: chapter5MCQs,
    notes: chapter5Notes
  },
  {
    id: "af-bio-6",
    name: "Kingdom Animalia & Plantae",
    description: "Animal & plant characteristics, excretion",
    icon: "🌿",
    mcqs: chapter6MCQs,
    notes: chapter6Notes
  },
  {
    id: "af-bio-7",
    name: "Human Physiology",
    description: "Circulatory, digestive, nervous systems",
    icon: "❤️",
    mcqs: chapter7MCQs,
    notes: chapter7Notes
  },
  {
    id: "af-bio-8",
    name: "Ecology & Environment",
    description: "Ecosystems, pollution & conservation",
    icon: "🌍",
    mcqs: chapter8MCQs,
    notes: chapter8Notes
  }
];

// Experience-based MCQs (Most repeated questions from all chapters)
export const airforceBiologyExperienceMCQs: MCQ[] = [
  { id: 201, question: "The microscopic study of tissues is called:", options: ["Morphology", "Anatomy", "Histology", "Cell Biology"], correctAnswer: 2, explanation: "Histology is the study of tissues under a microscope - Most Repeated!" },
  { id: 202, question: "Who introduced the technique of Vaccination?", options: ["Louis Pasteur", "Robert Koch", "Edward Jenner", "Robert Hooke"], correctAnswer: 2, explanation: "Edward Jenner developed vaccination in 1795/1796." },
  { id: 203, question: "The 'Powerhouse of the Cell' is called:", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"], correctAnswer: 1, explanation: "Mitochondria produce ATP - Most Repeated!" },
  { id: 204, question: "Cell was discovered by:", options: ["Robert Brown", "Robert Hooke", "Schwann", "Darwin"], correctAnswer: 1, explanation: "Robert Hooke discovered cells in cork in 1665." },
  { id: 205, question: "The cell wall of Fungi is made up of:", options: ["Cellulose", "Peptidoglycan", "Chitin", "Lignin"], correctAnswer: 2, explanation: "Fungal cell walls contain chitin." },
  { id: 206, question: "Glycolysis occurs in which part of the cell?", options: ["Mitochondria", "Cytosol", "Nucleus", "Ribosome"], correctAnswer: 1, explanation: "Glycolysis happens in the cytosol." },
  { id: 207, question: "The enzyme found in saliva is:", options: ["Pepsin", "Trypsin", "Amylase", "Lipase"], correctAnswer: 2, explanation: "Salivary amylase digests starch - Highly Repeated!" },
  { id: 208, question: "Hemoglobin transports:", options: ["CO₂", "Oxygen", "Water", "Nitrogen"], correctAnswer: 1, explanation: "Hemoglobin carries oxygen in RBCs." },
  { id: 209, question: "Which metal ion is central to Chlorophyll?", options: ["Iron", "Magnesium", "Calcium", "Sodium"], correctAnswer: 1, explanation: "Magnesium is at the center of chlorophyll." },
  { id: 210, question: "Photosynthesis mainly occurs during:", options: ["Night", "Day", "Both", "Rainy season"], correctAnswer: 1, explanation: "Photosynthesis requires light." },
  { id: 211, question: "The shape of Polio virus is:", options: ["Rod-shaped", "Tadpole", "Spherical", "Spiral"], correctAnswer: 2, explanation: "Polio virus has spherical shape - Most Repeated!" },
  { id: 212, question: "Which disease is NOT caused by poor diet?", options: ["Scurvy", "Rickets", "Mumps", "Beri-Beri"], correctAnswer: 2, explanation: "Mumps is viral, not nutritional." },
  { id: 213, question: "The Class of Man is:", options: ["Aves", "Mammalia", "Reptilia", "Amphibia"], correctAnswer: 1, explanation: "Humans belong to Class Mammalia - Most Repeated!" },
  { id: 214, question: "Reptiles and Birds excrete waste as:", options: ["Urea", "Ammonia", "Uric Acid", "Sweat"], correctAnswer: 2, explanation: "Uric acid conserves water." },
  { id: 215, question: "Plants obtain Nitrogen from soil as:", options: ["Nitrites", "Nitrates", "N₂ gas", "Ammonia"], correctAnswer: 1, explanation: "Plants absorb nitrates from soil." },
  { id: 216, question: "Human Heart has how many chambers?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "Heart has 4 chambers - Most Repeated!" },
  { id: 217, question: "Universal Blood Donor group is:", options: ["A+", "B+", "O-", "AB+"], correctAnswer: 2, explanation: "O Negative can donate to anyone." },
  { id: 218, question: "Largest gland in human body is:", options: ["Pancreas", "Liver", "Thyroid", "Pituitary"], correctAnswer: 1, explanation: "Liver is the largest gland." },
  { id: 219, question: "Smallest bone in human body is:", options: ["Femur", "Radius", "Stapes", "Ulna"], correctAnswer: 2, explanation: "Stapes in the ear is smallest." },
  { id: 220, question: "Which part of brain controls breathing?", options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Thalamus"], correctAnswer: 2, explanation: "Medulla controls involuntary functions." },
  { id: 221, question: "Functional unit of Kidney is:", options: ["Neuron", "Nephron", "Alveoli", "Villus"], correctAnswer: 1, explanation: "Nephrons filter blood in kidneys." },
  { id: 222, question: "Major unit of Ecology is:", options: ["Biosphere", "Ecosystem", "Population", "Community"], correctAnswer: 1, explanation: "Ecosystem is the major ecological unit." },
  { id: 223, question: "Environmental pollution in Pakistan is a:", options: ["Local", "National", "Personal", "None"], correctAnswer: 1, explanation: "It's a national problem." },
  { id: 224, question: "Best source of Renewable Energy:", options: ["Coal", "Petroleum", "Trees/Biomass", "Gas"], correctAnswer: 2, explanation: "Biomass is renewable." },
  { id: 225, question: "Algae reduce pollution by:", options: ["Bio-magnification", "Bio-absorption", "Bio-degradation", "None"], correctAnswer: 1, explanation: "Algae absorb heavy metals." }
];
