package org.bfh.smaragd.dmia.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.client.QuestionnaireClient;
import org.bfh.smaragd.dmia.domain.common.Coding;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.response.Response;
import org.bfh.smaragd.dmia.domain.task.Contained;
import org.bfh.smaragd.dmia.domain.task.Input;
import org.bfh.smaragd.dmia.domain.task.Output;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.bfh.smaragd.dmia.domain.user.User;
import org.bfh.smaragd.dmia.repository.QuestionnaireRepository;
import org.bfh.smaragd.dmia.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class QuestionnaireService {

    private static final String CODE_QUESTIONNAIRE = "questionnaire";
    private static final String CODE_RESPONSE_ENDPOINT = "response-endpoint";
    private static final String CODE_QUESTIONNAIRE_RESPONSE = "questionnaire-response";
    private static final String RESOURCE_TYPE_PATIENT = "Patient";

    private final TaskRepository taskRepository;
    private final UserService userService;
    private final QuestionnaireRepository questionnaireRepository;
    private final QuestionnaireClient questionnaireClient;

    public void initialize(Task task) {
        var oUser = saveUserIfPresent(task);
        if (oUser.isPresent()) {
            var user = oUser.get();
            taskRepository.save(user.getUsername(), task);
            task.getInput().forEach(input -> loadQuestionnaireIfInputIsQuestionnaire(user.getUsername(), task.getId(), input));
        } else {
            log.warn("user is not present for task (id:{})", task.getId());
        }
    }

    private Optional<User> saveUserIfPresent(Task task) {
        return task.getContained()
                .stream()
                .filter(contained -> RESOURCE_TYPE_PATIENT.equals(contained.getResourceType()))
                .findAny()
                .flatMap(this::saveUser);
    }

    private Optional<User> saveUser(Contained patient) {
        User user = null;
        if (!patient.getName().isEmpty()) {
            log.debug("user have name");
            var name = patient.getName().get(0);
            var firstName = StringUtils.collectionToDelimitedString(name.getGiven(), " ");
            var lastName = name.getFamily();
            var fullName = firstName + " " + lastName;
            var birthDate = patient.getBirthDate();
            user = userService.save(fullName, birthDate);
        }
        return Optional.ofNullable(user);
    }

    private void loadQuestionnaireIfInputIsQuestionnaire(String username, String taskId, Input input) {
        if (isQuestionnaire(input)) {
            loadQuestionnaire(username, taskId, input);
        }
    }

    private boolean isQuestionnaire(Input input) {
        return input.getType().getCoding().stream().map(Coding::getCode).anyMatch(CODE_QUESTIONNAIRE::equals);
    }

    private void loadQuestionnaire(String username, String taskId, Input input) {
        String url = input.getValueCanonical();
        log.info("Questionnaire found (url={})", url);
        questionnaireClient
                .findByUrl(url)
                .ifPresentOrElse(questionnaire -> addQuestionnaire(username, taskId, questionnaire), () -> logEmptyQuestionnaire(url));
    }

    private void addQuestionnaire(String username, String taskId, Questionnaire questionnaire) {
        log.info("Add questionnaire (taskId={})", taskId);
        questionnaireRepository.save(username, taskId, questionnaire);
    }

    private void logEmptyQuestionnaire(String url) {
        log.warn("No questionnaire found at url={}", url);
    }

    public List<Questionnaire> findByUsernameAndTaskId(String username, String taskId) {
        log.info("Find questionnaires by username ({}) and task id ({})", username, taskId);
        return questionnaireRepository.findByUsernameAndTaskId(username, taskId);
    }

    public void createResponse(String username, String taskId, Response response) {
        log.info("Create response for username ({}) and task id ({})", username, taskId);
        taskRepository.findByUsernameAndId(username, taskId)
                .ifPresent(task -> task.getInput().forEach(input -> sendResponseIfResponseEndpoint(username, task, input, response)));
    }

    private void sendResponseIfResponseEndpoint(String username, Task task, Input input, Response response) {
        if (isResponseEndpoint(input)) {
            sendResponse(username, task, input, response);
        }
    }

    private boolean isResponseEndpoint(Input input) {
        return input.getType().getCoding().stream().map(Coding::getCode).anyMatch(CODE_RESPONSE_ENDPOINT::equals);
    }

    private void sendResponse(String username, Task task, Input input, Response response) {
        String url = input.getValueUrl();
        log.info("Response url found (url={})", url);
        String responseUrl = questionnaireClient.createResponse(url, response);
        updateQuestionnaireResponse(task, responseUrl);
        questionnaireClient.updateTask(task);
        cleanUpTask(username, task);
    }

    private void updateQuestionnaireResponse(Task task, String responseUrl) {
        task.getOutput().forEach(output -> sendResponseIfResponseEndpoint(output, responseUrl));
    }

    private void sendResponseIfResponseEndpoint(Output output, String url) {
        if (isQuestionnaireResponse(output)) {
            output.getValueReference().setReference(url);
        }
    }

    private boolean isQuestionnaireResponse(Output output) {
        return output.getType().getCoding().stream().map(Coding::getCode).anyMatch(CODE_QUESTIONNAIRE_RESPONSE::equals);
    }


    private void cleanUpTask(String username, Task task) {
        questionnaireRepository.removeByUsernameAndTaskId(username, task.getId());
        taskRepository.removeByUsernameAndTaskId(username, task.getId());
        var tasks = taskRepository.findByUsername(username);
        if(tasks.isEmpty()){
            userService.removeByUsername(username);
        }
    }

}
