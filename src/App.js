import React, { useState } from "react";
import Home from "./components/Home";
import QuizMenu from "./components/QuizMenu";
import Quiz from "./components/Quiz";
import EscapeMenu from "./components/EscapeMenu";
import EscapeRoom from "./components/EscapeRoom";
import './App.css';


function App() {
  const [page, setPage] = useState("home");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const goToQuiz = (quizId) => {
    setSelectedQuiz(quizId);
    setPage("quiz");
  };

  const goToEscapeRoom = (roomId) => {
    setSelectedRoom(roomId);
    setPage("escapeRoom");
  };

  return (
    <div className="App">
      {page === "home" && (
        <Home
          setPage={setPage}
          setSelectedQuiz={setSelectedQuiz}
          setSelectedRoom={setSelectedRoom}
        />
      )}
      {page === "quizMenu" && <QuizMenu goToQuiz={goToQuiz} goBack={() => setPage("home")} />}
      {page === "quiz" && <Quiz quizId={selectedQuiz} goBack={() => setPage("quizMenu")} />}
      {page === "escapeMenu" && <EscapeMenu goToRoom={goToEscapeRoom} goBack={() => setPage("home")} />}
      {page === "escapeRoom" && <EscapeRoom roomId={selectedRoom} goBack={() => setPage("escapeMenu")} />}
    </div>
  );
}

export default App;
