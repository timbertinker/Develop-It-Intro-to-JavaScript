// The Reading List
// http://www.teaching-materials.org/javascript/exercises/objects.html
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'



var book1 = {
	title: "Pride and Prejudice",
	author: "Jane Austen",
	alreadyRead: true
}
var book2 = {
	title: "Lord of the Rings",
	author: "J.R.R. Tolkien",
	alreadyRead: true
}
var book3 = {
	title: "Dandelion Wine",
	author: "Ray Bradbury",
	alreadyRead: false
}
var books = [book1, book2, book3];
function bookInfo(book) {
	console.log("The book " + book.title + " by, " + book.author); 
}
for (var i = 0; i < books.length; i++) {
	console.log(bookInfo(books[i]));
}