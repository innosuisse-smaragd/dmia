package org.bfh.smaragd.dmia.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bfh.smaragd.dmia.domain.user.User;
import org.bfh.smaragd.dmia.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public boolean exist(String fullName) {
        return userRepository.findByUsername(fullName).isPresent();
    }

    public User save(String username, String password) {
        log.info("add user {}", username);
        var user = new User(username, passwordEncoder.encode(password));
        userRepository.save(user);
        return new User(user.getUsername(), user.getPassword());
    }

    public void removeByUsername(String username) {
        userRepository.remove(username);
    }
}
