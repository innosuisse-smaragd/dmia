import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Page/NavBar";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";

function EndRoute() {
  const navigate = useNavigate();
  const onEndSession = () => {
    navigate("/home");
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
      <Box width="100%" height="100%">
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
            <h1>Dies ist das Ende der Testsitzung</h1>
            <p>
              Um eine neue Sitzung zu starten, klicken Sie bitte auf die
              Schaltfläche unten
            </p>
            <Button
              variant="contained"
              sx={{ marginTop: "2rem" }}
              onClick={onEndSession}
            >
              Neue Sitzung starten
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EndRoute;
