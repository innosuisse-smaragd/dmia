package org.bfh.smaragd.dmia.client;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.VisibilityChecker;
import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.Profiles;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.response.Response;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
@Profile(Profiles.MOCK_REST_CLIENT)
@Slf4j
public class QuestionnaireMockClient implements QuestionnaireClient {

    @Value("classpath:data/questionnaire.json")
    private Resource taskResource;

    @Override
    public Optional<Questionnaire> findByUrl(String url) {
        return Optional.ofNullable(loadQuestionnaire());
    }


    private Questionnaire loadQuestionnaire() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        mapper.setVisibility(VisibilityChecker.Std.defaultInstance().withFieldVisibility(JsonAutoDetect.Visibility.ANY));
        try {
            return mapper
                    .readValue(taskResource.getFile(), Questionnaire.class);
        } catch (IOException e) {
            log.warn("Fail to load questionnaire.json", e);
        }
        return null;
    }

    @Override
    public String createResponse(String url, Response response) {
        log.info("Post response on {}", url);
        return "";
    }

    @Override
    public void updateTask(Task task) {
        log.info("update task id {}", task.getId());
    }

}
