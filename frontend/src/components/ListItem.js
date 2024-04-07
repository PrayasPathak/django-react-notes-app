import React from "react";
import { Link } from "react-router-dom";

let getTimeStamp = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/notes/${note.id}`}>
        <div className="notes-list-item">
          <h3>{note.title}</h3>
          <p>
            Last Updated:
            <span>{getTimeStamp(note)}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
