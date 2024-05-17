import React from "react";
import "./Book.css";
const Book = ({ books, title, handleDelete, handleEditClick }) => {
  return (
    <div className="bookContainer">
      <h1 className="bookTitle">{title}</h1>
      <ul className="bookList">
        {books.map((book) => (
          <li key={book.id} className="bookItem">
            <h2 className="bookItemTitle">{book.title}</h2>
            <h4 className="bookItemAuthor">{book.author}</h4>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button onClick={() => handleEditClick(book)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
