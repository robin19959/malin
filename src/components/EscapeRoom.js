import React, { useState, useEffect, useRef } from "react";
import "./EscapeRoom.css";
import "./GameShared.css";

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

function EscapeRoom({ escapeGames, escapeGameId, roomId, goBack, markRoomSolved, solvedRooms = {} }) {
  const game = escapeGames.find(g => g.id === escapeGameId);
  const room = game?.rooms.find(r => r.id === roomId);

  const [answer, setAnswer] = useState(""); // fritext för number/letters
  const [result, setResult] = useState(null);
  // Dynamisk symbolsekvens: längd = answerSequence.length, annars 1 om enkel symbol-svar, fallback 4 om legacy utan answer definierad
  const symbolSlots = room?.type === 'symbols'
    ? (room?.answerSequence?.length || (room?.answer ? 1 : 4))
    : 0;
  const [symbolAnswers, setSymbolAnswers] = useState(Array(symbolSlots).fill(""));
  // Dynamisk färgsekvens
  const colorSlots = room?.answerSequence?.length || (room?.type === 'colors' ? 1 : 0);
  const [colorAnswers, setColorAnswers] = useState(Array(colorSlots).fill("")); // dynamisk färgsekvens

  // Reset state när rummet ändras
  useEffect(() => {
    setResult(null);
    setAnswer("");
    if (room?.type === 'symbols') {
      const newSlots = room?.answerSequence?.length || (room?.answer ? 1 : 4);
      setSymbolAnswers(Array(newSlots).fill(""));
    }
    if (room?.type === 'colors') {
      const slots = room?.answerSequence?.length || 1;
      setColorAnswers(Array(slots).fill(""));
    }
  }, [room]);

  if (!room) {
    return (
      <div className="room-container">
        <button className="back-btn" onClick={goBack}>Tillbaka</button>
        <h2>Rummet hittades inte</h2>
      </div>
    );
  }

  const checkAnswer = () => {
    const expected = String(room.answer || "").trim().toLowerCase();
    const given = String(answer).trim().toLowerCase();
    if (given === expected) {
      setResult("Rätt!");
      markRoomSolved?.(escapeGameId, roomId);
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
      <img src={room.img} alt={room.name} className="game-img-large" />
      <div className="game-question-box">
        <p>Svara på frågan (på papper):</p>
  {room.type === "number" && (
          <input
            type="number"
            placeholder="Skriv en siffra"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            className="game-input"
          />
        )}
  {room.type === "letters" && (
          <input
            type="text"
            placeholder="Skriv bokstäver"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            className="game-input"
          />
        )}
        {room.type === "symbols" && (
          <SymbolPickerRow
            valueArray={symbolAnswers}
            onChange={handleSymbolChange}
            allowedSymbols={room.allowedSymbols}
          />
        )}
        {room.type === "colors" && (
          <ColorPickerRow
            valueArray={colorAnswers}
            onChange={handleColorChange}
            allowedColors={room.allowedColors}
          />
        )}
        <button
          className="game-check-btn"
          onClick={() => {
            if (room.type === 'colors') {
              if (room.answerSequence) {
                const correctSeq = room.answerSequence.every((c, i) => colorAnswers[i] === c) && colorAnswers.length === room.answerSequence.length;
                if (correctSeq) {
                  setResult('Rätt!');
                  markRoomSolved?.(escapeGameId, roomId);
                } else {
                  setResult('Fel, försök igen!');
                }
              } else if (room.answer) {
                const singleColor = colorAnswers[0];
                if (singleColor === String(room.answer).trim().toLowerCase()) {
                  setResult('Rätt!');
                  markRoomSolved?.(escapeGameId, roomId);
                } else {
                  setResult('Fel, försök igen!');
                }
              } else {
                setResult('Fel, försök igen!');
              }
            } else if (room.type === 'symbols') {
              if (room.answerSequence) {
                // Jämför sekvens av symbol-värden
                const correctSymbols = symbolAnswers.length === room.answerSequence.length && room.answerSequence.every((s, i) => symbolAnswers[i] === s);
                if (correctSymbols) {
                  setResult('Rätt!');
                  markRoomSolved?.(escapeGameId, roomId);
                } else {
                  setResult('Fel, försök igen!');
                }
              } else if (room.answer) {
                // Enkel symbol: jämför vald symbols label mot svarstecknet
                const selectedLabel = SYMBOLS.find(s => s.value === symbolAnswers[0])?.label;
                if (selectedLabel && selectedLabel.trim() === String(room.answer).trim()) {
                  setResult('Rätt!');
                  markRoomSolved?.(escapeGameId, roomId);
                } else {
                  setResult('Fel, försök igen!');
                }
              } else {
                setResult('Fel, försök igen!');
              }
            } else {
              checkAnswer();
            }
          }}
        >Kolla svar</button>
        {result && <div className="game-result">{result}</div>}
      </div>
      <button className="game-back-btn bottom" onClick={goBack}>Tillbaka</button>
    </div>
  );
}

function ColorPickerRow({ valueArray, onChange, allowedColors }) {
  const [openIndex, setOpenIndex] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, []);

  return (
    <div className="picker-row" ref={wrapperRef}>
      {valueArray.map((selected, idx) => {
        const colors = allowedColors ? COLORS.filter(c => allowedColors.includes(c.value)) : COLORS;
        return (
          <div key={idx} className="picker-cell">
            <button
              type="button"
              className={`picker-selected ${openIndex === idx ? 'open' : ''} ${selected ? 'has-value' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {selected ? (
                <span className="picker-swatch" style={{ background: COLORS.find(c => c.value === selected)?.hex }} />
              ) : (
                <span className="picker-placeholder">Välj</span>
              )}
            </button>
            {openIndex === idx && (
              <div className="picker-options">
                {colors.map(color => (
                  <div
                    key={color.value}
                    className="picker-option"
                    onClick={() => { onChange(idx, color.value); setOpenIndex(null); }}
                  >
                    <span className="picker-swatch" style={{ background: color.hex }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SymbolPickerRow({ valueArray, onChange, allowedSymbols }) {
  const [openIndex, setOpenIndex] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, []);

  return (
    <div className="picker-row" ref={wrapperRef}>
      {valueArray.map((selected, idx) => {
        const symbols = allowedSymbols ? SYMBOLS.filter(s => allowedSymbols.includes(s.value)) : SYMBOLS;
        const selectedSymbolLabel = SYMBOLS.find(s => s.value === selected)?.label;
        return (
          <div key={idx} className="picker-cell">
            <button
              type="button"
              className={`picker-selected ${openIndex === idx ? 'open' : ''} ${selected ? 'has-value' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {selected ? (
                <span className="picker-symbol">{selectedSymbolLabel}</span>
              ) : (
                <span className="picker-placeholder">Välj</span>
              )}
            </button>
            {openIndex === idx && (
              <div className="picker-options">
                {symbols.map(sym => (
                  <div
                    key={sym.value}
                    className="picker-option"
                    onClick={() => { onChange(idx, sym.value); setOpenIndex(null); }}
                  >
                    <span className="picker-symbol">{sym.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default EscapeRoom;