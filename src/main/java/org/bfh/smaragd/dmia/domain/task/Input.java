package org.bfh.smaragd.dmia.domain.task;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Input {
    private Type type;
    private String valueCanonical;
    private String valueUrl;
}
