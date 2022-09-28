import React, { useContext, useEffect, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, addNote, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = (note) => {
    ref.toggle();
  };

  const ref = useRef(null);

  return (
    <>
      <AddNote />

      {/* Bootstrap Modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        ref={ref}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Bootstrap Modal */}

      <div className="container my-3">
        <h1>Your Notes</h1>
        <div className="grid-container">
          <div className="grid-item">
            <span>
              {notes.reverse().map((note) => {
                return (
                  <Noteitem
                    key={note._id}
                    updateNote={updateNote}
                    note={note}
                  />
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
