import React from "react";
import "./EscapeMenu.css";

function EscapeMenu({ escapeGames, escapeGameId, goToRoom, goBack, solvedRooms = {} }) {
  const game = escapeGames.find(g => g.id === escapeGameId);

  if (!game) {
    return (
      <div className="escape-menu-container">
        <h2>Spelet hittades inte</h2>
        <button className="back-btn" onClick={goBack}>Tillbaka</button>
      </div>
    );
  }

  return (
    <div className="escape-menu-container">
      <h2>{game.name}</h2>
      <div className="rooms-grid">
        {game.rooms.map(room => (
          <div
            key={room.id}
            className="room-card"
            onClick={() => goToRoom(room.id)}
            tabIndex={0}
          >
            <img src={room.img} alt={room.name} className="room-img" />
            {solvedRooms[game.id]?.has(room.id) && (
              <div className="room-solved-badge" aria-label="Klar">✓</div>
            )}
            <div className="room-name">{room.name}</div>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={goBack}>Tillbaka</button>
    </div>
  );
}

export default EscapeMenu;
