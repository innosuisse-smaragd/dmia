package org.bfh.smaragd.dmia.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Type {
    private List<Coding> coding;
}
