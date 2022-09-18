import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, setnotes } = context;
  return (
    <div className="container my-3">
      <h1>Your Notes</h1>
      <div className="grid-container">
        <div className="grid-item">
          <p>
            {notes.map((note) => {
              return <Noteitem note={note} />;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notes;
