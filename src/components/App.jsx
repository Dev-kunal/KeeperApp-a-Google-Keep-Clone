import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import uuid from "react-uuid";
import "../../public/styles.css";
import CreateTag from "./CreateTag";

function App() {
  const sampleNote = {
    id: 1,
    title: "title",
    content: "this is a sample note",
    bgcolor: "transparent",
    tag: "Tag",
    pinned: true
  };
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || `${[sampleNote]}`)
  );
  const [tags, setTags] = useState(
    JSON.parse(
      localStorage.getItem("tags") ||
        JSON.stringify(["All", "ShoppingList", "Work", "Study", "Random"])
    )
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
    console.log(localStorage.getItem("tags"));
  }, [tags]);

  const [note, setNote] = useState({
    id: uuid(),
    title: "",
    content: "",
    bgcolor: "white",
    tag: "",
    pinned: false
  });
  // const [tags, setTags] = useState([
  //   "All",
  //   "ShoppingList",
  //   "Work",
  //   "Study",
  //   "Random"
  // ]);
  const [noteType, setNoteType] = useState("All");

  // const [notes, setNotes] = useState([
  //   {
  //     id: 1,
  //     title: "title",
  //     content: "this is a sample note",
  //     bgcolor: "transparent",
  //     tag: "Tag",
  //     pinned: true
  //   }
  // ]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setNote({
      id: uuid(),
      title: "",
      content: "",
      bgcolor: "",
      tag: "",
      pinned: ""
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  const filteredNotes = (noteType) => {
    if (noteType === "All") {
      return notes.filter((note) => note);
    } else {
      return notes.filter((note) => note.tag === noteType);
    }
  };

  return (
    <div>
      <Header />
      <div className="grid-container">
        <div className="tagarea">
          <CreateTag tags={tags} setTags={setTags} setNoteType={setNoteType} />
        </div>

        <div className="notearea">
          <CreateNote
            note={note}
            addNote={addNote}
            setNote={setNote}
            tags={tags}
          />

          <div className="pinned-notes">
            <h2 className="heading">Pinned Notes</h2>

            {notes.map(
              (noteItem) =>
                noteItem.pinned && (
                  <Note
                    key={noteItem.id}
                    setNotes={setNotes}
                    note={noteItem}
                    color={noteItem.bgcolor}
                    deleteNote={deleteNote}
                  />
                )
            )}
          </div>

          <div className="other-notes">
            <h2 className="heading">{noteType} Notes</h2>
            {/* {notes.map(
              (noteItem) =>
                !noteItem.pinned && (
                  <Note
                    key={noteItem.id}
                    setNotes={setNotes}
                    note={noteItem}
                    color={noteItem.bgcolor}
                    deleteNote={deleteNote}
                  />
                )
            )} */}
            {filteredNotes(noteType).map(
              (noteItem) =>
                !noteItem.pinned && (
                  <Note
                    key={noteItem.id}
                    setNotes={setNotes}
                    note={noteItem}
                    color={noteItem.bgcolor}
                    deleteNote={deleteNote}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
