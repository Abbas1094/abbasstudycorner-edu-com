// Pakistan Air Force Math Test Preparation Data
// 15 Chapters with 30 MCQs each = 450 MCQs Total

import { Chapter, MCQ } from "@/data/chemistryData";

// Chapter 1: Matrices and Determinants (30 MCQs)
const matricesMCQs: MCQ[] = [
  { id: 1001, question: "A rectangular array of real numbers enclosed within brackets is called:", options: ["Vector", "Matrix", "Determinant", "Scalar"], correctAnswer: 1, explanation: "A matrix is defined as a rectangular array of numbers arranged in rows and columns." },
  { id: 1002, question: "The horizontal lines of numbers in a matrix are called:", options: ["Columns", "Diagonals", "Rows", "Elements"], correctAnswer: 2, explanation: "Horizontal lines in a matrix are called rows." },
  { id: 1003, question: "The vertical lines of numbers in a matrix are called:", options: ["Rows", "Columns", "Diagonals", "Vectors"], correctAnswer: 1, explanation: "Vertical lines in a matrix are called columns." },
  { id: 1004, question: "The number of rows and columns in a matrix specifies its:", options: ["Rank", "Order", "Trace", "Norm"], correctAnswer: 1, explanation: "The order of a matrix is written as m × n (rows × columns)." },
  { id: 1005, question: "The order of matrix [2 1] is:", options: ["2-by-1", "1-by-2", "1-by-1", "2-by-2"], correctAnswer: 1, explanation: "This matrix has 1 row and 2 columns, so order is 1×2." },
  { id: 1006, question: "A matrix with only one row is called:", options: ["Column Matrix", "Row Matrix", "Square Matrix", "Null Matrix"], correctAnswer: 1 },
  { id: 1007, question: "A matrix with only one column is called:", options: ["Row Matrix", "Column Matrix", "Identity Matrix", "Diagonal Matrix"], correctAnswer: 1 },
  { id: 1008, question: "If number of rows equals number of columns, the matrix is:", options: ["Rectangular", "Square", "Diagonal", "Scalar"], correctAnswer: 1 },
  { id: 1009, question: "A square matrix with 1 on diagonal and 0 elsewhere is called:", options: ["Null Matrix", "Scalar Matrix", "Identity Matrix", "Diagonal Matrix"], correctAnswer: 2 },
  { id: 1010, question: "Identity matrix is also denoted by:", options: ["O", "A", "I", "D"], correctAnswer: 2 },
  { id: 1011, question: "A matrix with all zero elements is called:", options: ["Identity Matrix", "Null Matrix", "Scalar Matrix", "Unit Matrix"], correctAnswer: 1 },
  { id: 1012, question: "If A is a matrix, then (Aᵗ)ᵗ equals:", options: ["Aᵗ", "A", "-A", "2A"], correctAnswer: 1 },
  { id: 1013, question: "A square matrix A is symmetric if:", options: ["A = -Aᵗ", "Aᵗ = A", "A = 0", "A = I"], correctAnswer: 1 },
  { id: 1014, question: "A square matrix A is skew-symmetric if:", options: ["Aᵗ = A", "Aᵗ = -A", "A = I", "A = 0"], correctAnswer: 1 },
  { id: 1015, question: "Two matrices are conformable for addition if they have:", options: ["Same determinant", "Same order", "Same trace", "Same rank"], correctAnswer: 1 },
  { id: 1016, question: "The determinant of a 2×2 matrix [a b; c d] is:", options: ["ac - bd", "ad - bc", "ab - cd", "ad + bc"], correctAnswer: 1 },
  { id: 1017, question: "If det(A) = 0, the matrix is called:", options: ["Regular", "Singular", "Orthogonal", "Symmetric"], correctAnswer: 1 },
  { id: 1018, question: "The trace of a matrix is the sum of:", options: ["All elements", "Diagonal elements", "First row", "First column"], correctAnswer: 1 },
  { id: 1019, question: "(AB)ᵗ equals:", options: ["AᵗBᵗ", "BᵗAᵗ", "AB", "BA"], correctAnswer: 1 },
  { id: 1020, question: "det(AB) equals:", options: ["det(A) + det(B)", "det(A) × det(B)", "det(A) - det(B)", "det(A) / det(B)"], correctAnswer: 1 },
  { id: 1021, question: "A square matrix with same non-zero number on diagonal and zeros elsewhere is:", options: ["Identity Matrix", "Scalar Matrix", "Null Matrix", "Diagonal Matrix"], correctAnswer: 1 },
  { id: 1022, question: "The order of matrix [2; 1; 3] is:", options: ["1×3", "3×1", "3×3", "1×1"], correctAnswer: 1 },
  { id: 1023, question: "Two matrices A and B are equal if:", options: ["They have same order", "Corresponding entries are equal", "Both conditions", "Neither condition"], correctAnswer: 2 },
  { id: 1024, question: "A(B + C) equals:", options: ["AB + AC", "AB + C", "A + BC", "ABC"], correctAnswer: 0 },
  { id: 1025, question: "For square matrix A, A × I equals:", options: ["I", "A", "0", "2A"], correctAnswer: 1 },
  { id: 1026, question: "The inverse of A is denoted by:", options: ["A⁻¹", "Aᵗ", "-A", "A²"], correctAnswer: 0 },
  { id: 1027, question: "A × A⁻¹ equals:", options: ["A", "0", "I", "2A"], correctAnswer: 2 },
  { id: 1028, question: "(A⁻¹)⁻¹ equals:", options: ["I", "A", "Aᵗ", "0"], correctAnswer: 1 },
  { id: 1029, question: "det(A⁻¹) equals:", options: ["det(A)", "1/det(A)", "-det(A)", "0"], correctAnswer: 1 },
  { id: 1030, question: "Matrix multiplication is generally:", options: ["Commutative", "Non-commutative", "Associative only", "Neither"], correctAnswer: 1 }
];

