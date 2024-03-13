import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";
import NavBar from "../components/Page/NavBar";
import Onboarding from "../components/Onboarding/Onboarding";
import TasksList from "../components/Tasks/TasksList";

function HomeRoute() {
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

export default HomeRoute;
