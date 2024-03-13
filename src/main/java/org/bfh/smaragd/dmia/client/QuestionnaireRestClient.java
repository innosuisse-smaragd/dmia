package org.bfh.smaragd.dmia.client;

import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.DmiaProperties;
import org.bfh.smaragd.dmia.Profiles;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.bfh.smaragd.dmia.domain.response.Response;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Profile("!" + Profiles.MOCK_REST_CLIENT)
@Slf4j
public class QuestionnaireRestClient implements QuestionnaireClient {

    private final RestTemplate restTemplate;
    private final DmiaProperties dmiaProperties;

    @Autowired
    public QuestionnaireRestClient(RestTemplateBuilder builder, DmiaProperties dmiaProperties) {
        this.restTemplate = builder.build();
        this.dmiaProperties = dmiaProperties;
    }

    @Override
    public Optional<Questionnaire> findByUrl(String url) {
        Questionnaire questionnaire = null;
        try {
            log.info("Get questionnaire (url: {})", url);
            questionnaire = restTemplate.getForObject(
                    url, Questionnaire.class);
        } catch (RestClientException e) {
            log.warn("Fail to get questionnaire", e);
        }
        return Optional.ofNullable(questionnaire);
    }

    @Override
    public String createResponse(String url, Response response) {
        try {
            log.info("Create response (url: {})", url);
            HttpEntity<Response> request = new HttpEntity<>(response);
            return restTemplate.postForObject(url, request, String.class);
        } catch (RestClientException e) {
            log.warn("Fail to create response", e);
        }
        return "unknown";
    }

    @Override
    public void updateTask(Task task) {
        try {
            var url = dmiaProperties.getWebClient().getUpdateTaskUrl() + task.getId();
            log.info("update task (url: {})", url);
            HttpEntity<Task> request = new HttpEntity<>(task);
            restTemplate.exchange(url, HttpMethod.PUT, request, Void.class);
        } catch (RestClientException e) {
            log.warn("Fail to create response", e);
        }
    }
}
