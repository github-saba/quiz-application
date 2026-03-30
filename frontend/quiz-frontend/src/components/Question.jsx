function Question({ question, onAnswer, selected }) {
  return (
    <div>
      <h2>{question.question}</h2>

      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onAnswer(question.id, i)}
          style={{
            display: "block",
            margin: "10px",
            padding: "10px",
            backgroundColor: selected === i ? "#007bff" : "#eee",
            color: selected === i ? "white" : "black",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Question