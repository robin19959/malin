import React, { useState } from "react";
import "./Home.css";

const skattjakter = Array.from({ length: 15 }, (_, i) => `Skattjakt ${i + 1}`);

const escapeGames = [
  { id: 1, name: "Rymdäventyret" },
  { id: 2, name: "Djungeljakten" },
  { id: 3, name: "Slottets gåta" }
  // Lägg till fler spel här!
];

function Home({ setPage, setSelectedQuiz, setSelectedEscapeGame }) {
  const [showSkattjakt, setShowSkattjakt] = useState(false);
  const [showEscapeGames, setShowEscapeGames] = useState(false);

  return (
    <div className="home-container">
      <h1>
        Välkommen<br />
        <span className="byline">by morbymalin</span>
      </h1>
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
            onClick={() => setShowEscapeGames((v) => !v)}
          >
            Escape Games ▼
          </button>
          {showEscapeGames && (
            <div className="dropdown-list">
              {escapeGames.map((game) => (
                <button
                  key={game.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedEscapeGame(game.id);
                    setPage("escapeMenu");
                  }}
                >
                  {game.name}
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
