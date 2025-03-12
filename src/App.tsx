// import { useState } from "react";
import "./App.css";

function App() {
  const togglesList = [
    {
      id: "toggle1",
      options: [
        { id: "option1", text: "Cell Wall", correct: false },
        { id: "option2", text: "Ribosomes", correct: true },
      ],
    },
    {
      id: "toggle2",
      options: [
        { id: "option1", text: "Cytoplasm", correct: true },
        { id: "option2", text: "Chloroplast", correct: false },
      ],
    },
    {
      id: "toggle3",
      options: [
        { id: "option1", text: "Partially permeable membrance", correct: true },
        { id: "option2", text: "Impermeable membrance", correct: false },
      ],
    },
    {
      id: "toggle4",
      options: [
        { id: "option1", text: "Cellulose", correct: false },
        { id: "option2", text: "Mitochrondria", correct: true },
      ],
    },
  ];

  return (
    <>
      <div>
        {/* Question */}
        <h2>An animal cell contains:</h2>

        {/* Toggle Container */}
        {togglesList.map((toggle) => (
          <div key={toggle.id} className="box">
            {toggle.options.map((option) => (
              <button key={option.id} className="option">
                {option.text}
              </button>
            ))}
          </div>
        ))}

        {/* Result */}
        <p>The answer is incorrect</p>
      </div>
    </>
  );
}

export default App;
