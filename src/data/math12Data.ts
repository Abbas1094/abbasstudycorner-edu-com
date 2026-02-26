import { MCQ } from "@/types";

// ========== CHAPTER 1: FUNCTIONS AND LIMITS ==========
export const math12Ch1MCQs: MCQ[] = [
  {
    id: "m12-ch1-1",
    question: "The perimeter P of a square as a function of its area A is:",
    options: ["P = √A", "P = 4√A", "P = 4A", "P = (1/4)√A"],
    correctAnswer: 1,
    explanation: "Side = √A, so Perimeter = 4 × √A = 4√A."
  },
  {
    id: "m12-ch1-2",
    question: "The range of f(x) = x² is:",
    options: ["(−∞, 0)", "(−∞, ∞)", "(−1, 0)", "[0, ∞)"],
    correctAnswer: 3,
    explanation: "Since x² is always ≥ 0 for all real x, the range is [0, ∞)."
  },
  {
    id: "m12-ch1-3",
    question: "lim (n→∞) (1 + 1/n)²ⁿ =",
    options: ["e", "e²", "eⁿ", "zero"],
    correctAnswer: 1,
    explanation: "lim (1+1/n)ⁿ = e, so lim (1+1/n)²ⁿ = [lim(1+1/n)ⁿ]² = e²."
  },
  {
    id: "m12-ch1-4",
    question: "If f(x) = 1/x² (x ≠ 0), then fof(x) is:",
    options: ["x⁴", "x²", "1", "1/x⁴"],
    correctAnswer: 0,
    explanation: "f(f(x)) = f(1/x²) = 1/(1/x²)² = 1/(1/x⁴) = x⁴."
  },
  {
    id: "m12-ch1-5",
    question: "lim (x→0) (1 + 3x)^(2/x) =",
    options: ["e²", "e⁸", "e⁶", "e⁴"],
    correctAnswer: 2,
    explanation: "Rewrite as [(1+3x)^(1/3x)]⁶ → e⁶ as x→0."
  },
  {
    id: "m12-ch1-6",
    question: "If f(x) = x sec x, then f(π) =",
    options: ["π", "2π", "−π", "−2π"],
    correctAnswer: 2,
    explanation: "f(π) = π × sec(π) = π × (−1) = −π."
  },
  {
    id: "m12-ch1-7",
    question: "If f(x) = 2x² + 4x − 2, then f(−2) =",
    options: ["0", "−1", "2", "−2"],
    correctAnswer: 3,
    explanation: "f(−2) = 2(4) + 4(−2) − 2 = 8 − 8 − 2 = −2."
  },
  {
    id: "m12-ch1-8",
    question: "Which one is a constant function?",
    options: ["f(x) = x", "f(x) = x²", "f(x) = 5", "f(x) = sin x"],
    correctAnswer: 2,
    explanation: "f(x) = 5 gives the same output for every input, making it a constant function."
  },
  {
    id: "m12-ch1-9",
    question: "x = a cos θ, y = b sin θ are parametric equations of:",
    options: ["Circle", "Parabola", "Ellipse", "Hyperbola"],
    correctAnswer: 2,
    explanation: "Eliminating θ: (x/a)² + (y/b)² = cos²θ + sin²θ = 1, which is an ellipse."
  },
  {
    id: "m12-ch1-10",
    question: "If f(x) = √(x² − 1) then domain of f is:",
    options: ["(−∞, ∞)", "[1, ∞)", "[0, ∞)", "(−∞, −1] ∪ [1, ∞)"],
    correctAnswer: 3,
    explanation: "We need x² − 1 ≥ 0, so x ≤ −1 or x ≥ 1. Domain = (−∞, −1] ∪ [1, ∞)."
  },
  {
    id: "m12-ch1-11",
    question: "lim (x→3) (2x + 4) =",
    options: ["3", "6", "10", "12"],
    correctAnswer: 2,
    explanation: "Direct substitution: 2(3) + 4 = 10."
  },
  {
    id: "m12-ch1-12",
    question: "If f(x) = √(x − 12), then f(16) =",
    options: ["16", "12", "28", "2"],
    correctAnswer: 3,
    explanation: "f(16) = √(16 − 12) = √4 = 2."
  },
  {
    id: "m12-ch1-13",
    question: "Domain of cosine function y = cos x is:",
    options: ["Real numbers", "[−1, 1]", "(0, ∞)", "(−1, 1)"],
    correctAnswer: 0,
    explanation: "cos x is defined for all real numbers. Its range is [−1, 1], but domain is all reals."
  },
  {
    id: "m12-ch1-14",
    question: "lim (x→0) sin 7x / x =",
    options: ["7", "−7", "−1/7", "1/7"],
    correctAnswer: 0,
    explanation: "lim (sin 7x)/x = 7 × lim (sin 7x)/(7x) = 7 × 1 = 7."
  },
  {
    id: "m12-ch1-15",
    question: "If f(x) = sin x + cos x then f(x) is:",
    options: ["Even function", "Odd function", "Neither even nor odd", "Constant function"],
    correctAnswer: 2,
    explanation: "f(−x) = −sin x + cos x ≠ f(x) and ≠ −f(x), so it is neither even nor odd."
  },
  {
    id: "m12-ch1-16",
    question: "y = x² + 2x − 1 is a _____ function.",
    options: ["Constant", "Linear", "Implicit", "Explicit"],
    correctAnswer: 3,
    explanation: "y is expressed directly in terms of x, so it is an explicit function."
  },
  {
    id: "m12-ch1-17",
    question: "fof⁻¹(x) is a _____ function.",
    options: ["Constant", "Identity", "Even", "Exponential"],
    correctAnswer: 1,
    explanation: "Composing a function with its inverse gives the identity function: fof⁻¹(x) = x."
  }
];

