import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFontSize } from "../slices/themeSlice";
import { Box, Stack } from "@mui/material";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import Page from "./Page/Page";
import Chat from "./Chat/Chat";
import ChatButton from "./Chat/ChatButton";

function App() {
  const [showChat, setShowChat] = useState(false);
  const fontSize = useSelector(selectFontSize);

  // Used to allow users to change the font size
  const theme = createTheme({ typography: { fontSize } });

  const renderChatButton = () => {
    return <ChatButton onClick={() => setShowChat(true)} showChat={showChat} />;
  };

  const renderChat = () => {
    return <Chat onClose={() => setShowChat(false)} showChat={showChat} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100vw" height="100vh">
        <Stack sx={{ height: "100%", overflowX: "hidden" }} direction="row">
          <Page />
          {renderChatButton()}
          {renderChat()}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
