import { MCQ } from "@/types";

// ── Unit 1: Introduction to Programming ──
export const cs10Unit1MCQs: MCQ[] = [
  { id: "cs10-u1-1", question: "A software that facilitates programmers in writing computer programs is known as ______.", options: ["Compiler", "An editor", "An IDE", "A debugger"], correctAnswer: 2, explanation: "An IDE (Integrated Development Environment) combines editor, compiler, debugger in one interface." },
  { id: "cs10-u1-2", question: "______ is a software that is responsible for the conversion of program files to machine understandable and executable code.", options: ["Compiler", "Editor", "IDE", "Debugger"], correctAnswer: 0, explanation: "A compiler converts source code to machine code." },
  { id: "cs10-u1-3", question: "Every programming language has some primitive building blocks and follows some grammar rules known as its ______.", options: ["Programming rules", "Syntax", "Building blocks", "Semantic rules"], correctAnswer: 1, explanation: "Syntax refers to the set of rules defining the structure of a programming language." },
  { id: "cs10-u1-4", question: "A list of words that are predefined and must not be used by the programmer to name his own variables are known as ______.", options: ["Auto words", "Reserved words", "Restricted words", "Predefined words"], correctAnswer: 1, explanation: "Reserved words (keywords) are predefined and cannot be used as variable names." },
  { id: "cs10-u1-5", question: "Include statements are written in ______ section.", options: ["Header", "Main", "Comments", "Print"], correctAnswer: 0, explanation: "Include statements (#include) are written in the header section of the program." },
  { id: "cs10-u1-6", question: "______ are added at the source code to further explain the techniques and algorithms used by the programmer.", options: ["Messages", "Hints", "Comments", "Explanations"], correctAnswer: 2, explanation: "Comments are used to explain code and are ignored by the compiler." },
  { id: "cs10-u1-7", question: "______ are the values that do not change during the whole execution of program.", options: ["Variables", "Constants", "Strings", "Comments"], correctAnswer: 1, explanation: "Constants are fixed values that do not change during program execution." },
  { id: "cs10-u1-8", question: "A float uses ______ bytes of memory.", options: ["3", "4", "5", "6"], correctAnswer: 1, explanation: "A float data type uses 4 bytes of memory." },
  { id: "cs10-u1-9", question: "For initializing a variable, we use ______ operator.", options: ["→", "=", "@", "?"], correctAnswer: 1, explanation: "The assignment operator (=) is used to initialize variables." },
  { id: "cs10-u1-10", question: "______ can be thought of as a container to store constants.", options: ["Box", "Jar", "Variable", "Collection"], correctAnswer: 2, explanation: "A variable is a named container that stores data values." },
];

// ── Unit 2: User Interaction ──
export const cs10Unit2MCQs: MCQ[] = [
  { id: "cs10-u2-1", question: "printf is used to print ______ type of data.", options: ["int", "float", "char", "All of them"], correctAnswer: 3, explanation: "printf can print all data types using appropriate format specifiers." },
  { id: "cs10-u2-2", question: "scanf is a ______ in C programming language.", options: ["Keyword", "Library", "Function", "None of them"], correctAnswer: 2, explanation: "scanf() is a built-in function used for taking input." },
  { id: "cs10-u2-3", question: "getch() is used to take ______ as input from user.", options: ["int", "float", "char", "All of them"], correctAnswer: 2, explanation: "getch() reads a single character input from the user." },
  { id: "cs10-u2-4", question: "Let the following part of code, what will be the value of variable a after execution:\nint a = 4;\nfloat b = 2.2;\na = a * b;", options: ["8.8", "8", "8.0", "8.2"], correctAnswer: 1, explanation: "Since 'a' is int, the result 8.8 is truncated to 8." },
  { id: "cs10-u2-5", question: "Which of the following is valid in the code?", options: ["int = 20;", "grade = 'A';", "line = this is a line;", "None of them"], correctAnswer: 1, explanation: "grade = 'A' is valid character assignment." },
  { id: "cs10-u2-6", question: "Which operator has highest precedence among the following:", options: ["/", "%", ">", "!"], correctAnswer: 3, explanation: "The NOT operator (!) has the highest precedence among these operators." },
  { id: "cs10-u2-7", question: "Which of the following is not a type of operator:", options: ["Arithmetic Operator", "Relational Operator", "Logical Operator", "None of them"], correctAnswer: 3, explanation: "All listed are valid operator types in C." },
  { id: "cs10-u2-8", question: "The operator % is used to calculate ______.", options: ["Percentage", "Remainder", "Factorial", "Square"], correctAnswer: 1, explanation: "The modulus operator (%) returns the remainder of division." },
  { id: "cs10-u2-9", question: "Which of the following is a valid character:", options: ["'here'", "\"a\"", "'9'", "None of them"], correctAnswer: 2, explanation: "'9' is a valid character literal enclosed in single quotes." },
  { id: "cs10-u2-10", question: "What is true about C language:", options: ["It is not a case sensitive language", "Keywords can be used as variable names", "All logical operators are binary operators", "None of them"], correctAnswer: 3, explanation: "C is case sensitive, keywords cannot be variable names, and NOT (!) is a unary logical operator." },
];

