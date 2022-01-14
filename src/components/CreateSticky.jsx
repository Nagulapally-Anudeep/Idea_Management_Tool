import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateSticky(props) {
  const [isExpanded, setExpanded] = useState(false);

  function Expand() {
    setExpanded(true);
  }

  const [note, setNote] = useState({
    user: "",
    bucket: "",
    content: "",
    u_id: props.count,
    x: 0,
    y: 0
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        u_id: props.count,
      };
    });
  }

  function submitNote(event) {
    if (note.user === "" || note.content === "") {
      alert("Enter all the required (*) fields!!");
      return;
    }

    props.onAdd(note);
    // console.log(note);
    setNote({
      user: "",
      bucket: "",
      content: "",
      u_id: "",
      x: 0,
      y: 0
    });
    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="user"
            value={note.user}
            onChange={handleChange}
            placeholder="User *"
            autoComplete="off"
          />
        )}
        {isExpanded && (
          <input
            name="bucket"
            value={note.bucket}
            onChange={handleChange}
            placeholder="Related to.."
            autoComplete="off"
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          onClick={Expand}
          rows={isExpanded ? 3 : 1}
          placeholder="Make a Slip... *"
          autoComplete="off"
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateSticky;
