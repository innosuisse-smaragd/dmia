import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import ChatHeader from "../Chat/ChatHeader";
import ChatInput from "../Chat/ChatInput";

function Onboarding() {
  const [inputDisabled, setInputDisabled] = useState(true);

  useEffect(() => {
    let objDiv = document.getElementById("auto-scroll");
    objDiv.scrollIntoView();
  });

  const handleNewMessage = (message) => {
    console.log("hello");
  };

  const renderInputField = () => {
    return (
      <ChatInput
        onClick={handleNewMessage}
        isDisabled={inputDisabled}
        setInputDisabled={setInputDisabled}
      />
    );
  };

  return (
    <Stack sx={{ width: "100%", maxWidth: 1200, px: 4 }}>
      <ChatHeader />

      {/* ----- Chat Content ----- */}
      <Stack
        sx={{
          mt: 4,
          pl: 1,
          pr: 2,
          flex: 1,
          maxHeight: "100%",
          overflowY: "scroll",
        }}
        id="chat-content"
      >
        <div id="auto-scroll"></div>
      </Stack>
      {inputDisabled ? (
        <Typography
          sx={{ pl: "8px", pb: "4px", color: "grey", fontSize: ".8rem" }}
        >
          Tippen...
        </Typography>
      ) : (
        ""
      )}
      {renderInputField()}
    </Stack>
  );
}

export default Onboarding;
