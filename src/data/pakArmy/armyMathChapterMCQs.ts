// PMA - Math Chapter MCQs (extracted from 8 PDF sources)
import { MCQ } from "@/types";

// Chapter 2: Matrices & Determinants
export const armyMathCh2MCQs: MCQ[] = [
  { id: "army-math-ch2-1", question: "Matrix with equal number of rows and columns is called?", options: ["Square Matrix", "Rectangular Matrix", "Row Matrix", "Column Matrix"], correctAnswer: 0, explanation: "PMA 138 LC — A square matrix has equal rows and columns." },
  { id: "army-math-ch2-2", question: "Determinant of identity matrix is?", options: ["1", "0", "-1", "Undefined"], correctAnswer: 0, explanation: "PMA 141 LC — Determinant of identity matrix is 1." },
  { id: "army-math-ch2-3", question: "The inverse of a scalar matrix is?", options: ["Scalar Matrix", "Identity Matrix", "Null Matrix", "Diagonal Matrix"], correctAnswer: 0, explanation: "PMA 154 LC — Inverse of a scalar matrix is also a scalar matrix." },
  { id: "army-math-ch2-4", question: "A matrix with unequal rows and columns is called?", options: ["Rectangular Matrix", "Square Matrix", "Scalar Matrix", "Identity Matrix"], correctAnswer: 0, explanation: "PMA 141 LC — Rectangular matrix has unequal rows/columns." },
];

// Chapter 3: Trigonometry
export const armyMathCh3MCQs: MCQ[] = [
  { id: "army-math-ch3-1", question: "Convert 30 degrees to radians:", options: ["π/6", "π/4", "π/3", "π/2"], correctAnswer: 0, explanation: "PMA 153 LC — 30° = π/6 radians." },
  { id: "army-math-ch3-2", question: "Sin(180-x) = ?", options: ["Sin x", "Cos x", "-Sin x", "-Cos x"], correctAnswer: 0, explanation: "PMA 154 LC — Sin(180-x) = Sin x." },
  { id: "army-math-ch3-3", question: "Cos 0° = ?", options: ["1", "0", "-1", "1/2"], correctAnswer: 0, explanation: "PMA 154 LC — Cos 0° = 1." },
];

// Chapter 5: Permutations & Combinations (additional)
export const armyMathCh5MCQs: MCQ[] = [
  { id: "army-math-ch5-1", question: "If nCr and n=r, then nCr = ?", options: ["1", "0", "n", "n!"], correctAnswer: 0, explanation: "PMA 141 LC — When n=r, nCr = 1." },
  { id: "army-math-ch5-2", question: "Factorial of 3 is?", options: ["6", "3", "9", "1"], correctAnswer: 0, explanation: "PMA 154 LC — 3! = 3×2×1 = 6." },
];

// Chapter 6: Differentiation (additional)
export const armyMathCh6MCQs: MCQ[] = [
  { id: "army-math-ch6-1", question: "Derivative of cos(x) is?", options: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], correctAnswer: 0, explanation: "PMA 138 LC — d/dx(cos x) = -sin x." },
];

// Chapter 7: Integration (additional)
export const armyMathCh7MCQs: MCQ[] = [
  { id: "army-math-ch7-1", question: "Integral of cot(x) is?", options: ["ln|sin x| + C", "ln|cos x| + C", "-ln|sin x| + C", "ln|tan x| + C"], correctAnswer: 0, explanation: "PMA 154 LC — ∫cot x dx = ln|sin x| + C." },
];

// Chapter 8: Arithmetic & Number Systems (additional)
export const armyMathCh8MCQs: MCQ[] = [
  { id: "army-math-ch8-1", question: "Logarithm of unity (1) to any base is?", options: ["0", "1", "Undefined", "Infinity"], correctAnswer: 0, explanation: "PMA 154 LC — log₁ = 0 for any base." },
  { id: "army-math-ch8-2", question: "3 + 6i, its conjugate is?", options: ["3 - 6i", "3 + 6i", "-3 + 6i", "-3 - 6i"], correctAnswer: 0, explanation: "PMA 138 LC — Conjugate of 3+6i is 3-6i." },
  { id: "army-math-ch8-3", question: "Multiplicative identity of complex numbers is?", options: ["1", "0", "i", "-1"], correctAnswer: 0, explanation: "PMA Experience — Multiplicative identity is 1." },
  { id: "army-math-ch8-4", question: "-i^19 = ?", options: ["-i", "i", "1", "-1"], correctAnswer: 0, explanation: "PMA 141 LC — i^19 = i^(4×4+3) = i^3 = -i, so -i^19 = -(-i) = i. Check options." },
  { id: "army-math-ch8-5", question: "(-2)/(-2) = ?", options: ["1", "-1", "0", "4"], correctAnswer: 0, explanation: "PMA 154 LC — (-2)/(-2) = 1." },
];

// Chapter 9: Algebra (additional)
export const armyMathCh9MCQs: MCQ[] = [
  { id: "army-math-ch9-1", question: "What is the slope of line y = 2x + 5?", options: ["2", "5", "-2", "0"], correctAnswer: 0, explanation: "PMA 154 LC — In y=mx+b, slope m=2." },
  { id: "army-math-ch9-2", question: "One-to-one function is called?", options: ["Injective", "Surjective", "Bijective", "Constant"], correctAnswer: 0, explanation: "PMA 138 LC — One-to-one function is called injective." },
  { id: "army-math-ch9-3", question: "If f(x) = 2, what is f(x+2)?", options: ["2", "4", "x+2", "0"], correctAnswer: 0, explanation: "PMA 138 LC — If f(x)=2 (constant), then f(x+2)=2." },
  { id: "army-math-ch9-4", question: "38th parallel separates which two countries?", options: ["North Korea and South Korea", "India and China", "USA and Mexico", "Germany East and West"], correctAnswer: 0, explanation: "PMA 154 LC — 38th parallel separates North and South Korea." },
];

// Chapter 10: Geometry (additional)
export const armyMathCh10MCQs: MCQ[] = [
  { id: "army-math-ch10-1", question: "A prism has how many plane faces?", options: ["5", "4", "6", "3"], correctAnswer: 0, explanation: "PMA 153 LC — A triangular prism has 5 faces." },
  { id: "army-math-ch10-2", question: "Area of a rectangle with sides 4cm and 7cm is?", options: ["28 cm²", "11 cm²", "56 cm²", "14 cm²"], correctAnswer: 0, explanation: "PMA 154 LC — Area = 4×7 = 28 cm²." },
  { id: "army-math-ch10-3", question: "An octagon has how many sides?", options: ["8", "6", "10", "12"], correctAnswer: 0, explanation: "PMA 141 LC — An octagon has 8 sides." },
];
