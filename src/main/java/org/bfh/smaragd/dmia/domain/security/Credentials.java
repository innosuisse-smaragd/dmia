package org.bfh.smaragd.dmia.domain.security;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Credentials {
    private String username;
    private String password;
}
