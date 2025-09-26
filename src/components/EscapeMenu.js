import React, { useState } from "react";
import EscapeRoom from "./EscapeRoom";

const rooms = [
  { id: 1, name: "Rum 1", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Rum 2", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Rum 3", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Rum 4", img: "https://via.placeholder.com/150" },
];

function EscapeMenu({ goBack }) {
  const [currentRoom, setCurrentRoom] = useState(null);

  if (currentRoom !== null) {
    return (
      <EscapeRoom
        room={rooms.find((r) => r.id === currentRoom)}
        goBack={() => setCurrentRoom(null)}
      />
    );
  }

  return (
    <div className="escape-menu">
      <h2>Escape Games</h2>
      <div className="room-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-box" onClick={() => setCurrentRoom(room.id)}>
            <img src={room.img} alt={room.name} />
            <p>{room.name}</p>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={goBack}>
        Tillbaka
      </button>
    </div>
  );
}

export default EscapeMenu;
