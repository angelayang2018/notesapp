import React from "react";
import "./Main.css";
import Search from "./Search.js";
import "./Toolbar.css";
import FontSize from "./FontSize";

function Toolbar({ activeNote, onToggleMode, onDeleteNote }) {
  return (
    <div className="toolbar-container">
      <button
        className="toggleButton"
        onClick={() => {
          onToggleMode((previousDarkMode) => !previousDarkMode);
        }}
      >
        Toggle
      </button>
      <i className="fas fa-trash fa-lg" onClick = {() => {onDeleteNote(activeNote.id)}}></i>
      <div className = "align-container">
        <i className="fas fa-align-left"></i>
        <i className="fas fa-align-center"></i>
        <i className="fas fa-align-right"></i>
        <i className="fas fa-align-justify"></i>
      </div>
      <Search />
    </div>
  );
}

export default Toolbar;
