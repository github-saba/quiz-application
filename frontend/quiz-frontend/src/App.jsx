import Quiz from "./components/Quiz";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="quiz-box">
        <h1>Quiz Application</h1>
        <Quiz />
      </div>
    </div>
  );
}

export default App;