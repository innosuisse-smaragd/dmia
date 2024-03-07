package org.bfh.smaragd.dmia.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.VisibilityChecker;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/questionnaires")
public class QuestionnaireRestController {

    @Value("classpath:data/questionnaire.json")
    private Resource taskResource;


    @GetMapping("/{id}")
    public Questionnaire findBy(@PathVariable String id) {
        return loadQuestionnaire();
    }

    private Questionnaire loadQuestionnaire() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        mapper.setVisibility(VisibilityChecker.Std.defaultInstance().withFieldVisibility(JsonAutoDetect.Visibility.ANY));
        Questionnaire questionnaire = null;
        try {
            questionnaire = mapper
                    .readValue(taskResource.getFile(), Questionnaire.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return questionnaire;
    }
}
