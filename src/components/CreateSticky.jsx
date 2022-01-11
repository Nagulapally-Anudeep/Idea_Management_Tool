import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Button } from "@material-ui/core";

function CreateSticky(props) {
  const [isExpanded, setExpanded] = useState(false);

  function Expand() {
    setExpanded(true);
  }

  const [note, setNote] = useState({
    user: "",
    bucket: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    // props.addNote(note);
    // console.log(note);
    setNote({
      user: "",
      bucket: "",
      content: ""
    });
    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <header>
        <h1>Sticky Notes</h1>
        <Button variant="contained" color="primary" className="group">
          Group
        </Button>
        <Button variant="contained" color="secondary" className="filter">
          Filter
        </Button>
      </header>

      <div>
        <form className="create-note">
          {isExpanded && (
            <input
              name="user"
              value={note.user}
              onChange={handleChange}
              placeholder="User"
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
            placeholder="Make a Slip..."
            autoComplete="off"
          />
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </form>
      </div>
    </div>
  );
}

export default CreateSticky;
