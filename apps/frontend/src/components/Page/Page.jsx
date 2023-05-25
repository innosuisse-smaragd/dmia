import { Box } from "@mui/material";

import NavBar from "./NavBar";
import Onboarding from "./Onboarding";

// Container component for the app content
function Page() {
  return (
    <Box width="100%" height="100%">
      <Box height="10%">
        <NavBar />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Onboarding />
      </Box>
    </Box>
  );
}

export default Page;
