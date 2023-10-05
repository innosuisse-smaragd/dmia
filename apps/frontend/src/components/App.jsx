import { Box } from "@mui/material";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Error from "./Error";
import NavBar from "./Page/NavBar";

import Page from "./Page/Page";
import ChatRoute from "../routes/ChatRoute";
import HomeRoute from "../routes/HomeRoute";
import ReviewRoute from "../routes/ReviewRoute";
import EndRoute from "../routes/EndRoute";

function App() {
  // const [showChat, setShowChat] = useState(false);
  const fontSize = useSelector(selectSelectedFontSize);

  // Used to allow users to change the font size
  const theme = createTheme({ typography: { fontSize } });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
      errorElement: <HomeRoute />,
    },
    {
      path: "/chat",
      element: <ChatRoute />,
      errorElement: <HomeRoute />,
    },
    {
      path: "/uberprufen",
      element: <ReviewRoute />,
      errorElement: <HomeRoute />,
    },
    {
      path: "/end",
      element: <EndRoute />,
      errorElement: <HomeRoute />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
      errorElement: <HomeRoute />,
    },
  ]);

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
        <Box width="100%" height="100%">
          <Box height="10%">
            <NavBar />
          </Box>
          <Box display="flex" justifyContent="center" height="90%">
            <RouterProvider router={router} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
