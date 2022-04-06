import { buildQueries } from "@testing-library/react";
import React from "react";
import "./Main.css";
import Toolbar from "./Toolbar";
import { useEffect, useState } from "react";



function Main({
  activeNote,
  onUpdateNote,
  onToggleMode,
  darkMode,
  onDeleteNote,
  onSearchText,
}) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  const [style, setStyle] = useState({textAlign: "left", color: "black", fontWeight: "normal"});
  

  if (!activeNote)
    return (
      <div className={`no-active-note ${darkMode && "dark-mode-main"}`}>
        No note selected
      </div>
    );
  return (
    <div className={`app-main ${darkMode && "dark-mode-main"}`}>
      <div className="app-main-note-edit">
        <Toolbar
          activeNote={activeNote}
          onToggleMode={onToggleMode}
          onDeleteNote={onDeleteNote}
          onSearchText = {onSearchText}
          darkMode = {darkMode}
          style = {style}
          setStyle = {setStyle}
        />
        <p className="main-date">
          Last modified:{" "}
          {new Date(activeNote.lastModified).toLocaleDateString("en-GB", {
            month: "long",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
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
          style = {style}
        />
      </div>
    </div>
  );
}

export default Main;
