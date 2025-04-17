import QuizTemplate from "../components/QuizTemplate";
import QuizTimer from "../components/QuizTimer";

const GeneralQuiz = () => (
  <>
    <QuizTemplate quizTitle="General Knowledge Quiz" categoryId={9} />
    <QuizTimer />
  </>
);

export default GeneralQuiz;
