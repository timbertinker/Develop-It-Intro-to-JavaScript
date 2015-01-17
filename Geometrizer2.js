// http://www.teaching-materials.org/javascript/exercises/functions.html
// The Geometreizer
// Create 2 functions that calculate properties of a circle.
// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcCircumfrence(radius){
	var diameter = radius * 2;
	var pi = 3.14159265358979323846;
	var circumference = diameter * pi
	console.log("The circumference is " + circumference);
}
function calcArea(radius){
	var pi = 3.14159265358979323846;
	var area = (pi * (radius * radius));
	console.log ("The area is " + area + " .");
}
calcCircumfrence(10);
calcArea(10);