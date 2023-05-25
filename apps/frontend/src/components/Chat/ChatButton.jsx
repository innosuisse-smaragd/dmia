import PropTypes from "prop-types";
import { Fade, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

// Button component responsible to show the chat section
function ChatButton({ onClick, showChat }) {
  return (
    <Fade in={!showChat} mountOnEnter unmountOnExit>
      <IconButton
        aria-label="Show Chat"
        color="primary"
        size="large"
        sx={{ position: "fixed", bottom: "16px", right: "16px" }}
        onClick={() => onClick()}
      >
        <ChatIcon sx={{ fontSize: "4rem" }} />
      </IconButton>
    </Fade>
  );
}

ChatButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showChat: PropTypes.bool.isRequired,
};

export default ChatButton;
