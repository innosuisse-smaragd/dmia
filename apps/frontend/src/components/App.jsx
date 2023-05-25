import { useState } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";

import Page from "./Page/Page";
import Chat from "./Chat/Chat";
import ChatButton from "./Chat/ChatButton";

function App() {
  const [showChat, setShowChat] = useState(false);
  const fontSize = useSelector(selectSelectedFontSize);

  // Used to allow users to change the font size
  const theme = createTheme({ typography: { fontSize } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          ...(fontSize === 14 && {
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
          }),
        }}
      >
        <Page />
        <ChatButton onClick={() => setShowChat(true)} showChat={showChat} />
        <Chat onClose={() => setShowChat(false)} showChat={showChat} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
