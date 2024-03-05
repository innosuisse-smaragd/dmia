import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedFontSize } from "../slices/themeSlice";
import NavBar from "../components/Page/NavBar";

function HomeRoute() {
  const navigate = useNavigate();
  const onStartSession = () => {
    navigate("/chat");
  };
  const fontSize = useSelector(selectSelectedFontSize);

  return (
    <Box
      sx={{
        // When font size is 16px apply these styles
        ...(fontSize === 14 && {
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
        }),
      }}
    >
      <Box width="100%" height="100%" padding="5rem">
        <Box height="10%">
          <NavBar />
        </Box>
        <Box display="flex" justifyContent="center" height="90%">
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
              dieser Bildschirm dient zu Testzwecken. Um eine Sitzung zu
              starten, klicken Sie bitte auf die Schaltfläche unten
            </p>
            <Button
              variant="contained"
              sx={{ marginTop: "2rem" }}
              onClick={onStartSession}
            >
              Sitzung starten
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeRoute;
