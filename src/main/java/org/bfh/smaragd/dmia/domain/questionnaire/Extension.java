package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Extension {
    private String url;
    private ValueAttachment valueAttachment;
}