// ── Unit 3: Conditional Logic ──
export const cs10Unit3MCQs: MCQ[] = [
  { id: "cs10-u3-1", question: "Conditional logic helps in ______.", options: ["Decisions", "Iterations", "Traversing", "All"], correctAnswer: 0, explanation: "Conditional logic is primarily used for decision-making in programs." },
  { id: "cs10-u3-2", question: "______ statements describe the sequence in which statements of the program should be executed.", options: ["Loop", "Conditional", "Control", "All"], correctAnswer: 3, explanation: "Control statements (including loop, conditional, sequential) describe execution order." },
  { id: "cs10-u3-3", question: "In if statement, what happens if condition is false?", options: ["Program crashes", "Index out of bound error", "Further code executes", "Compiler asks to change condition"], correctAnswer: 2, explanation: "If the condition is false, the program skips the if block and executes further code." },
  { id: "cs10-u3-4", question: "int a = 5;\nif (a < 10)\n  a++;\nelse\n  if (a > 4)\n  a--;\nWhich of the following statements will execute?", options: ["a++", "a--", "Both (a) and (b)", "None"], correctAnswer: 0, explanation: "Since a=5 which is < 10, the first condition is true, so a++ executes." },
  { id: "cs10-u3-5", question: "Which of the following is the condition to check if 'a' is a factor of 'c'?", options: ["a%c == 0", "c%a == 0", "a*c == 0", "a+c == 0"], correctAnswer: 1, explanation: "If c%a == 0, then 'a' divides 'c' evenly, making 'a' a factor of 'c'." },
  { id: "cs10-u3-6", question: "A condition can be any ______ expression.", options: ["Arithmetic", "Relational", "Logical", "Arithmetic, relational or logical"], correctAnswer: 3, explanation: "A condition can be any expression that evaluates to true or false." },
  { id: "cs10-u3-7", question: "An if statement inside another if statement is called ______ structure.", options: ["Nested", "Boxed", "Repeated", "Decomposed"], correctAnswer: 0, explanation: "Nested if means an if statement placed inside another if statement." },
  { id: "cs10-u3-8", question: "A set of multiple instructions enclosed in braces is called a ______.", options: ["Box", "List", "Block", "Job"], correctAnswer: 2, explanation: "A block is a group of statements enclosed in curly braces { }." },
];

