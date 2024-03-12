package org.bfh.smaragd.dmia.security;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.DmiaProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Service
@Slf4j
@AllArgsConstructor
public class JwtTokenService {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String AUTHORIZATION_PREFIX = "Bearer ";
    private static final SecretKey SECRET_KEY = Jwts.SIG.HS256.key().build();

    private final DmiaProperties dmiaProperties;

    public String createToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        Date now = new Date();
        int expirationMs = dmiaProperties.getSecurity().getTokenExpirationMin() * 60 * 1000;
        Date expiryDate = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(SECRET_KEY)
                .compact();
    }


    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(AUTHORIZATION_PREFIX)) {
            return bearerToken.substring(AUTHORIZATION_PREFIX.length());
        }
        return null;
    }
    public boolean validateToken(String token) {
        try {
            Jwts.parser().verifyWith(SECRET_KEY).build().parseSignedClaims(token);
            return true;
        } catch (JwtException ex) {
            log.error("JWT cannot be parsed or validated", ex);
        } catch (IllegalArgumentException ex) {
            log.error("JWT is null or empty or only whitespace", ex);
        }
        return false;
    }

    public String getUsername(String token) {
        return Jwts.parser()
                .verifyWith(SECRET_KEY).build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}
