import React, { useState } from "react";
import Home from "./components/Home";
import QuizMenu from "./components/QuizMenu";
import Quiz from "./components/Quiz";
import EscapeMenu from "./components/EscapeMenu";
import EscapeRoom from "./components/EscapeRoom";

// Flytta escapeGames hit så det kan användas av både EscapeMenu och EscapeRoom
const escapeGames = [
  {
    id: 1,
    name: "Rymdäventyret",
    rooms: [
      { id: 1, name: "Rymdlabbet", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", answerType: "number", answerKey: "7" },
      { id: 2, name: "Skeppet", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", answerType: "symbols", answerKey: "★" },
      { id: 3, name: "Stjärnporten", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", answerType: "letters", answerKey: "ABC" },
      { id: 4, name: "Observatoriet", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", answerType: "colors", answerKey: "blue" },
      { id: 5, name: "Kontrollrummet", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", answerType: "number", answerKey: "42" },
      { id: 6, name: "Planetrummet", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", answerType: "symbols", answerKey: "♛" },
    ]
  },
  {
    id: 2,
    name: "Djungeljakten",
    rooms: [
      { id: 1, name: "Djungeln", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", answerType: "letters", answerKey: "DJUNGEL" },
      { id: 2, name: "Vulkanen", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", answerType: "colors", answerKey: "red" },
      { id: 3, name: "Floden", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", answerType: "symbols", answerKey: "♥" },
      { id: 4, name: "Grottan", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", answerType: "number", answerKey: "3" },
      { id: 5, name: "Trädhuset", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", answerType: "letters", answerKey: "TRÄD" },
      { id: 6, name: "Ruinerna", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", answerType: "colors", answerKey: "green" },
    ]
  },
  {
    id: 3,
    name: "Slottets gåta",
    rooms: [
      { id: 1, name: "Biblioteket", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", answerType: "letters", answerKey: "BOK" },
      { id: 2, name: "Slottssalen", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", answerType: "symbols", answerKey: "☀" },
      { id: 3, name: "Tornet", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", answerType: "number", answerKey: "5" },
      { id: 4, name: "Fängelsehålan", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", answerType: "colors", answerKey: "purple" },
      { id: 5, name: "Kapellet", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", answerType: "letters", answerKey: "KORS" },
      { id: 6, name: "Trädgården", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", answerType: "symbols", answerKey: "♣" },
    ]
  }
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedEscapeGame, setSelectedEscapeGame] = useState(null);
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
          setSelectedEscapeGame={setSelectedEscapeGame}
        />
      )}
      {page === "quizMenu" && (
        <QuizMenu goToQuiz={goToQuiz} goBack={() => setPage("home")} />
      )}
      {page === "quiz" && (
        <Quiz quizId={selectedQuiz} goBack={() => setPage("quizMenu")} />
      )}
      {page === "escapeMenu" && (
        <EscapeMenu
          escapeGames={escapeGames}
          escapeGameId={selectedEscapeGame}
          goToRoom={goToEscapeRoom}
          goBack={() => setPage("home")}
        />
      )}
      {page === "escapeRoom" && (
        <EscapeRoom
          escapeGames={escapeGames}
          escapeGameId={selectedEscapeGame}
          roomId={selectedRoom}
          goBack={() => setPage("escapeMenu")}
        />
      )}
    </div>
  );
}

export default App;
