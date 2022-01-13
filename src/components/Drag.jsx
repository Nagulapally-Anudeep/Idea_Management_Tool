import React from "react";

function Drag(props) {
 
  function startDrag(ev) {
      ev.dataTransfer.setData("drag-item",props.dataItem);
    //   console.log(props.dataItem);
  }  

  return (
    <div draggable onDragStart={startDrag}>
      {props.children}
    </div>
  );
}

export default Drag;