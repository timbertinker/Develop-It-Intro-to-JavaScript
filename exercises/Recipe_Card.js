// The Recipe Card
// http://www.teaching-materials.org/javascript/exercises/objects.html
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favRecipe = {
	title: "Breakfast Tacos",
	servings: 6,
	ingredients: ["eggs", "cheese", "butter", "tortillas"]
}
console.log(favRecipe.title);
console.log("Serves: " + favRecipe.servings)
console.log("Ingredients: ");
console.log(favRecipe.ingredients[0]);
console.log(favRecipe.ingredients[1]);
console.log(favRecipe.ingredients[2]);
console.log(favRecipe.ingredients[3]);