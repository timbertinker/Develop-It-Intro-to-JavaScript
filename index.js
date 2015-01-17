// variables- store values
// 1) declaration - delclare the var
// 2) initialize

// Ex1) 
// delclare
// var x;
// initialize
// x = 5;
// console.log(x);

// Ex2)
// both delclares and initializes
// var y = 2;
// console.log(y);

// Data Types
// strings: an immutable string of characters.
// var greeting = 'Hello';
// var restaurant = "chipoltle";

// number: whole (6, -102) or floating point (5.467)
// var myAge = 25;
// var pi = 3.14;

// boolean: represents logical true or false
// var catsAreBest = false;
// var dogsRule = true;

// undefined: Represents a value that hasn't been defined.
// var notDefinedYet;

// null: represents ane empty value, purposely empty
// var goodJokes = null;

// variables have names, thats how you refer to them.
// console.log(x);

// Few 'rules'
// Only contain letters, numbers, $ and _
// Prefer camelCase for multiple Words (insead of under_score)
// variables CANNOT start with a number!

// Cool.
// var numPeople, $mainHeader, _num, _Num;

// Not Cool
// var 2coolForSchool;

// Reserved words.
// Certain words are reserved by the language and cannot be used by you.
// A full list can be found online.
// Ex) developer.mozilla.org

// Operators
// Allow you to manipulate variables, many are ones you already know. 
// Mathematical operators:
// + - * / =

// Ex)
// 2 + 2;
// x * 3;

// Variables can also store results of these expressions.

// Ex)
// var x = 2 + 2;
// console.log(x);

// Strings - concatination

// Ex)
// var name = "Emma";
// var greet = "Hello";
// console.log(greet + " " + name);

// JavaScript does not require a ';' at the end of statments, BUT it's a really good practice.

//Will return string because value can only store one type at a time.
// var y = 2 + ' cats';
// console.log(typeof y);

// Functions
// Re-usable chunks of code.
// Need to be defined befor they can be used.
// Then called

// Ex)
// function sayHello() {
// 	console.log('Hi Foti!');
// }
// sayHello();

// Ex2)
// returns undefined
// function chicken() {
// 	egg();
// }

// function egg() {
// 	chicken();
// }

// Arguments to Functions
// Arguments go into parenthesis of a function.
// Can have as many arguemnts as you want, but best to limit it to five per function at most.

// Ex)

// function sayHello(name) {
// 	console.log('Hi ' + name);
// }
// sayHello("Emma");


// How functions work
// Ex)

// function addNumbers(num1, num2) {
// 	var result = num1 + num2;
// 	return result; 
// 	// Anything after this line will not be executed.
// }
// var sum = addNumbers(5, 2);
// console.log(sum);

// You can use functions inside function calls.

// Scope
// // Think Inception
// JavaScript variables have "function scope."
// That means they are visible in the function where they're defined.
// You can see scopes above you, but not below you.

// a variable with "local" scope
// Ex)
// code here can not use carName

// function myFunction() {
//     var carName = "Volvo";

//     // code here can use carName

// }



// // Ex2) 
// // a variable with "global" scope
// var carName = " Volvo";

// // code here can use carName

// function myFunction() {

//     // code here can use carName 

// }

// Ex3) Automatically global
// // code here can use carName

// function myFunction() {
//     carName = "Volvo";

//     // code here can use carName

// }


// What is this?
// First, know that all function in JavaScript have properties. And when a funciton executes, it gets the 'this' property.
// The 'this ' is a variable with the value of the object that invokes the function where 'this ' is used.
// Gilbert = "This points to the object being created."

// If / Else statements - conditional statements
// Ex)
// if (true) {
// 	console.log('Is true.');
// }

// Ex2)
// var x = 2;
// if (x == 1) {
// 	console.log("Is true");
// } else {
// 	console.log("Is false");
// }

// Ex3)
// var x = 2;
// if (x == 2 && x > 0) {
// 	console.log("Is true");
// } else {
// 	console.log("Is false");
// }
// // Returns true

// Ex4)
// var x = 2;
// if (x == 2 && x < 0) {
// 	console.log("Is true");
// } else {
// 	console.log("Is false");
// }
// // Returns false

// Ex5)
// var x = 2;
// if (x == 2 || x < 0) {
// 	console.log("Is true");
// } else {
// 	console.log("Is false");
// }
// //Returns true

// Ex6)
// var x = 3;
// if (x == 2 || x < 0) {
// 	console.log("Is true");
// } else {
// 	console.log("Is false");
// }
// // Returns false

// Ex7)
// var myAge = 29;
// if ((myAge >= 0 && myAge < 3) || myAge > 90) {
// 	console.log("You're not quite in your peak.");
// } else {
// 	console.log("You're in your peak!");
// }
// // Returns "You're in your peak!"

// Short Circit Evaluation in logical operators
// JavaScript evaluates logical operators from left to right and stops evaluatin as soon as it know sthe answer.
//  Ex)
// (false && anything) => false
// (true || anything) => true

// Truthy vs Falsey

// If you don't use a comparison or logical operator, JavaScript tries to figure out if the value is "truthy".
// Best to explicity check for what you want.

// Ex)
// // Falsey example
// var name = "";
// if (name) {
// 	console.log('Hello,' + name);
// }


// Difference between '==' and '==='
// == does NOT check for type
// The equality operator == does type coercion, meaning that the interpreter implicitly tries to convert the values before comparing.
// === means that both operands refernce the same object
// === Checks for value and type.
// === does not do type coercion, and thus does not convert the values when comparing.

// The if/ else if / else statements
// var age = "";
// prompt("Input your age.")
// if (age < 0 || age < 18) {
// 	alert("not a valid age to use this site.");
// } else if (age >= 18){
// 	alert("Yay, you can drive and use this site!");
// } else {
// 	// this will never run, all eventualities are covered in first two conditionals
// 	alert("Please input a valid age")
// }

// Variable Hoisting
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// In JavaScript, a variable can be delcared after it has bene used.
// In other words, a variable can be used before it has been declared.
// JavaScript only hoists declarations, not initializations.

// Ex1)
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element 
// elem.innerHTML = x;                     // Display x in the element

// var x; // Declare x

// Ex2)
// var x; // Declare x
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element 
// elem.innerHTML = x;                     // Display x in the element

// While loops
// Be careful! If you cause an infinite loop you will crash your program/browser
// Like the infinite loop below
// var x = 0;
// while (x < 5) {
// 	console.log(x);
// 	x = x + 1;
// }

// For loops
for (initialize; condition; update) {
	// staement to repeat
}

for (var x = 0; x < 5; x = x + 1) {
	// staement to repeat
}