/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label>Title</label>
        <input
          placeholder="Enter the title"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
