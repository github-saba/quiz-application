const BASE_URL = "http://localhost:8080/api/quiz";

export const fetchQuestions = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const submitQuiz = async (answers) => {
  const response = await fetch(`${BASE_URL}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answers),
  });
  return response.json();
};