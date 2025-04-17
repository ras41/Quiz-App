import React from "react";

export default function ScoreScreen({ score, total, onRestart }) {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-6">
        Your Score: {score} / {total}
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Restart
      </button>
    </div>
  );
}
