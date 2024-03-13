package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@AllArgsConstructor
public class QuestionnaireRepository {

    private final Map<QuestionnaireKey, Questionnaire> questionnaires = new HashMap<>();

    public void save(String username, String taskId, Questionnaire questionnaire) {
        var key = new QuestionnaireKey(username, taskId);
        questionnaires.put(key, questionnaire);
    }

    public List<Questionnaire> findByUsernameAndTaskId(String username, String taskId) {
        if (username != null && taskId != null) {
            return questionnaires
                    .entrySet()
                    .stream()
                    .filter(key -> username.equals(key.getKey().getUsername()) && taskId.equals(key.getKey().getTaskId()))
                    .map(Map.Entry::getValue)
                    .toList();
        }
        return Collections.emptyList();
    }

    public void removeByUsernameAndTaskId(String username, String taskId) {
        var key = new QuestionnaireKey(username, taskId);
        questionnaires.remove(key);
    }

    @Data
    private static class QuestionnaireKey {
        private final String username;
        private final String taskId;
    }
}
