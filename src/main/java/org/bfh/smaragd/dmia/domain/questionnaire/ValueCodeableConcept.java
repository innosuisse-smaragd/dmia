package org.bfh.smaragd.dmia.domain.questionnaire;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bfh.smaragd.dmia.domain.common.Coding;

import java.util.List;

@Data
@NoArgsConstructor
public class ValueCodeableConcept {
    private List<Coding> coding;
}
