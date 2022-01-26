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
  // confirm("Please enjoy and leave review! Do you permit notifications?");
}
request();


// ARGUMENTS
function args(a, b) {
  console.log(a - b);
}
args(4, 9);