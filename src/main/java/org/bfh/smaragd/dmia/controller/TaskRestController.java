package org.bfh.smaragd.dmia.controller;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.bfh.smaragd.dmia.service.QuestionnaireService;
import org.bfh.smaragd.dmia.service.TaskSearchService;
import org.springframework.http.ResponseEntity;
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
    public List<Task> findAll() {
        return taskSearchService.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Task> findBy(@PathVariable String id) {
        var oTask = taskSearchService.findById(id);
        return ResponseEntity.of(oTask);
    }

}
