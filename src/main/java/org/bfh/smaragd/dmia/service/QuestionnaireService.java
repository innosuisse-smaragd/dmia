package org.bfh.smaragd.dmia.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.client.QuestionnaireClient;
import org.bfh.smaragd.dmia.domain.common.Coding;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.task.Contained;
import org.bfh.smaragd.dmia.domain.task.Input;
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
    private static final String RESOURCE_TYPE_PATIENT = "Patient";

    private final TaskRepository taskRepository;
    private final UserService userService;
    private final QuestionnaireRepository questionnaireRepository;
    private final QuestionnaireClient questionnaireClient;

    public void initialize(Task task) {
        var oUser = saveUserIfPresent(task);
        if(oUser.isPresent()){
            var user = oUser.get();
            taskRepository.save(user.getUsername(), task);
            task.getInput().forEach(input -> this.loadQuestionnaireIfInputIsQuestionnaire(user.getUsername(), input));
        }else {
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

    private void loadQuestionnaireIfInputIsQuestionnaire(String username, Input input) {
        if (isQuestionnaire(input)) {
            loadQuestionnaire(username, input);
        }
    }

    private boolean isQuestionnaire(Input input) {
        return input.getType().getCoding().stream().map(Coding::getCode).anyMatch(CODE_QUESTIONNAIRE::equals);
    }

    private void loadQuestionnaire(String username, Input input) {
        String url = input.getValueCanonical();
        log.info("Questionnaire found (url={})", url);
        questionnaireClient
                .findByUrl(url)
                .ifPresentOrElse(questionnaire -> addQuestionnaire(username, questionnaire), () -> logEmptyQuestionnaire(url));
    }

    private void addQuestionnaire(String username, Questionnaire questionnaire) {
        log.info("Add questionnaire (id={})", questionnaire.getId());
        questionnaireRepository.save(username, questionnaire);
    }

    private void logEmptyQuestionnaire(String url) {
        log.warn("No questionnaire found at url={}", url);
    }

    public Optional<Questionnaire> findByUsernameAndId(String username, String id) {
        return questionnaireRepository.findByUsernameAndId(username, id);
    }

    public List<Questionnaire> findByUsername(String username) {
        log.info("Find questionnaires by username ({})", username);
        return questionnaireRepository.findByUsername(username);
    }

}
