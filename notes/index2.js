// http://soitof.github.io/gdi-javascript/class2.html#/

// Review from Yesterday

// Variables

// Functions 

// Operators - 3 types

// Conditionals
// 	-If / Else If / Else

// Loops
// 	-While Loops
// 	-For Loops

// Arrays
//  // Ex) of For Loop with Array
// var topFoods = ['pizza', 'cake', 'soda'];
// for (var i = 0; i < topFoods.length; i++) {
// 	console.log("My #" + (i+1) + " top food choice is " + topFoods[i]);
// }

// Switch Statement
// Ex)
// switch (i+1) {
// 	case 1: // code
// 	case 2: // code
// 	case 3: // code
// 	default: // code
// }

// Ex2)
// // array, for loop with switch statement within
// var topFoods = ['pizza', 'cake', 'soda', 'tacos'];
// for (var i = 0; i < topFoods.length; i++) {
// 	var suffix;
// 	switch (i+1) {
// 		case 1: 
// 			suffix = 'st';
// 			break;
// 		case 2: 
// 			suffix = 'nd';
// 			break;
// 		case 3: 
// 			suffix = 'rd';
// 			break;
// 		default: 
// 			suffix = 'th';
// 	}
// 	console.log("My " + (i+1) + (suffix) + " top food choice is " + topFoods[i]);
// }

// Everything is an object in JavaScript
// Objects - are data types that let us store a collection of properites and methods.
// Example:
// var objectName = { 
//   propertyName: propertyValue,
//   propertyName: propertyValue,
//   ...
// };
// Ex)
// var aboutMe = {
// 	hometown: "the moon.",
// 	hair: "brown",
// 	age: 29,
// 	likes: ["catnip", "milk"],
// 	birthday: {month: 4, day: 16, year: 1985}
// };
// // call about me with dot nation
// // dot notation allows you to reach in an pull things stored in an object.
// console.log("My hair is " + aboutMe.hair + ".");
// console.log("I am from " + aboutMe.hometown + ".");
// console.log("I am " + aboutMe.age + " years old.");
// console.log(aboutMe.birthday);
// console.log("These are a few things I like: " + aboutMe.likes + ".");

// // Non-existent properties will return undefined.
// // Ex)
// var myGender = aboutMe["gender"];


// Changing Objects
// Use dot or bracket notation with the assignment operator to change objects.
// Change existing properties
// Add new propertiesa
// Ex)
// aboutMe.gender = "female";
// // Ex2)
// Delete propertiesa
// delete aboutMe.gender

// Arrays of Objects
// Since arrays can hold any data type they can hold any object.
// Just like other dtat types, objects can be passed into functions.

// Object properties can also be functions. Object functions are called "methods". 
// Call object methods using dot notation

// var lizzieTheCat = {
//   age: 18,
//   furColor: 'grey',
//   meow: function() {
//     console.log('Meeooooowww');
//   },
//   eat: function(food) {
//     console.log('Yum, I love ' + food);  
//   },
//   sleep: function(numMinutes) {
//     for (var i = 0; i < numMinutes; i++) {
//       console.log("I sleep this many minutes per day Zzzzzz");
//     }
//   }
// };
// lizzieTheCat.meow();
// lizzieTheCat.eat('kibble');
// lizzieTheCat.sleep(1080);

// Predefinde functions from the predefinded Math object...
// Math.round(x)
// math.random(x)


////////////////////
//////JSON//////////
////////////////////

// JSON - JavaScript Object Notation
// A lightweight format used for sending data.
// It's easy for humans to read and write.
// It's easy for machines to parse and generate.

// Ex)
// {
// 	"firstName": "Emma",
// 	"lastName": "Laroche",
// 	"age": 29,
// 	"favColor": "purple",
// 	"isAlive": true,
// 	"address": {
// 		"streetAddress": "1215 W. William Cannon Drive",
// 		"city": "Austin",
// 		"state": "TX"
// 	}
// 	"phoneNumbers": [
// 		{
// 		"type": "home",
// 		"number": 2812592554
// 		}
// 	]
// }

// The DOM - Document Object Model
// - A tree that allows us to access and change different objects in the Document in HTML, XML, ect.
// The Document is a built in object
// DOM access
// On every webpage, the document object gives us ways of accessing and changing the DOM.
// The document is a built in object
// Ex)
// var bodyNode = document.body;
// var htmlNode = document.body.parentNode;
// for (var i = 0; i < document.body.childNodes.length; i++) {
//   var childNode = document.body.childNodes[i];
// }

// The Dom is represented in memory as a tree
// html - head - meta, title (all about cats), style
// 	-body - h1 (CATS), img, p, ul

// JavaScript in HTML
// You can put javaScript inside a script tag commonly at the bottom of the page.
// Can also put JavaScript in an external file and reference it.

// Every Dom 'node' has properites that let us traverse the DOM.
// You can access and change the attributes of DOM nodes using dot notation.
// Ex)
// <img id="mainpicture" src="http://placekitten.com/200/300">
// var img = document.getElementById('mainpicture');
// var oldSrc = img.src;
img.src = 'http://placekitten.com/100/500';