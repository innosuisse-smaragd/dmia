import { useEffect, useState } from "react";
import { fetchTasks } from "../../api/tasks";
import TaskCard from "./TaskCard";
import { Container } from "@mui/material";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasksData = async () => {
      const response = await fetchTasks();
      setTasks(response);
    };

    fetchTasksData();

    let interval = setInterval(() => {
      fetchTasksData();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Container
        sx={{
          mb: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {tasks.length !== 0 ? (
          tasks.map((task, index) => {
            return <TaskCard key={index} task={task} />;
          })
        ) : (
          <h2 style={{ marginTop: "5rem" }}>
            Zurzeit sind Ihnen keine Aufgaben zugewiesen
          </h2>
        )}
      </Container>
    </>
  );
}

export default TasksList;
