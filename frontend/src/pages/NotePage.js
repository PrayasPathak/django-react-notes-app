import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
const NotePage = () => {
  let { id } = useParams();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    setNote(data);
  };
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
          <p>{note?.title}</p>
        </h3>
      </div>
      <textarea value={note?.body} />
    </div>
  );
};

export default NotePage;