// ========== CHAPTER 2: DIFFERENTIATION ==========
export const math12Ch2MCQs: MCQ[] = [
  {
    id: "m12-ch2-1",
    question: "d/dx (1/x²) at x = 1 is:",
    options: ["−2", "2", "1", "−1"],
    correctAnswer: 0,
    explanation: "d/dx (x⁻²) = −2x⁻³. At x = 1: −2(1)⁻³ = −2."
  },
  {
    id: "m12-ch2-2",
    question: "If f'(c) = 0 then f(x) has relative maximum value at x = c if:",
    options: ["f''(c) < 0", "f''(c) > 0", "f''(c) = 0", "f'''(c) = 0"],
    correctAnswer: 0,
    explanation: "For a relative maximum, the second derivative must be negative: f''(c) < 0."
  },
  {
    id: "m12-ch2-3",
    question: "d/dx (ln cos x) =",
    options: ["tan x", "cot x", "−tan x", "−cot x"],
    correctAnswer: 2,
    explanation: "d/dx (ln cos x) = (1/cos x)(−sin x) = −tan x."
  },
  {
    id: "m12-ch2-4",
    question: "If y = x² − 1, then dy =",
    options: ["x dx + c", "(x − 1) dx", "2x dx + c", "2x dx"],
    correctAnswer: 3,
    explanation: "dy = (dy/dx) dx = 2x dx."
  },
  {
    id: "m12-ch2-5",
    question: "d/dx (tan⁻¹ x) =",
    options: ["1/(1 + x²)", "−1/(1 + x²)", "1/√(1 + x²)", "−1/√(1 + x²)"],
    correctAnswer: 0,
    explanation: "The derivative of tan⁻¹x is 1/(1 + x²)."
  },
  {
    id: "m12-ch2-6",
    question: "If y = cosh x, then dy/dx =",
    options: ["−sinh x", "sinh y", "−cosh x", "sinh x"],
    correctAnswer: 3,
    explanation: "The derivative of cosh x is sinh x."
  },
  {
    id: "m12-ch2-7",
    question: "d/dx (sinh 2x) =",
    options: ["2 cosh 2x", "2 sinh 2x", "−2 cosh 2x", "−2 sinh 2x"],
    correctAnswer: 0,
    explanation: "By chain rule: d/dx (sinh 2x) = cosh 2x × 2 = 2 cosh 2x."
  },
  {
    id: "m12-ch2-8",
    question: "If y = cosh 2x, then dy/dx =",
    options: ["2 sinh 2x", "−sinh 2x", "−2 sinh 2x", "cosh 2x"],
    correctAnswer: 0,
    explanation: "By chain rule: d/dx (cosh 2x) = sinh 2x × 2 = 2 sinh 2x."
  },
  {
    id: "m12-ch2-9",
    question: "d/dx [f(u)] =",
    options: ["f'(du)", "f'(u) × du/dx", "f''(u) du", "f'(x) dx"],
    correctAnswer: 1,
    explanation: "By the chain rule, d/dx [f(u)] = f'(u) × du/dx."
  },
  {
    id: "m12-ch2-10",
    question: "The notation used for derivative of f(x) by Cauchy is:",
    options: ["Df(x)", "f''(x)", "ḟ(x)", "df/dx"],
    correctAnswer: 0,
    explanation: "Cauchy used the notation Df(x) for the derivative of f(x)."
  },
  {
    id: "m12-ch2-11",
    question: "If y = ln x, then y₂ =",
    options: ["1/x", "−1/x²", "−1/x", "1/x²"],
    correctAnswer: 1,
    explanation: "y₁ = 1/x = x⁻¹, so y₂ = −x⁻² = −1/x²."
  },
  {
    id: "m12-ch2-12",
    question: "d/dx (e^(sin x)) =",
    options: ["cos x", "e^(sin x) cos x", "e^(sin x) sin x", "sin x"],
    correctAnswer: 1,
    explanation: "By chain rule: d/dx (e^(sin x)) = e^(sin x) × cos x."
  },
  {
    id: "m12-ch2-13",
    question: "d/dx (cos⁻¹ 3x) =",
    options: ["3/√(1 − 9x²)", "−3/√(1 − 9x²)", "1/√(1 − 9x²)", "−1/√(1 − 9x²)"],
    correctAnswer: 1,
    explanation: "d/dx (cos⁻¹ u) = −1/√(1−u²) × du/dx. With u = 3x: −3/√(1 − 9x²)."
  },
  {
    id: "m12-ch2-14",
    question: "d/dx (√x) =",
    options: ["1/2", "1/(2√x)", "1/(2x)", "2/√x"],
    correctAnswer: 1,
    explanation: "d/dx (x^(1/2)) = (1/2)x^(−1/2) = 1/(2√x)."
  },
  {
    id: "m12-ch2-15",
    question: "If f(x) = sin x, then f'(π) =",
    options: ["−1", "1", "0", "1/2"],
    correctAnswer: 0,
    explanation: "f'(x) = cos x, so f'(π) = cos π = −1."
  },
  {
    id: "m12-ch2-16",
    question: "d/dx (2/x) =",
    options: ["ln|x²|", "−2/x²", "−2x²", "2ˣ"],
    correctAnswer: 1,
    explanation: "d/dx (2x⁻¹) = 2(−1)x⁻² = −2/x²."
  },
  {
    id: "m12-ch2-17",
    question: "If y = tanh⁻¹ x, then dy/dx =",
    options: ["1/(1 + x²)", "1/(1 − x²)", "−1/(1 + x²)", "−1/(1 − x²)"],
    correctAnswer: 1,
    explanation: "The derivative of tanh⁻¹ x is 1/(1 − x²)."
  },
  {
    id: "m12-ch2-18",
    question: "d/dx (a^(λx)) =",
    options: ["a^(λx)", "a^(λx) ln a", "λ a^(λx) ln a", "a^(λx) / (λ ln a)"],
    correctAnswer: 2,
    explanation: "d/dx (a^(λx)) = a^(λx) × ln a × λ = λ a^(λx) ln a."
  },
  {
    id: "m12-ch2-19",
    question: "d/dx (sin √x) =",
    options: ["cos √x", "cos √x × (1/√x)", "√x cos √x", "cos √x × 1/(2√x)"],
    correctAnswer: 3,
    explanation: "By chain rule: cos √x × d/dx(√x) = cos √x × 1/(2√x)."
  },
  {
    id: "m12-ch2-20",
    question: "f(x) = f(0) + xf'(0) + (x²/2!)f''(0) + ... is called:",
    options: ["Taylor's series", "Binomial series", "Maclaurin's series", "Laurent series"],
    correctAnswer: 2,
    explanation: "This is the Maclaurin's series — a Taylor series expansion about x = 0."
  },
  {
    id: "m12-ch2-21",
    question: "d/dx (x² + 1)² =",
    options: ["2x(x² + 1)", "(x² + 1)³/3", "2(x² + 1)", "4x(x² + 1)"],
    correctAnswer: 3,
    explanation: "By chain rule: 2(x² + 1) × 2x = 4x(x² + 1)."
  },
  {
    id: "m12-ch2-22",
    question: "d/dx (tan x²) =",
    options: ["sec² x²", "2x sec² x²", "−sec² x²", "−2x sec² x²"],
    correctAnswer: 1,
    explanation: "By chain rule: sec²(x²) × d/dx(x²) = 2x sec² x²."
  },
  {
    id: "m12-ch2-23",
    question: "d/dx [f(x) sin x] =",
    options: ["f(x) cos x + f'(x) sin x", "f'(x) sin x − f(x) cos x", "f'(x) cos x", "f'(x) cos x + f(x) sin x"],
    correctAnswer: 0,
    explanation: "By product rule: f(x) cos x + f'(x) sin x."
  },
  {
    id: "m12-ch2-24",
    question: "If f(x) = x^(2/3), then f'(8) =",
    options: ["3/2", "2/3", "1/3", "3"],
    correctAnswer: 2,
    explanation: "f'(x) = (2/3)x^(−1/3). f'(8) = (2/3)(8)^(−1/3) = (2/3)(1/2) = 1/3."
  },
  {
    id: "m12-ch2-25",
    question: "d/dx (e^(3x)) =",
    options: ["e^(3x)", "3e^(3x)", "e^(3x)/3", "eˣ"],
    correctAnswer: 1,
    explanation: "By chain rule: e^(3x) × 3 = 3e^(3x)."
  },
  {
    id: "m12-ch2-26",
    question: "(1 + x²) × d/dx [tan⁻¹ x + cot⁻¹ x] =",
    options: ["2", "2/(1 + x²)", "0", "−2/(1 + x²)"],
    correctAnswer: 2,
    explanation: "tan⁻¹ x + cot⁻¹ x = π/2 (constant), so its derivative is 0. Thus (1+x²) × 0 = 0."
  },
  {
    id: "m12-ch2-27",
    question: "If f(x + h) = a^(x+h), then f'(x) =",
    options: ["a^(x+h) ln(x+h)", "aˣ ln a", "aˣ ln x", "a^(x+h) ln a"],
    correctAnswer: 1,
    explanation: "f(x) = aˣ, so f'(x) = aˣ ln a."
  },
  {
    id: "m12-ch2-28",
    question: "d/dx (sinh⁻¹ x) =",
    options: ["1/√(1 + x²)", "−1/√(1 + x²)", "1/√(1 − x²)", "−1/√(1 − x²)"],
    correctAnswer: 0,
    explanation: "The derivative of sinh⁻¹ x is 1/√(1 + x²)."
  },
  {
    id: "m12-ch2-29",
    question: "d/dx (ln 2x) =",
    options: ["1/(2x)", "1/x", "2/(2x)", "2x"],
    correctAnswer: 1,
    explanation: "d/dx (ln 2x) = d/dx (ln 2 + ln x) = 0 + 1/x = 1/x."
  },
  {
    id: "m12-ch2-30",
    question: "If f(x) = cos x, then f²(π/2) =",
    options: ["−1", "−1/2", "0", "1"],
    correctAnswer: 2,
    explanation: "f(π/2) = cos(π/2) = 0, so f²(π/2) = 0² = 0."
  },
  {
    id: "m12-ch2-31",
    question: "1/√(x² − 1) is derivative of:",
    options: ["sinh⁻¹ x", "cosh⁻¹ x", "tanh⁻¹ x", "coth⁻¹ x"],
    correctAnswer: 1,
    explanation: "d/dx (cosh⁻¹ x) = 1/√(x² − 1)."
  }
];

