package org.bfh.smaragd.dmia.domain.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Item {
    private String linkId;
    private String text;
    private List<Answer> answer;
    private String definition;
    private List<Item> item;
}
