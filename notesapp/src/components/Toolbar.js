import React, {useState} from "react";
import "./Main.css";
import Search from "./Search.js";
import "./Toolbar.css";
import FontSize from "./FontSize";


function Toolbar({
  activeNote,
  onToggleMode,
  onDeleteNote,
  onSearchText,
  darkMode,
}) {

  

  return (
    <div className="toolbar-container">
      <div className="trash-container">
        <i
          className="fas fa-trash fa-lg"
          onClick={() => {
            onDeleteNote(activeNote.id);
          }}
        ></i>
      </div>

      <FontSize darkMode={darkMode} />


      <div className="font-change-container">
        <i className="fas fa-bold"></i>
        <i className="fas fa-italic"></i>
        <i className="fas fa-underline"></i>
        <i className="fas fa-fill-drip"></i>
        <i className="fas fa-highlighter"></i>
      </div>

      <div className="align-container">
        <i className="fas fa-align-left"></i>
        <i className="fas fa-align-center"></i>
        <i className="fas fa-align-right"></i>
        <i className="fas fa-align-justify"></i>
      </div>

      <label className="switch">
        <input
          type="checkbox"
          className="toggleButton"
          onChange={() => {
            onToggleMode((previousDarkMode) => !previousDarkMode);
          }}
        />
        <span className="slider round"></span>
      </label>
      <Search onSearchText={onSearchText} />
    </div>
  );
}

export default Toolbar;
