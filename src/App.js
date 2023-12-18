import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setValue("");
  };

  return (
    <div className="App">
      <input
        className="input"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="enter your text here"
      />

      <button className="btn" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}
