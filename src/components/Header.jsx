import React from "react";
import { Button } from "@material-ui/core";

function Header(props) {

  function filtering() {
    let filterBy = window.prompt("Filter Highlights by: ");
    //   console.log(filterBy);
    props.onFilter(filterBy);
  }
    
  return (
    <div>
      <header>
        <h1>Sticky Notes</h1>
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
