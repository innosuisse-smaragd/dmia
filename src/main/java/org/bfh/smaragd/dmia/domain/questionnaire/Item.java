package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Item {
    private String linkId;
    private String text;
    private String type;
    private boolean required;
    private List<Item> item;
    private List<Extension> extension;
    private boolean repeats;
    private List<AnswerOption> answerOption;
    private List<EnableWhen> enableWhen;
}
