package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Item {
    private List<Extension> extension;
    private String linkId;
    private String text;
    private String type;
    private List<AnswerOption> answerOption;
    private String definition;
    private boolean required;
    private List<Item> item;
    private String answerValueSet;
}
