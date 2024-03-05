package org.bfh.smaragd.dmia.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Code {
    private List<Coding> coding;
}
