// variables- store values
// 1) declaration - delclare the var
// 2) initialize

// Ex1) 
// delclaire
// var x;
// initialize
// x = 5;
// console.log(x);

// Ex2)
// both delclaires and initializes
// var y = 2;
// console.log(y);

// Data Types
// strings: an immutable string of characters.
// var greeting = 'Hello';
// var resturant = "chipoltle";

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
// Certain words are reserved byt he language and cannot be used by you.
// A full list can be found online.
// Ex) developer.mozilla.org

// Operators
// Allow you to manipulate variables, many are ones you already know. 
// Mathematical operators:
// + - * / =

// Ex)
// 2 + 2;
// x * 3;

// Variables can slo store results of these expressions.

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
// First, know that all function in JavaScript have properties. And whena f unciton executes, it gets the 'this' property.
// The 'this ' is a variable with the value of the object that invokes the function where 'this ' is used.
// Gilbert = "This points to the object being created."
