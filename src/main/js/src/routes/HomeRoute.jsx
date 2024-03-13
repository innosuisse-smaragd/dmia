import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";
import NavBar from "../components/Page/NavBar";
import Onboarding from "../components/Onboarding/Onboarding";

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
