// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import StartPage from "./pages/StartPage.jsx";
import GeneralQuiz from "./pages/GeneralQuiz";
import CodingQuiz from "./pages/CodingQuiz";
import LanguageQuiz from "./pages/LanguageQuiz";
import VocabularyQuiz from "./pages/VocabularyQuiz";
import Dashboard from "./pages/DashBoard.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz/general" element={<GeneralQuiz />} />
          <Route path="/quiz/coding" element={<CodingQuiz />} />
          <Route path="/quiz/language" element={<LanguageQuiz />} />
          <Route path="/quiz/vocabulary" element={<VocabularyQuiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