// ========== CHAPTER 3: INTEGRATION ==========
export const math12Ch3MCQs: MCQ[] = [
  {
    id: "m12-ch3-1",
    question: "∫ eˣ (sin x + cos x) dx =",
    options: ["eˣ sin x + c", "eˣ cos x + c", "−eˣ sin x + c", "−eˣ cos x + c"],
    correctAnswer: 0,
    explanation: "Using ∫eˣ[f(x) + f'(x)]dx = eˣf(x) + c, with f(x) = sin x, f'(x) = cos x."
  },
  {
    id: "m12-ch3-2",
    question: "∫ (1/x) dx =",
    options: ["x⁻²/(−2) + c", "x⁰/0 + c", "1/x² + c", "ln x + c"],
    correctAnswer: 3,
    explanation: "The integral of 1/x is ln|x| + c."
  },
  {
    id: "m12-ch3-3",
    question: "∫₀³ 1/(9 + x²) dx =",
    options: ["π/4", "π/6", "π/8", "π/12"],
    correctAnswer: 3,
    explanation: "∫ 1/(9+x²) dx = (1/3)tan⁻¹(x/3). From 0 to 3: (1/3)(π/4 − 0) = π/12."
  },
  {
    id: "m12-ch3-4",
    question: "∫ 1/cos² x dx =",
    options: ["1/sin² x + c", "tan x + c", "sec² x + c", "cosec² x + c"],
    correctAnswer: 1,
    explanation: "1/cos²x = sec²x, and ∫sec²x dx = tan x + c."
  },
  {
    id: "m12-ch3-5",
    question: "∫ eˣ (1 + x) dx =",
    options: ["eˣ + c", "xeˣ + c", "x²eˣ + c", "xeˣ/2 + c"],
    correctAnswer: 1,
    explanation: "∫eˣ(x + 1) dx = ∫eˣ[f(x) + f'(x)]dx where f(x) = x, f'(x) = 1. Result = xeˣ + c."
  },
  {
    id: "m12-ch3-6",
    question: "∫ 3^(λx) dx =",
    options: ["3^(λx)/ln 3", "3^(λx) ln 3", "(1/λ) × 3^(λx)/ln 3", "3^(λx)"],
    correctAnswer: 2,
    explanation: "∫ aˣ dx = aˣ/(ln a). With chain rule for λx: (1/λ) × 3^(λx)/ln 3 + c."
  },
  {
    id: "m12-ch3-7",
    question: "∫ dx/(a² + x²) =",
    options: ["(1/a) tan⁻¹(x/a) + c", "(1/2a) ln|(x−a)/(x+a)|", "(1/2a) ln|(x+a)/(x−a)|", "(1/2) ln(a²+x²)"],
    correctAnswer: 0,
    explanation: "Standard formula: ∫ dx/(a² + x²) = (1/a) tan⁻¹(x/a) + c."
  },
  {
    id: "m12-ch3-8",
    question: "∫₋π^π sin x dx =",
    options: ["0", "9", "1", "2"],
    correctAnswer: 0,
    explanation: "sin x is an odd function, so ∫₋π^π sin x dx = 0."
  },
  {
    id: "m12-ch3-9",
    question: "Suitable substitution to evaluate ∫ 1/√(x² − a²) dx is:",
    options: ["x = a sin θ", "x = a tan θ", "x = a sec θ", "x = a cos θ"],
    correctAnswer: 2,
    explanation: "For √(x² − a²), use x = a sec θ so that x² − a² = a² tan² θ."
  },
  {
    id: "m12-ch3-10",
    question: "∫ (sec² θ − tan² θ) dθ =",
    options: ["θ + c", "sin θ + cos θ + c", "2 sec θ − 2 tan θ + c", "tan θ − cot θ + c"],
    correctAnswer: 0,
    explanation: "sec²θ − tan²θ = 1 (identity), so ∫ 1 dθ = θ + c."
  },
  {
    id: "m12-ch3-11",
    question: "∫₋π/₄^(π/4) sec² θ dθ =",
    options: ["1", "2", "Zero", "3"],
    correctAnswer: 1,
    explanation: "[tan θ] from −π/4 to π/4 = tan(π/4) − tan(−π/4) = 1 − (−1) = 2."
  },
  {
    id: "m12-ch3-12",
    question: "∫ sec x dx =",
    options: ["ln|sec x − tan x| + c", "ln|sec x + cot x| + c", "ln|sec x + cosec x| + c", "ln|sec x + tan x| + c"],
    correctAnswer: 3,
    explanation: "Standard result: ∫ sec x dx = ln|sec x + tan x| + c."
  },
  {
    id: "m12-ch3-13",
    question: "∫₀¹ |x| dx =",
    options: ["1", "2", "0", "1/2"],
    correctAnswer: 3,
    explanation: "On [0,1], |x| = x. So ∫₀¹ x dx = [x²/2]₀¹ = 1/2."
  },
  {
    id: "m12-ch3-14",
    question: "∫ 2ˣ dx =",
    options: ["2ˣ + c", "2ˣ × ln 2 + c", "ln 2 / 2ˣ + c", "2ˣ / ln 2 + c"],
    correctAnswer: 3,
    explanation: "∫ aˣ dx = aˣ / ln a + c. So ∫ 2ˣ dx = 2ˣ / ln 2 + c."
  },
  {
    id: "m12-ch3-15",
    question: "∫ e^(tan⁻¹ x) × 1/(1 + x²) dx =",
    options: ["e^(tan⁻¹ x) + c", "1/(1 + x²) + c", "e^(cos⁻¹ x) + c", "e^(sec² x) + c"],
    correctAnswer: 0,
    explanation: "Let u = tan⁻¹ x, du = 1/(1+x²) dx. ∫ eᵘ du = eᵘ + c = e^(tan⁻¹ x) + c."
  },
  {
    id: "m12-ch3-16",
    question: "If ∫₂ᵏ 2 dx = 12, then K =",
    options: ["12", "16", "8", "4"],
    correctAnswer: 2,
    explanation: "∫₂ᵏ 2 dx = 2(K − 2) = 12 → K − 2 = 6 → K = 8."
  },
  {
    id: "m12-ch3-17",
    question: "∫ dx/√(5 − x²) =",
    options: ["sin⁻¹(x/5)", "sin⁻¹(x/√5)", "sin⁻¹(x/5) + c", "sin⁻¹(√5/x)"],
    correctAnswer: 1,
    explanation: "∫ dx/√(a² − x²) = sin⁻¹(x/a) + c. Here a = √5, so sin⁻¹(x/√5) + c."
  },
  {
    id: "m12-ch3-18",
    question: "∫ sec² x × tan x dx =",
    options: ["sec x tan² x + c", "sec³ x / 3 + c", "sec³ x tan x / 3 + c", "tan² x / 2 + c"],
    correctAnswer: 3,
    explanation: "Let u = tan x, du = sec²x dx. ∫ u du = u²/2 + c = tan²x/2 + c."
  },
  {
    id: "m12-ch3-19",
    question: "∫ dx / [x(ln 2x)³] =",
    options: ["ln(ln 2x)³ + c", "(ln 2x)⁴/4 + c", "1/(ln 2x)³ + c", "−1/[2(ln 2x)²] + c"],
    correctAnswer: 3,
    explanation: "Let u = ln 2x, du = 1/x dx. ∫ u⁻³ du = u⁻²/(−2) = −1/[2(ln 2x)²] + c."
  },
  {
    id: "m12-ch3-20",
    question: "∫₀^(π/4) sec² x dx =",
    options: ["0", "1", "√2", "1/√2"],
    correctAnswer: 1,
    explanation: "[tan x]₀^(π/4) = tan(π/4) − tan(0) = 1 − 0 = 1."
  },
  {
    id: "m12-ch3-21",
    question: "∫₋₁³ x³ dx =",
    options: ["20", "40", "60", "80"],
    correctAnswer: 0,
    explanation: "[x⁴/4]₋₁³ = 81/4 − 1/4 = 80/4 = 20."
  },
  {
    id: "m12-ch3-22",
    question: "∫ ln a × aˣ dx =",
    options: ["aˣ + c", "aˣ/ln a + c", "ln aˣ + c", "2aˣ + c"],
    correctAnswer: 0,
    explanation: "∫ aˣ dx = aˣ/ln a + c. So ∫ ln a × aˣ dx = ln a × aˣ/ln a + c = aˣ + c."
  },
  {
    id: "m12-ch3-23",
    question: "∫ eˣ/(eˣ − 1) dx =",
    options: ["ln|1 − eˣ| + c", "ln|1 + e⁻ˣ| + c", "ln|eˣ − 1| + c", "ln|1 − e⁻ˣ| + c"],
    correctAnswer: 2,
    explanation: "Let u = eˣ − 1, du = eˣ dx. ∫ du/u = ln|u| + c = ln|eˣ − 1| + c."
  },
  {
    id: "m12-ch3-24",
    question: "∫ₐᵇ f(x) dx =",
    options: ["∫ᵇₐ f(x) dx", "−∫ᵇₐ f(x) dx", "[f(x)]ₐᵇ", "f(b) − f(a)"],
    correctAnswer: 1,
    explanation: "Reversing the limits of integration changes the sign: ∫ₐᵇ = −∫ᵇₐ."
  },
  {
    id: "m12-ch3-25",
    question: "∫₀⁴ x dx =",
    options: ["0", "6", "8", "16"],
    correctAnswer: 2,
    explanation: "[x²/2]₀⁴ = 16/2 − 0 = 8."
  },
  {
    id: "m12-ch3-26",
    question: "∫₀^(π/4) sec² x / (1 + tan x) dx =",
    options: ["1", "2", "ln 2", "ln √2"],
    correctAnswer: 2,
    explanation: "Let u = 1 + tan x, du = sec²x dx. From x=0 to π/4: u goes 1 to 2. ∫₁² du/u = ln 2."
  },
  {
    id: "m12-ch3-27",
    question: "∫ √(2x + 3) × 2 dx =",
    options: ["(2/3)(2x + 3)^(3/2) + c", "(3/2)(2x + 3)²", "(−2/3)(2x + 3)²", "(−3/2)(2x + 3)^(3/2)"],
    correctAnswer: 0,
    explanation: "Let u = 2x+3, du = 2dx. ∫ √u du = (2/3)u^(3/2) + c = (2/3)(2x+3)^(3/2) + c."
  },
  {
    id: "m12-ch3-28",
    question: "∫ tan² x dx =",
    options: ["2 tan x + c", "tan x − c", "tan x + x + c", "tan x − x + c"],
    correctAnswer: 3,
    explanation: "tan²x = sec²x − 1. ∫(sec²x − 1)dx = tan x − x + c."
  },
  {
    id: "m12-ch3-29",
    question: "∫ cosec x dx =",
    options: ["−cosec x cot x + c", "ln|cosec x − cot x| + c", "ln|cosec x + cot x| + c", "ln|sec x + tan x| + c"],
    correctAnswer: 1,
    explanation: "Standard result: ∫ cosec x dx = ln|cosec x − cot x| + c."
  },
  {
    id: "m12-ch3-30",
    question: "∫₀^π cos x dx =",
    options: ["2", "−1", "0", "2"],
    correctAnswer: 2,
    explanation: "[sin x]₀^π = sin π − sin 0 = 0 − 0 = 0."
  },
  {
    id: "m12-ch3-31",
    question: "∫ 2/(x + 2) dx =",
    options: ["ln|x + 2| + c", "ln|x + 2|² + c", "1/ln|x + 2| + c", "2 ln x + c"],
    correctAnswer: 1,
    explanation: "∫ 2/(x+2) dx = 2 ln|x+2| + c = ln|x+2|² + c."
  },
  {
    id: "m12-ch3-32",
    question: "∫ eˣ/(eˣ + 1) dx =",
    options: ["ln(eˣ + 1) + c", "ln eˣ + c", "e⁻ˣ + c", "eˣ + c"],
    correctAnswer: 0,
    explanation: "Let u = eˣ + 1, du = eˣ dx. ∫ du/u = ln|u| + c = ln(eˣ + 1) + c."
  },
  {
    id: "m12-ch3-33",
    question: "∫ sin² x dx =",
    options: ["x/2 − sin 2x/4 + c", "x/2 + sin 2x/4 + c", "x/2 − sin 2x/2 + c", "x/2 + sin 2x/2 + c"],
    correctAnswer: 0,
    explanation: "sin²x = (1 − cos 2x)/2. ∫ = x/2 − sin 2x/4 + c."
  },
  {
    id: "m12-ch3-34",
    question: "∫ eˣ (cos x − sin x) dx =",
    options: ["eˣ sin x + c", "eˣ cos x + c", "eˣ tan x + c", "eˣ cot x + c"],
    correctAnswer: 1,
    explanation: "Using ∫eˣ[f(x) + f'(x)]dx = eˣf(x) + c, with f(x) = cos x, f'(x) = −sin x."
  }
];

