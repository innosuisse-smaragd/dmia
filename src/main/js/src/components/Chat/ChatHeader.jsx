import { Avatar, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function ChatHeader() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        borderBottom: "solid 1px #ddd",
        p: 1,
        pb: 2,
      }}
    >
      <Avatar sx={{ bgcolor: blue[700] }}>M</Avatar>
      <Typography variant="h6" sx={{ marginLeft: 1 }}>
        Mia
      </Typography>
    </Stack>
  );
}

export default ChatHeader;
