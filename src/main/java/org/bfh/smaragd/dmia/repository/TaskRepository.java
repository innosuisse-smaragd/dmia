package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Repository
@AllArgsConstructor
public class TaskRepository {

    private final Map<String, Task> tasks = new HashMap<>();

    public void save(Task task) {
        tasks.put(task.getId(), task);
    }

    public Optional<Task> findById(String id) {
        return Optional.ofNullable(id).map(tasks::get);
    }

    public List<Task> findAll() {
        return List.copyOf(tasks.values());
    }

    public void remove(String id) {
        if (id != null) {
            tasks.remove(id);
        }
    }
}
