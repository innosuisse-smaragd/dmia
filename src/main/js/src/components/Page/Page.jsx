import { Box } from "@mui/material";

import NavBar from "./NavBar";
import Chat from "../Chat/Chat";

// Container component for the app content
function Page() {
  return (
    <Box width="100%" height="100%">
      <Box height="10%">
        <NavBar />
      </Box>
      <Box display="flex" justifyContent="center" height="90%">
        <Chat />
      </Box>
    </Box>
  );
}

export default Page;
