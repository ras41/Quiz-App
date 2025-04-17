import { useEffect, useState } from "react";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const QuizTemplate = ({ quizTitle, categoryId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${categoryId}&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q) => ({
          question: decodeHTML(q.question),
          correct_answer: decodeHTML(q.correct_answer),
          options: shuffle([
            ...q.incorrect_answers.map(decodeHTML),
            decodeHTML(q.correct_answer),
          ]),
        }));
        setQuestions(formatted);
      });
  }, [categoryId]);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const handleSubmit = () => {
    if (!selectedOption) return;
    const correct = questions[currentQuestion].correct_answer;
    if (selectedOption === correct) setScore(score + 1);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  if (questions.length === 0)
    return <div className="text-white p-4">Loading questions...</div>;

  const current = questions[currentQuestion];

  return (
    <div className="p-4 text-white">
      <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-xl border-2 border-purple-300 max-w-xl mx-auto ">
        <br></br>
        <h1 className="text-3xl font-bold">{quizTitle}</h1>
        <h2 className="text-lg text-white font-medium mb-4">
          Q{currentQuestion + 1}: {current.question}
        </h2>

        <div className="flex flex-col gap-3">
          {current.options.map((option, idx) => {
            const isCorrect = option === current.correct_answer;
            const isWrong = selectedOption === option && !isCorrect;

            let bg = "bg-white/10";
            if (showAnswer) {
              if (isCorrect) bg = "bg-green-600 text-white";
              else if (isWrong) bg = "bg-red-600 text-white";
            } else if (option === selectedOption) {
              bg = "bg-blue-500 text-white";
            }

            return (
              <button
                key={idx}
                disabled={showAnswer}
                onClick={() => setSelectedOption(option)}
                className={`border border-white px-4 py-2 rounded-md transition ${bg}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {!showAnswer ? (
          <button
            className="mt-4 bg-green-600 text-white border border-purple-300 px-4 py-2 rounded-lg flex "
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit
          </button>
        ) : currentQuestion < questions.length - 1 ? (
          <button
            className="mt-4 bg-sky-600 text-white px-4 py-2 rounded-lg items-center"
            onClick={nextQuestion}
          >
            Next
          </button>
        ) : (
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              const prevResults = JSON.parse(
                localStorage.getItem("quizResults") || "[]"
              );
              const newResult = {
                quizType: quizTitle,
                score,
                total: questions.length,
              };
              localStorage.setItem(
                "quizResults",
                JSON.stringify([...prevResults, newResult])
              );
              window.location.href = "/dashboard";
            }}
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizTemplate;
