import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import NavBar from "../components/Page/NavBar";
import TasksList from "../components/Tasks/TasksList";
import { selectSelectedFontSize } from "../slices/themeSlice";

function TasksRoute() {
  const fontSize = useSelector(selectSelectedFontSize);

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
      <Box width="100%" height="100%" padding="5rem">
        <Box height="10%">
          <NavBar />
        </Box>
        <Box display="flex" justifyContent="center" height="90%">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "5rem",
            }}
          >
            <TasksList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TasksRoute;
