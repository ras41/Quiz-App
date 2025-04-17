import QuizTemplate from "../components/QuizTemplate";
import QuizTimer from "../components/QuizTimer";

const LanguageQuiz = () => (
  <>
    <QuizTemplate quizTitle="Language Quiz" categoryId={10} />
    <QuizTimer />
  </>
);

export default LanguageQuiz;
