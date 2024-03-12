package org.bfh.smaragd.dmia.client;

import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;

import java.util.Optional;

public interface QuestionnaireClient {

    Optional<Questionnaire> findByUrl(String url);
}