// ========== CHAPTER 4: INTRODUCTION TO ANALYTIC GEOMETRY ==========
export const math12Ch4MCQs: MCQ[] = [
  {
    id: "m12-ch4-1",
    question: "Distance of the point (3, 2) from x-axis is:",
    options: ["2", "3", "5", "6"],
    correctAnswer: 0,
    explanation: "Distance from x-axis = |y-coordinate| = |2| = 2."
  },
  {
    id: "m12-ch4-2",
    question: "The distance of point (3, 7) from x-axis is:",
    options: ["3", "7", "−3", "−7"],
    correctAnswer: 1,
    explanation: "Distance from x-axis = |y-coordinate| = |7| = 7."
  },
  {
    id: "m12-ch4-3",
    question: "The distance of the point (−1, 3) from x-axis is:",
    options: ["1", "−1", "3", "−3"],
    correctAnswer: 2,
    explanation: "Distance from x-axis = |y-coordinate| = |3| = 3."
  },
  {
    id: "m12-ch4-4",
    question: "Distance of the point P(x, y) from y-axis is:",
    options: ["|x|", "|y|", "x", "y"],
    correctAnswer: 0,
    explanation: "Distance from y-axis = |x-coordinate| = |x|."
  },
  {
    id: "m12-ch4-5",
    question: "If m₁, m₂ are slopes of perpendicular lines, then m₁ × m₂ =",
    options: ["0", "−1", "1", "undefined"],
    correctAnswer: 1,
    explanation: "For perpendicular lines, the product of their slopes is −1."
  },
  {
    id: "m12-ch4-6",
    question: "The lines l₁, l₂ with slopes m₁ and m₂ are parallel if:",
    options: ["m₁ + m₂ = 0", "m₁ × m₂ = 1", "m₁ × m₂ = −1", "m₁ = m₂"],
    correctAnswer: 3,
    explanation: "Parallel lines have equal slopes: m₁ = m₂."
  },
  {
    id: "m12-ch4-7",
    question: "Slope of Y-axis is:",
    options: ["zero", "1", "2", "undefined"],
    correctAnswer: 3,
    explanation: "The Y-axis is a vertical line, so its slope is undefined (infinite)."
  },
  {
    id: "m12-ch4-8",
    question: "The slope of a line x = 5 is:",
    options: ["0", "1", "−1", "Infinite"],
    correctAnswer: 3,
    explanation: "x = 5 is a vertical line; its slope is infinite (undefined)."
  },
  {
    id: "m12-ch4-9",
    question: "Slope of line parallel to y-axis:",
    options: ["−1", "0", "∞", "1"],
    correctAnswer: 2,
    explanation: "A line parallel to the y-axis is vertical, so its slope is ∞ (undefined)."
  },
  {
    id: "m12-ch4-10",
    question: "Slope of line which is perpendicular to y-axis is:",
    options: ["0", "1", "2", "Undefined"],
    correctAnswer: 0,
    explanation: "A line perpendicular to the y-axis is horizontal, so its slope is 0."
  },
  {
    id: "m12-ch4-11",
    question: "If a line l is perpendicular to x-axis, then its inclination is:",
    options: ["0°", "45°", "90°", "180°"],
    correctAnswer: 2,
    explanation: "A line perpendicular to x-axis is vertical, with inclination 90°."
  },
  {
    id: "m12-ch4-12",
    question: "If α is the inclination of the line l, then its slope is:",
    options: ["sin α", "cos α", "tan α", "cot α"],
    correctAnswer: 2,
    explanation: "Slope = tan(inclination angle) = tan α."
  },
  {
    id: "m12-ch4-13",
    question: "Coordinates of mid-point of A(−1, 4), B(6, 2):",
    options: ["(−7, 2)", "(7, −2)", "(5/2, 3)", "(3, 5/2)"],
    correctAnswer: 2,
    explanation: "Midpoint = ((−1+6)/2, (4+2)/2) = (5/2, 3)."
  },
  {
    id: "m12-ch4-14",
    question: "Midpoint of (0, −2) and (−2, 0) is:",
    options: ["(0, 0)", "(−1, −1)", "(−2, −2)", "(0, −1)"],
    correctAnswer: 1,
    explanation: "Midpoint = ((0−2)/2, (−2+0)/2) = (−1, −1)."
  },
  {
    id: "m12-ch4-15",
    question: "Midpoint of A(1, 2) & B(3, 8) is:",
    options: ["(2, 5)", "(4, 10)", "(2, 6)", "(2, 8)"],
    correctAnswer: 0,
    explanation: "Midpoint = ((1+3)/2, (2+8)/2) = (2, 5)."
  },
  {
    id: "m12-ch4-16",
    question: "The point of intersection of medians of a triangle is called:",
    options: ["Incentre", "Centroid", "Circumcentre", "Orthocenter"],
    correctAnswer: 1,
    explanation: "The medians of a triangle intersect at the centroid."
  },
  {
    id: "m12-ch4-17",
    question: "If (4, −2), (−2, 4) and (4, 10) are vertices of triangle, then its centroid will be:",
    options: ["(−2, 4)", "(2, 4)", "(2, −4)", "(−2, −4)"],
    correctAnswer: 1,
    explanation: "Centroid = ((4−2+4)/3, (−2+4+10)/3) = (6/3, 12/3) = (2, 4)."
  },
  {
    id: "m12-ch4-18",
    question: "Y-coordinate of centroid of the triangle with vertices A(−2, 3), B(−4, 1), C(3, 5) is:",
    options: ["9", "3", "9/2", "3/2"],
    correctAnswer: 1,
    explanation: "Y-coordinate of centroid = (3 + 1 + 5)/3 = 9/3 = 3."
  },
  {
    id: "m12-ch4-19",
    question: "Equation of vertical line through (7, −9) is:",
    options: ["x = 7", "x = −9", "y = 7", "y = −9"],
    correctAnswer: 0,
    explanation: "A vertical line through (7, −9) has equation x = 7."
  },
  {
    id: "m12-ch4-20",
    question: "Equation of horizontal line through (7, −9) is:",
    options: ["y = −9", "y = 7", "x = −9", "x = 7"],
    correctAnswer: 0,
    explanation: "A horizontal line through (7, −9) has equation y = −9."
  },
  {
    id: "m12-ch4-21",
    question: "Equation of vertical line is:",
    options: ["y = c", "y = −c", "x = c", "y = x"],
    correctAnswer: 2,
    explanation: "A vertical line has the form x = c (constant x-value)."
  },
  {
    id: "m12-ch4-22",
    question: "Slope of the straight line ax + by + c = 0 is:",
    options: ["a/b", "−a/b", "b/a", "−b/a"],
    correctAnswer: 1,
    explanation: "Rewriting: y = (−a/b)x − c/b. Slope = −a/b."
  },
  {
    id: "m12-ch4-23",
    question: "Y-intercept of the line 2x + 3y − 5 = 0 is:",
    options: ["2/5", "5/2", "3/5", "5/3"],
    correctAnswer: 3,
    explanation: "Put x = 0: 3y = 5, y = 5/3. Y-intercept = 5/3."
  },
  {
    id: "m12-ch4-24",
    question: "Slope of line perpendicular to the line x + 2y + 3 = 0 is:",
    options: ["−1/2", "1/2", "2", "3/2"],
    correctAnswer: 2,
    explanation: "Slope of given line = −1/2. Perpendicular slope = −1/(−1/2) = 2."
  },
  {
    id: "m12-ch4-25",
    question: "Slope of the line which is perpendicular to the line 2x − 4y + 11 = 0 is:",
    options: ["1/2", "−1/2", "2", "−2"],
    correctAnswer: 3,
    explanation: "Slope of given line = 2/4 = 1/2. Perpendicular slope = −2."
  },
  {
    id: "m12-ch4-26",
    question: "The line ax + by + c = 0 is parallel to x-axis if:",
    options: ["a = 0", "b = 0", "c = 0", "b = c"],
    correctAnswer: 0,
    explanation: "If a = 0, the equation becomes by + c = 0, i.e., y = −c/b, which is horizontal."
  },
  {
    id: "m12-ch4-27",
    question: "The lines represented by ax² + 2hxy + by² = 0 are imaginary if:",
    options: ["h² − ab = 0", "h² − ab < 0", "h² − ab > 0", "h² − ab ≠ 0"],
    correctAnswer: 1,
    explanation: "The pair of lines is imaginary when the discriminant h² − ab < 0."
  },
  {
    id: "m12-ch4-28",
    question: "If the straight lines represented by ax² + 2hxy + by² = 0 are perpendicular, then:",
    options: ["h² − ab = 0", "h² + ab = 0", "a + b = 0", "a − b = 0"],
    correctAnswer: 2,
    explanation: "For perpendicular pair of lines: coefficient of x² + coefficient of y² = 0, i.e., a + b = 0."
  },
  {
    id: "m12-ch4-29",
    question: "The lines represented by ax² + 2hxy + by² = 0 are real and coincident if:",
    options: ["h² > ab", "h² ≠ ab", "h² < ab", "h² = ab"],
    correctAnswer: 3,
    explanation: "Real and coincident lines occur when discriminant = 0, i.e., h² = ab."
  },
  {
    id: "m12-ch4-30",
    question: "If a line meets x and y axes at 2, 3 units respectively, then its equation is:",
    options: ["2x + 3y = 0", "3x + 2y = 0", "x/2 + y/3 = 0", "x/2 + y/3 = 1"],
    correctAnswer: 3,
    explanation: "Intercept form: x/a + y/b = 1. With a = 2, b = 3: x/2 + y/3 = 1."
  },
  {
    id: "m12-ch4-31",
    question: "Slope-intercept form of line is:",
    options: ["y − y₁ = m(x − x₁)", "x/a + y/b = 1", "y = mx + c", "x cos α + y sin α = p"],
    correctAnswer: 2,
    explanation: "The slope-intercept form is y = mx + c, where m is slope and c is y-intercept."
  },
  {
    id: "m12-ch4-32",
    question: "Distance between (−1, 2) & (7, 5) is:",
    options: ["√73", "7", "2√73", "73"],
    correctAnswer: 0,
    explanation: "d = √[(7−(−1))² + (5−2)²] = √[64 + 9] = √73."
  },
  {
    id: "m12-ch4-33",
    question: "The distance of a point P(6, −1) from the line 6x − 4y + 9 = 0 is:",
    options: ["49", "49/√52", "√49/52", "49/√24"],
    correctAnswer: 1,
    explanation: "Distance = |6(6) − 4(−1) + 9| / √(36+16) = |36+4+9| / √52 = 49/√52."
  }
];

