import { Box } from "@mui/material";
import Chat from "../components/Chat/Chat";
import NavBar from "../components/Page/NavBar";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";

function ChatRoute() {
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
      className="main"
    >
      <Box width="100%" height="100%">
        <Box height="10%">
          <NavBar />
        </Box>
        <Box display="flex" justifyContent="center" height="90%">
          <Chat />
        </Box>
      </Box>
    </Box>
  );
}

export default ChatRoute;
