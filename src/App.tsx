import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Define the state type: Tracking multiple objects containing keys and values typed to Str
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [quizResult, setQuizResult] = useState<string>("");

  const handleToggle = (toggleId: string, optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev, // keep previous selections

      // value of toggleId is dynamically assigned to the value of the optionId
      // e.g toggle3: "option2"
      [toggleId]: optionId,
    }));
  };

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

  const correctAnswers = togglesList.reduce((acc, toggle) => {
    const correctOption = toggle.options.find((option) => {
      return option.correct;
    });
    if (correctOption) {
      acc[toggle.id] = correctOption.id;
    }
    return acc;
  }, {} as Record<string, string>);

  const checkAllCorrect =
    Object.keys(selectedOptions).length ===
      Object.keys(correctAnswers).length &&
    Object.keys(selectedOptions).every(
      (toggleId) => selectedOptions[toggleId] === correctAnswers[toggleId]
    );

  // Set state to correct or incorrect depending on the check above
  useEffect(() => {
    if (checkAllCorrect) {
      setQuizResult("correct!");
    } else if (
      Object.keys(selectedOptions).length === Object.keys(correctAnswers).length
    ) {
      setQuizResult("incorrect");
    }
  }, [selectedOptions, correctAnswers, checkAllCorrect]);

  return (
    <>
      <div>
        {/* Question */}
        <h2>An animal cell contains:</h2>

        {/* Toggle Container */}
        {togglesList.map((toggle) => (
          <div key={toggle.id} className="box">
            {toggle.options.map((option) => (
              <button
                key={option.id}
                className="option"
                onClick={() => handleToggle(toggle.id, option.id)}
                disabled={checkAllCorrect}
                style={{
                  backgroundColor:
                    selectedOptions[toggle.id] === option.id
                      ? "lightblue"
                      : "white",
                }}>
                {option.text}
              </button>
            ))}
          </div>
        ))}

        {/* Result */}
        <p>Selected Options: {JSON.stringify(selectedOptions)}</p>
        <p> The answer is {quizResult}</p>
      </div>
    </>
  );
}

export default App;
