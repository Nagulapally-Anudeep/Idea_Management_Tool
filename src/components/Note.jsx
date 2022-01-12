import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  
  function deleteNote(){
      props.onDelete(props.id);
  }  

  return (
    <div className="note">
      <h2>{props.bucket}</h2>
      <p>
        {props.content}
      </p>
      <h3>- {props.user}</h3>
      <button onClick={deleteNote}>
          <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
