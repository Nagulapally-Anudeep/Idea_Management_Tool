import React from "react";
import { Button } from "@material-ui/core";

function Header(props) {

  function filtering() {
    let filterBy = window.prompt("Filter Highlights by: ");
    //   console.log(filterBy);
    props.onFilter(filterBy);
  }

  function grouping() {
    props.onGroup();
  } 
    
  return (
    <div>
      <header>
        <h1>Sticky Notes</h1>
        <Button
          variant="contained"
          color="primary"
          className="group"
          onClick={grouping}
        >
          Group
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="filter"
          onClick={filtering}
        >
          Filter
        </Button>
      </header>
    </div>
  );
}

export default Header;
