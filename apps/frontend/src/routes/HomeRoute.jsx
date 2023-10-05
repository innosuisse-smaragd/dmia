import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomeRoute() {
  const navigate = useNavigate();

  const onStartSession = () => {
    navigate("/chat");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "5rem",
        }}
      >
        <h1>Willkommen bei Mia</h1>
        <p>
          dieser Bildschirm dient zu Testzwecken. Um eine Sitzung zu starten,
          klicken Sie bitte auf die Schaltfläche unten
        </p>
        <Button
          variant="contained"
          sx={{ marginTop: "2rem" }}
          onClick={onStartSession}
        >
          Sitzung starten
        </Button>
      </Box>
    </>
  );
}

export default HomeRoute;
