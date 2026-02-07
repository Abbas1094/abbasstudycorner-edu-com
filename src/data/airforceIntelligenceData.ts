// Air Force Intelligence Data - Same as Navy Intelligence for complete preparation
import { Chapter, MCQ } from "@/data/chemistryData";

export const airforceIntelligenceChapters: Chapter[] = [
  {
    id: "af-int-1",
    name: "Percentage & Profit/Loss",
    description: "Attendance, profit percentage calculations",
    icon: "📊",
    mcqs: [
      { id: 1, question: "In a class of 1500 students, 1200 are present. What is the percentage of present students?", options: ["75%", "80%", "85%", "90%"], correctAnswer: 1 },
      { id: 2, question: "A person purchases a pen for 30 rupees and sold it for 40 rupees. What is the profit percentage?", options: ["25%", "33.33%", "30%", "35%"], correctAnswer: 1 },
      { id: 3, question: "In a class of 500 students, 340 are present. What is the percentage of present students?", options: ["65%", "68%", "70%", "72%"], correctAnswer: 1 },
      { id: 4, question: "In a class of 500 students, 340 are present. What is the percentage of absent students?", options: ["30%", "32%", "34%", "36%"], correctAnswer: 1 },
      { id: 5, question: "90% of 90 is?", options: ["81", "72", "85", "90"], correctAnswer: 0 },
      { id: 6, question: "If you buy something and sell it at triple the price, your profit percentage is?", options: ["100%", "150%", "200%", "300%"], correctAnswer: 2 },
      { id: 7, question: "3 dozen eggs cost PKR 288 and you sold them for 360. Your profit percentage?", options: ["20%", "25%", "30%", "35%"], correctAnswer: 1 },
      { id: 8, question: "Total weight of 5 boxes of soap is 75 kg. Empty 1 box weighs 5 kg. What is the weight of total soap?", options: ["45 kg", "50 kg", "55 kg", "60 kg"], correctAnswer: 1 },
      { id: 9, question: "A shopkeeper buys goods for Rs. 100 and sells for Rs. 120. Profit percentage?", options: ["15%", "20%", "25%", "30%"], correctAnswer: 1 },
      { id: 10, question: "If 40% of a number is 80, find the number.", options: ["180", "200", "220", "240"], correctAnswer: 1 },
      { id: 11, question: "A student scores 450 out of 600. What is the percentage?", options: ["70%", "72%", "75%", "78%"], correctAnswer: 2 },
      { id: 12, question: "Loss of 20% on selling price of Rs. 400 means cost price was?", options: ["480", "500", "520", "450"], correctAnswer: 1 },
      { id: 13, question: "25% of 400 is?", options: ["80", "90", "100", "110"], correctAnswer: 2 },
      { id: 14, question: "A man earns Rs. 5000 and saves Rs. 1000. Savings percentage?", options: ["15%", "20%", "25%", "30%"], correctAnswer: 1 },
      { id: 15, question: "If price increases from 50 to 60, percentage increase?", options: ["15%", "20%", "25%", "30%"], correctAnswer: 1 },
      { id: 16, question: "60% of 150 equals?", options: ["80", "85", "90", "95"], correctAnswer: 2 },
      { id: 17, question: "Cost price Rs. 80, Selling price Rs. 100. Profit %?", options: ["20%", "25%", "30%", "35%"], correctAnswer: 1 },
      { id: 18, question: "In exam 65% passed. If 455 passed, total students?", options: ["650", "700", "750", "800"], correctAnswer: 1 },
      { id: 19, question: "A discount of 10% on Rs. 500 gives price?", options: ["400", "425", "450", "475"], correctAnswer: 2 },
      { id: 20, question: "If 30% of X = 45, then X = ?", options: ["120", "135", "150", "165"], correctAnswer: 2 },
      { id: 21, question: "Profit of Rs. 50 on cost of Rs. 200. Profit %?", options: ["20%", "25%", "30%", "35%"], correctAnswer: 1 },
      { id: 22, question: "75% of 200 is?", options: ["140", "145", "150", "155"], correctAnswer: 2 },
      { id: 23, question: "Loss 15% on SP Rs. 170. CP was?", options: ["180", "190", "200", "210"], correctAnswer: 2 },
      { id: 24, question: "What % of 50 is 10?", options: ["15%", "20%", "25%", "30%"], correctAnswer: 1 },
      { id: 25, question: "A bag costs Rs. 400 after 20% discount. Original price?", options: ["450", "480", "500", "520"], correctAnswer: 2 }
    ]
  },
  {
    id: "af-int-2",
    name: "Direction Sense",
    description: "North, South, East, West movement problems",
    icon: "🧭",
    mcqs: [
      { id: 1, question: "A person moves toward north, after sometime south and back, then turns left. His present direction?", options: ["East", "West", "North", "South"], correctAnswer: 1 },
      { id: 2, question: "A person walks 10 miles north, turns left, then right. His present direction?", options: ["East", "West", "North", "South"], correctAnswer: 2 },
      { id: 3, question: "A man moves toward north, turns left, then again turns left. His present direction?", options: ["East", "West", "North", "South"], correctAnswer: 3 },
      { id: 4, question: "Facing sunrise, turn right twice. Which direction you face?", options: ["East", "West", "North", "South"], correctAnswer: 0 },
      { id: 5, question: "A man walks 5 km south, turns left, walks 3 km. Direction from start?", options: ["South-East", "South-West", "North-East", "North-West"], correctAnswer: 0 },
      { id: 6, question: "Facing north, turn right. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 0 },
      { id: 7, question: "Start north, turn 180°. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 3 },
      { id: 8, question: "A person walks 10 m north, turns left walks 10 m, turns left walks 5 m, turns left walks 15 m. Distance from start?", options: ["5 m", "10 m", "15 m", "20 m"], correctAnswer: 0 },
      { id: 9, question: "Face south, turn left twice. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 3 },
      { id: 10, question: "Walk east 10 m, turn right, walk 5 m. Direction from start?", options: ["South-East", "South-West", "North-East", "North-West"], correctAnswer: 0 },
      { id: 11, question: "Facing west, rotate 270° clockwise. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 2 },
      { id: 12, question: "North, right turn, left turn. Final direction?", options: ["East", "West", "North", "South"], correctAnswer: 2 },
      { id: 13, question: "South, turn right, turn right. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 2 },
      { id: 14, question: "West, left turn, left turn. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 0 },
      { id: 15, question: "North, rotate 90° anti-clockwise. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 1 },
      { id: 16, question: "East, turn back. Now facing?", options: ["East", "West", "North", "South"], correctAnswer: 1 },
      { id: 17, question: "Walk 15 m east, turn left, walk 15 m. Position from start?", options: ["15 m North-East", "15√2 m North-East", "30 m North-East", "20 m North-East"], correctAnswer: 1 },
      { id: 18, question: "Face sunset, turn left. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 3 },
      { id: 19, question: "Face sunrise, turn right. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 3 },
      { id: 20, question: "South, turn left, turn left, turn left. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 1 },
      { id: 21, question: "Walk 20 m west, then 20 m north. Distance from start?", options: ["20 m", "20√2 m", "40 m", "30 m"], correctAnswer: 1 },
      { id: 22, question: "Facing north, turn 360°. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 2 },
      { id: 23, question: "East, rotate 45° clockwise. Now facing?", options: ["South-East", "South-West", "North-East", "North-West"], correctAnswer: 0 },
      { id: 24, question: "North, three right turns. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 1 },
      { id: 25, question: "South, rotate 180°, turn left. Direction?", options: ["East", "West", "North", "South"], correctAnswer: 0 }
    ]
  },
  {
    id: "af-int-3",
    name: "Blood Relations",
    description: "Family relationship puzzles",
    icon: "👨‍👩‍👧‍👦",
    mcqs: [
      { id: 1, question: "Sister of my brother is your mother. What is the relation between I and you?", options: ["Father", "Uncle", "Nephew", "Niece"], correctAnswer: 1 },
      { id: 2, question: "A is B's son but C is not A's son. C is A's daughter. What is C to B?", options: ["Son", "Daughter", "Granddaughter", "Grandson"], correctAnswer: 2 },
      { id: 3, question: "If A is mother of B and B is sister of C, what is A to C?", options: ["Mother", "Aunt", "Sister", "Grandmother"], correctAnswer: 0 },
      { id: 4, question: "Pointing to a man, a woman said 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Mother", "Daughter", "Sister", "Grandmother"], correctAnswer: 0 },
      { id: 5, question: "B is father of C. But C is not his son. What is C to B?", options: ["Nephew", "Daughter", "Niece", "Grandson"], correctAnswer: 1 },
      { id: 6, question: "A's father is B's son. How is A related to B?", options: ["Son", "Grandson", "Granddaughter", "Grandson or Granddaughter"], correctAnswer: 3 },
      { id: 7, question: "If X is brother of Y and Y is mother of Z, what is X to Z?", options: ["Father", "Uncle", "Grandfather", "Brother"], correctAnswer: 1 },
      { id: 8, question: "Pointing to a photo, he said 'She is my mother's mother.' What relation is the person in photo?", options: ["Mother", "Sister", "Grandmother", "Aunt"], correctAnswer: 2 },
      { id: 9, question: "Son of my grandfather's only son is my?", options: ["Brother", "Cousin", "Self or Brother", "Uncle"], correctAnswer: 2 },
      { id: 10, question: "A is father of B, but B is not A's son. B is A's?", options: ["Nephew", "Niece", "Daughter", "Grandson"], correctAnswer: 2 },
      { id: 11, question: "My mother's brother's son is my?", options: ["Brother", "Cousin", "Nephew", "Uncle"], correctAnswer: 1 },
      { id: 12, question: "Father of my father is my?", options: ["Uncle", "Brother", "Grandfather", "Nephew"], correctAnswer: 2 },
      { id: 13, question: "Daughter of my grandmother is my?", options: ["Sister", "Mother or Aunt", "Cousin", "Niece"], correctAnswer: 1 },
      { id: 14, question: "Brother of my mother is my?", options: ["Father", "Uncle", "Brother", "Nephew"], correctAnswer: 1 },
      { id: 15, question: "Sister of my father is my?", options: ["Mother", "Sister", "Aunt", "Cousin"], correctAnswer: 2 },
      { id: 16, question: "Son of my brother is my?", options: ["Son", "Nephew", "Cousin", "Brother"], correctAnswer: 1 },
      { id: 17, question: "Daughter of my sister is my?", options: ["Niece", "Daughter", "Cousin", "Sister"], correctAnswer: 0 },
      { id: 18, question: "Wife of my uncle is my?", options: ["Aunt", "Mother", "Sister", "Cousin"], correctAnswer: 0 },
      { id: 19, question: "Husband of my aunt is my?", options: ["Father", "Uncle", "Brother", "Grandfather"], correctAnswer: 1 },
      { id: 20, question: "Son of my mother's sister is my?", options: ["Brother", "Cousin", "Nephew", "Uncle"], correctAnswer: 1 },
      { id: 21, question: "Daughter of my father's brother is my?", options: ["Sister", "Cousin", "Niece", "Aunt"], correctAnswer: 1 },
      { id: 22, question: "Mother of my mother is my?", options: ["Aunt", "Grandmother", "Sister", "Mother"], correctAnswer: 1 },
      { id: 23, question: "Father of my wife is my?", options: ["Uncle", "Father", "Father-in-law", "Brother"], correctAnswer: 2 },
      { id: 24, question: "Brother of my wife is my?", options: ["Brother", "Brother-in-law", "Cousin", "Uncle"], correctAnswer: 1 },
      { id: 25, question: "Children of my uncle are my?", options: ["Brothers", "Cousins", "Nephews", "Nieces"], correctAnswer: 1 }
    ]
  },
  {
    id: "af-int-4",
    name: "Odd One Out",
    description: "Find the different item in the group",
    icon: "🔍",
    mcqs: [
      { id: 1, question: "Find odd one: Monkey, Baboon, Ape, Chimpanzee, Panda", options: ["Monkey", "Baboon", "Chimpanzee", "Panda"], correctAnswer: 3 },
      { id: 2, question: "Find odd one: Pencil, Scale, Rubber, Line", options: ["Pencil", "Scale", "Rubber", "Line"], correctAnswer: 3 },
      { id: 3, question: "Find odd one: Lahore, Karachi, Islamabad, Faisalabad", options: ["Lahore", "Karachi", "Islamabad", "Faisalabad"], correctAnswer: 2 },
      { id: 4, question: "Find odd one: Uncle, Father, Mother, Sister", options: ["Uncle", "Father", "Mother", "Sister"], correctAnswer: 0 },
      { id: 5, question: "Find odd one: Apple, Orange, Potato, Banana", options: ["Apple", "Orange", "Potato", "Banana"], correctAnswer: 2 },
      { id: 6, question: "Find odd one: Square, Triangle, Circle, Cube", options: ["Square", "Triangle", "Circle", "Cube"], correctAnswer: 3 },
      { id: 7, question: "Find odd one: January, March, April, June", options: ["January", "March", "April", "June"], correctAnswer: 1 },
      { id: 8, question: "Find odd one: Dog, Cat, Cow, Eagle", options: ["Dog", "Cat", "Cow", "Eagle"], correctAnswer: 3 },
      { id: 9, question: "Find odd one: Red, Blue, Green, Sweet", options: ["Red", "Blue", "Green", "Sweet"], correctAnswer: 3 },
      { id: 10, question: "Find odd one: Surgeon, Teacher, Engineer, Hospital", options: ["Surgeon", "Teacher", "Engineer", "Hospital"], correctAnswer: 3 },
      { id: 11, question: "Find odd one: Table, Chair, Cupboard, Plywood", options: ["Table", "Chair", "Cupboard", "Plywood"], correctAnswer: 3 },
      { id: 12, question: "Find odd one: Rose, Jasmine, Marigold, Mango", options: ["Rose", "Jasmine", "Marigold", "Mango"], correctAnswer: 3 },
      { id: 13, question: "Find odd one: Cricket, Football, Hockey, Chess", options: ["Cricket", "Football", "Hockey", "Chess"], correctAnswer: 3 },
      { id: 14, question: "Find odd one: Wheat, Rice, Mustard, Corn", options: ["Wheat", "Rice", "Mustard", "Corn"], correctAnswer: 2 },
      { id: 15, question: "Find odd one: Book, Pen, Pencil, Chair", options: ["Book", "Pen", "Pencil", "Chair"], correctAnswer: 3 },
      { id: 16, question: "Find odd one: Shirt, Trouser, Coat, Watch", options: ["Shirt", "Trouser", "Coat", "Watch"], correctAnswer: 3 },
      { id: 17, question: "Find odd one: Mercury, Venus, Moon, Mars", options: ["Mercury", "Venus", "Moon", "Mars"], correctAnswer: 2 },
      { id: 18, question: "Find odd one: Iron, Copper, Gold, Wood", options: ["Iron", "Copper", "Gold", "Wood"], correctAnswer: 3 },
      { id: 19, question: "Find odd one: Nose, Ear, Eye, Leg", options: ["Nose", "Ear", "Eye", "Leg"], correctAnswer: 3 },
      { id: 20, question: "Find odd one: Inch, Foot, Yard, Kilogram", options: ["Inch", "Foot", "Yard", "Kilogram"], correctAnswer: 3 },
      { id: 21, question: "Find odd one: 3, 5, 7, 9", options: ["3", "5", "7", "9"], correctAnswer: 3 },
      { id: 22, question: "Find odd one: Niece, Nephew, Cousin, Neighbour", options: ["Niece", "Nephew", "Cousin", "Neighbour"], correctAnswer: 3 },
      { id: 23, question: "Find odd one: Piano, Guitar, Violin, Song", options: ["Piano", "Guitar", "Violin", "Song"], correctAnswer: 3 },
      { id: 24, question: "Find odd one: Milk, Cheese, Butter, Bread", options: ["Milk", "Cheese", "Butter", "Bread"], correctAnswer: 3 },
      { id: 25, question: "Find odd one: Happy, Sad, Angry, Running", options: ["Happy", "Sad", "Angry", "Running"], correctAnswer: 3 }
    ]
  },
  {
    id: "af-int-5",
    name: "Number Series",
    description: "Find the pattern and next number",
    icon: "🔢",
    mcqs: [
      { id: 1, question: "43, 53, 63, ?", options: ["70", "73", "75", "83"], correctAnswer: 1 },
      { id: 2, question: "1, 3, 7, 13, ?", options: ["19", "21", "23", "25"], correctAnswer: 1 },
      { id: 3, question: "2, 5, 11, 23, ?", options: ["35", "41", "47", "53"], correctAnswer: 2 },
      { id: 4, question: "1, 4, 9, 16, ?", options: ["20", "23", "25", "27"], correctAnswer: 2 },
      { id: 5, question: "2, 6, 12, 20, ?", options: ["28", "30", "32", "36"], correctAnswer: 1 },
      { id: 6, question: "3, 6, 9, 12, ?", options: ["14", "15", "16", "18"], correctAnswer: 1 },
      { id: 7, question: "1, 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "14"], correctAnswer: 2 },
      { id: 8, question: "5, 10, 20, 40, ?", options: ["60", "70", "80", "100"], correctAnswer: 2 },
      { id: 9, question: "100, 95, 90, 85, ?", options: ["75", "78", "80", "82"], correctAnswer: 2 },
      { id: 10, question: "2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], correctAnswer: 1 },
      { id: 11, question: "1, 8, 27, 64, ?", options: ["100", "125", "150", "175"], correctAnswer: 1 },
      { id: 12, question: "7, 14, 21, 28, ?", options: ["32", "35", "38", "42"], correctAnswer: 1 },
      { id: 13, question: "2, 4, 8, 16, ?", options: ["24", "28", "32", "36"], correctAnswer: 2 },
      { id: 14, question: "11, 22, 33, 44, ?", options: ["50", "55", "60", "66"], correctAnswer: 1 },
      { id: 15, question: "1, 2, 4, 7, 11, ?", options: ["14", "15", "16", "17"], correctAnswer: 2 },
      { id: 16, question: "3, 9, 27, 81, ?", options: ["162", "216", "243", "324"], correctAnswer: 2 },
      { id: 17, question: "5, 25, 125, 625, ?", options: ["1250", "2500", "3125", "5000"], correctAnswer: 2 },
      { id: 18, question: "10, 20, 30, 40, ?", options: ["45", "50", "55", "60"], correctAnswer: 1 },
      { id: 19, question: "1, 3, 6, 10, ?", options: ["13", "14", "15", "16"], correctAnswer: 2 },
      { id: 20, question: "4, 8, 12, 16, ?", options: ["18", "20", "22", "24"], correctAnswer: 1 },
      { id: 21, question: "50, 45, 40, 35, ?", options: ["25", "28", "30", "32"], correctAnswer: 2 },
      { id: 22, question: "6, 12, 24, 48, ?", options: ["72", "84", "96", "108"], correctAnswer: 2 },
      { id: 23, question: "0, 1, 1, 2, 3, 5, ?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
      { id: 24, question: "15, 30, 45, 60, ?", options: ["70", "75", "80", "90"], correctAnswer: 1 },
      { id: 25, question: "1, 5, 9, 13, ?", options: ["15", "17", "19", "21"], correctAnswer: 1 }
    ]
  },
  {
    id: "af-int-6",
    name: "Alphabet Series",
    description: "Letter patterns and sequences",
    icon: "🔤",
    mcqs: [
      { id: 1, question: "ABZ, CDY, EFX, ?", options: ["GHV", "GHW", "GIW", "HIW"], correctAnswer: 1 },
      { id: 2, question: "A, C, E, G, ?", options: ["H", "I", "J", "K"], correctAnswer: 1 },
      { id: 3, question: "Z, X, V, T, ?", options: ["Q", "R", "S", "P"], correctAnswer: 1 },
      { id: 4, question: "AB, DE, GH, ?", options: ["IJ", "JK", "KL", "LM"], correctAnswer: 1 },
      { id: 5, question: "AZ, BY, CX, ?", options: ["DV", "DW", "EW", "EV"], correctAnswer: 1 },
      { id: 6, question: "ACE, BDF, CEG, ?", options: ["DEF", "DFH", "EFG", "EGI"], correctAnswer: 1 },
      { id: 7, question: "B, D, F, H, ?", options: ["I", "J", "K", "L"], correctAnswer: 1 },
      { id: 8, question: "A, D, G, J, ?", options: ["K", "L", "M", "N"], correctAnswer: 2 },
      { id: 9, question: "ZA, YB, XC, ?", options: ["VD", "WD", "WE", "VE"], correctAnswer: 1 },
      { id: 10, question: "ABC, DEF, GHI, ?", options: ["IJK", "JKL", "KLM", "LMN"], correctAnswer: 1 },
      { id: 11, question: "Z, W, T, Q, ?", options: ["M", "N", "O", "P"], correctAnswer: 1 },
      { id: 12, question: "AE, BF, CG, ?", options: ["DG", "DH", "EH", "EI"], correctAnswer: 1 },
      { id: 13, question: "AA, BB, CC, ?", options: ["DD", "EE", "DE", "CD"], correctAnswer: 0 },
      { id: 14, question: "AZ, CX, EV, ?", options: ["FT", "GT", "GU", "HT"], correctAnswer: 1 },
      { id: 15, question: "M, N, O, P, ?", options: ["Q", "R", "S", "T"], correctAnswer: 0 },
      { id: 16, question: "ZY, XW, VU, ?", options: ["SR", "TS", "TU", "ST"], correctAnswer: 1 },
      { id: 17, question: "BD, CE, DF, ?", options: ["EF", "EG", "FG", "FH"], correctAnswer: 1 },
      { id: 18, question: "A, E, I, M, ?", options: ["O", "P", "Q", "R"], correctAnswer: 2 },
      { id: 19, question: "XYZ, UVW, RST, ?", options: ["NOP", "OPQ", "PQR", "MNO"], correctAnswer: 1 },
      { id: 20, question: "AC, BD, CE, ?", options: ["DE", "DF", "EF", "EG"], correctAnswer: 1 },
      { id: 21, question: "K, M, O, Q, ?", options: ["R", "S", "T", "U"], correctAnswer: 1 },
      { id: 22, question: "ZZ, YY, XX, ?", options: ["VV", "WW", "UV", "XY"], correctAnswer: 1 },
      { id: 23, question: "ABC, BCD, CDE, ?", options: ["DEF", "EFG", "FGH", "DFG"], correctAnswer: 0 },
      { id: 24, question: "P, R, T, V, ?", options: ["W", "X", "Y", "Z"], correctAnswer: 1 },
      { id: 25, question: "JK, LM, NO, ?", options: ["OP", "PQ", "QR", "RS"], correctAnswer: 1 }
    ]
  },
  {
    id: "af-int-7",
    name: "Speed, Time & Distance",
    description: "Motion and travel problems",
    icon: "🚂",
    mcqs: [
      { id: 1, question: "If train speed is double that of a car and car travels 30 km in one hour, how much distance will train cover in 30 minutes?", options: ["20 km", "25 km", "30 km", "35 km"], correctAnswer: 2 },
      { id: 2, question: "A train moving at 90 km/h, how much distance will it cover in 12 minutes?", options: ["15 km", "18 km", "20 km", "22 km"], correctAnswer: 1 },
      { id: 3, question: "A man covers 20 km in 1 hour 40 minutes. How much time to cover 1 km?", options: ["4 min", "5 min", "6 min", "8 min"], correctAnswer: 1 },
      { id: 4, question: "Speed = 60 km/h, Time = 2 hours. Distance?", options: ["100 km", "110 km", "120 km", "130 km"], correctAnswer: 2 },
      { id: 5, question: "Distance 150 km, Time 3 hours. Speed?", options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"], correctAnswer: 2 },
      { id: 6, question: "A car covers 200 km in 4 hours. Speed?", options: ["45 km/h", "50 km/h", "55 km/h", "60 km/h"], correctAnswer: 1 },
      { id: 7, question: "Speed 80 km/h, Distance 240 km. Time?", options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"], correctAnswer: 2 },
      { id: 8, question: "A train covers 450 km in 5 hours. Speed?", options: ["85 km/h", "90 km/h", "95 km/h", "100 km/h"], correctAnswer: 1 },
      { id: 9, question: "Speed 40 km/h for 2.5 hours. Distance?", options: ["80 km", "90 km", "100 km", "110 km"], correctAnswer: 2 },
      { id: 10, question: "Distance 180 km, Speed 60 km/h. Time?", options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"], correctAnswer: 2 },
      { id: 11, question: "A cyclist covers 15 km in 45 min. Speed in km/h?", options: ["15 km/h", "18 km/h", "20 km/h", "22 km/h"], correctAnswer: 2 },
      { id: 12, question: "Train A: 60 km/h, Train B: 40 km/h. Relative speed when moving in opposite direction?", options: ["20 km/h", "50 km/h", "100 km/h", "120 km/h"], correctAnswer: 2 },
      { id: 13, question: "A man walks 5 km/h. Distance in 48 minutes?", options: ["3 km", "4 km", "5 km", "6 km"], correctAnswer: 1 },
      { id: 14, question: "Car A covers 120 km in 2 hours. Car B in 3 hours. Speed ratio?", options: ["2:3", "3:2", "1:2", "2:1"], correctAnswer: 1 },
      { id: 15, question: "A bus travels at 50 km/h. Time for 175 km?", options: ["3 h", "3.5 h", "4 h", "4.5 h"], correctAnswer: 1 },
      { id: 16, question: "Speed 72 km/h in m/s?", options: ["15 m/s", "18 m/s", "20 m/s", "25 m/s"], correctAnswer: 2 },
      { id: 17, question: "20 m/s in km/h?", options: ["60 km/h", "68 km/h", "72 km/h", "75 km/h"], correctAnswer: 2 },
      { id: 18, question: "Half journey at 40 km/h, half at 60 km/h. Average speed?", options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"], correctAnswer: 1 },
      { id: 19, question: "A train 200 m long, speed 36 km/h. Time to cross a pole?", options: ["15 sec", "18 sec", "20 sec", "25 sec"], correctAnswer: 2 },
      { id: 20, question: "Distance 500 m, Time 50 sec. Speed in m/s?", options: ["8 m/s", "10 m/s", "12 m/s", "15 m/s"], correctAnswer: 1 },
      { id: 21, question: "A person walks 6 km in 1 hour. Distance in 20 minutes?", options: ["1 km", "2 km", "3 km", "4 km"], correctAnswer: 1 },
      { id: 22, question: "Train covers 400 km in 5 hours. Time for 640 km at same speed?", options: ["6 hours", "7 hours", "8 hours", "9 hours"], correctAnswer: 2 },
      { id: 23, question: "Speed 45 km/h. Distance in 40 minutes?", options: ["25 km", "28 km", "30 km", "32 km"], correctAnswer: 2 },
      { id: 24, question: "A car doubles its speed. Time reduces by?", options: ["25%", "50%", "75%", "100%"], correctAnswer: 1 },
      { id: 25, question: "Two cities 600 km apart. Train at 100 km/h. Time?", options: ["5 hours", "6 hours", "7 hours", "8 hours"], correctAnswer: 1 }
    ]
  },
  {
    id: "af-int-8",
    name: "Coding & Decoding",
    description: "Letter/number substitution puzzles",
    icon: "🔐",
    mcqs: [
      { id: 1, question: "If APPLE is coded as ELPPA, then ORANGE is coded as?", options: ["EGNARO", "ORANGE", "NAGERO", "RANOGE"], correctAnswer: 0 },
      { id: 2, question: "If CAT = 24, DOG = 26, then BAT = ?", options: ["20", "21", "22", "23"], correctAnswer: 3 },
      { id: 3, question: "If A=1, B=2, C=3... then FACE = ?", options: ["14", "15", "16", "17"], correctAnswer: 1 },
      { id: 4, question: "If MIND is coded as OKPF, then BRAIN is coded as?", options: ["DTCKP", "DTCKO", "DTCKQ", "CTCKP"], correctAnswer: 0 },
      { id: 5, question: "If 5 × 3 = 16, 7 × 4 = 29, then 9 × 5 = ?", options: ["44", "45", "46", "47"], correctAnswer: 2 },
      { id: 6, question: "If COMPUTER is PMOCREUT, then SCIENCE is?", options: ["CSNEICE", "ECNEICS", "CNEICES", "ICSECNE"], correctAnswer: 1 },
      { id: 7, question: "If RED = 27, then GREEN = ?", options: ["45", "49", "51", "57"], correctAnswer: 1 },
      { id: 8, question: "If WATER is written as XBUFS, then FIRE is?", options: ["GJSF", "GJRF", "FHQD", "EHQD"], correctAnswer: 0 },
      { id: 9, question: "If 2 + 3 = 13, 3 + 4 = 25, then 4 + 5 = ?", options: ["35", "37", "39", "41"], correctAnswer: 3 },
      { id: 10, question: "If PEN = 35, then BOOK = ?", options: ["30", "32", "34", "36"], correctAnswer: 2 },
      { id: 11, question: "If DELHI is coded as 73541, then HIDE is?", options: ["4137", "5. 473", "4173", "1473"], correctAnswer: 2 },
      { id: 12, question: "If SUN = 54, then MOON = ?", options: ["55", "57", "59", "61"], correctAnswer: 1 },
      { id: 13, question: "If CAR = 24, then BUS = ?", options: ["40", "42", "44", "46"], correctAnswer: 1 },
      { id: 14, question: "If TEA is coded as VGC, then COFFEE is?", options: ["EQHHGG", "EQIIFF", "EQHHII", "EQGGEE"], correctAnswer: 0 },
      { id: 15, question: "If 1234 = 4321, then 5678 = ?", options: ["7856", "8567", "8765", "6785"], correctAnswer: 2 },
      { id: 16, question: "If ROSE is TQUG, then LILY is?", options: ["NKNA", "NKNZ", "NJNZ", "MKNZ"], correctAnswer: 0 },
      { id: 17, question: "If KING is 11957, then QUEEN is?", options: ["17215514", "172155", "1721514", "17251514"], correctAnswer: 0 },
      { id: 18, question: "If BLACK = 29, then WHITE = ?", options: ["58", "60", "62", "65"], correctAnswer: 2 },
      { id: 19, question: "If 3 * 4 = 19, 5 * 6 = 41, then 7 * 8 = ?", options: ["65", "67", "71", "73"], correctAnswer: 2 },
      { id: 20, question: "If DAY = 30, then NIGHT = ?", options: ["52", "56", "58", "60"], correctAnswer: 1 },
      { id: 21, question: "If EAT = 26, then FOOD = ?", options: ["38", "40", "42", "44"], correctAnswer: 1 },
      { id: 22, question: "If MANGO coded as 13114715, then GRAPE = ?", options: ["716185", "71641615", "7161615", "716165"], correctAnswer: 0 },
      { id: 23, question: "If HOUSE is GNTVD, then MOUSE is?", options: ["LNTRD", "LNTVD", "LNTVE", "LNTUD"], correctAnswer: 1 },
      { id: 24, question: "If 6 @ 3 = 9, 8 @ 4 = 12, then 10 @ 5 = ?", options: ["13", "14", "15", "16"], correctAnswer: 2 },
      { id: 25, question: "If LAMP = 43, then BULB = ?", options: ["29", "31", "33", "35"], correctAnswer: 1 }
    ]
  },
  {
    id: "af-int-9",
    name: "Analogy & Relationships",
    description: "Word relationships and comparisons",
    icon: "🔗",
    mcqs: [
      { id: 1, question: "Research is to Scholars as Search is to?", options: ["Police", "Book", "Detective", "Library"], correctAnswer: 1 },
      { id: 2, question: "Oven is to Heat as Refrigerator is to?", options: ["Cold", "Ice", "Cool", "Freeze"], correctAnswer: 2 },
      { id: 3, question: "Doctor is to Patient as Teacher is to?", options: ["School", "Student", "Book", "Class"], correctAnswer: 1 },
      { id: 4, question: "Bird is to Fly as Fish is to?", options: ["Water", "Swim", "Sea", "Fins"], correctAnswer: 1 },
      { id: 5, question: "Pen is to Write as Knife is to?", options: ["Sharp", "Cut", "Steel", "Kitchen"], correctAnswer: 1 },
      { id: 6, question: "Eye is to See as Ear is to?", options: ["Sound", "Hear", "Listen", "Music"], correctAnswer: 1 },
      { id: 7, question: "Book is to Read as Food is to?", options: ["Cook", "Eat", "Hunger", "Kitchen"], correctAnswer: 1 },
      { id: 8, question: "Mango is to Fruit as Potato is to?", options: ["Vegetable", "Root", "Farm", "Plant"], correctAnswer: 0 },
      { id: 9, question: "Lion is to Den as Bee is to?", options: ["Honey", "Flower", "Hive", "Buzz"], correctAnswer: 2 },
      { id: 10, question: "Clock is to Time as Thermometer is to?", options: ["Heat", "Weather", "Temperature", "Mercury"], correctAnswer: 2 },
      { id: 11, question: "Key is to Lock as Switch is to?", options: ["Light", "Electricity", "Power", "Fan"], correctAnswer: 0 },
      { id: 12, question: "Painter is to Brush as Writer is to?", options: ["Book", "Pen", "Paper", "Story"], correctAnswer: 1 },
      { id: 13, question: "Car is to Road as Ship is to?", options: ["Water", "Sea", "Port", "Sail"], correctAnswer: 1 },
      { id: 14, question: "Cow is to Calf as Goat is to?", options: ["Lamb", "Kid", "Pup", "Foal"], correctAnswer: 1 },
      { id: 15, question: "Tree is to Forest as House is to?", options: ["City", "Colony", "Building", "Street"], correctAnswer: 1 },
      { id: 16, question: "Foot is to Shoe as Hand is to?", options: ["Ring", "Glove", "Watch", "Finger"], correctAnswer: 1 },
      { id: 17, question: "Moon is to Night as Sun is to?", options: ["Light", "Day", "Heat", "Sky"], correctAnswer: 1 },
      { id: 18, question: "Water is to Thirst as Food is to?", options: ["Eat", "Hunger", "Stomach", "Cook"], correctAnswer: 1 },
      { id: 19, question: "Actor is to Stage as Player is to?", options: ["Game", "Field", "Team", "Sports"], correctAnswer: 1 },
      { id: 20, question: "Author is to Book as Poet is to?", options: ["Poem", "Rhyme", "Literature", "Verse"], correctAnswer: 0 },
      { id: 21, question: "Leather is to Shoe as Cloth is to?", options: ["Tailor", "Shirt", "Cotton", "Wear"], correctAnswer: 1 },
      { id: 22, question: "Ice is to Solid as Water is to?", options: ["Liquid", "Cold", "Drink", "Flow"], correctAnswer: 0 },
      { id: 23, question: "Japan is to Yen as India is to?", options: ["Dollar", "Rupee", "Pound", "Euro"], correctAnswer: 1 },
      { id: 24, question: "Nose is to Smell as Tongue is to?", options: ["Eat", "Taste", "Speak", "Saliva"], correctAnswer: 1 },
      { id: 25, question: "King is to Kingdom as Captain is to?", options: ["Ship", "Team", "Army", "Sea"], correctAnswer: 1 }
    ]
  },
  {
    id: "af-int-10",
    name: "Age Problems",
    description: "Age calculations and comparisons",
    icon: "🎂",
    mcqs: [
      { id: 1, question: "A is older than B, B is older than C, C is older than D. Who is the oldest?", options: ["A", "B", "C", "D"], correctAnswer: 0 },
      { id: 2, question: "Father is 30 years older than son. After 5 years, father will be 3 times son's age. Son's present age?", options: ["10 years", "12 years", "15 years", "18 years"], correctAnswer: 0 },
      { id: 3, question: "Sum of ages of A and B is 50. A is 10 years older. A's age?", options: ["25", "28", "30", "32"], correctAnswer: 2 },
      { id: 4, question: "5 years ago, X was 3 times Y. X is 35 now. Y's present age?", options: ["12", "15", "18", "20"], correctAnswer: 1 },
      { id: 5, question: "Ratio of ages 3:5. Sum is 40. Elder's age?", options: ["20", "22", "24", "25"], correctAnswer: 3 },
      { id: 6, question: "Mother is 25 years older than daughter. After 10 years, she will be twice daughter's age. Daughter's age now?", options: ["12", "15", "18", "20"], correctAnswer: 1 },
      { id: 7, question: "A is twice B's age. 10 years ago A was 3 times B. A's present age?", options: ["30", "35", "40", "45"], correctAnswer: 2 },
      { id: 8, question: "Present ages ratio 4:3. After 6 years ratio 5:4. Present age of elder?", options: ["20", "24", "28", "32"], correctAnswer: 1 },
      { id: 9, question: "X is 5 years older than Y. Sum of ages 35. X's age?", options: ["18", "20", "22", "25"], correctAnswer: 1 },
      { id: 10, question: "Father was 38 when son was born. After how many years will father be twice son's age?", options: ["30", "35", "38", "40"], correctAnswer: 2 },
      { id: 11, question: "Average age of 5 people is 30. One leaves, average becomes 28. Age of person who left?", options: ["36", "38", "40", "42"], correctAnswer: 1 },
      { id: 12, question: "A is 2 years older than B, B is 3 years older than C. A is 20. C's age?", options: ["13", "15", "17", "19"], correctAnswer: 1 },
      { id: 13, question: "Grandfather is 6 times grandson's age. After 4 years he'll be 5 times. Grandson's age?", options: ["3", "4", "5", "6"], correctAnswer: 1 },
      { id: 14, question: "3 years ago, age ratio was 2:3. Now it's 3:4. Present ages sum?", options: ["28", "35", "42", "49"], correctAnswer: 2 },
      { id: 15, question: "A man is 4 times his son's age. In 20 years he'll be twice. Son's age?", options: ["8", "10", "12", "15"], correctAnswer: 1 },
      { id: 16, question: "Sum of ages of 3 friends is 51. Ratio 2:3:4. Eldest age?", options: ["17", "18", "20", "22"], correctAnswer: 0 },
      { id: 17, question: "Father is thrice son's age. 12 years later he'll be twice. Father's age?", options: ["30", "36", "42", "48"], correctAnswer: 1 },
      { id: 18, question: "5 years hence, age ratio 7:6. Difference is 5. Present ages?", options: ["30, 25", "35, 30", "25, 20", "40, 35"], correctAnswer: 1 },
      { id: 19, question: "A's age after 15 years will be 5 times his age 5 years back. Present age?", options: ["8", "10", "12", "15"], correctAnswer: 1 },
      { id: 20, question: "Father-son age ratio 7:2. Father is 35 years older. Son's age?", options: ["12", "14", "16", "18"], correctAnswer: 1 },
      { id: 21, question: "In 10 years A will be twice of B's present age. A is 5 years older. A's age?", options: ["20", "25", "30", "35"], correctAnswer: 1 },
      { id: 22, question: "8 years ago, father was 4 times son's age. He's now 3 times. Father's age?", options: ["36", "40", "44", "48"], correctAnswer: 2 },
      { id: 23, question: "Ratio of ages 5:7. After 3 years it's 2:3. Present ages?", options: ["10, 14", "15, 21", "20, 28", "25, 35"], correctAnswer: 1 },
      { id: 24, question: "A is younger than B by 7 years. Ratio 7:9. A's age?", options: ["21", "24.5", "28", "31.5"], correctAnswer: 1 },
      { id: 25, question: "Father is 40 years old. Son is 10. After how many years father is twice son's age?", options: ["15", "18", "20", "22"], correctAnswer: 2 }
    ]
  },
  {
    id: "af-int-11",
    name: "Non-Verbal Patterns",
    description: "50 SVG pattern questions (clean, no checkmarks)",
    icon: "🔷",
    mcqs: [] // MCQs rendered via NonVerbalQuiz using SVG patterns
  }
];

// Air Force Intelligence Experience MCQs
export const airforceIntelligenceExperienceMCQs: MCQ[] = [
  { id: 1, question: "In a class of 1500 students, 1200 are present. What is the percentage of present students?", options: ["75%", "80%", "85%", "90%"], correctAnswer: 1, isExperienceBased: true },
  { id: 2, question: "A person purchases a pen for 30 rupees and sold it for 40. What is the profit percentage?", options: ["25%", "33.33%", "30%", "35%"], correctAnswer: 1, isExperienceBased: true },
  { id: 3, question: "In a class of 500 students, 340 are present. Percentage of present students?", options: ["65%", "68%", "70%", "72%"], correctAnswer: 1, isExperienceBased: true },
  { id: 4, question: "In a class of 500 students, 340 are present. Percentage of absent students?", options: ["30%", "32%", "34%", "36%"], correctAnswer: 1, isExperienceBased: true },
  { id: 5, question: "Sister of my brother is your mother. What is the relation between I and you?", options: ["Father", "Uncle", "Nephew", "Niece"], correctAnswer: 1, isExperienceBased: true },
  { id: 6, question: "Odd one out: Monkey, Baboon, Ape, Chimpanzee, Panda", options: ["Monkey", "Baboon", "Chimpanzee", "Panda"], correctAnswer: 3, isExperienceBased: true },
  { id: 7, question: "90% of 90 equals?", options: ["81", "72", "85", "90"], correctAnswer: 0, isExperienceBased: true },
  { id: 8, question: "A person moves north, then south and back, turns left. His direction?", options: ["East", "West", "North", "South"], correctAnswer: 1, isExperienceBased: true },
  { id: 9, question: "A person walks 10 miles north, turns left then right. His direction?", options: ["East", "West", "North", "South"], correctAnswer: 2, isExperienceBased: true },
  { id: 10, question: "A man moves north, turns left, turns left again. His direction?", options: ["East", "West", "North", "South"], correctAnswer: 3, isExperienceBased: true },
  { id: 11, question: "Train speed is double that of car. Car travels 30km in 1 hour. Distance train covers in 30 minutes?", options: ["20 km", "25 km", "30 km", "35 km"], correctAnswer: 2, isExperienceBased: true },
  { id: 12, question: "Train moving at 90 km/h. Distance covered in 12 minutes?", options: ["15 km", "18 km", "20 km", "22 km"], correctAnswer: 1, isExperienceBased: true },
  { id: 13, question: "A man covers 20 km in 1 hour 40 minutes. Time to cover 1 km?", options: ["4 min", "5 min", "6 min", "8 min"], correctAnswer: 1, isExperienceBased: true },
  { id: 14, question: "43, 53, 63, ?", options: ["70", "73", "75", "83"], correctAnswer: 1, isExperienceBased: true },
  { id: 15, question: "Total weight of 5 soap boxes is 75 kg. Empty box is 5 kg. Weight of total soap?", options: ["45 kg", "50 kg", "55 kg", "60 kg"], correctAnswer: 1, isExperienceBased: true },
  { id: 16, question: "Odd one out: Pencil, Scale, Rubber, Line", options: ["Pencil", "Scale", "Rubber", "Line"], correctAnswer: 3, isExperienceBased: true },
  { id: 17, question: "A is B's son but C is not A's son. C is A's daughter. C to B?", options: ["Son", "Daughter", "Granddaughter", "Grandson"], correctAnswer: 2, isExperienceBased: true },
  { id: 18, question: "Research is to Scholars as Search is to?", options: ["Police", "Book", "Detective", "Library"], correctAnswer: 1, isExperienceBased: true },
  { id: 19, question: "Buy and sell at triple price. Profit percentage?", options: ["100%", "150%", "200%", "300%"], correctAnswer: 2, isExperienceBased: true },
  { id: 20, question: "3 dozen eggs for 288, sold for 360. Profit percentage?", options: ["20%", "25%", "30%", "35%"], correctAnswer: 1, isExperienceBased: true },
  { id: 21, question: "1, 3, 7, 13, ?", options: ["19", "21", "23", "25"], correctAnswer: 1, isExperienceBased: true },
  { id: 22, question: "Odd one out: Uncle, Father, Mother, Sister", options: ["Uncle", "Father", "Mother", "Sister"], correctAnswer: 0, isExperienceBased: true },
  { id: 23, question: "2, 5, 11, 23, ?", options: ["35", "41", "47", "53"], correctAnswer: 2, isExperienceBased: true },
  { id: 24, question: "Complete: ABZ, CDY, ?", options: ["EFW", "EFX", "EGX", "FGX"], correctAnswer: 1, isExperienceBased: true },
  { id: 25, question: "Oven is to Heat as Refrigerator is to?", options: ["Cold", "Ice", "Cool", "Freeze"], correctAnswer: 2, isExperienceBased: true },
  { id: 26, question: "A is older than B, B older than C, C older than D. The oldest?", options: ["A", "B", "C", "D"], correctAnswer: 0, isExperienceBased: true },
  { id: 27, question: "If APPLE is coded as ELPPA, then ORANGE is coded as?", options: ["EGNARO", "ORANGE", "NAGERO", "RANOGE"], correctAnswer: 0, isExperienceBased: true },
  { id: 28, question: "Doctor is to Patient as Teacher is to?", options: ["School", "Student", "Book", "Class"], correctAnswer: 1, isExperienceBased: true },
  { id: 29, question: "Find odd one: Apple, Orange, Potato, Banana", options: ["Apple", "Orange", "Potato", "Banana"], correctAnswer: 2, isExperienceBased: true },
  { id: 30, question: "Speed = 60 km/h, Time = 2 hours. Distance?", options: ["100 km", "110 km", "120 km", "130 km"], correctAnswer: 2, isExperienceBased: true }
];

// Non-Verbal Pattern MCQs - Visual/Pictorial Questions (50 Questions from PDF)
export const nonVerbalPatternMCQs: MCQ[] = [
  // Page 1: Analogy - circle in grid to filled becomes ? in circle divided
  { id: 1, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_1.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "The pattern inverts: empty circle in quadrant becomes filled black square" },
  // Page 2: Triangle with shapes analogy
  { id: 2, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_2.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Shape transformation with fill pattern maintained" },
  // Page 3: Four shapes analogy with cross and circle patterns
  { id: 3, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_3.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 3, explanation: "Cross and dotted circle pattern transformation" },
  // Page 4: Arrow direction patterns
  { id: 4, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_4.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 3, explanation: "Arrow direction follows alternating pattern" },
  // Page 5: Dots with triangle analogy
  { id: 5, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_5.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Triangle inverts with corresponding dot pattern" },
  // Page 6: Nested squares with arrows
  { id: 6, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_6.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 2, explanation: "Arrow rotation pattern in nested squares" },
  // Page 7: Grid with stripe patterns
  { id: 7, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_7.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Stripe pattern follows inversion rule" },
  // Page 8: Matrix completion - shapes with lines
  { id: 8, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_8.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 3, explanation: "X pattern with curved lines follows sequence" },
  // Page 9: Matrix - flower/cross patterns
  { id: 9, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_9.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 2, explanation: "Flower pattern rotates and transforms" },
  // Page 10: Matrix - oval with lines
  { id: 10, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_10.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 0, explanation: "Line position rotates clockwise in each row" },
  // Page 11: Matrix - shapes with 1/2 fractions
  { id: 11, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_11.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 2, explanation: "Shape transforms across columns maintaining fraction" },
  // Page 12: Matrix - ovals with dots
  { id: 12, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_12.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 3, explanation: "Dot moves and shape transforms progressively" },
  // Page 13: Matrix - triangle patterns
  { id: 13, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_13.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 1, explanation: "Triangle orientation follows row pattern" },
  // Page 14: Matrix - curves and flowers
  { id: 14, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_14.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 0, explanation: "Petal and curve pattern sequence" },
  // Page 15: Matrix - complex patterns
  { id: 15, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_15.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 0, explanation: "Combined shape pattern follows rule" },
  // Page 16: Matrix - crossed lines with arrows
  { id: 16, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_16.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 2, explanation: "Arrow cross pattern with line transformation" },
  // Page 17: Matrix - circles with lines
  { id: 17, question: "Matrix Completion: Find the missing pattern", questionImage: "/nonverbal/page_17.jpg", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correctAnswer: 0, explanation: "Circle with extending lines pattern" },
  // Page 18: Analogy with plus signs in circle
  { id: 18, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_18.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 3, explanation: "Plus signs in divided circle follow transformation" },
  // Page 19: Pie chart analogy
  { id: 19, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_19.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 3, explanation: "Pie slice position and shading pattern" },
  // Page 20: Triangle with circle analogy
  { id: 20, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_20.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 3, explanation: "Circle position relative to triangle" },
  // Page 21: H-shape analogy
  { id: 21, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_21.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "H-shape with shading pattern" },
  // Page 22: Rectangle blocks analogy
  { id: 22, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_22.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Block shading position transformation" },
  // Page 23: Step pattern analogy
  { id: 23, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_23.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 2, explanation: "Step pattern with circle position" },
  // Page 24: Face-like circles analogy
  { id: 24, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_24.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 2, explanation: "Circle arrangement follows pattern" },
  // Page 25: Quarter circle pattern analogy
  { id: 25, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_25.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Quarter circle with internal patterns" },
  // Page 26: 3D shape analogy
  { id: 26, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_26.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 3, explanation: "3D shape transformation pattern" },
  // Page 27: Oval with dots analogy
  { id: 27, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_27.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Dot arrangement in oval follows pattern" },
  // Page 28: Square with dots analogy
  { id: 28, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_28.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Filled dot pattern transformation" },
  // Page 29: Triangle with nodes analogy
  { id: 29, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_29.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 2, explanation: "Node coloring pattern on shapes" },
  // Page 30: Pentagon analogy
  { id: 30, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_30.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 2, explanation: "Shape expansion with diamond" },
  // Page 31: Circle with spiral analogy
  { id: 31, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_31.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Spiral transforms to target pattern" },
  // Page 32: Mixed symbols analogy
  { id: 32, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_32.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 1, explanation: "Symbol sequence transformation" },
  // Page 33: Oval chain analogy
  { id: 33, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_33.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Oval chain shape transformation" },
  // Page 34: Brick pattern completion
  { id: 34, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_34.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 3, explanation: "Brick pattern alignment" },
  // Page 35-50: Additional pattern questions
  { id: 35, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_35.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Grid pattern follows sequence" },
  { id: 36, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_36.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Shape arrangement pattern" },
  { id: 37, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_37.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Complex grid pattern" },
  { id: 38, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_38.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Shape transformation sequence" },
  { id: 39, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_39.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Geometric pattern" },
  { id: 40, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_40.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Visual pattern completion" },
  { id: 41, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_41.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Shape matching pattern" },
  { id: 42, question: "Pattern Completion: Find the missing piece", questionImage: "/nonverbal/page_42.jpg", options: ["Option a", "Option b", "Option c", "Option d"], correctAnswer: 0, explanation: "Grid completion pattern" },
  { id: 43, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_43.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Shape analogy pattern" },
  { id: 44, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_44.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Complex symbol pattern" },
  { id: 45, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_45.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Multi-shape analogy" },
  { id: 46, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_46.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Triangle transformation" },
  { id: 47, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_47.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Shape series pattern" },
  { id: 48, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_48.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Cross symbol pattern" },
  { id: 49, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_49.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Final analogy pattern" },
  { id: 50, question: "Non-Verbal Analogy: Study the pattern and select the correct option", questionImage: "/nonverbal/page_50.jpg", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: 0, explanation: "Letter code pattern" }
];
