package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Meta {
    private List<String> profile;
}
