package org.bfh.smaragd.dmia.domain.task;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Output {
    private Type type;
    private ValueReference valueReference;
}
