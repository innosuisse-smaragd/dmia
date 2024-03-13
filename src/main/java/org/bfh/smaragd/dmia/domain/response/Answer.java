package org.bfh.smaragd.dmia.domain.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Answer {
    private String valueString;
    private ValueCoding valueCoding;
    private String valueDate;
    private int valueDecimal;
}
