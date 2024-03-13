package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.stereotype.Repository;

import java.util.*;


@Repository
@AllArgsConstructor
public class TaskRepository {

    private final Map<TaskKey, Task> tasks = new HashMap<>();

    public void save(String username, Task task) {
        var id = task.getId();
        var key = new TaskKey(username, id);
        tasks.put(key, task);
    }

    public Optional<Task> findByUsernameAndId(String username, String id) {
        if (username != null && id != null) {
            return tasks
                    .entrySet()
                    .stream()
                    .filter(key -> username.equals(key.getKey().username()) && id.equals(key.getKey().taskId()))
                    .map(Map.Entry::getValue)
                    .findAny();
        }
        return Optional.empty();
    }

    public List<Task> findByUsername(String username) {
        if (username != null) {
            return tasks
                    .entrySet()
                    .stream()
                    .filter(key -> username.equals(key.getKey().username()))
                    .map(Map.Entry::getValue)
                    .toList();
        }
        return Collections.emptyList();
    }


    private record TaskKey(String username, String taskId) {
    }

}
