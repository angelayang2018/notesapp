import React from "react";
import "./Sidebar.css";

function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  darkMode,
}) {

  
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className={`app-sidebar ${darkMode && 'dark-mode-sidebar'}`}>
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className= {`app-sidebar-note ${note.id === activeNote && "active"} ${darkMode && "dark-mode-sidebar-active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title && note.title.substr(0, 20)}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>

            <p>{note.body && note.body.substr(0, 65) + "..."}</p>
            <small className="note-meta">
              Last modified:{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
