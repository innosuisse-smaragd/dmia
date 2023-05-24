import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFontSize, changeFontSize } from "./slices/themeSlice";
import { Box, Container, Fade, Slide, Stack } from "@mui/material";
import {
  IconButton,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import Page from "./components/Page";
import Chat from "./components/Chat";

function App() {
  const [showChat, setShowChat] = useState(false);
  const fontSize = useSelector(selectFontSize);
  const dispatch = useDispatch();

  const theme = createTheme({ typography: { fontSize } });

  const renderChatButton = () => {
    return (
      <Fade in={!showChat} mountOnEnter unmountOnExit>
        <IconButton
          aria-label="Show Chat"
          color="primary"
          size="large"
          sx={{ position: "fixed", bottom: "16px", right: "16px" }}
          onClick={() => setShowChat(true)}
        >
          <ChatIcon sx={{ fontSize: "4rem" }} />
        </IconButton>
      </Fade>
    );
  };

  const renderChat = () => {
    return (
      <Slide direction="left" in={showChat} mountOnEnter unmountOnExit>
        <Container maxWidth="xs" sx={{ height: "100%" }}>
          <Chat onClose={() => setShowChat(false)} />
        </Container>
      </Slide>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100vw" height="100vh">
        <Stack sx={{ height: "100%", overflowX: "hidden" }} direction="row">
          <button onClick={() => dispatch(changeFontSize())}>
            Change font size
          </button>
          <h1>Current font size: {fontSize}</h1>
          <Page />
          {renderChatButton()}
          {renderChat()}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
