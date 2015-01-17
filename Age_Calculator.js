// http://www.teaching-materials.org/javascript/exercises/variables.html
// The Age Calculator
// Store the currnt year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possilbe ages based on the stored values.
// Output them to the creen like so: "They are etiher NN or NN", substituting the values.
var currentYear = 2015;
var birthYear = 1985;
var ageCalculate = "They are either " + (currentYear - birthYear) + " or " + ((currentYear - 1) - birthYear);
console.log(ageCalculate);