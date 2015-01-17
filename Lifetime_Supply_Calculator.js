// http://www.teaching-materials.org/javascript/exercises/variables.html
// They Lifetime Supply Calculator
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X."
var currentAge = 29;
var maxAge = 113;
var snack = 5;
var eatSnackForLife = ((maxAge - currentAge) * snack);
var lifetimeSupply = "You will need " + eatSnackForLife + " snacks to last you until the ripe old age of" + maxAge;
console.log(lifetimeSupply);