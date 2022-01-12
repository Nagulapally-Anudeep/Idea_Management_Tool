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

  function deleteNote(id){

    function matchId(noteItem,index) {
      return index!==id;
    }

    setNotes( (prevNotes) => {
      return (prevNotes.filter(matchId));
    } );

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
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
