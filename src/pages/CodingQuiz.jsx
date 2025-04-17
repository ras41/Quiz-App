import QuizTemplate from "../components/QuizTemplate";
import QuizTimer from "../components/QuizTimer";

const CodingQuiz = () => (
  <>
    <QuizTemplate quizTitle="Coding Quiz" categoryId={18} />
    <QuizTimer />
  </>
);

export default CodingQuiz;
