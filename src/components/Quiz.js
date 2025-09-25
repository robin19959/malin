import React, { useState } from "react";

const quizData = {
  1: [
    {
      id: 1,
      type: "radio",
      question: "Vad föreställer bilden?",
      options: ["Hund", "Katt", "Bil"],
      answer: "Hund",
    },
    {
      id: 2,
      type: "checkbox",
      question: "Välj alla däggdjur:",
      options: ["Hund", "Katt", "Fisk"],
      answer: ["Hund", "Katt"],
    },
    {
      id: 3,
      type: "text",
      question: "Vad heter Sveriges huvudstad?",
      answer: "Stockholm",
    },
  ],
  2: [
    {
      id: 1,
      type: "radio",
      question: "Vilken färg är himlen?",
      options: ["Blå", "Grön", "Röd"],
      answer: "Blå",
    },
  ],
};

function Quiz({ quizId, goBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = quizData[quizId];

  if (!questions) return <p>Quiz finns inte.</p>;

  const question = questions[currentQuestion];

  const handleAnswer = (value) => {
    let newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = value;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz klart! Dina svar: " + JSON.stringify(userAnswers));
      goBack();
    }
  };

  return (
    <div className="quiz">
      <h2>Quiz {quizId}</h2>
      <p>{question.question}</p>

      {question.type === "radio" && (
        <div className="menu-buttons">
          {question.options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {question.type === "checkbox" && (
        <div className="menu-buttons">
          {question.options.map((opt, idx) => (
            <label key={idx} style={{ display: "block", margin: "10px" }}>
              <input
                type="checkbox"
                value={opt}
                checked={(userAnswers[currentQuestion] || []).includes(opt)}
                onChange={(e) => {
                  let arr = userAnswers[currentQuestion] || [];
                  if (e.target.checked) arr.push(opt);
                  else arr = arr.filter((x) => x !== opt);
                  handleAnswer(arr);
                }}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      )}

      {question.type === "text" && (
        <div>
          <input
            type="text"
            value={userAnswers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Skriv ditt svar"
          />
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleNext}>Nästa</button>
        <button className="back-btn" onClick={goBack}>
          Tillbaka
        </button>
      </div>
    </div>
  );
}

export default Quiz;
