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
        <i className="fas fa-edit fa-lg" onClick = {onAddNote}></i>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className= {`app-sidebar-note ${note.id === activeNote && "active"} ${darkMode && "dark-mode-sidebar-active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title && note.title.substr(0, 40)}</strong>
              
            </div>

            <p>{note.body && note.body.substr(0, 65) + "..."}</p>
            <small className="note-meta">
              {new Date(note.lastModified).toLocaleDateString("en-GB")}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
