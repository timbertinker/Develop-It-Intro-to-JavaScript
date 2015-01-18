// Exercises: if/else statements
// http://www.teaching-materials.org/javascript/exercises/ifelse.html

// What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum (num1, num2) {
	if (num1 > num2){
		console.log(num1);
	} else {
		console.log(num2);
	}
}
greaterNum(12, 24);
greaterNum(50, 8);