// ========== CHAPTER 5: LINEAR INEQUALITIES AND LINEAR PROGRAMMING ==========
export const math12Ch5MCQs: MCQ[] = [
  {
    id: "m12-ch5-1",
    question: "Point (1, 2) satisfies the inequality:",
    options: ["2x + y > 5", "2x + y ≥ 5", "2x + y < 3", "2x + y < 5"],
    correctAnswer: 3,
    explanation: "Check: 2(1) + 2 = 4. Only 4 < 5 is true."
  },
  {
    id: "m12-ch5-2",
    question: "Point (3, 2) is not the solution of inequality:",
    options: ["x + y > 2", "3x + 5y > 7", "3x + 5y < 7", "3x − 7y < 3"],
    correctAnswer: 2,
    explanation: "3(3) + 5(2) = 19. Since 19 is NOT < 7, (3,2) is not a solution of 3x + 5y < 7."
  },
  {
    id: "m12-ch5-3",
    question: "The solution of the inequality 2x + y < 5 is:",
    options: ["(1, 2)", "(2, 1)", "(2, 3)", "(5, 0)"],
    correctAnswer: 0,
    explanation: "Check (1,2): 2(1) + 2 = 4 < 5 ✓."
  },
  {
    id: "m12-ch5-4",
    question: "The solution of inequality x + 2y < 6 is:",
    options: ["(1, 4)", "(1, 3)", "(1, 1)", "(1, 5)"],
    correctAnswer: 2,
    explanation: "Check (1,1): 1 + 2(1) = 3 < 6 ✓."
  },
  {
    id: "m12-ch5-5",
    question: "(1, 0) is not the solution of the inequality:",
    options: ["x − 3y < 0", "7x + 2y < 8", "3x + 5y < 7", "4x − 3y < 9"],
    correctAnswer: 0,
    explanation: "Check (1,0) in x − 3y < 0: 1 − 0 = 1, which is NOT < 0."
  },
  {
    id: "m12-ch5-6",
    question: "(1, 1) is solution of:",
    options: ["x + y < 1", "2x + y < 1", "2x − y < 1", "x − y < 1"],
    correctAnswer: 3,
    explanation: "Check (1,1) in x − y < 1: 1 − 1 = 0 < 1 ✓."
  },
  {
    id: "m12-ch5-7",
    question: "The point (1, 2) lies in the solution of the inequality:",
    options: ["2x + y > 5", "2x + y < 3", "2x + y > 6", "x + 3y > 5"],
    correctAnswer: 3,
    explanation: "Check (1,2) in x + 3y > 5: 1 + 6 = 7 > 5 ✓."
  },
  {
    id: "m12-ch5-8",
    question: "(0, 2) is solution of inequality:",
    options: ["3x + 5y > 7", "3x + 5y < 7", "x < 0", "x > 0"],
    correctAnswer: 0,
    explanation: "Check (0,2): 3(0) + 5(2) = 10 > 7 ✓."
  },
  {
    id: "m12-ch5-9",
    question: "x = 5 is the solution of inequality:",
    options: ["2x + 3 < 0", "2x − 3 > 0", "x + 1 < 0", "x < 0"],
    correctAnswer: 1,
    explanation: "Check x = 5 in 2x − 3 > 0: 10 − 3 = 7 > 0 ✓."
  },
  {
    id: "m12-ch5-10",
    question: "(0, 1) is the solution of inequality:",
    options: ["x − 3y > 0", "x − 3y < 0", "x + y > 0", "x < 0"],
    correctAnswer: 1,
    explanation: "Check (0,1): 0 − 3(1) = −3 < 0 ✓."
  },
  {
    id: "m12-ch5-11",
    question: "(1, −3) is in the solution of:",
    options: ["x + y ≥ 1", "x + y ≤ 0", "x + y = 0", "x − y = 0"],
    correctAnswer: 1,
    explanation: "Check (1,−3): 1 + (−3) = −2 ≤ 0 ✓."
  },
  {
    id: "m12-ch5-12",
    question: "A function which is to be maximized or minimized is called:",
    options: ["Objective function", "Optimal function", "Constant function", "Polynomial function"],
    correctAnswer: 0,
    explanation: "In linear programming, the function to be optimized is called the objective function."
  },
  {
    id: "m12-ch5-13",
    question: "To find optimal solution we evaluate the objective function at:",
    options: ["one point", "origin", "some points", "corner points"],
    correctAnswer: 3,
    explanation: "The optimal solution occurs at corner (vertex) points of the feasible region."
  }
];

