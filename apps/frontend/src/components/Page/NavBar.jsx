import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { useSelector } from "react-redux";
import { selectGrow } from "../../slices/themeSlice";

import FontSizeSelector from "./FontSizeSelector";

// Component used to display top navigation
function NavBar() {
  const grow = useSelector(selectGrow);

  // Custom tool bar that grows with the font size
  const StyledToolbar = styled(Toolbar)(() => ({
    "@media all": {
      minHeight: 64 * grow,
    },
  }));

  return (
    <AppBar position="static">
      <StyledToolbar>
        <MedicalInformationIcon sx={{ display: "flex", mr: 1 * grow }} />
        <Typography variant="h5" noWrap sx={{ display: "flex", mr: 2 * grow }}>
          Mia
        </Typography>
        <FontSizeSelector />
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
