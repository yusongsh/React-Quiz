import React from "react";
import { useState } from "react";

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
  return (
    <>
      <div className="h-screen bg-bg-white relative flex min-h-screen flex-col items-center justify-center">
        <div className="p-20 max-w-2xl text-white bg-bg-dark rounded-xl shadow-md flex flex-col items-start">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-500 py-4">
              Question 1/3
            </p>
            <p className="text-2xl font-medium">
              {questions[currentQes].question}
            </p>
          </div>
          <div className="flex flex-col items-start py-8">
            {questions[currentQes].answerOpts.map((answeropt) => (
              <button className="hover:bg-slate-300 hover:text-bg-dark text-white border px-4 py-2 my-2 rounded font-semibold">
                {answeropt.answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
