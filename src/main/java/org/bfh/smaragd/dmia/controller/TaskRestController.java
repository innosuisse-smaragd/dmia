package org.bfh.smaragd.dmia.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.VisibilityChecker;
import org.bfh.smaragd.dmia.domain.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskRestController {

    @Value("classpath:data/task.json")
    private Resource taskResource;

    @GetMapping
    public List<Task> findAll() {
        return List.of(findBy(""));
    }


    @GetMapping("/{id}")
    public Task findBy(@PathVariable String id) {
        return loadTask();
    }

    private Task loadTask() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        mapper.setVisibility(VisibilityChecker.Std.defaultInstance().withFieldVisibility(JsonAutoDetect.Visibility.ANY));
        Task task = null;
        try {
            task = mapper
                    .readValue(taskResource.getFile(), Task.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return task;
    }
}
