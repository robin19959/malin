import React, { useState } from "react";
import "./Home.css";

const skattjakter = Array.from({ length: 15 }, (_, i) => `Skattjakt ${i + 1}`);
const escapeRooms = Array.from({ length: 15 }, (_, i) => `Escape Room ${i + 1}`);

function Home({ setPage, setSelectedQuiz, setSelectedRoom }) {
  const [showSkattjakt, setShowSkattjakt] = useState(false);
  const [showEscape, setShowEscape] = useState(false);

  return (
    <div className="home-container">
      <h1>Välkommen<br /><span className="byline">by MoreByMalin</span></h1>
      <div className="options">
        <div className="dropdown">
          <button
            className="home-btn"
            onClick={() => setShowSkattjakt((v) => !v)}
          >
            Skattjakter ▼
          </button>
          {showSkattjakt && (
            <div className="dropdown-list">
              {skattjakter.map((name, idx) => (
                <button
                  key={name}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedQuiz(idx + 1);
                    setPage("quiz");
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown">
          <button
            className="home-btn"
            onClick={() => setShowEscape((v) => !v)}
          >
            Escape Room ▼
          </button>
          {showEscape && (
            <div className="dropdown-list">
              {escapeRooms.map((name, idx) => (
                <button
                  key={name}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedRoom(idx + 1);
                    setPage("escapeRoom");
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
