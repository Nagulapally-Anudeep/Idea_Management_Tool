import React, { useState } from "react";
import CreateSticky from "./CreateSticky";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  const [count,setCount] = useState(0);

  function addNote(newNote) {

    setCount((prevCount)=>{
      return prevCount+1;
    });
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(newNote); 
  }

  function deleteNote(id){

    function matchId(noteItem,index) {
      return (noteItem.u_id)!==id;
    }

    setNotes( (prevNotes) => {
      return (prevNotes.filter(matchId));
    } );

  }

  function updateNote(newNote,id) {
    // console.log(newNote);
    notes.map( (note,index) => {
      if(note.u_id === id){
        note.bucket = newNote.bucket;
        note.user = newNote.user;
        note.content = newNote.content;
      }
      return "Changed"; //just to remove warning
    });

    setNotes(notes);

  }

  return (
    <div>
      <CreateSticky onAdd={addNote} count={count} />

      {notes.map((note, index) => {
        return (
          <Note
            key={note.u_id}
            id={index}
            user={note.user}
            bucket={note.bucket}
            content={note.content}
            u_id={note.u_id}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        );
      })}
    </div>
  );
}

export default App;
