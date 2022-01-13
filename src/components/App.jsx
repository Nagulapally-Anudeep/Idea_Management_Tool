import React, { useState } from "react";
import Header from "./Header";
import CreateSticky from "./CreateSticky";
import Note from "./Note";
import Drag from "./Drag";

function App() {
  const [notes, setNotes] = useState([]);

  const [count, setCount] = useState(0);

  function addNote(newNote) {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    // console.log(newNote);
   
  }

  function deleteNote(id) {
    function matchId(noteItem, index) {
      return noteItem.u_id !== id;
    }

    setNotes((prevNotes) => {
      return prevNotes.filter(matchId);
    });

  }

  function updateNote(newNote, id) {
    // console.log(newNote);
    notes.map((note, index) => {
      if (note.u_id === id) {
        note.bucket = newNote.bucket;
        note.user = newNote.user;
        note.content = newNote.content;
      }
      return "Changed"; //just to remove warning
    });

    setNotes(notes);
   
  }

  // filtering
  const [filterWord,setFilterWord] = useState("all");

  function filterHighlights(filterBy) {
    setFilterWord(filterBy);
  }

  return (
    <div>
      <Header onFilter={filterHighlights} />

      <CreateSticky onAdd={addNote} count={count} />

      {notes.map((note, index) => {
        return ( (filterWord==="all" || filterWord==="" || filterWord===note.bucket)?
          (<Drag dataItem={note} key={note.u_id}><Note
            key={note.u_id}
            id={index}
            user={note.user}
            bucket={note.bucket}
            content={note.content}
            u_id={note.u_id}
            onDelete={deleteNote}
            onUpdate={updateNote}
          /></Drag>) : (<div key={note.u_id}></div>)
        );
      })}
    </div>
  );
}

export default App;
