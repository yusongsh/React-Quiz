import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What is the name of the coffee shop in the sitcom Friends?",
    answerOpts: [
      { answer: "Central Perk", isCorrect: true },
      { answer: "Central Park", isCorrect: false },
      { answer: "Northern Perk", isCorrect: false },
      { answer: "New York Perk", isCorrect: false },
    ],
  },
  {
    question: "What is yellowtail fish called in Japanese?",
    answerOpts: [
      { answer: "Ahi", isCorrect: false },
      { answer: "Maguro", isCorrect: false },
      { answer: "Hamachi", isCorrect: true },
      { answer: "yellowtail", isCorrect: false },
    ],
  },
  {
    question: "What is the only food that cannot go bad?",
    answerOpts: [
      { answer: "Dark chocolate", isCorrect: false },
      { answer: "Peanut butter", isCorrect: false },
      { answer: "Canned tuna", isCorrect: false },
      { answer: "Honey", isCorrect: true },
    ],
  },
];
// console.log(questions);

function Quiz() {
  const [currentQes, setCurrentQes] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleBtnClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQes = currentQes + 1;
    if (nextQes < questions.length) {
      setCurrentQes(nextQes);
    } else {
      setShowScore(true);
    }
  };

  const reStart = () => {
    setCurrentQes(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <>
      {showScore ? (
        <div className="h-screen bg-bg-white relative flex min-h-screen flex-col items-center justify-center">
          <div className="p-40 max-w-2xl text-white bg-bg-dark rounded-xl shadow-md flex flex-col items-center ">
            <p className="py-10 font-medium text-2xl ">
              You got {score} of of 3 correct! 🎉
            </p>
            <div className="flex flex-row">
              <div className="px-2">
                <Link to="/">
                  <button className="bg-slate-300 text-bg-dark px-4 py-2 rounded font-semibold hover:bg-slate-400 hover:text-white">
                    Back to 🏠
                  </button>
                </Link>
              </div>
              <div className="px-2">
                <button
                  className="bg-slate-300 text-bg-dark px-4 py-2 rounded font-semibold hover:bg-slate-400 hover:text-white"
                  onClick={reStart}
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-bg-white relative flex min-h-screen flex-col items-center justify-center">
          <div className="p-20 max-w-2xl text-white bg-bg-dark rounded-xl shadow-md flex flex-col items-start">
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-500 py-4">
                Question {currentQes + 1}/3
              </p>
              <p className="text-2xl font-medium">
                {questions[currentQes].question}
              </p>
            </div>
            <div>
              <div className="flex flex-col items-start py-8">
                {questions[currentQes].answerOpts.map((answeropt) => (
                  <>
                    <div>
                      <button
                        className="hover:bg-slate-300 hover:text-bg-dark text-white border px-4 py-2 my-2 rounded font-semibold"
                        onClick={() => handleBtnClick(answeropt.isCorrect)}
                      >
                        {answeropt.answer}
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
