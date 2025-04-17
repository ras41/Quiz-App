// src/components/QuizTimer.jsx
import { useEffect, useState } from "react";

const QuizTimer = ({ duration = 120, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // Trigger when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div
      className={`
        fixed top-4 right-4 z-50 w-fit px-6 py-3 mb-6 rounded-xl shadow-md 
        border border-black/50 backdrop-blur-sm bg-black/50 
        text-lg font-bold tracking-wider text-white 
        transition-all duration-500 ease-in-out 
        animate-pulse-slow
        ${
          timeLeft <= 30
            ? "text-red-400 border-red-400/50"
            : "text-green-300 border-green-300/30"
        }
      `}
    >
      ⏳ Time Left: {minutes}:{seconds}
    </div>
  );
};

export default QuizTimer;
