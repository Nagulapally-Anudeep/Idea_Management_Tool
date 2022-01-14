import React from "react";

function ImmutableNote(props) {
  const customColors = [
    "rgb(248 221 128)",
    "rgb(224 167 249)",
    "rgb(242 131 132)",
    "rgb(137 243 167)",
    "rgb(134 206 252)",
  ];

  return (
    <div
      className="note"
      style={{
        backgroundColor: customColors[props.u_id % 5],
        zIndex: props.u_id,
      }}
    >
      <p>{props.content}</p>

      <h3>-{props.user}</h3>
    </div>
  );
}

export default ImmutableNote;
