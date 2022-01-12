import React, { useState } from "react";
import CreateSticky from "./CreateSticky";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  return (
    <div>
      <CreateSticky onAdd={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            user={note.user}
            bucket={note.bucket}
            content={note.content}
          />
        );
      })}
    </div>
  );
}

export default App;
