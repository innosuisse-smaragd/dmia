package org.bfh.smaragd.dmia.domain.response;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bfh.smaragd.dmia.domain.common.Meta;
import org.bfh.smaragd.dmia.domain.common.Text;

import java.util.List;

@Data
@NoArgsConstructor
public class Response {
    private String resourceType;
    private String id;
    private Meta meta;
    private Text text;
    private List<Contained> contained;
    private String questionnaire;
    private String status;
    private String authored;
    private Source source;
    private List<Item> item;
}
