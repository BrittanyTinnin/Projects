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

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#add-book-form');
    container.insertBefore(div, form);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#add-book-form').addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('submit form');
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate form values
  if ((title === '') | (author === '') | (isbn === '')) {
    // show alert if values empty -- from UI class
    UI.showAlert('Please fill in all fields.', 'danger');
  } else {
    // Instantiate a book
    const book = new Book(title, author, isbn);

    // Add Book to UI -- from UI class
    UI.addBookToList(book);

    // Add book to store -- from Store class
    // UI.addBookToStore(book);

    // Show success message -- from UI class
    UI.showAlert('Book added successfully', 'success');

    // Clear fields -- from UI class
    UI.clearFields();
  }
});

// Event Remove a Book
// Remove book from UI -- from UI class
// Remove book from store -- from Store class
// Show success message -- from UI class
