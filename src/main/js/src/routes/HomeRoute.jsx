import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedFontSize } from "../slices/themeSlice";
import NavBar from "../components/Page/NavBar";
import { useState } from "react";
import { login } from "../api/authentication";
import { fetchTasks } from "../api/tasks";
import Onboarding from "../components/Onboarding/Onboarding";

function HomeRoute() {
  const navigate = useNavigate();
  const fontSize = useSelector(selectSelectedFontSize);
  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);

  const onLogin = async () => {
    console.log("LOGIN WAS CLICKED");
    const newToken = await login();
    setToken(newToken);
  };

  const onFetchTasks = async () => {
    console.log("FETCH TASKS WAS CLICKED");
    const newTasks = await fetchTasks(token);
    setTasks(newTasks);
  };

  console.log("Token:", token);
  console.log("Tasks:", tasks);

  const onStartSession = () => {
    navigate("/tasks");
  };

  return (
    <Box
      sx={{
        // When font size is 16px apply these styles
        ...(fontSize === 14 && {
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
        }),
      }}
    >
      <Box width="100%" height="100%">
        <Box height="10%">
          <NavBar />
        </Box>
        <Box display="flex" justifyContent="center" height="90%">
          <Onboarding />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeRoute;