// ========== CHAPTER 6: CONIC SECTIONS ==========
export const math12Ch6MCQs: MCQ[] = [
  {
    id: "m12-ch6-1",
    question: "Focus of parabola x² = −16y is:",
    options: ["(0, −4)", "(0, 4)", "(4, 0)", "(−4, 0)"],
    correctAnswer: 0,
    explanation: "x² = −16y → 4a = 16, a = 4. Parabola opens downward, focus = (0, −4)."
  },
  {
    id: "m12-ch6-2",
    question: "An angle inscribed in a semi-circle is:",
    options: ["π", "π/4", "π/2", "0"],
    correctAnswer: 2,
    explanation: "By Thales' theorem, an angle inscribed in a semi-circle is always π/2 (90°)."
  },
  {
    id: "m12-ch6-3",
    question: "Two circles are said to be concentric if they have same:",
    options: ["Radius", "Diameter", "Center", "Length"],
    correctAnswer: 2,
    explanation: "Concentric circles share the same center but may have different radii."
  },
  {
    id: "m12-ch6-4",
    question: "The end-points of the minor axis of the ellipse are called:",
    options: ["Foci", "Vertices", "Co-vertices", "Directrices"],
    correctAnswer: 2,
    explanation: "The endpoints of the minor axis are called co-vertices."
  },
  {
    id: "m12-ch6-5",
    question: "Eccentricity e of hyperbola is:",
    options: ["e < 1", "e > 1", "e = 1", "e = 0"],
    correctAnswer: 1,
    explanation: "A conic is a hyperbola when its eccentricity e > 1."
  },
  {
    id: "m12-ch6-6",
    question: "Eccentricity of an ellipse is:",
    options: ["e = 1", "e > 1", "0 < e < 1", "e = 0"],
    correctAnswer: 2,
    explanation: "For an ellipse, eccentricity lies strictly between 0 and 1."
  },
  {
    id: "m12-ch6-7",
    question: "For a parabola, the value of eccentricity e is:",
    options: ["e = 0", "e < 1", "e > 1", "e = 1"],
    correctAnswer: 3,
    explanation: "A parabola has eccentricity exactly equal to 1."
  },
  {
    id: "m12-ch6-8",
    question: "What is the eccentricity of a point circle x² + y² = 0?",
    options: ["1/√2", "1", "√2", "0"],
    correctAnswer: 3,
    explanation: "A point circle (radius = 0) has eccentricity 0."
  },
  {
    id: "m12-ch6-9",
    question: "The focus of parabola y² = 4ax is:",
    options: ["(0, a)", "(−a, 0)", "(a, 0)", "(0, −a)"],
    correctAnswer: 2,
    explanation: "For y² = 4ax, the focus is at (a, 0)."
  },
  {
    id: "m12-ch6-10",
    question: "Focus of the parabola x² − 5y = 0 is:",
    options: ["(5/4, 0)", "(0, 5/4)", "(0, −5/4)", "(−5/4, 0)"],
    correctAnswer: 1,
    explanation: "x² = 5y → 4a = 5, a = 5/4. Parabola opens upward, focus = (0, 5/4)."
  },
  {
    id: "m12-ch6-11",
    question: "The vertex of the parabola y² = 16x is:",
    options: ["(0, 0)", "(4, 0)", "(0, 4)", "(1, −3)"],
    correctAnswer: 0,
    explanation: "Standard parabola y² = 4ax has vertex at the origin (0, 0)."
  },
  {
    id: "m12-ch6-12",
    question: "The co-ordinates of vertex of parabola x + 8 − y² + 2y = 0 will be:",
    options: ["(−9, 1)", "(9, 1)", "(9, −1)", "(−9, −1)"],
    correctAnswer: 0,
    explanation: "Completing the square: x = (y−1)² − 9, so vertex = (−9, 1)."
  },
  {
    id: "m12-ch6-13",
    question: "Axis of parabola x² = 4ay is:",
    options: ["x = 0", "y = 0", "y = x", "x = −y"],
    correctAnswer: 0,
    explanation: "For x² = 4ay (vertical parabola), the axis of symmetry is x = 0 (y-axis)."
  },
  {
    id: "m12-ch6-14",
    question: "The latus rectum of the parabola y² = 4ax is:",
    options: ["x = a", "x = −a", "y = a", "y = −a"],
    correctAnswer: 0,
    explanation: "For y² = 4ax, the latus rectum is the line x = a (through the focus)."
  },
  {
    id: "m12-ch6-15",
    question: "Equation of latus rectum of the parabola x² = −4ay is:",
    options: ["x = a", "x = −a", "y = a", "y = −a"],
    correctAnswer: 2,
    explanation: "x² = −4ay opens downward, focus at (0, −a). Latus rectum: y = −a. Wait — actually for x² = −4ay, focus = (0, −a) and latus rectum passes through focus, so y = −a. But the directrix is y = a. The latus rectum equation is y = −a."
  },
  {
    id: "m12-ch6-16",
    question: "Length of latus rectum of a parabola 8x² = −32y is:",
    options: ["16", "4", "−4", "8"],
    correctAnswer: 1,
    explanation: "8x² = −32y → x² = −4y. Here 4a = 4, so length of latus rectum = 4a = 4."
  },
  {
    id: "m12-ch6-17",
    question: "The mid point of the line segment joining the foci of an ellipse is called:",
    options: ["Vertex", "Directrix", "Centre", "Minor axis"],
    correctAnswer: 2,
    explanation: "The midpoint of the segment joining the foci is the centre of the ellipse."
  },
  {
    id: "m12-ch6-18",
    question: "Foci of ellipse x²/a² + y²/b² = 1 are:",
    options: ["(±c, 0)", "(0, ±a)", "(±a, 0)", "(0, ±b)"],
    correctAnswer: 0,
    explanation: "For standard ellipse with a > b, foci are at (±c, 0) where c² = a² − b²."
  },
  {
    id: "m12-ch6-19",
    question: "Length of major axis of x²/25 + y²/16 = 1 is:",
    options: ["10", "5", "8", "4"],
    correctAnswer: 0,
    explanation: "a² = 25, so a = 5. Length of major axis = 2a = 10."
  },
  {
    id: "m12-ch6-20",
    question: "The coordinate of the vertices of the hyperbola x²/a² − y²/b² = 1 is:",
    options: ["(0, ±b)", "(±b, 0)", "(0, ±a)", "(±a, 0)"],
    correctAnswer: 3,
    explanation: "Vertices of standard hyperbola are at (±a, 0)."
  },
  {
    id: "m12-ch6-21",
    question: "If c = √65, b = 7 and a = 4, then eccentricity of hyperbola is:",
    options: ["7/4", "65/16", "√65/7", "√65/4"],
    correctAnswer: 3,
    explanation: "Eccentricity e = c/a = √65/4."
  },
  {
    id: "m12-ch6-22",
    question: "Length of transverse axis of x²/9 − y²/4 = 1:",
    options: ["3", "6", "2", "4"],
    correctAnswer: 1,
    explanation: "a² = 9, a = 3. Length of transverse axis = 2a = 6."
  },
  {
    id: "m12-ch6-23",
    question: "Transverse axis of the hyperbola x²/a² − y²/b² = 1 is:",
    options: ["x = a/e", "y = 0", "x = 0", "y = a/e"],
    correctAnswer: 1,
    explanation: "The transverse axis lies along the x-axis, which is y = 0."
  },
  {
    id: "m12-ch6-24",
    question: "The condition for a line y = mx + c to be tangent to the circle x² + y² = a² is:",
    options: ["c = ±m√(1 + a²)", "c = ±a√(1 + m²)", "c = ±a√(1 − m²)", "c = ±√(1 − m²)"],
    correctAnswer: 1,
    explanation: "For tangency, distance from centre (0,0) to line = radius: |c|/√(1+m²) = a, so c = ±a√(1+m²)."
  },
  {
    id: "m12-ch6-25",
    question: "Equation of normal to the circle x² + y² = 25 at point (4, 3) is:",
    options: ["4x + 3y = 5", "4x + 3y = 25", "4x + 3y = 0", "3x − 4y = 0"],
    correctAnswer: 3,
    explanation: "Normal passes through centre (0,0) and (4,3). Equation: y/x = 3/4, or 3x − 4y = 0."
  },
  {
    id: "m12-ch6-26",
    question: "The center of the circle x² + y² − 6x + 4y + 13 = 0 is:",
    options: ["(3, 2)", "(3, −2)", "(2, 3)", "(−2, −3)"],
    correctAnswer: 1,
    explanation: "Centre = (−g, −f) = (−(−3), −(2)) = (3, −2)."
  },
  {
    id: "m12-ch6-27",
    question: "Centre of the circle 5x² + 5y² + 14x + 12y − 10 = 0 is:",
    options: ["(−7/5, −6/5)", "(7/5, 6/5)", "(7, 6)", "(7, −6)"],
    correctAnswer: 0,
    explanation: "Divide by 5: x²+y² + (14/5)x + (12/5)y − 2 = 0. Centre = (−7/5, −6/5)."
  },
  {
    id: "m12-ch6-28",
    question: "The center of the circle (x − 1)² + (y + 3)² = 9 is:",
    options: ["(−1, 3)", "(−1, −3)", "(1, 3)", "(1, −3)"],
    correctAnswer: 3,
    explanation: "From (x−1)² + (y+3)² = 9, the centre is (1, −3)."
  },
  {
    id: "m12-ch6-29",
    question: "The equation a(x² + y²) + 2gx + 2fy + c = 0 represents a circle with centre:",
    options: ["(−ag, −af)", "(−g/a, −f/a)", "(g/a, f/a)", "(ag, af)"],
    correctAnswer: 1,
    explanation: "Dividing by a: x²+y² + (2g/a)x + (2f/a)y + c/a = 0. Centre = (−g/a, −f/a)."
  },
  {
    id: "m12-ch6-30",
    question: "Radius of circle x² + y² − 4x + 6y + 9 = 0 is:",
    options: ["2", "3", "4", "9"],
    correctAnswer: 0,
    explanation: "r = √(g² + f² − c) = √(4 + 9 − 9) = √4 = 2."
  },
  {
    id: "m12-ch6-31",
    question: "Radius of circle x² + y² + 2y = 5 is:",
    options: ["√6", "√5", "4", "2"],
    correctAnswer: 0,
    explanation: "x² + (y+1)² = 5 + 1 = 6. Radius = √6."
  },
  {
    id: "m12-ch6-32",
    question: "Length of the diameter of the circle (x + 5)² + (y − 8)² = 12:",
    options: ["2√3", "12", "24", "4√3"],
    correctAnswer: 3,
    explanation: "r² = 12, r = 2√3. Diameter = 2r = 4√3."
  },
  {
    id: "m12-ch6-33",
    question: "The length of tangent from (0, 1) to the circle x² + y² + 6x − 3y + 3 = 0 is:",
    options: ["2", "3", "4", "1"],
    correctAnswer: 3,
    explanation: "Length = √(0 + 1 + 0 − 3 + 3) = √1 = 1."
  },
  {
    id: "m12-ch6-34",
    question: "The fixed line of the conic is known as:",
    options: ["x-axis", "y-axis", "directrix", "latus rectum"],
    correctAnswer: 2,
    explanation: "In the definition of a conic, the fixed line is called the directrix."
  },
  {
    id: "m12-ch6-35",
    question: "The two separate parts of hyperbola are called:",
    options: ["Foci", "Vertices", "Directrices", "Branches"],
    correctAnswer: 3,
    explanation: "A hyperbola consists of two separate curves called branches."
  },
  {
    id: "m12-ch6-36",
    question: "x = a cos θ, y = b sin θ are parametric equations of:",
    options: ["Circle", "Parabola", "Ellipse", "Hyperbola"],
    correctAnswer: 2,
    explanation: "(x/a)² + (y/b)² = cos²θ + sin²θ = 1, which is the equation of an ellipse."
  }
];

