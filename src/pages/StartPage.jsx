// src/pages/StartPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const quizOptions = [
  { title: "General Quiz", path: "/quiz/general" },
  { title: "Coding Quiz", path: "/quiz/coding" },
  { title: "Language Quiz", path: "/quiz/language" },
  { title: "Vocabulary Quiz", path: "/quiz/vocabulary" },
];

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <>
      <> </>
      <div className="fixed top-4 right-4 z-50">
        <Link
          to="/dashboard"
          className="bg-emerald-300 border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition backdrop-blur-md"
        >
          📊 Dashboard
        </Link>
      </div>
      <div className="bg-black/10 backdrop-blur-md p-6 rounded-xl shadow-xl border-2 border-purple-300 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-sky-500">Start a Quiz</h1>
        <p className="text-blue/80">Choose a category to begin</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {quizOptions.map((quiz, index) => (
            <button
              key={index}
              onClick={() => navigate(quiz.path)}
              className="bg-grey hover:bg-green-500 border-2 border-purple-300 text-black font-medium py-4 px-6 rounded-xl backdrop-blur transition duration-200"
            >
              {quiz.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
