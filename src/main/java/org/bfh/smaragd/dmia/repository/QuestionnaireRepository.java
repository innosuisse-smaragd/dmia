package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.springframework.stereotype.Repository;

@Repository
@AllArgsConstructor
public class QuestionnaireRepository extends UsernameLookupRepository<Questionnaire> {

    @Override
    public String extractId(Questionnaire entity) {
        return entity.getId();
    }
}
