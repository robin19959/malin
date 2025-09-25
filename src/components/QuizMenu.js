import React from "react";

function QuizMenu({ goToQuiz, goBack }) {
  const quizzes = [
    { id: 1, title: "Skattjakt 1" },
    { id: 2, title: "Skattjakt 2" },
  ];

  return (
    <div className="menu">
      <h2>Välj ett Quiz</h2>
      <div className="menu-buttons">
        {quizzes.map(q => (
          <button key={q.id} onClick={() => goToQuiz(q.id)}>
            {q.title}
          </button>
        ))}
      </div>
      <button className="back-btn" onClick={goBack}>Tillbaka</button>
    </div>
  );
}

export default QuizMenu;
