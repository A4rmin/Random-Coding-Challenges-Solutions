/*
JavaScript Classes: A Comprehensive Guide for TypeScript Developers
Core Concepts of JavaScript Classes
    1. Class Definition and Constructor
        Classes in JavaScript are templates for creating objects that encapsulate data and behavior.
        They were introduced in ES6 (ES2015) to provide a cleaner syntax for object-oriented 
        programming.
    2. Key Features:
        - Constructor: Initializes class instances
        - Properties: Data members of the class
        - Methods: Functions that define behavior
        - Inheritance: Ability to extend other classes
        - Access Modifiers: (TypeScript adds private, protected, public)

Let's solve a real-world problem: Social-Media platform:

*/

class book {
  constructor(id, title, author, year, isAvailable = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  // Method to display book details
  displayDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Year: ${this.year}`);
    console.log(`Available: ${this.isAvailable ? "Yes" : "No"}`);
    return `${this.id} - ${this.title} by ${this.author} (${this.year}) - ${
      this.isAvailable ? "Available" : "Not Available"
    }`;
  }
}

class library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.members = [];
  }
  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  removeBook(bookId) {
    const index = this.books.findIndex((b) => b.id === bookId);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Book "${removedBook.title}" removed from the library.`);
    } else {
      console.log(`Book with ID ${bookId} not found.`);
    }
  }
  // Method to add a member to the library
  addMember(memberId, memberName) {
    this.members.push({ id: memberId, name: memberName });
    console.log(`Member "${memberName}" added to the library.`);
  }
  // Method to remove a member from the library
  removeMember(memberId) {
    const index = this.members.findIndex((m) => m.id === memberId);
    if (index !== -1) {
      const removedMember = this.members.splice(index, 1)[0];
      console.log(`Member "${removedMember.name}" removed from the library.`);
    } else {
      console.log(`Member with ID ${memberId} not found.`);
    }
  }
  // Method to borrow a book
  borrowBook(bookId, memberId) {
    const book = this.books.find((b) => b.id === bookId);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      return {
        bookId: book.id,
        memberId: memberId,
        success: true,
        message: `Book "${book.title}" borrowed by member ${memberId}.`,
      };
    }
    return {
      success: false,
      message: `Book with ID ${bookId} is not available.`,
    };
  }
}
