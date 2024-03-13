package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class Meta {
    private String versionId;
    private Date lastUpdated;
    private String source;
    private List<String> profile;
}
