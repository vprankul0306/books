/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    setBooks(
      await axios.get("http://localhost:3001/books").then((res) => res.data)
    );
  };

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
    <BooksContext.Provider
      value={{ books, fetchBooks, deleteBookById, createBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
