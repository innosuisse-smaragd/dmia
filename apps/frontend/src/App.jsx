import { useState } from "react";

import { Box, Container, Fade, Slide, Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import Page from "./components/Page";
import Chat from "./components/Chat";

function App() {
  const [showChat, setShowChat] = useState(false);

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
          <ChatIcon
            sx={{
              fontSize: "3rem",
            }}
          />
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
    <Box width="100vw" height="100vh">
      <Stack sx={{ height: "100%", overflowX: "hidden" }} direction="row">
        <Page />
        {renderChatButton()}
        {renderChat()}
      </Stack>
    </Box>
  );
}

export default App;
