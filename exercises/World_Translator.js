// Exercises: if/else statements
// http://www.teaching-materials.org/javascript/exercises/ifelse.html
// The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(language) {
	if (language == 'English'){
		console.log("Hello World");
	} else if (language == 'Spanish') {
		console.log("Hola mundo!");
	} else if (language == 'French') {
		console.log("Bonjour le monde!");
	} else {
		console.log("I am not programmed to speak that language.")
	}		
}
console.log(helloWorld('Spanish'));
console.log(helloWorld('Chinese'));
console.log(helloWorld('English'));
console.log(helloWorld('French'));
