package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.stereotype.Repository;

import java.util.*;


@Repository
@AllArgsConstructor
public class TaskRepository {

    //Key: username
    //Value: set of ids
    private final Map<String, Set<String>> usernameLookup = new HashMap<>();

    private final Map<String, Task> tasks = new HashMap<>();

    public void save(String username, Task task) {
        var id = task.getId();
        tasks.put(id, task);
        updateUsernameLookup(username, id);
    }

    private void updateUsernameLookup(String username, String id) {
        var ids = usernameLookup.getOrDefault(username, new HashSet<>());
        ids.add(id);
        usernameLookup.put(username, ids);
    }

    public Optional<Task> findByUsernameAndId(String username, String id) {
        Task task = null;
        if (username != null && id != null) {
            boolean idBelongToUsername = usernameLookup.getOrDefault(username, Collections.emptySet()).contains(id);
            if (idBelongToUsername) {
                task = tasks.get(id);
            }
        }
        return Optional.ofNullable(task);
    }

    public List<Task> findByUsername(String username) {
        List<Task> results = Collections.emptyList();
        if (username != null) {
            results = usernameLookup
                    .getOrDefault(username, Collections.emptySet())
                    .stream()
                    .map(tasks::get)
                    .toList();
        }
        return results;
    }

    public void remove(String username, String id) {
        findByUsernameAndId(username, id).ifPresent(entity -> {
            usernameLookup.getOrDefault(username, Collections.emptySet()).remove(id);
            tasks.remove(id);
        });
    }


}
