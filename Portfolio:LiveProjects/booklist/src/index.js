// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const storedBooks = [
  { title: 'Promise Land', author: 'Obama', isbn: '1234' },
  { title: 'Untamed', author: 'Glennon Doyle', isbn: '4567' },
  { title: 'One More Chance', author: 'Ali Vali', isbn: '8901' },
];

// UI Class Handle UI Tasks
// Vanish alert in 3 seconds
class UI {
  //add stored books to the list
  static displayBooks() {
    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    `;

    list.appendChild(row);
  }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
// Get form values
// Validate form values
// show alert if values empty -- from UI class
// Instantiate a book
// Add Book to UI -- from UI class
// Add book to store -- from Store class
// Show success message -- from UI class
// Clear fields -- from UI class
document.querySelector('#add-book-form').addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('submit form');
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author');
  const isbn = document.querySelector('#isbn');
});

// Event Remove a Book
// Remove book from UI -- from UI class
// Remove book from store -- from Store class
// Show success message -- from UI class
