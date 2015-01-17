// http://www.teaching-materials.org/javascript/exercises/functions.html
// The Age Calculator
// Write a function name calculateAge that:
// 	takes two arguments
// 	calculates the two possible ages based on those years.
// 	outpust the results to the screen
// Call the function three times with different sets of values.

function calculateAge (birthYear, currentYear) {
	var ageCalculate = "They are either " + (currentYear - birthYear) + " or " + ((currentYear-1) - birthYear);
	console.log(ageCalculate);
}
calculateAge(1985, 2015);
calculateAge(1978, 2015);
calculateAge(1911, 2015);

// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var currentYear = new Date().getFullYear();
function calculateAge (birthYear) {
	var ageCalculate = "They are either " + (currentYear - birthYear) + " or " + ((currentYear-1) - birthYear);
	console.log(ageCalculate);
}
calculateAge(1985);
calculateAge(1978);
calculateAge(1911);