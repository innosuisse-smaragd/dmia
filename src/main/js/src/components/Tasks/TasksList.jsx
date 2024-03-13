import { useEffect, useState } from "react";
import { fetchTasks } from "../../api/tasks";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../slices/tokenSlice";
import { Container } from "@mui/material";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  let authToken = useSelector(selectAuthToken);

  useEffect(() => {
    const fetchTasksData = async () => {
      const response = await fetchTasks();

      setTasks(response);
    };

    fetchTasksData();
  }, []);

  return (
    <>
      {tasks.length !== 0 ? (
        <Container
          sx={{
            mb: 3,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {tasks.map((task, index) => {
            return <TaskCard key={index} task={task} />;
          })}
        </Container>
      ) : (
        <h3 style={{ marginTop: "35%" }}>
          Zurzeit sind Ihnen keine Aufgaben zugewiesen
        </h3>
      )}
    </>
  );
}

export default TasksList;
