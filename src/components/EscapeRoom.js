import React, { useState } from "react";

function EscapeRoom({ setPage, roomId }) {
  const [textAnswer, setTextAnswer] = useState("");
  const [checkboxAnswer, setCheckboxAnswer] = useState([]);
  const [dropdownAnswer, setDropdownAnswer] = useState("");

  const handleCheckbox = (option) => {
    setCheckboxAnswer(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const submitAnswer = () => {
    alert(
      `Text: ${textAnswer}\nCheckbox: ${checkboxAnswer.join(", ")}\nDropdown: ${dropdownAnswer}`
    );
    // Rensa svaren
    setTextAnswer("");
    setCheckboxAnswer([]);
    setDropdownAnswer("");
  };

  return (
    <div className="escape-room">
      <h2>Rum {roomId}</h2>

      <div className="question">
        <p>Textfråga: Skriv ditt svar</p>
        <input value={textAnswer} onChange={(e) => setTextAnswer(e.target.value)} />
      </div>

      <div className="question">
        <p>Checkboxfråga: Välj alternativ</p>
        {["A", "B", "C"].map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={checkboxAnswer.includes(option)}
              onChange={() => handleCheckbox(option)}
            /> {option}
          </label>
        ))}
      </div>

      <div className="question">
        <p>Dropdownfråga: Välj ett alternativ</p>
        <select value={dropdownAnswer} onChange={(e) => setDropdownAnswer(e.target.value)}>
          <option value="">Välj</option>
          <option value="X">X</option>
          <option value="Y">Y</option>
          <option value="Z">Z</option>
        </select>
      </div>

      <button onClick={submitAnswer}>Skicka svar</button>
      <button onClick={() => setPage("escapeMenu")}>Tillbaka till rum</button>
    </div>
  );
}

export default EscapeRoom;
