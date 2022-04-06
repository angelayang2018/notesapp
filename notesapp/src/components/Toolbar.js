import React, { useState } from "react";
import "./Main.css";
import Search from "./Search.js";
import "./Toolbar.css";
import FontSize from "./FontSize";
import { SketchPicker } from "react-color";

function Toolbar({
  activeNote,
  onToggleMode,
  onDeleteNote,
  onSearchText,
  darkMode,
  style,
  setStyle,
}) {
  const handleChangeComplete = (newColor, event) => {
    setStyle({ color: newColor.hex });
  };

  const [isVisible, setVisible] = useState("false");

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

      {/* <FontSize darkMode={darkMode} /> */}

      <div className="font-change-container">
        <i className="fas fa-bold"></i>
        <i className="fas fa-italic"></i>
        <i className="fas fa-underline"></i>
        <i
          className="fas fa-fill-drip"
          onClick={() => {
            setVisible(!isVisible);
          }}
        ></i>
      </div>

      <div className={`sketch-picker ${isVisible ? "displayOff" : "displayOn"}`}>
        <SketchPicker color={style.color} onChange={handleChangeComplete} />
      </div>

      <div className="align-container">
        <i
          className="fas fa-align-left "
          onClick={() => {
            setStyle({ textAlign: "left" });
          }}
        ></i>
        <i
          className="fas fa-align-center"
          onClick={() => {
            setStyle({ textAlign: "center" });
          }}
        ></i>
        <i
          className="fas fa-align-right"
          onClick={() => {
            setStyle({ textAlign: "right" });
          }}
        ></i>
        <i
          className="fas fa-align-justify"
          onClick={() => {
            setStyle({ textAlign: "justify" });
          }}
        ></i>
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