// Chapter 2: Real and Complex Numbers (30 MCQs)
const complexNumbersMCQs: MCQ[] = [
  { id: 2001, question: "Natural numbers are denoted by:", options: ["W", "Z", "N", "R"], correctAnswer: 2 },
  { id: 2002, question: "Whole numbers include:", options: ["Only positive integers", "Zero and positive integers", "All integers", "All rationals"], correctAnswer: 1 },
  { id: 2003, question: "A number of form p/q where q ≠ 0 is:", options: ["Irrational", "Rational", "Complex", "Imaginary"], correctAnswer: 1 },
  { id: 2004, question: "A finite decimal is called:", options: ["Recurring decimal", "Terminating decimal", "Irrational", "Complex"], correctAnswer: 1 },
  { id: 2005, question: "An infinite repeating decimal is called:", options: ["Terminating", "Recurring", "Irrational", "Transcendental"], correctAnswer: 1 },
  { id: 2006, question: "π is an example of:", options: ["Rational number", "Irrational number", "Integer", "Whole number"], correctAnswer: 1 },
  { id: 2007, question: "√2 is:", options: ["Rational", "Irrational", "Integer", "Natural"], correctAnswer: 1 },
  { id: 2008, question: "a + b = b + a is called:", options: ["Associative property", "Commutative property", "Distributive property", "Identity property"], correctAnswer: 1 },
  { id: 2009, question: "a(b + c) = ab + ac is called:", options: ["Commutative", "Associative", "Distributive", "Closure"], correctAnswer: 2 },
  { id: 2010, question: "i² equals:", options: ["1", "-1", "i", "-i"], correctAnswer: 1 },
  { id: 2011, question: "A complex number has the form:", options: ["a + b", "a - b", "a + bi", "ab"], correctAnswer: 2 },
  { id: 2012, question: "In z = a + bi, the real part is:", options: ["b", "i", "a", "bi"], correctAnswer: 2 },
  { id: 2013, question: "The imaginary part of 3 + 4i is:", options: ["3", "4", "4i", "3i"], correctAnswer: 1 },
  { id: 2014, question: "The conjugate of a + bi is:", options: ["a + bi", "a - bi", "-a + bi", "-a - bi"], correctAnswer: 1 },
  { id: 2015, question: "The conjugate of -3 + 4i is:", options: ["-3 + 4i", "-3 - 4i", "3 + 4i", "3 - 4i"], correctAnswer: 1 },
  { id: 2016, question: "i⁴ equals:", options: ["i", "-i", "1", "-1"], correctAnswer: 2 },
  { id: 2017, question: "i⁹ equals:", options: ["i", "-i", "1", "-1"], correctAnswer: 0 },
  { id: 2018, question: "i¹⁰ equals:", options: ["i", "-i", "1", "-1"], correctAnswer: 3 },
  { id: 2019, question: "Every real number is:", options: ["Imaginary", "Complex", "Irrational", "Prime"], correctAnswer: 1 },
  { id: 2020, question: "The modulus of 3 + 4i is:", options: ["7", "5", "12", "25"], correctAnswer: 1 },
  { id: 2021, question: "|z|² equals:", options: ["z + z̄", "z - z̄", "z × z̄", "z / z̄"], correctAnswer: 2 },
  { id: 2022, question: "The additive identity for complex numbers is:", options: ["1", "0", "i", "-1"], correctAnswer: 1 },
  { id: 2023, question: "The multiplicative identity for complex numbers is:", options: ["0", "i", "1", "-1"], correctAnswer: 2 },
  { id: 2024, question: "i³ equals:", options: ["i", "-i", "1", "-1"], correctAnswer: 1 },
  { id: 2025, question: "√(-9) equals:", options: ["3", "-3", "3i", "9i"], correctAnswer: 2 },
  { id: 2026, question: "(1 + i)(1 - i) equals:", options: ["0", "2", "2i", "1"], correctAnswer: 1 },
  { id: 2027, question: "Real part of 2ab(i + i²) is:", options: ["2ab", "-2ab", "2abi", "0"], correctAnswer: 1 },
  { id: 2028, question: "Imaginary part of -i(3i + 2) is:", options: ["3", "-2", "2", "-3"], correctAnswer: 1 },
  { id: 2029, question: "The symbol √ is called:", options: ["Surd", "Radical", "Radicand", "Index"], correctAnswer: 1 },
  { id: 2030, question: "In √a, 'a' is called the:", options: ["Radical", "Index", "Radicand", "Surd"], correctAnswer: 2 }
];

// Chapter 3: Logarithms (30 MCQs)
const logarithmsMCQs: MCQ[] = [
  { id: 3001, question: "Scientific notation of 0.0023 is:", options: ["2.3 × 10²", "2.3 × 10⁻³", "23 × 10⁻⁴", "0.23 × 10⁻²"], correctAnswer: 1 },
  { id: 3002, question: "Scientific notation of 50600 is:", options: ["5.06 × 10³", "5.06 × 10⁴", "50.6 × 10³", "506 × 10²"], correctAnswer: 1 },
  { id: 3003, question: "If aˣ = n, then logₐn equals:", options: ["a", "n", "x", "1"], correctAnswer: 2 },
  { id: 3004, question: "logₐ1 equals:", options: ["1", "0", "a", "undefined"], correctAnswer: 1 },
  { id: 3005, question: "logₐa equals:", options: ["0", "1", "a", "a²"], correctAnswer: 1 },
  { id: 3006, question: "log(mn) equals:", options: ["log m × log n", "log m + log n", "log m - log n", "log m / log n"], correctAnswer: 1 },
  { id: 3007, question: "log(m/n) equals:", options: ["log m + log n", "log m - log n", "log m × log n", "log m / log n"], correctAnswer: 1 },
  { id: 3008, question: "log(mⁿ) equals:", options: ["n + log m", "n × log m", "n - log m", "n / log m"], correctAnswer: 1 },
  { id: 3009, question: "The base of common logarithm is:", options: ["e", "2", "10", "1"], correctAnswer: 2 },
  { id: 3010, question: "The base of natural logarithm is:", options: ["10", "2", "e", "π"], correctAnswer: 2 },
  { id: 3011, question: "Logarithms were invented by:", options: ["Newton", "Euler", "John Napier", "Leibniz"], correctAnswer: 2 },
  { id: 3012, question: "Base-10 log tables were prepared by:", options: ["Napier", "Henry Briggs", "Euler", "Newton"], correctAnswer: 1 },
  { id: 3013, question: "logₐb × logᵦa equals:", options: ["0", "1", "a", "b"], correctAnswer: 1 },
  { id: 3014, question: "log₁₀100 equals:", options: ["1", "2", "10", "100"], correctAnswer: 1 },
  { id: 3015, question: "log₂8 equals:", options: ["2", "3", "4", "8"], correctAnswer: 1 },
  { id: 3016, question: "The characteristic of log 0.00345 is:", options: ["2", "-2", "3", "-3"], correctAnswer: 3 },
  { id: 3017, question: "The mantissa of a logarithm is always:", options: ["Negative", "Positive", "Zero", "Integer"], correctAnswer: 1 },
  { id: 3018, question: "log₁₀0.01 equals:", options: ["1", "-1", "2", "-2"], correctAnswer: 3 },
  { id: 3019, question: "antilog(2) with base 10 equals:", options: ["20", "100", "1000", "2"], correctAnswer: 1 },
  { id: 3020, question: "ln e equals:", options: ["0", "1", "e", "2.718"], correctAnswer: 1 },
  { id: 3021, question: "ln 1 equals:", options: ["1", "e", "0", "undefined"], correctAnswer: 2 },
  { id: 3022, question: "log₁₀10 equals:", options: ["0", "1", "10", "e"], correctAnswer: 1 },
  { id: 3023, question: "If log x = 2, then x equals:", options: ["2", "20", "100", "1000"], correctAnswer: 2 },
  { id: 3024, question: "log₅125 equals:", options: ["2", "3", "5", "25"], correctAnswer: 1 },
  { id: 3025, question: "log₃27 equals:", options: ["2", "3", "9", "27"], correctAnswer: 1 },
  { id: 3026, question: "The value of e is approximately:", options: ["2.718", "3.14", "1.414", "1.732"], correctAnswer: 0 },
  { id: 3027, question: "log 1000 equals:", options: ["1", "2", "3", "4"], correctAnswer: 2 },
  { id: 3028, question: "logₐ(1/a) equals:", options: ["1", "-1", "0", "a"], correctAnswer: 1 },
  { id: 3029, question: "2^(log₂5) equals:", options: ["2", "5", "10", "25"], correctAnswer: 1 },
  { id: 3030, question: "log₄16 equals:", options: ["2", "4", "8", "16"], correctAnswer: 0 }
];

