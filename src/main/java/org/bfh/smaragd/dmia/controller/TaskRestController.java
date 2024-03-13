package org.bfh.smaragd.dmia.controller;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.response.Response;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.bfh.smaragd.dmia.service.QuestionnaireService;
import org.bfh.smaragd.dmia.service.TaskSearchService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
@AllArgsConstructor
public class TaskRestController {

    private QuestionnaireService questionnaireService;
    private TaskSearchService taskSearchService;

    @PostMapping
    public void addTask(@RequestBody Task task) {
        questionnaireService.initialize(task);
    }

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    @SecurityRequirement(name = "Bearer Authentication")
    public List<Task> findAll(@Parameter(hidden = true) @AuthenticationPrincipal UserDetails userDetails) {
        return taskSearchService.findByUsername(userDetails.getUsername());
    }


    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    @SecurityRequirement(name = "Bearer Authentication")
    public ResponseEntity<Task> findBy(@Parameter(hidden = true) @AuthenticationPrincipal UserDetails userDetails, @PathVariable String id) {
        var oTask = taskSearchService.findByUsernameAndId(userDetails.getUsername(), id);
        return ResponseEntity.of(oTask);
    }

    @GetMapping("/{id}/questionnaires")
    @PreAuthorize("isAuthenticated()")
    @SecurityRequirement(name = "Bearer Authentication")
    public List<Questionnaire> findQuestionnaires(@Parameter(hidden = true) @AuthenticationPrincipal UserDetails userDetails, @PathVariable String id) {
        return questionnaireService.findByUsernameAndTaskId(userDetails.getUsername(), id);
    }


    @PostMapping("/{id}/responses/")
    @PreAuthorize("isAuthenticated()")
    @SecurityRequirement(name = "Bearer Authentication")
    public void createResponse(@Parameter(hidden = true) @AuthenticationPrincipal UserDetails userDetails, @PathVariable String id, @RequestBody Response response) {
        questionnaireService.createResponse(userDetails.getUsername(), id, response);
    }

}
