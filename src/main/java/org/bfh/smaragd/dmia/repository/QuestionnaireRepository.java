package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
@AllArgsConstructor
public class QuestionnaireRepository  {

    private final Map<QuestionnaireKey, Questionnaire> entities = new HashMap<>();

    public void save(String username, String taskId, Questionnaire questionnaire) {
        var id = questionnaire.getId();
        var key = new QuestionnaireKey(username, taskId, id);
        entities.put(key, questionnaire);
    }

    public List<Questionnaire> findByUsernameAndTaskId(String username, String taskId) {
        if (username != null && taskId != null) {
            return entities
                    .entrySet()
                    .stream()
                    .filter(key -> username.equals(key.getKey().getUsername()) && taskId.equals(key.getKey().getTaskId()))
                    .map(Map.Entry::getValue)
                    .toList();
        }
        return Collections.emptyList();
    }

    @Data
    private static class QuestionnaireKey {
        private final String username;
        private final String taskId;
        private final String questionnaireId;
    }
}
