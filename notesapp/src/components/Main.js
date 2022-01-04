import React from "react";
import "./Main.css";
import Toolbar from "./Toolbar";

function Main({ activeNote, onUpdateNote, onToggleMode, darkMode }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };


  if (!activeNote)
    return <div className={`no-active-note ${darkMode && "dark-mode-main"}`}>No note selected</div>;
  return (
    <div className={`app-main ${darkMode && 'dark-mode-main'}`}>
      <div className="app-main-note-edit">
        <Toolbar onToggleMode={onToggleMode} />
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          placeholder="Title"
          autoFocus
        />
        <textarea
          id="body"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
          placeholder="Write your note here..."
        />
      </div>
    </div>
  );
}

export default Main;
