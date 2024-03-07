package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bfh.smaragd.dmia.domain.common.Meta;
import org.bfh.smaragd.dmia.domain.common.Text;

import java.util.List;

@Data
@NoArgsConstructor
public class Questionnaire {
    private String resourceType;
    private String id;
    private Meta meta;
    private Text text;
    private String url;
    private String version;
    private String title;
    private String status;
    private String date;
    private String publisher;
    private List<Contact> contact;
    private List<Jurisdiction> jurisdiction;
    private List<Item> item;
}
