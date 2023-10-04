import { Box } from "@mui/material";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";

import Page from "./Page/Page";

function App() {
  // const [showChat, setShowChat] = useState(false);
  const fontSize = useSelector(selectSelectedFontSize);

  // Used to allow users to change the font size
  const theme = createTheme({ typography: { fontSize } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        <Page />
      </Box>
    </ThemeProvider>
  );
}

export default App;
