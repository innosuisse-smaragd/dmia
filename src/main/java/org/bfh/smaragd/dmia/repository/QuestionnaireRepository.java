package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
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
        var id = questionnaire.getId();
        var key = new QuestionnaireKey(username, taskId, id);
        questionnaires.put(key, questionnaire);
    }

    public List<Questionnaire> findByUsernameAndTaskId(String username, String taskId) {
        if (username != null && taskId != null) {
            return questionnaires
                    .entrySet()
                    .stream()
                    .filter(key -> username.equals(key.getKey().username()) && taskId.equals(key.getKey().taskId()))
                    .map(Map.Entry::getValue)
                    .toList();
        }
        return Collections.emptyList();
    }

    private record QuestionnaireKey(String username, String taskId, String questionnaireId) {
    }
}
