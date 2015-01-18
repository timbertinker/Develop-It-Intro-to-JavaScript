// http://www.teaching-materials.org/javascript/exercises/ifelse.html
// The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade (num) {
	if ( num == "A") {
		console.log("You made an 'A'. Go to the head of the class!");
	} else if (num == "B") {
		console.log("You made a 'B'. You gave it your all. Great Job!");
	} else if (num == 'C') {
		console.log("Passing with a 'C', needs improvment.");
	} else if (num == 'D') {
		console.log("You mad a 'D', which is not passing.");
	} else if (num == 'F') {
		console.log("You failed this class with an 'F'.");
	} else {
		console.log("That is not a grade.");
	}
}
assignGrade('A');
assignGrade('B');
assignGrade('C');
assignGrade('D');
assignGrade('F');
assignGrade('Emma');