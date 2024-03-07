package org.bfh.smaragd.dmia.domain.task;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bfh.smaragd.dmia.domain.common.Meta;

import java.util.List;

@Data
@NoArgsConstructor
public class Contained {
    private String resourceType;
    private String id;
    private Meta meta;
    private List<Name> name;
    private String gender;
    private String birthDate;
    private List<DeviceName> deviceName;
}
