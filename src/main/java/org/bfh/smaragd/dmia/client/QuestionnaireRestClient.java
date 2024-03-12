package org.bfh.smaragd.dmia.client;

import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.Profiles;
import org.bfh.smaragd.dmia.domain.questionnaire.Questionnaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Profile("!" + Profiles.MOCK_REST_CLIENT)
@Slf4j
public class QuestionnaireRestClient implements QuestionnaireClient {

    private RestTemplate restTemplate;

    @Autowired
    public QuestionnaireRestClient(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

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
}
