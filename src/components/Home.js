import React from "react";

function Home({ setPage }) {
  return (
    <div className="menu">
      <h1>Välkommen!</h1>
      <div className="menu-buttons">
        <button onClick={() => setPage("quizMenu")}>Quiz / Skattjakter</button>
        <button onClick={() => setPage("escapeMenu")}>Escape Rooms</button>
      </div>
    </div>
  );
}

export default Home;
