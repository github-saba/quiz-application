import { useEffect, useState } from "react";
import { fetchQuestions, submitQuiz } from "../services/Api";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex,
    });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitQuiz(answers).then((res) => {
        console.log("Response:", res);
        setScore(res.score);
      });
    }
  };

  if (score !== null) {
    return <Result score={score} total={questions.length} />;
  }

  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h3>Question {currentIndex + 1} of {questions.length}</h3>
      <Question
        question={questions[currentIndex]}
        index={currentIndex}
        onAnswer={handleAnswer}
        selected={answers[questions[currentIndex].id]}
      />
      <br /><br />
      <button 
        onClick={nextQuestion}
        disabled={answers[questions[currentIndex].id] === undefined}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;