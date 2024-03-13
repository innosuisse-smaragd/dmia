package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Questionnaire {
    private String resourceType;
    private String title;
    private String version;
    private String status;
    private String publisher;
    private Meta meta;
    private String date;
    private String url;
    private List<Item> item;
}
