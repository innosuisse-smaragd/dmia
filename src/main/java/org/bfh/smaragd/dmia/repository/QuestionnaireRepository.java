package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
@AllArgsConstructor
public class QuestionnaireRepository {

    private final Map<String, Questionnaire> questionnaires = new HashMap<>();

    public void save(Questionnaire questionnaire) {
        questionnaires.put(questionnaire.getId(), questionnaire);
    }

    public Optional<Questionnaire> findById(String id) {
        return Optional.ofNullable(id).map(questionnaires::get);
    }

    public List<Questionnaire> findAll() {
        return List.copyOf(questionnaires.values());
    }

    public void remove(String id) {
        if (id != null) {
            questionnaires.remove(id);
        }
    }
}
