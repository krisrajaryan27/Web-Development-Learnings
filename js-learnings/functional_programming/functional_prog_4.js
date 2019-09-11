// 4. Functional Programming: Refactor Global Variables Out of Functions

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookName) {
  let bookLists = [...bookList];
  bookLists.push(bookName);
  return bookLists;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookLists,bookName) {
   if (bookLists.indexOf(bookName) >= 0) {
    return bookLists.slice(0, bookLists.indexOf(bookName)).concat(bookLists.slice(bookLists.indexOf(bookName)+1));
    // Add your code above this line
    }
}

var newBookList = add('A Brief History of Time');
var newerBookList = remove(bookList,'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add('A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
