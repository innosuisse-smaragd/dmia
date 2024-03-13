package org.bfh.smaragd.dmia.domain.common;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Name {
    private String family;
    private List<String> given;
}
