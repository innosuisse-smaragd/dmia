package org.bfh.smaragd.dmia;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "dmia")
@Data
public class DmiaProperties {

    private Security security;

    private WebClient webClient;

    @Data
    public static class Security {
        private int tokenExpirationMin = 60;
    }

    @Data
    public static class WebClient {
        private String updateTaskUrl = "http://51.107.41.3:8080/smaragd/fhir/Task/269";
    }

}
