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
      <Box padding="5rem">
        <Box height="10%">
          <NavBar />
        </Box>
        <TasksList />
      </Box>
    </Box>
  );
}

export default TasksRoute;
