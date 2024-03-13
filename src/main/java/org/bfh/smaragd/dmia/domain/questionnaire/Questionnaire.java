package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Questionnaire {
    private String resourceType;
    private String id;
    private Meta meta;
    private String url;
    private String version;
    private String title;
    private String status;
    private String date;
    private String publisher;
    private List<Item> item;
}
