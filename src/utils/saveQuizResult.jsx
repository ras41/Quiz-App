export const saveQuizResult = (quizTitle, score) => {
  const result = { quiz: quizTitle, score };
  const existing = JSON.parse(localStorage.getItem("quizResults")) || [];
  existing.push(result);
  localStorage.setItem("quizResults", JSON.stringify(existing));
};
