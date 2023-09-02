/* eslint-disable no-unused-vars */
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBook = {
      id: books.length + 1,
      title,
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      {books.length}
      <BookCreate onCreate={createBook} />
    </>
  );
}

export default App;
