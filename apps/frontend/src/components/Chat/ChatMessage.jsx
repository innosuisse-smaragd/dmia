import PropTypes from "prop-types";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

// TODO: Add typing status

function ChatMessage({ user = false, text }) {
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

  const messageStyles = user
    ? { color: "#fff", backgroundColor: blue[700] }
    : { color: blue[700] };

  return (
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
  );
}

ChatMessage.propTypes = {
  user: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default ChatMessage;
