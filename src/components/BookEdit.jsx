/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

function BookEdit({ book, setShowEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = async (event) => {
    setTitle(event.target.value);
    await axios.patch(`http://localhost:3001/books/${book.id}`, {
      title: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    book.title = title;
    setShowEdit(false);
    setTitle("");
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
