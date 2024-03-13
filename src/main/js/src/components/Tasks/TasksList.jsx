import { useEffect, useState } from "react";
import { fetchTasks } from "../../api/tasks";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthToken, selectAuthToken } from "../../slices/tokenSlice";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let authToken = useSelector(selectAuthToken);

  useEffect(() => {
    const fetchTasksData = async () => {
      const response = await fetchTasks(authToken);

      setTasks(response);
    };

    if (authToken !== "") {
      fetchTasksData();
    } else {
      navigate("/");
    }
  }, [authToken]);

  const onLogout = () => {
    dispatch(changeAuthToken(""));
    authToken = "";
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={onLogout}
          sx={{ mt: 5 }}
          size="large"
        >
          Abmeldung
        </Button>
      </Box>
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