// Chapter 4: Algebraic Expressions (30 MCQs)
const algebraicMCQs: MCQ[] = [
  { id: 4001, question: "An expression with non-negative integer powers is called:", options: ["Equation", "Polynomial", "Fraction", "Surd"], correctAnswer: 1 },
  { id: 4002, question: "The degree of 4x⁴ + 2x² is:", options: ["2", "4", "6", "8"], correctAnswer: 1 },
  { id: 4003, question: "(a + b)² equals:", options: ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"], correctAnswer: 2 },
  { id: 4004, question: "(a - b)² equals:", options: ["a² + b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² - b²"], correctAnswer: 1 },
  { id: 4005, question: "(a + b)² + (a - b)² equals:", options: ["2a²", "2b²", "2(a² + b²)", "4ab"], correctAnswer: 2 },
  { id: 4006, question: "(a + b)² - (a - b)² equals:", options: ["2a²", "2b²", "2(a² + b²)", "4ab"], correctAnswer: 3 },
  { id: 4007, question: "a³ + b³ equals:", options: ["(a+b)³", "(a-b)³", "(a+b)(a²-ab+b²)", "(a-b)(a²+ab+b²)"], correctAnswer: 2 },
  { id: 4008, question: "a³ - b³ equals:", options: ["(a+b)(a²-ab+b²)", "(a-b)(a²+ab+b²)", "(a+b)³", "(a-b)³"], correctAnswer: 1 },
  { id: 4009, question: "a² - b² equals:", options: ["(a+b)²", "(a-b)²", "(a+b)(a-b)", "(a²+b²)"], correctAnswer: 2 },
  { id: 4010, question: "The coefficient of x² in 3x² + 2x - 5 is:", options: ["2", "3", "-5", "5"], correctAnswer: 1 },
  { id: 4011, question: "A polynomial of degree 2 is called:", options: ["Linear", "Quadratic", "Cubic", "Quartic"], correctAnswer: 1 },
  { id: 4012, question: "A polynomial of degree 3 is called:", options: ["Linear", "Quadratic", "Cubic", "Quartic"], correctAnswer: 2 },
  { id: 4013, question: "√8 in simplest form is:", options: ["2√2", "4√2", "√8", "2√4"], correctAnswer: 0 },
  { id: 4014, question: "√50 in simplest form is:", options: ["5√2", "2√5", "25√2", "√50"], correctAnswer: 0 },
  { id: 4015, question: "³√27 equals:", options: ["3", "9", "27", "81"], correctAnswer: 0 },
  { id: 4016, question: "(√5)² equals:", options: ["5", "√5", "25", "10"], correctAnswer: 0 },
  { id: 4017, question: "The degree of constant polynomial is:", options: ["1", "0", "undefined", "-1"], correctAnswer: 1 },
  { id: 4018, question: "A polynomial with one term is called:", options: ["Binomial", "Trinomial", "Monomial", "Polynomial"], correctAnswer: 2 },
  { id: 4019, question: "A polynomial with two terms is called:", options: ["Monomial", "Binomial", "Trinomial", "Polynomial"], correctAnswer: 1 },
  { id: 4020, question: "A polynomial with three terms is called:", options: ["Monomial", "Binomial", "Trinomial", "Quadrinomial"], correctAnswer: 2 },
  { id: 4021, question: "(a + b)³ equals:", options: ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ - 3a²b + 3ab² - b³", "a³ + b³ + 3ab"], correctAnswer: 1 },
  { id: 4022, question: "(a - b)³ equals:", options: ["a³ - b³", "a³ - 3a²b + 3ab² - b³", "a³ + 3a²b - 3ab² + b³", "a³ - b³ - 3ab"], correctAnswer: 1 },
  { id: 4023, question: "An irrational radical with rational radicand is:", options: ["Polynomial", "Surd", "Complex", "Integer"], correctAnswer: 1 },
  { id: 4024, question: "The conjugate of (√a + √b) is:", options: ["√a - √b", "√a + √b", "-√a - √b", "√a × √b"], correctAnswer: 0 },
  { id: 4025, question: "√(a²b) equals:", options: ["a√b", "ab", "a²√b", "√a × √b"], correctAnswer: 0 },
  { id: 4026, question: "(x + 1/x)² equals:", options: ["x² + 1/x²", "x² + 2 + 1/x²", "x² - 2 + 1/x²", "x² + 1/x² + 1"], correctAnswer: 1 },
  { id: 4027, question: "(a + b + c)² equals:", options: ["a² + b² + c²", "a² + b² + c² + ab + bc + ca", "a² + b² + c² + 2(ab + bc + ca)", "a² + b² + c² + 3abc"], correctAnswer: 2 },
  { id: 4028, question: "The leading coefficient of -5x³ + 2x² - x + 7 is:", options: ["7", "-1", "2", "-5"], correctAnswer: 3 },
  { id: 4029, question: "To rationalize 1/(√a + √b), multiply by:", options: ["√a - √b", "(√a - √b)/(√a - √b)", "√a + √b", "1"], correctAnswer: 1 },
  { id: 4030, question: "√2 + √3 is:", options: ["Rational", "Irrational", "Integer", "Natural"], correctAnswer: 1 }
];

// Chapter 5: Factorization (30 MCQs)
const factorizationMCQs: MCQ[] = [
  { id: 5001, question: "Factorization of ka + kb + kc is:", options: ["k(a + b + c)", "abc(k)", "k + abc", "kabc"], correctAnswer: 0 },
  { id: 5002, question: "Factors of x² - 5x + 6 are:", options: ["(x-1)(x-6)", "(x-2)(x-3)", "(x+2)(x+3)", "(x-2)(x+3)"], correctAnswer: 1 },
  { id: 5003, question: "Factors of x² + 5x + 6 are:", options: ["(x+2)(x+3)", "(x-2)(x-3)", "(x+1)(x+6)", "(x-1)(x-6)"], correctAnswer: 0 },
  { id: 5004, question: "HCF of a² - b² and a³ - b³ is:", options: ["a + b", "a - b", "a² - b²", "a³ - b³"], correctAnswer: 1 },
  { id: 5005, question: "LCM of 15x² and 45xy is:", options: ["15xy", "45xy", "45x²y", "15x²y"], correctAnswer: 2 },
  { id: 5006, question: "Square root of x² - 2x + 1 is:", options: ["x + 1", "x - 1", "±(x - 1)", "±(x + 1)"], correctAnswer: 2 },
  { id: 5007, question: "If P(a) = 0, then (x - a) is a:", options: ["Factor", "Quotient", "Remainder", "Divisor"], correctAnswer: 0 },
  { id: 5008, question: "Factors of x² - 9 are:", options: ["(x+3)²", "(x-3)²", "(x+3)(x-3)", "(x+9)(x-1)"], correctAnswer: 2 },
  { id: 5009, question: "Factors of x² - 1 are:", options: ["(x+1)²", "(x-1)²", "(x+1)(x-1)", "x(x-1)"], correctAnswer: 2 },
  { id: 5010, question: "Factors of 4x² - 9 are:", options: ["(2x+3)(2x-3)", "(4x+9)(4x-9)", "(2x+3)²", "(2x-3)²"], correctAnswer: 0 },
  { id: 5011, question: "x² + 2x + 1 equals:", options: ["(x+1)²", "(x-1)²", "(x+1)(x-1)", "x(x+2)"], correctAnswer: 0 },
  { id: 5012, question: "x² - 4x + 4 equals:", options: ["(x+2)²", "(x-2)²", "(x+2)(x-2)", "x(x-4)"], correctAnswer: 1 },
  { id: 5013, question: "Factors of x³ - 8 are:", options: ["(x-2)(x²+2x+4)", "(x+2)(x²-2x+4)", "(x-2)³", "(x-8)(x²+1)"], correctAnswer: 0 },
  { id: 5014, question: "Factors of x³ + 1 are:", options: ["(x-1)(x²+x+1)", "(x+1)(x²-x+1)", "(x+1)³", "(x+1)(x²+1)"], correctAnswer: 1 },
  { id: 5015, question: "HCF of 12x²y and 18xy² is:", options: ["6xy", "36xy", "6x²y²", "36x²y²"], correctAnswer: 0 },
  { id: 5016, question: "LCM of 12x²y and 18xy² is:", options: ["6xy", "36x²y²", "36xy", "6x²y²"], correctAnswer: 1 },
  { id: 5017, question: "Factors of 2x² + 5x + 3 are:", options: ["(2x+3)(x+1)", "(2x+1)(x+3)", "(x+3)(2x+1)", "(2x+3)(x-1)"], correctAnswer: 0 },
  { id: 5018, question: "Factors of 6x² - x - 2 are:", options: ["(2x+1)(3x-2)", "(3x+2)(2x-1)", "(6x+1)(x-2)", "(2x-1)(3x+2)"], correctAnswer: 0 },
  { id: 5019, question: "Common factor of 3x² + 6x is:", options: ["3", "x", "3x", "6x"], correctAnswer: 2 },
  { id: 5020, question: "Factors of x⁴ - 1 are:", options: ["(x²+1)(x+1)(x-1)", "(x²-1)²", "(x+1)²(x-1)²", "(x⁴-1)"], correctAnswer: 0 },
  { id: 5021, question: "Remainder when x³ + 1 is divided by x + 1 is:", options: ["0", "1", "2", "-1"], correctAnswer: 0 },
  { id: 5022, question: "Remainder when x² + 2x + 3 is divided by x - 1 is:", options: ["3", "4", "5", "6"], correctAnswer: 3 },
  { id: 5023, question: "Factors of a² + 2ab + b² are:", options: ["(a+b)(a-b)", "(a+b)²", "(a-b)²", "a²+b²"], correctAnswer: 1 },
  { id: 5024, question: "Factors of a² - 2ab + b² are:", options: ["(a+b)(a-b)", "(a+b)²", "(a-b)²", "a²+b²"], correctAnswer: 2 },
  { id: 5025, question: "Factors of 9x² - 16y² are:", options: ["(3x+4y)(3x-4y)", "(9x+16y)(x-y)", "(3x+4y)²", "(3x-4y)²"], correctAnswer: 0 },
  { id: 5026, question: "Factors of x² - 7x + 12 are:", options: ["(x-3)(x-4)", "(x+3)(x+4)", "(x-2)(x-6)", "(x+2)(x+6)"], correctAnswer: 0 },
  { id: 5027, question: "Factors of x² + x - 6 are:", options: ["(x+3)(x-2)", "(x-3)(x+2)", "(x+6)(x-1)", "(x-6)(x+1)"], correctAnswer: 0 },
  { id: 5028, question: "Factors of 8x³ + 27y³ are:", options: ["(2x+3y)(4x²-6xy+9y²)", "(2x-3y)(4x²+6xy+9y²)", "(2x+3y)³", "(8x+27y)(x²+y²)"], correctAnswer: 0 },
  { id: 5029, question: "A × B = HCF × LCM is true for:", options: ["Matrices", "Polynomials", "Numbers", "All of these"], correctAnswer: 2 },
  { id: 5030, question: "x³ + x² + x + 1 factors as:", options: ["(x+1)(x²+1)", "(x-1)(x²+1)", "(x+1)³", "x(x²+x+1)"], correctAnswer: 0 }
];

// Chapters 6-15 with 30 MCQs each (abbreviated for space - same pattern)
const linearEquationsMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 6001 + i,
  question: ["ax + b = 0 is a:", "|x| = x when:", "|x| = -x when:", "Solution of |x| = 0 is:", "Solution of √x = -2 is:", "'x no larger than 10' means:", "Horizontal axis is called:", "Vertical axis is called:", "Solution of 2x + 6 = 0 is:", "Solution of 3x - 9 = 0 is:", "|x - 3| = 5 gives x =:", "If 2x + 3 > 7, then:", "If 3x - 6 ≤ 0, then:", "Solution of x/2 = 5 is:", "Solution of 2(x - 1) = 4 is:", "|2x| = 6 gives x =:", "If x + 5 < 8, then:", "Solution of 5x = 15 is:", "If -2x > 4, then:", "|-5| equals:", "'x is at least 5' means:", "Solution of x - 7 = 3 is:", "If 4x + 1 ≥ 9, then:", "|x| < 3 means:", "|x| > 2 means:", "Solution of 3(x + 2) = 15 is:", "If x/3 + 2 = 5, then x =:", "The origin is the point:", "Solution of 2x + 3 = x + 7 is:", "If 5 - x > 2, then:"][i],
  options: [["Quadratic equation", "Linear equation", "Cubic equation", "Identity"], ["x < 0", "x ≥ 0", "x = 0", "Always"], ["x > 0", "x ≥ 0", "x < 0", "x = 0"], ["x = 1", "x = -1", "x = 0", "No solution"], ["x = 4", "x = -4", "Empty set", "x = 2"], ["x > 10", "x < 10", "x ≤ 10", "x ≥ 10"], ["y-axis", "x-axis", "z-axis", "Origin"], ["x-axis", "y-axis", "z-axis", "Origin"], ["x = 3", "x = -3", "x = 6", "x = -6"], ["x = 3", "x = -3", "x = 9", "x = -9"], ["8 or -2", "8 or 2", "-8 or 2", "-8 or -2"], ["x > 2", "x < 2", "x > 5", "x < 5"], ["x ≥ 2", "x ≤ 2", "x > 2", "x < 2"], ["x = 2.5", "x = 10", "x = 5", "x = 7"], ["x = 2", "x = 3", "x = 1", "x = 4"], ["3 only", "-3 only", "3 or -3", "6 or -6"], ["x < 3", "x > 3", "x < 13", "x > 13"], ["x = 3", "x = 5", "x = 10", "x = 20"], ["x > -2", "x < -2", "x > 2", "x < 2"], ["-5", "5", "0", "±5"], ["x > 5", "x < 5", "x ≥ 5", "x ≤ 5"], ["x = 4", "x = 10", "x = -4", "x = -10"], ["x ≥ 2", "x ≤ 2", "x ≥ 4", "x ≤ 4"], ["x < 3", "x > -3", "-3 < x < 3", "x < -3 or x > 3"], ["-2 < x < 2", "x > 2 or x < -2", "x > 2", "x < -2"], ["x = 3", "x = 5", "x = 7", "x = 9"], ["3", "6", "9", "12"], ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"], ["x = 4", "x = 10", "x = -4", "x = 3"], ["x > 3", "x < 3", "x > 7", "x < 7"]][i],
  correctAnswer: [1, 1, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 1, 1, 1, 2, 0, 0, 1, 1, 2, 1, 0, 2, 1, 0, 2, 3, 0, 1][i]
}));

const geometryMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 7001 + i,
  question: ["Points on the same line are called:", "The symbol of congruence is:", "Opposite angles of a parallelogram are:", "Diagonals of a parallelogram:", "A line perpendicular to segment at midpoint is:", "Any point on right bisector is:", "Any point on angle bisector is:", "Bisection means dividing into:", "A ratio has:", "Similar triangles have:", "Pythagoras theorem states c² =:", "Area of triangle =:", "Sum of angles of a triangle is:", "An angle of 90° is called:", "An angle less than 90° is:", "An angle between 90° and 180° is:", "An angle of 180° is called:", "Two angles that sum to 90° are:", "Two angles that sum to 180° are:", "Vertically opposite angles are:", "Sum of angles of quadrilateral is:", "A triangle with all equal sides is:", "A triangle with two equal sides is:", "A triangle with no equal sides is:", "Exterior angle of a triangle equals:", "In a right triangle, the longest side is:", "Perimeter of a rectangle is:", "Area of a rectangle is:", "Circumference of a circle is:", "Area of a circle is:"][i],
  options: [["Concurrent", "Collinear", "Parallel", "Perpendicular"], ["=", "≅", "~", "≡"], ["Supplementary", "Complementary", "Equal", "Different"], ["Are equal", "Are perpendicular", "Bisect each other", "Don't intersect"], ["Median", "Altitude", "Right bisector", "Angle bisector"], ["Closer to one endpoint", "Equidistant from endpoints", "At infinity", "On the segment"], ["Equidistant from the arms", "On the vertex", "Perpendicular to arms", "None of these"], ["Three parts", "Four parts", "Two equal parts", "Unequal parts"], ["Unit", "No unit", "Dimension", "Magnitude only"], ["Equal sides", "Proportional sides", "Right angles", "Same area"], ["a + b", "a² + b²", "ab", "2ab"], ["base × height", "½ × base × height", "base + height", "2 × base × height"], ["90°", "180°", "270°", "360°"], ["Acute", "Obtuse", "Right", "Reflex"], ["Right", "Acute", "Obtuse", "Straight"], ["Acute", "Right", "Obtuse", "Reflex"], ["Right", "Obtuse", "Straight", "Reflex"], ["Supplementary", "Complementary", "Vertically opposite", "Adjacent"], ["Complementary", "Supplementary", "Equal", "Vertically opposite"], ["Supplementary", "Complementary", "Equal", "Adjacent"], ["180°", "270°", "360°", "540°"], ["Isosceles", "Scalene", "Equilateral", "Right"], ["Equilateral", "Isosceles", "Scalene", "Obtuse"], ["Equilateral", "Isosceles", "Scalene", "Right"], ["Sum of all angles", "Sum of opposite interior angles", "One interior angle", "90°"], ["Base", "Perpendicular", "Hypotenuse", "Median"], ["l × b", "2(l + b)", "l + b", "4(l + b)"], ["2(l + b)", "l + b", "l × b", "4lb"], ["πr", "2πr", "πr²", "2πr²"], ["2πr", "πr", "πr²", "2πr²"]][i],
  correctAnswer: [1, 1, 2, 2, 2, 1, 0, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2][i]
}));

const practicalGeomMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 8001 + i,
  question: ["Altitudes of a triangle are:", "Point of concurrency of medians is:", "Point of concurrency of angle bisectors is:", "Point of concurrency of perpendicular bisectors is:", "Point of concurrency of altitudes is:", "A median connects vertex to:", "An altitude is perpendicular to:", "Centroid divides median in ratio:", "Circumcenter is equidistant from:", "Incenter is equidistant from:", "Circumcircle passes through:", "Incircle touches:", "In equilateral triangle, centroid and circumcenter are:", "To construct right angle, we use:", "Number of medians in a triangle is:", "Number of altitudes in a triangle is:", "Number of angle bisectors in a triangle is:", "A chord of a circle:", "A diameter is a chord that:", "A tangent to a circle:", "Tangent at a point is perpendicular to:", "Two tangents from external point are:", "An arc is a part of:", "A sector is bounded by:", "A segment is bounded by:", "Central angle equals:", "Inscribed angle is:", "Angle in a semicircle is:", "In cyclic quadrilateral, opposite angles are:", "Perpendicular from center to chord:"][i],
  options: [["Parallel", "Concurrent", "Equal", "Perpendicular"], ["Incenter", "Circumcenter", "Centroid", "Orthocenter"], ["Centroid", "Incenter", "Circumcenter", "Orthocenter"], ["Centroid", "Incenter", "Circumcenter", "Orthocenter"], ["Centroid", "Incenter", "Circumcenter", "Orthocenter"], ["Opposite side", "Adjacent side", "Midpoint of opposite side", "Altitude"], ["The median", "The opposite side", "The adjacent side", "The angle bisector"], ["1:1", "1:2", "2:1", "3:1"], ["Sides", "Vertices", "Altitudes", "Medians"], ["Vertices", "Sides", "Altitudes", "Medians"], ["Incenter", "Centroid", "All vertices", "Orthocenter"], ["All vertices", "All sides", "Two sides", "One side"], ["Different", "Same point", "Opposite", "Parallel"], ["Protractor only", "Compass and ruler", "Ruler only", "Compass only"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "6"], ["Passes through center", "Joins two points on circle", "Is a radius", "Is a diameter"], ["Is shortest", "Doesn't pass through center", "Passes through center", "Is tangent"], ["Cuts circle at two points", "Touches circle at one point", "Passes through center", "Is a chord"], ["Chord", "Diameter", "Radius at that point", "Another tangent"], ["Perpendicular", "Parallel", "Equal in length", "Unequal"], ["Diameter", "Chord", "Circumference", "Radius"], ["Two chords", "Two radii and an arc", "Chord and arc", "Diameter and arc"], ["Two radii", "Chord and arc", "Two diameters", "Two tangents"], ["Half of arc", "Arc measure", "Twice the arc", "Quarter of arc"], ["Equal to central angle", "Half of central angle", "Twice central angle", "Quarter of central angle"], ["45°", "60°", "90°", "180°"], ["Equal", "Complementary", "Supplementary", "Right"], ["Trisects it", "Bisects it", "Doesn't touch it", "Doubles it"]][i],
  correctAnswer: [1, 2, 1, 2, 3, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1][i]
}));

const quadraticMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 9001 + i,
  question: ["ax + b = 0 is a:", "ax² + bx + c = 0 is a:", "Methods to solve quadratic include:", "Quadratic formula is x =:", "A quadratic equation has:", "Solution of 4x² - 16 = 0 is:", "Solution of x² - 9 = 0 is:", "4ˣ = 1 is an:", "Solution of x² - 5x + 6 = 0 is:", "Solution of x² + 5x + 6 = 0 is:", "To complete square for x² + 6x, add:", "x² + 6x + 9 = (x + ?)²:", "If one root of x² - 5x + k = 0 is 2, then k =:", "Solution of x² = 25 is:", "Solution of (x - 3)² = 16 is:", "Product of roots of x² - 7x + 12 = 0 is:", "Sum of roots of x² - 7x + 12 = 0 is:", "If roots are 2 and 3, equation is:", "Solution of 2x² - 8 = 0 is:", "Solution of x² + 4 = 0 is:", "x² - 2x + 1 = 0 has:", "For equal roots, discriminant must be:", "Solution of 3x² - 12x = 0 is:", "If α and β are roots, α + β =:", "If α and β are roots, αβ =:", "Nature of roots depends on:", "Solution of x² - 1 = 0 is:", "Solution of x² - 4x + 4 = 0 is:", "If roots are reciprocals, then:", "If roots are equal and opposite:"][i],
  options: [["Quadratic equation", "Linear equation", "Cubic equation", "Quartic equation"], ["Linear equation", "Quadratic equation", "Cubic equation", "Quartic equation"], ["Factorization only", "Completing square only", "Formula only", "All of these"], ["(-b ± √(b²-4ac))/2a", "(-b ± √(b²+4ac))/2a", "(b ± √(b²-4ac))/2a", "(-b ± √(b²-4ac))/a"], ["One root", "Two roots", "Three roots", "No roots"], ["±4", "±2", "4 only", "2 only"], ["±9", "±3", "3 only", "9 only"], ["Linear equation", "Quadratic equation", "Exponential equation", "Logarithmic equation"], ["2, 3", "-2, -3", "1, 6", "-1, -6"], ["2, 3", "-2, -3", "1, 6", "-1, -6"], ["3", "6", "9", "36"], ["2", "3", "6", "9"], ["3", "6", "9", "12"], ["5", "-5", "±5", "25"], ["7 and 1", "7 and -1", "-7 and 1", "-7 and -1"], ["7", "12", "-7", "-12"], ["7", "12", "-7", "-12"], ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - 5x - 6 = 0", "x² + 5x - 6 = 0"], ["±4", "±2", "4", "2"], ["±2", "±4", "±2i", "No real solution"], ["Two distinct roots", "Two equal roots", "No roots", "One root"], ["Positive", "Negative", "Zero", "Any value"], ["0 and 4", "0 and 3", "3 and 4", "0 only"], ["c/a", "-b/a", "b/a", "-c/a"], ["-b/a", "b/a", "c/a", "-c/a"], ["a only", "b only", "c only", "Discriminant"], ["1 only", "-1 only", "±1", "0"], ["2 (repeated)", "4 (repeated)", "-2 (repeated)", "2 and 4"], ["a = b", "a = c", "b = c", "a = -c"], ["a = 0", "b = 0", "c = 0", "a = c"]][i],
  correctAnswer: [1, 1, 3, 0, 1, 1, 1, 2, 0, 1, 2, 1, 1, 2, 1, 1, 0, 0, 1, 2, 1, 2, 0, 1, 2, 3, 2, 0, 1, 1][i]
}));

const theoryQuadraticMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 10001 + i,
  question: ["Equation unchanged by x → 1/x is:", "Discriminant of ax² + bx + c = 0 is:", "If D = 0, roots are:", "If D > 0 and perfect square, roots are:", "If D < 0, roots are:", "Cube roots of unity are:", "1 + ω + ω² equals:", "Product of cube roots of unity is:", "ω⁴ equals:", "Cube roots of -1 are:", "Sum of roots = -b/a is:", "1/α + 1/β equals:", "Synthetic division is used for:", "For x² + px + q = 0, α² + β² =:", "If one root is double in x² - 9x + k = 0, k =:", "ω² + ω + 1 =:", "ω³ equals:", "(1 + ω)(1 + ω²) equals:", "If roots are equal and opposite:", "α³ + β³ equals:", "For equal roots in kx² - 4x + k = 0:", "If sum of roots = product in x² + px + q = 0:", "Equation with roots 2ω and 2ω² is:", "If D > 0 but not perfect square, roots are:", "Equation with reciprocal roots of x² - 3x + 2 = 0:", "For imaginary roots:", "If ω is cube root of unity, ω̄ =:", "α - β for x² - 5x + 6 = 0 (α > β) is:", "If roots differ by 2 in x² - px + 8 = 0:", "ω¹⁰⁰ equals:"][i],
  options: [["Linear", "Reciprocal equation", "Exponential", "Logarithmic"], ["b - 4ac", "b² - 4ac", "b² + 4ac", "4ac - b²"], ["Real and unequal", "Real and equal", "Imaginary", "Irrational"], ["Irrational and unequal", "Rational and unequal", "Real and equal", "Imaginary"], ["Real and equal", "Real and unequal", "Imaginary", "Rational"], ["1, -1, 0", "1, i, -i", "1, ω, ω²", "0, 1, 2"], ["1", "3", "0", "ω"], ["0", "1", "ω", "ω²"], ["1", "ω", "ω²", "ω³"], ["1, ω, ω²", "-1, -ω, -ω²", "-1, ω, ω²", "1, -ω, -ω²"], ["Vieta's formula", "Quadratic formula", "Discriminant", "Factor theorem"], ["αβ/(α + β)", "(α + β)/(αβ)", "α + β", "αβ"], ["Any polynomial", "Quadratic factor", "Linear factor", "Cubic factor"], ["p² - 2q", "p² + 2q", "(p + q)²", "(p - q)²"], ["12", "18", "24", "36"], ["0", "1", "ω", "3"], ["0", "1", "ω", "-1"], ["0", "1", "ω", "ω²"], ["Sum = 0", "Product = 0", "Discriminant = 0", "a = c"], ["(α + β)³ - 3αβ(α + β)", "(α + β)³ + 3αβ(α + β)", "(α - β)³", "3αβ"], ["k = 2", "k = 4", "k = ±2", "k = ±4"], ["p = q", "p = -q", "p + q = 0", "pq = 1"], ["x² + 2x + 4 = 0", "x² - 2x + 4 = 0", "x² + 2x - 4 = 0", "x² - 2x - 4 = 0"], ["Rational", "Imaginary", "Irrational", "Equal"], ["2x² - 3x + 1 = 0", "x² - 3x + 2 = 0", "x² + 3x + 2 = 0", "2x² + 3x + 1 = 0"], ["b² > 4ac", "b² < 4ac", "b² = 4ac", "b = 0"], ["ω", "ω²", "1", "-ω"], ["1", "-1", "5", "6"], ["p = 4", "p = 6", "p = 8", "p = ±6"], ["1", "ω", "ω²", "0"]][i],
  correctAnswer: [1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 1, 2, 0, 1, 0, 1, 1, 0, 0, 2, 1, 0, 2, 0, 1, 1, 0, 3, 1][i]
}));

const variationsMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 11001 + i,
  question: ["Relation of same kind quantities is:", "Ratio has:", "Equality of two ratios is:", "In a:b :: c:d, a and d are:", "In a:b :: c:d, b and c are:", "Product of extremes equals:", "y = kx represents:", "y = k/x represents:", "Third proportional to x,y is z where:", "Mean proportional between a and b is:", "If x ∝ y, then:", "If x ∝ 1/y, then:", "If 2:3 = x:12, then x =:", "If a:b = 3:4 and b:c = 2:5, then a:c =:", "Fourth proportional to 2, 3, 4 is:", "Continued proportion means:", "If y ∝ x², then y ∝:", "If y ∝ x and y = 6 when x = 2, find k:", "If y ∝ 1/x and y = 4 when x = 3, k =:", "z ∝ xy is called:", "If 6:x :: x:24, then x =:", "Duplicate ratio of 3:4 is:", "Subduplicate ratio of 9:16 is:", "Triplicate ratio of 2:3 is:", "If a:b = 2:3 and c:d = 3:4, ac:bd =:", "Componendo: if a:b = c:d:", "(a+b):b = (c+d):d is:", "(a-b):b = (c-d):d is:", "If a:b = c:d, then b:a = d:c is:", "If x + y : x - y = 7:3, then x:y =:"][i],
  options: [["Proportion", "Ratio", "Variation", "Fraction"], ["Unit", "No unit", "Dimension", "All"], ["Ratio", "Proportion", "Variation", "Fraction"], ["Means", "Extremes", "Antecedents", "Consequents"], ["Extremes", "Means", "First terms", "Last terms"], ["Sum of means", "Difference of means", "Product of means", "Ratio of means"], ["Inverse variation", "Direct variation", "Joint variation", "No variation"], ["Direct variation", "Inverse variation", "Joint variation", "Partial variation"], ["x:y = z:y", "x:y = y:z", "x:z = y:z", "x:z = z:y"], ["(a + b)/2", "√(ab)", "ab", "a/b"], ["x/y = constant", "xy = constant", "x + y = constant", "x - y = constant"], ["x/y = constant", "xy = constant", "x + y = constant", "x - y = constant"], ["6", "8", "18", "24"], ["3:10", "6:20", "3:5", "6:5"], ["5", "6", "8", "12"], ["a:b = b:c", "a:b = c:d", "a = b = c", "a + b = c"], ["x", "x²", "√x", "1/x²"], ["2", "3", "4", "12"], ["4", "3", "12", "1"], ["Direct variation", "Inverse variation", "Joint variation", "Partial variation"], ["12", "15", "18", "144"], ["6:8", "9:16", "3:4", "√3:√4"], ["81:256", "3:4", "9:16", "18:32"], ["4:9", "6:9", "8:27", "2:3"], ["6:12", "1:2", "5:7", "2:4"], ["(a+b):b = (c+d):d", "(a-b):b = (c-d):d", "a:c = b:d", "a:d = b:c"], ["Componendo", "Dividendo", "Alternendo", "Invertendo"], ["Componendo", "Dividendo", "Alternendo", "Invertendo"], ["Invertendo", "Alternendo", "Componendo", "Dividendo"], ["5:2", "2:5", "7:3", "3:7"]][i],
  correctAnswer: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 2, 2, 0, 1, 1, 2, 1, 0, 0, 1, 0, 0][i]
}));

const partialFractionsMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 12001 + i,
  question: ["An identity is true for:", "Breaking fraction into simpler parts is:", "For proper fraction, numerator degree is:", "For improper fraction, numerator degree is:", "1/(x-1)(x-2) decomposes into:", "For (x-1)² in denominator:", "For x² + 1 (irreducible) in denominator:", "Cover-up method finds:", "2x+1/((x-1)(x+2)) gives A/(x-1) with A =:", "For (ax + b)/(x-1)²:", "1/(x³ - x) has:", "For (x² + x + 1)/(x-1)(x² + 1), x² + 1 term has:", "1/(x² - 4) equals:", "Number of constants for (x-1)³ factor:", "1/x² decomposes into:", "For 1/(x(x²+1)):", "In x/(x-1)², coefficient of 1/(x-1)² is:", "2/((x-1)(x+1)) has A + B =:", "For (x² + 2)/(x-1)(x+1), first step is:", "1/(x² + 2x + 1) = 1/(x+1)² has form:", "x²/((x-1)(x+1)) is:", "After dividing x²/(x²-1):", "Partial fraction of 3/((x-1)(x-2)(x-3)) has:", "For (x+1)/x²:", "Finding partial fractions helps in:", "Number of unknowns for distinct linear factors n is:", "For repeated quadratic (x²+1)²:", "Partial fractions is reverse of:", "Degree of numerator < denominator is:", "If numerator degree ≥ denominator:"][i],
  options: [["Some values", "No values", "All values", "One value"], ["Factorization", "Partial fractions", "Simplification", "Expansion"], ["Greater than denominator", "Less than denominator", "Equal to denominator", "Zero"], ["Less than denominator", "Greater or equal to denominator", "Always equal", "Always zero"], ["A/(x-1) + B/(x-2)", "A(x-1) + B(x-2)", "A/(x-1) - B/(x-2)", "(A+B)/(x-1)(x-2)"], ["A/(x-1)", "A/(x-1)²", "A/(x-1) + B/(x-1)²", "Ax + B/(x-1)²"], ["A/x² + 1", "(Ax + B)/(x² + 1)", "A/(x + 1)", "A/(x - 1)"], ["Coefficients directly", "Quotient", "Remainder", "Degree"], ["1", "2", "3", "1/3"], ["A/(x-1)", "A/(x-1)²", "A/(x-1) + B/(x-1)²", "Ax + B/(x-1)²"], ["2 terms", "3 terms", "4 terms", "1 term"], ["A", "Ax", "Ax + B", "A/x"], ["1/4(1/(x-2) - 1/(x+2))", "1/4(1/(x-2) + 1/(x+2))", "1/(x-2) - 1/(x+2)", "1/(x-2) + 1/(x+2)"], ["1", "2", "3", "4"], ["A/x", "A/x²", "A/x + B/x²", "Cannot decompose"], ["A/x + B/(x²+1)", "A/x + (Bx+C)/(x²+1)", "A/x + Bx/(x²+1)", "(Ax+B)/(x(x²+1))"], ["0", "1", "-1", "2"], ["0", "2", "1", "-1"], ["Partial fractions directly", "Polynomial division", "Factoring numerator", "Multiplying"], ["A/(x+1)", "A/(x+1)²", "A/(x+1) + B/(x+1)²", "Already simplified"], ["Proper", "Improper", "Neither", "Invalid"], ["1 + 1/(x²-1)", "1 - 1/(x²-1)", "x + 1/(x²-1)", "x - 1/(x²-1)"], ["1 term", "2 terms", "3 terms", "4 terms"], ["A/x + B/x²", "A/x", "(Ax+B)/x²", "1/x + 1/x²"], ["Factoring", "Integration", "Differentiation", "Multiplication"], ["n", "n+1", "n-1", "2n"], ["Ax+B + (Cx+D)/(x²+1)²", "(Ax+B)/(x²+1) + (Cx+D)/(x²+1)²", "A + B/(x²+1)²", "Ax/(x²+1)²"], ["Addition of fractions", "Subtraction", "Multiplication", "Division"], ["Proper fraction", "Improper fraction", "Mixed fraction", "Unit fraction"], ["Divide first", "Factor first", "Add 1", "Multiply"]][i],
  correctAnswer: [2, 1, 1, 1, 0, 2, 1, 0, 0, 2, 1, 2, 0, 2, 3, 1, 1, 0, 1, 3, 1, 0, 2, 3, 1, 0, 1, 0, 0, 0][i]
}));

const setsFunctionsMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 13001 + i,
  question: ["A well-defined collection is:", "A ∪ B contains elements:", "A ∩ B contains elements:", "A ∪ B = B ∪ A shows union is:", "A - B contains elements:", "Complement of A (Aᶜ) is:", "Power set of n elements has:", "Binary relation from A to B is subset of:", "In f: A → B, A is called:", "In f: A → B, B is called:", "A function with range = codomain is:", "A function with unique images is:", "A function both one-one and onto is:", "If A = {1, 2, 3}, |P(A)| =:", "Empty set is denoted by:", "A ∩ ∅ =:", "A ∪ ∅ =:", "A ∩ A =:", "A ∪ A =:", "(Aᶜ)ᶜ =:", "De Morgan's: (A ∪ B)ᶜ =:", "De Morgan's: (A ∩ B)ᶜ =:", "n(A) = 5, n(B) = 3, n(A ∩ B) = 2, n(A ∪ B) =:", "f(x) = c for all x is:", "Identity function is f(x) =:", "Inverse of bijective function is:", "If f(x) = 2x + 3, f⁻¹(x) =:", "(f ∘ g)(x) means:", "Relation R is reflexive if:", "Equivalence relation has:"][i],
  options: [["Group", "Set", "Class", "Cluster"], ["Common to A and B", "In A or B or both", "Only in A", "Only in B"], ["In A or B", "Common to both", "Only in A", "Only in B"], ["Associative", "Distributive", "Commutative", "Inverse"], ["In A but not in B", "In B but not in A", "In both", "In neither"], ["A ∩ U", "U - A", "A - U", "A ∪ U"], ["n elements", "2n elements", "2ⁿ elements", "n² elements"], ["A ∪ B", "A ∩ B", "A × B", "A - B"], ["Range", "Codomain", "Domain", "Image"], ["Domain", "Range", "Codomain", "Pre-image"], ["One-one", "Onto", "Into", "Bijective"], ["Onto", "One-one", "Into", "Constant"], ["Injective", "Surjective", "Bijective", "Constant"], ["3", "6", "8", "9"], ["{0}", "∅", "{∅}", "0"], ["A", "∅", "U", "{∅}"], ["∅", "U", "A", "{A}"], ["∅", "U", "A", "2A"], ["2A", "A", "∅", "U"], ["∅", "U", "A", "Aᶜ"], ["Aᶜ ∪ Bᶜ", "Aᶜ ∩ Bᶜ", "A ∩ B", "A ∪ B"], ["Aᶜ ∪ Bᶜ", "Aᶜ ∩ Bᶜ", "A ∪ B", "A ∩ B"], ["8", "6", "10", "5"], ["Identity", "Constant", "Linear", "Quadratic"], ["0", "1", "x", "x²"], ["Not a function", "A bijection", "Always constant", "Many-one"], ["(x-3)/2", "(x+3)/2", "2x - 3", "x/2 - 3"], ["f(x) + g(x)", "f(x) × g(x)", "f(g(x))", "g(f(x))"], ["(a,a) ∈ R for all a", "(a,b) ∈ R → (b,a) ∈ R", "(a,b), (b,c) ∈ R → (a,c) ∈ R", "None"], ["Reflexive only", "Symmetric only", "Transitive only", "All three"]][i],
  correctAnswer: [1, 1, 1, 2, 0, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 0, 1, 1, 2, 1, 0, 2, 0, 3][i]
}));

const statisticsMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 14001 + i,
  question: ["Data in class intervals is:", "A histogram uses:", "Most frequent value is:", "Middle value of ordered data is:", "Mean = ΣX / N where N is:", "For 2, 4, 6, 8, 10 mean is:", "For 3, 5, 7, 9, 11 median is:", "For 2, 3, 3, 5, 7 mode is:", "Range =:", "For 5, 10, 15, 20 range is:", "Variance measures:", "Standard deviation is:", "For grouped data, we use class:", "Class mark =:", "Frequency polygon connects:", "Cumulative frequency is:", "Ogive is graph of:", "For even n, median is:", "If all values equal, SD is:", "Median divides data into:", "First quartile (Q1) is:", "Third quartile (Q3) is:", "IQR =:", "Pie chart displays:", "Bar chart bars are:", "Sum of relative frequencies =:", "For outliers, best measure is:", "Coefficient of variation =:", "Mode < median < mean is:", "Symmetric distribution has:"][i],
  options: [["Raw data", "Grouped data", "Ungrouped data", "Primary data"], ["Circles", "Lines", "Adjacent rectangles", "Scattered points"], ["Mean", "Median", "Mode", "Range"], ["Mean", "Median", "Mode", "Range"], ["Sum of values", "Number of values", "Largest value", "Smallest value"], ["5", "6", "7", "8"], ["5", "7", "9", "6"], ["2", "3", "5", "7"], ["Largest - Smallest", "Largest + Smallest", "Mean - Median", "Mode - Mean"], ["15", "10", "25", "5"], ["Central tendency", "Dispersion", "Frequency", "Probability"], ["Square of variance", "Square root of variance", "Mean of variance", "Variance minus mean"], ["Boundaries", "Marks", "Frequencies", "Limits"], ["Upper - Lower", "(Upper + Lower)/2", "Upper + Lower", "Upper × Lower"], ["Bar tops", "Class marks with frequencies", "Cumulative frequencies", "Quartiles"], ["Sum of all", "Running total", "Highest", "Lowest"], ["Frequency", "Relative frequency", "Cumulative frequency", "Mode"], ["Middle value", "Average of two middle", "First value", "Last value"], ["1", "Mean", "0", "Undefined"], ["Three parts", "Four parts", "Two equal parts", "Unequal parts"], ["25th percentile", "50th percentile", "75th percentile", "100th percentile"], ["25th percentile", "50th percentile", "75th percentile", "100th percentile"], ["Q1 - Q3", "Q3 - Q1", "Q1 + Q3", "(Q1 + Q3)/2"], ["Trends", "Frequencies as angles", "Cumulative data", "Correlation"], ["Adjacent", "Separated", "Overlapping", "Curved"], ["0", "0.5", "1", "n"], ["Mean", "Median", "Mode", "Range"], ["(Mean/SD) × 100", "(SD/Mean) × 100", "Mean × SD", "Mean - SD"], ["Symmetric", "Positively skewed", "Negatively skewed", "Uniform"], ["Mean ≠ Median", "Mean = Median = Mode", "Mode > Mean", "Mean > Mode"]][i],
  correctAnswer: [1, 2, 2, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 0, 2, 1, 1, 1, 2, 1, 1, 1, 1][i]
}));

const trigonometryMCQs: MCQ[] = Array.from({length: 30}, (_, i) => ({
  id: 15001 + i,
  question: ["An angle is formed by:", "1 degree =:", "1 minute =:", "Arc length formula is l =:", "π radians =:", "2π radians =:", "1 radian ≈:", "sin²θ + cos²θ =:", "1 + tan²θ =:", "1 + cot²θ =:", "sin 0° =:", "cos 0° =:", "sin 90° =:", "cos 90° =:", "tan 45° =:", "sin 30° =:", "cos 60° =:", "sin 60° =:", "cos 30° =:", "tan 30° =:", "tan 60° =:", "sin(90° - θ) =:", "cos(90° - θ) =:", "sin(-θ) =:", "cos(-θ) =:", "Period of sin θ is:", "Period of tan θ is:", "sec θ =:", "csc θ =:", "cot θ =:"][i],
  options: [["One ray", "Two rays", "Three rays", "A line"], ["60 minutes", "100 minutes", "360 minutes", "180 minutes"], ["60 degrees", "60 seconds", "100 seconds", "360 seconds"], ["rθ", "r/θ", "θ/r", "r + θ"], ["90°", "180°", "270°", "360°"], ["90°", "180°", "270°", "360°"], ["57.3°", "90°", "180°", "45°"], ["0", "1", "2", "sin θ cos θ"], ["sec²θ", "csc²θ", "cot²θ", "sin²θ"], ["sec²θ", "csc²θ", "tan²θ", "cos²θ"], ["0", "1", "-1", "½"], ["0", "1", "-1", "½"], ["0", "1", "-1", "½"], ["0", "1", "-1", "½"], ["0", "1", "√3", "1/√3"], ["0", "1", "½", "√3/2"], ["0", "1", "½", "√3/2"], ["½", "1/√2", "√3/2", "√2"], ["½", "1/√2", "√3/2", "√2"], ["1", "√3", "1/√3", "0"], ["1", "√3", "1/√3", "0"], ["sin θ", "cos θ", "-sin θ", "-cos θ"], ["cos θ", "sin θ", "-cos θ", "-sin θ"], ["sin θ", "-sin θ", "cos θ", "-cos θ"], ["cos θ", "-cos θ", "sin θ", "-sin θ"], ["π", "2π", "π/2", "4π"], ["π", "2π", "π/2", "4π"], ["1/sin θ", "1/cos θ", "1/tan θ", "sin θ/cos θ"], ["1/sin θ", "1/cos θ", "1/tan θ", "cos θ/sin θ"], ["sin θ/cos θ", "cos θ/sin θ", "1/sec θ", "tan²θ"]][i],
  correctAnswer: [1, 0, 1, 0, 1, 3, 0, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1][i]
}));

// Export all chapters
export const airforceMathChaptersComplete: Chapter[] = [
  { id: "matrices-determinants", name: "Matrices and Determinants", description: "Matrix operations, types, and determinant calculations", icon: "📐", mcqs: matricesMCQs },
  { id: "complex-numbers", name: "Real and Complex Numbers", description: "Number systems, complex numbers, and operations", icon: "🔢", mcqs: complexNumbersMCQs },
  { id: "logarithms", name: "Logarithms", description: "Logarithmic functions, properties, and calculations", icon: "📊", mcqs: logarithmsMCQs },
  { id: "algebraic-expressions", name: "Algebraic Expressions and Formulas", description: "Polynomials, surds, and algebraic identities", icon: "🔣", mcqs: algebraicMCQs },
  { id: "factorization", name: "Factorization", description: "Factoring polynomials and finding HCF/LCM", icon: "✂️", mcqs: factorizationMCQs },
  { id: "linear-equations", name: "Linear Equations and Inequalities", description: "Solving linear equations and inequalities", icon: "📏", mcqs: linearEquationsMCQs },
  { id: "geometry-fundamentals", name: "Fundamentals of Geometry", description: "Basic geometric concepts and theorems", icon: "📐", mcqs: geometryMCQs },
  { id: "practical-geometry", name: "Practical Geometry", description: "Constructions and geometric proofs", icon: "🔺", mcqs: practicalGeomMCQs },
  { id: "quadratic-equations", name: "Quadratic Equations", description: "Solving quadratic equations by various methods", icon: "➗", mcqs: quadraticMCQs },
  { id: "theory-quadratic", name: "Theory of Quadratic Equations", description: "Discriminant, roots, and cube roots of unity", icon: "🧮", mcqs: theoryQuadraticMCQs },
  { id: "variations", name: "Variations", description: "Direct, inverse, and joint variations", icon: "↔️", mcqs: variationsMCQs },
  { id: "partial-fractions", name: "Partial Fractions", description: "Decomposition of rational expressions", icon: "🔀", mcqs: partialFractionsMCQs },
  { id: "sets-functions", name: "Sets and Functions", description: "Set theory, relations, and function types", icon: "∪", mcqs: setsFunctionsMCQs },
  { id: "statistics", name: "Basic Statistics", description: "Mean, median, mode, and data analysis", icon: "📈", mcqs: statisticsMCQs },
  { id: "trigonometry", name: "Trigonometry", description: "Trigonometric ratios, identities, and applications", icon: "📐", mcqs: trigonometryMCQs }
];

// Experience-based MCQs
export const airforceMathExperienceMCQs: MCQ[] = [
  ...matricesMCQs.slice(0, 3),
  ...complexNumbersMCQs.slice(0, 3),
  ...logarithmsMCQs.slice(0, 3),
  ...algebraicMCQs.slice(0, 2),
  ...factorizationMCQs.slice(0, 3),
  ...linearEquationsMCQs.slice(0, 2),
  ...geometryMCQs.slice(0, 2),
  ...practicalGeomMCQs.slice(0, 2),
  ...quadraticMCQs.slice(0, 3),
  ...theoryQuadraticMCQs.slice(0, 3),
  ...variationsMCQs.slice(0, 2),
  ...partialFractionsMCQs.slice(0, 2),
  ...setsFunctionsMCQs.slice(0, 2),
  ...statisticsMCQs.slice(0, 2),
  ...trigonometryMCQs.slice(0, 4)
];
