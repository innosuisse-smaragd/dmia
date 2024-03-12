import { useEffect, useState } from "react";
import { fetchTasks } from "../../api/tasks";
import TaskCard from "./TaskCard";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  useEffect(() => {
    const fetchTasksData = async () => {
      // TODO ADD TOKEN
      const response = await fetchTasks();

      console.log(response);

      setTasks(response);
    };

    fetchTasksData();
  }, []);

  return (
    <>
      {tasks.map((task, index) => {
        return <TaskCard key={index} task={task} />;
      })}
    </>
  );
}

export default TasksList;
