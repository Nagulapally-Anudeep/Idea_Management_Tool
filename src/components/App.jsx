import React, { useState } from "react";
import Header from "./Header";
import CreateSticky from "./CreateSticky";
import Note from "./Note";
import DragMove from "./DragMove";
import Groups from "./Groups";

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

  //Dragging
  const [translate,setTranslate] = useState({
    x: 0,
    y: 0,
    noteId: 0
  });

  function handleDrag(e,id) {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
      noteId: id
    });

    
    // console.log(e);
  }

  // function PointerDown(e,id) {
  //   let sx,sy;
  //   notes.map( (note,index) => {
  //     if(note.u_id === id) {
  //       sx = note.x;
  //       sy = note.y;
  //     }
  //     return "yes";
  //   } );

  //   setTranslate({
  //     x: sx,
  //     y: sy,
  //     noteId: id
  //   });
  // }

  function PointerUp(e,id) {
    setTranslate({
      x:0,
      y:0,
      noteId: id
    });  
  }

  // grouping
  const [group,setGroup] = useState(false);
  function groupBy() {
    setGroup( (prevV) => {
      return prevV^true;
    });
  }

  return (
    <div>
      <Header onFilter={filterHighlights} onGroup={groupBy} />

      <CreateSticky onAdd={addNote} count={count} />

      {
        (!group) ?
        (notes.map((note, index) => {
        return ( (filterWord==="all" || filterWord==="" || filterWord===note.bucket)?
          (<DragMove onDragMove={handleDrag} onPointerUp={PointerUp} key={note.u_id} id={note.u_id}><Note
            key={note.u_id}
            id={index}
            user={note.user}
            bucket={note.bucket}
            content={note.content}
            u_id={note.u_id}
            onDelete={deleteNote}
            onUpdate={updateNote}
            cords={translate}
            x={note.x}
            y={note.y}
          /></DragMove>) : (<div key={note.u_id}></div>)
        );
      }))
         :
      (<Groups notes={notes} />)
      }

    </div>
  );
}

export default App;
