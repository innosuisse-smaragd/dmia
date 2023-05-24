import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeFontSize, selectFontSize } from "../../slices/themeSlice";

// Container component for the app content
function Page() {
  const fontSize = useSelector(selectFontSize);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(changeFontSize())}>
        Change font size
      </button>
      <h1>Current font size: {fontSize}</h1>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div>Page goes here</div>
      </Box>
    </>
  );
}

export default Page;
