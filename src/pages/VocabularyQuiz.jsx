import QuizTemplate from "../components/QuizTemplate";
import QuizTimer from "../components/QuizTimer";

const VocabularyQuiz = () => (
  <>
    <QuizTemplate quizTitle="Vocabulary Quiz" categoryId={11} />
    <QuizTimer />
  </>
);

export default VocabularyQuiz;
