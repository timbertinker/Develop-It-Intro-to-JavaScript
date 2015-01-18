// The Movie Database
// http://www.teaching-materials.org/javascript/exercises/objects.html

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
	title: "Pride and Prejudice",
	duration: 135,
	stars: ['Keira Knightley', 'Matthew Macfadyen', 'Brenda Blethyn', 'Donald Sutherland']
}

function movieInfo(movie){
	var info = "";
	info = movie.title + " lasts for " + movie.duration + " mins and stars ";
	for (var i=0; i < movie.stars.length; i++) {
		info = info + movie.stars[i] + " ";
	}
	return info;
}

console.log(movieInfo(favMovie));