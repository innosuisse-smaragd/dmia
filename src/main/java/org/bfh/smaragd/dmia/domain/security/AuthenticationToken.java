package org.bfh.smaragd.dmia.domain.security;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationToken {
    private final String accessToken ;
}