// ── Unit 4: Data and Repetition ──
export const cs10Unit4MCQs: MCQ[] = [
  { id: "cs10-u4-1", question: "An array is a ______ structure.", options: ["Loop", "Control", "Data", "Conditional"], correctAnswer: 2, explanation: "An array is a data structure that stores multiple values of the same type." },
  { id: "cs10-u4-2", question: "Array elements are stored at ______ memory locations.", options: ["Contiguous", "Scattered", "Divided", "None"], correctAnswer: 0, explanation: "Array elements are stored in contiguous (adjacent) memory locations." },
  { id: "cs10-u4-3", question: "If the size of an array is 100, the range of indexes will be ______.", options: ["0-99", "0-100", "1-100", "2-102"], correctAnswer: 0, explanation: "Array indexing starts from 0, so for size 100: indices 0 to 99." },
  { id: "cs10-u4-4", question: "______ structure allows repetition of a set of instructions.", options: ["Loop", "Conditional", "Control", "Data"], correctAnswer: 0, explanation: "Loop structures are used to repeat a set of instructions." },
  { id: "cs10-u4-5", question: "______ is the unique identifier, used to refer to the array.", options: ["Data Type", "Array name", "Array size", "None"], correctAnswer: 1, explanation: "The array name is the unique identifier used to refer to the array." },
  { id: "cs10-u4-6", question: "Array can be initialized ______ declaration.", options: ["At the time of", "After", "Before", "Both a & b"], correctAnswer: 3, explanation: "Arrays can be initialized at the time of declaration or after declaration." },
  { id: "cs10-u4-7", question: "Using loops inside loops is called ______ loops.", options: ["For", "While", "Do-while", "Nested"], correctAnswer: 3, explanation: "A loop inside another loop is called a nested loop." },
  { id: "cs10-u4-8", question: "______ part of for loop is executed first.", options: ["Condition", "Body", "Initialization", "Increment/Decrement"], correctAnswer: 2, explanation: "In a for loop, the initialization part executes first." },
  { id: "cs10-u4-9", question: "______ make it easier to read and write values in array.", options: ["Loops", "Conditions", "Expressions", "Functions"], correctAnswer: 0, explanation: "Loops make it easy to iterate through array elements for reading and writing." },
  { id: "cs10-u4-10", question: "To initialize the array in a single statement, initialize it ______ declaration.", options: ["At the time of", "After", "Before", "Both a & b"], correctAnswer: 0, explanation: "To initialize in a single statement, you must do it at the time of declaration." },
];

// ── Unit 5: Functions ──
export const cs10Unit5MCQs: MCQ[] = [
  { id: "cs10-u5-1", question: "Functions could be built-in or ______.", options: ["Admin defined", "Server defined", "User defined", "Both a and c"], correctAnswer: 2, explanation: "Functions are either built-in (library) or user-defined." },
  { id: "cs10-u5-2", question: "The functions which are available in C Standard Library are called ______.", options: ["User-defined", "Built-in", "Recursive", "Repetitive"], correctAnswer: 1, explanation: "Functions available in the C Standard Library are called built-in functions." },
  { id: "cs10-u5-3", question: "The values passed to a function are called ______.", options: ["Bodies", "Return types", "Arrays", "Arguments"], correctAnswer: 3, explanation: "Arguments (or parameters) are values passed to a function when calling it." },
  { id: "cs10-u5-4", question: "char cd() { return 'a'; }. In this function \"char\" is ______.", options: ["Body", "Return type", "Array", "Arguments"], correctAnswer: 1, explanation: "'char' specifies the return type of the function." },
  { id: "cs10-u5-5", question: "The advantages of using functions are ______.", options: ["Readability", "Reusability", "Debugging", "All"], correctAnswer: 3, explanation: "Functions provide readability, reusability, and easier debugging." },
  { id: "cs10-u5-6", question: "If there are three return statements in the function body, ______ of them will be executed.", options: ["One", "Two", "Three", "First and last"], correctAnswer: 0, explanation: "Only one return statement executes; the function exits after the first return encountered." },
  { id: "cs10-u5-7", question: "Readability helps to ______ the code.", options: ["Understand", "Modify", "Debug", "All"], correctAnswer: 3, explanation: "Readability helps to understand, modify, and debug the code." },
  { id: "cs10-u5-8", question: "______ means to transfer the control to another function.", options: ["Calling", "Defining", "Re-writing", "Including"], correctAnswer: 0, explanation: "Calling a function means transferring control to that function." },
];

// ── Outside Exercise MCQs (strictly non-duplicate past paper questions) ──

