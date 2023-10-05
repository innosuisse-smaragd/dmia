import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ReviewRoute() {
  const navigate = useNavigate();

  const handleEndQuestionnaire = () => {
    navigate("/end");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <h1>Bitte überprüfen Sie Ihre Antwort</h1>
      <p>
        dieser Bildschirm dient zu Testzwecken. Um eine Sitzung zu starten,
        klicken Sie bitte auf die Schaltfläche unten
      </p>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem" }}
        onClick={handleEndQuestionnaire}
      >
        Fragebogen senden
      </Button>
    </Box>
  );
}

export default ReviewRoute;
