package org.bfh.smaragd.dmia.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.client.QuestionnaireClient;
import org.bfh.smaragd.dmia.domain.common.Coding;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.task.Input;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.bfh.smaragd.dmia.repository.QuestionnaireRepository;
import org.bfh.smaragd.dmia.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class QuestionnaireService {

    private final TaskRepository taskRepository;
    private final QuestionnaireRepository questionnaireRepository;
    private final QuestionnaireClient questionnaireClient;

    public void initialize(Task task) {
        taskRepository.save(task);
        task.getInput().forEach(this::loadQuestionnaireIfInputIsQuestionnaire);
    }

    private void loadQuestionnaireIfInputIsQuestionnaire(Input input) {
        if (isQuestionnaire(input)) {
            loadQuestionnaire(input);
        }
    }

    private boolean isQuestionnaire(Input input) {
        return input.getType().getCoding().stream().map(Coding::getCode).anyMatch("questionnaire"::equals);
    }

    private void loadQuestionnaire(Input input) {
        String url = input.getValueCanonical();
        log.info("Questionnaire found (url={})", url);
        questionnaireClient.findByUrl(url).ifPresentOrElse(this::addQuestionnaire, () -> logEmptyQuestionnaire(url));
    }

    private void addQuestionnaire(Questionnaire questionnaire) {
        log.info("Add questionnaire (id={})", questionnaire.getId());
        questionnaireRepository.save(questionnaire);
    }

    private void logEmptyQuestionnaire(String url) {
        log.warn("No questionnaire found at url={}", url);
    }

    public Optional<Questionnaire> findById(String id) {
        return questionnaireRepository.findById(id);
    }

    public List<Questionnaire> findAll() {
        return questionnaireRepository.findAll();
    }

}