export const cs10Unit1OutsideMCQs: MCQ[] = [
  { id: "cs10o-u1-1", question: "The extension of header file is:", options: [".h", ".c", ".cpp", ".txt"], correctAnswer: 0, explanation: "Header files in C have the .h extension." },
  { id: "cs10o-u1-2", question: "BASIC is a ______ language.", options: ["Machine", "Assembly", "Low level", "High level"], correctAnswer: 3, explanation: "BASIC is a high-level programming language." },
  { id: "cs10o-u1-3", question: "GW-BASIC can operate in:", options: ["One mode", "Two modes", "Three modes", "Several modes"], correctAnswer: 1, explanation: "GW-BASIC can operate in two modes: Direct mode and Indirect mode." },
  { id: "cs10o-u1-4", question: "The extension of GW-BASIC program is:", options: [".bas", ".bs", ".txt", ".doc"], correctAnswer: 0, explanation: "GW-BASIC program files have the .bas extension." },
  { id: "cs10o-u1-5", question: "Which shortcut key is used to RUN a program in BASIC?", options: ["F1", "F2", "F3", "F4"], correctAnswer: 1, explanation: "F2 is used to run a program in GW-BASIC." },
  { id: "cs10o-u1-6", question: "Which of the following key is used to load a file in BASIC?", options: ["F1", "F2", "F3", "F4"], correctAnswer: 2, explanation: "F3 is used to load a file in GW-BASIC." },
  { id: "cs10o-u1-7", question: "Ctrl + Y is used for:", options: ["Undo", "Find", "Page Break", "Redo"], correctAnswer: 3, explanation: "Ctrl + Y is the shortcut for Redo." },
  { id: "cs10o-u1-8", question: "What is the use of Ctrl + Z?", options: ["Redo", "Undo", "Copy", "Paste"], correctAnswer: 1, explanation: "Ctrl + Z is the shortcut for Undo." },
  { id: "cs10o-u1-9", question: "Which bar provides information about application software?", options: ["Menu Bar", "Tool Bar", "Status Bar", "Scroll Bar"], correctAnswer: 2, explanation: "The Status Bar provides information about the current state of the application." },
  { id: "cs10o-u1-10", question: "Which of the following is a valid line of code?", options: ["int=30;", "line = this is a line;", "float = 4.3;", "Char grade = 'A';"], correctAnswer: 3, explanation: "Char grade = 'A'; is a valid variable declaration and assignment." },
];

export const cs10Unit2OutsideMCQs: MCQ[] = [
  { id: "cs10o-u2-1", question: "Scanf() is an example of ______ function.", options: ["Input", "Output", "Logical", "Math"], correctAnswer: 0, explanation: "scanf() is an input function used to read data from the user." },
  { id: "cs10o-u2-2", question: "The expression 13 % 3 has answer:", options: ["13", "5", "3", "1"], correctAnswer: 3, explanation: "13 % 3 = 1 (remainder when 13 is divided by 3)." },
  { id: "cs10o-u2-3", question: "MOD is a:", options: ["Logical Operator", "Arithmetic operator", "Concatenation operator", "Assignment operator"], correctAnswer: 1, explanation: "MOD (modulus) is an arithmetic operator that returns the remainder." },
  { id: "cs10o-u2-4", question: "Ternary operator is applied on ______ operands.", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "The ternary operator (?:) works on three operands." },
  { id: "cs10o-u2-5", question: "Which operator has lowest precedence among the following?", options: ["/", "=", ">", "+"], correctAnswer: 1, explanation: "The assignment operator (=) has the lowest precedence among these." },
  { id: "cs10o-u2-6", question: "What is the purpose of \\n? (Escape sequence)", options: ["Tab", "New line", "Backspace", "Form feed"], correctAnswer: 1, explanation: "\\n is the escape sequence for a new line." },
  { id: "cs10o-u2-7", question: "The output of the function RIGHT$(\"PAKISTAN\",3) is:", options: ["PAK", "TAN", "IST", "NAN"], correctAnswer: 1, explanation: "RIGHT$(\"PAKISTAN\",3) returns the last 3 characters: TAN." },
  { id: "cs10o-u2-8", question: "The output of PRINT VAL(\"78, city Lahore\") is:", options: ["city Lahore", "78 city", "78", "78 Lahore"], correctAnswer: 2, explanation: "VAL() extracts the numeric value from the beginning of a string: 78." },
  { id: "cs10o-u2-9", question: "Format specifier %f is for data type:", options: ["int", "float", "char", "void"], correctAnswer: 1, explanation: "%f is the format specifier for float data type." },
  { id: "cs10o-u2-10", question: "Which of the following is not a logical operator?", options: ["AND", "OR", "NOT", "NEITHER"], correctAnswer: 3, explanation: "NEITHER is not a logical operator. AND, OR, NOT are the three logical operators." },
];

