import React from "react";

export default function QuestionCard({
  questionData,
  onAnswer,
  selectedOption,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
      <div className="space-y-3">
        {questionData.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option)}
            className={`w-full px-4 py-2 rounded-lg border text-left
              ${
                selectedOption === option
                  ? "bg-blue-100 border-blue-500"
                  : "bg-gray-50 border-gray-300"
              }
              hover:bg-blue-50 transition`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
