//how do i start???
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const bookForm = document.querySelector('#add-book-form');
const bookList = document.querySelector('#book-list');

console.log('text goes here');

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('submit form');
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author');
  const isbn = document.querySelector('#isbn');
});

// Book Class: Represents a Book

// UI Class Handle UI Tasks
// Vanish alert in 3 seconds

// Store Class: Handles Storage

// Event: Display Books

// Event: Add a book
// Get form values
// Validate form values
// show alert if values empty -- from UI class
// Instantiate a book
// Add Book to UI -- from UI class
// Add book to store -- from Store class
// Show success message -- from UI class
// Clear fields -- from UI class

// Event Remove a Book
// Remove book from UI -- from UI class
// Remove book from store -- from Store class
// Show success message -- from UI class
