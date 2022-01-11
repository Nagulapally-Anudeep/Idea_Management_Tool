import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <header>
      <h1>Sticky Notes</h1>
  
      <div>
          <form className="create-note">
              
          </form>
      </div>


      <Button variant="contained" color="primary" className="group">
        Group
      </Button>
      <Button variant="contained" color="secondary" className="filter">
        Filter
      </Button>
    </header>
  );
}

export default Header;
