import React, { useState } from "react";

function App() {
  const [answer, setAnswer] = useState(null);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Quiz: Vad föreställer bilden?</h1>
      <img 
        src="https://via.placeholder.com/400x200" 
        alt="quiz" 
        style={{ width: "100%", borderRadius: "8px" }} 
      />
      
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setAnswer("Rätt!")}>Hund</button>
        <button onClick={() => setAnswer("Fel!")}>Katt</button>
        <button onClick={() => setAnswer("Fel!")}>Bil</button>
      </div>

      {answer && <p style={{ marginTop: "20px" }}>{answer}</p>}
    </div>
  );
}

export default App;
