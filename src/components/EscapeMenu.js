import React from "react";

function EscapeMenu({ goToRoom, goBack }) {
  const rooms = [
    { id: 1, name: "Rum 1", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Rum 2", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Rum 3", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="escape-menu">
      <h2>Välj ett rum</h2>
      <div className="room-grid">
        {rooms.map(r => (
          <div key={r.id} className="room-box" onClick={() => goToRoom(r.id)}>
            <img src={r.img} alt={r.name} />
            <p>{r.name}</p>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={goBack}>Tillbaka</button>
    </div>
  );
}

export default EscapeMenu;
