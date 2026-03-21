// Book Class
class Book {

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
  }

  // Borrow book
  borrow() {
    this.isAvailable = false;
  }

  // Return book
  returnBook() {
    this.isAvailable = true;
  }

  // Get book information
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // Check if long book
  isLongBook() {
    return this.pages > 300;
  }
}


// Create 5 book objects
const book1 = new Book("Harry Potter", "J.K. Rowling", 320);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("The Alchemist", "Paulo Coelho", 208);
const book5 = new Book("Atomic Habits", "James Clear", 306);


// Store books in an array
const library = [book1, book2, book3, book4, book5];


// i. Display info of all books
console.log("=== All Books ===");

library.forEach(book => {
  console.log(book.getInfo(), "| Available:", book.isAvailable);
});


// ii. Borrow 2 books
console.log("\n=== Borrowing Books ===");

book1.borrow();
book3.borrow();

console.log(book1.title, "Available:", book1.isAvailable);
console.log(book3.title, "Available:", book3.isAvailable);


// iii. Return 1 book
console.log("\n=== Returning Book ===");

book1.returnBook();

console.log(book1.title, "Available:", book1.isAvailable);


// iv. Count long books (>300 pages)
console.log("\n=== Long Books Count ===");

let longBooks = library.filter(book => book.isLongBook());

console.log("Number of long books:", longBooks.length);


// v. List all available books
console.log("\n=== Available Books ===");

const availableBooks = library.filter(book => book.isAvailable);

availableBooks.forEach(book => {
  console.log(book.getInfo());
});