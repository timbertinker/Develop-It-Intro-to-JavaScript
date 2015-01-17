// http://www.teaching-materials.org/javascript/exercises/functions.html
// The Fortune Teller
// Write a function that takes 4 argumetns and outputs your function to the screen.
// Call that function three times with three different values fo the arguemtns.
function tellFortune (numChild, partnerName, geoLocate, jobTitle) {
	var future = "You will be a " + jobTitle + " in " + geoLocate + ", and married to " + partnerName + " with " + numChild + " kids.";
	console.log(future);
}

tellFortune(3, "Taylor Swift", "Seattle, Washington" , "WebDev");
tellFortune(3, "Gerry Butler", "Austin, Texas" , "Dolphin Trainer");
tellFortune(3, "Matt Damon", "Los Angeles, California" , "Underwater Basketweaver");