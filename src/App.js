// App.js

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#ffffff");
  const [fontWeight, setFontWeight] = useState("Normal");
  const [input, setInput] = useState("NEW TEXT");
  const [text, newText] = useState("NEW TEXT COMES HERE");

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
    console.log(event.target.value);
  };

  const handleFontWeight = (event) => {
    setFontWeight(event.target.value);
  };

  const captureInput = (event) => {
    setInput(event.target.value);
  };

  const addingText = () => {
    newText(input);
  };

  return (
    <div className="bg-container">
      <div className="top-part">
        <button type="button" className="undo-button">
          Undo
        </button>
        <button type="button" className="redo-button">
          Redo
        </button>
      </div>
      <div className="middle-part">
        <div className="new-text-cont">
          <p
            style={{
              fontFamily: `${selectedFont}`,
              fontSize: `${fontSize}px`,
              color: `${color}`,
              fontWeight: `${fontWeight}`,
            }}
            className="original-text"
          >
            {text}
          </p>
        </div>
        <div className="text-styling-cont">
          <div style={{ marginBottom: "30px" }}>
            <label htmlFor="fontPicker" className="font-family">
              Font Family
            </label>
            <select
              id="fontPicker"
              onChange={handleFontChange}
              value={selectedFont}
              className="font-picker"
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Garamond">Garamond</option>
              <option value="Palatino">Palatino</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Courier New">Courier New</option>
              <option value="Monaco">Monaco</option>
            </select>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label htmlFor="fontSizeSelector" className="color">
              Font Size: {fontSize}px
            </label>
            <input
              type="range"
              id="fontSizeSelector"
              min="10"
              max="40"
              step="1"
              value={fontSize}
              onChange={handleFontSizeChange}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h className="color">Color</h>
            <input
              type="color"
              value={color}
              onChange={handleChangeColor}
              className="color-picker"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label htmlFor="fontWeightPicker" className="color">
              Font Weight:
            </label>
            <select
              id="fontWeightPicker"
              value={fontWeight}
              onChange={handleFontWeight}
              className="font-picker"
            >
              <option value="Normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
            </select>
          </div>
          <div>
            <button type="button" className="add-text-btn" onClick={addingText}>
              Add Text
            </button>
            <input
              className="text-input"
              onChange={captureInput}
              value={input}
              type="text"
              height="30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
