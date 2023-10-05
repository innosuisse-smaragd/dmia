import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EndRoute() {
  const navigate = useNavigate();

  const onEndSession = () => {
    navigate("/home");
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
      <h1>Dies ist das Ende der Testsitzung</h1>
      <p>
        Um eine neue Sitzung zu starten, klicken Sie bitte auf die Schaltfläche
        unten
      </p>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem" }}
        onClick={onEndSession}
      >
        Neue Sitzung starten
      </Button>
    </Box>
  );
}

export default EndRoute;
