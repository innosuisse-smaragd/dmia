package org.bfh.smaragd.dmia.controller;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.service.QuestionnaireService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questionnaires")
@AllArgsConstructor
@PreAuthorize("isAuthenticated()")
@SecurityRequirement(name = "Bearer Authentication")
public class QuestionnaireRestController {

    private QuestionnaireService questionnaireService;


    @GetMapping("/{id}")
    public ResponseEntity<Questionnaire> findBy(@Parameter(hidden = true) @AuthenticationPrincipal UserDetails userDetails, @PathVariable String id) {
        var oQuestionnaire = questionnaireService.findByUsernameAndId(userDetails.getUsername(), id);
        return ResponseEntity.of(oQuestionnaire);
    }

    @GetMapping
    public List<Questionnaire> findAll(@Parameter(hidden = true) @AuthenticationPrincipal UserDetails userDetails) {
        return questionnaireService.findByUsername(userDetails.getUsername());
    }


}
