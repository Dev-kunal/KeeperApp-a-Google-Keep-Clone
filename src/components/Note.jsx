import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Note({ note, deleteNote, setNotes }) {
  const [ispinned, setispinned] = useState(false);

  function handleDeleteClick() {
    setNotes((prevNotes) => {
      return prevNotes.filter((item) => {
        return item.id !== note.id;
      });
    });
  }

  const handlePinClick = () => {
    setispinned(!ispinned);
    setNotes((prevnotes) =>
      prevnotes.map((item) =>
        item.id === note.id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  return (
    <div className="note" style={{ backgroundColor: note.bgcolor }}>
      <button onClick={() => handlePinClick()}>
        {note.pinned ? "📍" : "📌"}
      </button>
      <h1>{note.title}</h1>
      <p>{note.content}</p>

      <p className="tag">{note.tag}</p>
      <button onClick={() => handleDeleteClick(note.id)}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
