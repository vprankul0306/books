/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    setBooks(
      await axios.get("http://localhost:3001/books").then((res) => res.data)
    );
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooks);
    await axios.delete(`http://localhost:3001/books/${id}`);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks([...books, response.data]);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
