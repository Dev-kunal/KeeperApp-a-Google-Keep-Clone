import React, { useState } from "react";
// import AddRoundedIcon from "@material-ui/icons/AddRounded";
// import { yellow } from "@material-ui/core/colors";

function CreateNote({ setNote, note, addNote, tags }) {
  const [noteview, setnoteview] = useState(false);

  const colors = ["orange", "yellow", "skyblue", "grey", "brown"];

  const handlecolorclick = (color) => {
    setNote((obj) => ({ ...obj, bgcolor: color }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote() {
    addNote(note);
  }

  const coloredStyle = {
    backgroundColor: `${note.bgcolor}`
  };
  function handleclick() {
    setnoteview(true);
  }

  return (
    <div onClick={handleclick}>
      <form className="create-note" style={coloredStyle}>
        {noteview && (
          <input
            autoFocus
            autoComplete="off"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={noteview ? "3" : "1"}
        />

        {noteview && (
          <select
            name="tag"
            value={note.tag}
            className="tagselection"
            onChange={handleChange}
          >
            <option selected value="Choose a Tag">
              Choose a Tag
            </option>
            {tags.map((tag) => (
              <option value={tag}>{tag}</option>
            ))}
          </select>
        )}

        <button type="button" className="add-note-btn" onClick={submitNote}>
          {/* <AddRoundedIcon /> */}+
        </button>
        {noteview && (
          <div className="colors">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                className="circle-btn"
                style={{ backgroundColor: `${color}` }}
                onClick={() => handlecolorclick(color)}
              ></button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateNote;
