package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import lombok.Data;
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
                    .filter(key -> username.equals(key.getKey().getUsername()) && id.equals(key.getKey().getTaskId()))
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
                    .filter(key -> username.equals(key.getKey().getUsername()))
                    .map(Map.Entry::getValue)
                    .toList();
        }
        return Collections.emptyList();
    }

    public List<Task> findAll() {
        return tasks
                .entrySet()
                .stream()
                .map(Map.Entry::getValue)
                .toList();
        
    }

    public void removeByUsernameAndTaskId(String username, String taskId) {
        var key = new TaskKey(username, taskId);
        tasks.remove(key);
    }


    @Data
    static class TaskKey {
        private final String username;
        private final String taskId;
    }

}
