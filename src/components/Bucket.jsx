import React from "react";
import ImmutableNote from "./ImmutableNote";

function Bucket(props) {
  let bucketList = props.list;

  return (
    <div className="bucket-list">
      <h2>{props.name}</h2>

      {bucketList.map((note, index) => {
        return (
          (note.bucket===props.name) ? (<ImmutableNote
            key={note.u_id}
            u_id={note.u_id}
            content={note.content}
            user={note.user}
          />) : (<div key={note.u_id} ></div>)
        );
      })}
    </div>
  );
}

export default Bucket;
