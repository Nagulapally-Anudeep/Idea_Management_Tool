import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function deleteNote() {
    props.onDelete(props.u_id);
  }

  const [editedNote, setEditedNote] = useState({
    user: props.user,
    bucket: props.bucket,
    content: props.content,
    u_id: props.u_id,
  });

  function edit(event) {
    const { name, value } = event.target;
    setEditedNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  const [editable, setEditable] = useState(false);

  function editToggle() {
    //   console.log(props.content);
    setEditable((prevVal) => {
      if (prevVal) {
        props.onUpdate(editedNote, props.u_id);
      }
      return prevVal ^ true;
    });
  }

  const customColors = [
    "rgb(248 221 128)",
    "rgb(224 167 249)",
    "rgb(242 131 132)",
    "rgb(137 243 167)",
    "rgb(134 206 252)",
  ];

  return (
    <div className="note" style={{backgroundColor: customColors[props.u_id%5]}} onDoubleClick={editToggle}>
      {editable ? (
        <h2>
          <input
            className="editable"
            name="bucket"
            value={editedNote.bucket}
            onChange={edit}
          />
        </h2>
      ) : (
        <h2>{editedNote.bucket}</h2>
      )}

      {editable ? (
        <p>
          <input
            className="editable"
            name="content"
            value={editedNote.content}
            onChange={edit}
          />
        </p>
      ) : (
        <p>{editedNote.content}</p>
      )}

      {editable ? (
        <h3>
          <input
            className="editable"
            name="user"
            value={editedNote.user}
            onChange={edit}
          />
        </h3>
      ) : (
        <h3>{editedNote.user}</h3>
      )}

      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
