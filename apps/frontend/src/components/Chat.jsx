import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Chat({ onClose }) {
  return (
    <>
      <div>Chat goes here</div>
      <IconButton onClick={() => onClose()}>
        <CloseIcon />
      </IconButton>
    </>
  );
}

Chat.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Chat;
