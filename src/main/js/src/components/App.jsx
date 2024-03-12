import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ChatRoute from "../routes/ChatRoute";
import HomeRoute from "../routes/HomeRoute";
import ReviewRoute from "../routes/ReviewRoute";
import EndRoute from "../routes/EndRoute";
import TasksRoute from "../routes/TasksRoute";

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
      path: "/tasks",
      element: <TasksRoute />,
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
