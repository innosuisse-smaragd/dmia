import PropTypes from "prop-types";
import { Container, IconButton, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Container component for the chat section of the app
function Chat({ onClose, showChat }) {
  return (
    <Slide direction="left" in={showChat} mountOnEnter unmountOnExit>
      <Container maxWidth="xs" sx={{ height: "100%" }}>
        <div>Chat goes here</div>
        <IconButton onClick={() => onClose()}>
          <CloseIcon />
        </IconButton>
      </Container>
    </Slide>
  );
}

Chat.propTypes = {
  onClose: PropTypes.func.isRequired,
  showChat: PropTypes.bool.isRequired,
};

export default Chat;
