package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EnableWhen {
    private String question;
    private String operator;
    private AnswerCoding answerCoding;
}
