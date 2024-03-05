package org.bfh.smaragd.dmia.domain.task;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Name {
    private String family;
    private List<String> given;
}
