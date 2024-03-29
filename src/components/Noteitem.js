import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-15">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title" id="txt">
            {note.title}
          </h5>
          <span className="card-text" id="txt">
            {note.description}
          </span>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            id="edit"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
          <i
            className="fa-solid fa-trash-can mx-2"
            id="del"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note Deleted", "warning");
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
