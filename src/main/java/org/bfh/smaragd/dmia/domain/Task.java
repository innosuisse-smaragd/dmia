package org.bfh.smaragd.dmia.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Task {
    private String resourceType;
    private String id;
    private Meta meta;
    private Text text;
    private List<Contained> contained;
    private String status;
    private String intent;
    private Code code;
    @JsonProperty("for")
    private For myfor;
    private String authoredOn;
    private Requester requester;
    private List<Input> input;
    private List<Output> output;

}
