// http://www.teaching-materials.org/javascript/exercises/functions.html
// The Temperature Converter
// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFarenheit(celsius) {
	var findFahrenheit = (celsius * 9) / 5 + 32
console.log(celsius + " degrees Celsius is " + findFahrenheit + " degrees Fahrenheit.");
}
celsiusToFarenheit(0);
celsiusToFarenheit(100);

function fahrenheitToCelsius(fahrenheit) {
	var findCelsius = (fahrenheit - 32) * 5 / 9
console.log(fahrenheit + " degrees Fahrenheit is " + findCelsius + " degrees Celsius");
}
fahrenheitToCelsius(32);
fahrenheitToCelsius(212);
