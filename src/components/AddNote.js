import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };
  const handleChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className="my-3">
          <div className="form-group">
            <label htmlFor="title">Title (Min 5 characters)</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title}
              placeholder="Enter Title (Min 5 characters)"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description (Min 5 characters)</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              placeholder="Enter Description (Min 5 characters)"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              placeholder="Enter Tag"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            &#x270D;Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
