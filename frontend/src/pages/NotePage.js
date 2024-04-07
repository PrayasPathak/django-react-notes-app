import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [note, setNote] = useState({ title: "", body: "" });

  useEffect(() => {
    if (id !== "new") {
      getNote();
    }
  }, [id]);

  let getNote = async () => {
    if (id == "new") return;
    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    try {
      let response = await fetch(`/api/notes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (response.ok) {
        // Create note successfully, navigate back
        navigate(-1);
      } else {
        // Handle unsuccessful creation
        console.error("Failed to create note");
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  let updateNote = async () => {
    try {
      let response = await fetch(`/api/notes/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (response.ok) {
        // Update successful, navigate back
        navigate(-1);
      } else {
        // Handle unsuccessful update
        console.error("Failed to update note");
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  let handleSubmit = () => {
    if (id === "new" && note !== null) {
      createNote();
    } else if (!note.body) {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    }
  };

  let deleteNote = async () => {
    try {
      let response = await fetch(`/api/notes/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Delete successful, navigate back
        navigate(-1);
      } else {
        // Handle unsuccessful update
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        <input
          type="text"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />

        {id != "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={createNote}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note?.body}
      />
    </div>
  );
};

export default NotePage;
