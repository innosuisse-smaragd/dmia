package org.bfh.smaragd.dmia.client;

import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.response.Response;
import org.bfh.smaragd.dmia.domain.task.Task;

import java.util.Optional;

public interface QuestionnaireClient {

    Optional<Questionnaire> findByUrl(String url);

    String createResponse(String url, Response response);

    void updateTask(Task task);
}
