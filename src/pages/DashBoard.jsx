import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("quizResults");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  const resetResults = () => {
    localStorage.removeItem("quizResults");
    setResults([]);
  };

  return (
    // <div className="min-h-screen p-4 bg-black/10 backdrop-blur-md text-purple border-2 border-purple-300 rounded-xl flex flex-col items-center">
    <div className="bg-black/10 backdrop-blur-md p-6 rounded-xl shadow-xl border-2 border-purple-300 max-w-xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-8 text-center">📊 Quiz Dashboard</h1>

      {results.length === 0 ? (
        <p className="text-center text-lg mb-6">
          No quizzes attempted yet. Try one now!
        </p>
      ) : (
        <div className="grid gap-4 w-full max-w-3xl">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-5 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-1">
                🧠 {result.quizType}
              </h2>
              <p className="text-sm">
                Score: <span className="font-bold">{result.score}</span> /{" "}
                {result.total}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 rounded-lg text-lg font-semibold transition items-center"
        >
          🧩 Start New Quiz
        </Link>

        <button
          onClick={resetResults}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg text-lg font-semibold transition items-center"
        >
          🗑️ Reset Results
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
