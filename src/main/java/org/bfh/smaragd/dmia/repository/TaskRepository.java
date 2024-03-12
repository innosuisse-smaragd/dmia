package org.bfh.smaragd.dmia.repository;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.domain.task.Task;
import org.springframework.stereotype.Repository;


@Repository
@AllArgsConstructor
public class TaskRepository extends UsernameLookupRepository<Task> {

    @Override
    public String extractId(Task task) {
        return task.getId();
    }


}
