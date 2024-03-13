package org.bfh.smaragd.dmia.service;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.bfh.smaragd.dmia.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TaskSearchService {
    private final TaskRepository taskRepository;

    public Optional<Task> findByUsernameAndId(String username, String id) {
        return taskRepository.findByUsernameAndId(username, id);
    }

    public List<Task> findByUsername(String username) {
        return taskRepository.findByUsername(username);
    }

    public List<Task> findAll() {
        return taskRepository.findAll();
    }
}
