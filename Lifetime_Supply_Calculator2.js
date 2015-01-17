// http://www.teaching-materials.org/javascript/exercises/functions.html
// The Lifetime Supply Calculator
// Write a funciton named calculateSupply
// 	It takes 2 arguments
// 	calculates the amount consumed for the rest of your life
// 	outputs results to the screen
// Call that funciton three times, passing in three different values.

function calculateSupply (maxAge, snackAmount){
	var eatSnackForLife = (maxAge * snackAmount);
	var lifetimeSupply = "You will need " + eatSnackForLife + " snacks to last you until the ripe old age of " + maxAge;
	console.log(lifetimeSupply);
}
calculateSupply(113, 5);
calculateSupply(92, 10);
calculateSupply(200, 2);
