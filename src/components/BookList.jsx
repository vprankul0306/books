/* eslint-disable react/prop-types */
import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList() {
  const { books, deleteBookById } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={deleteBookById} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
