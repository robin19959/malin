import React from "react";

function EscapeRoom({ room, goBack }) {
  return (
    <div className="escape-room">
      <h2>{room.name}</h2>
      <img src={room.img} alt={room.name} style={{ width: "300px", marginBottom: "20px" }} />
      <p>Här kan man lägga in utmaningar, ledtrådar eller quiz för rummet.</p>
      <button className="back-btn" onClick={goBack}>
        Tillbaka till alla rum
      </button>
    </div>
  );
}

export default EscapeRoom;