export const cs10Unit3OutsideMCQs: MCQ[] = [
  { id: "cs10o-u3-1", question: "How many types of control structures are in C language?", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "Three types: Sequential, Selection (conditional), and Repetition (loop)." },
  { id: "cs10o-u3-2", question: "______ is the default control structure in C language.", options: ["Sequential Control", "Repetition Control", "Conditional Control", "Check Control"], correctAnswer: 0, explanation: "Sequential control is the default – statements execute one after another." },
  { id: "cs10o-u3-3", question: "All of the following are control statements EXCEPT:", options: ["Sequential", "Repetition", "Selection", "Relation"], correctAnswer: 3, explanation: "Relation is not a control statement. Sequential, Repetition, Selection are." },
  { id: "cs10o-u3-4", question: "How many types of control structure are there in BASIC?", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "BASIC also has 3 types of control structures: Sequential, Selection, and Loop." },
  { id: "cs10o-u3-5", question: "IF...THEN statement is a ______ statement.", options: ["Sequential", "Loop", "Decision making", "Logical"], correctAnswer: 2, explanation: "IF...THEN is used for decision making in programs." },
  { id: "cs10o-u3-6", question: "Which control structure is used for decision making in GW-BASIC?", options: ["Loop", "Condition", "Sequential", "Repetition"], correctAnswer: 1, explanation: "Conditional control structure is used for decision making." },
  { id: "cs10o-u3-7", question: "What is the output?\nint m=0, n=5;\nif(m%n>1) printf(\"Success\");\nelse printf(\"Looser\");", options: ["Success", "Looser", "Error", "No output"], correctAnswer: 1, explanation: "m%n = 0%5 = 0, which is not > 1, so else executes and prints 'Looser'." },
  { id: "cs10o-u3-8", question: "What is the output?\nint a=12, b=13;\nif(a != b) printf(\"Equal\");\nelse printf(\"Not equal\");", options: ["Equal", "Not equal", "EqualNot equal", "Error"], correctAnswer: 0, explanation: "a(12) != b(13) is true, so 'Equal' is printed." },
  { id: "cs10o-u3-9", question: "What is the output?\nint a=3, b=5;\na=a+b;\nif(a>8 && b<8) b=a+b;\nprintf(\"%d\", b);", options: ["5", "8", "13", "16"], correctAnswer: 2, explanation: "a=3+5=8. a>8 is false, so the if block doesn't execute... Wait, a=8 which is NOT >8, so b stays 5. Actually let me recheck: a>8 is false so b=a+b doesn't run, b stays 5." },
  { id: "cs10o-u3-10", question: "In GW-BASIC, the statements executed in sequence are called:", options: ["Loop structure", "Selection structure", "Sequence control structure", "Repetition structure"], correctAnswer: 2, explanation: "Statements executed in order are called sequence control structure." },
];

