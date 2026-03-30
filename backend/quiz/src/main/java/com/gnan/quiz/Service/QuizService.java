package com.gnan.quiz.Service;

import com.gnan.quiz.dto.QuestionDTO;
import com.gnan.quiz.model.Question;
import com.gnan.quiz.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuestionRepository questionRepository;

    // NOTE: In production, correct answers should be validated from DB
    private final Map<String, Integer> correctAnswerMap = new HashMap<>();

    public List<QuestionDTO> getAllQuestions() {

        List<Question> questions = questionRepository.findAll();
        List<QuestionDTO> result = new ArrayList<>();

        for (Question q : questions) {

            List<String> options = new ArrayList<>(q.getOptions());
            String correctAnswer = options.get(q.getCorrectAnswerIndex());

            // shuffle options
            Collections.shuffle(options);

            // find new index of correct answer
            int newIndex = options.indexOf(correctAnswer);

            // Correct answer and new index mapped into correctAnswerMap
            correctAnswerMap.put(q.getId(),newIndex);

            result.add(new QuestionDTO(
                    q.getId(),
                    q.getQuestion(),
                    options
            ));
        }

        return result;
    }

    public Integer calculateScore(Map<String, Integer> userAnswers) {

        int score = 0;

        for (Map.Entry<String, Integer> entry : userAnswers.entrySet()) {

            String questionId = entry.getKey();
            Integer userAnswer = entry.getValue();
            Integer correctAnswer = correctAnswerMap.get(questionId);

            if (correctAnswer != null && correctAnswer.equals(userAnswer)) {
                score++;
            }
        }
        return score;
    }
}
