package com.gnan.quiz.controller;

import com.gnan.quiz.dto.QuestionDTO;
import com.gnan.quiz.Service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
@CrossOrigin("*")
public class QuizController {

    private final QuizService quizService;

    @GetMapping
    public List<QuestionDTO> getQuestions() {
        return quizService.getAllQuestions();
    }

    @PostMapping("/submit")
    public Map<String, Integer> submitQuiz(@RequestBody Map<String, Integer> answers) {
        Integer score = quizService.calculateScore(answers);
        return Map.of("score", score);
    }
}