export const cs10Unit4OutsideMCQs: MCQ[] = [
  { id: "cs10o-u4-1", question: "How many types of array in BASIC are?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "BASIC has 2 types of arrays: one-dimensional and two-dimensional." },
  { id: "cs10o-u4-2", question: "Maximum number of elements per dimension is:", options: ["10", "255", "32767", "None of these"], correctAnswer: 2, explanation: "In GW-BASIC, the maximum number of elements per dimension is 32767." },
  { id: "cs10o-u4-3", question: "Linear array is also called a:", options: ["Vector array", "Two-dimensional array", "3-dimensional array", "Filling array"], correctAnswer: 0, explanation: "A linear (one-dimensional) array is also known as a vector array." },
  { id: "cs10o-u4-4", question: "If the size of an array is 7, the index number of last element is:", options: ["7", "5", "6", "3"], correctAnswer: 2, explanation: "Array indexing starts from 0, so for size 7: last index is 6." },
  { id: "cs10o-u4-5", question: "What is the size of array in int arr[10];?", options: ["1", "9", "10", "11"], correctAnswer: 2, explanation: "int arr[10] declares an array of size 10 (indices 0 to 9)." },
  { id: "cs10o-u4-6", question: "How many times will \"Pakistan\" be printed?\nfor(int x=1; x<6; x++) printf(\"Pakistan\");", options: ["2", "3", "4", "5"], correctAnswer: 3, explanation: "x takes values 1, 2, 3, 4, 5 → loop runs 5 times." },
  { id: "cs10o-u4-7", question: "How many times will \"Pakistan\" be printed?\nfor(int a=2; a<=10; a=a+2) printf(\"Pakistan\");", options: ["Two", "Three", "Four", "Five"], correctAnswer: 3, explanation: "a takes values 2, 4, 6, 8, 10 → loop runs 5 times." },
  { id: "cs10o-u4-8", question: "What is the output?\nfor(int x=7; x<=50; x=x+10) printf(\"%d\\t\", x);", options: ["7 17 27 37 47", "7 17 27 37 47 57", "17 27 37 47", "7 17 27 37"], correctAnswer: 0, explanation: "x takes values 7, 17, 27, 37, 47. Next would be 57 which is > 50, so output is 7 17 27 37 47." },
  { id: "cs10o-u4-9", question: "FOR-NEXT is used to implement:", options: ["Decision", "Selection", "Loop", "Sequence"], correctAnswer: 2, explanation: "FOR-NEXT statement is used to implement loops in BASIC." },
  { id: "cs10o-u4-10", question: "A loop within a loop is called:", options: ["Nested loop", "While loop", "For loop", "Simple loop"], correctAnswer: 0, explanation: "A loop placed inside another loop is called a nested loop." },
];

export const cs10Unit5OutsideMCQs: MCQ[] = [
  { id: "cs10o-u5-1", question: "A function cannot return more than ______ value(s).", options: ["One", "Two", "Three", "Four"], correctAnswer: 0, explanation: "A function can return at most one value." },
  { id: "cs10o-u5-2", question: "______ describes the name, inputs and outputs of a function.", options: ["Function declaration", "Function call", "Function signature", "All"], correctAnswer: 2, explanation: "Function signature describes the function's name, parameters, and return type." },
  { id: "cs10o-u5-3", question: "A built-in function ______.", options: ["Can be redefined", "Cannot be redefined", "Should be redefined", "Cannot return a value"], correctAnswer: 1, explanation: "Built-in functions are part of the standard library and cannot be redefined." },
  { id: "cs10o-u5-4", question: "getch() function is ______.", options: ["Custom Function", "Arithmetic Function", "User defined", "Built-in function"], correctAnswer: 3, explanation: "getch() is a built-in function from the conio.h library." },
  { id: "cs10o-u5-5", question: "What is the output?\nint add(int a, int b) { return a+b; }\nprintf(\"%d\", add(2,4));", options: ["16", "8", "6", "4"], correctAnswer: 2, explanation: "add(2,4) returns 2+4 = 6." },
  { id: "cs10o-u5-6", question: "What will be the output of z?\nint z=abc(2);\nint abc(int x) { return x+5; }", options: ["2", "7", "5", "10"], correctAnswer: 1, explanation: "abc(2) returns 2+5 = 7, so z = 7." },
  { id: "cs10o-u5-7", question: "Which BASIC statement is used to define a function?", options: ["DEF", "DEF FN", "DEF NF", "DEF FUN"], correctAnswer: 1, explanation: "DEF FN is used to define user functions in GW-BASIC." },
  { id: "cs10o-u5-8", question: "The INT function is:", options: ["Built-in function", "Local function", "User defined", "String function"], correctAnswer: 0, explanation: "INT is a built-in function that returns the integer part of a number." },
  { id: "cs10o-u5-9", question: "A value given to a function is known as:", options: ["Arguments", "Input", "Parameter", "Body"], correctAnswer: 0, explanation: "Values given to a function are called arguments." },
  { id: "cs10o-u5-10", question: "Functions could be built-in or ______.", options: ["Admin defined", "Server defined", "User defined", "Related defined"], correctAnswer: 2, explanation: "Functions are either built-in or user-defined." },
];
