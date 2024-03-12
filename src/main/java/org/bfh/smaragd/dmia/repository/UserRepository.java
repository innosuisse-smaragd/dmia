package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@Repository
@AllArgsConstructor
public class UserRepository {

    private final Map<String, User> users = new HashMap<>();

    public void save(User user) {
        users.put(user.getUsername(), user);
    }

    public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(username).map(users::get);
    }

    public void remove(String username) {
        if (username != null) {
            users.remove(username);
        }
    }
}
