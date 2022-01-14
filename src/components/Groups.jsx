import React from "react";
import Bucket from "./Bucket";

function Groups(props) {
  const buckets = [];
  const visited = {};

  // const notes = props.notes;
  props.notes.map((note, index) => {
    const x = note.bucket;
    if (visited[x] !== 1) {
      buckets.push(x);
      visited[x] = 1;
    }
    return "yes";
  });

  return (
    <div className="grouped-buckets">
      {buckets.map((item, index) => {
        return <Bucket key={index} list={props.notes} name={item} />;
      })}
    </div>
  );
}

export default Groups;
