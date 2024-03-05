package org.bfh.smaragd.dmia.domain.task;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bfh.smaragd.dmia.domain.common.Coding;

import java.util.List;

@Data
@NoArgsConstructor
public class Code {
    private List<Coding> coding;
}
