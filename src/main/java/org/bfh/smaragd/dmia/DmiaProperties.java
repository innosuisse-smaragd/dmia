package org.bfh.smaragd.dmia;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "dmia")
@Data
public class DmiaProperties {

    private Security security;

    @Data
    public static class Security {
        private int tokenExpirationMin = 60;
    }

}
