/* eslint-disable no-unused-vars */
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooks);
  };

  const createBook = (title) => {
    const newBook = {
      id: Math.round(Math.random() * 9999),
      title,
    };
    setBooks([...books, newBook]);
  };

  console.log(books);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
