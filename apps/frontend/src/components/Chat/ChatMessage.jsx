import PropTypes from "prop-types";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";

// TODO: Add typing status

function ChatMessage({
  user = false,
  text,
  typing,
  delay,
  inputDisabled,
  isLast,
}) {
  const [message, setMessage] = useState(<></>);
  const timeout = typing ? 2000 : 0;
  let waitBeforeRender = typing ? delay - timeout : 0;
  const messageStyles = user
    ? { color: "#fff", backgroundColor: blue[700] }
    : { color: blue[700] };

  const renderText = () => {
    if (Array.isArray(text)) {
      console.log("Is array");
      return (
        <ul style={{ margin: 0, padding: "0 0 0 1rem" }}>
          {text.map((t, key) => (
            <li key={key}>{t}</li>
          ))}
        </ul>
      );
    } else {
      return <Typography>{text}</Typography>;
    }
  };

  const content = (
    <Fade in={true}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          alignSelf: user ? "flex-end" : "flex-start",
          mt: 1,
          my: 1,
          width: "50%",
          "&:first-of-type": {
            mt: 4,
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: blue[700],
            width: 30,
            height: 30,
            fontSize: 16,
            mr: 1,
            display: user ? "none" : "flex",
          }}
        >
          M
        </Avatar>
        <Box
          sx={{
            ...messageStyles,
            height: "auto",
            width: "fit-content",
            py: 1,
            px: 2,
            border: `1px solid ${blue[700]}`,
            borderRadius: 1,
            marginLeft: user ? "auto" : "0",
          }}
        >
          {renderText()}
        </Box>
      </Stack>
    </Fade>
  );

  useEffect(() => {
    setTimeout(() => {
      setMessage(content);
      if (isLast) {
        inputDisabled(false);
      }
      setTimeout(() => {
        let objDiv = document.getElementById("chat-content");
        objDiv.scrollTop = objDiv.scrollHeight - 500;
      }, 10);
    }, waitBeforeRender);
  }, []);

  return message;
}

ChatMessage.propTypes = {
  user: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  typing: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  inputDisabled: PropTypes.func,
};

export default ChatMessage;
