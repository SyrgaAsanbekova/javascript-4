// FINDING REMAINDER
var remainder;
remainder = 11 % 3;
// console.log(remainder);


// AUGUMENTED MATH OPERATIONS
var a = 3;
var b = 17;
var c = 12;

a += 12; //short plus equals
b -= 9; //short minus equals
c /= 6; //short times equals
c *= 9; //short divided by equal
// console.log(a, b, c);


// DECLARE STRING VARIABLES
var myFirstName = "Celine";
var myLastName = "Han";


// ESCAPING LITERAL QUOTES
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myStr);
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; //QUOTING STRINGS WITH SINGLE QUOTES
// console.log(myStr);


// ESCAPE SEQUENCES
/* 
CODE OUTPUT
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed
*/
var myStr = "FirstLine\n\t\SecondLine\nThirdLine";
// console.log(myStr);


// PLUS OPERATOR
var ourStr = "I come first. " + "\nI come second.";
// console.log(ourStr);
var myStr = "This is the start. " + "This is the middle.";
// console.log(myStr);
ourStr += "\nI come third.";
// console.log(ourStr);
myStr += "\tThis is the end.";
// console.log(myStr);


// CONSTRUCTING STRINGS WITH VARIABLES
var ourName = "IT Academy Karakol";
// var newStr = prompt("Hello, our name is " + ourName + " , how are you?");

var myName = "Celine Han";
var myString = "My name is " + myName + " and I am cool!";
// console.log(myString);

// APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr = "IT Academy is ";
ourStr += anAdjective;
// console.log(ourStr); 


// LENGTH OF A STRING
var lastNameLength = 0;
var lastName = "Asanbekova";
lastNameLength = lastName.length;
// console.log(lastNameLength);


// FIND THE NTH CHARACTER
var lastName = "Asanbekova";
var lastLetterOfLastName = lastName[lastName.length - 5];
// console.log(lastLetterOfLastName);
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
// console.log(secondToLastLetterOfLastName);


// WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + myAdverb;
  return result;
}
// console.log(wordBlanks("dog", "big", "run", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));


// ARRAYs
var ourArray = ["Celine", 17];
// console.log(ourArray);
var myArray = [["Jennie", 26], ["Lucas", 23]]; //Nest Arrays
// console.log(myArray);
var ourArray = [50, 60, 70];
var ourData = ourArray[2]; //Access Array Data
// console.log(ourData); 
ourArray[1] = 43; //Modify Array Data 
// console.log(ourArray);
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray[2][1]; //Access Multi-Dimensional Arrays: first - array, then - index in it
// console.log(myData);
var myBiasList = ["V", "J-Hope", "Han", "Lucas", "Park Chan"];
myBiasList.unshift("GD"); //adds to the begin
// console.log(myBiasList);
myBiasList.push("Seonghwa", "Irene", "Lia", ["Nancy", "Kris"]); //adds to the end of list
// console.log(myBiasList);
myBiasList.pop(); //deletes last index "Nancy", "Kris" after it was added above
// console.log(myBiasList);
myBiasList.shift(); //deletes first index "GD" after it was added above
// console.log(myBiasList);
var shoppingList = [["cereal", 3], ["milk", 2], ["bananas", 4], ["orange", 1], ["eggs", 10]];


// WRITE REUSABLE WITH FUNCTIONS
function ourReusableFunction() {
  console.log("Hello, World"); //the message in the function
}
ourReusableFunction(); //function is just called, we can do it any time
function greeting() {
  // alert("Welcome, bestie!");
}
greeting();
function request() {
  confirm("Please enjoy and leave review! Do you permit notifications?");
}
// request();

// ARGUMENTS
function args(a, b) {
  console.log(a - b);
}
// args(4, 9);


// GLOBAL SCOPES
var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// fun1();
// fun2();

// LOCAL SCOPE
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
// myLocalScope(); //outputs 5, that's myVar
// console.log(myVar); //not working, refferenceError, isn't defined

// GLOBAL vs. LOCAL SCOPE IN FUNCTIONS
// if gl. and loc. have same names the LOCAL takes president over the global variable
var outerWear = "T-Shirt"; //global, bc it's declared outside of the function
function myOutfit() {
  var outerWear = "Sweater"; //local, it's declared inside the function
  return outerWear;
}
// console.log(myOutfit()); //here we console the local variable
// console.log(outerWear); //here we console the global variable

// RETURN A VALUE FROM A FUNCTION
function minusSeven(num) {
  return num - 7;
}
// console.log(minusSeven(12));
function timesFive(num) {
  return num * 5;
}
// console.log(timesFive(2));

// UNDEFINED VALUE RETURNED
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// console.log(addThree(2)); //UNDEFINED
function addFive() {
  sum += 5;
}
// console.log(addFive(2)); //UNDEFINED

// ASSIGNMENT WITH THE RETURNED VALUE
var changed = 0;

function change(num) {
  return (num + 5) / 3; 
}
// changed = change(10);
// console.log(changed);


// STAND IN LINE
function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}
var testArr =[1,2,3,4,5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// AND / OR OPERATORS
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) { // && - "and" operator
    return "Yeah";
  }
  return "No";
}
// console.log(testLogicalAnd(30));
function testLogicalOr(val) {
  if (val < 10 || val > 20) { // || - "or" operator
    return "Outside";
  }
  return "Inside";
}
// console.log(testLogicalOr(16));


// GOLF CODE
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go HOME!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } 
}
// console.log(golfScore(3, 2));


// SWITCH STATEMENTS 
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1: // it is like "if" operator
      answer = "alpha";
      break;
    case 2:
      answer = "betta";  
      break;
    case 3:
      answer = "gamma";  
      break;
    case 4:
      answer = "delta";  
      break;        
  }
  return answer;
}
// console.log(caseInSwitch(4));

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";  
      break;
    case "b":
      answer = "bisquites";  
      break; 
    case "c":
      answer = "cinnamon";  
      break;     
    default: //it is like "else" operator
      answer = "stuff";
      break;  
 }
  return answer;
}
// console.log(switchOfStuff("g"));

function sequentalSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;  
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;   
    case 7:
    case 8:
    case 9:
      answer = "High";
      break; 
  }
  return answer;
}
// console.log(sequentalSizes(10));


/*let sum = 0;

while (true) {
  let value = +prompt("number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Summa: ' + sum ); */

// OBJECTS
var testObj = {
  12: "Math",
  16: "Korean",
  19: "IELTS"
};
var playerNumber = 16;
var player = testObj[playerNumber];
// console.log(player);

var myDog = {
  "name": "Haenbeok",
  "dog owner": "me",
  "legs": 4,
  "friends": ["everyone"]
};
// here we're adding new properties to object "myDog"; here's two variants
myDog['bark'] = "woof!";
myDog.bark = "bow-wow";
// console.log(myDog.bark);
delete myDog.tails; // here we deleted "tails" property
// console.log(myDog.tails);

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
};
// console.log(phoneticLookup("delta"));

