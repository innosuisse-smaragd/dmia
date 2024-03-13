package org.bfh.smaragd.dmia.domain.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ValueCoding {
    private String system;
    private String code;
    private String display;
}
