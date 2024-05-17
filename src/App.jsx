import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Book from "./components/Book";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert Cecil Martin" },
    { id: 2, title: "Design Patterns", author: "Erich Gamma" },
    { id: 3, title: "Contributing To Eclipse", author: "Erich Gamma" },
    { id: 4, title: "Secrets of the JavaScript Ninja", author: "John Resig" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [Id, setId] = useState("");
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const addBook = () => {
    if (title && author) {
      setError("");
      const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
      };
      setBooks([...books, newBook]);
    } else {
      setError("Please enter both book title and author");
    }
  };

  const handleEditClick = (book) => {
    setIsEdit(true);
    setTitle(book.title);
    setAuthor(book.author);
    setId(book.id);
  };

  const handleSave = () => {
    const updatedBook = {
      id: Id,
      title: title,
      author: author,
    };

    const updatedBooks = books.map((book) =>
      book.id === Id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  return (
    <>
      <div>
        {isEdit ? (
          <>
            <h2>Update a Book</h2>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button onClick={() => handleSave()}>Save</button>
          </>
        ) : (
          <div>
            <h2>Add a New Book</h2>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button onClick={addBook}>Add Book</button>
            <p style={{ color: "red" }}>{error}</p>
          </div>
        )}
      </div>

      <Book
        books={books}
        title="All Books Here"
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
        isEdit={isEdit}
      />
    </>
  );
}

export default App;
