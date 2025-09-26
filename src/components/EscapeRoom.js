import React, { useState } from "react";
import "./EscapeRoom.css";

const SYMBOLS = [
  { value: "circle", label: "⚫" }, // svart cirkel
  { value: "square", label: "⬛" },
  { value: "star", label: "★" },
  { value: "heart", label: "♥" },
  { value: "triangle", label: "▲" }
];
const COLORS = [
  { value: "yellow", hex: "#ffe600" },
  { value: "green",  hex: "#2ecc40" },
  { value: "blue",   hex: "#3498db" },
  { value: "red",    hex: "#e74c3c" },
  { value: "pink",   hex: "#ff69b4" },
  { value: "purple", hex: "#a259ff" }
];

// Du kan importera escapeGames från EscapeMenu.js eller ha samma struktur i App.js och skicka in som prop
// Här förväntas du skicka in escapeGames, escapeGameId och roomId som props

function EscapeRoom({ escapeGames, escapeGameId, roomId, goBack }) {
  const game = escapeGames.find(g => g.id === escapeGameId);
  const room = game?.rooms.find(r => r.id === roomId);

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [symbolAnswers, setSymbolAnswers] = useState(Array(4).fill(""));
  const [colorAnswers, setColorAnswers] = useState(Array(4).fill(""));

  if (!room) {
    return (
      <div className="room-container">
        <button className="back-btn" onClick={goBack}>Tillbaka</button>
        <h2>Rummet hittades inte</h2>
      </div>
    );
  }

  const checkAnswer = () => {
    if (
      String(answer).trim().toLowerCase() ===
      String(room.answerKey || "").trim().toLowerCase()
    ) {
      setResult("Rätt!");
    } else {
      setResult("Fel, försök igen!");
    }
  };

  const handleSymbolChange = (idx, value) => {
    const updated = [...symbolAnswers];
    updated[idx] = value;
    setSymbolAnswers(updated);
  };

  const handleColorChange = (idx, value) => {
    const updated = [...colorAnswers];
    updated[idx] = value;
    setColorAnswers(updated);
  };

  return (
    <div className="room-container">
      <h2>{room.name}</h2>
      <img src={room.img} alt={room.name} className="room-img-large" />
      <div className="question-box">
        <p>Svara på frågan (på papper):</p>
        {room.answerType === "number" && (
          <input
            type="number"
            placeholder="Skriv en siffra"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            className="room-input"
          />
        )}
        {room.answerType === "letters" && (
          <input
            type="text"
            placeholder="Skriv bokstäver"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            className="room-input"
          />
        )}
        {room.answerType === "symbols" && (
          <div className="dropdown-row">
            {symbolAnswers.map((val, idx) => (
              <select
                key={idx}
                value={val}
                onChange={e => handleSymbolChange(idx, e.target.value)}
                className="mini-dropdown"
              >
                <option value="" disabled hidden>Välj</option>
                {SYMBOLS.map(sym => (
                  <option key={sym.value} value={sym.value}>{sym.label}</option>
                ))}
              </select>
            ))}
          </div>
        )}
        {room.answerType === "colors" && (
          <ColorPickerRow valueArray={colorAnswers} onChange={handleColorChange} />
        )}
        <button className="check-btn" onClick={checkAnswer}>Kolla svar</button>
        {result && <div className="result">{result}</div>}
      </div>
      <button className="back-btn" onClick={goBack}>Tillbaka</button>
    </div>
  );
}

function ColorPickerRow({ valueArray, onChange }) {
  return (
    <div className="color-picker-row">
      {valueArray.map((selected, idx) => (
        <div key={idx} className="color-picker-cell">
          <div className="color-picker-dropdown">
            <div className="color-picker-selected" tabIndex={0}>
              {selected
                ? <span className="color-square" style={{ background: COLORS.find(c => c.value === selected)?.hex }} />
                : <span className="color-placeholder">Välj</span>
              }
              <div className="color-picker-options">
                {COLORS.map(color => (
                  <div
                    key={color.value}
                    className="color-square"
                    style={{ background: color.hex }}
                    onClick={() => onChange(idx, color.value)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EscapeRoom;