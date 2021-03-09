//how do i start???
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// const title = document.querySelector('#title').value;
// const author = document.querySelector('#author');
// const isbn = document.querySelector('#isbn');
const bookForm = document.querySelector('#add-book-form');
const bookList = document.querySelector('#book-list');

console.log('text goes here');

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('submit form');
  const title = document.querySelector('#title').value;
  console.log(title);
});
