/* eslint-disable react/prop-types */
import BookShow from "./BookShow";

function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} title={book.title} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