// ========== CHAPTER 7: VECTORS ==========
export const math12Ch7MCQs: MCQ[] = [
  {
    id: "m12-ch7-1",
    question: "A vector perpendicular to both vectors a and b is:",
    options: ["a · b", "a × b", "(a · b)/|a|", "b · a"],
    correctAnswer: 1,
    explanation: "The cross product a × b gives a vector perpendicular to both a and b."
  },
  {
    id: "m12-ch7-2",
    question: "If u, v and w are coterminous edges of a tetrahedron, then its volume is:",
    options: ["[u v w]", "(1/3)[u v w]", "(1/6)[u v w]", "(1/9)[u v w]"],
    correctAnswer: 2,
    explanation: "Volume of tetrahedron = (1/6)|u · (v × w)| = (1/6)[u v w]."
  },
  {
    id: "m12-ch7-3",
    question: "k̂ × î =",
    options: ["2î", "−î", "ĵ", "−ĵ"],
    correctAnswer: 2,
    explanation: "By the right-hand rule: k̂ × î = ĵ."
  },
  {
    id: "m12-ch7-4",
    question: "î × k̂ =",
    options: ["−ĵ", "ĵ", "ĵ", "0"],
    correctAnswer: 0,
    explanation: "î × k̂ = −(k̂ × î) = −ĵ."
  },
  {
    id: "m12-ch7-5",
    question: "î × ĵ =",
    options: ["k̂", "î", "−k̂", "ĵ"],
    correctAnswer: 0,
    explanation: "By the right-hand rule: î × ĵ = k̂."
  },
  {
    id: "m12-ch7-6",
    question: "î · (ĵ × ĵ) =",
    options: ["−1", "1", "0", "2"],
    correctAnswer: 2,
    explanation: "ĵ × ĵ = 0 (cross product of a vector with itself). So î · 0 = 0."
  },
  {
    id: "m12-ch7-7",
    question: "If a and b are two non-zero vectors, then a × b =",
    options: ["−b × a", "a · b", "−a × −b", "b × a"],
    correctAnswer: 0,
    explanation: "Cross product is anti-commutative: a × b = −(b × a)."
  },
  {
    id: "m12-ch7-8",
    question: "If u is a non-zero vector then u · u =",
    options: ["0", "1", "−1", "u²"],
    correctAnswer: 3,
    explanation: "u · u = |u|² = u² (the square of the magnitude)."
  },
  {
    id: "m12-ch7-9",
    question: "If a and b are parallel vectors then a × b =",
    options: ["1", "0", "−1", "2"],
    correctAnswer: 1,
    explanation: "Cross product of parallel vectors is zero: a × b = |a||b|sin 0° = 0."
  },
  {
    id: "m12-ch7-10",
    question: "The magnitude of u = î + ĵ is:",
    options: ["2√(i²+j²)", "2", "√2", "(î + ĵ)/√2"],
    correctAnswer: 2,
    explanation: "|î + ĵ| = √(1² + 1²) = √2."
  },
  {
    id: "m12-ch7-11",
    question: "Length of vector 2î − ĵ − 2k̂ is:",
    options: ["0", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "|2î − ĵ − 2k̂| = √(4 + 1 + 4) = √9 = 3."
  },
  {
    id: "m12-ch7-12",
    question: "The unit vector in the direction of 2î − ĵ is:",
    options: ["5", "√5", "(2î − ĵ)/5", "(2î − ĵ)/√5"],
    correctAnswer: 3,
    explanation: "|2î − ĵ| = √(4+1) = √5. Unit vector = (2î − ĵ)/√5."
  },
  {
    id: "m12-ch7-13",
    question: "Angle between the vectors î + ĵ and î − ĵ is:",
    options: ["π", "π/2", "π/4", "0"],
    correctAnswer: 1,
    explanation: "(î+ĵ) · (î−ĵ) = 1−1 = 0. Dot product zero means angle = π/2."
  },
  {
    id: "m12-ch7-14",
    question: "If 2 and 2 are x and y components of a vector, then its angle with x-axis is:",
    options: ["30°", "60°", "45°", "90°"],
    correctAnswer: 2,
    explanation: "tan θ = y/x = 2/2 = 1, so θ = 45°."
  },
  {
    id: "m12-ch7-15",
    question: "If u = 2αî + ĵ − k̂ and v = î + αĵ + 4k̂ are perpendicular, then α =",
    options: ["−4/3", "4/3", "3/4", "4"],
    correctAnswer: 1,
    explanation: "u · v = 0: 2α(1) + 1(α) + (−1)(4) = 0 → 3α = 4 → α = 4/3."
  },
  {
    id: "m12-ch7-16",
    question: "If U = î + αĵ − k̂ and V = 2î + ĵ + k̂ are perpendicular then α =",
    options: ["1", "2", "−1", "0"],
    correctAnswer: 2,
    explanation: "U · V = 2 + α − 1 = 0 → α = −1."
  },
  {
    id: "m12-ch7-17",
    question: "[k̂ î ĵ] =",
    options: ["1", "−1", "0", "3"],
    correctAnswer: 0,
    explanation: "[k̂ î ĵ] = k̂ · (î × ĵ) = k̂ · k̂ = 1."
  },
  {
    id: "m12-ch7-18",
    question: "The vectors u, v and w are coplanar if:",
    options: ["u · (v × w) = 0", "u · (v × w) = 1", "u · (v × w) = 2", "u · (v × w) = 3"],
    correctAnswer: 0,
    explanation: "Vectors are coplanar when their scalar triple product equals zero."
  },
  {
    id: "m12-ch7-19",
    question: "If u, v and w are coplanar vectors then the volume of the parallelepiped so formed is:",
    options: ["1", "0", "|u × v × w|", "√(u² + v² + w²)"],
    correctAnswer: 1,
    explanation: "Coplanar vectors form a flat figure with zero volume."
  },
  {
    id: "m12-ch7-20",
    question: "If any two vectors of scalar triple product are equal, then its value is:",
    options: ["0", "1", "2", "−1"],
    correctAnswer: 0,
    explanation: "If two vectors are equal, the scalar triple product is zero (determinant has two equal rows)."
  },
  {
    id: "m12-ch7-21",
    question: "If u = v, then u · (v × w) =",
    options: ["1", "0", "−1", "∞"],
    correctAnswer: 1,
    explanation: "When u = v, the scalar triple product has two equal vectors, so it equals 0."
  },
  {
    id: "m12-ch7-22",
    question: "Projection of a along b is:",
    options: ["â · b̂", "a − b", "a · b̂", "â · b"],
    correctAnswer: 2,
    explanation: "Projection of a along b = a · b̂ = a · (b/|b|)."
  },
  {
    id: "m12-ch7-23",
    question: "|a × b| calculates the area of:",
    options: ["Triangle", "Parallelogram", "Tetrahedron", "Parallelepiped"],
    correctAnswer: 1,
    explanation: "|a × b| gives the area of the parallelogram formed by vectors a and b."
  },
  {
    id: "m12-ch7-24",
    question: "Work done by a constant force F during a displacement d is equal to:",
    options: ["F × d", "d × F", "F + d", "F · d"],
    correctAnswer: 3,
    explanation: "Work = Force · Displacement (dot product): W = F · d."
  },
  {
    id: "m12-ch7-25",
    question: "If F = 4î + 3ĵ + 5k̂ and d = −î + 3ĵ + 8k̂, then work done is:",
    options: ["30 units", "45 units", "53 units", "47 units"],
    correctAnswer: 1,
    explanation: "W = F · d = 4(−1) + 3(3) + 5(8) = −4 + 9 + 40 = 45 units."
  },
  {
    id: "m12-ch7-26",
    question: "The position vector of any point in xy-plane is:",
    options: ["xî + yĵ + zk̂", "yĵ + zk̂", "xî + yĵ", "xî + zk̂"],
    correctAnswer: 2,
    explanation: "In the xy-plane, z = 0, so the position vector is xî + yĵ."
  }
];
