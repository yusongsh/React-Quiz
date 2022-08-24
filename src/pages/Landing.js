import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen bg-bg-white relative flex min-h-screen flex-col items-center justify-center">
      <div className="p-20 max-w-2xl mx-auto text-white bg-bg-dark rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-4xl font-medium pr-10 py-4">
            <p>Welcome to Quiz!</p>
          </div>
          <div>
            <p className="space-y-6 py-6">
              Here are the quiz rules/information:
            </p>
            <div className="flex flex-row py-3">
              <svg
                className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4">
                You will have{" "}
                <span className="font-semibold text-tx-light ">
                  3 questions
                </span>
                .
              </p>
            </div>
            <div className="flex flex-row py-3">
              <svg
                className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4">
                Each question have{" "}
                <span className="font-semibold text-tx-light "> 4 choices</span>
                .
              </p>
            </div>
            <div className="flex flex-row py-3">
              <svg
                className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4">No time limits, good luck!</p>
            </div>
          </div>
          <div className="pt-8">
            <Link to="/quiz">
              <button className="bg-slate-300 text-bg-dark px-4 py-2 rounded font-semibold hover:bg-slate-400 hover:text-white">
                Start Quiz 👉🏻
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
