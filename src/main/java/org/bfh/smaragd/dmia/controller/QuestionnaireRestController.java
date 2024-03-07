package org.bfh.smaragd.dmia.controller;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.service.QuestionnaireService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questionnaires")
@AllArgsConstructor
public class QuestionnaireRestController {

    private QuestionnaireService questionnaireService;


    @GetMapping("/{id}")
    public ResponseEntity<Questionnaire> findBy(@PathVariable String id) {
        var oQuestionnaire = questionnaireService.findById(id);
        return ResponseEntity.of(oQuestionnaire);
    }

    @GetMapping
    public List<Questionnaire> findAll() {
        return questionnaireService.findAll();
    }


}
